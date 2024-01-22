import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/services/baseQuery";
import { AppDispatch } from "@/store";
import {
  ChangeEmailRequestBody,
  ChangePasswordRequestBody,
  GetCarByIdResponseBody,
  UpdateUserRequestBody,
  User,
  UserWithRelations,
} from "@/types";
import { getUserInfo } from "@/utils/auth";
import { GetCarsApiArg, GetCarsApiResponse } from "./cars";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUser: builder.query<UserWithRelations, { filter: string } | undefined>({
      query: (queryArg) => ({
        url: `/users/me`,
        params: { filter: queryArg?.filter },
      }),
      providesTags: (result, error, id) => {
        return [{ type: "Users", id: result?.id || id?.filter }];
      },
    }),
    getUsers: builder.query<UserWithRelations, { filter: string } | undefined>({
      query: (queryArg) => ({
        url: `/admin/users`,
        params: { filter: queryArg?.filter },
      }),
      providesTags: (result, error, id) => {
        return [{ type: "Users", id: result?.id || id?.filter }];
      },
    }),
    getUserById: builder.query<
      UserWithRelations,
      { filter: string; id: string } | undefined
    >({
      query: (queryArg) => ({
        url: `/admin/users/${queryArg.id}`,
        params: { filter: queryArg?.filter },
      }),
      providesTags: (result, error, id) => {
        return [{ type: "Users", id: result?.id || id?.filter }];
      },
    }),
    createUser: builder.mutation({
      query: (data: UserWithRelations) => ({
        url: "/admin/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: () => [{ type: "Users", id: getUserInfo()?.id }],
    }),
    updateUser: builder.mutation({
      query: (data: UpdateUserRequestBody) => ({
        url: "/users/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: () => [{ type: "Users", id: getUserInfo()?.id }],
    }),
    changeEmail: builder.mutation({
      query: (data: ChangeEmailRequestBody) => ({
        url: "/users/changeEmail",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: () => [{ type: "Users", id: getUserInfo()?.id }],
    }),
    changePassword: builder.mutation({
      query: (data: ChangePasswordRequestBody) => ({
        url: "/users/changePassword",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: () => [{ type: "Users", id: getUserInfo()?.id }],
    }),
    createDonation: builder.mutation({
      query: (data: any) => ({
        url: "/v1/payment/create",
        method: "POST",
        body: data,
      }),
    }),
    createDonationCheckout: builder.mutation({
      query: (data: any) => ({
        url: "/donations/stripeCheckout",
        method: "POST",
        body: data,
      }),
    }),
    resendEmail: builder.mutation({
      query: (params) => ({
        url: "/users/resendEmail",
        method: "POST",
        body: params,
      }),
    }),
    sendEmail: builder.mutation({
      query: (params) => ({
        url: "/users/sendEmail",
        method: "POST",
        body: params,
      }),
    }),
    upload: builder.mutation({
      query: ({ data }) => ({
        url: `/images/upload`,
        method: "POST",
        body: data,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      }),
    }),
    getCars: builder.mutation<GetCarsApiResponse, GetCarsApiArg>({
      query: (queryArg) => ({
        url: `/cars`,
        params: { filter: queryArg.filter },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useChangeEmailMutation,
  useChangePasswordMutation,
  useCreateDonationMutation,
  useCreateDonationCheckoutMutation,
  useResendEmailMutation,
  useSendEmailMutation,
  useUploadMutation,
  useGetCarsMutation,
  useCreateUserMutation,
} = userApi;
