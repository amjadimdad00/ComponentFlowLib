import type { SVGProps } from "react";

const SvgTriangleRight = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path fill="currentColor" d="M10.5 7.5 6 11V4z" />
  </svg>
);
export default SvgTriangleRight;
