import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = [
  "AdminCompanyController",
  "CompanyController",
  "DriverReportController",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAdminCompaniesCount: build.query<
        GetAdminCompaniesCountApiResponse,
        GetAdminCompaniesCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminCompanyController"],
      }),
      putAdminCompaniesById: build.mutation<
        PutAdminCompaniesByIdApiResponse,
        PutAdminCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies/${queryArg.id}`,
          method: "PUT",
          body: queryArg.company,
        }),
        invalidatesTags: ["AdminCompanyController"],
      }),
      patchAdminCompaniesById: build.mutation<
        PatchAdminCompaniesByIdApiResponse,
        PatchAdminCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.companyPartial,
        }),
        invalidatesTags: ["AdminCompanyController"],
      }),
      getAdminCompaniesById: build.query<
        GetAdminCompaniesByIdApiResponse,
        GetAdminCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminCompanyController"],
      }),
      deleteAdminCompaniesById: build.mutation<
        DeleteAdminCompaniesByIdApiResponse,
        DeleteAdminCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminCompanyController"],
      }),
      postAdminCompanies: build.mutation<
        PostAdminCompaniesApiResponse,
        PostAdminCompaniesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies`,
          method: "POST",
          body: queryArg.newCompany,
        }),
        invalidatesTags: ["AdminCompanyController"],
      }),
      patchAdminCompanies: build.mutation<
        PatchAdminCompaniesApiResponse,
        PatchAdminCompaniesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies`,
          method: "PATCH",
          body: queryArg.companyPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminCompanyController"],
      }),
      getAdminCompanies: build.query<
        GetAdminCompaniesApiResponse,
        GetAdminCompaniesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminCompanyController"],
      }),
      getCompaniesCount: build.query<
        GetCompaniesCountApiResponse,
        GetCompaniesCountApiArg
      >({
        query: (queryArg) => ({
          url: `/companies/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["CompanyController"],
      }),
      putCompaniesById: build.mutation<
        PutCompaniesByIdApiResponse,
        PutCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/companies/${queryArg.id}`,
          method: "PUT",
          body: queryArg.company,
        }),
        invalidatesTags: ["CompanyController"],
      }),
      patchCompaniesById: build.mutation<
        PatchCompaniesByIdApiResponse,
        PatchCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/companies/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.companyPartial,
        }),
        invalidatesTags: ["CompanyController"],
      }),
      getCompaniesById: build.query<
        GetCompaniesByIdApiResponse,
        GetCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/companies/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["CompanyController"],
      }),
      deleteCompaniesById: build.mutation<
        DeleteCompaniesByIdApiResponse,
        DeleteCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/companies/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["CompanyController"],
      }),
      postCompanies: build.mutation<
        PostCompaniesApiResponse,
        PostCompaniesApiArg
      >({
        query: (queryArg) => ({
          url: `/companies`,
          method: "POST",
          body: queryArg.newCompany,
        }),
        invalidatesTags: ["CompanyController"],
      }),
      patchCompanies: build.mutation<
        PatchCompaniesApiResponse,
        PatchCompaniesApiArg
      >({
        query: (queryArg) => ({
          url: `/companies`,
          method: "PATCH",
          body: queryArg.companyPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["CompanyController"],
      }),
      getCompanies: build.query<GetCompaniesApiResponse, GetCompaniesApiArg>({
        query: (queryArg) => ({
          url: `/companies`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["CompanyController"],
      }),
      getDriversCompaniesList: build.query<
        GetDriversCompaniesListApiResponse,
        GetDriversCompaniesListApiArg
      >({
        query: () => ({ url: `/drivers/companies/list` }),
        providesTags: ["DriverReportController"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
export type GetAdminCompaniesCountApiResponse =
  /** status 200 Car model count */ LoopbackCount;
export type GetAdminCompaniesCountApiArg = {
  where?: any;
};
export type PutAdminCompaniesByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminCompaniesByIdApiArg = {
  id: string;
  company: Company;
};
export type PatchAdminCompaniesByIdApiResponse =
  /** status 204 No Content */ any;
export type PatchAdminCompaniesByIdApiArg = {
  id: string;
  companyPartial: CompanyPartial;
};
export type GetAdminCompaniesByIdApiResponse =
  /** status 200 Company model instance */ CompanyWithRelations;
export type GetAdminCompaniesByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminCompaniesByIdApiResponse =
  /** status 204 No Content */ any;
export type DeleteAdminCompaniesByIdApiArg = {
  id: string;
};
export type PostAdminCompaniesApiResponse =
  /** status 200 Company model instance */ Company;
export type PostAdminCompaniesApiArg = {
  newCompany: NewCompany;
};
export type PatchAdminCompaniesApiResponse =
  /** status 200 Company PATCH success count */ LoopbackCount;
export type PatchAdminCompaniesApiArg = {
  where?: any;
  companyPartial: CompanyPartial;
};
export type GetAdminCompaniesApiResponse =
  /** status 200 Array of Company model instances */ CompanyWithRelations[];
export type GetAdminCompaniesApiArg = {
  filter?: any;
};
export type GetCompaniesCountApiResponse =
  /** status 200 Company model count */ LoopbackCount;
export type GetCompaniesCountApiArg = {
  where?: any;
};
export type PutCompaniesByIdApiResponse = /** status 204 No Content */ any;
export type PutCompaniesByIdApiArg = {
  id: string;
  company: Company;
};
export type PatchCompaniesByIdApiResponse = /** status 204 No Content */ any;
export type PatchCompaniesByIdApiArg = {
  id: string;
  companyPartial: CompanyPartial;
};
export type GetCompaniesByIdApiResponse =
  /** status 200 Company model instance */ CompanyWithRelations;
export type GetCompaniesByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteCompaniesByIdApiResponse = /** status 204 No Content */ any;
export type DeleteCompaniesByIdApiArg = {
  id: string;
};
export type PostCompaniesApiResponse =
  /** status 200 Company model instance */ Company;
export type PostCompaniesApiArg = {
  newCompany: NewCompany;
};
export type PatchCompaniesApiResponse =
  /** status 200 Company PATCH success count */ LoopbackCount;
export type PatchCompaniesApiArg = {
  where?: any;
  companyPartial: CompanyPartial;
};
export type GetCompaniesApiResponse =
  /** status 200 Array of Company model instances */ CompanyWithRelations[];
export type GetCompaniesApiArg = {
  filter?: any;
};
export type GetDriversCompaniesListApiResponse = unknown;
export type GetDriversCompaniesListApiArg = void;
export type LoopbackCount = {
  count?: number;
};
export type Company = {
  id?: string;
  orgNo: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  [key: string]: any;
};
export type CompanyPartial = {
  id?: string;
  orgNo?: string;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  [key: string]: any;
};
export type PhoneNo = {
  code?: string;
  phoneNo?: string;
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
  status?: "Trial" | "Subscribed" | "UnSubscribed";
  expiredAt: string;
  plan: "Trial" | "Small" | "Medium" | "Large" | "XL";
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
  type?: string;
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
  reminderSealedBeforeNoDays?: string | null;
  reminderInspectionBeforeNoDays?: string | null;
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
export type Reply = {
  id?: string;
  user?: object;
  content?: string;
  type?: string;
  imageUrl?: string;
  voiceUrl?: string;
};
export type SmsWithRelations = {
  id?: string;
  content?: string;
  type: string;
  imageUrl?: string;
  voiceUrl?: string;
  from: string;
  to?: string;
  user?: object;
  userId?: string;
  isSentByDriver?: boolean;
  toDrivers?: ToDriver[];
  reply?: Reply;
  createdAt?: string;
  updatedAt?: string;
  User?: UserWithRelations;
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
  subscriptionId?: string;
  notificationToken?: string;
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
  subscription?: {
    id?: string;
    amount: number;
    status?: "Trial" | "Subscribed" | "UnSubscribed";
    expiredAt: string;
    plan: "Trial" | "Small" | "Medium" | "Large" | "XL";
    sessionId?: string;
    isActive?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deleted?: boolean;
    userId?: string;
    subscribedTo?: string;
    [key: string]: any;
  };
  carsCount?: number;
  driversCount?: number;
  sellCarsCount?: number;
  jobsCount?: number;
  canCreateAds?: boolean;
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
export type NewCompany = {
  orgNo: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  [key: string]: any;
};
export const {
  useGetAdminCompaniesCountQuery,
  usePutAdminCompaniesByIdMutation,
  usePatchAdminCompaniesByIdMutation,
  useGetAdminCompaniesByIdQuery,
  useDeleteAdminCompaniesByIdMutation,
  usePostAdminCompaniesMutation,
  usePatchAdminCompaniesMutation,
  useGetAdminCompaniesQuery,
  useGetCompaniesCountQuery,
  usePutCompaniesByIdMutation,
  usePatchCompaniesByIdMutation,
  useGetCompaniesByIdQuery,
  useDeleteCompaniesByIdMutation,
  usePostCompaniesMutation,
  usePatchCompaniesMutation,
  useGetCompaniesQuery,
  useGetDriversCompaniesListQuery,
} = injectedRtkApi;
