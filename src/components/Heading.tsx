// Alternative syntax to leverage Prop typing to react packages
type HeadingProps = {
  name: React.ReactNode | string;
};

export const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = (
  props
) => {
  return (
    <h1>
      {props.name} {props.children}
    </h1>
  );
};

// Simpler way to handle children prop typing
// type HeadingProps = {
//   children: React.ReactNode | string;
//   name: string;
// };

// export const Heading = (props: HeadingProps) => {
//   return <h1>{props.name} {props.children}</h1>;
// };
