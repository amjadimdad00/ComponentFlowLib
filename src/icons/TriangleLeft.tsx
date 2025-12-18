import type { SVGProps } from "react";

const SvgTriangleLeft = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path fill="currentColor" d="M4.5 7.5 9 4v7z" />
  </svg>
);
export default SvgTriangleLeft;
