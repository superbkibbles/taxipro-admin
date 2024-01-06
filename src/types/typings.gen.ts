/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Activity */
export interface Activity {
  id?: string;
  title?: string;
  description?: string;
  type?: string;
  resourceId?: string;
  /** @format date-time */
  timestamp: string;
  /** @format date-time */
  reminderTimestamp?: string | null;
  isActive?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
}

/**
 * NewActivity
 * (tsType: Omit<Activity, 'id'>, schemaOptions: { title: 'NewActivity', exclude: [ 'id' ] })
 */
export interface NewActivity {
  title?: string;
  description?: string;
  type?: string;
  resourceId?: string;
  /** @format date-time */
  timestamp: string;
  /** @format date-time */
  reminderTimestamp?: string | null;
  isActive?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
}

/** ToDriver */
export interface ToDriver {
  id?: string;
  name?: string;
  email?: string;
}

/** Doc */
export interface Doc {
  uid: string;
  path: string;
  url: string;
  s3Path?: string;
  name: string;
  mimeType?: string;
  fileSize?: string;
  uploadedOn?: string;
  status?: string;
}

/** PhoneNo */
export interface PhoneNo {
  code?: string;
  phoneNo?: string;
}

/** CarAssignedDrivers */
export interface CarAssignedDrivers {
  workType?: string;
  driver?: {
    id?: string;
    name?: string;
  };
}

/** Service */
export interface Service {
  name?: string;
  kmDone?: number;
}

/** Tag */
export interface Tag {
  id?: string;
  title?: string;
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
}

/**
 * UserCredentialsWithRelations
 * (tsType: UserCredentialsWithRelations, schemaOptions: { includeRelations: true })
 */
export interface UserCredentialsWithRelations {
  id?: string;
  password: string;
  socketToken?: string;
  userId?: string;
  deleted?: boolean;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
}

/**
 * ResetPasswordInfoWithRelations
 * (tsType: ResetPasswordInfoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ResetPasswordInfoWithRelations {
  id?: number;
  userId?: string;
  token: string;
  type: string;
  role: string;
  /** @format date-time */
  expiredOn: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
  [key: string]: any;
}

/**
 * SubscriptionWithRelations
 * (tsType: SubscriptionWithRelations, schemaOptions: { includeRelations: true })
 */
export interface SubscriptionWithRelations {
  id?: string;
  amount: number;
  status?: "Subscribed" | "UnSubscribed";
  /** @format date-time */
  expiredAt: string;
  plan: "Monthly" | "LifeTime";
  sessionId?: string;
  isActive?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  subscribedTo?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  subscribed?: UserWithRelations;
  [key: string]: any;
}

/**
 * TagWithRelations
 * (tsType: TagWithRelations, schemaOptions: { includeRelations: true })
 */
export interface TagWithRelations {
  id?: string;
  title?: string;
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
}

/**
 * JobWithRelations
 * (tsType: JobWithRelations, schemaOptions: { includeRelations: true })
 */
export interface JobWithRelations {
  id?: string;
  title: string;
  description?: string;
  city?: string;
  kommune?: string;
  employmentType?: string;
  workingTime?: string;
  employmentStatus?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
  to?: string | null;
  phone?: PhoneNo;
  email?: string;
  canKeepCar?: boolean;
  createdByDriver?: boolean;
  deleted?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
  /** (tsType: CompanyWithRelations, schemaOptions: { includeRelations: true }) */
  company?: CompanyWithRelations;
  /** (tsType: CarWithRelations, schemaOptions: { includeRelations: true }) */
  car?: CarWithRelations;
}

/**
 * CompanyWithRelations
 * (tsType: CompanyWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CompanyWithRelations {
  id?: string;
  orgNo: string;
  name: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
  reports?: ReportWithRelations[];
  jobs?: JobWithRelations[];
  [key: string]: any;
}

/**
 * ReportWithRelations
 * (tsType: ReportWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ReportWithRelations {
  id?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
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
  /** @format date-time */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
  driverId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
  /** (tsType: CompanyWithRelations, schemaOptions: { includeRelations: true }) */
  company?: CompanyWithRelations;
  /** (tsType: CarWithRelations, schemaOptions: { includeRelations: true }) */
  car?: CarWithRelations;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  driver?: UserWithRelations;
}

/**
 * CarWithRelations
 * (tsType: CarWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CarWithRelations {
  id?: string;
  make?: string;
  model?: string;
  makeModel?: string;
  year?: number;
  carNo?: string;
  noOfKm?: number;
  /** @format date-time */
  lastServiceDate?: string | null;
  /** @format date-time */
  lastInspectionDate?: string | null;
  reminderDishesAfterKm?: number;
  reminderSealedBeforeNoDays?: number;
  reminderInspectionBeforeNoDays?: number;
  /** @format date-time */
  reminderInspectionDate?: string | null;
  /** @format date-time */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  tagId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
  reports?: ReportWithRelations[];
  jobs?: JobWithRelations[];
  /** (tsType: TagWithRelations, schemaOptions: { includeRelations: true }) */
  tag?: TagWithRelations;
}

/**
 * CarUsageWithRelations
 * (tsType: CarUsageWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CarUsageWithRelations {
  id?: string;
  income?: number;
  kmDone?: number;
  carUsageNo?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
  to?: string | null;
  type?: string;
  isActive?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
}

/**
 * SellCarWithRelations
 * (tsType: SellCarWithRelations, schemaOptions: { includeRelations: true })
 */
export interface SellCarWithRelations {
  id?: string;
  make?: string;
  model?: string;
  makeModel?: string;
  year?: number;
  color?: string;
  odometer?: number;
  carNo?: string;
  images?: Doc[];
  /** @format date-time */
  lastServiceDate?: string | null;
  /** @format date-time */
  lastInspectionDate?: string | null;
  price?: number;
  vehicleType?: string;
  /** @format date-time */
  reminderInspectionDate?: string | null;
  type?: string;
  phone?: PhoneNo;
  email?: string;
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  companyId?: string;
  userId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
}

/**
 * SmsWithRelations
 * (tsType: SmsWithRelations, schemaOptions: { includeRelations: true })
 */
export interface SmsWithRelations {
  id?: string;
  content: string;
  from: string;
  to?: string;
  isSentByDriver?: boolean;
  toDrivers?: ToDriver[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
}

/**
 * CertificatesWithRelations
 * (tsType: CertificatesWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CertificatesWithRelations {
  id?: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  userId?: string;
  driverId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  driver?: UserWithRelations;
  [key: string]: any;
}

/**
 * UserWithRelations
 * (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
 */
export interface UserWithRelations {
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
  /** Doc */
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
  /** Doc */
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
  /** Doc */
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
  /** @format date-time */
  companyJoinedFrom?: string | null;
  /** @format date-time */
  companyJoinedTo?: string | null;
  driverSalary?: number;
  vatPercentage?: number;
  commissionPercentage?: number;
  salaryPeriodDateEachMonth?: number;
  /** @format date-time */
  dateOfEmployment?: string | null;
  /** @format date-time */
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
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  tagId?: string;
  carId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  creator?: UserWithRelations;
  /** (tsType: UserCredentialsWithRelations, schemaOptions: { includeRelations: true }) */
  userCredentials?: UserCredentialsWithRelations;
  /** (tsType: ResetPasswordInfoWithRelations, schemaOptions: { includeRelations: true }) */
  resetPasswordInfo?: ResetPasswordInfoWithRelations;
  subscriptions?: SubscriptionWithRelations[];
  /** (tsType: TagWithRelations, schemaOptions: { includeRelations: true }) */
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
  /** (tsType: CarWithRelations, schemaOptions: { includeRelations: true }) */
  car?: CarWithRelations;
}

/**
 * ActivityWithRelations
 * (tsType: ActivityWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ActivityWithRelations {
  id?: string;
  title?: string;
  description?: string;
  type?: string;
  resourceId?: string;
  /** @format date-time */
  timestamp: string;
  /** @format date-time */
  reminderTimestamp?: string | null;
  isActive?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  user?: UserWithRelations;
}

/**
 * ActivityPartial
 * (tsType: Partial<Activity>, schemaOptions: { partial: true })
 */
export interface ActivityPartial {
  id?: string;
  title?: string;
  description?: string;
  type?: string;
  resourceId?: string;
  /** @format date-time */
  timestamp?: string;
  /** @format date-time */
  reminderTimestamp?: string | null;
  isActive?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
}

/** CarUsage */
export interface CarUsage {
  id?: string;
  income?: number;
  kmDone?: number;
  carUsageNo?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
  to?: string | null;
  type?: string;
  isActive?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
}

/**
 * NewCarUsage
 * (tsType: Omit<CarUsage, 'id'>, schemaOptions: { title: 'NewCarUsage', exclude: [ 'id' ] })
 */
export interface NewCarUsage {
  income?: number;
  kmDone?: number;
  carUsageNo?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
  to?: string | null;
  type?: string;
  isActive?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
}

/**
 * CarUsagePartial
 * (tsType: Partial<CarUsage>, schemaOptions: { partial: true })
 */
export interface CarUsagePartial {
  id?: string;
  income?: number;
  kmDone?: number;
  carUsageNo?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
  to?: string | null;
  type?: string;
  isActive?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
}

/** Car */
export interface Car {
  id?: string;
  make?: string;
  model?: string;
  makeModel?: string;
  year?: number;
  carNo?: string;
  noOfKm?: number;
  /** @format date-time */
  lastServiceDate?: string | null;
  /** @format date-time */
  lastInspectionDate?: string | null;
  reminderDishesAfterKm?: number;
  reminderSealedBeforeNoDays?: number;
  reminderInspectionBeforeNoDays?: number;
  /** @format date-time */
  reminderInspectionDate?: string | null;
  /** @format date-time */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  tagId?: string;
}

/**
 * NewCar
 * (tsType: Omit<Car, 'id'>, schemaOptions: { title: 'NewCar', exclude: [ 'id' ] })
 */
export interface NewCar {
  make?: string;
  model?: string;
  makeModel?: string;
  year?: number;
  carNo?: string;
  noOfKm?: number;
  /** @format date-time */
  lastServiceDate?: string | null;
  /** @format date-time */
  lastInspectionDate?: string | null;
  reminderDishesAfterKm?: number;
  reminderSealedBeforeNoDays?: number;
  reminderInspectionBeforeNoDays?: number;
  /** @format date-time */
  reminderInspectionDate?: string | null;
  /** @format date-time */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  tagId?: string;
}

/**
 * CarPartial
 * (tsType: Partial<Car>, schemaOptions: { partial: true })
 */
export interface CarPartial {
  id?: string;
  make?: string;
  model?: string;
  makeModel?: string;
  year?: number;
  carNo?: string;
  noOfKm?: number;
  /** @format date-time */
  lastServiceDate?: string | null;
  /** @format date-time */
  lastInspectionDate?: string | null;
  reminderDishesAfterKm?: number;
  reminderSealedBeforeNoDays?: number;
  reminderInspectionBeforeNoDays?: number;
  /** @format date-time */
  reminderInspectionDate?: string | null;
  /** @format date-time */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
  tagId?: string;
}

/** Company */
export interface Company {
  id?: string;
  orgNo: string;
  name: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  [key: string]: any;
}

/**
 * NewCompany
 * (tsType: Omit<Company, 'id'>, schemaOptions: { title: 'NewCompany', exclude: [ 'id' ] })
 */
export interface NewCompany {
  orgNo: string;
  name: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  [key: string]: any;
}

/**
 * CompanyPartial
 * (tsType: Partial<Company>, schemaOptions: { partial: true })
 */
export interface CompanyPartial {
  id?: string;
  orgNo?: string;
  name?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  [key: string]: any;
}

/** Job */
export interface Job {
  id?: string;
  title: string;
  description?: string;
  city?: string;
  kommune?: string;
  employmentType?: string;
  workingTime?: string;
  employmentStatus?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
  to?: string | null;
  phone?: PhoneNo;
  email?: string;
  canKeepCar?: boolean;
  createdByDriver?: boolean;
  deleted?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
}

/**
 * NewJob
 * (tsType: Omit<Job, 'id'>, schemaOptions: { title: 'NewJob', exclude: [ 'id' ] })
 */
export interface NewJob {
  title: string;
  description?: string;
  city?: string;
  kommune?: string;
  employmentType?: string;
  workingTime?: string;
  employmentStatus?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
  to?: string | null;
  phone?: PhoneNo;
  email?: string;
  canKeepCar?: boolean;
  createdByDriver?: boolean;
  deleted?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
}

/**
 * JobPartial
 * (tsType: Partial<Job>, schemaOptions: { partial: true })
 */
export interface JobPartial {
  id?: string;
  title?: string;
  description?: string;
  city?: string;
  kommune?: string;
  employmentType?: string;
  workingTime?: string;
  employmentStatus?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
  to?: string | null;
  phone?: PhoneNo;
  email?: string;
  canKeepCar?: boolean;
  createdByDriver?: boolean;
  deleted?: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
}

/** Report */
export interface Report {
  id?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
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
  /** @format date-time */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
  driverId?: string;
}

/**
 * NewReport
 * (tsType: Omit<Report, 'id'>, schemaOptions: { title: 'NewReport', exclude: [ 'id' ] })
 */
export interface NewReport {
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
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
  /** @format date-time */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
  driverId?: string;
}

/**
 * ReportPartial
 * (tsType: Partial<Report>, schemaOptions: { partial: true })
 */
export interface ReportPartial {
  id?: string;
  /** @format date-time */
  from?: string | null;
  /** @format date-time */
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
  /** @format date-time */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
  companyId?: string;
  carId?: string;
  driverId?: string;
}

/** SellCar */
export interface SellCar {
  id?: string;
  make?: string;
  model?: string;
  makeModel?: string;
  year?: number;
  color?: string;
  odometer?: number;
  carNo?: string;
  images?: Doc[];
  /** @format date-time */
  lastServiceDate?: string | null;
  /** @format date-time */
  lastInspectionDate?: string | null;
  price?: number;
  vehicleType?: string;
  /** @format date-time */
  reminderInspectionDate?: string | null;
  type?: string;
  phone?: PhoneNo;
  email?: string;
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  companyId?: string;
  userId?: string;
}

/**
 * NewSellCar
 * (tsType: Omit<SellCar, 'id'>, schemaOptions: { title: 'NewSellCar', exclude: [ 'id' ] })
 */
export interface NewSellCar {
  make?: string;
  model?: string;
  makeModel?: string;
  year?: number;
  color?: string;
  odometer?: number;
  carNo?: string;
  images?: Doc[];
  /** @format date-time */
  lastServiceDate?: string | null;
  /** @format date-time */
  lastInspectionDate?: string | null;
  price?: number;
  vehicleType?: string;
  /** @format date-time */
  reminderInspectionDate?: string | null;
  type?: string;
  phone?: PhoneNo;
  email?: string;
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  companyId?: string;
  userId?: string;
}

/**
 * SellCarPartial
 * (tsType: Partial<SellCar>, schemaOptions: { partial: true })
 */
export interface SellCarPartial {
  id?: string;
  make?: string;
  model?: string;
  makeModel?: string;
  year?: number;
  color?: string;
  odometer?: number;
  carNo?: string;
  images?: Doc[];
  /** @format date-time */
  lastServiceDate?: string | null;
  /** @format date-time */
  lastInspectionDate?: string | null;
  price?: number;
  vehicleType?: string;
  /** @format date-time */
  reminderInspectionDate?: string | null;
  type?: string;
  phone?: PhoneNo;
  email?: string;
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  companyId?: string;
  userId?: string;
}

/** Sms */
export interface Sms {
  id?: string;
  content: string;
  from: string;
  to?: string;
  isSentByDriver?: boolean;
  toDrivers?: ToDriver[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
}

/**
 * NewSms
 * (tsType: Omit<Sms, 'id'>, schemaOptions: { title: 'NewSms', exclude: [ 'id' ] })
 */
export interface NewSms {
  content: string;
  from: string;
  to?: string;
  isSentByDriver?: boolean;
  toDrivers?: ToDriver[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
}

/**
 * SmsPartial
 * (tsType: Partial<Sms>, schemaOptions: { partial: true })
 */
export interface SmsPartial {
  id?: string;
  content?: string;
  from?: string;
  to?: string;
  isSentByDriver?: boolean;
  toDrivers?: ToDriver[];
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
}

/**
 * NewTag
 * (tsType: Omit<Tag, 'id'>, schemaOptions: { title: 'NewTag', exclude: [ 'id' ] })
 */
export interface NewTag {
  title?: string;
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
}

/**
 * TagPartial
 * (tsType: Partial<Tag>, schemaOptions: { partial: true })
 */
export interface TagPartial {
  id?: string;
  title?: string;
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  companyId?: string;
}

/** User */
export interface User {
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
  /** Doc */
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
  /** Doc */
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
  /** Doc */
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
  /** @format date-time */
  companyJoinedFrom?: string | null;
  /** @format date-time */
  companyJoinedTo?: string | null;
  driverSalary?: number;
  vatPercentage?: number;
  commissionPercentage?: number;
  salaryPeriodDateEachMonth?: number;
  /** @format date-time */
  dateOfEmployment?: string | null;
  /** @format date-time */
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
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  tagId?: string;
  carId?: string;
}

/**
 * NewUser
 * (tsType: Omit<User, 'id'>, schemaOptions: { title: 'NewUser', exclude: [ 'id' ] })
 */
export interface NewUser {
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
  /** Doc */
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
  /** Doc */
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
  /** Doc */
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
  /** @format date-time */
  companyJoinedFrom?: string | null;
  /** @format date-time */
  companyJoinedTo?: string | null;
  driverSalary?: number;
  vatPercentage?: number;
  commissionPercentage?: number;
  salaryPeriodDateEachMonth?: number;
  /** @format date-time */
  dateOfEmployment?: string | null;
  /** @format date-time */
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
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  tagId?: string;
  carId?: string;
}

/**
 * UserPartial
 * (tsType: Partial<User>, schemaOptions: { partial: true })
 */
export interface UserPartial {
  id?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
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
  /** Doc */
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
  /** Doc */
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
  /** Doc */
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
  /** @format date-time */
  companyJoinedFrom?: string | null;
  /** @format date-time */
  companyJoinedTo?: string | null;
  driverSalary?: number;
  vatPercentage?: number;
  commissionPercentage?: number;
  salaryPeriodDateEachMonth?: number;
  /** @format date-time */
  dateOfEmployment?: string | null;
  /** @format date-time */
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
  /** Doc */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  tagId?: string;
  carId?: string;
}

/** Certificates */
export interface Certificates {
  id?: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  userId?: string;
  driverId?: string;
  [key: string]: any;
}

/**
 * NewCertificates
 * (tsType: Omit<Certificates, 'id'>, schemaOptions: { title: 'NewCertificates', exclude: [ 'id' ] })
 */
export interface NewCertificates {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  userId?: string;
  driverId?: string;
  [key: string]: any;
}

/**
 * CertificatesPartial
 * (tsType: Partial<Certificates>, schemaOptions: { partial: true })
 */
export interface CertificatesPartial {
  id?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  userId?: string;
  driverId?: string;
  [key: string]: any;
}

/** Contracts */
export interface Contracts {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/**
 * NewContract
 * (tsType: Omit<Contracts, 'id'>, schemaOptions: { title: 'NewContract', exclude: [ 'id' ] })
 */
export interface NewContract {
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/**
 * ContractsWithRelations
 * (tsType: ContractsWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ContractsWithRelations {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/**
 * ContractsPartial
 * (tsType: Partial<Contracts>, schemaOptions: { partial: true })
 */
export interface ContractsPartial {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/** EmployeeCertificate */
export interface EmployeeCertificate {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/**
 * NewEmployeeCertificate
 * (tsType: Omit<EmployeeCertificate, 'id'>, schemaOptions: { title: 'NewEmployeeCertificate', exclude: [ 'id' ] })
 */
export interface NewEmployeeCertificate {
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/**
 * EmployeeCertificateWithRelations
 * (tsType: EmployeeCertificateWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmployeeCertificateWithRelations {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/**
 * EmployeeCertificatePartial
 * (tsType: Partial<EmployeeCertificate>, schemaOptions: { partial: true })
 */
export interface EmployeeCertificatePartial {
  id?: string;
  userId?: string;
  deleted?: boolean;
  driverId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/** EmployeeIncomeRecord */
export interface EmployeeIncomeRecord {
  id?: string;
  driverId: string;
  userId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/**
 * NewEmployeeIncomeRecord
 * (tsType: Omit<EmployeeIncomeRecord, 'id'>, schemaOptions: { title: 'NewEmployeeIncomeRecord', exclude: [ 'id' ] })
 */
export interface NewEmployeeIncomeRecord {
  driverId: string;
  userId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/**
 * EmployeeIncomeRecordWithRelations
 * (tsType: EmployeeIncomeRecordWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmployeeIncomeRecordWithRelations {
  id?: string;
  driverId: string;
  userId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/**
 * EmployeeIncomeRecordPartial
 * (tsType: Partial<EmployeeIncomeRecord>, schemaOptions: { partial: true })
 */
export interface EmployeeIncomeRecordPartial {
  id?: string;
  driverId?: string;
  userId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  [key: string]: any;
}

/**
 * NewCertificatesInUser
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Certificates, 'id'>, 'driverId'>, schemaOptions: { title: 'NewCertificatesInUser', exclude: [ 'id' ], optional: [ 'driverId' ] })
 */
export interface NewCertificatesInUser {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  userId?: string;
  driverId?: string;
  [key: string]: any;
}

/** loopback.Count */
export interface LoopbackCount {
  count?: number;
}

/** Activity.ScopeFilter */
export interface ActivityScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** Activity.IncludeFilter.Items */
export interface ActivityIncludeFilterItems {
  relation?: "user";
  scope?: ActivityScopeFilter;
}

/** Activity.Filter */
export interface ActivityFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Activity.Fields */
  fields?:
    | {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        type?: boolean;
        resourceId?: boolean;
        timestamp?: boolean;
        reminderTimestamp?: boolean;
        isActive?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        userId?: boolean;
        companyId?: boolean;
      }
    | (
        | "id"
        | "title"
        | "description"
        | "type"
        | "resourceId"
        | "timestamp"
        | "reminderTimestamp"
        | "isActive"
        | "createdAt"
        | "updatedAt"
        | "deleted"
        | "userId"
        | "companyId"
      )[];
  /** Activity.IncludeFilter */
  include?: ActivityIncludeFilterItems[];
}

/** Activity.Filter */
export interface ActivityFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Activity.WhereFilter */
  where?: Record<string, any>;
  /** Activity.Fields */
  fields?:
    | {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        type?: boolean;
        resourceId?: boolean;
        timestamp?: boolean;
        reminderTimestamp?: boolean;
        isActive?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        userId?: boolean;
        companyId?: boolean;
      }
    | (
        | "id"
        | "title"
        | "description"
        | "type"
        | "resourceId"
        | "timestamp"
        | "reminderTimestamp"
        | "isActive"
        | "createdAt"
        | "updatedAt"
        | "deleted"
        | "userId"
        | "companyId"
      )[];
  /** Activity.IncludeFilter */
  include?: ActivityIncludeFilterItems[];
}

/** CarUsage.ScopeFilter */
export interface CarUsageScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** CarUsage.IncludeFilter.Items */
export interface CarUsageIncludeFilterItems {
  relation?: "user";
  scope?: CarUsageScopeFilter;
}

/** CarUsage.Filter */
export interface CarUsageFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** CarUsage.Fields */
  fields?:
    | {
        id?: boolean;
        income?: boolean;
        kmDone?: boolean;
        carUsageNo?: boolean;
        from?: boolean;
        to?: boolean;
        type?: boolean;
        isActive?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        userId?: boolean;
        companyId?: boolean;
      }
    | (
        | "id"
        | "income"
        | "kmDone"
        | "carUsageNo"
        | "from"
        | "to"
        | "type"
        | "isActive"
        | "createdAt"
        | "updatedAt"
        | "deleted"
        | "userId"
        | "companyId"
      )[];
  /** CarUsage.IncludeFilter */
  include?: CarUsageIncludeFilterItems[];
}

/** CarUsage.Filter */
export interface CarUsageFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** CarUsage.WhereFilter */
  where?: Record<string, any>;
  /** CarUsage.Fields */
  fields?:
    | {
        id?: boolean;
        income?: boolean;
        kmDone?: boolean;
        carUsageNo?: boolean;
        from?: boolean;
        to?: boolean;
        type?: boolean;
        isActive?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        userId?: boolean;
        companyId?: boolean;
      }
    | (
        | "id"
        | "income"
        | "kmDone"
        | "carUsageNo"
        | "from"
        | "to"
        | "type"
        | "isActive"
        | "createdAt"
        | "updatedAt"
        | "deleted"
        | "userId"
        | "companyId"
      )[];
  /** CarUsage.IncludeFilter */
  include?: CarUsageIncludeFilterItems[];
}

/** Car.ScopeFilter */
export interface CarScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** Car.IncludeFilter.Items */
export interface CarIncludeFilterItems {
  relation?: "user" | "reports" | "jobs" | "tag";
  scope?: CarScopeFilter;
}

/** Car.Filter */
export interface CarFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Car.Fields */
  fields?:
    | {
        id?: boolean;
        make?: boolean;
        model?: boolean;
        makeModel?: boolean;
        year?: boolean;
        carNo?: boolean;
        noOfKm?: boolean;
        lastServiceDate?: boolean;
        lastInspectionDate?: boolean;
        reminderDishesAfterKm?: boolean;
        reminderSealedBeforeNoDays?: boolean;
        reminderInspectionBeforeNoDays?: boolean;
        reminderInspectionDate?: boolean;
        reminderSealedDate?: boolean;
        type?: boolean;
        drivers?: boolean;
        services?: boolean;
        reminderInspectionBeforeKm?: boolean;
        isArchived?: boolean;
        nextServiceIfKm?: boolean;
        forsakring?: boolean;
        texameter?: boolean;
        servise?: boolean;
        leasing?: boolean;
        otherExpanse?: boolean;
        description?: boolean;
        tags?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        userId?: boolean;
        companyId?: boolean;
        tagId?: boolean;
      }
    | (
        | "id"
        | "make"
        | "model"
        | "makeModel"
        | "year"
        | "carNo"
        | "noOfKm"
        | "lastServiceDate"
        | "lastInspectionDate"
        | "reminderDishesAfterKm"
        | "reminderSealedBeforeNoDays"
        | "reminderInspectionBeforeNoDays"
        | "reminderInspectionDate"
        | "reminderSealedDate"
        | "type"
        | "drivers"
        | "services"
        | "reminderInspectionBeforeKm"
        | "isArchived"
        | "nextServiceIfKm"
        | "forsakring"
        | "texameter"
        | "servise"
        | "leasing"
        | "otherExpanse"
        | "description"
        | "tags"
        | "createdAt"
        | "updatedAt"
        | "deleted"
        | "userId"
        | "companyId"
        | "tagId"
      )[];
  /** Car.IncludeFilter */
  include?: CarIncludeFilterItems[];
}

/** Car.Filter */
export interface CarFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Car.WhereFilter */
  where?: Record<string, any>;
  /** Car.Fields */
  fields?:
    | {
        id?: boolean;
        make?: boolean;
        model?: boolean;
        makeModel?: boolean;
        year?: boolean;
        carNo?: boolean;
        noOfKm?: boolean;
        lastServiceDate?: boolean;
        lastInspectionDate?: boolean;
        reminderDishesAfterKm?: boolean;
        reminderSealedBeforeNoDays?: boolean;
        reminderInspectionBeforeNoDays?: boolean;
        reminderInspectionDate?: boolean;
        reminderSealedDate?: boolean;
        type?: boolean;
        drivers?: boolean;
        services?: boolean;
        reminderInspectionBeforeKm?: boolean;
        isArchived?: boolean;
        nextServiceIfKm?: boolean;
        forsakring?: boolean;
        texameter?: boolean;
        servise?: boolean;
        leasing?: boolean;
        otherExpanse?: boolean;
        description?: boolean;
        tags?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        userId?: boolean;
        companyId?: boolean;
        tagId?: boolean;
      }
    | (
        | "id"
        | "make"
        | "model"
        | "makeModel"
        | "year"
        | "carNo"
        | "noOfKm"
        | "lastServiceDate"
        | "lastInspectionDate"
        | "reminderDishesAfterKm"
        | "reminderSealedBeforeNoDays"
        | "reminderInspectionBeforeNoDays"
        | "reminderInspectionDate"
        | "reminderSealedDate"
        | "type"
        | "drivers"
        | "services"
        | "reminderInspectionBeforeKm"
        | "isArchived"
        | "nextServiceIfKm"
        | "forsakring"
        | "texameter"
        | "servise"
        | "leasing"
        | "otherExpanse"
        | "description"
        | "tags"
        | "createdAt"
        | "updatedAt"
        | "deleted"
        | "userId"
        | "companyId"
        | "tagId"
      )[];
  /** Car.IncludeFilter */
  include?: CarIncludeFilterItems[];
}

/** Company.ScopeFilter */
export interface CompanyScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** Company.IncludeFilter.Items */
export interface CompanyIncludeFilterItems {
  relation?: "user" | "reports" | "jobs";
  scope?: CompanyScopeFilter;
}

/** Company.Filter */
export interface CompanyFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Company.Fields */
  fields?:
    | {
        id?: boolean;
        orgNo?: boolean;
        name?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        userId?: boolean;
        [key: string]: any;
      }
    | string[];
  /** Company.IncludeFilter */
  include?: CompanyIncludeFilterItems[];
}

/** Company.Filter */
export interface CompanyFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Company.WhereFilter */
  where?: Record<string, any>;
  /** Company.Fields */
  fields?:
    | {
        id?: boolean;
        orgNo?: boolean;
        name?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        userId?: boolean;
        [key: string]: any;
      }
    | string[];
  /** Company.IncludeFilter */
  include?: CompanyIncludeFilterItems[];
}

/** Job.ScopeFilter */
export interface JobScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** Job.IncludeFilter.Items */
export interface JobIncludeFilterItems {
  relation?: "user" | "company" | "car";
  scope?: JobScopeFilter;
}

/** Job.Filter */
export interface JobFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Job.Fields */
  fields?:
    | {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        city?: boolean;
        kommune?: boolean;
        employmentType?: boolean;
        workingTime?: boolean;
        employmentStatus?: boolean;
        from?: boolean;
        to?: boolean;
        phone?: boolean;
        email?: boolean;
        canKeepCar?: boolean;
        createdByDriver?: boolean;
        deleted?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
        companyId?: boolean;
        carId?: boolean;
      }
    | (
        | "id"
        | "title"
        | "description"
        | "city"
        | "kommune"
        | "employmentType"
        | "workingTime"
        | "employmentStatus"
        | "from"
        | "to"
        | "phone"
        | "email"
        | "canKeepCar"
        | "createdByDriver"
        | "deleted"
        | "createdAt"
        | "updatedAt"
        | "userId"
        | "companyId"
        | "carId"
      )[];
  /** Job.IncludeFilter */
  include?: JobIncludeFilterItems[];
}

/** Job.Filter */
export interface JobFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Job.WhereFilter */
  where?: Record<string, any>;
  /** Job.Fields */
  fields?:
    | {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        city?: boolean;
        kommune?: boolean;
        employmentType?: boolean;
        workingTime?: boolean;
        employmentStatus?: boolean;
        from?: boolean;
        to?: boolean;
        phone?: boolean;
        email?: boolean;
        canKeepCar?: boolean;
        createdByDriver?: boolean;
        deleted?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
        companyId?: boolean;
        carId?: boolean;
      }
    | (
        | "id"
        | "title"
        | "description"
        | "city"
        | "kommune"
        | "employmentType"
        | "workingTime"
        | "employmentStatus"
        | "from"
        | "to"
        | "phone"
        | "email"
        | "canKeepCar"
        | "createdByDriver"
        | "deleted"
        | "createdAt"
        | "updatedAt"
        | "userId"
        | "companyId"
        | "carId"
      )[];
  /** Job.IncludeFilter */
  include?: JobIncludeFilterItems[];
}

/** Report.ScopeFilter */
export interface ReportScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** Report.IncludeFilter.Items */
export interface ReportIncludeFilterItems {
  relation?: "user" | "company" | "car" | "driver";
  scope?: ReportScopeFilter;
}

/** Report.Filter */
export interface ReportFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Report.Fields */
  fields?:
    | {
        id?: boolean;
        from?: boolean;
        to?: boolean;
        month?: boolean;
        year?: boolean;
        totalKm?: boolean;
        totalIncome?: boolean;
        totalSales?: boolean;
        additionalAmount?: boolean;
        deductableAmount?: boolean;
        salary?: boolean;
        salaryDate?: boolean;
        bruttoSalary?: boolean;
        netSalary?: boolean;
        totalFuel?: boolean;
        fuelInLiters?: boolean;
        sekPerKm?: boolean;
        fuelPerKm?: boolean;
        totalAvgift?: boolean;
        momsAvgift?: boolean;
        netAvgift?: boolean;
        advanceSalaryInAccount?: boolean;
        advanceSalaryInCash?: boolean;
        usedFuelPercentage?: boolean;
        vat?: boolean;
        netIncomeCar?: boolean;
        netIncome?: boolean;
        salaryAfterTax?: boolean;
        totalTax?: boolean;
        skatTax?: boolean;
        vacationAmount?: boolean;
        createdByDriver?: boolean;
        reportDeclined?: boolean;
        calculateTaxManualy?: boolean;
        freezeReport?: boolean;
        updateCarReport?: boolean;
        comment?: boolean;
        driverComment?: boolean;
        workingHours?: boolean;
        totalKmInThisMonth?: boolean;
        forsakring?: boolean;
        texameter?: boolean;
        lonekostnad?: boolean;
        leasing?: boolean;
        otherExpanse?: boolean;
        vinst?: boolean;
        vinstPercentage?: boolean;
        servise?: boolean;
        type?: boolean;
        reportDate?: boolean;
        deleted?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
        companyId?: boolean;
        carId?: boolean;
        driverId?: boolean;
      }
    | (
        | "id"
        | "from"
        | "to"
        | "month"
        | "year"
        | "totalKm"
        | "totalIncome"
        | "totalSales"
        | "additionalAmount"
        | "deductableAmount"
        | "salary"
        | "salaryDate"
        | "bruttoSalary"
        | "netSalary"
        | "totalFuel"
        | "fuelInLiters"
        | "sekPerKm"
        | "fuelPerKm"
        | "totalAvgift"
        | "momsAvgift"
        | "netAvgift"
        | "advanceSalaryInAccount"
        | "advanceSalaryInCash"
        | "usedFuelPercentage"
        | "vat"
        | "netIncomeCar"
        | "netIncome"
        | "salaryAfterTax"
        | "totalTax"
        | "skatTax"
        | "vacationAmount"
        | "createdByDriver"
        | "reportDeclined"
        | "calculateTaxManualy"
        | "freezeReport"
        | "updateCarReport"
        | "comment"
        | "driverComment"
        | "workingHours"
        | "totalKmInThisMonth"
        | "forsakring"
        | "texameter"
        | "lonekostnad"
        | "leasing"
        | "otherExpanse"
        | "vinst"
        | "vinstPercentage"
        | "servise"
        | "type"
        | "reportDate"
        | "deleted"
        | "createdAt"
        | "updatedAt"
        | "userId"
        | "companyId"
        | "carId"
        | "driverId"
      )[];
  /** Report.IncludeFilter */
  include?: ReportIncludeFilterItems[];
}

/** Report.Filter */
export interface ReportFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Report.WhereFilter */
  where?: Record<string, any>;
  /** Report.Fields */
  fields?:
    | {
        id?: boolean;
        from?: boolean;
        to?: boolean;
        month?: boolean;
        year?: boolean;
        totalKm?: boolean;
        totalIncome?: boolean;
        totalSales?: boolean;
        additionalAmount?: boolean;
        deductableAmount?: boolean;
        salary?: boolean;
        salaryDate?: boolean;
        bruttoSalary?: boolean;
        netSalary?: boolean;
        totalFuel?: boolean;
        fuelInLiters?: boolean;
        sekPerKm?: boolean;
        fuelPerKm?: boolean;
        totalAvgift?: boolean;
        momsAvgift?: boolean;
        netAvgift?: boolean;
        advanceSalaryInAccount?: boolean;
        advanceSalaryInCash?: boolean;
        usedFuelPercentage?: boolean;
        vat?: boolean;
        netIncomeCar?: boolean;
        netIncome?: boolean;
        salaryAfterTax?: boolean;
        totalTax?: boolean;
        skatTax?: boolean;
        vacationAmount?: boolean;
        createdByDriver?: boolean;
        reportDeclined?: boolean;
        calculateTaxManualy?: boolean;
        freezeReport?: boolean;
        updateCarReport?: boolean;
        comment?: boolean;
        driverComment?: boolean;
        workingHours?: boolean;
        totalKmInThisMonth?: boolean;
        forsakring?: boolean;
        texameter?: boolean;
        lonekostnad?: boolean;
        leasing?: boolean;
        otherExpanse?: boolean;
        vinst?: boolean;
        vinstPercentage?: boolean;
        servise?: boolean;
        type?: boolean;
        reportDate?: boolean;
        deleted?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
        companyId?: boolean;
        carId?: boolean;
        driverId?: boolean;
      }
    | (
        | "id"
        | "from"
        | "to"
        | "month"
        | "year"
        | "totalKm"
        | "totalIncome"
        | "totalSales"
        | "additionalAmount"
        | "deductableAmount"
        | "salary"
        | "salaryDate"
        | "bruttoSalary"
        | "netSalary"
        | "totalFuel"
        | "fuelInLiters"
        | "sekPerKm"
        | "fuelPerKm"
        | "totalAvgift"
        | "momsAvgift"
        | "netAvgift"
        | "advanceSalaryInAccount"
        | "advanceSalaryInCash"
        | "usedFuelPercentage"
        | "vat"
        | "netIncomeCar"
        | "netIncome"
        | "salaryAfterTax"
        | "totalTax"
        | "skatTax"
        | "vacationAmount"
        | "createdByDriver"
        | "reportDeclined"
        | "calculateTaxManualy"
        | "freezeReport"
        | "updateCarReport"
        | "comment"
        | "driverComment"
        | "workingHours"
        | "totalKmInThisMonth"
        | "forsakring"
        | "texameter"
        | "lonekostnad"
        | "leasing"
        | "otherExpanse"
        | "vinst"
        | "vinstPercentage"
        | "servise"
        | "type"
        | "reportDate"
        | "deleted"
        | "createdAt"
        | "updatedAt"
        | "userId"
        | "companyId"
        | "carId"
        | "driverId"
      )[];
  /** Report.IncludeFilter */
  include?: ReportIncludeFilterItems[];
}

/** SellCar.ScopeFilter */
export interface SellCarScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** SellCar.IncludeFilter.Items */
export interface SellCarIncludeFilterItems {
  relation?: "user";
  scope?: SellCarScopeFilter;
}

/** SellCar.Filter */
export interface SellCarFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** SellCar.Fields */
  fields?:
    | {
        id?: boolean;
        make?: boolean;
        model?: boolean;
        makeModel?: boolean;
        year?: boolean;
        color?: boolean;
        odometer?: boolean;
        carNo?: boolean;
        images?: boolean;
        lastServiceDate?: boolean;
        lastInspectionDate?: boolean;
        price?: boolean;
        vehicleType?: boolean;
        reminderInspectionDate?: boolean;
        type?: boolean;
        phone?: boolean;
        email?: boolean;
        image?: boolean;
        city?: boolean;
        kommune?: boolean;
        isActive?: boolean;
        createdByDriver?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        companyId?: boolean;
        userId?: boolean;
      }
    | (
        | "id"
        | "make"
        | "model"
        | "makeModel"
        | "year"
        | "color"
        | "odometer"
        | "carNo"
        | "images"
        | "lastServiceDate"
        | "lastInspectionDate"
        | "price"
        | "vehicleType"
        | "reminderInspectionDate"
        | "type"
        | "phone"
        | "email"
        | "image"
        | "city"
        | "kommune"
        | "isActive"
        | "createdByDriver"
        | "createdAt"
        | "updatedAt"
        | "deleted"
        | "companyId"
        | "userId"
      )[];
  /** SellCar.IncludeFilter */
  include?: SellCarIncludeFilterItems[];
}

/** SellCar.Filter */
export interface SellCarFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** SellCar.WhereFilter */
  where?: Record<string, any>;
  /** SellCar.Fields */
  fields?:
    | {
        id?: boolean;
        make?: boolean;
        model?: boolean;
        makeModel?: boolean;
        year?: boolean;
        color?: boolean;
        odometer?: boolean;
        carNo?: boolean;
        images?: boolean;
        lastServiceDate?: boolean;
        lastInspectionDate?: boolean;
        price?: boolean;
        vehicleType?: boolean;
        reminderInspectionDate?: boolean;
        type?: boolean;
        phone?: boolean;
        email?: boolean;
        image?: boolean;
        city?: boolean;
        kommune?: boolean;
        isActive?: boolean;
        createdByDriver?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        companyId?: boolean;
        userId?: boolean;
      }
    | (
        | "id"
        | "make"
        | "model"
        | "makeModel"
        | "year"
        | "color"
        | "odometer"
        | "carNo"
        | "images"
        | "lastServiceDate"
        | "lastInspectionDate"
        | "price"
        | "vehicleType"
        | "reminderInspectionDate"
        | "type"
        | "phone"
        | "email"
        | "image"
        | "city"
        | "kommune"
        | "isActive"
        | "createdByDriver"
        | "createdAt"
        | "updatedAt"
        | "deleted"
        | "companyId"
        | "userId"
      )[];
  /** SellCar.IncludeFilter */
  include?: SellCarIncludeFilterItems[];
}

/** Sms.ScopeFilter */
export interface SmsScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** Sms.IncludeFilter.Items */
export interface SmsIncludeFilterItems {
  relation?: "user";
  scope?: SmsScopeFilter;
}

/** Sms.Filter */
export interface SmsFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Sms.Fields */
  fields?:
    | {
        id?: boolean;
        content?: boolean;
        from?: boolean;
        to?: boolean;
        isSentByDriver?: boolean;
        toDrivers?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
      }
    | (
        | "id"
        | "content"
        | "from"
        | "to"
        | "isSentByDriver"
        | "toDrivers"
        | "createdAt"
        | "updatedAt"
        | "userId"
      )[];
  /** Sms.IncludeFilter */
  include?: SmsIncludeFilterItems[];
}

/** Sms.Filter */
export interface SmsFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Sms.WhereFilter */
  where?: Record<string, any>;
  /** Sms.Fields */
  fields?:
    | {
        id?: boolean;
        content?: boolean;
        from?: boolean;
        to?: boolean;
        isSentByDriver?: boolean;
        toDrivers?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
      }
    | (
        | "id"
        | "content"
        | "from"
        | "to"
        | "isSentByDriver"
        | "toDrivers"
        | "createdAt"
        | "updatedAt"
        | "userId"
      )[];
  /** Sms.IncludeFilter */
  include?: SmsIncludeFilterItems[];
}

/** Tag.ScopeFilter */
export interface TagScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** Tag.IncludeFilter.Items */
export interface TagIncludeFilterItems {
  relation?: "user";
  scope?: TagScopeFilter;
}

/** Tag.Filter */
export interface TagFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Tag.Fields */
  fields?:
    | {
        id?: boolean;
        title?: boolean;
        image?: boolean;
        type?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        userId?: boolean;
        companyId?: boolean;
      }
    | (
        | "id"
        | "title"
        | "image"
        | "type"
        | "createdAt"
        | "updatedAt"
        | "deleted"
        | "userId"
        | "companyId"
      )[];
  /** Tag.IncludeFilter */
  include?: TagIncludeFilterItems[];
}

/** Tag.Filter */
export interface TagFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Tag.WhereFilter */
  where?: Record<string, any>;
  /** Tag.Fields */
  fields?:
    | {
        id?: boolean;
        title?: boolean;
        image?: boolean;
        type?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        deleted?: boolean;
        userId?: boolean;
        companyId?: boolean;
      }
    | (
        | "id"
        | "title"
        | "image"
        | "type"
        | "createdAt"
        | "updatedAt"
        | "deleted"
        | "userId"
        | "companyId"
      )[];
  /** Tag.IncludeFilter */
  include?: TagIncludeFilterItems[];
}

/** User.ScopeFilter */
export interface UserScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** User.IncludeFilter.Items */
export interface UserIncludeFilterItems {
  relation?:
    | "creator"
    | "userCredentials"
    | "resetPasswordInfo"
    | "subscriptions"
    | "tag"
    | "activities"
    | "cars"
    | "carUsages"
    | "companies"
    | "sellCars"
    | "jobs"
    | "reports"
    | "driverReports"
    | "sms"
    | "certificates"
    | "driverCertificates"
    | "car";
  scope?: UserScopeFilter;
}

/** User.Filter */
export interface UserFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** User.Fields */
  fields?:
    | {
        id?: boolean;
        firstName?: boolean;
        lastName?: boolean;
        name?: boolean;
        email?: boolean;
        tempPassword?: boolean;
        isNew?: boolean;
        phone?: boolean;
        swishNumber?: boolean;
        personalNumber?: boolean;
        clearingNumber?: boolean;
        accountNumber?: boolean;
        bankGiro?: boolean;
        plusGiro?: boolean;
        address1?: boolean;
        postNo?: boolean;
        isMonthlySalary?: boolean;
        fixedSalary?: boolean;
        isCommission?: boolean;
        freeText?: boolean;
        address2?: boolean;
        city?: boolean;
        country?: boolean;
        role?: boolean;
        roles?: boolean;
        creatorId?: boolean;
        isActiveUser?: boolean;
        isActiveCreator?: boolean;
        isVerified?: boolean;
        image?: boolean;
        license?: boolean;
        taxiIdentification?: boolean;
        oAuth?: boolean;
        nonce?: boolean;
        tosAgreed?: boolean;
        metamaskAddress?: boolean;
        stripeAccountId?: boolean;
        lastUpdatedEmail?: boolean;
        emails?: boolean;
        workingHours?: boolean;
        companyJoinedFrom?: boolean;
        companyJoinedTo?: boolean;
        driverSalary?: boolean;
        vatPercentage?: boolean;
        commissionPercentage?: boolean;
        salaryPeriodDateEachMonth?: boolean;
        dateOfEmployment?: boolean;
        agreedEndDate?: boolean;
        employmentType?: boolean;
        workType?: boolean;
        workingTime?: boolean;
        calculateTaxManualy?: boolean;
        taxTable?: boolean;
        taxPercentage?: boolean;
        skatTax?: boolean;
        vacationPercentage?: boolean;
        isSalaryOnTotalIncome?: boolean;
        companyId?: boolean;
        driverNo?: boolean;
        isArchived?: boolean;
        fixedSalaryVacationAmount?: boolean;
        description?: boolean;
        requestToJoin?: boolean;
        availableForWork?: boolean;
        deleted?: boolean;
        isOpenToWork?: boolean;
        agreement?: boolean;
        tags?: boolean;
        isActive?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        tagId?: boolean;
        carId?: boolean;
      }
    | (
        | "id"
        | "firstName"
        | "lastName"
        | "name"
        | "email"
        | "tempPassword"
        | "isNew"
        | "phone"
        | "swishNumber"
        | "personalNumber"
        | "clearingNumber"
        | "accountNumber"
        | "bankGiro"
        | "plusGiro"
        | "address1"
        | "postNo"
        | "isMonthlySalary"
        | "fixedSalary"
        | "isCommission"
        | "freeText"
        | "address2"
        | "city"
        | "country"
        | "role"
        | "roles"
        | "creatorId"
        | "isActiveUser"
        | "isActiveCreator"
        | "isVerified"
        | "image"
        | "license"
        | "taxiIdentification"
        | "oAuth"
        | "nonce"
        | "tosAgreed"
        | "metamaskAddress"
        | "stripeAccountId"
        | "lastUpdatedEmail"
        | "emails"
        | "workingHours"
        | "companyJoinedFrom"
        | "companyJoinedTo"
        | "driverSalary"
        | "vatPercentage"
        | "commissionPercentage"
        | "salaryPeriodDateEachMonth"
        | "dateOfEmployment"
        | "agreedEndDate"
        | "employmentType"
        | "workType"
        | "workingTime"
        | "calculateTaxManualy"
        | "taxTable"
        | "taxPercentage"
        | "skatTax"
        | "vacationPercentage"
        | "isSalaryOnTotalIncome"
        | "companyId"
        | "driverNo"
        | "isArchived"
        | "fixedSalaryVacationAmount"
        | "description"
        | "requestToJoin"
        | "availableForWork"
        | "deleted"
        | "isOpenToWork"
        | "agreement"
        | "tags"
        | "isActive"
        | "createdAt"
        | "updatedAt"
        | "tagId"
        | "carId"
      )[];
  /** User.IncludeFilter */
  include?: UserIncludeFilterItems[];
}

/** User.Filter */
export interface UserFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** User.WhereFilter */
  where?: Record<string, any>;
  /** User.Fields */
  fields?:
    | {
        id?: boolean;
        firstName?: boolean;
        lastName?: boolean;
        name?: boolean;
        email?: boolean;
        tempPassword?: boolean;
        isNew?: boolean;
        phone?: boolean;
        swishNumber?: boolean;
        personalNumber?: boolean;
        clearingNumber?: boolean;
        accountNumber?: boolean;
        bankGiro?: boolean;
        plusGiro?: boolean;
        address1?: boolean;
        postNo?: boolean;
        isMonthlySalary?: boolean;
        fixedSalary?: boolean;
        isCommission?: boolean;
        freeText?: boolean;
        address2?: boolean;
        city?: boolean;
        country?: boolean;
        role?: boolean;
        roles?: boolean;
        creatorId?: boolean;
        isActiveUser?: boolean;
        isActiveCreator?: boolean;
        isVerified?: boolean;
        image?: boolean;
        license?: boolean;
        taxiIdentification?: boolean;
        oAuth?: boolean;
        nonce?: boolean;
        tosAgreed?: boolean;
        metamaskAddress?: boolean;
        stripeAccountId?: boolean;
        lastUpdatedEmail?: boolean;
        emails?: boolean;
        workingHours?: boolean;
        companyJoinedFrom?: boolean;
        companyJoinedTo?: boolean;
        driverSalary?: boolean;
        vatPercentage?: boolean;
        commissionPercentage?: boolean;
        salaryPeriodDateEachMonth?: boolean;
        dateOfEmployment?: boolean;
        agreedEndDate?: boolean;
        employmentType?: boolean;
        workType?: boolean;
        workingTime?: boolean;
        calculateTaxManualy?: boolean;
        taxTable?: boolean;
        taxPercentage?: boolean;
        skatTax?: boolean;
        vacationPercentage?: boolean;
        isSalaryOnTotalIncome?: boolean;
        companyId?: boolean;
        driverNo?: boolean;
        isArchived?: boolean;
        fixedSalaryVacationAmount?: boolean;
        description?: boolean;
        requestToJoin?: boolean;
        availableForWork?: boolean;
        deleted?: boolean;
        isOpenToWork?: boolean;
        agreement?: boolean;
        tags?: boolean;
        isActive?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        tagId?: boolean;
        carId?: boolean;
      }
    | (
        | "id"
        | "firstName"
        | "lastName"
        | "name"
        | "email"
        | "tempPassword"
        | "isNew"
        | "phone"
        | "swishNumber"
        | "personalNumber"
        | "clearingNumber"
        | "accountNumber"
        | "bankGiro"
        | "plusGiro"
        | "address1"
        | "postNo"
        | "isMonthlySalary"
        | "fixedSalary"
        | "isCommission"
        | "freeText"
        | "address2"
        | "city"
        | "country"
        | "role"
        | "roles"
        | "creatorId"
        | "isActiveUser"
        | "isActiveCreator"
        | "isVerified"
        | "image"
        | "license"
        | "taxiIdentification"
        | "oAuth"
        | "nonce"
        | "tosAgreed"
        | "metamaskAddress"
        | "stripeAccountId"
        | "lastUpdatedEmail"
        | "emails"
        | "workingHours"
        | "companyJoinedFrom"
        | "companyJoinedTo"
        | "driverSalary"
        | "vatPercentage"
        | "commissionPercentage"
        | "salaryPeriodDateEachMonth"
        | "dateOfEmployment"
        | "agreedEndDate"
        | "employmentType"
        | "workType"
        | "workingTime"
        | "calculateTaxManualy"
        | "taxTable"
        | "taxPercentage"
        | "skatTax"
        | "vacationPercentage"
        | "isSalaryOnTotalIncome"
        | "companyId"
        | "driverNo"
        | "isArchived"
        | "fixedSalaryVacationAmount"
        | "description"
        | "requestToJoin"
        | "availableForWork"
        | "deleted"
        | "isOpenToWork"
        | "agreement"
        | "tags"
        | "isActive"
        | "createdAt"
        | "updatedAt"
        | "tagId"
        | "carId"
      )[];
  /** User.IncludeFilter */
  include?: UserIncludeFilterItems[];
}

/** Certificates.ScopeFilter */
export interface CertificatesScopeFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  where?: Record<string, any>;
  fields?: Record<string, any> | string[];
  include?: Record<string, any>[];
}

/** Certificates.IncludeFilter.Items */
export interface CertificatesIncludeFilterItems {
  relation?: "user" | "driver";
  scope?: CertificatesScopeFilter;
}

/** Certificates.Filter */
export interface CertificatesFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Certificates.Fields */
  fields?:
    | {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
        driverId?: boolean;
        [key: string]: any;
      }
    | string[];
  /** Certificates.IncludeFilter */
  include?: CertificatesIncludeFilterItems[];
}

/** Certificates.Filter */
export interface CertificatesFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Certificates.WhereFilter */
  where?: Record<string, any>;
  /** Certificates.Fields */
  fields?:
    | {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        userId?: boolean;
        driverId?: boolean;
        [key: string]: any;
      }
    | string[];
  /** Certificates.IncludeFilter */
  include?: CertificatesIncludeFilterItems[];
}

/** Contracts.Filter */
export interface ContractsFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Contracts.Fields */
  fields?:
    | {
        id?: boolean;
        userId?: boolean;
        deleted?: boolean;
        driverId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        [key: string]: any;
      }
    | string[];
}

/** Contracts.Filter */
export interface ContractsFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** Contracts.WhereFilter */
  where?: Record<string, any>;
  /** Contracts.Fields */
  fields?:
    | {
        id?: boolean;
        userId?: boolean;
        deleted?: boolean;
        driverId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        [key: string]: any;
      }
    | string[];
}

/** EmployeeIncomeRecord.Filter */
export interface EmployeeIncomeRecordFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** EmployeeIncomeRecord.WhereFilter */
  where?: Record<string, any>;
  /** EmployeeIncomeRecord.Fields */
  fields?:
    | {
        id?: boolean;
        driverId?: boolean;
        userId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        [key: string]: any;
      }
    | string[];
}

/** EmployeeCertificate.Filter */
export interface EmployeeCertificateFilter {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** EmployeeCertificate.Fields */
  fields?:
    | {
        id?: boolean;
        userId?: boolean;
        deleted?: boolean;
        driverId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        [key: string]: any;
      }
    | string[];
}

/** EmployeeCertificate.Filter */
export interface EmployeeCertificateFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** EmployeeCertificate.WhereFilter */
  where?: Record<string, any>;
  /** EmployeeCertificate.Fields */
  fields?:
    | {
        id?: boolean;
        userId?: boolean;
        deleted?: boolean;
        driverId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        [key: string]: any;
      }
    | string[];
}

/** EmployeeIncomeRecord.Filter */
export interface EmployeeIncomeRecordFilter1 {
  /** @min 0 */
  offset?: number;
  /**
   * @min 1
   * @example 100
   */
  limit?: number;
  /** @min 0 */
  skip?: number;
  order?: string | string[];
  /** EmployeeIncomeRecord.Fields */
  fields?:
    | {
        id?: boolean;
        driverId?: boolean;
        userId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        [key: string]: any;
      }
    | string[];
}

/** PingResponse */
export interface PingResponse {
  greeting?: string;
  date?: string;
  url?: string;
  headers?: {
    "Content-Type"?: string;
    [key: string]: any;
  };
}

export namespace Activities {
  /**
   * No description
   * @tags ActivityController
   * @name ActivityControllerCountActivity
   * @request GET:/activities/count
   * @secure
   */
  export namespace ActivityControllerCountActivity {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags ActivityController
   * @name ActivityControllerReplaceByIdActivity
   * @request PUT:/activities/{id}
   * @secure
   */
  export namespace ActivityControllerReplaceByIdActivity {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Activity;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags ActivityController
   * @name ActivityControllerUpdateByIdActivity
   * @request PATCH:/activities/{id}
   * @secure
   */
  export namespace ActivityControllerUpdateByIdActivity {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ActivityPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags ActivityController
   * @name ActivityControllerFindByIdActivity
   * @request GET:/activities/{id}
   * @secure
   */
  export namespace ActivityControllerFindByIdActivity {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivityWithRelations;
  }
  /**
   * No description
   * @tags ActivityController
   * @name ActivityControllerDeleteByIdActivity
   * @request DELETE:/activities/{id}
   * @secure
   */
  export namespace ActivityControllerDeleteByIdActivity {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags ActivityController
   * @name ActivityControllerCreateActivity
   * @request POST:/activities
   * @secure
   */
  export namespace ActivityControllerCreateActivity {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewActivity;
    export type RequestHeaders = {};
    export type ResponseBody = Activity;
  }
  /**
   * No description
   * @tags ActivityController
   * @name ActivityControllerUpdateAllActivity
   * @request PATCH:/activities
   * @secure
   */
  export namespace ActivityControllerUpdateAllActivity {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = ActivityPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags ActivityController
   * @name ActivityControllerFindActivity
   * @request GET:/activities
   * @secure
   */
  export namespace ActivityControllerFindActivity {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivityWithRelations[];
  }
}

export namespace Admin {
  /**
   * No description
   * @tags AdminActivityController
   * @name AdminActivityControllerCountAdminActivity
   * @request GET:/admin/activities/count
   * @secure
   */
  export namespace AdminActivityControllerCountAdminActivity {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminActivityController
   * @name AdminActivityControllerReplaceByIdAdminActivity
   * @request PUT:/admin/activities/{id}
   * @secure
   */
  export namespace AdminActivityControllerReplaceByIdAdminActivity {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Activity;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminActivityController
   * @name AdminActivityControllerUpdateByIdAdminActivity
   * @request PATCH:/admin/activities/{id}
   * @secure
   */
  export namespace AdminActivityControllerUpdateByIdAdminActivity {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ActivityPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminActivityController
   * @name AdminActivityControllerFindByIdAdminActivity
   * @request GET:/admin/activities/{id}
   * @secure
   */
  export namespace AdminActivityControllerFindByIdAdminActivity {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivityWithRelations;
  }
  /**
   * No description
   * @tags AdminActivityController
   * @name AdminActivityControllerDeleteByIdAdminActivity
   * @request DELETE:/admin/activities/{id}
   * @secure
   */
  export namespace AdminActivityControllerDeleteByIdAdminActivity {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminActivityController
   * @name AdminActivityControllerCreateAdminActivity
   * @request POST:/admin/activities
   * @secure
   */
  export namespace AdminActivityControllerCreateAdminActivity {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewActivity;
    export type RequestHeaders = {};
    export type ResponseBody = Activity;
  }
  /**
   * No description
   * @tags AdminActivityController
   * @name AdminActivityControllerUpdateAllAdminActivity
   * @request PATCH:/admin/activities
   * @secure
   */
  export namespace AdminActivityControllerUpdateAllAdminActivity {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = ActivityPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminActivityController
   * @name AdminActivityControllerFindAdminActivity
   * @request GET:/admin/activities
   * @secure
   */
  export namespace AdminActivityControllerFindAdminActivity {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivityWithRelations[];
  }
  /**
   * No description
   * @tags AdminCarUsageController
   * @name AdminCarUsageControllerCountAdminCarUsage
   * @request GET:/admin/carUsages/count
   * @secure
   */
  export namespace AdminCarUsageControllerCountAdminCarUsage {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminCarUsageController
   * @name AdminCarUsageControllerReplaceByIdAdminCarUsage
   * @request PUT:/admin/carUsages/{id}
   * @secure
   */
  export namespace AdminCarUsageControllerReplaceByIdAdminCarUsage {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CarUsage;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminCarUsageController
   * @name AdminCarUsageControllerUpdateByIdAdminCarUsage
   * @request PATCH:/admin/carUsages/{id}
   * @secure
   */
  export namespace AdminCarUsageControllerUpdateByIdAdminCarUsage {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CarUsagePartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminCarUsageController
   * @name AdminCarUsageControllerFindByIdAdminCarUsage
   * @request GET:/admin/carUsages/{id}
   * @secure
   */
  export namespace AdminCarUsageControllerFindByIdAdminCarUsage {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CarUsageWithRelations;
  }
  /**
   * No description
   * @tags AdminCarUsageController
   * @name AdminCarUsageControllerDeleteByIdAdminCarUsage
   * @request DELETE:/admin/carUsages/{id}
   * @secure
   */
  export namespace AdminCarUsageControllerDeleteByIdAdminCarUsage {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminCarUsageController
   * @name AdminCarUsageControllerCreateAdminCarUsage
   * @request POST:/admin/carUsages
   * @secure
   */
  export namespace AdminCarUsageControllerCreateAdminCarUsage {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewCarUsage;
    export type RequestHeaders = {};
    export type ResponseBody = CarUsage;
  }
  /**
   * No description
   * @tags AdminCarUsageController
   * @name AdminCarUsageControllerUpdateAllAdminCarUsage
   * @request PATCH:/admin/carUsages
   * @secure
   */
  export namespace AdminCarUsageControllerUpdateAllAdminCarUsage {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = CarUsagePartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminCarUsageController
   * @name AdminCarUsageControllerFindAdminCarUsage
   * @request GET:/admin/carUsages
   * @secure
   */
  export namespace AdminCarUsageControllerFindAdminCarUsage {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CarUsageWithRelations[];
  }
  /**
   * No description
   * @tags AdminCarController
   * @name AdminCarControllerCountAdminCar
   * @request GET:/admin/cars/count
   * @secure
   */
  export namespace AdminCarControllerCountAdminCar {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminCarController
   * @name AdminCarControllerReplaceByIdAdminCar
   * @request PUT:/admin/cars/{id}
   * @secure
   */
  export namespace AdminCarControllerReplaceByIdAdminCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Car;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminCarController
   * @name AdminCarControllerUpdateByIdAdminCar
   * @request PATCH:/admin/cars/{id}
   * @secure
   */
  export namespace AdminCarControllerUpdateByIdAdminCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CarPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminCarController
   * @name AdminCarControllerFindByIdAdminCar
   * @request GET:/admin/cars/{id}
   * @secure
   */
  export namespace AdminCarControllerFindByIdAdminCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CarWithRelations;
  }
  /**
   * No description
   * @tags AdminCarController
   * @name AdminCarControllerDeleteByIdAdminCar
   * @request DELETE:/admin/cars/{id}
   * @secure
   */
  export namespace AdminCarControllerDeleteByIdAdminCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminCarController
   * @name AdminCarControllerCreateAdminCar
   * @request POST:/admin/cars
   * @secure
   */
  export namespace AdminCarControllerCreateAdminCar {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewCar;
    export type RequestHeaders = {};
    export type ResponseBody = Car;
  }
  /**
   * No description
   * @tags AdminCarController
   * @name AdminCarControllerUpdateAllAdminCar
   * @request PATCH:/admin/cars
   * @secure
   */
  export namespace AdminCarControllerUpdateAllAdminCar {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = CarPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminCarController
   * @name AdminCarControllerFindAdminCar
   * @request GET:/admin/cars
   * @secure
   */
  export namespace AdminCarControllerFindAdminCar {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CarWithRelations[];
  }
  /**
   * No description
   * @tags AdminCompanyController
   * @name AdminCompanyControllerCountAdminCompany
   * @request GET:/admin/companies/count
   * @secure
   */
  export namespace AdminCompanyControllerCountAdminCompany {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminCompanyController
   * @name AdminCompanyControllerReplaceByIdAdminCompany
   * @request PUT:/admin/companies/{id}
   * @secure
   */
  export namespace AdminCompanyControllerReplaceByIdAdminCompany {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Company;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminCompanyController
   * @name AdminCompanyControllerUpdateByIdAdminCompany
   * @request PATCH:/admin/companies/{id}
   * @secure
   */
  export namespace AdminCompanyControllerUpdateByIdAdminCompany {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CompanyPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminCompanyController
   * @name AdminCompanyControllerFindByIdAdminCompany
   * @request GET:/admin/companies/{id}
   * @secure
   */
  export namespace AdminCompanyControllerFindByIdAdminCompany {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyWithRelations;
  }
  /**
   * No description
   * @tags AdminCompanyController
   * @name AdminCompanyControllerDeleteByIdAdminCar
   * @request DELETE:/admin/companies/{id}
   * @secure
   */
  export namespace AdminCompanyControllerDeleteByIdAdminCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminCompanyController
   * @name AdminCompanyControllerCreateAdminCompany
   * @request POST:/admin/companies
   * @secure
   */
  export namespace AdminCompanyControllerCreateAdminCompany {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewCompany;
    export type RequestHeaders = {};
    export type ResponseBody = Company;
  }
  /**
   * No description
   * @tags AdminCompanyController
   * @name AdminCompanyControllerUpdateAllAdminCompany
   * @request PATCH:/admin/companies
   * @secure
   */
  export namespace AdminCompanyControllerUpdateAllAdminCompany {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = CompanyPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminCompanyController
   * @name AdminCompanyControllerFindAdminCompany
   * @request GET:/admin/companies
   * @secure
   */
  export namespace AdminCompanyControllerFindAdminCompany {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyWithRelations[];
  }
  /**
   * No description
   * @tags AdminJobController
   * @name AdminJobControllerCountAdminJob
   * @request GET:/admin/jobs/count
   * @secure
   */
  export namespace AdminJobControllerCountAdminJob {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminJobController
   * @name AdminJobControllerReplaceByIdAdminJob
   * @request PUT:/admin/jobs/{id}
   * @secure
   */
  export namespace AdminJobControllerReplaceByIdAdminJob {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Job;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminJobController
   * @name AdminJobControllerUpdateByIdAdminJob
   * @request PATCH:/admin/jobs/{id}
   * @secure
   */
  export namespace AdminJobControllerUpdateByIdAdminJob {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = JobPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminJobController
   * @name AdminJobControllerFindByIdAdminJob
   * @request GET:/admin/jobs/{id}
   * @secure
   */
  export namespace AdminJobControllerFindByIdAdminJob {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = JobWithRelations;
  }
  /**
   * No description
   * @tags AdminJobController
   * @name AdminJobControllerDeleteByIdAdminJob
   * @request DELETE:/admin/jobs/{id}
   * @secure
   */
  export namespace AdminJobControllerDeleteByIdAdminJob {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminJobController
   * @name AdminJobControllerCreateAdminJob
   * @request POST:/admin/jobs
   * @secure
   */
  export namespace AdminJobControllerCreateAdminJob {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewJob;
    export type RequestHeaders = {};
    export type ResponseBody = Job;
  }
  /**
   * No description
   * @tags AdminJobController
   * @name AdminJobControllerUpdateAllAdminJob
   * @request PATCH:/admin/jobs
   * @secure
   */
  export namespace AdminJobControllerUpdateAllAdminJob {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = JobPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminJobController
   * @name AdminJobControllerFindAdminJob
   * @request GET:/admin/jobs
   * @secure
   */
  export namespace AdminJobControllerFindAdminJob {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = JobWithRelations[];
  }
  /**
   * No description
   * @tags AdminReportController
   * @name AdminReportControllerCountAdminReport
   * @request GET:/admin/reports/count
   * @secure
   */
  export namespace AdminReportControllerCountAdminReport {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminReportController
   * @name AdminReportControllerReplaceByIdAdminReport
   * @request PUT:/admin/reports/{id}
   * @secure
   */
  export namespace AdminReportControllerReplaceByIdAdminReport {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Report;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminReportController
   * @name AdminReportControllerUpdateByIdAdminReport
   * @request PATCH:/admin/reports/{id}
   * @secure
   */
  export namespace AdminReportControllerUpdateByIdAdminReport {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ReportPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminReportController
   * @name AdminReportControllerFindByIdAdminReport
   * @request GET:/admin/reports/{id}
   * @secure
   */
  export namespace AdminReportControllerFindByIdAdminReport {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportWithRelations;
  }
  /**
   * No description
   * @tags AdminReportController
   * @name AdminReportControllerDeleteByIdAdminReport
   * @request DELETE:/admin/reports/{id}
   * @secure
   */
  export namespace AdminReportControllerDeleteByIdAdminReport {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminReportController
   * @name AdminReportControllerCreateAdminReport
   * @request POST:/admin/reports
   * @secure
   */
  export namespace AdminReportControllerCreateAdminReport {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewReport;
    export type RequestHeaders = {};
    export type ResponseBody = Report;
  }
  /**
   * No description
   * @tags AdminReportController
   * @name AdminReportControllerUpdateAllAdminReport
   * @request PATCH:/admin/reports
   * @secure
   */
  export namespace AdminReportControllerUpdateAllAdminReport {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = ReportPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminReportController
   * @name AdminReportControllerFindAdminReport
   * @request GET:/admin/reports
   * @secure
   */
  export namespace AdminReportControllerFindAdminReport {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportWithRelations[];
  }
  /**
   * No description
   * @tags AdminSellCarController
   * @name AdminSellCarControllerCountAdminSellCar
   * @request GET:/admin/sellCars/count
   * @secure
   */
  export namespace AdminSellCarControllerCountAdminSellCar {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminSellCarController
   * @name AdminSellCarControllerReplaceByIdAdminSellCar
   * @request PUT:/admin/sellCars/{id}
   * @secure
   */
  export namespace AdminSellCarControllerReplaceByIdAdminSellCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SellCar;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminSellCarController
   * @name AdminSellCarControllerUpdateByIdAdminSellCar
   * @request PATCH:/admin/sellCars/{id}
   * @secure
   */
  export namespace AdminSellCarControllerUpdateByIdAdminSellCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SellCarPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminSellCarController
   * @name AdminSellCarControllerFindByIdAdminSellCar
   * @request GET:/admin/sellCars/{id}
   * @secure
   */
  export namespace AdminSellCarControllerFindByIdAdminSellCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SellCarWithRelations;
  }
  /**
   * No description
   * @tags AdminSellCarController
   * @name AdminSellCarControllerDeleteByIdAdminSellCar
   * @request DELETE:/admin/sellCars/{id}
   * @secure
   */
  export namespace AdminSellCarControllerDeleteByIdAdminSellCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminSellCarController
   * @name AdminSellCarControllerCreateAdminSellCar
   * @request POST:/admin/sellCars
   * @secure
   */
  export namespace AdminSellCarControllerCreateAdminSellCar {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewSellCar;
    export type RequestHeaders = {};
    export type ResponseBody = SellCar;
  }
  /**
   * No description
   * @tags AdminSellCarController
   * @name AdminSellCarControllerUpdateAllAdminSellCar
   * @request PATCH:/admin/sellCars
   * @secure
   */
  export namespace AdminSellCarControllerUpdateAllAdminSellCar {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = SellCarPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminSellCarController
   * @name AdminSellCarControllerFindAdminSellCar
   * @request GET:/admin/sellCars
   * @secure
   */
  export namespace AdminSellCarControllerFindAdminSellCar {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SellCarWithRelations[];
  }
  /**
   * No description
   * @tags AdminSmsController
   * @name AdminSmsControllerCountAdminSms
   * @request GET:/admin/sms/count
   * @secure
   */
  export namespace AdminSmsControllerCountAdminSms {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminSmsController
   * @name AdminSmsControllerReplaceByIdAdminSms
   * @request PUT:/admin/sms/{id}
   * @secure
   */
  export namespace AdminSmsControllerReplaceByIdAdminSms {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Sms;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminSmsController
   * @name AdminSmsControllerUpdateByIdAdminSms
   * @request PATCH:/admin/sms/{id}
   * @secure
   */
  export namespace AdminSmsControllerUpdateByIdAdminSms {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminSmsController
   * @name AdminSmsControllerFindByIdAdminSms
   * @request GET:/admin/sms/{id}
   * @secure
   */
  export namespace AdminSmsControllerFindByIdAdminSms {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SmsWithRelations;
  }
  /**
   * No description
   * @tags AdminSmsController
   * @name AdminSmsControllerDeleteByIdAdminSms
   * @request DELETE:/admin/sms/{id}
   * @secure
   */
  export namespace AdminSmsControllerDeleteByIdAdminSms {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminSmsController
   * @name AdminSmsControllerCreateAdminSms
   * @request POST:/admin/sms
   * @secure
   */
  export namespace AdminSmsControllerCreateAdminSms {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewSms;
    export type RequestHeaders = {};
    export type ResponseBody = Sms;
  }
  /**
   * No description
   * @tags AdminSmsController
   * @name AdminSmsControllerUpdateAllAdminSms
   * @request PATCH:/admin/sms
   * @secure
   */
  export namespace AdminSmsControllerUpdateAllAdminSms {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = SmsPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminSmsController
   * @name AdminSmsControllerFindAdminSms
   * @request GET:/admin/sms
   * @secure
   */
  export namespace AdminSmsControllerFindAdminSms {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SmsWithRelations[];
  }
  /**
   * No description
   * @tags AdminTagController
   * @name AdminTagControllerCountAdminTag
   * @request GET:/admin/tags/count
   * @secure
   */
  export namespace AdminTagControllerCountAdminTag {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminTagController
   * @name AdminTagControllerReplaceByIdAdminTag
   * @request PUT:/admin/tags/{id}
   * @secure
   */
  export namespace AdminTagControllerReplaceByIdAdminTag {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Tag;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminTagController
   * @name AdminTagControllerUpdateByIdAdminTag
   * @request PATCH:/admin/tags/{id}
   * @secure
   */
  export namespace AdminTagControllerUpdateByIdAdminTag {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TagPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminTagController
   * @name AdminTagControllerFindByIdAdminTag
   * @request GET:/admin/tags/{id}
   * @secure
   */
  export namespace AdminTagControllerFindByIdAdminTag {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TagWithRelations;
  }
  /**
   * No description
   * @tags AdminTagController
   * @name AdminTagControllerDeleteByIdAdminTag
   * @request DELETE:/admin/tags/{id}
   * @secure
   */
  export namespace AdminTagControllerDeleteByIdAdminTag {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminTagController
   * @name AdminTagControllerCreateAdminTag
   * @request POST:/admin/tags
   * @secure
   */
  export namespace AdminTagControllerCreateAdminTag {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewTag;
    export type RequestHeaders = {};
    export type ResponseBody = Tag;
  }
  /**
   * No description
   * @tags AdminTagController
   * @name AdminTagControllerUpdateAllAdminTag
   * @request PATCH:/admin/tags
   * @secure
   */
  export namespace AdminTagControllerUpdateAllAdminTag {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = TagPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminTagController
   * @name AdminTagControllerFindAdminTag
   * @request GET:/admin/tags
   * @secure
   */
  export namespace AdminTagControllerFindAdminTag {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TagWithRelations[];
  }
  /**
   * No description
   * @tags AdminUserController
   * @name AdminUserControllerCountAdminUser
   * @request GET:/admin/users/count
   * @secure
   */
  export namespace AdminUserControllerCountAdminUser {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminUserController
   * @name AdminUserControllerReplaceByIdAdminUser
   * @request PUT:/admin/users/{id}
   * @secure
   */
  export namespace AdminUserControllerReplaceByIdAdminUser {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = User;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminUserController
   * @name AdminUserControllerUpdateByIdAdminUser
   * @request PATCH:/admin/users/{id}
   * @secure
   */
  export namespace AdminUserControllerUpdateByIdAdminUser {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UserPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminUserController
   * @name AdminUserControllerFindByIdAdminUser
   * @request GET:/admin/users/{id}
   * @secure
   */
  export namespace AdminUserControllerFindByIdAdminUser {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserWithRelations;
  }
  /**
   * No description
   * @tags AdminUserController
   * @name AdminUserControllerDeleteByIdAdminUser
   * @request DELETE:/admin/users/{id}
   * @secure
   */
  export namespace AdminUserControllerDeleteByIdAdminUser {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags AdminUserController
   * @name AdminUserControllerCreateAdminUser
   * @request POST:/admin/users
   * @secure
   */
  export namespace AdminUserControllerCreateAdminUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewUser;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags AdminUserController
   * @name AdminUserControllerUpdateAllAdminUser
   * @request PATCH:/admin/users
   * @secure
   */
  export namespace AdminUserControllerUpdateAllAdminUser {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = UserPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags AdminUserController
   * @name AdminUserControllerFindAdminUser
   * @request GET:/admin/users
   * @secure
   */
  export namespace AdminUserControllerFindAdminUser {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserWithRelations[];
  }
}

export namespace CarUsages {
  /**
   * No description
   * @tags CarUsageController
   * @name CarUsageControllerCountCarUsage
   * @request GET:/carUsages/count
   * @secure
   */
  export namespace CarUsageControllerCountCarUsage {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags CarUsageController
   * @name CarUsageControllerReplaceByIdCarUsage
   * @request PUT:/carUsages/{id}
   * @secure
   */
  export namespace CarUsageControllerReplaceByIdCarUsage {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CarUsage;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CarUsageController
   * @name CarUsageControllerUpdateByIdCarUsage
   * @request PATCH:/carUsages/{id}
   * @secure
   */
  export namespace CarUsageControllerUpdateByIdCarUsage {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CarUsagePartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CarUsageController
   * @name CarUsageControllerFindByIdCarUsage
   * @request GET:/carUsages/{id}
   * @secure
   */
  export namespace CarUsageControllerFindByIdCarUsage {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CarUsageWithRelations;
  }
  /**
   * No description
   * @tags CarUsageController
   * @name CarUsageControllerDeleteByIdCarUsage
   * @request DELETE:/carUsages/{id}
   * @secure
   */
  export namespace CarUsageControllerDeleteByIdCarUsage {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CarUsageController
   * @name CarUsageControllerCreateCarUsage
   * @request POST:/carUsages
   * @secure
   */
  export namespace CarUsageControllerCreateCarUsage {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewCarUsage;
    export type RequestHeaders = {};
    export type ResponseBody = CarUsage;
  }
  /**
   * No description
   * @tags CarUsageController
   * @name CarUsageControllerUpdateAllCarUsage
   * @request PATCH:/carUsages
   * @secure
   */
  export namespace CarUsageControllerUpdateAllCarUsage {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = CarUsagePartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags CarUsageController
   * @name CarUsageControllerFindCarUsage
   * @request GET:/carUsages
   * @secure
   */
  export namespace CarUsageControllerFindCarUsage {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CarUsageWithRelations[];
  }
}

export namespace Cars {
  /**
   * No description
   * @tags CarController
   * @name CarControllerCountCar
   * @request GET:/cars/count
   * @secure
   */
  export namespace CarControllerCountCar {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags CarTagController
   * @name CarTagControllerGetTag
   * @request GET:/cars/{id}/tag
   * @secure
   */
  export namespace CarTagControllerGetTag {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Tag;
  }
  /**
   * No description
   * @tags CarController
   * @name CarControllerReplaceByIdCar
   * @request PUT:/cars/{id}
   * @secure
   */
  export namespace CarControllerReplaceByIdCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Car;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CarController
   * @name CarControllerUpdateByIdCar
   * @request PATCH:/cars/{id}
   * @secure
   */
  export namespace CarControllerUpdateByIdCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CarPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CarController
   * @name CarControllerFindByIdCar
   * @request GET:/cars/{id}
   * @secure
   */
  export namespace CarControllerFindByIdCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CarWithRelations;
  }
  /**
   * No description
   * @tags CarController
   * @name CarControllerDeleteByIdCar
   * @request DELETE:/cars/{id}
   * @secure
   */
  export namespace CarControllerDeleteByIdCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CarController
   * @name CarControllerCreateCar
   * @request POST:/cars
   * @secure
   */
  export namespace CarControllerCreateCar {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewCar;
    export type RequestHeaders = {};
    export type ResponseBody = Car;
  }
  /**
   * No description
   * @tags CarController
   * @name CarControllerUpdateAllCar
   * @request PATCH:/cars
   * @secure
   */
  export namespace CarControllerUpdateAllCar {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = CarPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags CarController
   * @name CarControllerFindCar
   * @request GET:/cars
   * @secure
   */
  export namespace CarControllerFindCar {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CarWithRelations[];
  }
}

export namespace Certificates {
  /**
   * No description
   * @tags CertificatesController
   * @name CertificatesControllerCount
   * @request GET:/certificates/count
   * @secure
   */
  export namespace CertificatesControllerCount {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags CertificatesUserController
   * @name CertificatesUserControllerGetUser
   * @request GET:/certificates/{id}/user
   * @secure
   */
  export namespace CertificatesUserControllerGetUser {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags CertificatesController
   * @name CertificatesControllerReplaceById
   * @request PUT:/certificates/{id}
   * @secure
   */
  export namespace CertificatesControllerReplaceById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Certificates;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CertificatesController
   * @name CertificatesControllerUpdateById
   * @request PATCH:/certificates/{id}
   * @secure
   */
  export namespace CertificatesControllerUpdateById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CertificatesPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CertificatesController
   * @name CertificatesControllerFindById
   * @request GET:/certificates/{id}
   * @secure
   */
  export namespace CertificatesControllerFindById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CertificatesWithRelations;
  }
  /**
   * No description
   * @tags CertificatesController
   * @name CertificatesControllerDeleteById
   * @request DELETE:/certificates/{id}
   * @secure
   */
  export namespace CertificatesControllerDeleteById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CertificatesController
   * @name CertificatesControllerCreate
   * @request POST:/certificates
   * @secure
   */
  export namespace CertificatesControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewCertificates;
    export type RequestHeaders = {};
    export type ResponseBody = Certificates;
  }
  /**
   * No description
   * @tags CertificatesController
   * @name CertificatesControllerUpdateAll
   * @request PATCH:/certificates
   * @secure
   */
  export namespace CertificatesControllerUpdateAll {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = CertificatesPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags CertificatesController
   * @name CertificatesControllerFind
   * @request GET:/certificates
   * @secure
   */
  export namespace CertificatesControllerFind {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CertificatesWithRelations[];
  }
}

export namespace Companies {
  /**
   * No description
   * @tags CompanyController
   * @name CompanyControllerCountCompany
   * @request GET:/companies/count
   * @secure
   */
  export namespace CompanyControllerCountCompany {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags CompanyController
   * @name CompanyControllerReplaceByIdCompany
   * @request PUT:/companies/{id}
   * @secure
   */
  export namespace CompanyControllerReplaceByIdCompany {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Company;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CompanyController
   * @name CompanyControllerUpdateByIdCompany
   * @request PATCH:/companies/{id}
   * @secure
   */
  export namespace CompanyControllerUpdateByIdCompany {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CompanyPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CompanyController
   * @name CompanyControllerFindByIdCompany
   * @request GET:/companies/{id}
   * @secure
   */
  export namespace CompanyControllerFindByIdCompany {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyWithRelations;
  }
  /**
   * No description
   * @tags CompanyController
   * @name CompanyControllerDeleteByIdCompany
   * @request DELETE:/companies/{id}
   * @secure
   */
  export namespace CompanyControllerDeleteByIdCompany {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags CompanyController
   * @name CompanyControllerCreateCompany
   * @request POST:/companies
   * @secure
   */
  export namespace CompanyControllerCreateCompany {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewCompany;
    export type RequestHeaders = {};
    export type ResponseBody = Company;
  }
  /**
   * No description
   * @tags CompanyController
   * @name CompanyControllerUpdateAllCompany
   * @request PATCH:/companies
   * @secure
   */
  export namespace CompanyControllerUpdateAllCompany {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = CompanyPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags CompanyController
   * @name CompanyControllerFindCompany
   * @request GET:/companies
   * @secure
   */
  export namespace CompanyControllerFindCompany {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyWithRelations[];
  }
}

export namespace CompanyDrivers {
  /**
   * No description
   * @tags DriverController
   * @name DriverControllerConnectDriver
   * @request POST:/company-drivers/connect
   * @secure
   */
  export namespace DriverControllerConnectDriver {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = object;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerJoinDriver
   * @request POST:/company-drivers/join/{id}/{creatorId}
   * @secure
   */
  export namespace UserControllerJoinDriver {
    export type RequestParams = {
      id: string;
      creatorId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerRejectDriver
   * @request POST:/company-drivers/reject/{id}/{creatorId}
   * @secure
   */
  export namespace UserControllerRejectDriver {
    export type RequestParams = {
      id: string;
      creatorId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Contracts {
  /**
   * No description
   * @tags ContractController
   * @name ContractControllerCountContract
   * @request GET:/contracts/count
   * @secure
   */
  export namespace ContractControllerCountContract {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags ContractController
   * @name ContractControllerReplaceByIdContract
   * @request PUT:/contracts/{id}
   * @secure
   */
  export namespace ContractControllerReplaceByIdContract {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Contracts;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags ContractController
   * @name ContractControllerUpdateByIdContract
   * @request PATCH:/contracts/{id}
   * @secure
   */
  export namespace ContractControllerUpdateByIdContract {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ContractsPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags ContractController
   * @name ContractControllerFindByIdContract
   * @request GET:/contracts/{id}
   * @secure
   */
  export namespace ContractControllerFindByIdContract {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractsWithRelations;
  }
  /**
   * No description
   * @tags ContractController
   * @name ContractControllerDeleteByIdContract
   * @request DELETE:/contracts/{id}
   * @secure
   */
  export namespace ContractControllerDeleteByIdContract {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags ContractController
   * @name ContractControllerCreateContract
   * @request POST:/contracts
   * @secure
   */
  export namespace ContractControllerCreateContract {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewContract;
    export type RequestHeaders = {};
    export type ResponseBody = Contracts;
  }
  /**
   * No description
   * @tags ContractController
   * @name ContractControllerUpdateAllContract
   * @request PATCH:/contracts
   * @secure
   */
  export namespace ContractControllerUpdateAllContract {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = ContractsPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags ContractController
   * @name ContractControllerFindContract
   * @request GET:/contracts
   * @secure
   */
  export namespace ContractControllerFindContract {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractsWithRelations[];
  }
}

export namespace Driver {
  /**
   * No description
   * @tags ContractController
   * @name ContractControllerFindContractByDriverId
   * @request GET:/driver/contracts/{driverId}
   * @secure
   */
  export namespace ContractControllerFindContractByDriverId {
    export type RequestParams = {
      driverId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ContractsWithRelations;
  }
  /**
   * No description
   * @tags EmployeeCertificateController
   * @name EmployeeCertificateControllerFindEmployeeCertificateByDriverId
   * @request GET:/driver/employeeCertificates/{driverId}
   * @secure
   */
  export namespace EmployeeCertificateControllerFindEmployeeCertificateByDriverId {
    export type RequestParams = {
      driverId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EmployeeCertificateWithRelations;
  }
  /**
   * No description
   * @tags EmployeeIncomeRecordController
   * @name EmployeeIncomeRecordControllerFindEmployeeIncomeRecordByDriverId
   * @request GET:/driver/employeeIncomeRecords/{driverId}
   * @secure
   */
  export namespace EmployeeIncomeRecordControllerFindEmployeeIncomeRecordByDriverId {
    export type RequestParams = {
      driverId: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EmployeeIncomeRecordWithRelations;
  }
  /**
   * No description
   * @tags DriverReportController
   * @name DriverReportControllerCountDriverReport
   * @request GET:/driver/reports/count
   * @secure
   */
  export namespace DriverReportControllerCountDriverReport {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags DriverReportController
   * @name DriverReportControllerUpdateByIdDriverReport
   * @request PATCH:/driver/reports/{id}
   * @secure
   */
  export namespace DriverReportControllerUpdateByIdDriverReport {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ReportPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags DriverReportController
   * @name DriverReportControllerFindByIdDriverReport
   * @request GET:/driver/reports/{id}
   * @secure
   */
  export namespace DriverReportControllerFindByIdDriverReport {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportWithRelations;
  }
  /**
   * No description
   * @tags DriverReportController
   * @name DriverReportControllerCreateDriverReport
   * @request POST:/driver/reports
   * @secure
   */
  export namespace DriverReportControllerCreateDriverReport {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewReport;
    export type RequestHeaders = {};
    export type ResponseBody = Report;
  }
  /**
   * No description
   * @tags DriverReportController
   * @name DriverReportControllerFindDriverReport
   * @request GET:/driver/reports
   * @secure
   */
  export namespace DriverReportControllerFindDriverReport {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportWithRelations[];
  }
}

export namespace Drivers {
  /**
   * No description
   * @tags DriverReportController
   * @name DriverReportControllerGetAllCompaniesForDriver
   * @request GET:/drivers/companies/list
   * @secure
   */
  export namespace DriverReportControllerGetAllCompaniesForDriver {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags DriverController
   * @name DriverControllerCountDriver
   * @request GET:/drivers/count
   * @secure
   */
  export namespace DriverControllerCountDriver {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags DriverController
   * @name DriverControllerReplaceByIdDriver
   * @request PUT:/drivers/{id}
   * @secure
   */
  export namespace DriverControllerReplaceByIdDriver {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = User;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags DriverController
   * @name DriverControllerUpdateByIdDriver
   * @request PATCH:/drivers/{id}
   * @secure
   */
  export namespace DriverControllerUpdateByIdDriver {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UserPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags DriverController
   * @name DriverControllerFindByIdDriver
   * @request GET:/drivers/{id}
   * @secure
   */
  export namespace DriverControllerFindByIdDriver {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserWithRelations;
  }
  /**
   * No description
   * @tags DriverController
   * @name DriverControllerDeleteByIdDriver
   * @request DELETE:/drivers/{id}
   * @secure
   */
  export namespace DriverControllerDeleteByIdDriver {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags DriverController
   * @name DriverControllerCreateDriver
   * @request POST:/drivers
   * @secure
   */
  export namespace DriverControllerCreateDriver {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewUser;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags DriverController
   * @name DriverControllerFindDriver
   * @request GET:/drivers
   * @secure
   */
  export namespace DriverControllerFindDriver {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserWithRelations[];
  }
}

export namespace EmployeeCertificates {
  /**
   * No description
   * @tags EmployeeCertificateController
   * @name EmployeeCertificateControllerCount
   * @request GET:/employeeCertificates/count
   * @secure
   */
  export namespace EmployeeCertificateControllerCount {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags EmployeeCertificateController
   * @name EmployeeCertificateControllerReplaceById
   * @request PUT:/employeeCertificates/{id}
   * @secure
   */
  export namespace EmployeeCertificateControllerReplaceById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EmployeeCertificate;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags EmployeeCertificateController
   * @name EmployeeCertificateControllerUpdateById
   * @request PATCH:/employeeCertificates/{id}
   * @secure
   */
  export namespace EmployeeCertificateControllerUpdateById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EmployeeCertificatePartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags EmployeeCertificateController
   * @name EmployeeCertificateControllerFindById
   * @request GET:/employeeCertificates/{id}
   * @secure
   */
  export namespace EmployeeCertificateControllerFindById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EmployeeCertificateWithRelations;
  }
  /**
   * No description
   * @tags EmployeeCertificateController
   * @name EmployeeCertificateControllerDeleteById
   * @request DELETE:/employeeCertificates/{id}
   * @secure
   */
  export namespace EmployeeCertificateControllerDeleteById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags EmployeeCertificateController
   * @name EmployeeCertificateControllerCreate
   * @request POST:/employeeCertificates
   * @secure
   */
  export namespace EmployeeCertificateControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewEmployeeCertificate;
    export type RequestHeaders = {};
    export type ResponseBody = EmployeeCertificate;
  }
  /**
   * No description
   * @tags EmployeeCertificateController
   * @name EmployeeCertificateControllerUpdateAll
   * @request PATCH:/employeeCertificates
   * @secure
   */
  export namespace EmployeeCertificateControllerUpdateAll {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = EmployeeCertificatePartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags EmployeeCertificateController
   * @name EmployeeCertificateControllerFind
   * @request GET:/employeeCertificates
   * @secure
   */
  export namespace EmployeeCertificateControllerFind {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EmployeeCertificateWithRelations[];
  }
}

export namespace EmployeeIncomeRecords {
  /**
   * No description
   * @tags EmployeeIncomeRecordController
   * @name EmployeeIncomeRecordControllerCount
   * @request GET:/employeeIncomeRecords/count
   * @secure
   */
  export namespace EmployeeIncomeRecordControllerCount {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags EmployeeIncomeRecordController
   * @name EmployeeIncomeRecordControllerReplaceById
   * @request PUT:/employeeIncomeRecords/{id}
   * @secure
   */
  export namespace EmployeeIncomeRecordControllerReplaceById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EmployeeIncomeRecord;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags EmployeeIncomeRecordController
   * @name EmployeeIncomeRecordControllerUpdateById
   * @request PATCH:/employeeIncomeRecords/{id}
   * @secure
   */
  export namespace EmployeeIncomeRecordControllerUpdateById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EmployeeIncomeRecordPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags EmployeeIncomeRecordController
   * @name EmployeeIncomeRecordControllerFindById
   * @request GET:/employeeIncomeRecords/{id}
   * @secure
   */
  export namespace EmployeeIncomeRecordControllerFindById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EmployeeIncomeRecordWithRelations;
  }
  /**
   * No description
   * @tags EmployeeIncomeRecordController
   * @name EmployeeIncomeRecordControllerDeleteById
   * @request DELETE:/employeeIncomeRecords/{id}
   * @secure
   */
  export namespace EmployeeIncomeRecordControllerDeleteById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags EmployeeIncomeRecordController
   * @name EmployeeIncomeRecordControllerCreate
   * @request POST:/employeeIncomeRecords
   * @secure
   */
  export namespace EmployeeIncomeRecordControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewEmployeeIncomeRecord;
    export type RequestHeaders = {};
    export type ResponseBody = EmployeeIncomeRecord;
  }
  /**
   * No description
   * @tags EmployeeIncomeRecordController
   * @name EmployeeIncomeRecordControllerUpdateAll
   * @request PATCH:/employeeIncomeRecords
   * @secure
   */
  export namespace EmployeeIncomeRecordControllerUpdateAll {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = EmployeeIncomeRecordPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags EmployeeIncomeRecordController
   * @name EmployeeIncomeRecordControllerFind
   * @request GET:/employeeIncomeRecords
   * @secure
   */
  export namespace EmployeeIncomeRecordControllerFind {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EmployeeIncomeRecordWithRelations[];
  }
}

export namespace FindExistingReports {
  /**
   * No description
   * @tags ReportController
   * @name ReportControllerFindExistingReports
   * @request POST:/find-existing-reports
   * @secure
   */
  export namespace ReportControllerFindExistingReports {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = object;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace GetAllDrivers {
  /**
   * No description
   * @tags DriverController
   * @name DriverControllerGetAllDrivers
   * @request GET:/get-all-drivers
   * @secure
   */
  export namespace DriverControllerGetAllDrivers {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Images {
  /**
   * No description
   * @tags UploadFileController
   * @name UploadFileControllerUploadImage
   * @request POST:/images/upload
   * @secure
   */
  export namespace UploadFileControllerUploadImage {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = object;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Jobs {
  /**
   * No description
   * @tags JobController
   * @name JobControllerCountJob
   * @request GET:/jobs/count
   * @secure
   */
  export namespace JobControllerCountJob {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags JobController
   * @name JobControllerReplaceByIdJob
   * @request PUT:/jobs/{id}
   * @secure
   */
  export namespace JobControllerReplaceByIdJob {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Job;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags JobController
   * @name JobControllerUpdateByIdJob
   * @request PATCH:/jobs/{id}
   * @secure
   */
  export namespace JobControllerUpdateByIdJob {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = JobPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags JobController
   * @name JobControllerFindByIdJob
   * @request GET:/jobs/{id}
   * @secure
   */
  export namespace JobControllerFindByIdJob {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = JobWithRelations;
  }
  /**
   * No description
   * @tags JobController
   * @name JobControllerDeleteByIdJob
   * @request DELETE:/jobs/{id}
   * @secure
   */
  export namespace JobControllerDeleteByIdJob {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags JobController
   * @name JobControllerCreateJob
   * @request POST:/jobs
   * @secure
   */
  export namespace JobControllerCreateJob {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewJob;
    export type RequestHeaders = {};
    export type ResponseBody = Job;
  }
  /**
   * No description
   * @tags JobController
   * @name JobControllerUpdateAllJob
   * @request PATCH:/jobs
   * @secure
   */
  export namespace JobControllerUpdateAllJob {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = JobPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags JobController
   * @name JobControllerFindJob
   * @request GET:/jobs
   * @secure
   */
  export namespace JobControllerFindJob {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = JobWithRelations[];
  }
}

export namespace Openapi {
  /**
   * No description
   * @tags PingController
   * @name PingControllerGetOpenApiJson
   * @request POST:/openapi
   * @secure
   */
  export namespace PingControllerGetOpenApiJson {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = object;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Ping {
  /**
   * No description
   * @tags PingController
   * @name PingControllerPing
   * @request GET:/ping
   * @secure
   */
  export namespace PingControllerPing {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PingResponse;
  }
}

export namespace Refresh {
  /**
   * No description
   * @tags UserController
   * @name UserControllerRefresh
   * @request POST:/refresh
   * @secure
   */
  export namespace UserControllerRefresh {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      refreshToken: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      accessToken?: object;
    };
  }
}

export namespace Reports {
  /**
   * No description
   * @tags ReportController
   * @name ReportControllerCountReport
   * @request GET:/reports/count
   * @secure
   */
  export namespace ReportControllerCountReport {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags ReportController
   * @name ReportControllerReplaceByIdReport
   * @request PUT:/reports/{id}
   * @secure
   */
  export namespace ReportControllerReplaceByIdReport {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Report;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags ReportController
   * @name ReportControllerUpdateByIdReport
   * @request PATCH:/reports/{id}
   * @secure
   */
  export namespace ReportControllerUpdateByIdReport {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ReportPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags ReportController
   * @name ReportControllerFindByIdReport
   * @request GET:/reports/{id}
   * @secure
   */
  export namespace ReportControllerFindByIdReport {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportWithRelations;
  }
  /**
   * No description
   * @tags ReportController
   * @name ReportControllerDeleteByIdReport
   * @request DELETE:/reports/{id}
   * @secure
   */
  export namespace ReportControllerDeleteByIdReport {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags ReportController
   * @name ReportControllerCreateReport
   * @request POST:/reports
   * @secure
   */
  export namespace ReportControllerCreateReport {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewReport;
    export type RequestHeaders = {};
    export type ResponseBody = Report;
  }
  /**
   * No description
   * @tags ReportController
   * @name ReportControllerUpdateAllReport
   * @request PATCH:/reports
   * @secure
   */
  export namespace ReportControllerUpdateAllReport {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = ReportPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags ReportController
   * @name ReportControllerFindReport
   * @request GET:/reports
   * @secure
   */
  export namespace ReportControllerFindReport {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportWithRelations[];
  }
}

export namespace Revoke {
  /**
   * No description
   * @tags UserController
   * @name UserControllerRevoke
   * @request POST:/revoke
   * @secure
   */
  export namespace UserControllerRevoke {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      refreshToken: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      success?: boolean;
    };
  }
}

export namespace SellCars {
  /**
   * No description
   * @tags SellCarController
   * @name SellCarControllerCountSellCar
   * @request GET:/sellCars/count
   * @secure
   */
  export namespace SellCarControllerCountSellCar {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags SellCarController
   * @name SellCarControllerReplaceByIdSellCar
   * @request PUT:/sellCars/{id}
   * @secure
   */
  export namespace SellCarControllerReplaceByIdSellCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SellCar;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags SellCarController
   * @name SellCarControllerUpdateByIdSellCar
   * @request PATCH:/sellCars/{id}
   * @secure
   */
  export namespace SellCarControllerUpdateByIdSellCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SellCarPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags SellCarController
   * @name SellCarControllerFindByIdSellCar
   * @request GET:/sellCars/{id}
   * @secure
   */
  export namespace SellCarControllerFindByIdSellCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SellCarWithRelations;
  }
  /**
   * No description
   * @tags SellCarController
   * @name SellCarControllerDeleteByIdSellCar
   * @request DELETE:/sellCars/{id}
   * @secure
   */
  export namespace SellCarControllerDeleteByIdSellCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags SellCarController
   * @name SellCarControllerCreateSellCar
   * @request POST:/sellCars
   * @secure
   */
  export namespace SellCarControllerCreateSellCar {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewSellCar;
    export type RequestHeaders = {};
    export type ResponseBody = SellCar;
  }
  /**
   * No description
   * @tags SellCarController
   * @name SellCarControllerUpdateAllSellCar
   * @request PATCH:/sellCars
   * @secure
   */
  export namespace SellCarControllerUpdateAllSellCar {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = SellCarPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags SellCarController
   * @name SellCarControllerFindSellCar
   * @request GET:/sellCars
   * @secure
   */
  export namespace SellCarControllerFindSellCar {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SellCarWithRelations[];
  }
}

export namespace Sms {
  /**
   * No description
   * @tags SmsController
   * @name SmsControllerCount
   * @request GET:/sms/count
   * @secure
   */
  export namespace SmsControllerCount {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags SmsController
   * @name SmsControllerReplaceById
   * @request PUT:/sms/{id}
   * @secure
   */
  export namespace SmsControllerReplaceById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Sms;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags SmsController
   * @name SmsControllerUpdateById
   * @request PATCH:/sms/{id}
   * @secure
   */
  export namespace SmsControllerUpdateById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SmsPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags SmsController
   * @name SmsControllerFindById
   * @request GET:/sms/{id}
   * @secure
   */
  export namespace SmsControllerFindById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SmsWithRelations;
  }
  /**
   * No description
   * @tags SmsController
   * @name SmsControllerDeleteById
   * @request DELETE:/sms/{id}
   * @secure
   */
  export namespace SmsControllerDeleteById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags SmsController
   * @name SmsControllerCreate
   * @request POST:/sms
   * @secure
   */
  export namespace SmsControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewSms;
    export type RequestHeaders = {};
    export type ResponseBody = Sms;
  }
  /**
   * No description
   * @tags SmsController
   * @name SmsControllerUpdateAll
   * @request PATCH:/sms
   * @secure
   */
  export namespace SmsControllerUpdateAll {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = SmsPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags SmsController
   * @name SmsControllerFind
   * @request GET:/sms
   * @secure
   */
  export namespace SmsControllerFind {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SmsWithRelations[];
  }
}

export namespace Tags {
  /**
   * No description
   * @tags TagController
   * @name TagControllerCountTag
   * @request GET:/tags/count
   * @secure
   */
  export namespace TagControllerCountTag {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags TagController
   * @name TagControllerReplaceByIdTag
   * @request PUT:/tags/{id}
   * @secure
   */
  export namespace TagControllerReplaceByIdTag {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Tag;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags TagController
   * @name TagControllerUpdateByIdTag
   * @request PATCH:/tags/{id}
   * @secure
   */
  export namespace TagControllerUpdateByIdTag {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TagPartial;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags TagController
   * @name TagControllerFindByIdTag
   * @request GET:/tags/{id}
   * @secure
   */
  export namespace TagControllerFindByIdTag {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TagWithRelations;
  }
  /**
   * No description
   * @tags TagController
   * @name TagControllerDeleteByIdTag
   * @request DELETE:/tags/{id}
   * @secure
   */
  export namespace TagControllerDeleteByIdTag {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags TagController
   * @name TagControllerCreateTag
   * @request POST:/tags
   * @secure
   */
  export namespace TagControllerCreateTag {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewTag;
    export type RequestHeaders = {};
    export type ResponseBody = Tag;
  }
  /**
   * No description
   * @tags TagController
   * @name TagControllerUpdateAllTag
   * @request PATCH:/tags
   * @secure
   */
  export namespace TagControllerUpdateAllTag {
    export type RequestParams = {};
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = TagPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags TagController
   * @name TagControllerFindTag
   * @request GET:/tags
   * @secure
   */
  export namespace TagControllerFindTag {
    export type RequestParams = {};
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TagWithRelations[];
  }
}

export namespace Upload {
  /**
   * No description
   * @tags UploadController
   * @name UploadControllerUploadFile
   * @request POST:/upload
   * @secure
   */
  export namespace UploadControllerUploadFile {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      file?: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Users {
  /**
   * No description
   * @tags UserController
   * @name UserControllerChangeEmail
   * @request PATCH:/users/changeEmail
   * @secure
   */
  export namespace UserControllerChangeEmail {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      newEmail: string;
      password: string;
      role?: "Admin" | "User" | "Company";
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      success?: boolean;
    };
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerChangePassword
   * @request PATCH:/users/changePassword
   * @secure
   */
  export namespace UserControllerChangePassword {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      currentPassword: string;
      newPassword: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      success?: boolean;
    };
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerFindEmail
   * @request POST:/users/findEmail
   * @secure
   */
  export namespace UserControllerFindEmail {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format email */
      email: string;
      role: "Admin" | "User" | "Company";
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      success?: boolean;
    };
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerResetPassword
   * @request POST:/users/forgot/updatePassword
   * @secure
   */
  export namespace UserControllerResetPassword {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      password: string;
      role: "Admin" | "User" | "Company";
      token: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      success?: boolean;
    };
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerGoogleLogin
   * @request POST:/users/login/google
   * @secure
   */
  export namespace UserControllerGoogleLogin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      tokenId: string;
      role?: "Admin" | "User" | "Company";
      creatorId?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      accessToken?: string;
      refreshToken?: string;
      updateProfile?: boolean;
    };
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerMetamaskLogin
   * @request POST:/users/login/metamask
   * @secure
   */
  export namespace UserControllerMetamaskLogin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      address: string;
      signature: string;
      role?: "Admin" | "User" | "Company";
      creatorId?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      accessToken?: string;
      refreshToken?: string;
      updateProfile?: boolean;
    };
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerLoginCreatorAndUser
   * @request POST:/users/login
   * @secure
   */
  export namespace UserControllerLoginCreatorAndUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format email */
      email: string;
      password: string;
      role: "Admin" | "User" | "Company";
      creatorId?: string;
      /** @format email */
      creatorEmail?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      accessToken?: string;
      refreshToken?: string;
      updateProfile?: boolean;
    };
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerGoogleLoginOrRegister
   * @request POST:/users/login-or-register/google
   * @secure
   */
  export namespace UserControllerGoogleLoginOrRegister {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      tokenId: string;
      role?: "Admin" | "User" | "Company";
      creatorId?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerLoginAfterSubscription
   * @request GET:/users/loginAfterSubscription/{sessionId}
   * @secure
   */
  export namespace UserControllerLoginAfterSubscription {
    export type RequestParams = {
      sessionId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerGetUser
   * @request GET:/users/me
   * @secure
   */
  export namespace UserControllerGetUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      id: string;
      email?: string;
      name?: string;
    };
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerGetNonce
   * @request GET:/users/nonce/{address}
   * @secure
   */
  export namespace UserControllerGetNonce {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      nonce?: string;
    };
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerResendEmail
   * @request POST:/users/resendEmail
   * @secure
   */
  export namespace UserControllerResendEmail {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = object;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerSendEmail
   * @request POST:/users/sendEmail
   * @secure
   */
  export namespace UserControllerSendEmail {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = object;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerCreate
   * @request POST:/users/sign-up
   * @secure
   */
  export namespace UserControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      firstName?: string;
      lastName?: string;
      name?: string;
      /** @format email */
      email: string;
      /** @format email */
      creatorEmail?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerGetSocketToken
   * @request GET:/users/socketToken
   * @secure
   */
  export namespace UserControllerGetSocketToken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerStripeCheckout
   * @request POST:/users/stripeCheckout
   * @secure
   */
  export namespace UserControllerStripeCheckout {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = object;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerUpdateUser
   * @request PATCH:/users/update
   * @secure
   */
  export namespace UserControllerUpdateUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserPartial;
    export type RequestHeaders = {};
    export type ResponseBody = {
      success?: boolean;
    };
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerVerifyEmailToken
   * @request GET:/users/verify/email/token/{token}
   * @secure
   */
  export namespace UserControllerVerifyEmailToken {
    export type RequestParams = {
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerVerifyEmail
   * @request GET:/users/verifyEmail/{token}/{role}
   * @secure
   */
  export namespace UserControllerVerifyEmail {
    export type RequestParams = {
      token: string;
      role: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      success?: boolean;
    };
  }
  /**
   * No description
   * @tags UserCarController
   * @name UserCarControllerGetCar
   * @request GET:/users/{id}/car
   * @secure
   */
  export namespace UserCarControllerGetCar {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Car;
  }
  /**
   * No description
   * @tags UserCertificatesController
   * @name UserCertificatesControllerCreate
   * @request POST:/users/{id}/certificates
   * @secure
   */
  export namespace UserCertificatesControllerCreate {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = NewCertificatesInUser;
    export type RequestHeaders = {};
    export type ResponseBody = Certificates;
  }
  /**
   * No description
   * @tags UserCertificatesController
   * @name UserCertificatesControllerPatch
   * @request PATCH:/users/{id}/certificates
   * @secure
   */
  export namespace UserCertificatesControllerPatch {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = CertificatesPartial;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags UserCertificatesController
   * @name UserCertificatesControllerFind
   * @request GET:/users/{id}/certificates
   * @secure
   */
  export namespace UserCertificatesControllerFind {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      filter?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Certificates[];
  }
  /**
   * No description
   * @tags UserCertificatesController
   * @name UserCertificatesControllerDelete
   * @request DELETE:/users/{id}/certificates
   * @secure
   */
  export namespace UserCertificatesControllerDelete {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      where?: any;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoopbackCount;
  }
  /**
   * No description
   * @tags UserTagController
   * @name UserTagControllerGetTag
   * @request GET:/users/{id}/tag
   * @secure
   */
  export namespace UserTagControllerGetTag {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Tag;
  }
  /**
   * No description
   * @tags UserController
   * @name UserControllerFindById
   * @request GET:/users/{userId}
   * @secure
   */
  export namespace UserControllerFindById {
    export type RequestParams = {
      userId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
}
