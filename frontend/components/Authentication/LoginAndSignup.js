import styled from "styled-components";
import { BPSmall } from "../Layout/BreakPoint";

const Wrapper = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${BPSmall}) {
    flex-direction: row;
  }
`;
const LoginWrapper = styled.div`
  flex: 1;
  @media only screen and (min-width: ${BPSmall}) {
    padding: 0 9%;
  }
`;
const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media print, screen and (min-width: 48em) {
    font-size: 1.875rem;
  }
`;
const Form = styled.form`
  width: 100%;
`;
const FormRow = styled.p`
  width: 100%;
  float: left;
`;
const FormLabel = styled.label`
  display: inline-block;
  clear: left;
  font-size: 14px;
  color: #000;
  margin: 0 0 10px;
  font-weight: 500;
`;
const FormRequiredAterisk = styled.span`
  color: red;
  border-bottom: 0;
`;
const FormInput = styled.input`
  width: 100%;
  border: 1px solid #000;
  padding: 14px 15px;
  height: 44px;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  background: #fff;
  max-width: 100%;
  outline: 0;
  font-family: inherit;
  border-radius: 6px;
  box-shadow: none;
  appearance: none;
`;
const FormButton = styled.button`
  display: block;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 44px;
  line-height: 42px;
  background: #fff;
  border: 1px solid #000;
  color: #000;
  padding: 0 25px;
  max-width: 100%;
  font-size: 14px;
  font-weight: 500;
  outline: 0;
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  white-space: nowrap;
  appearance: none;

  &:hover {
    background: #000;
    color: #fff;
  }
`;
const LostPasswordRow = styled.p`
  display: flex;
  flex-direction: column;
  clear: both;

  @media only screen and (min-width: ${BPSmall}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const LostPasswordLink = styled.a`
  display: inline-block;
  clear: left;
  font-size: 14px;
  vertical-align: middle;

  &:hover {
    color: #fecdab;
  }
`;
const SignUpWrapper = styled.div`
  flex: 1;
  margin-top: 30px;

  border-top: 1px solid #000;
  padding-top: 40px;
  margin-top: 30px;
  @media only screen and (min-width: ${BPSmall}) {
    padding: 0 9%;
  }

  @media only screen and (min-width: ${BPSmall}) {
    padding-top: 0;
    margin-top: 0;
    border-left: 1px solid #000;
    border-top: 0;
  }
`;
const SignUpPrivacyPolicy = styled.div`
  font-size: 12px;
  margin-bottom: 1rem;
`;

function LoginAndSignup() {
  return (
    <div>
      <div className="notice"></div>
      <Wrapper>
        <LoginWrapper>
          <Title>Login</Title>
          <Form method="POST">
            <FormRow>
              <FormLabel>
                Email address&nbsp;
                <FormRequiredAterisk>*</FormRequiredAterisk>
              </FormLabel>
              <FormInput type="text" name="username" />
            </FormRow>
            <FormRow>
              <FormLabel>
                Password&nbsp;
                <FormRequiredAterisk>*</FormRequiredAterisk>
              </FormLabel>
              <FormInput type="password" name="password" />
            </FormRow>
            <FormRow>
              <FormButton>Login</FormButton>
            </FormRow>
            <LostPasswordRow>
              <LostPasswordLink>Lost your password?</LostPasswordLink>
            </LostPasswordRow>
          </Form>
        </LoginWrapper>
        <SignUpWrapper>
          <Title>Register</Title>
          <Form method="POST">
            <FormRow>
              <FormLabel>
                Email address&nbsp;
                <FormRequiredAterisk>*</FormRequiredAterisk>
              </FormLabel>
              <FormInput type="text" name="username" />
            </FormRow>
            <p>A password will be sent to your email address.</p>
            <SignUpPrivacyPolicy>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </SignUpPrivacyPolicy>
            <FormRow>
              <FormButton>Register</FormButton>
            </FormRow>
          </Form>
        </SignUpWrapper>
      </Wrapper>
    </div>
  );
}

export default LoginAndSignup;
