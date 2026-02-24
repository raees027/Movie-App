import { ForgotPasswordForm } from "../../Components/ForgotPasswordForm/ForgotPasswordForm";
import { PageHeader } from "../../Components/PageHeader/PageHeader";

export const ForgetPasswordPage = () => {
  return (
    <div className="login-page-form-component h-screen w-screen  ">
      <div className="header-section">
        <PageHeader />
      </div>

      <div className="forgetPassword-page-form-section h-[calc(100%-50px)] w-screen flex justify-center items-center">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};
