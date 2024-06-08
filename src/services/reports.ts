import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = [
  "AdminReportController",
  "DriverReportController",
  "ReportController",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAdminReportsCount: build.query<
        GetAdminReportsCountApiResponse,
        GetAdminReportsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminReportController"],
      }),
      putAdminReportsById: build.mutation<
        PutAdminReportsByIdApiResponse,
        PutAdminReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports/${queryArg.id}`,
          method: "PUT",
          body: queryArg.report,
        }),
        invalidatesTags: ["AdminReportController"],
      }),
      patchAdminReportsById: build.mutation<
        PatchAdminReportsByIdApiResponse,
        PatchAdminReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.reportPartial,
        }),
        invalidatesTags: ["AdminReportController"],
      }),
      getAdminReportsById: build.query<
        GetAdminReportsByIdApiResponse,
        GetAdminReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminReportController"],
      }),
      deleteAdminReportsById: build.mutation<
        DeleteAdminReportsByIdApiResponse,
        DeleteAdminReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminReportController"],
      }),
      postAdminReports: build.mutation<
        PostAdminReportsApiResponse,
        PostAdminReportsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports`,
          method: "POST",
          body: queryArg.newReport,
        }),
        invalidatesTags: ["AdminReportController"],
      }),
      patchAdminReports: build.mutation<
        PatchAdminReportsApiResponse,
        PatchAdminReportsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports`,
          method: "PATCH",
          body: queryArg.reportPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminReportController"],
      }),
      getAdminReports: build.query<
        GetAdminReportsApiResponse,
        GetAdminReportsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminReportController"],
      }),
      getDriverReportsCount: build.query<
        GetDriverReportsCountApiResponse,
        GetDriverReportsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/driver/reports/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["DriverReportController"],
      }),
      patchDriverReportsById: build.mutation<
        PatchDriverReportsByIdApiResponse,
        PatchDriverReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/driver/reports/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.reportPartial,
        }),
        invalidatesTags: ["DriverReportController"],
      }),
      getDriverReportsById: build.query<
        GetDriverReportsByIdApiResponse,
        GetDriverReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/driver/reports/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["DriverReportController"],
      }),
      postDriverReports: build.mutation<
        PostDriverReportsApiResponse,
        PostDriverReportsApiArg
      >({
        query: (queryArg) => ({
          url: `/driver/reports`,
          method: "POST",
          body: queryArg.newReport,
        }),
        invalidatesTags: ["DriverReportController"],
      }),
      getDriverReports: build.query<
        GetDriverReportsApiResponse,
        GetDriverReportsApiArg
      >({
        query: (queryArg) => ({
          url: `/driver/reports`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["DriverReportController"],
      }),
      postFindExistingReports: build.mutation<
        PostFindExistingReportsApiResponse,
        PostFindExistingReportsApiArg
      >({
        query: (queryArg) => ({
          url: `/find-existing-reports`,
          method: "POST",
          body: queryArg.body,
        }),
        invalidatesTags: ["ReportController"],
      }),
      getReportsCount: build.query<
        GetReportsCountApiResponse,
        GetReportsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/reports/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["ReportController"],
      }),
      putReportsById: build.mutation<
        PutReportsByIdApiResponse,
        PutReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/reports/${queryArg.id}`,
          method: "PUT",
          body: queryArg.report,
        }),
        invalidatesTags: ["ReportController"],
      }),
      patchReportsById: build.mutation<
        PatchReportsByIdApiResponse,
        PatchReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/reports/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.reportPartial,
        }),
        invalidatesTags: ["ReportController"],
      }),
      getReportsById: build.query<
        GetReportsByIdApiResponse,
        GetReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/reports/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["ReportController"],
      }),
      deleteReportsById: build.mutation<
        DeleteReportsByIdApiResponse,
        DeleteReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/reports/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["ReportController"],
      }),
      postReports: build.mutation<PostReportsApiResponse, PostReportsApiArg>({
        query: (queryArg) => ({
          url: `/reports`,
          method: "POST",
          body: queryArg.newReport,
        }),
        invalidatesTags: ["ReportController"],
      }),
      patchReports: build.mutation<PatchReportsApiResponse, PatchReportsApiArg>(
        {
          query: (queryArg) => ({
            url: `/reports`,
            method: "PATCH",
            body: queryArg.reportPartial,
            params: { where: queryArg.where },
          }),
          invalidatesTags: ["ReportController"],
        }
      ),
      getReports: build.query<GetReportsApiResponse, GetReportsApiArg>({
        query: (queryArg) => ({
          url: `/reports`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["ReportController"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
export type GetAdminReportsCountApiResponse =
  /** status 200 Report model count */ LoopbackCount;
export type GetAdminReportsCountApiArg = {
  where?: any;
};
export type PutAdminReportsByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminReportsByIdApiArg = {
  id: string;
  report: Report;
};
export type PatchAdminReportsByIdApiResponse = /** status 204 No Content */ any;
export type PatchAdminReportsByIdApiArg = {
  id: string;
  reportPartial: ReportPartial;
};
export type GetAdminReportsByIdApiResponse =
  /** status 200 Report model instance */ ReportWithRelations;
export type GetAdminReportsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminReportsByIdApiResponse =
  /** status 204 No Content */ any;
export type DeleteAdminReportsByIdApiArg = {
  id: string;
};
export type PostAdminReportsApiResponse =
  /** status 200 Report model instance */ Report;
export type PostAdminReportsApiArg = {
  newReport: NewReport;
};
export type PatchAdminReportsApiResponse =
  /** status 200 Report PATCH success count */ LoopbackCount;
export type PatchAdminReportsApiArg = {
  where?: any;
  reportPartial: ReportPartial;
};
export type GetAdminReportsApiResponse =
  /** status 200 Array of Report model instances */ ReportWithRelations[];
export type GetAdminReportsApiArg = {
  filter?: any;
};
export type GetDriverReportsCountApiResponse =
  /** status 200 Report model count */ LoopbackCount;
export type GetDriverReportsCountApiArg = {
  where?: any;
};
export type PatchDriverReportsByIdApiResponse =
  /** status 204 No Content */ any;
export type PatchDriverReportsByIdApiArg = {
  id: string;
  reportPartial: ReportPartial;
};
export type GetDriverReportsByIdApiResponse =
  /** status 200 Report model instance */ ReportWithRelations;
export type GetDriverReportsByIdApiArg = {
  id: string;
  filter?: any;
};
export type PostDriverReportsApiResponse =
  /** status 200 Report model instance */ Report;
export type PostDriverReportsApiArg = {
  newReport: NewReport;
};
export type GetDriverReportsApiResponse =
  /** status 200 Array of Report model instances */ ReportWithRelations[];
export type GetDriverReportsApiArg = {
  filter?: any;
};
export type PostFindExistingReportsApiResponse = unknown;
export type PostFindExistingReportsApiArg = {
  body: object;
};
export type GetReportsCountApiResponse =
  /** status 200 Report model count */ LoopbackCount;
export type GetReportsCountApiArg = {
  where?: any;
};
export type PutReportsByIdApiResponse = /** status 204 No Content */ any;
export type PutReportsByIdApiArg = {
  id: string;
  report: Report;
};
export type PatchReportsByIdApiResponse = /** status 204 No Content */ any;
export type PatchReportsByIdApiArg = {
  id: string;
  reportPartial: ReportPartial;
};
export type GetReportsByIdApiResponse =
  /** status 200 Report model instance */ ReportWithRelations;
export type GetReportsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteReportsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteReportsByIdApiArg = {
  id: string;
};
export type PostReportsApiResponse =
  /** status 200 Report model instance */ Report;
export type PostReportsApiArg = {
  newReport: NewReport;
};
export type PatchReportsApiResponse =
  /** status 200 Report PATCH success count */ LoopbackCount;
export type PatchReportsApiArg = {
  where?: any;
  reportPartial: ReportPartial;
};
export type GetReportsApiResponse =
  /** status 200 Array of Report model instances */ ReportWithRelations[];
export type GetReportsApiArg = {
  filter?: any;
};
export type LoopbackCount = {
  count?: number;
};
export type Report = {
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
};
export type ReportPartial = {
  id?: string;
  from?: string | null;
  to?: string | null;
  month?: string;
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
  blockAfter?: string;
  blocked?: boolean;
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
export type NewReport = {
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
};
export const {
  useGetAdminReportsCountQuery,
  usePutAdminReportsByIdMutation,
  usePatchAdminReportsByIdMutation,
  useGetAdminReportsByIdQuery,
  useDeleteAdminReportsByIdMutation,
  usePostAdminReportsMutation,
  usePatchAdminReportsMutation,
  useGetAdminReportsQuery,
  useGetDriverReportsCountQuery,
  usePatchDriverReportsByIdMutation,
  useGetDriverReportsByIdQuery,
  usePostDriverReportsMutation,
  useGetDriverReportsQuery,
  usePostFindExistingReportsMutation,
  useGetReportsCountQuery,
  usePutReportsByIdMutation,
  usePatchReportsByIdMutation,
  useGetReportsByIdQuery,
  useDeleteReportsByIdMutation,
  usePostReportsMutation,
  usePatchReportsMutation,
  useGetReportsQuery,
} = injectedRtkApi;
