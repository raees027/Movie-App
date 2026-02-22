import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { SignupPageForm } from "../../Components/SignupPageForm/SignupPageForm";

export const SignupPage = () => {
  return (
    // <div className="login-page-form-component h-screen w-screen flex flex-col items-center justify-center">
    //   <SignupPageForm />
    // </div>

    <div className="login-page-form-component h-screen w-screen  ">
      <div className="header-section">
        <PageHeader />
      </div>

      <div className="login-page-form-section h-[calc(100%-50px)] w-screen flex justify-center items-center">
        <SignupPageForm />
      </div>
    </div>
  );
};
