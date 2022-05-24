
import { Square } from "./Square";

export const SquareView = ({
  square,
  children,
}: {
  square: Square;
  children?: any;
}) => (
  <div className={`square color-${square.getColor()}`}>
    {children ? children : ""}
  </div>
);