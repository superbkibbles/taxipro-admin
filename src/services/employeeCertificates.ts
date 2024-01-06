import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = ["EmployeeCertificateController"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getDriverEmployeeCertificatesByDriverId: build.query<
        GetDriverEmployeeCertificatesByDriverIdApiResponse,
        GetDriverEmployeeCertificatesByDriverIdApiArg
      >({
        query: (queryArg) => ({
          url: `/driver/employeeCertificates/${queryArg.driverId}`,
        }),
        providesTags: ["EmployeeCertificateController"],
      }),
      getEmployeeCertificatesCount: build.query<
        GetEmployeeCertificatesCountApiResponse,
        GetEmployeeCertificatesCountApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeCertificates/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["EmployeeCertificateController"],
      }),
      putEmployeeCertificatesById: build.mutation<
        PutEmployeeCertificatesByIdApiResponse,
        PutEmployeeCertificatesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeCertificates/${queryArg.id}`,
          method: "PUT",
          body: queryArg.employeeCertificate,
        }),
        invalidatesTags: ["EmployeeCertificateController"],
      }),
      patchEmployeeCertificatesById: build.mutation<
        PatchEmployeeCertificatesByIdApiResponse,
        PatchEmployeeCertificatesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeCertificates/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.employeeCertificatePartial,
        }),
        invalidatesTags: ["EmployeeCertificateController"],
      }),
      getEmployeeCertificatesById: build.query<
        GetEmployeeCertificatesByIdApiResponse,
        GetEmployeeCertificatesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeCertificates/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["EmployeeCertificateController"],
      }),
      deleteEmployeeCertificatesById: build.mutation<
        DeleteEmployeeCertificatesByIdApiResponse,
        DeleteEmployeeCertificatesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeCertificates/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["EmployeeCertificateController"],
      }),
      postEmployeeCertificates: build.mutation<
        PostEmployeeCertificatesApiResponse,
        PostEmployeeCertificatesApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeCertificates`,
          method: "POST",
          body: queryArg.newEmployeeCertificate,
        }),
        invalidatesTags: ["EmployeeCertificateController"],
      }),
      patchEmployeeCertificates: build.mutation<
        PatchEmployeeCertificatesApiResponse,
        PatchEmployeeCertificatesApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeCertificates`,
          method: "PATCH",
          body: queryArg.employeeCertificatePartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["EmployeeCertificateController"],
      }),
      getEmployeeCertificates: build.query<
        GetEmployeeCertificatesApiResponse,
        GetEmployeeCertificatesApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeCertificates`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["EmployeeCertificateController"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
export type GetDriverEmployeeCertificatesByDriverIdApiResponse =
  /** status 200 EmployeeCertificate model instance */ EmployeeCertificateWithRelations;
export type GetDriverEmployeeCertificatesByDriverIdApiArg = {
  driverId: string;
};
export type GetEmployeeCertificatesCountApiResponse =
  /** status 200 EmployeeCertificate model count */ LoopbackCount;
export type GetEmployeeCertificatesCountApiArg = {
  where?: any;
};
export type PutEmployeeCertificatesByIdApiResponse =
  /** status 204 No Content */ any;
export type PutEmployeeCertificatesByIdApiArg = {
  id: string;
  employeeCertificate: EmployeeCertificate;
};
export type PatchEmployeeCertificatesByIdApiResponse =
  /** status 204 No Content */ any;
export type PatchEmployeeCertificatesByIdApiArg = {
  id: string;
  employeeCertificatePartial: EmployeeCertificatePartial;
};
export type GetEmployeeCertificatesByIdApiResponse =
  /** status 200 EmployeeCertificate model instance */ EmployeeCertificateWithRelations;
export type GetEmployeeCertificatesByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteEmployeeCertificatesByIdApiResponse =
  /** status 204 No Content */ any;
export type DeleteEmployeeCertificatesByIdApiArg = {
  id: string;
};
export type PostEmployeeCertificatesApiResponse =
  /** status 200 EmployeeCertificate model instance */ EmployeeCertificate;
export type PostEmployeeCertificatesApiArg = {
  newEmployeeCertificate: NewEmployeeCertificate;
};
export type PatchEmployeeCertificatesApiResponse =
  /** status 200 EmployeeCertificate PATCH success count */ LoopbackCount;
export type PatchEmployeeCertificatesApiArg = {
  where?: any;
  employeeCertificatePartial: EmployeeCertificatePartial;
};
export type GetEmployeeCertificatesApiResponse =
  /** status 200 Array of EmployeeCertificate model instances */ EmployeeCertificateWithRelations[];
export type GetEmployeeCertificatesApiArg = {
  filter?: any;
};
export type EmployeeCertificateWithRelations = {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export type LoopbackCount = {
  count?: number;
};
export type EmployeeCertificate = {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export type EmployeeCertificatePartial = {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export type NewEmployeeCertificate = {
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export const {
  useGetDriverEmployeeCertificatesByDriverIdQuery,
  useGetEmployeeCertificatesCountQuery,
  usePutEmployeeCertificatesByIdMutation,
  usePatchEmployeeCertificatesByIdMutation,
  useGetEmployeeCertificatesByIdQuery,
  useDeleteEmployeeCertificatesByIdMutation,
  usePostEmployeeCertificatesMutation,
  usePatchEmployeeCertificatesMutation,
  useGetEmployeeCertificatesQuery,
} = injectedRtkApi;
