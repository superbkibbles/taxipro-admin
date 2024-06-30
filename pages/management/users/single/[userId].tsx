import { useState } from "react";

import Head from "next/head";

import ExtendedSidebarLayout from "src/layouts/ExtendedSidebarLayout";
import { Authenticated } from "src/components/Authenticated";
import LaunchTwoToneIcon from "@mui/icons-material/LaunchTwoTone";

import Footer from "src/components/Footer";

import {
  Box,
  Tabs,
  Tab,
  Grid,
  styled,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Avatar,
  Link,
  Tooltip,
  IconButton,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import ProfileCover from "src/content/Management/Users/single/ProfileCover";
import RecentActivity from "src/content/Management/Users/single/RecentActivity";
import { useGetUserByIdQuery, useGetUsersQuery } from "@/services/user";
import { useRouter } from "next/router";
import { Role } from "@/types";
import { useGetDriversByIdQuery } from "@/services/drivers";
import { useGetAdminCarsByIdQuery, useGetCarsByIdQuery } from "@/services/cars";
import { useGetAdminCarsQuery } from "@/services/admin";

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function ManagementUsersView() {
  const router = useRouter();
  // const [user, setUser] = useState<User | null>(null);
  const { t }: { t: any } = useTranslation();
  const { data: users, isLoading: isLoadingDrivers } = useGetUsersQuery({
    filter: JSON.stringify({
      where: { role: "User", creatorId: router?.query?.userId as string },
    }),
  });

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [query, setQuery] = useState<string>("");

  const { data: user, isLoading: isLoadingUser } = useGetUserByIdQuery({
    // filter: JSON.stringify({
    //   where: { role: "User" },
    // }),
    id: router?.query?.userId as string,
    filter: undefined,
  });

  const { data: cars, isLoading: isLoadingCars } = useGetAdminCarsQuery({
    filter: JSON.stringify({
      where: { userId: router?.query?.userId as string },
    }),
  });

  const [currentTab, setCurrentTab] = useState<string>(Role.User);

  const tabs = [
    {
      value: Role.User,
      label: t("Drivers"),
    },
    {
      value: "cars",
      label: t("Cars"),
    },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  if (!user) {
    return null;
  }

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  return (
    <>
      <Head>
        <title>{user.name} - Profile Details</title>
      </Head>
      <Box sx={{ mt: 3 }}>
        <Grid
          sx={{ px: 4 }}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity drivers={users?.length} cars={cars?.length} />
          </Grid>
          {/* <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid> */}
          <Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {/* {currentTab === "activity" && <ActivityTab />}
            {currentTab === "edit_profile" && <EditProfileTab />}
            {currentTab === "notifications" && <NotificationsTab />}
            {currentTab === "security" && <SecurityTab />} */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {/* <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedAllUsers}
                          indeterminate={selectedSomeUsers}
                          onChange={handleSelectAllUsers}
                        />
                      </TableCell> */}
                    <TableCell>{t("Username")}</TableCell>
                    <TableCell>{t("Name")}</TableCell>
                    <TableCell>{t("Email")}</TableCell>
                    <TableCell align="center">{t("Posts")}</TableCell>
                    <TableCell>{t("Location")}</TableCell>
                    {/* <TableCell>{t("Role")}</TableCell> */}
                    <TableCell align="center">{t("Actions")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users?.map((user) => {
                    // const isUserSelected = selectedItems.includes(user.id);
                    return (
                      <TableRow
                        hover
                        key={user.id}
                        // selected={isUserSelected}
                      >
                        {/* <TableCell padding="checkbox">
                          <Checkbox
                            checked={isUserSelected}
                            onChange={(event) =>
                              handleSelectOneUser(event, user.id)
                            }
                            value={isUserSelected}
                          />
                        </TableCell> */}
                        <TableCell>
                          <Typography variant="h5">{user.name}</Typography>
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Avatar
                              sx={{
                                mr: 1,
                              }}
                              src={user?.image?.url}
                            />
                            <Box>
                              <Link
                                variant="h5"
                                href="/management/users/single/1"
                              >
                                {user.name}
                              </Link>
                              <Typography noWrap variant="subtitle2">
                                {/* {user.jobtitle} */}
                                title
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography>{user.email}</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography fontWeight="bold">
                            {/* {user.posts} */}
                            posts
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{user.address1}</Typography>
                        </TableCell>
                        {/* <TableCell>{getUserRoleLabel(user.role)}</TableCell> */}
                        <TableCell align="center">
                          <Typography noWrap>
                            <Tooltip title={t("View")} arrow>
                              <IconButton
                                href={"/management/users/single/" + user.id}
                                color="primary"
                              >
                                <LaunchTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            {/* <Tooltip title={t("Delete")} arrow>
                              <IconButton
                                onClick={handleConfirmDelete}
                                color="primary"
                              >
                                <DeleteTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip> */}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Box p={2}>
              <TablePagination
                component="div"
                count={users?.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 15]}
              />
            </Box> */}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

ManagementUsersView.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementUsersView;
