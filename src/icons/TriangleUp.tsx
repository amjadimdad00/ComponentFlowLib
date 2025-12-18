import type { SVGProps } from "react";

const SvgTriangleUp = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path fill="currentColor" d="M7.5 4.5 4 9h7z" />
  </svg>
);
export default SvgTriangleUp;
