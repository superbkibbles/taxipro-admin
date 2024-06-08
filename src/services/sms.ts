import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = ["AdminSmsController", "SmsController"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAdminSmsCount: build.query<
        GetAdminSmsCountApiResponse,
        GetAdminSmsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sms/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminSmsController"],
      }),
      putAdminSmsById: build.mutation<
        PutAdminSmsByIdApiResponse,
        PutAdminSmsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sms/${queryArg.id}`,
          method: "PUT",
          body: queryArg.sms,
        }),
        invalidatesTags: ["AdminSmsController"],
      }),
      patchAdminSmsById: build.mutation<
        PatchAdminSmsByIdApiResponse,
        PatchAdminSmsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sms/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.smsPartial,
        }),
        invalidatesTags: ["AdminSmsController"],
      }),
      getAdminSmsById: build.query<
        GetAdminSmsByIdApiResponse,
        GetAdminSmsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sms/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminSmsController"],
      }),
      deleteAdminSmsById: build.mutation<
        DeleteAdminSmsByIdApiResponse,
        DeleteAdminSmsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sms/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminSmsController"],
      }),
      postAdminSms: build.mutation<PostAdminSmsApiResponse, PostAdminSmsApiArg>(
        {
          query: (queryArg) => ({
            url: `/admin/sms`,
            method: "POST",
            body: queryArg.newSms,
          }),
          invalidatesTags: ["AdminSmsController"],
        }
      ),
      patchAdminSms: build.mutation<
        PatchAdminSmsApiResponse,
        PatchAdminSmsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sms`,
          method: "PATCH",
          body: queryArg.smsPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminSmsController"],
      }),
      getAdminSms: build.query<GetAdminSmsApiResponse, GetAdminSmsApiArg>({
        query: (queryArg) => ({
          url: `/admin/sms`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminSmsController"],
      }),
      getSmsCount: build.query<GetSmsCountApiResponse, GetSmsCountApiArg>({
        query: (queryArg) => ({
          url: `/sms/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["SmsController"],
      }),
      putSmsById: build.mutation<PutSmsByIdApiResponse, PutSmsByIdApiArg>({
        query: (queryArg) => ({
          url: `/sms/${queryArg.id}`,
          method: "PUT",
          body: queryArg.sms,
        }),
        invalidatesTags: ["SmsController"],
      }),
      patchSmsById: build.mutation<PatchSmsByIdApiResponse, PatchSmsByIdApiArg>(
        {
          query: (queryArg) => ({
            url: `/sms/${queryArg.id}`,
            method: "PATCH",
            body: queryArg.smsPartial,
          }),
          invalidatesTags: ["SmsController"],
        }
      ),
      getSmsById: build.query<GetSmsByIdApiResponse, GetSmsByIdApiArg>({
        query: (queryArg) => ({
          url: `/sms/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["SmsController"],
      }),
      deleteSmsById: build.mutation<
        DeleteSmsByIdApiResponse,
        DeleteSmsByIdApiArg
      >({
        query: (queryArg) => ({ url: `/sms/${queryArg.id}`, method: "DELETE" }),
        invalidatesTags: ["SmsController"],
      }),
      postSms: build.mutation<PostSmsApiResponse, PostSmsApiArg>({
        query: (queryArg) => ({
          url: `/sms`,
          method: "POST",
          body: queryArg.newSms,
        }),
        invalidatesTags: ["SmsController"],
      }),
      patchSms: build.mutation<PatchSmsApiResponse, PatchSmsApiArg>({
        query: (queryArg) => ({
          url: `/sms`,
          method: "PATCH",
          body: queryArg.smsPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["SmsController"],
      }),
      getSms: build.query<GetSmsApiResponse, GetSmsApiArg>({
        query: (queryArg) => ({
          url: `/sms`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["SmsController"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
export type GetAdminSmsCountApiResponse =
  /** status 200 Sms model count */ LoopbackCount;
export type GetAdminSmsCountApiArg = {
  where?: any;
};
export type PutAdminSmsByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminSmsByIdApiArg = {
  id: string;
  sms: Sms;
};
export type PatchAdminSmsByIdApiResponse = /** status 204 No Content */ any;
export type PatchAdminSmsByIdApiArg = {
  id: string;
  smsPartial: SmsPartial;
};
export type GetAdminSmsByIdApiResponse =
  /** status 200 Sms model instance */ SmsWithRelations;
export type GetAdminSmsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminSmsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteAdminSmsByIdApiArg = {
  id: string;
};
export type PostAdminSmsApiResponse = /** status 200 Sms model instance */ Sms;
export type PostAdminSmsApiArg = {
  newSms: NewSms;
};
export type PatchAdminSmsApiResponse =
  /** status 200 Sms PATCH success count */ LoopbackCount;
export type PatchAdminSmsApiArg = {
  where?: any;
  smsPartial: SmsPartial;
};
export type GetAdminSmsApiResponse =
  /** status 200 Array of Sms model instances */ SmsWithRelations[];
export type GetAdminSmsApiArg = {
  filter?: any;
};
export type GetSmsCountApiResponse =
  /** status 200 Sms model count */ LoopbackCount;
export type GetSmsCountApiArg = {
  where?: any;
};
export type PutSmsByIdApiResponse = /** status 204 No Content */ any;
export type PutSmsByIdApiArg = {
  id: string;
  sms: Sms;
};
export type PatchSmsByIdApiResponse = /** status 204 No Content */ any;
export type PatchSmsByIdApiArg = {
  id: string;
  smsPartial: SmsPartial;
};
export type GetSmsByIdApiResponse =
  /** status 200 Sms model instance */ SmsWithRelations;
export type GetSmsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteSmsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteSmsByIdApiArg = {
  id: string;
};
export type PostSmsApiResponse = /** status 200 Sms model instance */ Sms;
export type PostSmsApiArg = {
  newSms: NewSms;
};
export type PatchSmsApiResponse =
  /** status 200 Sms PATCH success count */ LoopbackCount;
export type PatchSmsApiArg = {
  where?: any;
  smsPartial: SmsPartial;
};
export type GetSmsApiResponse =
  /** status 200 Array of Sms model instances */ SmsWithRelations[];
export type GetSmsApiArg = {
  filter?: any;
};
export type LoopbackCount = {
  count?: number;
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
export type Sms = {
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
};
export type SmsPartial = {
  id?: string;
  content?: string;
  type?: string;
  imageUrl?: string;
  voiceUrl?: string;
  from?: string;
  to?: string;
  user?: object;
  userId?: string;
  isSentByDriver?: boolean;
  toDrivers?: ToDriver[];
  reply?: Reply;
  createdAt?: string;
  updatedAt?: string;
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
export type NewSms = {
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
};
export const {
  useGetAdminSmsCountQuery,
  usePutAdminSmsByIdMutation,
  usePatchAdminSmsByIdMutation,
  useGetAdminSmsByIdQuery,
  useDeleteAdminSmsByIdMutation,
  usePostAdminSmsMutation,
  usePatchAdminSmsMutation,
  useGetAdminSmsQuery,
  useGetSmsCountQuery,
  usePutSmsByIdMutation,
  usePatchSmsByIdMutation,
  useGetSmsByIdQuery,
  useDeleteSmsByIdMutation,
  usePostSmsMutation,
  usePatchSmsMutation,
  useGetSmsQuery,
} = injectedRtkApi;
