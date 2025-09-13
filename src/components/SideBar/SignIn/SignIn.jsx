import React, { useContext, useState } from "react";
import SignInData from "./SignInData";
import styled from "styled-components";
import Button from "../../Button";
import { Formik, Field, ErrorMessage, Form } from "formik";
import SignInInitialValues, { SignInSchema } from "../../../Formik/SignInValid";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContext } from "../../../Context/ToastContext";
import register from "../../../Axios/register";
import login from "../../../Axios/login";
import Cookies from "js-cookie";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        {isSignIn ? (
          <MotionTitle
            key="signin"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {SignInData.title}
          </MotionTitle>
        ) : (
          <MotionTitle
            key="signup"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {SignInData.title2}
          </MotionTitle>
        )}
      </AnimatePresence>

      <Formik
        initialValues={SignInInitialValues}
        validationSchema={SignInSchema}
        onSubmit={async (values) => {
          if (isLoading) return;
          setIsLoading(true);
          const { username, password } = values;

          try {
            if (isSignIn) {
              const res = await login({ username, password });
              const { id, token, refreshToken } = res.data;
              Cookies.set("id", id);
              Cookies.set("token", token);
              Cookies.set("refreshToken", refreshToken);
            } else {
              const res = await register({ username, password });
              toast.success(res.data.message);
              setIsSignIn(true);
            }
          } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");
          } finally {
            setIsLoading(false);
          }
        }}
      >
        <Form>
          <Input name="username" type="text" placeholder={SignInData.user} />
          <StyledErrorMessage name="username" component="div" />

          <PasswordWrapper>
            <Input
              name="password"
              type="password"
              placeholder={SignInData.password.pass}
            />
            <StyledErrorMessage name="password" component="div" />
          </PasswordWrapper>

          <AnimatePresence mode="wait">
            {!isSignIn && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <PasswordWrapper>
                  <Input
                    name="confirmPassword"
                    type="password"
                    placeholder={SignInData.confirmPassword}
                  />
                  <StyledErrorMessage name="confirmPassword" component="div" />
                </PasswordWrapper>
              </motion.div>
            )}
          </AnimatePresence>

          <RememberWrapper>
            <Field type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">{SignInData.remember}</label>
          </RememberWrapper>

          <StyledButton
            type="submit"
            label={
              isLoading
                ? SignInData.loading
                : isSignIn
                ? SignInData.btn
                : SignInData.title3
            }
          />

          <SignupBtn
            onClick={() => setIsSignIn(!isSignIn)}
            type="button"
            label={isSignIn ? SignInData.btnSignUp : SignInData.title4}
          />
        </Form>
      </Formik>

      <Forget>{SignInData.forget}</Forget>
    </Wrapper>
  );
};

export default SignIn;

/* ---------------- styled-components ---------------- */

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin: 0 auto 20px auto;
  position: relative;
`;

const MotionTitle = styled(motion(Title))``;

const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const RememberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  input {
    margin-right: 8px;
  }
  font-size: 1.4rem;
`;

const Forget = styled.a`
  margin-top: 15px;
  display: block;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin: 0rem auto;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 1.2rem;
  transform: translateY(-1rem);
`;

const SignupBtn = styled(StyledButton)`
  margin-top: 1rem;
  border: 1px solid black !important;
  font-size: 1.3rem;
  background-color: white;
  color: black;
  transition: all 0.3s ease;
  &:hover {
    scale: 0.9;
    background-color: #e4e4e4fa;
  }
`;
