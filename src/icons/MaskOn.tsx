import type { SVGProps } from "react";

const SvgMaskOn = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M14 1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM7.5 4.375a3.125 3.125 0 1 0 0 6.25 3.125 3.125 0 0 0 0-6.25"
    />
  </svg>
);
export default SvgMaskOn;
