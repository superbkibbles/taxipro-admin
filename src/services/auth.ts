import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_API_URL, BASE_APP_URL } from "@/constants";
import {
  FindEmailRequestBody,
  FindEmailResponseBody,
  GoogleLoginRequestBody,
  GoogleLoginResponseBody,
  MetamaskLoginResponseBody,
  MetamaskLoginRequestBody,
  LoginRequestBody,
  LoginResponseBody,
  ResetPasswordRequestBody,
  ResetPasswordResponseBody,
  SignupRequestBody,
  SignupResponseBody,
  GetNonceResponseBody,
} from "@/types";

export const getTenantId = (tenant?: string) =>
  process.env.APP_TENANT_CODE || tenant;

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL || "http://localhost:4001",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    checkoutSubscription: builder.mutation({
      query: (params) => ({
        url: "/users/stripeCheckout",
        method: "POST",
        body: params,
      }),
    }),
    loginUser: builder.mutation<LoginResponseBody, LoginRequestBody>({
      query: (data: LoginRequestBody) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      transformResponse: (data: LoginResponseBody) => data,
    }),
    googleLogin: builder.mutation<
      GoogleLoginResponseBody,
      GoogleLoginRequestBody
    >({
      query: (data: GoogleLoginRequestBody) => ({
        url: "/users/login/google",
        method: "POST",
        body: data,
      }),
      transformResponse: (data: LoginResponseBody) => data,
    }),
    googleLoginOrRegister: builder.mutation({
      query: (data: GoogleLoginRequestBody) => ({
        url: "/users/login-or-register/google",
        method: "POST",
        body: data,
      }),
    }),
    metamaskLogin: builder.mutation<
      MetamaskLoginResponseBody,
      MetamaskLoginRequestBody
    >({
      query: (data: MetamaskLoginRequestBody) => ({
        url: "/users/login/metamask",
        method: "POST",
        body: data,
      }),
      transformResponse: (data: LoginResponseBody) => data,
    }),
    getNonce: builder.mutation<GetNonceResponseBody, string>({
      query: (address: string) => ({
        url: `/users/nonce/${address}`,
        method: "GET",
      }),
      transformResponse: (data: GetNonceResponseBody) => data,
    }),
    findEmail: builder.mutation<FindEmailResponseBody, FindEmailRequestBody>({
      query: (data: FindEmailRequestBody) => ({
        url: "/users/findEmail",
        method: "POST",
        body: data,
      }),
      transformResponse: (data: FindEmailResponseBody) => data,
    }),
    resetPassword: builder.mutation<
      ResetPasswordResponseBody,
      ResetPasswordRequestBody
    >({
      query: (data: ResetPasswordRequestBody) => ({
        url: "/users/forgot/updatePassword",
        method: "POST",
        body: data,
      }),
      transformResponse: (data: ResetPasswordResponseBody) => data,
    }),
    verifyEmail: builder.query({
      query: ({ token, role }) => `/users/verifyEmail/${token}/${role}`,
    }),
    signupUser: builder.mutation<
      SignupResponseBody,
      SignupRequestBody & { confirmPassword?: string }
    >({
      query: (data: SignupRequestBody) => ({
        url: "/users/sign-up",
        method: "POST",
        body: data,
      }),
      transformResponse: (data: SignupResponseBody) => data,
    }),
    loginAfterSubscription: builder.mutation<
      LoginResponseBody,
      { sessionId: string }
    >({
      query: (data: { sessionId: string }) => ({
        url: `/users/loginAfterSubscription/${data.sessionId}`,
        method: "GET",
      }),
      transformResponse: (data: LoginResponseBody) => data,
    }),
    getCreatorPostsForHome: builder.query({
      query: (filter: any) => ({
        method: "GET",
        url: `/no-auth/posts`,
        params: { filter: JSON.stringify(filter) },
      }),
    }),
    downloadPdf: builder.mutation({
      query: (params) => {
        const url = new URL(`${BASE_APP_URL}/certificate/${params.pdfFile}`);
        url.searchParams.append("driver", params.driver);
        url.searchParams.append("company", params.company);
        url.searchParams.append("user", params.user);
        return {
          method: "GET",
          url: url.href,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginUserMutation,
  useSignupUserMutation,
  useVerifyEmailQuery,
  useResetPasswordMutation,
  useFindEmailMutation,
  useGoogleLoginMutation,
  useGoogleLoginOrRegisterMutation,
  useMetamaskLoginMutation,
  useGetNonceMutation,
  useGetCreatorPostsForHomeQuery,
  useCheckoutSubscriptionMutation,
  useLoginAfterSubscriptionMutation,
  useDownloadPdfMutation,
} = authApi;
