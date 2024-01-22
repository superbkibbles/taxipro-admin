import {
  Box,
  Typography,
  Card,
  CardHeader,
  Divider,
  Avatar,
  useTheme,
  styled,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import PeopleIcon from "@mui/icons-material/People";
import CarIcon from "@mui/icons-material/CarCrash";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
`
);

function RecentActivity({ drivers, cars }) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader title={t("Details")} />
      <Divider />
      <Box px={2} py={4} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <PeopleIcon />
        </AvatarPrimary>
        <Box pl={2} flex={1}>
          <Typography variant="h3">{t("Drivers")}</Typography>

          <Box pt={2} display="flex">
            <Box pr={8}>
              <Typography
                gutterBottom
                variant="caption"
                sx={{
                  fontSize: `${theme.typography.pxToRem(16)}`,
                }}
              >
                {t("Total")}
              </Typography>
              <Typography variant="h2">{drivers}</Typography>
            </Box>
            {/* <Box>
              <Typography
                gutterBottom
                variant="caption"
                sx={{
                  fontSize: `${theme.typography.pxToRem(16)}`,
                }}
              >
                {t("Failed")}
              </Typography>
              <Typography variant="h2">8</Typography>
            </Box> */}
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box px={2} py={4} display="flex" alignItems="flex-start">
        <AvatarPrimary>
          <CarIcon />
        </AvatarPrimary>
        <Box pl={2} flex={1}>
          <Typography variant="h3">{t("Cars")}</Typography>

          <Box pt={2} display="flex">
            <Box pr={8}>
              <Typography
                gutterBottom
                variant="caption"
                sx={{
                  fontSize: `${theme.typography.pxToRem(16)}`,
                }}
              >
                {t("Total")}
              </Typography>
              <Typography variant="h2">{cars}</Typography>
            </Box>
            {/* <Box>
              <Typography
                gutterBottom
                variant="caption"
                sx={{
                  fontSize: `${theme.typography.pxToRem(16)}`,
                }}
              >
                {t("Lists")}
              </Typography>
              <Typography variant="h2">15</Typography>
            </Box> */}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default RecentActivity;
