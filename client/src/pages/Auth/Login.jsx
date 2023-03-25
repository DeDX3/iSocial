import { Toaster } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CustomButton, CustomInput } from "@components";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be longer than 8 characters"),
});

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <div className="auth-wrap">
        <form action="" onSubmit={handleFormSubmit}>
          <h1 className="mb-5">iSocial</h1>

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

          <CustomButton type={"submit"} className="mt-4">
            Login
          </CustomButton>
        </form>
      </div>

      <Toaster />
    </>
  );
}
