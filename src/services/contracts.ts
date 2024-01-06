import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = ["ContractController"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getContractsCount: build.query<
        GetContractsCountApiResponse,
        GetContractsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/contracts/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["ContractController"],
      }),
      putContractsById: build.mutation<
        PutContractsByIdApiResponse,
        PutContractsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/contracts/${queryArg.id}`,
          method: "PUT",
          body: queryArg.contracts,
        }),
        invalidatesTags: ["ContractController"],
      }),
      patchContractsById: build.mutation<
        PatchContractsByIdApiResponse,
        PatchContractsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/contracts/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.contractsPartial,
        }),
        invalidatesTags: ["ContractController"],
      }),
      getContractsById: build.query<
        GetContractsByIdApiResponse,
        GetContractsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/contracts/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["ContractController"],
      }),
      deleteContractsById: build.mutation<
        DeleteContractsByIdApiResponse,
        DeleteContractsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/contracts/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["ContractController"],
      }),
      postContracts: build.mutation<
        PostContractsApiResponse,
        PostContractsApiArg
      >({
        query: (queryArg) => ({
          url: `/contracts`,
          method: "POST",
          body: queryArg.newContract,
        }),
        invalidatesTags: ["ContractController"],
      }),
      patchContracts: build.mutation<
        PatchContractsApiResponse,
        PatchContractsApiArg
      >({
        query: (queryArg) => ({
          url: `/contracts`,
          method: "PATCH",
          body: queryArg.contractsPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["ContractController"],
      }),
      getContracts: build.query<GetContractsApiResponse, GetContractsApiArg>({
        query: (queryArg) => ({
          url: `/contracts`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["ContractController"],
      }),
      getDriverContractsByDriverId: build.query<
        GetDriverContractsByDriverIdApiResponse,
        GetDriverContractsByDriverIdApiArg
      >({
        query: (queryArg) => ({
          url: `/driver/contracts/${queryArg.driverId}`,
        }),
        providesTags: ["ContractController"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
export type GetContractsCountApiResponse =
  /** status 200 Contract model count */ LoopbackCount;
export type GetContractsCountApiArg = {
  where?: any;
};
export type PutContractsByIdApiResponse = /** status 204 No Content */ any;
export type PutContractsByIdApiArg = {
  id: string;
  contracts: Contracts;
};
export type PatchContractsByIdApiResponse = /** status 204 No Content */ any;
export type PatchContractsByIdApiArg = {
  id: string;
  contractsPartial: ContractsPartial;
};
export type GetContractsByIdApiResponse =
  /** status 200 Contract model instance */ ContractsWithRelations;
export type GetContractsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteContractsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteContractsByIdApiArg = {
  id: string;
};
export type PostContractsApiResponse =
  /** status 200 Contract model instance */ Contracts;
export type PostContractsApiArg = {
  newContract: NewContract;
};
export type PatchContractsApiResponse =
  /** status 200 Contract PATCH success count */ LoopbackCount;
export type PatchContractsApiArg = {
  where?: any;
  contractsPartial: ContractsPartial;
};
export type GetContractsApiResponse =
  /** status 200 Array of Contract model instances */ ContractsWithRelations[];
export type GetContractsApiArg = {
  filter?: any;
};
export type GetDriverContractsByDriverIdApiResponse =
  /** status 200 Contract model instance */ ContractsWithRelations;
export type GetDriverContractsByDriverIdApiArg = {
  driverId: string;
};
export type LoopbackCount = {
  count?: number;
};
export type Contracts = {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export type ContractsPartial = {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export type ContractsWithRelations = {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export type NewContract = {
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
};
export const {
  useGetContractsCountQuery,
  usePutContractsByIdMutation,
  usePatchContractsByIdMutation,
  useGetContractsByIdQuery,
  useDeleteContractsByIdMutation,
  usePostContractsMutation,
  usePatchContractsMutation,
  useGetContractsQuery,
  useGetDriverContractsByDriverIdQuery,
} = injectedRtkApi;
