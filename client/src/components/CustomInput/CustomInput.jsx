import "./CustomInput.css";

export function CustomInput({
  id,
  name,
  type,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className={`custom-input`}
      onChange={handleChange}
    />
  );
}
