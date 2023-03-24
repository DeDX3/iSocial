export function CustomButton({ id, type, className, handleClick, children }) {
  return (
    <button
      id={id}
      type={type}
      className={`custom-btn ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
