import { forwardRef } from "react";
import "./CustomInput.css";

function Input(
  { id, name, type, placeholder, value, error, handleChange, ...rest },
  ref
) {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={`custom-input`}
        onChange={handleChange}
        ref={ref}
        {...rest}
      />

      {error && (
        <div className="text-danger mt-1 fw-semibold text-start">{error}</div>
      )}
    </>
  );
}

export const CustomInput = forwardRef(Input);
