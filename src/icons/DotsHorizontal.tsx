import type { SVGProps } from "react";

const SvgDotsHorizontal = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="currentColor"
      d="M2.5 6.375a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m5 0a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m5 0a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25"
    />
  </svg>
);
export default SvgDotsHorizontal;
