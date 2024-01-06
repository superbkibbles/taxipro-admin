import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = ["EmployeeIncomeRecordController"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getDriverEmployeeIncomeRecordsByDriverId: build.query<
        GetDriverEmployeeIncomeRecordsByDriverIdApiResponse,
        GetDriverEmployeeIncomeRecordsByDriverIdApiArg
      >({
        query: (queryArg) => ({
          url: `/driver/employeeIncomeRecords/${queryArg.driverId}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["EmployeeIncomeRecordController"],
      }),
      getEmployeeIncomeRecordsCount: build.query<
        GetEmployeeIncomeRecordsCountApiResponse,
        GetEmployeeIncomeRecordsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeIncomeRecords/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["EmployeeIncomeRecordController"],
      }),
      putEmployeeIncomeRecordsById: build.mutation<
        PutEmployeeIncomeRecordsByIdApiResponse,
        PutEmployeeIncomeRecordsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeIncomeRecords/${queryArg.id}`,
          method: "PUT",
          body: queryArg.employeeIncomeRecord,
        }),
        invalidatesTags: ["EmployeeIncomeRecordController"],
      }),
      patchEmployeeIncomeRecordsById: build.mutation<
        PatchEmployeeIncomeRecordsByIdApiResponse,
        PatchEmployeeIncomeRecordsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeIncomeRecords/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.employeeIncomeRecordPartial,
        }),
        invalidatesTags: ["EmployeeIncomeRecordController"],
      }),
      getEmployeeIncomeRecordsById: build.query<
        GetEmployeeIncomeRecordsByIdApiResponse,
        GetEmployeeIncomeRecordsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeIncomeRecords/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["EmployeeIncomeRecordController"],
      }),
      deleteEmployeeIncomeRecordsById: build.mutation<
        DeleteEmployeeIncomeRecordsByIdApiResponse,
        DeleteEmployeeIncomeRecordsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeIncomeRecords/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["EmployeeIncomeRecordController"],
      }),
      postEmployeeIncomeRecords: build.mutation<
        PostEmployeeIncomeRecordsApiResponse,
        PostEmployeeIncomeRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeIncomeRecords`,
          method: "POST",
          body: queryArg.newEmployeeIncomeRecord,
        }),
        invalidatesTags: ["EmployeeIncomeRecordController"],
      }),
      patchEmployeeIncomeRecords: build.mutation<
        PatchEmployeeIncomeRecordsApiResponse,
        PatchEmployeeIncomeRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeIncomeRecords`,
          method: "PATCH",
          body: queryArg.employeeIncomeRecordPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["EmployeeIncomeRecordController"],
      }),
      getEmployeeIncomeRecords: build.query<
        GetEmployeeIncomeRecordsApiResponse,
        GetEmployeeIncomeRecordsApiArg
      >({
        query: (queryArg) => ({
          url: `/employeeIncomeRecords`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["EmployeeIncomeRecordController"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
export type GetDriverEmployeeIncomeRecordsByDriverIdApiResponse =
  /** status 200 EmployeeIncomeRecord model instance */ EmployeeIncomeRecordWithRelations;
export type GetDriverEmployeeIncomeRecordsByDriverIdApiArg = {
  driverId: string;
  filter?: any;
};
export type GetEmployeeIncomeRecordsCountApiResponse =
  /** status 200 EmployeeIncomeRecord model count */ LoopbackCount;
export type GetEmployeeIncomeRecordsCountApiArg = {
  where?: any;
};
export type PutEmployeeIncomeRecordsByIdApiResponse =
  /** status 204 No Content */ any;
export type PutEmployeeIncomeRecordsByIdApiArg = {
  id: string;
  employeeIncomeRecord: EmployeeIncomeRecord;
};
export type PatchEmployeeIncomeRecordsByIdApiResponse =
  /** status 204 No Content */ any;
export type PatchEmployeeIncomeRecordsByIdApiArg = {
  id: string;
  employeeIncomeRecordPartial: EmployeeIncomeRecordPartial;
};
export type GetEmployeeIncomeRecordsByIdApiResponse =
  /** status 200 EmployeeIncomeRecord model instance */ EmployeeIncomeRecordWithRelations;
export type GetEmployeeIncomeRecordsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteEmployeeIncomeRecordsByIdApiResponse =
  /** status 204 No Content */ any;
export type DeleteEmployeeIncomeRecordsByIdApiArg = {
  id: string;
};
export type PostEmployeeIncomeRecordsApiResponse =
  /** status 200 EmployeeIncomeRecord model instance */ EmployeeIncomeRecord;
export type PostEmployeeIncomeRecordsApiArg = {
  newEmployeeIncomeRecord: NewEmployeeIncomeRecord;
};
export type PatchEmployeeIncomeRecordsApiResponse =
  /** status 200 EmployeeIncomeRecord PATCH success count */ LoopbackCount;
export type PatchEmployeeIncomeRecordsApiArg = {
  where?: any;
  employeeIncomeRecordPartial: EmployeeIncomeRecordPartial;
};
export type GetEmployeeIncomeRecordsApiResponse =
  /** status 200 Array of EmployeeIncomeRecord model instances */ EmployeeIncomeRecordWithRelations[];
export type GetEmployeeIncomeRecordsApiArg = {
  filter?: any;
};
export type EmployeeIncomeRecordWithRelations = {
  id?: string;
  driverId: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export type LoopbackCount = {
  count?: number;
};
export type EmployeeIncomeRecord = {
  id?: string;
  driverId: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export type EmployeeIncomeRecordPartial = {
  id?: string;
  driverId?: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export type NewEmployeeIncomeRecord = {
  driverId: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export const {
  useGetDriverEmployeeIncomeRecordsByDriverIdQuery,
  useGetEmployeeIncomeRecordsCountQuery,
  usePutEmployeeIncomeRecordsByIdMutation,
  usePatchEmployeeIncomeRecordsByIdMutation,
  useGetEmployeeIncomeRecordsByIdQuery,
  useDeleteEmployeeIncomeRecordsByIdMutation,
  usePostEmployeeIncomeRecordsMutation,
  usePatchEmployeeIncomeRecordsMutation,
  useGetEmployeeIncomeRecordsQuery,
} = injectedRtkApi;
