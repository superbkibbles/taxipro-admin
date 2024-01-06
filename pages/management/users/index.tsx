import React from "react";
import Head from "next/head";
import { Grid } from "@mui/material";

import ExtendedSidebarLayout from "src/layouts/ExtendedSidebarLayout";
import { Authenticated } from "src/components/Authenticated";
import PageHeader from "src/content/Management/Users/PageHeader";
import Footer from "src/components/Footer";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import {
  useGetAdminCompaniesQuery,
  useGetCompaniesQuery,
} from "@/services/companies";
import { useGetUserQuery, useGetUsersQuery } from "@/services/user";
import { useGetDriversQuery } from "@/services/drivers";
import Results from "@/content/Management/Users/Results";

function ManagementUsers() {
  const { data: users, isLoading: isLoadingDrivers } = useGetUsersQuery({
    // filter: JSON.stringify({
    //   where: { role: "User" },
    // }),
    filter: undefined,
  });

  return (
    <>
      <Head>
        <title>Users - Management</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <Results users={users} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

ManagementUsers.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementUsers;
