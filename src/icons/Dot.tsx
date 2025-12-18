import type { SVGProps } from "react";

const SvgDot = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M7.5 4.875a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25m0 1a1.625 1.625 0 1 0 0 3.25 1.625 1.625 0 0 0 0-3.25"
    />
  </svg>
);
export default SvgDot;
