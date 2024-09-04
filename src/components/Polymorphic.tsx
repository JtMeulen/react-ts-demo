// `React.ElementType` can be any valid React component or HTML element.
type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

// This type combines `TextOwnProps<E>` and the props of the component or element passed in `as`,
// excluding any keys that are already defined in `TextOwnProps<E>`.
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

// The default value for `E` is "div".
export const Text = <E extends React.ElementType = "div">({
  size,
  variant,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";

  return (
    <Component className={`class-${size}-${variant}`}>{children}</Component>
  );
};
