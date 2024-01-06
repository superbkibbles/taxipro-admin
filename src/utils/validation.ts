import { RuleObject } from "antd/es/form";

export const validateInput: (
  rule: RuleObject,
  value: any,
  callback: (error?: string | undefined) => void
) => void = (_, value, callback) => {
  if (value && value.toString().replace(/\s/g, "").length > 50) {
    return callback("Input must be maximum 50 characters without spaces.");
  }
  callback();
};

export const validateDescription: (
  rule: RuleObject,
  value: any,
  callback: (error?: string | undefined) => void
) => void = (_, value, callback) => {
  if (value && value.replace(/\s/g, "").length > 150) {
    return callback("Input must be maximum 150 characters without spaces.");
  }
  callback();
};

export const validatePhoneNumber: (
  rule: RuleObject,
  value: any,
  callback: (error?: string | undefined) => void
) => void = (_, value, callback) => {
  const phoneNumberRegex =
    /^(?:\+46|0)(?:(?:\d{2}\s*\d{3}\s*\d{2}\s*\d{2})|(?:\d{3}\s*\d{2}\s*\d{2})|(?:\d{2}\s*\d{2}\s*\d{3})|(?:\d{3}\s*\d{3}\s*\d{3})|(?:\d{2}\s*\d{3}\s*\d{4})|(?:\d{3}\s*\d{2}\s*\d{4})|(?:\d{2}\s*\d{2}\s*\d{4})|(?:\d{3}\s*\d{4}\s*\d{4})|(?:\d{10}))/;

  if (!phoneNumberRegex.test(value)) {
    return callback("Please enter a valid phone number.");
  }
  callback();
};

export const validatePersonalNumber: (
  rule: RuleObject,
  value: any,
  callback: (error?: string | undefined) => void
) => void = (_, value, callback) => {
  const personalNumberRegex =
    /^(19|20)?(\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[-]?(\d{4})$/;

  if (!personalNumberRegex.test(value)) {
    return callback(
      "Please enter a valid Swedish personal identification number."
    );
  }

  const cleanedValue = value.replace(/-/g, "");
  const year = parseInt(cleanedValue.substr(0, 4), 10);
  const month = parseInt(cleanedValue.substr(4, 2), 10);
  const day = parseInt(cleanedValue.substr(6, 2), 10);

  const date = new Date(year, month - 1, day);
  if (isNaN(date.getTime())) {
    return callback(
      "Please enter a valid Swedish personal identification number."
    );
  }

  callback();
};

export const validateCarRegistrationNumber: (
  rule: RuleObject,
  value: any,
  callback: (error?: string | undefined) => void
) => void = (_, value, callback) => {
  const carRegistrationNumberRegex =
    /^(?:[A-HJ-PR-UW-Z]{3}\d{2}[A-HJ-PR-UW-Z0-9]{1}|[A-HJ-PR-UW-Z]{2}\d{2}[A-HJ-PR-UW-Z0-9]{2})$/;

  if (!carRegistrationNumberRegex.test(value)) {
    callback(
      "Please enter a valid Swedish car registration number e.g 'ABC123' or 'ABC12D'."
    );
    return false;
  }

  callback();
  return true;
};

export const validateYear: (
  rule: RuleObject,
  value: any,
  callback: (error?: string | undefined) => void
) => void = (_, value, callback) => {
  const currentYear = new Date().getFullYear();
  const enteredYear = parseInt(value, 10);

  if (isNaN(enteredYear) || enteredYear < 0 || enteredYear > currentYear) {
    return callback("Please enter a valid year.");
  }

  return callback();
};

export const validateMaxNumber: (
  rule: RuleObject,
  value: any,
  callback: (error?: string | undefined) => void
) => void = (_, value, callback) => {
  if (value && value > 999999) {
    return callback("Please enter a number not exceeding 999,999.");
  }
  return callback();
};

export const validateClearingNumber: (
  rule: RuleObject,
  value: any,
  callback: (error?: string | undefined) => void
) => void = (_, value, callback) => {
  const clearingNumberRegex = /^\d{4}$/;

  if (!clearingNumberRegex.test(value)) {
    return callback("Please enter a valid bank clearing number.");
  }

  return callback();
};

export const validateBankAccountNumber: (
  rule: RuleObject,
  value: any,
  callback: (error?: string | undefined) => void
) => void = (_, value, callback) => {
  const bankAccountNumberRegex = /^\d{7,14}$/;

  if (!bankAccountNumberRegex.test(value)) {
    return callback("Please enter a valid Swedish bank account number.");
  }

  return callback();
};
