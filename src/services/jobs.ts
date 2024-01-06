import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = ["AdminJobController", "JobController"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAdminJobsCount: build.query<
        GetAdminJobsCountApiResponse,
        GetAdminJobsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminJobController"],
      }),
      putAdminJobsById: build.mutation<
        PutAdminJobsByIdApiResponse,
        PutAdminJobsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs/${queryArg.id}`,
          method: "PUT",
          body: queryArg.job,
        }),
        invalidatesTags: ["AdminJobController"],
      }),
      patchAdminJobsById: build.mutation<
        PatchAdminJobsByIdApiResponse,
        PatchAdminJobsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.jobPartial,
        }),
        invalidatesTags: ["AdminJobController"],
      }),
      getAdminJobsById: build.query<
        GetAdminJobsByIdApiResponse,
        GetAdminJobsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminJobController"],
      }),
      deleteAdminJobsById: build.mutation<
        DeleteAdminJobsByIdApiResponse,
        DeleteAdminJobsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminJobController"],
      }),
      postAdminJobs: build.mutation<
        PostAdminJobsApiResponse,
        PostAdminJobsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs`,
          method: "POST",
          body: queryArg.newJob,
        }),
        invalidatesTags: ["AdminJobController"],
      }),
      patchAdminJobs: build.mutation<
        PatchAdminJobsApiResponse,
        PatchAdminJobsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs`,
          method: "PATCH",
          body: queryArg.jobPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminJobController"],
      }),
      getAdminJobs: build.query<GetAdminJobsApiResponse, GetAdminJobsApiArg>({
        query: (queryArg) => ({
          url: `/admin/jobs`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminJobController"],
      }),
      getJobsCount: build.query<GetJobsCountApiResponse, GetJobsCountApiArg>({
        query: (queryArg) => ({
          url: `/jobs/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["JobController"],
      }),
      putJobsById: build.mutation<PutJobsByIdApiResponse, PutJobsByIdApiArg>({
        query: (queryArg) => ({
          url: `/jobs/${queryArg.id}`,
          method: "PUT",
          body: queryArg.job,
        }),
        invalidatesTags: ["JobController"],
      }),
      patchJobsById: build.mutation<
        PatchJobsByIdApiResponse,
        PatchJobsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/jobs/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.jobPartial,
        }),
        invalidatesTags: ["JobController"],
      }),
      getJobsById: build.query<GetJobsByIdApiResponse, GetJobsByIdApiArg>({
        query: (queryArg) => ({
          url: `/jobs/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["JobController"],
      }),
      deleteJobsById: build.mutation<
        DeleteJobsByIdApiResponse,
        DeleteJobsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/jobs/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["JobController"],
      }),
      postJobs: build.mutation<PostJobsApiResponse, PostJobsApiArg>({
        query: (queryArg) => ({
          url: `/jobs`,
          method: "POST",
          body: queryArg.newJob,
        }),
        invalidatesTags: ["JobController"],
      }),
      patchJobs: build.mutation<PatchJobsApiResponse, PatchJobsApiArg>({
        query: (queryArg) => ({
          url: `/jobs`,
          method: "PATCH",
          body: queryArg.jobPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["JobController"],
      }),
      getJobs: build.query<GetJobsApiResponse, GetJobsApiArg>({
        query: (queryArg) => ({
          url: `/jobs`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["JobController"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
export type GetAdminJobsCountApiResponse =
  /** status 200 Job model count */ LoopbackCount;
export type GetAdminJobsCountApiArg = {
  where?: any;
};
export type PutAdminJobsByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminJobsByIdApiArg = {
  id: string;
  job: Job;
};
export type PatchAdminJobsByIdApiResponse = /** status 204 No Content */ any;
export type PatchAdminJobsByIdApiArg = {
  id: string;
  jobPartial: JobPartial;
};
export type GetAdminJobsByIdApiResponse =
  /** status 200 Job model instance */ JobWithRelations;
export type GetAdminJobsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminJobsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteAdminJobsByIdApiArg = {
  id: string;
};
export type PostAdminJobsApiResponse = /** status 200 Job model instance */ Job;
export type PostAdminJobsApiArg = {
  newJob: NewJob;
};
export type PatchAdminJobsApiResponse =
  /** status 200 Job PATCH success count */ LoopbackCount;
export type PatchAdminJobsApiArg = {
  where?: any;
  jobPartial: JobPartial;
};
export type GetAdminJobsApiResponse =
  /** status 200 Array of Job model instances */ JobWithRelations[];
export type GetAdminJobsApiArg = {
  filter?: any;
};
export type GetJobsCountApiResponse =
  /** status 200 Job model count */ LoopbackCount;
export type GetJobsCountApiArg = {
  where?: any;
};
export type PutJobsByIdApiResponse = /** status 204 No Content */ any;
export type PutJobsByIdApiArg = {
  id: string;
  job: Job;
};
export type PatchJobsByIdApiResponse = /** status 204 No Content */ any;
export type PatchJobsByIdApiArg = {
  id: string;
  jobPartial: JobPartial;
};
export type GetJobsByIdApiResponse =
  /** status 200 Job model instance */ JobWithRelations;
export type GetJobsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteJobsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteJobsByIdApiArg = {
  id: string;
};
export type PostJobsApiResponse = /** status 200 Job model instance */ Job;
export type PostJobsApiArg = {
  newJob: NewJob;
};
export type PatchJobsApiResponse =
  /** status 200 Job PATCH success count */ LoopbackCount;
export type PatchJobsApiArg = {
  where?: any;
  jobPartial: JobPartial;
};
export type GetJobsApiResponse =
  /** status 200 Array of Job model instances */ JobWithRelations[];
export type GetJobsApiArg = {
  filter?: any;
};
export type LoopbackCount = {
  count?: number;
};
export type PhoneNo = {
  code?: string;
  phoneNo?: string;
};
export type Job = {
  id?: string;
  title: string;
  description?: string;
  city?: string;
  kommune?: string;
  employmentType?: string;
  workingTime?: string;
  employmentStatus?: string;
  from?: string | null;
  to?: string | null;
  phone?: PhoneNo;
  email?: string;
  canKeepCar?: boolean;
  createdByDriver?: boolean;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
};
export type JobPartial = {
  id?: string;
  title?: string;
  description?: string;
  city?: string;
  kommune?: string;
  employmentType?: string;
  workingTime?: string;
  employmentStatus?: string;
  from?: string | null;
  to?: string | null;
  phone?: PhoneNo;
  email?: string;
  canKeepCar?: boolean;
  createdByDriver?: boolean;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
};
export type Tag = {
  id?: string;
  title?: string;
  image?: {
    uid: string;
    path: string;
    url: string;
    s3Path?: string;
    name: string;
    mimeType?: string;
    fileSize?: string;
    uploadedOn?: string;
    status?: string;
  } | null;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
};
export type UserCredentialsWithRelations = {
  id?: string;
  password: string;
  socketToken?: string;
  userId?: string;
  deleted?: boolean;
  user?: UserWithRelations;
};
export type ResetPasswordInfoWithRelations = {
  id?: number;
  userId?: string;
  token: string;
  type: string;
  role: string;
  expiredOn: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  user?: UserWithRelations;
  [key: string]: any;
};
export type SubscriptionWithRelations = {
  id?: string;
  amount: number;
  status?: "Subscribed" | "UnSubscribed";
  expiredAt: string;
  plan: "Monthly" | "LifeTime";
  sessionId?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  subscribedTo?: string;
  user?: UserWithRelations;
  subscribed?: UserWithRelations;
  [key: string]: any;
};
export type TagWithRelations = {
  id?: string;
  title?: string;
  image?: {
    uid: string;
    path: string;
    url: string;
    s3Path?: string;
    name: string;
    mimeType?: string;
    fileSize?: string;
    uploadedOn?: string;
    status?: string;
  } | null;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  user?: UserWithRelations;
};
export type ActivityWithRelations = {
  id?: string;
  title?: string;
  description?: string;
  type?: string;
  resourceId?: string;
  timestamp: string;
  reminderTimestamp?: string | null;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  user?: UserWithRelations;
};
export type CarAssignedDrivers = {
  workType?: string;
  driver?: {
    id?: string;
    name?: string;
  };
};
export type Service = {
  name?: string;
  kmDone?: number;
};
export type CompanyWithRelations = {
  id?: string;
  orgNo: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  user?: UserWithRelations;
  reports?: ReportWithRelations[];
  jobs?: JobWithRelations[];
  [key: string]: any;
};
export type ReportWithRelations = {
  id?: string;
  from?: string | null;
  to?: string | null;
  month: string;
  year?: number;
  totalKm?: number;
  totalIncome?: number;
  totalSales?: {
    cash?: number;
    card?: number;
    apps?: {
      uber?: number;
      bolt?: number;
      other?: number;
    };
  };
  additionalAmount?: number;
  deductableAmount?: number;
  salary?: number;
  salaryDate?: string | null;
  bruttoSalary?: number;
  netSalary?: number;
  totalFuel?: number;
  fuelInLiters?: number;
  sekPerKm?: number;
  fuelPerKm?: number;
  totalAvgift?: number;
  momsAvgift?: number;
  netAvgift?: number;
  advanceSalaryInAccount?: number;
  advanceSalaryInCash?: number;
  usedFuelPercentage?: number;
  vat?: number;
  netIncomeCar?: number;
  netIncome?: number;
  salaryAfterTax?: number;
  totalTax?: number;
  skatTax?: number;
  vacationAmount?: number;
  createdByDriver?: boolean;
  reportDeclined?: boolean;
  calculateTaxManualy?: boolean;
  freezeReport?: boolean;
  updateCarReport?: boolean;
  comment?: string;
  driverComment?: string;
  workingHours?: number;
  totalKmInThisMonth?: number;
  forsakring?: number;
  texameter?: number;
  lonekostnad?: number;
  leasing?: number;
  otherExpanse?: number;
  vinst?: number;
  vinstPercentage?: number;
  servise?: number;
  type: string;
  reportDate?: string;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
  driverId?: string;
  user?: UserWithRelations;
  company?: CompanyWithRelations;
  car?: CarWithRelations;
  driver?: UserWithRelations;
};
export type CarWithRelations = {
  id?: string;
  make?: string;
  model?: string;
  makeModel?: string;
  year?: number;
  carNo?: string;
  noOfKm?: number;
  lastServiceDate?: string | null;
  lastInspectionDate?: string | null;
  reminderDishesAfterKm?: number;
  reminderSealedBeforeNoDays?: number;
  reminderInspectionBeforeNoDays?: number;
  reminderInspectionDate?: string | null;
  reminderSealedDate?: string | null;
  type?: string;
  drivers?: CarAssignedDrivers[];
  services?: Service[];
  reminderInspectionBeforeKm?: number;
  isArchived?: boolean;
  nextServiceIfKm?: number;
  forsakring?: number;
  texameter?: number;
  servise?: number;
  leasing?: number;
  otherExpanse?: number;
  description?: string;
  tags?: Tag[];
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  tagId?: string;
  user?: UserWithRelations;
  reports?: ReportWithRelations[];
  jobs?: JobWithRelations[];
  tag?: TagWithRelations;
};
export type CarUsageWithRelations = {
  id?: string;
  income?: number;
  kmDone?: number;
  carUsageNo?: string;
  from?: string | null;
  to?: string | null;
  type?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  user?: UserWithRelations;
};
export type Doc = {
  uid: string;
  path: string;
  url: string;
  s3Path?: string;
  name: string;
  mimeType?: string;
  fileSize?: string;
  uploadedOn?: string;
  status?: string;
};
export type SellCarWithRelations = {
  id?: string;
  make?: string;
  model?: string;
  makeModel?: string;
  year?: number;
  color?: string;
  odometer?: number;
  carNo?: string;
  images?: Doc[];
  lastServiceDate?: string | null;
  lastInspectionDate?: string | null;
  price?: number;
  vehicleType?: string;
  reminderInspectionDate?: string | null;
  type?: string;
  phone?: PhoneNo;
  email?: string;
  image?: {
    uid: string;
    path: string;
    url: string;
    s3Path?: string;
    name: string;
    mimeType?: string;
    fileSize?: string;
    uploadedOn?: string;
    status?: string;
  };
  city?: string;
  kommune?: string;
  isActive?: boolean;
  createdByDriver?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  companyId?: string;
  userId?: string;
  user?: UserWithRelations;
};
export type ToDriver = {
  id?: string;
  name?: string;
  email?: string;
};
export type SmsWithRelations = {
  id?: string;
  content: string;
  from: string;
  to?: string;
  isSentByDriver?: boolean;
  toDrivers?: ToDriver[];
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  user?: UserWithRelations;
};
export type CertificatesWithRelations = {
  id?: string;
  createdAt: string;
  updatedAt: string;
  userId?: string;
  driverId?: string;
  user?: UserWithRelations;
  driver?: UserWithRelations;
  [key: string]: any;
};
export type UserWithRelations = {
  id?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  tempPassword?: string;
  isNew?: boolean;
  phone?: PhoneNo;
  swishNumber?: PhoneNo;
  personalNumber?: string;
  clearingNumber?: number;
  accountNumber?: string;
  bankGiro?: number;
  plusGiro?: number;
  address1?: string;
  postNo?: string;
  isMonthlySalary?: boolean;
  fixedSalary?: number;
  isCommission?: boolean;
  freeText?: string;
  address2?: string;
  city?: string;
  country?: string;
  role?: "Admin" | "User" | "Company";
  roles?: string[];
  creatorId?: string;
  isActiveUser?: boolean;
  isActiveCreator?: boolean;
  isVerified?: boolean;
  image?: {
    uid: string;
    path: string;
    url: string;
    s3Path?: string;
    name: string;
    mimeType?: string;
    fileSize?: string;
    uploadedOn?: string;
    status?: string;
  } | null;
  license?: {
    uid: string;
    path: string;
    url: string;
    s3Path?: string;
    name: string;
    mimeType?: string;
    fileSize?: string;
    uploadedOn?: string;
    status?: string;
  };
  taxiIdentification?: {
    uid: string;
    path: string;
    url: string;
    s3Path?: string;
    name: string;
    mimeType?: string;
    fileSize?: string;
    uploadedOn?: string;
    status?: string;
  };
  oAuth?: boolean;
  nonce?: string;
  tosAgreed?: boolean;
  metamaskAddress?: string;
  stripeAccountId?: string;
  lastUpdatedEmail?: string;
  emails?: string[];
  workingHours?: number;
  companyJoinedFrom?: string | null;
  companyJoinedTo?: string | null;
  driverSalary?: number;
  vatPercentage?: number;
  commissionPercentage?: number;
  salaryPeriodDateEachMonth?: number;
  dateOfEmployment?: string | null;
  agreedEndDate?: string | null;
  employmentType?: string;
  workType?: string;
  workingTime?: string;
  calculateTaxManualy?: boolean;
  taxTable?: string;
  taxPercentage?: number;
  skatTax?: number;
  vacationPercentage?: number;
  isSalaryOnTotalIncome?: boolean;
  companyId?: string;
  driverNo?: number;
  isArchived?: boolean;
  fixedSalaryVacationAmount?: number;
  description?: string;
  requestToJoin?: boolean;
  availableForWork?: {
    hours?: number;
    jobType?: "FullTime" | "PartTime";
    keepCar?: boolean;
  };
  deleted?: boolean;
  isOpenToWork?: boolean;
  agreement?: {
    uid: string;
    path: string;
    url: string;
    s3Path?: string;
    name: string;
    mimeType?: string;
    fileSize?: string;
    uploadedOn?: string;
    status?: string;
  };
  tags?: Tag[];
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  tagId?: string;
  carId?: string;
  creator?: UserWithRelations;
  userCredentials?: UserCredentialsWithRelations;
  resetPasswordInfo?: ResetPasswordInfoWithRelations;
  subscriptions?: SubscriptionWithRelations[];
  tag?: TagWithRelations;
  activities?: ActivityWithRelations[];
  cars?: CarWithRelations[];
  carUsages?: CarUsageWithRelations[];
  companies?: CompanyWithRelations[];
  sellCars?: SellCarWithRelations[];
  jobs?: JobWithRelations[];
  reports?: ReportWithRelations[];
  driverReports?: ReportWithRelations[];
  sms?: SmsWithRelations[];
  certificates?: CertificatesWithRelations[];
  driverCertificates?: CertificatesWithRelations[];
  car?: CarWithRelations;
};
export type JobWithRelations = {
  id?: string;
  title: string;
  description?: string;
  city?: string;
  kommune?: string;
  employmentType?: string;
  workingTime?: string;
  employmentStatus?: string;
  from?: string | null;
  to?: string | null;
  phone?: PhoneNo;
  email?: string;
  canKeepCar?: boolean;
  createdByDriver?: boolean;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
  user?: UserWithRelations;
  company?: CompanyWithRelations;
  car?: CarWithRelations;
};
export type NewJob = {
  title: string;
  description?: string;
  city?: string;
  kommune?: string;
  employmentType?: string;
  workingTime?: string;
  employmentStatus?: string;
  from?: string | null;
  to?: string | null;
  phone?: PhoneNo;
  email?: string;
  canKeepCar?: boolean;
  createdByDriver?: boolean;
  deleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
};
export const {
  useGetAdminJobsCountQuery,
  usePutAdminJobsByIdMutation,
  usePatchAdminJobsByIdMutation,
  useGetAdminJobsByIdQuery,
  useDeleteAdminJobsByIdMutation,
  usePostAdminJobsMutation,
  usePatchAdminJobsMutation,
  useGetAdminJobsQuery,
  useGetJobsCountQuery,
  usePutJobsByIdMutation,
  usePatchJobsByIdMutation,
  useGetJobsByIdQuery,
  useDeleteJobsByIdMutation,
  usePostJobsMutation,
  usePatchJobsMutation,
  useGetJobsQuery,
} = injectedRtkApi;
