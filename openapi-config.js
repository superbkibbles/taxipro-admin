const config = {
  schemaFile: "http://localhost:4001/openapi.json",
  apiFile: "./src/services/emptyApi.ts",
  apiImport: "emptySplitApi",
  // outputFile: "./src/services/index.ts",
  outputFiles: {
    "./src/services/cars.ts": {
      filterEndpoints: [/cars/i],
      tag: true,
    },
    "./src/services/sellCars.ts": {
      filterEndpoints: [/sellCars/i],
      tag: true,
    },
    "./src/services/companies.ts": {
      filterEndpoints: [/companies/i],
      tag: true,
    },
    "./src/services/activities.ts": {
      filterEndpoints: [/activities/i],
      tag: true,
    },
    "./src/services/drivers.ts": {
      filterEndpoints: [/drivers/i],
      tag: true,
    },
    "./src/services/reports.ts": {
      filterEndpoints: [/reports/i],
      tag: true,
    },
    "./src/services/sms.ts": {
      filterEndpoints: [/sms/i],
      tag: true,
    },
    "./src/services/jobs.ts": {
      filterEndpoints: [/jobs/i],
      tag: true,
    },
    "./src/services/contracts.ts": {
      filterEndpoints: [/contracts/i],
      tag: true,
    },
    "./src/services/employeeCertificates.ts": {
      filterEndpoints: [/employeeCertificates/i],
      tag: true,
    },
    "./src/services/employeeIncomeRecords.ts": {
      filterEndpoints: [/employeeIncomeRecords/i],
      tag: true,
    },
    "./src/services/tags.ts": {
      filterEndpoints: [/tags/i],
      tag: true,
    },
    "./src/services/admin.ts": {
      filterEndpoints: [/admin/i],
      tag: true,
    },
  },

  exportName: "apis",
  hooks: true,
};

module.exports = config;
