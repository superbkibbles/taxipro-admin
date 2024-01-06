export interface HttpError extends Error {
  data: {
    error: {
      message: string;
      description: string;
      statusCode: number;
    };
  };
}

export type MutationResponse<T> = {
  data: T;
  error: HttpError;
};

export type MutateArgs<T = void> = {
  data?: T;
  url?: string;
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
};

export enum Role {
  Admin = "Admin",
  Company = "Company",
  User = "User",
}

export enum PhoneType {
  Office = "Office",
  Personal = "Personal",
  Home = "Home",
}

export enum ResetPasswordInfoType {
  VerifyEmail = "VerifyEmail",
  ChangePassword = "ChangePassword",
  ChangeEmail = "ChangeEmail",
}

export enum Months {
  January = "Januari",
  February = "Februari",
  March = "Mars",
  April = "April",
  May = "Maj",
  June = "Juni",
  July = "Juli",
  August = "Augusti",
  September = "September",
  October = "Oktober",
  November = "November",
  December = "December",
}
