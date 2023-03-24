import { CustomButton, CustomInput } from "./../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import "./Auth.css";

const signupSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be longer than 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(signupSchema),
  });

  const handleFormSubmit = handleSubmit((data) => {
    const { firstName, lastName, email, password } = data;
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log(user);

    toast.success("Account Created Successfully", {
      duration: 2000,
    });
  });

  return (
    <>
      <div>
        <div className="auth-wrap">
          <form action="" onSubmit={handleFormSubmit}>
            <h1 className="mb-5">iSocial</h1>

            <div className="input-inline">
              <div className="input-wrap">
                <CustomInput
                  type="text"
                  placeholder="First Name"
                  className="custom-input"
                  error={errors.firstName?.message}
                  {...register("firstName")}
                />
              </div>
              <div className="input-wrap">
                <CustomInput
                  type="text"
                  placeholder="Last Name"
                  className="custom-input"
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className="input-wrap">
              <CustomInput
                type="email"
                placeholder="Email"
                className="custom-input"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>
            <div className="input-wrap">
              <CustomInput
                type="password"
                placeholder="Password"
                className="custom-input"
                error={errors.password?.message}
                {...register("password")}
              />
            </div>
            <div className="input-wrap">
              <CustomInput
                type="password"
                placeholder="Confirm Password"
                className="custom-input"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
            </div>

            <CustomButton type={"submit"} className="mt-4">
              Sign Up
            </CustomButton>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}
