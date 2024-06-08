import {
  FC,
  ChangeEvent,
  MouseEvent,
  SyntheticEvent,
  useState,
  ReactElement,
  Ref,
  forwardRef,
} from "react";

import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Grid,
  Slide,
  Divider,
  Tooltip,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  Tab,
  Tabs,
  TextField,
  Button,
  Typography,
  Dialog,
  Zoom,
  styled,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import Link from "src/components/Link";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import LaunchTwoToneIcon from "@mui/icons-material/LaunchTwoTone";
import Label from "src/components/Label";
import BulkActions from "./BulkActions";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import TableRowsTwoToneIcon from "@mui/icons-material/TableRowsTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { useSnackbar } from "notistack";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import { Role, User } from "@/types";
import dayjs from "dayjs";
import { Block } from "@mui/icons-material";
import { Package } from "./PageHeader";
import { DatePicker } from "@mui/lab";
import { Formik } from "formik";
import { useUpdateUserMutation } from "@/services/user";
import { usePutAdminCompaniesByIdMutation } from "@/services/companies";
import { usePatchAdminUsersByIdMutation } from "@/services/admin";

const DialogWrapper = styled(Dialog)(
  () => `
      .MuiDialog-paper {
        overflow: visible;
      }
`
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(12)};
      height: ${theme.spacing(12)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(45)};
      }
`
);

const CardWrapper = styled(Card)(
  ({ theme }) => `

  position: relative;
  overflow: visible;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    z-index: 1;
    transition: ${theme.transitions.create(["box-shadow"])};
  }
      
    &.Mui-selected::after {
      box-shadow: 0 0 0 3px ${theme.colors.primary.main};
    }
  `
);

const ButtonError = styled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);

const ButtonSuccess = styled(Button)(
  ({ theme }) => `
     background: ${theme.colors.success.main};
     color: ${theme.palette.success.contrastText};

     &:hover {
        background: ${theme.colors.success.dark};
     }
    `
);

const TabsWrapper = styled(Tabs)(
  ({ theme }) => `
    @media (max-width: ${theme.breakpoints.values.md}px) {
      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          box-shadow: none;
      }
    }
    `
);

interface ResultsProps {
  users: User[];
  onSearchChange: (value: string) => void;
  search: string;
  handleTabChange: (value: string) => void;
  isLoadingUsers: boolean;
}

interface Filters {
  role?: string;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const getUserRoleLabel = (userRole: string): JSX.Element => {
  const map = {
    admin: {
      text: "Administrator",
      color: "error",
    },
    customer: {
      text: "Customer",
      color: "info",
    },
    subscriber: {
      text: "Subscriber",
      color: "warning",
    },
  };

  const { text, color }: any = map[userRole];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  users: User[],
  query: string,
  filters: Filters
): User[] => {
  return users.filter((user) => {
    let matches = true;

    if (query) {
      const properties = ["email", "name", "username"];
      let containsQuery = false;

      properties.forEach((property) => {
        if (user[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.role && user.role !== filters.role) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && user[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (
  users: User[],
  page: number,
  limit: number
): User[] => {
  return users.slice(page * limit, page * limit + limit);
};

const Results: FC<ResultsProps> = ({
  users,
  onSearchChange,
  isLoadingUsers,
  search,
  handleTabChange,
}) => {
  const [selectedItems, setSelectedUsers] = useState<string[]>([]);
  const [selectedUpdatePackage, setSelectedUpdatePackage] = useState(null);
  const { t }: { t: any } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  // const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [updateUserById, { isLoading }] = usePatchAdminUsersByIdMutation();

  const handleUpdateUserError = (e: string) => {
    enqueueSnackbar(t(e), {
      variant: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      TransitionComponent: Zoom,
    });
  };

  const tabs = [
    {
      value: "all",
      label: t("All users"),
    },
    {
      value: Role.Company,
      label: t("Companies"),
    },
    {
      value: Role.User,
      label: t("Drivers"),
    },
    // {
    //   value: "subscriber",
    //   label: t("Subscribers"),
    // },
    // {
    //   value: "all",
    //   label: t("All users"),
    // },
    // {
    //   value: "customer",
    //   label: t("Customers"),
    // },
    // {
    //   value: "admin",
    //   label: t("Administrators"),
    // },
    // {
    //   value: "subscriber",
    //   label: t("Subscribers"),
    // },
  ];

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [query, setQuery] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    role: null,
  });
  const handleTabsChange = (_event: SyntheticEvent, tabsValue: string) => {
    let value = null;

    if (tabsValue !== "all") {
      handleTabChange("all");
      value = tabsValue;
    }

    handleTabChange(tabsValue);

    setFilters((prevFilters) => ({
      ...prevFilters,
      role: value,
    }));

    setSelectedUsers([]);
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    onSearchChange(event.target.value);
  };

  const handleSelectAllUsers = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedUsers(event.target.checked ? users.map((user) => user.id) : []);
  };

  const handleSelectOneUser = (
    _event: ChangeEvent<HTMLInputElement>,
    userId: string
  ): void => {
    if (!selectedItems.includes(userId)) {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) =>
        prevSelected.filter((id) => id !== userId)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredUsers = applyFilters(users, query, filters);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeUsers =
    selectedItems.length > 0 && selectedItems.length < users.length;
  const selectedAllUsers = selectedItems.length === users.length;

  const [toggleView, setToggleView] = useState<string | null>("table_view");

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setToggleView(newValue);
  };

  const [openConfirmDelete, setOpenConfirmDelete] = useState<User | null>(null);

  const handleConfirmDelete = (user: User) => {
    setOpenConfirmDelete(user);
  };

  const closeConfirmDelete = () => {
    setOpenConfirmDelete(null);
  };

  const handleDeleteCompleted = async () => {
    const res = await updateUserById({
      id: openConfirmDelete?.id,
      userPartial: {
        // ...openConfirmDelete,

        isActive: openConfirmDelete?.blocked ? true : false,
        // deleted: openConfirmDelete?.blocked? false: true,
        blocked: openConfirmDelete?.blocked ? false : true,
      },
    });
    if (res?.error) {
      enqueueSnackbar(t("Error happened when blocking the user"), {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        TransitionComponent: Zoom,
      });
      setOpenConfirmDelete(null);
    } else {
      enqueueSnackbar(t("The user account has been blocked"), {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        TransitionComponent: Zoom,
      });
      setOpenConfirmDelete(null);
    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "center", sm: "space-between" }}
        pb={3}
      >
        <TabsWrapper
          onChange={handleTabsChange}
          scrollButtons="auto"
          textColor="secondary"
          value={filters.role || "all"}
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </TabsWrapper>
        {/* <ToggleButtonGroup
          sx={{
            mt: { xs: 2, sm: 0 },
          }}
          value={toggleView}
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton disableRipple value="table_view">
            <TableRowsTwoToneIcon />
          </ToggleButton>
          <ToggleButton disableRipple value="grid_view">
            <GridViewTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup> */}
      </Box>
      {toggleView === "table_view" && (
        <Card>
          <Box p={2}>
            {!selectedBulkActions && (
              <TextField
                sx={{
                  m: 0,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={handleQueryChange}
                placeholder={t("Search by name, email or username...")}
                value={search}
                size="small"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            )}
            {selectedBulkActions && <BulkActions />}
          </Box>

          <Divider />

          {paginatedUsers.length === 0 ? (
            <Box
              width={"100%"}
              height={400}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CircularProgress size="3rem" />
            </Box>
          ) : paginatedUsers.length === 0 ? (
            <>
              <Typography
                sx={{
                  py: 10,
                }}
                variant="h3"
                fontWeight="normal"
                color="text.secondary"
                align="center"
              >
                {t("We couldn't find any users matching your search criteria")}
              </Typography>
            </>
          ) : (
            <>
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
                      <TableCell align="center">{t("Package")}</TableCell>
                      <TableCell align="center">
                        {t("Package expires")}
                      </TableCell>
                      <TableCell>{t("Location")}</TableCell>
                      <TableCell>{t("Status")}</TableCell>
                      {/* <TableCell>{t("Role")}</TableCell> */}
                      <TableCell align="center">{t("Actions")}</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {paginatedUsers.map((user) => {
                      const isUserSelected = selectedItems.includes(user.id);
                      return (
                        <>
                          {/* {user.blocked && (
                            <Box
                              position={"absolute"}
                              width={"100%"}
                              height={"100%"}
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}
                              zIndex={100}
                            >
                              <ButtonSuccess>unblock user</ButtonSuccess>
                            </Box>
                          )} */}
                          <TableRow
                            // style={{
                            //   // position: "relative",
                            //   background: user.blocked
                            //     ? "rgba(255, 0, 0, 0.4)"
                            //     : "transparent",
                            //   filter: user.blocked ? "blur(1px)" : "",
                            // }}
                            hover
                            key={user.id}
                            selected={isUserSelected}
                          >
                            {/* {user.blocked && (
                            <Box
                              position={"absolute"}
                              width={"100%"}
                              height={"100%"}
                              display={"flex"}
                              alignItems={"center"}
                              justifyContent={"center"}
                              zIndex={100}
                            >
                              <ButtonSuccess>unblock user</ButtonSuccess>
                            </Box>
                          )} */}
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
                                {user?.subscription?.plan ?? "No package"}
                                {/* {user?.package?.label ?? "No package selected"} */}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography fontWeight="bold">
                                {user?.subscription?.expiredAt
                                  ? dayjs(user?.subscription?.expiredAt).format(
                                      "DD/MM/YYYY"
                                    )
                                  : "N/A"}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{user.address1}</Typography>
                            </TableCell>
                            <TableCell>
                              {user?.blocked
                                ? "Blocked"
                                : user?.deleted
                                ? "Deleted"
                                : !user?.isActive
                                ? "Inactive"
                                : "Active"}
                            </TableCell>
                            {/* <TableCell>{getUserRoleLabel(user.role)}</TableCell> */}
                            <TableCell align="center">
                              <Typography noWrap>
                                <Button
                                  onClick={() => setSelectedUpdatePackage(user)}
                                >
                                  Update package
                                </Button>
                                <Tooltip title={t("View")} arrow>
                                  <IconButton
                                    href={"/management/users/single/" + user.id}
                                    color="primary"
                                  >
                                    <LaunchTwoToneIcon fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title={t("Block")} arrow>
                                  <IconButton
                                    onClick={() => handleConfirmDelete(user)}
                                    color="primary"
                                  >
                                    {user.blocked ? (
                                      <LockOpenIcon fontSize="small" />
                                    ) : (
                                      <Block fontSize="small" color="error" />
                                    )}
                                  </IconButton>
                                </Tooltip>
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box p={2}>
                <TablePagination
                  component="div"
                  count={filteredUsers.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  rowsPerPageOptions={[5, 10, 15]}
                />
              </Box>
            </>
          )}
        </Card>
      )}

      {toggleView === "grid_view" && (
        <></>
        // <>
        //   <Card
        //     sx={{
        //       p: 2,
        //       mb: 3,
        //     }}
        //   >
        //     <Box
        //       display="flex"
        //       alignItems="center"
        //       justifyContent="space-between"
        //     >
        //       {paginatedUsers.length !== 0 && (
        //         <>
        //           <Box display="flex" alignItems="center">
        //             <Tooltip
        //               arrow
        //               placement="top"
        //               title={t("Select all users")}
        //             >
        //               <Checkbox
        //                 checked={selectedAllUsers}
        //                 indeterminate={selectedSomeUsers}
        //                 onChange={handleSelectAllUsers}
        //               />
        //             </Tooltip>
        //           </Box>
        //           {selectedBulkActions && (
        //             <Box flex={1} pl={2}>
        //               <BulkActions />
        //             </Box>
        //           )}
        //         </>
        //       )}
        //       {!selectedBulkActions && (
        //         <TextField
        //           sx={{
        //             my: 0,
        //             ml: paginatedUsers.length !== 0 ? 2 : 0,
        //           }}
        //           fullWidth
        //           InputProps={{
        //             startAdornment: (
        //               <InputAdornment position="start">
        //                 <SearchTwoToneIcon />
        //               </InputAdornment>
        //             ),
        //           }}
        //           onChange={handleQueryChange}
        //           placeholder={t("Search by name, email or username...")}
        //           value={query}
        //           size="small"
        //           margin="normal"
        //           variant="outlined"
        //         />
        //       )}
        //     </Box>
        //   </Card>
        //   {paginatedUsers.length === 0 ? (
        //     <Typography
        //       sx={{
        //         py: 10,
        //       }}
        //       variant="h3"
        //       fontWeight="normal"
        //       color="text.secondary"
        //       align="center"
        //     >
        //       {t("We couldn't find any users matching your search criteria")}
        //     </Typography>
        //   ) : (
        //     <>
        //       <Grid container spacing={3}>
        //         {paginatedUsers.map((user) => {
        //           const isUserSelected = selectedItems.includes(user.id);

        //           return (
        //             <Grid item xs={12} sm={6} md={4} key={user.id}>
        //               <CardWrapper
        //                 className={clsx({
        //                   "Mui-selected": isUserSelected,
        //                 })}
        //               >
        //                 <Box
        //                   sx={{
        //                     position: "relative",
        //                     zIndex: "2",
        //                   }}
        //                 >
        //                   <Box
        //                     px={2}
        //                     pt={2}
        //                     display="flex"
        //                     alignItems="flex-start"
        //                     justifyContent="space-between"
        //                   >
        //                     {getUserRoleLabel(user.role)}
        //                     <IconButton
        //                       color="primary"
        //                       sx={{
        //                         p: 0.5,
        //                       }}
        //                     >
        //                       <MoreVertTwoToneIcon />
        //                     </IconButton>
        //                   </Box>
        //                   <Box p={2} display="flex" alignItems="flex-start">
        //                     <Avatar
        //                       sx={{
        //                         width: 50,
        //                         height: 50,
        //                         mr: 2,
        //                       }}
        //                       src={user.image.url}
        //                     />
        //                     <Box>
        //                       <Box>
        //                         <Link
        //                           variant="h5"
        //                           href="/management/users/single/1"
        //                         >
        //                           {user.name}
        //                         </Link>{" "}
        //                         <Typography
        //                           component="span"
        //                           variant="body2"
        //                           color="text.secondary"
        //                         >
        //                           ({user.name})
        //                         </Typography>
        //                       </Box>
        //                       <Typography
        //                         sx={{
        //                           pt: 0.3,
        //                         }}
        //                         variant="subtitle2"
        //                       >
        //                         {/* {user.jobtitle} */}
        //                         title
        //                       </Typography>
        //                       <Typography
        //                         sx={{
        //                           pt: 1,
        //                         }}
        //                         variant="h6"
        //                       >
        //                         {user.email}
        //                       </Typography>
        //                     </Box>
        //                   </Box>
        //                   <Divider />
        //                   <Box
        //                     pl={2}
        //                     py={1}
        //                     pr={1}
        //                     display="flex"
        //                     alignItems="center"
        //                     justifyContent="space-between"
        //                   >
        //                     <Typography>{t("postsdsds")}</Typography>
        //                     <Checkbox
        //                       checked={isUserSelected}
        //                       onChange={(event) =>
        //                         handleSelectOneUser(event, user.id)
        //                       }
        //                       value={isUserSelected}
        //                     />
        //                   </Box>
        //                 </Box>
        //               </CardWrapper>
        //             </Grid>
        //           );
        //         })}
        //       </Grid>
        //       <Card
        //         sx={{
        //           p: 2,
        //           mt: 3,
        //           display: "flex",
        //           alignItems: "center",
        //           justifyContent: "space-between",
        //         }}
        //       >
        //         <Box>
        //           <Typography component="span" variant="subtitle1">
        //             {t("Showing")}
        //           </Typography>{" "}
        //           <b>{limit}</b> {t("of")} <b>{filteredUsers.length}</b>{" "}
        //           <b>{t("users")}</b>
        //         </Box>
        //         <TablePagination
        //           component="div"
        //           count={filteredUsers.length}
        //           onPageChange={handlePageChange}
        //           onRowsPerPageChange={handleLimitChange}
        //           page={page}
        //           rowsPerPage={limit}
        //           labelRowsPerPage=""
        //           rowsPerPageOptions={[5, 10, 15]}
        //         />
        //       </Card>
        //     </>
        //   )}
        // </>
      )}

      {!toggleView && (
        <Card
          sx={{
            textAlign: "center",
            p: 3,
          }}
        >
          <Typography
            align="center"
            variant="h4"
            fontWeight="normal"
            color="text.secondary"
            sx={{
              my: 5,
            }}
            gutterBottom
          >
            {t(
              "Choose between table or grid views for displaying the users list."
            )}
          </Typography>
        </Card>
      )}

      <DialogWrapper
        open={Boolean(openConfirmDelete)}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        onClose={closeConfirmDelete}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={5}
        >
          <AvatarError>
            <CloseIcon />
          </AvatarError>

          <Typography
            align="center"
            sx={{
              py: 4,
              px: 6,
            }}
            variant="h3"
          >
            {`Are you sure you want to ${
              openConfirmDelete?.blocked ? "Unblock" : "Block"
            } this user account?`}
          </Typography>

          <Box>
            <Button
              variant="text"
              size="large"
              sx={{
                mx: 1,
              }}
              onClick={closeConfirmDelete}
            >
              {t("Cancel")}
            </Button>

            {openConfirmDelete?.blocked ? (
              <ButtonSuccess
                endIcon={isLoading && <CircularProgress size="1rem" />}
                onClick={handleDeleteCompleted}
                size="large"
                sx={{
                  mx: 1,
                  px: 3,
                }}
                variant="contained"
              >
                Unblock
              </ButtonSuccess>
            ) : (
              <ButtonError
                endIcon={isLoading && <CircularProgress size="1rem" />}
                onClick={handleDeleteCompleted}
                size="large"
                sx={{
                  mx: 1,
                  px: 3,
                }}
                variant="contained"
              >
                Block
              </ButtonError>
            )}
          </Box>
        </Box>
      </DialogWrapper>

      <DialogWrapper
        open={selectedUpdatePackage}
        fullWidth
        TransitionComponent={Transition}
        // keepMounted
        onClose={() => setSelectedUpdatePackage(null)}
      >
        <Formik
          initialValues={selectedUpdatePackage}
          enableReinitialize
          // validationSchema={Yup.object().shape({
          //   name: Yup.string()
          //     .max(255)
          //     .required(t("The user name field is required")),
          //   firstName: Yup.string()
          //     .max(255)
          //     .required(t("The first name field is required")),
          //   lastName: Yup.string()
          //     .max(255)
          //     .required(t("The last name field is required")),
          //   email: Yup.string()
          //     .email(t("The email provided should be a valid email address"))
          //     .max(255)
          //     .required(t("The email field is required")),
          //   tempPassword: Yup.string()
          //     .max(255)
          //     .required(t("The password field is required")),
          // })}
          onSubmit={async (
            values: User,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            // const res = await updateUser({
            //   subscription: {
            //     plan: values.subscription.plan,
            //     expiredAt: values.subscription.expiredAt,
            //     amount:
            //   },
            // });
            // const res = await updateUser({
            //   ...values,
            //   blocked: false,
            //   blockAfter: dayjs().add(10, "years"),
            // });
            const res = await updateUserById({
              id: selectedUpdatePackage?.id,
              userPartial: {
                ...values,
                blocked: false,
                blockAfter: dayjs().add(10, "years"),
              },
            });
            if (res?.error) {
              handleUpdateUserError(res?.error?.data?.error?.message);
            } else {
              enqueueSnackbar(t("Package is updated"), {
                variant: "success",
                anchorOrigin: {
                  vertical: "top",
                  horizontal: "right",
                },
                TransitionComponent: Zoom,
              });
              setSelectedUpdatePackage(null);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                p={5}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <Autocomplete
                      multiple={false}
                      disablePortal
                      options={Package}
                      value={values?.subscription?.plan}
                      onChange={(_, option: { label: string; value: string }) =>
                        setFieldValue("subscription.plan", option.value)
                      }
                      renderInput={(params) => (
                        <TextField
                          name="subscription.plan"
                          fullWidth
                          {...params}
                          label={t("Package")}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <DatePicker
                      value={values?.subscription.expiredAt}
                      onChange={(val: Date) => {
                        setFieldValue("subscription.expiredAt", val);
                      }}
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          placeholder={t("Select date...")}
                          {...params}
                          name="subscription.expiredAt"
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      error={Boolean(
                        touched.subscription?.amount &&
                          errors.subscription?.amount
                      )}
                      fullWidth
                      helperText={
                        touched.subscription?.amount &&
                        errors.subscription?.amount
                      }
                      label={t("Subscription amount")}
                      name="subscription.amount"
                      onBlur={handleBlur}
                      type="number"
                      onChange={handleChange}
                      value={values?.subscription?.amount}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Box mt={3}>
                  <Button
                    variant="text"
                    size="large"
                    sx={{
                      mx: 1,
                    }}
                    onClick={closeConfirmDelete}
                  >
                    {t("Cancel")}
                  </Button>
                  <ButtonSuccess
                    startIcon={
                      isLoading ? <CircularProgress size="1rem" /> : null
                    }
                    disabled={Boolean(isLoading)}
                    size="large"
                    sx={{
                      mx: 1,
                      px: 3,
                    }}
                    variant="contained"
                    type="submit"
                  >
                    {t("Update")}
                  </ButtonSuccess>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </DialogWrapper>
    </>
  );
};

Results.propTypes = {
  users: PropTypes.array.isRequired,
};

Results.defaultProps = {
  users: [],
};

export default Results;
