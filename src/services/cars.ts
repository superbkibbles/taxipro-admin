import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = [
  "AdminCarController",
  "AdminSellCarController",
  "CarController",
  "CarTagController",
  "SellCarController",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAdminCarsCount: build.query<
        GetAdminCarsCountApiResponse,
        GetAdminCarsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/cars/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminCarController"],
      }),
      putAdminCarsById: build.mutation<
        PutAdminCarsByIdApiResponse,
        PutAdminCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/cars/${queryArg.id}`,
          method: "PUT",
          body: queryArg.car,
        }),
        invalidatesTags: ["AdminCarController"],
      }),
      patchAdminCarsById: build.mutation<
        PatchAdminCarsByIdApiResponse,
        PatchAdminCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/cars/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.carPartial,
        }),
        invalidatesTags: ["AdminCarController"],
      }),
      getAdminCarsById: build.query<
        GetAdminCarsByIdApiResponse,
        GetAdminCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/cars/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminCarController"],
      }),
      deleteAdminCarsById: build.mutation<
        DeleteAdminCarsByIdApiResponse,
        DeleteAdminCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/cars/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminCarController"],
      }),
      postAdminCars: build.mutation<
        PostAdminCarsApiResponse,
        PostAdminCarsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/cars`,
          method: "POST",
          body: queryArg.newCar,
        }),
        invalidatesTags: ["AdminCarController"],
      }),
      patchAdminCars: build.mutation<
        PatchAdminCarsApiResponse,
        PatchAdminCarsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/cars`,
          method: "PATCH",
          body: queryArg.carPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminCarController"],
      }),
      getAdminCars: build.query<GetAdminCarsApiResponse, GetAdminCarsApiArg>({
        query: (queryArg) => ({
          url: `/admin/cars`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminCarController"],
      }),
      getAdminSellCarsCount: build.query<
        GetAdminSellCarsCountApiResponse,
        GetAdminSellCarsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sellCars/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminSellCarController"],
      }),
      putAdminSellCarsById: build.mutation<
        PutAdminSellCarsByIdApiResponse,
        PutAdminSellCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sellCars/${queryArg.id}`,
          method: "PUT",
          body: queryArg.sellCar,
        }),
        invalidatesTags: ["AdminSellCarController"],
      }),
      patchAdminSellCarsById: build.mutation<
        PatchAdminSellCarsByIdApiResponse,
        PatchAdminSellCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sellCars/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.sellCarPartial,
        }),
        invalidatesTags: ["AdminSellCarController"],
      }),
      getAdminSellCarsById: build.query<
        GetAdminSellCarsByIdApiResponse,
        GetAdminSellCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sellCars/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminSellCarController"],
      }),
      deleteAdminSellCarsById: build.mutation<
        DeleteAdminSellCarsByIdApiResponse,
        DeleteAdminSellCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sellCars/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminSellCarController"],
      }),
      postAdminSellCars: build.mutation<
        PostAdminSellCarsApiResponse,
        PostAdminSellCarsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sellCars`,
          method: "POST",
          body: queryArg.newSellCar,
        }),
        invalidatesTags: ["AdminSellCarController"],
      }),
      patchAdminSellCars: build.mutation<
        PatchAdminSellCarsApiResponse,
        PatchAdminSellCarsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sellCars`,
          method: "PATCH",
          body: queryArg.sellCarPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminSellCarController"],
      }),
      getAdminSellCars: build.query<
        GetAdminSellCarsApiResponse,
        GetAdminSellCarsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/sellCars`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminSellCarController"],
      }),
      getCarsCount: build.query<GetCarsCountApiResponse, GetCarsCountApiArg>({
        query: (queryArg) => ({
          url: `/cars/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["CarController"],
      }),
      getCarsByIdTag: build.query<
        GetCarsByIdTagApiResponse,
        GetCarsByIdTagApiArg
      >({
        query: (queryArg) => ({ url: `/cars/${queryArg.id}/tag` }),
        providesTags: ["CarTagController"],
      }),
      putCarsById: build.mutation<PutCarsByIdApiResponse, PutCarsByIdApiArg>({
        query: (queryArg) => ({
          url: `/cars/${queryArg.id}`,
          method: "PUT",
          body: queryArg.car,
        }),
        invalidatesTags: ["CarController"],
      }),
      patchCarsById: build.mutation<
        PatchCarsByIdApiResponse,
        PatchCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/cars/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.carPartial,
        }),
        invalidatesTags: ["CarController"],
      }),
      getCarsById: build.query<GetCarsByIdApiResponse, GetCarsByIdApiArg>({
        query: (queryArg) => ({
          url: `/cars/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["CarController"],
      }),
      deleteCarsById: build.mutation<
        DeleteCarsByIdApiResponse,
        DeleteCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/cars/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["CarController"],
      }),
      postCars: build.mutation<PostCarsApiResponse, PostCarsApiArg>({
        query: (queryArg) => ({
          url: `/cars`,
          method: "POST",
          body: queryArg.newCar,
        }),
        invalidatesTags: ["CarController"],
      }),
      patchCars: build.mutation<PatchCarsApiResponse, PatchCarsApiArg>({
        query: (queryArg) => ({
          url: `/cars`,
          method: "PATCH",
          body: queryArg.carPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["CarController"],
      }),
      getCars: build.query<GetCarsApiResponse, GetCarsApiArg>({
        query: (queryArg) => ({
          url: `/cars`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["CarController"],
      }),
      getSellCarsCount: build.query<
        GetSellCarsCountApiResponse,
        GetSellCarsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/sellCars/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["SellCarController"],
      }),
      putSellCarsById: build.mutation<
        PutSellCarsByIdApiResponse,
        PutSellCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/sellCars/${queryArg.id}`,
          method: "PUT",
          body: queryArg.sellCar,
        }),
        invalidatesTags: ["SellCarController"],
      }),
      patchSellCarsById: build.mutation<
        PatchSellCarsByIdApiResponse,
        PatchSellCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/sellCars/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.sellCarPartial,
        }),
        invalidatesTags: ["SellCarController"],
      }),
      getSellCarsById: build.query<
        GetSellCarsByIdApiResponse,
        GetSellCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/sellCars/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["SellCarController"],
      }),
      deleteSellCarsById: build.mutation<
        DeleteSellCarsByIdApiResponse,
        DeleteSellCarsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/sellCars/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["SellCarController"],
      }),
      postSellCars: build.mutation<PostSellCarsApiResponse, PostSellCarsApiArg>(
        {
          query: (queryArg) => ({
            url: `/sellCars`,
            method: "POST",
            body: queryArg.newSellCar,
          }),
          invalidatesTags: ["SellCarController"],
        }
      ),
      patchSellCars: build.mutation<
        PatchSellCarsApiResponse,
        PatchSellCarsApiArg
      >({
        query: (queryArg) => ({
          url: `/sellCars`,
          method: "PATCH",
          body: queryArg.sellCarPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["SellCarController"],
      }),
      getSellCars: build.query<GetSellCarsApiResponse, GetSellCarsApiArg>({
        query: (queryArg) => ({
          url: `/sellCars`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["SellCarController"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
export type GetAdminCarsCountApiResponse =
  /** status 200 Car model count */ LoopbackCount;
export type GetAdminCarsCountApiArg = {
  where?: any;
};
export type PutAdminCarsByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminCarsByIdApiArg = {
  id: string;
  car: Car;
};
export type PatchAdminCarsByIdApiResponse = /** status 204 No Content */ any;
export type PatchAdminCarsByIdApiArg = {
  id: string;
  carPartial: CarPartial;
};
export type GetAdminCarsByIdApiResponse =
  /** status 200 Car model instance */ CarWithRelations;
export type GetAdminCarsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminCarsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteAdminCarsByIdApiArg = {
  id: string;
};
export type PostAdminCarsApiResponse = /** status 200 Car model instance */ Car;
export type PostAdminCarsApiArg = {
  newCar: NewCar;
};
export type PatchAdminCarsApiResponse =
  /** status 200 Car PATCH success count */ LoopbackCount;
export type PatchAdminCarsApiArg = {
  where?: any;
  carPartial: CarPartial;
};
export type GetAdminCarsApiResponse =
  /** status 200 Array of Car model instances */ CarWithRelations[];
export type GetAdminCarsApiArg = {
  filter?: any;
};
export type GetAdminSellCarsCountApiResponse =
  /** status 200 SellCar model count */ LoopbackCount;
export type GetAdminSellCarsCountApiArg = {
  where?: any;
};
export type PutAdminSellCarsByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminSellCarsByIdApiArg = {
  id: string;
  sellCar: SellCar;
};
export type PatchAdminSellCarsByIdApiResponse =
  /** status 204 No Content */ any;
export type PatchAdminSellCarsByIdApiArg = {
  id: string;
  sellCarPartial: SellCarPartial;
};
export type GetAdminSellCarsByIdApiResponse =
  /** status 200 SellCar model instance */ SellCarWithRelations;
export type GetAdminSellCarsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminSellCarsByIdApiResponse =
  /** status 204 No Content */ any;
export type DeleteAdminSellCarsByIdApiArg = {
  id: string;
};
export type PostAdminSellCarsApiResponse =
  /** status 200 SellCar model instance */ SellCar;
export type PostAdminSellCarsApiArg = {
  newSellCar: NewSellCar;
};
export type PatchAdminSellCarsApiResponse =
  /** status 200 SellCar PATCH success count */ LoopbackCount;
export type PatchAdminSellCarsApiArg = {
  where?: any;
  sellCarPartial: SellCarPartial;
};
export type GetAdminSellCarsApiResponse =
  /** status 200 Array of SellCar model instances */ SellCarWithRelations[];
export type GetAdminSellCarsApiArg = {
  filter?: any;
};
export type GetCarsCountApiResponse =
  /** status 200 Car model count */ LoopbackCount;
export type GetCarsCountApiArg = {
  where?: any;
};
export type GetCarsByIdTagApiResponse =
  /** status 200 Tag belonging to Car */ Tag;
export type GetCarsByIdTagApiArg = {
  id: string;
};
export type PutCarsByIdApiResponse = /** status 204 No Content */ any;
export type PutCarsByIdApiArg = {
  id: string;
  car: Car;
};
export type PatchCarsByIdApiResponse = /** status 204 No Content */ any;
export type PatchCarsByIdApiArg = {
  id: string;
  carPartial: CarPartial;
};
export type GetCarsByIdApiResponse =
  /** status 200 Car model instance */ CarWithRelations;
export type GetCarsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteCarsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteCarsByIdApiArg = {
  id: string;
};
export type PostCarsApiResponse = /** status 200 Car model instance */ Car;
export type PostCarsApiArg = {
  newCar: NewCar;
};
export type PatchCarsApiResponse =
  /** status 200 Car PATCH success count */ LoopbackCount;
export type PatchCarsApiArg = {
  where?: any;
  carPartial: CarPartial;
};
export type GetCarsApiResponse =
  /** status 200 Array of Car model instances */ CarWithRelations[];
export type GetCarsApiArg = {
  filter?: any;
};
export type GetSellCarsCountApiResponse =
  /** status 200 SellCar model count */ LoopbackCount;
export type GetSellCarsCountApiArg = {
  where?: any;
};
export type PutSellCarsByIdApiResponse = /** status 204 No Content */ any;
export type PutSellCarsByIdApiArg = {
  id: string;
  sellCar: SellCar;
};
export type PatchSellCarsByIdApiResponse = /** status 204 No Content */ any;
export type PatchSellCarsByIdApiArg = {
  id: string;
  sellCarPartial: SellCarPartial;
};
export type GetSellCarsByIdApiResponse =
  /** status 200 SellCar model instance */ SellCarWithRelations;
export type GetSellCarsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteSellCarsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteSellCarsByIdApiArg = {
  id: string;
};
export type PostSellCarsApiResponse =
  /** status 200 SellCar model instance */ SellCar;
export type PostSellCarsApiArg = {
  newSellCar: NewSellCar;
};
export type PatchSellCarsApiResponse =
  /** status 200 SellCar PATCH success count */ LoopbackCount;
export type PatchSellCarsApiArg = {
  where?: any;
  sellCarPartial: SellCarPartial;
};
export type GetSellCarsApiResponse =
  /** status 200 Array of SellCar model instances */ SellCarWithRelations[];
export type GetSellCarsApiArg = {
  filter?: any;
};
export type LoopbackCount = {
  count?: number;
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
export type Car = {
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
};
export type CarPartial = {
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
export type NewCar = {
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
};
export type SellCar = {
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
};
export type SellCarPartial = {
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
};
export type NewSellCar = {
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
};
export const {
  useGetAdminCarsCountQuery,
  usePutAdminCarsByIdMutation,
  usePatchAdminCarsByIdMutation,
  useGetAdminCarsByIdQuery,
  useDeleteAdminCarsByIdMutation,
  usePostAdminCarsMutation,
  usePatchAdminCarsMutation,
  useGetAdminCarsQuery,
  useGetAdminSellCarsCountQuery,
  usePutAdminSellCarsByIdMutation,
  usePatchAdminSellCarsByIdMutation,
  useGetAdminSellCarsByIdQuery,
  useDeleteAdminSellCarsByIdMutation,
  usePostAdminSellCarsMutation,
  usePatchAdminSellCarsMutation,
  useGetAdminSellCarsQuery,
  useGetCarsCountQuery,
  useGetCarsByIdTagQuery,
  usePutCarsByIdMutation,
  usePatchCarsByIdMutation,
  useGetCarsByIdQuery,
  useDeleteCarsByIdMutation,
  usePostCarsMutation,
  usePatchCarsMutation,
  useGetCarsQuery,
  useGetSellCarsCountQuery,
  usePutSellCarsByIdMutation,
  usePatchSellCarsByIdMutation,
  useGetSellCarsByIdQuery,
  useDeleteSellCarsByIdMutation,
  usePostSellCarsMutation,
  usePatchSellCarsMutation,
  useGetSellCarsQuery,
} = injectedRtkApi;
