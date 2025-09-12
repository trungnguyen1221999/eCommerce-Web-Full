import * as Yup from "yup";
const SignInInitialValues = {
  username: "",
  password: "",
  remember: false,
};
export default SignInInitialValues;

export const SignInSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  remember: Yup.boolean(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
