import { PhoneNo } from "@/services/cars";
import { Report, ReportWithRelations } from "@/services/reports";
import { User } from "@/types";

export const getAvatarLetter = (user?: User) =>
  user?.firstName && user?.lastName
    ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
    : user?.firstName
    ? user.firstName[0].toUpperCase()
    : user?.name
    ? user.name[0].toUpperCase()
    : "";

export function blobToDataURL(blob: Blob, callback: (result: any) => void) {
  const fileReader = new FileReader();
  fileReader.onload = function (e: any) {
    callback(e.target.result);
  };
  fileReader.readAsDataURL(blob);
}

export function download(dataurl: string, filename: string) {
  const link = document.createElement("a");
  link.href = dataurl;
  link.download = filename;
  link.click();
}

export function getPhoneNo(phone?: PhoneNo) {
  return (phone?.code || "") + (phone?.phoneNo || "");
}

export const calculateIncome = (totalSales?: Report["totalSales"]) => {
  return (
    (totalSales?.card || 0) +
    (totalSales?.cash || 0) +
    (totalSales?.apps?.uber || 0) +
    (totalSales?.apps?.bolt || 0) +
    (totalSales?.apps?.other || 0)
  );
};
export const calculateNetIncome = (
  report: ReportWithRelations,
  driver: User
) => {
  // const taxPercentage = 6;
  const totalIncome = calculateIncome(report?.totalSales);
  const momsAmount = totalIncome * 0.05660377;
  const netAvgift = report?.netAvgift || 0;
  return {
    netIncome: Number((totalIncome - momsAmount - netAvgift).toFixed(2)),
    netIncomeCar: Number((totalIncome - momsAmount).toFixed(2)),
    vat: momsAmount,
    momsAmount,
    totalIncome,
    netAvgift,
  };
};

export const calculateUsedFuelPercentage = (
  netIncome: number,
  totalFuel: number
) => Number(((totalFuel * 100) / netIncome)?.toFixed(2)) || 0;

export const calculateSalary = (report: ReportWithRelations, driver: User) => {
  if (driver.isMonthlySalary) {
    let fixedSalary = report.salary || driver.fixedSalary || 0;
    const taxPercentage = driver?.skatTax || 0;

    const vacationPercentage = 0;
    const vacationAmount =
      report.vacationAmount ||
      driver?.fixedSalaryVacationAmount ||
      (fixedSalary / 100) * vacationPercentage ||
      0;
    const netIncome = calculateNetIncome(report, driver);

    const bruttoSalary = Number(
      (
        (fixedSalary || 0) +
        vacationAmount +
        (report.additionalAmount || 0) -
        (report.deductableAmount || 0)
      ).toFixed(2) || 0
    );
    const skatTaxAmount = driver?.calculateTaxManualy
      ? report.skatTax || 0
      : (bruttoSalary / 100) * taxPercentage;
    const netSalary = Number(
      (
        bruttoSalary -
        skatTaxAmount -
        (report.advanceSalaryInAccount || 0) +
        (report.advanceSalaryInCash || 0)
      ).toFixed(2)
    );
    return {
      totalSalary: fixedSalary,
      netSalary,
      skatTaxAmount,
      vacationAmount,
      netIncome: netIncome.netIncome,
      netIncomeCar: netIncome.netIncomeCar,
      bruttoSalary,
    };
  }
  const netIncome = calculateNetIncome(report, driver);
  const taxPercentage = driver?.skatTax || 0;
  const vacationPercentage = driver?.vacationPercentage || 0;
  const commissionPercentage = driver?.commissionPercentage || 0;
  const commissionAmount = !driver?.commissionPercentage
    ? report.salary || 0
    : Number(((netIncome.netIncome / 100) * commissionPercentage).toFixed(2));
  const vacationAmount = !driver?.vacationPercentage
    ? report.vacationAmount || 0
    : (commissionAmount / 100) * vacationPercentage;
  const bruttoSalary = Number(
    (
      commissionAmount +
      vacationAmount +
      (report.additionalAmount || 0) -
      (report.deductableAmount || 0)
    ).toFixed(2)
  );
  const skatTaxAmount = driver.calculateTaxManualy
    ? report.skatTax || 0
    : (bruttoSalary / 100) * taxPercentage;
  const netSalary = Number(
    (
      bruttoSalary -
      skatTaxAmount -
      (report.advanceSalaryInAccount || 0) +
      (report.advanceSalaryInCash || 0)
    ).toFixed(2)
  );
  return {
    totalSalary: commissionAmount,
    netSalary,
    skatTaxAmount: Number((skatTaxAmount || 0).toFixed(2)),
    vacationAmount: Number((vacationAmount || 0).toFixed(2)),
    netIncome: Number((netIncome.netIncome || 0).toFixed(2)),
    vat: Number((netIncome.vat || 0).toFixed(2)),
    totalIncome: Number((netIncome.totalIncome || 0).toFixed(2)),
    bruttoSalary,
    netIncomeCar: netIncome.netIncomeCar,
  };
};

export const parseJson = (data: any) => {
  try {
    return JSON.parse(data) as any;
  } catch (err) {
    return {};
  }
};

export const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
