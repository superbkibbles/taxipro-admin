// import { useRef, useState } from 'react';
// import { useAuth } from 'src/hooks/useAuth';

// import {
//   Avatar,
//   Box,
//   Button,
//   Divider,
//   alpha,
//   List,
//   ListItem,
//   ListItemText,
//   Popover,
//   IconButton,
//   Typography,
//   styled,
//   useTheme
// } from '@mui/material';
// import { useRouter } from 'next/router';

// import { useTranslation } from 'react-i18next';
// import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
// import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
// import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
// import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
// import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';

// const MenuUserBox = styled(Box)(
//   ({ theme }) => `
//     background: ${theme.colors.alpha.black[5]};
//     padding: ${theme.spacing(2)};
// `
// );

// const UserBoxText = styled(Box)(
//   ({ theme }) => `
//     text-align: left;
//     padding-left: ${theme.spacing(1)};
// `
// );

// const UserBoxLabel = styled(Typography)(
//   ({ theme }) => `
//     font-weight: ${theme.typography.fontWeightBold};
//     color: ${theme.sidebar.menuItemColor};
//     display: block;

//     &.popoverTypo {
//       color: ${theme.palette.secondary.main};
//     }
// `
// );

// const UserBoxDescription = styled(Typography)(
//   ({ theme }) => `
//     color: ${alpha(theme.sidebar.menuItemColor, 0.6)};

//     &.popoverTypo {
//       color: ${theme.palette.secondary.light};
//     }
// `
// );

// function SidebarTopSection() {
//   const { t }: { t: any } = useTranslation();
//   const theme = useTheme();
//   const router = useRouter();

//   const { logout } = useAuth();

//   const user = {
//     avatar: '/static/images/avatars/1.jpg',
//     name: 'Rachael Simons',
//     jobtitle: 'Lead Developer'
//   };

//   const ref = useRef<any>(null);
//   const [isOpen, setOpen] = useState<boolean>(false);

//   const handleOpen = (): void => {
//     setOpen(true);
//   };

//   const handleClose = (): void => {
//     setOpen(false);
//   };

//   const handleLogout = async (): Promise<void> => {
//     try {
//       handleClose();
//       await logout();
//       router.push('/');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         textAlign: 'center',
//         mx: 2,
//         pt: 1,
//         position: 'relative'
//       }}
//     >
//       <Avatar
//         sx={{
//           width: 68,
//           height: 68,
//           mb: 2,
//           mx: 'auto'
//         }}
//         alt={user.name}
//         src={user.avatar}
//       />

//       <Typography
//         variant="h4"
//         sx={{
//           color: `${theme.colors.alpha.trueWhite[100]}`
//         }}
//       >
//         {user.name}
//       </Typography>
//       <Typography
//         variant="subtitle1"
//         sx={{
//           color: `${theme.colors.alpha.trueWhite[70]}`
//         }}
//       >
//         {user.jobtitle}
//       </Typography>
//       <IconButton
//         size="small"
//         sx={{
//           position: 'absolute',
//           right: theme.spacing(0),
//           color: `${theme.colors.alpha.trueWhite[70]}`,
//           top: theme.spacing(0),
//           background: `${theme.colors.alpha.trueWhite[10]}`,

//           '&:hover': {
//             color: `${theme.colors.alpha.trueWhite[100]}`,
//             background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`
//           }
//         }}
//         ref={ref}
//         onClick={handleOpen}
//       >
//         <UnfoldMoreTwoToneIcon fontSize="small" />
//       </IconButton>
//       <Popover
//         disableScrollLock
//         anchorEl={ref.current}
//         onClose={handleClose}
//         open={isOpen}
//         anchorOrigin={{
//           vertical: 'center',
//           horizontal: 'center'
//         }}
//         transformOrigin={{
//           vertical: 'center',
//           horizontal: 'center'
//         }}
//       >
//         <MenuUserBox
//           sx={{
//             minWidth: 210
//           }}
//           display="flex"
//         >
//           <Avatar variant="rounded" alt={user.name} src={user.avatar} />
//           <UserBoxText>
//             <UserBoxLabel className="popoverTypo" variant="body1">
//               {user.name}
//             </UserBoxLabel>
//             <UserBoxDescription className="popoverTypo" variant="body2">
//               {user.jobtitle}
//             </UserBoxDescription>
//           </UserBoxText>
//         </MenuUserBox>
//         <Divider
//           sx={{
//             mb: 0
//           }}
//         />
//         <List
//           sx={{
//             p: 1
//           }}
//           component="nav"
//         >
//           <ListItem
//             onClick={() => {
//               handleClose();
//             }}
//             button
//           >
//             <AccountBoxTwoToneIcon fontSize="small" />
//             <ListItemText primary={t('Profile')} />
//           </ListItem>
//           <ListItem
//             onClick={() => {
//               handleClose();
//             }}
//             button
//           >
//             <InboxTwoToneIcon fontSize="small" />
//             <ListItemText primary={t('Inbox')} />
//           </ListItem>
//           <ListItem
//             onClick={() => {
//               handleClose();
//             }}
//             button
//           >
//             <AccountTreeTwoToneIcon fontSize="small" />
//             <ListItemText primary={t('Projects')} />
//           </ListItem>
//         </List>
//         <Divider />
//         <Box m={1}>
//           <Button color="primary" fullWidth onClick={handleLogout}>
//             <LockOpenTwoToneIcon
//               sx={{
//                 mr: 1
//               }}
//             />
//             {t('Sign out')}
//           </Button>
//         </Box>
//       </Popover>
//     </Box>
//   );
// }

// export default SidebarTopSection;

import { useRef, useState } from "react";
import { useAuth } from "src/hooks/useAuth";
import { useRouter } from "next/router";

import {
  Avatar,
  Box,
  Button,
  Divider,
  alpha,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
  styled,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import InboxTwoToneIcon from "@mui/icons-material/InboxTwoTone";
import UnfoldMoreTwoToneIcon from "@mui/icons-material/UnfoldMoreTwoTone";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import { useGetUserQuery } from "@/services/user";

const UserBoxButton = styled(Button)(
  ({ theme }) => `
    padding: ${theme.spacing(1)};
    background-color: ${alpha(theme.colors.alpha.black[100], 0.08)};

    .MuiButton-label {
      justify-content: flex-start;
    }

    &:hover {
      background-color: ${alpha(theme.colors.alpha.black[100], 0.12)};
    }
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
    text-align: left;
    padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.sidebar.menuItemColor};
    display: block;

    &.popoverTypo {
      color: ${theme.palette.secondary.main};
    }
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
    color: ${alpha(theme.sidebar.menuItemColor, 0.6)};

    &.popoverTypo {
      color: ${theme.palette.secondary.light};
    }
`
);

function SidebarTopSection() {
  const { t }: { t: any } = useTranslation();
  const { data: user } = useGetUserQuery(undefined);

  const { logout } = useAuth();
  const router = useRouter();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleLogout = async (): Promise<void> => {
    try {
      handleClose();
      await logout();
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  // const user = {
  //   avatar: "/static/images/avatars/1.jpg",
  //   name: "Mand",
  //   jobtitle: "Fullstack developer",
  // };

  return (
    <>
      <UserBoxButton fullWidth color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={user?.name} src={user?.image.url} />
        <Box
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <UserBoxText>
            <UserBoxLabel variant="body1">{user?.name}</UserBoxLabel>
            {/* <UserBoxDescription variant="body2">
              {user.jobtitle}
            </UserBoxDescription> */}
          </UserBoxText>
          <UnfoldMoreTwoToneIcon
            fontSize="small"
            sx={{
              ml: 1,
            }}
          />
        </Box>
      </UserBoxButton>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <MenuUserBox
          sx={{
            minWidth: 210,
          }}
          display="flex"
        >
          <Avatar variant="rounded" alt={user?.name} src={user?.image.url} />
          <UserBoxText>
            <UserBoxLabel className="popoverTypo" variant="body1">
              {user?.name}
            </UserBoxLabel>
            {/* <UserBoxDescription className="popoverTypo" variant="body2">
              {user.jobtitle}
            </UserBoxDescription> */}
          </UserBoxText>
        </MenuUserBox>
        <Divider
          sx={{
            mb: 0,
          }}
        />
        <List
          sx={{
            p: 1,
          }}
          component="nav"
        >
          <ListItem
            onClick={() => {
              handleClose();
            }}
            button
          >
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary={t("Profile")} />
          </ListItem>
          <ListItem
            onClick={() => {
              handleClose();
            }}
            button
          >
            <InboxTwoToneIcon fontSize="small" />
            <ListItemText primary={t("Inbox")} />
          </ListItem>
          <ListItem
            onClick={() => {
              handleClose();
            }}
            button
          >
            <AccountTreeTwoToneIcon fontSize="small" />
            <ListItemText primary={t("Projects")} />
          </ListItem>
        </List>
        <Divider />
        <Box m={1}>
          <Button color="primary" fullWidth onClick={handleLogout}>
            <LockOpenTwoToneIcon
              sx={{
                mr: 1,
              }}
            />
            {t("Sign out")}
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default SidebarTopSection;
