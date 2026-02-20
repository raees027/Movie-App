import { useForm, Controller } from "react-hook-form";
import "../MoviePageForm/MoviePageForm.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Checkbox from "@mui/material/Checkbox";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const LoginPageForm = () => {
  const form = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors, isValid } = formState;

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Login data:", data);
      setLoading(false);
    }, 2000);

    // console.log("form-submitted", data);
  };
  return (
    <>
      <div className="form-container bg-(--form-background-color) min-w-100 min-h-100 py-8 rounded-lg flex flex-col justify-center ">
        <h1 className="text-white text-[30px] font-medium mb-10">Login</h1>
        <div className="form-section flex flex-col items-center text-white">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full px-12">
            <div className="login-email-section mb-4 flex flex-col items-baseline">
              <label>Email ID or Phone Number</label>

              <input
                type="text"
                {...register("emailOrPhone", {
                  required: "Email ID or Phone Number is required",
                  validate: (value) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const phoneRegex = /^[6-9]\d{9}$/;

                    if (emailRegex.test(value) || phoneRegex.test(value)) {
                      return true;
                    }
                    return "Enter a valid Email ID or Phone Number";
                  },
                })}
                className="
      w-full
      bg-transparent
      text-white
      text-sm
      p-2
      border-b-2
      border-gray-500
      focus:border-red-600
      focus:outline-none
      transition-all
      duration-300
    "
              />

              {errors.emailOrPhone && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.emailOrPhone.message}
                </p>
              )}
            </div>

            <div className="password-section mb-4 flex flex-col items-baseline relative">
              <label>Password</label>

              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  validate: (value) =>
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/.test(value) ||
                    "Must include 1 uppercase, 1 number & 1 special character",
                })}
                className="
      w-full
      bg-transparent
      text-white
      text-sm
      p-2
      border-b-2
      border-gray-500
      focus:border-red-600
      focus:outline-none
      transition-all
      duration-300
      
    "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-6.5 text-gray-400 hover:text-white"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>

              {errors.password && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="remember-section mb-6 flex items-center justify-between text-sm text-gray-300">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  {...register("rememberMe")}
                  sx={{
                    color: "#9ca3af",
                    "&.Mui-checked": {
                      color: "#E50914",
                    },
                  }}
                />
                Remember me
              </label>

              <span className="cursor-pointer hover:text-white">
                Forgot password?
              </span>
            </div>

            <div className="submit-section mt-5 rounded-lg py-3 ">
              {/* <button type="submit">Submit</button> */}
              <Button
                type="submit"
                disabled={!isValid || loading}
                sx={{
                  backgroundColor: "#E50914",
                  px: 3,
                  py: 1,
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "none",
                  opacity: !isValid || loading ? 0.7 : 1,
                  cursor: !isValid || loading ? "not-allowed" : "pointer",
                  "&:hover": {
                    backgroundColor: "#B20710",
                  },
                }}
                className="w-full "
              >
                {loading ? (
                  <>
                    <CircularProgress size={20} sx={{ color: "white" }} />
                    Logging in...
                  </>
                ) : (
                  <div className="text-white ">Login</div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
