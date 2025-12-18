import type { SVGProps } from "react";

const SvgComponentNone = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M7.224 1.425a.5.5 0 0 1 .63.065l2.475 2.474 2.318-2.317a.5.5 0 1 1 .707.707L11.036 4.67l2.474 2.476.065.077a.5.5 0 0 1-.065.63L7.854 13.51a.5.5 0 0 1-.707 0L4.67 11.036l-2.317 2.318a.5.5 0 0 1-.707-.707l2.317-2.318L1.49 7.854a.5.5 0 0 1 0-.707L7.147 1.49zM5.378 10.33l2.122 2.12L12.45 7.5l-2.121-2.122zM2.55 7.5l2.121 2.121 4.95-4.95-2.12-2.12z"
    />
  </svg>
);
export default SvgComponentNone;
