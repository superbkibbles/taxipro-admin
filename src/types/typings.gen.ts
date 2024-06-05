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

/** PhoneNo */
export interface PhoneNo {
  code?: string;
  phoneNo?: string;
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
  blocked?: boolean;
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
  subscriptionId?: string;
  notificationToken?: string;
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
  /** Subscription */
  subscription?: {
    id?: string;
    amount: number;
    status?: "Trial" | "Subscribed" | "UnSubscribed";
    /** @format date-time */
    expiredAt: string;
    plan: "Trial" | "Small" | "Medium" | "Large" | "XL";
    sessionId?: string;
    isActive?: boolean;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
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
  subscriptionId?: string;
  notificationToken?: string;
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
  /** Subscription */
  subscription?: {
    id?: string;
    amount: number;
    status?: "Trial" | "Subscribed" | "UnSubscribed";
    /** @format date-time */
    expiredAt: string;
    plan: "Trial" | "Small" | "Medium" | "Large" | "XL";
    sessionId?: string;
    isActive?: boolean;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  tagId?: string;
  carId?: string;
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

/** ToDriver */
export interface ToDriver {
  id?: string;
  name?: string;
  email?: string;
}

/** Reply */
export interface Reply {
  id?: string;
  user?: object;
  content?: string;
  type?: string;
  imageUrl?: string;
  voiceUrl?: string;
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
  status?: "Trial" | "Subscribed" | "UnSubscribed";
  /** @format date-time */
  expiredAt: string;
  plan: "Trial" | "Small" | "Medium" | "Large" | "XL";
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
  /** @format date-time */
  reminderSealedBeforeNoDays?: string | null;
  /** @format date-time */
  reminderInspectionBeforeNoDays?: string | null;
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** (tsType: UserWithRelations, schemaOptions: { includeRelations: true }) */
  User?: UserWithRelations;
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
  blocked?: boolean;
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
  /** Subscription */
  subscription?: {
    id?: string;
    amount: number;
    status?: "Trial" | "Subscribed" | "UnSubscribed";
    /** @format date-time */
    expiredAt: string;
    plan: "Trial" | "Small" | "Medium" | "Large" | "XL";
    sessionId?: string;
    isActive?: boolean;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
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

/** Sms */
export interface Sms {
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

/**
 * NewSms
 * (tsType: Omit<Sms, 'id'>, schemaOptions: { title: 'NewSms', exclude: [ 'id' ] })
 */
export interface NewSms {
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

/**
 * SmsPartial
 * (tsType: Partial<Sms>, schemaOptions: { partial: true })
 */
export interface SmsPartial {
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
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
  subscriptionId?: string;
  notificationToken?: string;
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
  /** Subscription */
  subscription?: {
    id?: string;
    amount: number;
    status?: "Trial" | "Subscribed" | "UnSubscribed";
    /** @format date-time */
    expiredAt: string;
    plan: "Trial" | "Small" | "Medium" | "Large" | "XL";
    sessionId?: string;
    isActive?: boolean;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
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
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  tagId?: string;
  carId?: string;
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
  /** @format date-time */
  reminderSealedBeforeNoDays?: string | null;
  /** @format date-time */
  reminderInspectionBeforeNoDays?: string | null;
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
  /** @format date-time */
  reminderSealedBeforeNoDays?: string | null;
  /** @format date-time */
  reminderInspectionBeforeNoDays?: string | null;
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
  /** @format date-time */
  reminderSealedBeforeNoDays?: string | null;
  /** @format date-time */
  reminderInspectionBeforeNoDays?: string | null;
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
  include?: (ActivityIncludeFilterItems | string)[];
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
  include?: (ActivityIncludeFilterItems | string)[];
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
  include?: (CarUsageIncludeFilterItems | string)[];
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
  include?: (CarUsageIncludeFilterItems | string)[];
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
  include?: (CarIncludeFilterItems | string)[];
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
  include?: (CarIncludeFilterItems | string)[];
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
  include?: (CompanyIncludeFilterItems | string)[];
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
  include?: (CompanyIncludeFilterItems | string)[];
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
  include?: (JobIncludeFilterItems | string)[];
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
  include?: (JobIncludeFilterItems | string)[];
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
  include?: (ReportIncludeFilterItems | string)[];
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
  include?: (ReportIncludeFilterItems | string)[];
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
  include?: (SellCarIncludeFilterItems | string)[];
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
  include?: (SellCarIncludeFilterItems | string)[];
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
  relation?: "User";
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
        type?: boolean;
        imageUrl?: boolean;
        voiceUrl?: boolean;
        from?: boolean;
        to?: boolean;
        user?: boolean;
        userId?: boolean;
        isSentByDriver?: boolean;
        toDrivers?: boolean;
        reply?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
      }
    | (
        | "id"
        | "content"
        | "type"
        | "imageUrl"
        | "voiceUrl"
        | "from"
        | "to"
        | "user"
        | "userId"
        | "isSentByDriver"
        | "toDrivers"
        | "reply"
        | "createdAt"
        | "updatedAt"
      )[];
  /** Sms.IncludeFilter */
  include?: (SmsIncludeFilterItems | string)[];
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
        type?: boolean;
        imageUrl?: boolean;
        voiceUrl?: boolean;
        from?: boolean;
        to?: boolean;
        user?: boolean;
        userId?: boolean;
        isSentByDriver?: boolean;
        toDrivers?: boolean;
        reply?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
      }
    | (
        | "id"
        | "content"
        | "type"
        | "imageUrl"
        | "voiceUrl"
        | "from"
        | "to"
        | "user"
        | "userId"
        | "isSentByDriver"
        | "toDrivers"
        | "reply"
        | "createdAt"
        | "updatedAt"
      )[];
  /** Sms.IncludeFilter */
  include?: (SmsIncludeFilterItems | string)[];
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
  include?: (TagIncludeFilterItems | string)[];
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
  include?: (TagIncludeFilterItems | string)[];
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
        subscriptionId?: boolean;
        notificationToken?: boolean;
        availableForWork?: boolean;
        deleted?: boolean;
        isOpenToWork?: boolean;
        agreement?: boolean;
        tags?: boolean;
        isActive?: boolean;
        subscription?: boolean;
        carsCount?: boolean;
        driversCount?: boolean;
        sellCarsCount?: boolean;
        jobsCount?: boolean;
        canCreateAds?: boolean;
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
        | "subscriptionId"
        | "notificationToken"
        | "availableForWork"
        | "deleted"
        | "isOpenToWork"
        | "agreement"
        | "tags"
        | "isActive"
        | "subscription"
        | "carsCount"
        | "driversCount"
        | "sellCarsCount"
        | "jobsCount"
        | "canCreateAds"
        | "createdAt"
        | "updatedAt"
        | "tagId"
        | "carId"
      )[];
  /** User.IncludeFilter */
  include?: (UserIncludeFilterItems | string)[];
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
        subscriptionId?: boolean;
        notificationToken?: boolean;
        availableForWork?: boolean;
        deleted?: boolean;
        isOpenToWork?: boolean;
        agreement?: boolean;
        tags?: boolean;
        isActive?: boolean;
        subscription?: boolean;
        carsCount?: boolean;
        driversCount?: boolean;
        sellCarsCount?: boolean;
        jobsCount?: boolean;
        canCreateAds?: boolean;
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
        | "subscriptionId"
        | "notificationToken"
        | "availableForWork"
        | "deleted"
        | "isOpenToWork"
        | "agreement"
        | "tags"
        | "isActive"
        | "subscription"
        | "carsCount"
        | "driversCount"
        | "sellCarsCount"
        | "jobsCount"
        | "canCreateAds"
        | "createdAt"
        | "updatedAt"
        | "tagId"
        | "carId"
      )[];
  /** User.IncludeFilter */
  include?: (UserIncludeFilterItems | string)[];
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
  include?: (CertificatesIncludeFilterItems | string)[];
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
  include?: (CertificatesIncludeFilterItems | string)[];
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
