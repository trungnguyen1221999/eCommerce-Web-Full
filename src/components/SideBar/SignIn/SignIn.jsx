import React, { useState } from "react";
import SignInData from "./SignInData";
import styled from "styled-components";
import Button from "../../Button";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Wrapper>
      <Title>{SignInData.title}</Title>
      <form>
        <Input type="text" placeholder={SignInData.user} />

        <PasswordWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder={SignInData.password.pass}
          />
        </PasswordWrapper>

        <RememberWrapper>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">{SignInData.remember}</label>
        </RememberWrapper>

        <StyledButton type="submit" label={SignInData.btn}></StyledButton>
      </form>

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
  width: fit-content;
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  margin: 0 auto 20px auto;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: #333;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    fill: #555;
  }
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
  margin: 0 auto;
`;
