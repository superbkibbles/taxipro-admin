import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/services/baseQuery";
import { Car, GetRequestQuery } from "@/types";

export const carInitialFilter: GetRequestQuery<Car> = {
  filter: {
    include: [
      {
        relation: "user",
        scope: { fields: { id: true, name: true, image: true } },
      },
    ],
    order: ["createdAt DESC"],
    limit: 10,
  },
};

export const carFilterQuery = (skip?: number) => {
  return {
    ...carInitialFilter,
    filter: { ...carInitialFilter.filter, skip },
  };
};

// Define a service using a base URL and expected endpoints
export const emptySplitApi = createApi({
  reducerPath: "apis",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
