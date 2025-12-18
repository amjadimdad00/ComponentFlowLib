import type { SVGProps } from "react";

const SvgDotFilled = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M7.5 5.125a2.375 2.375 0 1 1 0 4.75 2.375 2.375 0 0 1 0-4.75"
    />
  </svg>
);
export default SvgDotFilled;
