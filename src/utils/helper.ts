import * as yup from "yup";

export const LoginValidator = {
  initials: {
    email: "",
    password: "",
  },
  validation: yup.object().shape({
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email id"
      )
      .required("email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(5, "password should be minimum five character"),
  }),
};

export interface loginFormValues {
  email: string;
  password: string;
}

export interface OtherProps {
  message: string;
}
