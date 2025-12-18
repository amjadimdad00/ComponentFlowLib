import type { SVGProps } from "react";

const SvgArrowUp = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M7.225 2.082a.5.5 0 0 1 .628.065l4 4 .065.078a.5.5 0 0 1-.693.693l-.079-.064L8 3.707V12.5a.5.5 0 0 1-1 0V3.707L3.853 6.854a.5.5 0 1 1-.707-.707l4-4z"
    />
  </svg>
);
export default SvgArrowUp;
