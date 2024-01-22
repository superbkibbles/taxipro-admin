import { BASE_API_URL } from "@/constants";
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { getAccessToken, refreshToken } from "@/utils/auth";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL || "https://localhost:4001",
  prepareHeaders: (headers) => {
    const token = getAccessToken();
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    await refreshToken();
    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};
