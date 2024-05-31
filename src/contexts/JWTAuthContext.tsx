import { FC, ReactNode, createContext, useEffect, useReducer } from "react";
import type { User } from "src/models/user";
import { authApi } from "src/mocks/auth";
import PropTypes from "prop-types";
import { useLoginUserMutation } from "@/services/auth";
import { LoginResponseBody, MutationResponse, Role } from "@/types";
import { setCredentials } from "@/utils/auth";

interface AuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthContextValue extends AuthState {
  method: "JWT";
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, name: string, password: string) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type InitializeAction = {
  type: "INITIALIZE";
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type LoginAction = {
  type: "LOGIN";
  // payload: {
  //   user: User;
  // };
};

type LogoutAction = {
  type: "LOGOUT";
};

type RegisterAction = {
  type: "REGISTER";
  payload: {
    user: User;
  };
};

type Action = InitializeAction | LoginAction | LogoutAction | RegisterAction;

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers: Record<
  string,
  (state: AuthState, action: Action) => AuthState
> = {
  INITIALIZE: (state: AuthState, action: InitializeAction): AuthState => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state: AuthState, action: LoginAction): AuthState => {
    // const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      // user,
    };
  },
  LOGOUT: (state: AuthState): AuthState => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state: AuthState, action: RegisterAction): AuthState => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state: AuthState, action: Action): AuthState =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  method: "JWT",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  const [loginRequest] = useLoginUserMutation();

  useEffect(() => {
    const initialize = async (): Promise<void> => {
      try {
        const accessToken = JSON.parse(window.localStorage.getItem("auth"));

        if (accessToken) {
          // const user = await authApi.me(accessToken);

          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user: null,
            },
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    return new Promise(async (resolve, reject) => {
      const res = (await loginRequest({
        email,
        password,
        role: Role.Admin,
      })) as MutationResponse<LoginResponseBody>;
      if (res?.error) {
        reject(res?.error?.data?.error);
      } else {
        setCredentials(res.data);
        dispatch({
          type: "LOGIN",
          // payload: {},
        });
        resolve(res.data);
      }
    });
  };

  const logout = async (): Promise<void> => {
    localStorage.removeItem("auth");
    dispatch({ type: "LOGOUT" });
  };

  const register = async (
    email: string,
    name: string,
    password: string
  ): Promise<void> => {
    const accessToken = await authApi.register({ email, name, password });
    const user = await authApi.me(accessToken);

    localStorage.setItem("auth", accessToken);

    dispatch({
      type: "REGISTER",
      payload: {
        user,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "JWT",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
