import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = [
  "AdminActivityController",
  "AdminCarUsageController",
  "AdminCarController",
  "AdminCompanyController",
  "AdminJobController",
  "AdminReportController",
  "AdminSellCarController",
  "AdminSmsController",
  "AdminTagController",
  "AdminUserController",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
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
      getAdminCarUsagesCount: build.query<
        GetAdminCarUsagesCountApiResponse,
        GetAdminCarUsagesCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/carUsages/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminCarUsageController"],
      }),
      putAdminCarUsagesById: build.mutation<
        PutAdminCarUsagesByIdApiResponse,
        PutAdminCarUsagesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/carUsages/${queryArg.id}`,
          method: "PUT",
          body: queryArg.carUsage,
        }),
        invalidatesTags: ["AdminCarUsageController"],
      }),
      patchAdminCarUsagesById: build.mutation<
        PatchAdminCarUsagesByIdApiResponse,
        PatchAdminCarUsagesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/carUsages/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.carUsagePartial,
        }),
        invalidatesTags: ["AdminCarUsageController"],
      }),
      getAdminCarUsagesById: build.query<
        GetAdminCarUsagesByIdApiResponse,
        GetAdminCarUsagesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/carUsages/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminCarUsageController"],
      }),
      deleteAdminCarUsagesById: build.mutation<
        DeleteAdminCarUsagesByIdApiResponse,
        DeleteAdminCarUsagesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/carUsages/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminCarUsageController"],
      }),
      postAdminCarUsages: build.mutation<
        PostAdminCarUsagesApiResponse,
        PostAdminCarUsagesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/carUsages`,
          method: "POST",
          body: queryArg.newCarUsage,
        }),
        invalidatesTags: ["AdminCarUsageController"],
      }),
      patchAdminCarUsages: build.mutation<
        PatchAdminCarUsagesApiResponse,
        PatchAdminCarUsagesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/carUsages`,
          method: "PATCH",
          body: queryArg.carUsagePartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminCarUsageController"],
      }),
      getAdminCarUsages: build.query<
        GetAdminCarUsagesApiResponse,
        GetAdminCarUsagesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/carUsages`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminCarUsageController"],
      }),
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
      getAdminCompaniesCount: build.query<
        GetAdminCompaniesCountApiResponse,
        GetAdminCompaniesCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminCompanyController"],
      }),
      putAdminCompaniesById: build.mutation<
        PutAdminCompaniesByIdApiResponse,
        PutAdminCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies/${queryArg.id}`,
          method: "PUT",
          body: queryArg.company,
        }),
        invalidatesTags: ["AdminCompanyController"],
      }),
      patchAdminCompaniesById: build.mutation<
        PatchAdminCompaniesByIdApiResponse,
        PatchAdminCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.companyPartial,
        }),
        invalidatesTags: ["AdminCompanyController"],
      }),
      getAdminCompaniesById: build.query<
        GetAdminCompaniesByIdApiResponse,
        GetAdminCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminCompanyController"],
      }),
      deleteAdminCompaniesById: build.mutation<
        DeleteAdminCompaniesByIdApiResponse,
        DeleteAdminCompaniesByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminCompanyController"],
      }),
      postAdminCompanies: build.mutation<
        PostAdminCompaniesApiResponse,
        PostAdminCompaniesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies`,
          method: "POST",
          body: queryArg.newCompany,
        }),
        invalidatesTags: ["AdminCompanyController"],
      }),
      patchAdminCompanies: build.mutation<
        PatchAdminCompaniesApiResponse,
        PatchAdminCompaniesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies`,
          method: "PATCH",
          body: queryArg.companyPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminCompanyController"],
      }),
      getAdminCompanies: build.query<
        GetAdminCompaniesApiResponse,
        GetAdminCompaniesApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/companies`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminCompanyController"],
      }),
      getAdminJobsCount: build.query<
        GetAdminJobsCountApiResponse,
        GetAdminJobsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminJobController"],
      }),
      putAdminJobsById: build.mutation<
        PutAdminJobsByIdApiResponse,
        PutAdminJobsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs/${queryArg.id}`,
          method: "PUT",
          body: queryArg.job,
        }),
        invalidatesTags: ["AdminJobController"],
      }),
      patchAdminJobsById: build.mutation<
        PatchAdminJobsByIdApiResponse,
        PatchAdminJobsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.jobPartial,
        }),
        invalidatesTags: ["AdminJobController"],
      }),
      getAdminJobsById: build.query<
        GetAdminJobsByIdApiResponse,
        GetAdminJobsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminJobController"],
      }),
      deleteAdminJobsById: build.mutation<
        DeleteAdminJobsByIdApiResponse,
        DeleteAdminJobsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminJobController"],
      }),
      postAdminJobs: build.mutation<
        PostAdminJobsApiResponse,
        PostAdminJobsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs`,
          method: "POST",
          body: queryArg.newJob,
        }),
        invalidatesTags: ["AdminJobController"],
      }),
      patchAdminJobs: build.mutation<
        PatchAdminJobsApiResponse,
        PatchAdminJobsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/jobs`,
          method: "PATCH",
          body: queryArg.jobPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminJobController"],
      }),
      getAdminJobs: build.query<GetAdminJobsApiResponse, GetAdminJobsApiArg>({
        query: (queryArg) => ({
          url: `/admin/jobs`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminJobController"],
      }),
      getAdminReportsCount: build.query<
        GetAdminReportsCountApiResponse,
        GetAdminReportsCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminReportController"],
      }),
      putAdminReportsById: build.mutation<
        PutAdminReportsByIdApiResponse,
        PutAdminReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports/${queryArg.id}`,
          method: "PUT",
          body: queryArg.report,
        }),
        invalidatesTags: ["AdminReportController"],
      }),
      patchAdminReportsById: build.mutation<
        PatchAdminReportsByIdApiResponse,
        PatchAdminReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.reportPartial,
        }),
        invalidatesTags: ["AdminReportController"],
      }),
      getAdminReportsById: build.query<
        GetAdminReportsByIdApiResponse,
        GetAdminReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminReportController"],
      }),
      deleteAdminReportsById: build.mutation<
        DeleteAdminReportsByIdApiResponse,
        DeleteAdminReportsByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminReportController"],
      }),
      postAdminReports: build.mutation<
        PostAdminReportsApiResponse,
        PostAdminReportsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports`,
          method: "POST",
          body: queryArg.newReport,
        }),
        invalidatesTags: ["AdminReportController"],
      }),
      patchAdminReports: build.mutation<
        PatchAdminReportsApiResponse,
        PatchAdminReportsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports`,
          method: "PATCH",
          body: queryArg.reportPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminReportController"],
      }),
      getAdminReports: build.query<
        GetAdminReportsApiResponse,
        GetAdminReportsApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/reports`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminReportController"],
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
      getAdminUsersCount: build.query<
        GetAdminUsersCountApiResponse,
        GetAdminUsersCountApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/users/count`,
          params: { where: queryArg.where },
        }),
        providesTags: ["AdminUserController"],
      }),
      putAdminUsersById: build.mutation<
        PutAdminUsersByIdApiResponse,
        PutAdminUsersByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/users/${queryArg.id}`,
          method: "PUT",
          body: queryArg.user,
        }),
        invalidatesTags: ["AdminUserController"],
      }),
      patchAdminUsersById: build.mutation<
        PatchAdminUsersByIdApiResponse,
        PatchAdminUsersByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/users/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.userPartial,
        }),
        invalidatesTags: ["AdminUserController"],
      }),
      getAdminUsersById: build.query<
        GetAdminUsersByIdApiResponse,
        GetAdminUsersByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/users/${queryArg.id}`,
          params: { filter: queryArg.filter },
        }),
        providesTags: ["AdminUserController"],
      }),
      deleteAdminUsersById: build.mutation<
        DeleteAdminUsersByIdApiResponse,
        DeleteAdminUsersByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/users/${queryArg.id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["AdminUserController"],
      }),
      postAdminUsers: build.mutation<
        PostAdminUsersApiResponse,
        PostAdminUsersApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/users`,
          method: "POST",
          body: queryArg.newUser,
        }),
        invalidatesTags: ["AdminUserController"],
      }),
      patchAdminUsers: build.mutation<
        PatchAdminUsersApiResponse,
        PatchAdminUsersApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/users`,
          method: "PATCH",
          body: queryArg.userPartial,
          params: { where: queryArg.where },
        }),
        invalidatesTags: ["AdminUserController"],
      }),
      getAdminUsers: build.query<GetAdminUsersApiResponse, GetAdminUsersApiArg>(
        {
          query: (queryArg) => ({
            url: `/admin/users`,
            params: { filter: queryArg.filter },
          }),
          providesTags: ["AdminUserController"],
        }
      ),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apis };
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
export type GetAdminCarUsagesCountApiResponse =
  /** status 200 CarUsage model count */ LoopbackCount;
export type GetAdminCarUsagesCountApiArg = {
  where?: any;
};
export type PutAdminCarUsagesByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminCarUsagesByIdApiArg = {
  id: string;
  carUsage: CarUsage;
};
export type PatchAdminCarUsagesByIdApiResponse =
  /** status 204 No Content */ any;
export type PatchAdminCarUsagesByIdApiArg = {
  id: string;
  carUsagePartial: CarUsagePartial;
};
export type GetAdminCarUsagesByIdApiResponse =
  /** status 200 CarUsage model instance */ CarUsageWithRelations;
export type GetAdminCarUsagesByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminCarUsagesByIdApiResponse =
  /** status 204 No Content */ any;
export type DeleteAdminCarUsagesByIdApiArg = {
  id: string;
};
export type PostAdminCarUsagesApiResponse =
  /** status 200 CarUsage model instance */ CarUsage;
export type PostAdminCarUsagesApiArg = {
  newCarUsage: NewCarUsage;
};
export type PatchAdminCarUsagesApiResponse =
  /** status 200 CarUsage PATCH success count */ LoopbackCount;
export type PatchAdminCarUsagesApiArg = {
  where?: any;
  carUsagePartial: CarUsagePartial;
};
export type GetAdminCarUsagesApiResponse =
  /** status 200 Array of CarUsage model instances */ CarUsageWithRelations[];
export type GetAdminCarUsagesApiArg = {
  filter?: any;
};
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
export type GetAdminCompaniesCountApiResponse =
  /** status 200 Car model count */ LoopbackCount;
export type GetAdminCompaniesCountApiArg = {
  where?: any;
};
export type PutAdminCompaniesByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminCompaniesByIdApiArg = {
  id: string;
  company: Company;
};
export type PatchAdminCompaniesByIdApiResponse =
  /** status 204 No Content */ any;
export type PatchAdminCompaniesByIdApiArg = {
  id: string;
  companyPartial: CompanyPartial;
};
export type GetAdminCompaniesByIdApiResponse =
  /** status 200 Company model instance */ CompanyWithRelations;
export type GetAdminCompaniesByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminCompaniesByIdApiResponse =
  /** status 204 No Content */ any;
export type DeleteAdminCompaniesByIdApiArg = {
  id: string;
};
export type PostAdminCompaniesApiResponse =
  /** status 200 Company model instance */ Company;
export type PostAdminCompaniesApiArg = {
  newCompany: NewCompany;
};
export type PatchAdminCompaniesApiResponse =
  /** status 200 Company PATCH success count */ LoopbackCount;
export type PatchAdminCompaniesApiArg = {
  where?: any;
  companyPartial: CompanyPartial;
};
export type GetAdminCompaniesApiResponse =
  /** status 200 Array of Company model instances */ CompanyWithRelations[];
export type GetAdminCompaniesApiArg = {
  filter?: any;
};
export type GetAdminJobsCountApiResponse =
  /** status 200 Job model count */ LoopbackCount;
export type GetAdminJobsCountApiArg = {
  where?: any;
};
export type PutAdminJobsByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminJobsByIdApiArg = {
  id: string;
  job: Job;
};
export type PatchAdminJobsByIdApiResponse = /** status 204 No Content */ any;
export type PatchAdminJobsByIdApiArg = {
  id: string;
  jobPartial: JobPartial;
};
export type GetAdminJobsByIdApiResponse =
  /** status 200 Job model instance */ JobWithRelations;
export type GetAdminJobsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminJobsByIdApiResponse = /** status 204 No Content */ any;
export type DeleteAdminJobsByIdApiArg = {
  id: string;
};
export type PostAdminJobsApiResponse = /** status 200 Job model instance */ Job;
export type PostAdminJobsApiArg = {
  newJob: NewJob;
};
export type PatchAdminJobsApiResponse =
  /** status 200 Job PATCH success count */ LoopbackCount;
export type PatchAdminJobsApiArg = {
  where?: any;
  jobPartial: JobPartial;
};
export type GetAdminJobsApiResponse =
  /** status 200 Array of Job model instances */ JobWithRelations[];
export type GetAdminJobsApiArg = {
  filter?: any;
};
export type GetAdminReportsCountApiResponse =
  /** status 200 Report model count */ LoopbackCount;
export type GetAdminReportsCountApiArg = {
  where?: any;
};
export type PutAdminReportsByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminReportsByIdApiArg = {
  id: string;
  report: Report;
};
export type PatchAdminReportsByIdApiResponse = /** status 204 No Content */ any;
export type PatchAdminReportsByIdApiArg = {
  id: string;
  reportPartial: ReportPartial;
};
export type GetAdminReportsByIdApiResponse =
  /** status 200 Report model instance */ ReportWithRelations;
export type GetAdminReportsByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminReportsByIdApiResponse =
  /** status 204 No Content */ any;
export type DeleteAdminReportsByIdApiArg = {
  id: string;
};
export type PostAdminReportsApiResponse =
  /** status 200 Report model instance */ Report;
export type PostAdminReportsApiArg = {
  newReport: NewReport;
};
export type PatchAdminReportsApiResponse =
  /** status 200 Report PATCH success count */ LoopbackCount;
export type PatchAdminReportsApiArg = {
  where?: any;
  reportPartial: ReportPartial;
};
export type GetAdminReportsApiResponse =
  /** status 200 Array of Report model instances */ ReportWithRelations[];
export type GetAdminReportsApiArg = {
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
export type GetAdminUsersCountApiResponse =
  /** status 200 User model count */ LoopbackCount;
export type GetAdminUsersCountApiArg = {
  where?: any;
};
export type PutAdminUsersByIdApiResponse = /** status 204 No Content */ any;
export type PutAdminUsersByIdApiArg = {
  id: string;
  user: User;
};
export type PatchAdminUsersByIdApiResponse = /** status 204 No Content */ any;
export type PatchAdminUsersByIdApiArg = {
  id: string;
  userPartial: UserPartial;
};
export type GetAdminUsersByIdApiResponse =
  /** status 200 User model instance */ UserWithRelations;
export type GetAdminUsersByIdApiArg = {
  id: string;
  filter?: any;
};
export type DeleteAdminUsersByIdApiResponse = /** status 204 No Content */ any;
export type DeleteAdminUsersByIdApiArg = {
  id: string;
};
export type PostAdminUsersApiResponse =
  /** status 200 User model instance */ User;
export type PostAdminUsersApiArg = {
  newUser: NewUser;
};
export type PatchAdminUsersApiResponse =
  /** status 200 User PATCH success count */ LoopbackCount;
export type PatchAdminUsersApiArg = {
  where?: any;
  userPartial: UserPartial;
};
export type GetAdminUsersApiResponse =
  /** status 200 Array of User model instances */ UserWithRelations[];
export type GetAdminUsersApiArg = {
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
export type CarUsage = {
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
};
export type CarUsagePartial = {
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
};
export type NewCarUsage = {
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
};
export type Company = {
  id?: string;
  orgNo: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  [key: string]: any;
};
export type CompanyPartial = {
  id?: string;
  orgNo?: string;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  [key: string]: any;
};
export type NewCompany = {
  orgNo: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  userId?: string;
  [key: string]: any;
};
export type Job = {
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
};
export type JobPartial = {
  id?: string;
  title?: string;
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
};
export type NewJob = {
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
};
export type Report = {
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
};
export type ReportPartial = {
  id?: string;
  from?: string | null;
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
};
export type NewReport = {
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
export type User = {
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
};
export type UserPartial = {
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
};
export type NewUser = {
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
};
export const {
  useGetAdminActivitiesCountQuery,
  usePutAdminActivitiesByIdMutation,
  usePatchAdminActivitiesByIdMutation,
  useGetAdminActivitiesByIdQuery,
  useDeleteAdminActivitiesByIdMutation,
  usePostAdminActivitiesMutation,
  usePatchAdminActivitiesMutation,
  useGetAdminActivitiesQuery,
  useGetAdminCarUsagesCountQuery,
  usePutAdminCarUsagesByIdMutation,
  usePatchAdminCarUsagesByIdMutation,
  useGetAdminCarUsagesByIdQuery,
  useDeleteAdminCarUsagesByIdMutation,
  usePostAdminCarUsagesMutation,
  usePatchAdminCarUsagesMutation,
  useGetAdminCarUsagesQuery,
  useGetAdminCarsCountQuery,
  usePutAdminCarsByIdMutation,
  usePatchAdminCarsByIdMutation,
  useGetAdminCarsByIdQuery,
  useDeleteAdminCarsByIdMutation,
  usePostAdminCarsMutation,
  usePatchAdminCarsMutation,
  useGetAdminCarsQuery,
  useGetAdminCompaniesCountQuery,
  usePutAdminCompaniesByIdMutation,
  usePatchAdminCompaniesByIdMutation,
  useGetAdminCompaniesByIdQuery,
  useDeleteAdminCompaniesByIdMutation,
  usePostAdminCompaniesMutation,
  usePatchAdminCompaniesMutation,
  useGetAdminCompaniesQuery,
  useGetAdminJobsCountQuery,
  usePutAdminJobsByIdMutation,
  usePatchAdminJobsByIdMutation,
  useGetAdminJobsByIdQuery,
  useDeleteAdminJobsByIdMutation,
  usePostAdminJobsMutation,
  usePatchAdminJobsMutation,
  useGetAdminJobsQuery,
  useGetAdminReportsCountQuery,
  usePutAdminReportsByIdMutation,
  usePatchAdminReportsByIdMutation,
  useGetAdminReportsByIdQuery,
  useDeleteAdminReportsByIdMutation,
  usePostAdminReportsMutation,
  usePatchAdminReportsMutation,
  useGetAdminReportsQuery,
  useGetAdminSellCarsCountQuery,
  usePutAdminSellCarsByIdMutation,
  usePatchAdminSellCarsByIdMutation,
  useGetAdminSellCarsByIdQuery,
  useDeleteAdminSellCarsByIdMutation,
  usePostAdminSellCarsMutation,
  usePatchAdminSellCarsMutation,
  useGetAdminSellCarsQuery,
  useGetAdminSmsCountQuery,
  usePutAdminSmsByIdMutation,
  usePatchAdminSmsByIdMutation,
  useGetAdminSmsByIdQuery,
  useDeleteAdminSmsByIdMutation,
  usePostAdminSmsMutation,
  usePatchAdminSmsMutation,
  useGetAdminSmsQuery,
  useGetAdminTagsCountQuery,
  usePutAdminTagsByIdMutation,
  usePatchAdminTagsByIdMutation,
  useGetAdminTagsByIdQuery,
  useDeleteAdminTagsByIdMutation,
  usePostAdminTagsMutation,
  usePatchAdminTagsMutation,
  useGetAdminTagsQuery,
  useGetAdminUsersCountQuery,
  usePutAdminUsersByIdMutation,
  usePatchAdminUsersByIdMutation,
  useGetAdminUsersByIdQuery,
  useDeleteAdminUsersByIdMutation,
  usePostAdminUsersMutation,
  usePatchAdminUsersMutation,
  useGetAdminUsersQuery,
} = injectedRtkApi;
