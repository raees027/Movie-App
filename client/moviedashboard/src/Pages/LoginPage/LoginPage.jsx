import { LoginPageForm } from "../../Components/LoginPageForm/LoginPageForm";
import { PageHeader } from "../../Components/PageHeader/PageHeader";

export const LoginPage = () => {
  return (
    <div className="login-page-form-component h-screen w-screen  ">
      <div className="header-section">
        <PageHeader />
      </div>

      <div className="login-page-form-section h-[calc(100%-50px)] w-screen flex justify-center items-center">
        <LoginPageForm />
      </div>
    </div>
  );
};
