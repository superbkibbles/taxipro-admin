import * as Yup from "yup";
import type { FC } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import Link from "src/components/Link";

import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Checkbox,
  Typography,
  FormControlLabel,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useAuth } from "src/hooks/useAuth";
import { useRefMounted } from "src/hooks/useRefMounted";
import { useTranslation } from "react-i18next";

export const LoginJWT: FC = (props) => {
  const { t }: { t: any } = useTranslation();
  const { login } = useAuth() as any;
  const isMountedRef = useRefMounted();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "admin@taxipro.se",
      password: "Pro@2024",
      terms: true,
      submit: null,
      error: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("The email provided should be a valid email address"))
        .max(255)
        .required(t("The email field is required")),
      password: Yup.string()
        .max(255)
        .required(t("The password field is required")),
      terms: Yup.boolean().oneOf(
        [true],
        t("You must agree to our terms and conditions")
      ),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await login(values.email, values.password);

        console.log("here");

        if (isMountedRef()) {
          const backTo = (router.query.backTo as string) || "/management/users";
          router.push(backTo);
        }
      } catch (err) {
        if (isMountedRef()) {
          formik.setFieldValue("error", err.message);
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit} {...props}>
      <TextField
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        margin="normal"
        autoFocus
        helperText={formik.touched.email && formik.errors.email}
        label={t("Email address")}
        name="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="email"
        value={formik.values.email}
        variant="outlined"
      />
      <TextField
        error={Boolean(formik.touched.password && formik.errors.password)}
        fullWidth
        margin="normal"
        helperText={formik.touched.password && formik.errors.password}
        label={t("Password")}
        name="password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.password}
        variant="outlined"
      />
      <Box
        alignItems="center"
        display={{ xs: "block", md: "flex" }}
        justifyContent="space-between"
      >
        {/* <Box display={{ xs: "block", md: "flex" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.terms}
                name="terms"
                color="primary"
                onChange={formik.handleChange}
              />
            }
            label={
              <>
                <Typography variant="body2">
                  {t("I accept the")}{" "}
                  <Link href="#">{t("terms and conditions")}</Link>.
                </Typography>
              </>
            }
          />
        </Box> */}
        {/* <Link href="/auth/recover-password">
          <b>{t('Lost password?')}</b>
        </Link> */}
      </Box>
      {formik?.values?.error && (
        <Alert severity="error">{formik.values.error}</Alert>
      )}

      {Boolean(formik.touched.terms && formik.errors.terms) && (
        <FormHelperText error>{formik.errors.terms}</FormHelperText>
      )}

      <Button
        sx={{
          mt: 3,
        }}
        color="primary"
        startIcon={
          formik.isSubmitting ? <CircularProgress size="1rem" /> : null
        }
        disabled={formik.isSubmitting}
        type="submit"
        fullWidth
        size="large"
        variant="contained"
      >
        {t("Sign in")}
      </Button>
    </form>
  );
};
