import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = ["AdminTagController", "TagController"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAdminTagsCount: build.query<
        GetAdminTagsCountApiResponse,
        GetAdminTagsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/tags/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminTagController"],
      }),
      putAdminTagsById: build.mutation<
        PutAdminTagsByIdApiResponse,
        PutAdminTagsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/tags/${queryArg.id}`,
          method: "PUT",
          body: queryArg.tag,
        }),
        invalidatesTags: ["AdminTagController"],
      }),
      patchAdminTagsById: build.mutation<
        PatchAdminTagsByIdApiResponse,
        PatchAdminTagsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/tags/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.tagPartial,
        }),
        invalidatesTags: ["AdminTagController"],
      }),
      getAdminTagsById: build.query<
        GetAdminTagsByIdApiResponse,
        GetAdminTagsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/tags/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminTagController"],
      }),
      deleteAdminTagsById: build.mutation<
        DeleteAdminTagsByIdApiResponse,
        DeleteAdminTagsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/tags/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminTagController"],
      }),
      postAdminTags: build.mutation<
        PostAdminTagsApiResponse,
        PostAdminTagsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/tags`,
          method: "POST",
          body: queryArg.newTag,
        }),
        invalidatesTags: ["AdminTagController"],
      }),
      patchAdminTags: build.mutation<
        PatchAdminTagsApiResponse,
        PatchAdminTagsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/tags`,
          method: "PATCH",
          body: queryArg.tagPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminTagController"],
      }),
      getAdminTags: build.query<GetAdminTagsApiResponse, GetAdminTagsApiArg>({
        query: (queryArg) => ({
          url: `/admin/tags`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminTagController"],
      }),
      getTagsCount: build.query<GetTagsCountApiResponse, GetTagsCountApiArg>({
        query: (queryArg) => ({
          url: `/tags/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["TagController"],
      }),
      putTagsById: build.mutation<PutTagsByIdApiResponse, PutTagsByIdApiArg>({
        query: (queryArg) => ({
          url: `/tags/${queryArg.id}`,
          method: "PUT",
          body: queryArg.tag,
        }),
        invalidatesTags: ["TagController"],
      }),
      patchTagsById: build.mutation<
        PatchTagsByIdApiResponse,
        PatchTagsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/tags/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.tagPartial,
        }),
        invalidatesTags: ["TagController"],
      }),
      getTagsById: build.query<GetTagsByIdApiResponse, GetTagsByIdApiArg>({
        query: (queryArg) => ({
          url: `/tags/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["TagController"],
      }),
      deleteTagsById: build.mutation<
        DeleteTagsByIdApiResponse,
        DeleteTagsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/tags/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["TagController"],
      }),
      postTags: build.mutation<PostTagsApiResponse, PostTagsApiArg>({
        query: (queryArg) => ({
          url: `/tags`,
          method: "POST",
          body: queryArg.newTag,
        }),
        invalidatesTags: ["TagController"],
      }),
      patchTags: build.mutation<PatchTagsApiResponse, PatchTagsApiArg>({
        query: (queryArg) => ({
          url: `/tags`,
          method: "PATCH",
          body: queryArg.tagPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["TagController"],
      }),
      getTags: build.query<GetTagsApiResponse, GetTagsApiArg>({
        query: (queryArg) => ({
          url: `/tags`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["TagController"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
export type GetAdminTagsCountApiResponse =
  /** status 200 Tag model count */ LoopbackCount;
export type GetAdminTagsCountApiArg = {
  where?: any;
};
export type PutAdminTagsByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminTagsByIdApiArg = {
  id: string;
  tag: Tag;
};
export type PatchAdminTagsByIdApiResponse = /** status 204 No Content */ any;
export type PatchAdminTagsByIdApiArg = {
  id: string;
  tagPartial: TagPartial;
};
export type GetAdminTagsByIdApiResponse =
  /** status 200 Tag model instance */ TagWithRelations;
export type GetAdminTagsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminTagsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteAdminTagsByIdApiArg = {
  id: string;
};
export type PostAdminTagsApiResponse = /** status 200 Tag model instance */ Tag;
export type PostAdminTagsApiArg = {
  newTag: NewTag;
};
export type PatchAdminTagsApiResponse =
  /** status 200 Tag PATCH success count */ LoopbackCount;
export type PatchAdminTagsApiArg = {
  where?: any;
  tagPartial: TagPartial;
};
export type GetAdminTagsApiResponse =
  /** status 200 Array of Tag model instances */ TagWithRelations[];
export type GetAdminTagsApiArg = {
  filter?: any;
};
export type GetTagsCountApiResponse =
  /** status 200 Tag model count */ LoopbackCount;
export type GetTagsCountApiArg = {
  where?: any;
};
export type PutTagsByIdApiResponse = /** status 204 No Content */ any;
export type PutTagsByIdApiArg = {
  id: string;
  tag: Tag;
};
export type PatchTagsByIdApiResponse = /** status 204 No Content */ any;
export type PatchTagsByIdApiArg = {
  id: string;
  tagPartial: TagPartial;
};
export type GetTagsByIdApiResponse =
  /** status 200 Tag model instance */ TagWithRelations;
export type GetTagsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteTagsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteTagsByIdApiArg = {
  id: string;
};
export type PostTagsApiResponse = /** status 200 Tag model instance */ Tag;
export type PostTagsApiArg = {
  newTag: NewTag;
};
export type PatchTagsApiResponse =
  /** status 200 Tag PATCH success count */ LoopbackCount;
export type PatchTagsApiArg = {
  where?: any;
  tagPartial: TagPartial;
};
export type GetTagsApiResponse =
  /** status 200 Array of Tag model instances */ TagWithRelations[];
export type GetTagsApiArg = {
  filter?: any;
};
export type LoopbackCount = {
  count?: number;
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
export type TagPartial = {
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
export type PhoneNo = {
  code?: string;
  phoneNo?: string;
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
export type NewTag = {
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
export const {
  useGetAdminTagsCountQuery,
  usePutAdminTagsByIdMutation,
  usePatchAdminTagsByIdMutation,
  useGetAdminTagsByIdQuery,
  useDeleteAdminTagsByIdMutation,
  usePostAdminTagsMutation,
  usePatchAdminTagsMutation,
  useGetAdminTagsQuery,
  useGetTagsCountQuery,
  usePutTagsByIdMutation,
  usePatchTagsByIdMutation,
  useGetTagsByIdQuery,
  useDeleteTagsByIdMutation,
  usePostTagsMutation,
  usePatchTagsMutation,
  useGetTagsQuery,
} = injectedRtkApi;
