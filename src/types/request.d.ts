import {
  Users,
  Admin,
  Creator,
  Comment,
  Comments,
  Messages,
  Donations,
  Cars,
  Activities,
} from "./typings.gen";
import { Filter } from "./query.d";

export type GetRequestQuery<T> = { filter: Filter<T> };
export type CountRequestQuery<T> = { where: Where<T> };

export type LoginRequestBody =
  Users.UserControllerLoginEnterpriseAndFreelance.RequestBody;
export type LoginResponseBody =
  Users.UserControllerLoginEnterpriseAndFreelance.ResponseBody;
export type GoogleLoginRequestBody =
  Users.UserControllerGoogleLogin.RequestBody;
export type GoogleLoginResponseBody =
  Users.UserControllerGoogleLogin.ResponseBody;
export type MetamaskLoginRequestBody =
  Users.UserControllerMetamaskLogin.RequestBody;
export type MetamaskLoginResponseBody =
  Users.UserControllerMetamaskLogin.ResponseBody;
export type GetNonceRequestBody = Users.UserControllerGetNonce.RequestBody;
export type GetNonceResponseBody = Users.UserControllerGetNonce.ResponseBody;
export type SignupRequestBody = Users.UserControllerCreate.RequestBody;
export type SignupResponseBody = Users.UserControllerCreate.ResponseBody;
export type ResetPasswordRequestBody =
  Users.UserControllerResetPassword.RequestBody;
export type ResetPasswordResponseBody =
  Users.UserControllerResetPassword.ResponseBody;
export type FindEmailRequestBody = Users.UserControllerFindEmail.RequestBody;
export type FindEmailResponseBody = Users.UserControllerFindEmail.ResponseBody;
export type UpdateUserRequestBody = Users.UserControllerUpdateUser.RequestBody;
export type UpdateUserResponseBody =
  Users.UserControllerUpdateUser.ResponseBody;
export type GetUserRequestBody = Users.UserControllerGetUser.RequestBody;
export type GetUserResponseBody = Users.UserControllerGetUser.ResponseBody;
export type ChangeEmailRequestBody =
  Users.UserControllerChangeEmail.RequestBody;
export type ChangeEmailResponseBody =
  Users.UserControllerChangeEmail.ResponseBody;
export type ChangePasswordRequestBody =
  Users.UserControllerChangePassword.RequestBody;
export type ChangePasswordResponseBody =
  Users.UserControllerChangePassword.ResponseBody;

export type GetCarResponseBody = Cars.CarControllerFindCar.ResponseBody;
export type GetCarRequestBody = Cars.CarControllerFindCar.RequestBody;
export type GetCarByIdResponseBody = Cars.CarControllerFindByIdCar.ResponseBody;
export type GetCarByIdRequestBody = { id: string };
export type CountCarResponseBody = Cars.CarControllerCountCar.ResponseBody;
export type CountCarRequestBody = Cars.CarControllerCountCar.RequestBody;
export type CreateCarRequestBody = Cars.CarControllerCreateCar.RequestBody;
export type CreateCarResponseBody = Cars.CarControllerCreateCar.ResponseBody;
export type UpdateCarRequestBody = Cars.CarControllerUpdateByIdCar.RequestBody;
export type UpdateCarResponseBody = Cars.CarControllerCreateCar.ResponseBody;
export type ReplaceCarRequestBody =
  Cars.CarControllerReplaceByIdCar.RequestBody;
export type ReplaceCarResponseBody = Cars.CarControllerCreateCar.ResponseBody;
export type UpdateAllCarsRequestBody =
  Cars.CarControllerUpdateAllCar.RequestBody;
export type UpdateAllCarsResponseBody =
  Cars.CarControllerUpdateAllCar.ResponseBody;
export type DeleteCarRequestBody = { id: string };
export type DeleteCarResponseBody = Cars.CarControllerCreateCar.ResponseBody;

export type GetActivityResponseBody =
  Activities.ActivityControllerFindActivity.ResponseBody;
export type GetActivityRequestBody =
  Activities.ActivityControllerFindActivity.RequestBody;
export type GetActivityByIdResponseBody =
  Activities.ActivityControllerFindActivity.ResponseBody;
export type GetActivityByIdRequestBody = { id: string };
export type CountActivityResponseBody =
  Activities.ActivityControllerCountActivity.ResponseBody;
export type CountActivityRequestBody =
  Activities.ActivityControllerCountActivity.RequestBody;
export type CreateActivityRequestBody =
  Activities.ActivityControllerCreateActivity.RequestBody;
export type CreateActivityResponseBody =
  Activities.ActivityControllerCreateActivity.ResponseBody;
export type UpdateActivityRequestBody =
  Activities.ActivityControllerUpdateByIdActivity.RequestBody;
export type UpdateActivityResponseBody =
  Activities.ActivityControllerCreateActivity.ResponseBody;
export type ReplaceActivityRequestBody =
  Activities.ActivityControllerReplaceByIdActivity.RequestBody;
export type ReplaceActivityResponseBody =
  Activities.ActivityControllerCreateActivity.ResponseBody;
export type UpdateAllActivitiesRequestBody =
  Activities.ActivityControllerUpdateAllActivity.RequestBody;
export type UpdateAllActivitiesResponseBody =
  Activities.ActivityControllerUpdateAllActivity.ResponseBody;
export type DeleteActivityRequestBody = { id: string };
export type DeleteActivityResponseBody =
  Activities.ActivityControllerCreateActivity.ResponseBody;
