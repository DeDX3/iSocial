import { CustomButton, CustomInput } from "./../../components";
import "./Auth.css";

export function SignUp() {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div className="auth-wrap">
        <form action="" onSubmit={handleSubmit}>
          <h1 className="mb-5">iSocial</h1>

          <div className="input-inline">
            <div className="input-wrap">
              <CustomInput
                type="text"
                placeholder="First Name"
                className="custom-input"
              />
            </div>
            <div className="input-wrap">
              <CustomInput
                type="text"
                placeholder="Last Name"
                className="custom-input"
              />
            </div>
          </div>
          <div className="input-wrap">
            <CustomInput
              type="email"
              placeholder="Email"
              className="custom-input"
            />
          </div>
          <div className="input-wrap">
            <CustomInput
              type="password"
              placeholder="Password"
              className="custom-input"
            />
          </div>
          <div className="input-wrap">
            <CustomInput
              type="password"
              placeholder="Confirm Password"
              className="custom-input"
            />
          </div>

          <CustomButton type={"button"} className="mt-4">
            Sign Up
          </CustomButton>
        </form>
      </div>
    </div>
  );
}
