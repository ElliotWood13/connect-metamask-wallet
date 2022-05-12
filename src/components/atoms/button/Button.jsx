import { Primary } from "./button.styles";

export const PrimaryButton = ({
  text,
  onClick,
  buttonType = "button",
  disabled = false,
  ariaLabel,
}) => {
  return (
    <Primary
      type={buttonType}
      disabled={disabled}
      arira-disabled={disabled ? "true" : "false"}
      aria-label={ariaLabel}
      onClick={() => onClick()}
    >
      {text}
    </Primary>
  );
};
