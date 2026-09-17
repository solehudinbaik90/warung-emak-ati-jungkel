import { classNames } from "../../../utils/helpers.js";

export default function Button({ children, variant = "primary", className = "", ...rest }) {
  const base = "px-4 py-2 rounded-md font-medium text-sm transition-colors";
  const variants = {
    primary: "bg-main text-white hover:bg-[var(--button-hover)]",
    outline: "border border-main text-main hover:bg-main/10",
    ghost: "text-mainHover hover:bg-headerMenu"
  };
  return (
    <button className={classNames(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

