 type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900",
    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-400",
  };

  return (
    <button type={type} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}