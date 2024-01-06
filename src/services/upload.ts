import { privateBucketName } from "@/constants";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/services/baseQuery";

// Define a service using a base URL and expected endpoints
export const uploadApi = createApi({
  reducerPath: "uploadApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    upload: builder.mutation({
      query: ({ data, method, url }) => ({
        url:
          url ||
          `/buckets/${
            process.env.NEXT_PUBLIC_BUCKET_NAME || "subscape-staging"
          }/upload`,
        method: method || "POST",
        body: data,
      }),
    }),
    uploadToPrivate: builder.mutation({
      query: ({ data, method, url }) => ({
        body: data,
        method: method || "POST",
        url: url || `/buckets/${privateBucketName}/upload-s3`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUploadToPrivateMutation } = uploadApi;
