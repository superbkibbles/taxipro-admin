import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = [
  "ActivityController",
  "AdminActivityController",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getActivitiesCount: build.query<
        GetActivitiesCountApiResponse,
        GetActivitiesCountApiArg
      >({
        query: (queryArg) => ({
          url: `/activities/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["ActivityController"],
      }),
      putActivitiesById: build.mutation<
        PutActivitiesByIdApiResponse,
        PutActivitiesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/activities/${queryArg.id}`,
          method: "PUT",
          body: queryArg.activity,
        }),
        invalidatesTags: ["ActivityController"],
      }),
      patchActivitiesById: build.mutation<
        PatchActivitiesByIdApiResponse,
        PatchActivitiesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/activities/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.activityPartial,
        }),
        invalidatesTags: ["ActivityController"],
      }),
      getActivitiesById: build.query<
        GetActivitiesByIdApiResponse,
        GetActivitiesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/activities/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["ActivityController"],
      }),
      deleteActivitiesById: build.mutation<
        DeleteActivitiesByIdApiResponse,
        DeleteActivitiesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/activities/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["ActivityController"],
      }),
      postActivities: build.mutation<
        PostActivitiesApiResponse,
        PostActivitiesApiArg
      >({
        query: (queryArg) => ({
          url: `/activities`,
          method: "POST",
          body: queryArg.newActivity,
        }),
        invalidatesTags: ["ActivityController"],
      }),
      patchActivities: build.mutation<
        PatchActivitiesApiResponse,
        PatchActivitiesApiArg
      >({
        query: (queryArg) => ({
          url: `/activities`,
          method: "PATCH",
          body: queryArg.activityPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["ActivityController"],
      }),
      getActivities: build.query<GetActivitiesApiResponse, GetActivitiesApiArg>(
        {
          query: (queryArg) => ({
            url: `/activities`,
            params: { filter: queryArg.filter },
          }),
          providesTags: ["ActivityController"],
        }
      ),
      getAdminActivitiesCount: build.query<
        GetAdminActivitiesCountApiResponse,
        GetAdminActivitiesCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/activities/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminActivityController"],
      }),
      putAdminActivitiesById: build.mutation<
        PutAdminActivitiesByIdApiResponse,
        PutAdminActivitiesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/activities/${queryArg.id}`,
          method: "PUT",
          body: queryArg.activity,
        }),
        invalidatesTags: ["AdminActivityController"],
      }),
      patchAdminActivitiesById: build.mutation<
        PatchAdminActivitiesByIdApiResponse,
        PatchAdminActivitiesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/activities/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.activityPartial,
        }),
        invalidatesTags: ["AdminActivityController"],
      }),
      getAdminActivitiesById: build.query<
        GetAdminActivitiesByIdApiResponse,
        GetAdminActivitiesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/activities/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminActivityController"],
      }),
      deleteAdminActivitiesById: build.mutation<
        DeleteAdminActivitiesByIdApiResponse,
        DeleteAdminActivitiesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/activities/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminActivityController"],
      }),
      postAdminActivities: build.mutation<
        PostAdminActivitiesApiResponse,
        PostAdminActivitiesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/activities`,
          method: "POST",
          body: queryArg.newActivity,
        }),
        invalidatesTags: ["AdminActivityController"],
      }),
      patchAdminActivities: build.mutation<
        PatchAdminActivitiesApiResponse,
        PatchAdminActivitiesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/activities`,
          method: "PATCH",
          body: queryArg.activityPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminActivityController"],
      }),
      getAdminActivities: build.query<
        GetAdminActivitiesApiResponse,
        GetAdminActivitiesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/activities`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminActivityController"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
export type GetActivitiesCountApiResponse =
  /** status 200 Activity model count */ LoopbackCount;
export type GetActivitiesCountApiArg = {
  where?: any;
};
export type PutActivitiesByIdApiResponse = /** status 204 No Content */ any;
export type PutActivitiesByIdApiArg = {
  id: string;
  activity: Activity;
};
export type PatchActivitiesByIdApiResponse = /** status 204 No Content */ any;
export type PatchActivitiesByIdApiArg = {
  id: string;
  activityPartial: ActivityPartial;
};
export type GetActivitiesByIdApiResponse =
  /** status 200 Activity model instance */ ActivityWithRelations;
export type GetActivitiesByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteActivitiesByIdApiResponse = /** status 204 No Content */ any;
export type DeleteActivitiesByIdApiArg = {
  id: string;
};
export type PostActivitiesApiResponse =
  /** status 200 Activity model instance */ Activity;
export type PostActivitiesApiArg = {
  newActivity: NewActivity;
};
export type PatchActivitiesApiResponse =
  /** status 200 Activity PATCH success count */ LoopbackCount;
export type PatchActivitiesApiArg = {
  where?: any;
  activityPartial: ActivityPartial;
};
export type GetActivitiesApiResponse =
  /** status 200 Array of Activity model instances */ ActivityWithRelations[];
export type GetActivitiesApiArg = {
  filter?: any;
};
export type GetAdminActivitiesCountApiResponse =
  /** status 200 Activity model count */ LoopbackCount;
export type GetAdminActivitiesCountApiArg = {
  where?: any;
};
export type PutAdminActivitiesByIdApiResponse =
  /** status 204 No Content */ any;
export type PutAdminActivitiesByIdApiArg = {
  id: string;
  activity: Activity;
};
export type PatchAdminActivitiesByIdApiResponse =
  /** status 204 No Content */ any;
export type PatchAdminActivitiesByIdApiArg = {
  id: string;
  activityPartial: ActivityPartial;
};
export type GetAdminActivitiesByIdApiResponse =
  /** status 200 Activity model instance */ ActivityWithRelations;
export type GetAdminActivitiesByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminActivitiesByIdApiResponse =
  /** status 204 No Content */ any;
export type DeleteAdminActivitiesByIdApiArg = {
  id: string;
};
export type PostAdminActivitiesApiResponse =
  /** status 200 Activity model instance */ Activity;
export type PostAdminActivitiesApiArg = {
  newActivity: NewActivity;
};
export type PatchAdminActivitiesApiResponse =
  /** status 200 Activity PATCH success count */ LoopbackCount;
export type PatchAdminActivitiesApiArg = {
  where?: any;
  activityPartial: ActivityPartial;
};
export type GetAdminActivitiesApiResponse =
  /** status 200 Array of Activity model instances */ ActivityWithRelations[];
export type GetAdminActivitiesApiArg = {
  filter?: any;
};
export type LoopbackCount = {
  count?: number;
};
export type Activity = {
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
};
export type ActivityPartial = {
  id?: string;
  title?: string;
  description?: string;
  type?: string;
  resourceId?: string;
  timestamp?: string;
  reminderTimestamp?: string | null;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
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
export type NewActivity = {
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
};
export const {
  useGetActivitiesCountQuery,
  usePutActivitiesByIdMutation,
  usePatchActivitiesByIdMutation,
  useGetActivitiesByIdQuery,
  useDeleteActivitiesByIdMutation,
  usePostActivitiesMutation,
  usePatchActivitiesMutation,
  useGetActivitiesQuery,
  useGetAdminActivitiesCountQuery,
  usePutAdminActivitiesByIdMutation,
  usePatchAdminActivitiesByIdMutation,
  useGetAdminActivitiesByIdQuery,
  useDeleteAdminActivitiesByIdMutation,
  usePostAdminActivitiesMutation,
  usePatchAdminActivitiesMutation,
  useGetAdminActivitiesQuery,
} = injectedRtkApi;
