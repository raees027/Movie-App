import { useNavigate } from "react-router";
import { UserAccountMenu } from "../UserAccountMenu/UserAccountMenu";

export const PageHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-container h-15 w-full  flex justify-between">
        <div className="header-left-section">
          <div
            className="side-heading font-sans text-[36px]  px-2 text-(--sidebar-text) font-extrabold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Cinemas.
          </div>
        </div>

        <div className="header-right-section flex justify-center items-center pr-1">
          <UserAccountMenu />
        </div>
      </div>
    </>
  );
};
