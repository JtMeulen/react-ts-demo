import { ButtonProps } from "./Button";

type ComponentPropsProps = {
  isLoggedIn: boolean;
  componentToRender: React.ComponentType<ButtonProps>;
};

export const ComponentProps = ({
  isLoggedIn,
  componentToRender: Component,
}: ComponentPropsProps) => {
  if (isLoggedIn) {
    return <Component text="abc" handleClick={() => {}} />;
  } else {
    return <div>Login Form</div>;
  }
};
