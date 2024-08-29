type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = (
  props
) => {
  return <div style={props.styles}>{props.children}</div>;
};
