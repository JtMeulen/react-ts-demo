/**
 * Can be positioned at one of:
 * top-left      top-center      top-right
 * center-left   center          center-right
 * bottom-left   bottom-center   bottom-right
 */

type VerticalPosition = "center" | "top" | "bottom";
type HorizontalPosition = "left" | "center" | "right";

// We exclude "center-center" because it's not a valid position, we allow for "center" instead
type Position =
  | Exclude<`${VerticalPosition}-${HorizontalPosition}`, "center-center">
  | "center";

type ToastProps = {
  position: Position;
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast is positioned at {position}</div>;
};
