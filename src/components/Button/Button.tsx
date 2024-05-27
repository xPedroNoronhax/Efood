import { ButtonContainer, ButtonLink } from "./style";

type Props = {
  type: "button" | "link";
  to?: string;
  children: string;
};

const Button = ({ type, to, children }: Props) => {
  if (type === "button") {
    return <ButtonContainer type="button">{children}</ButtonContainer>;
  }
  return <ButtonLink to={to as string}>{children}</ButtonLink>;
};

export default Button;
