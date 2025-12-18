import type { SVGProps } from "react";

const SvgAllSides = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M7.5 14.25 5.25 12h4.5zM3 9.75.75 7.5 3 5.25zM14.25 7.5 12 9.75v-4.5zM9.75 3h-4.5L7.5.75z"
    />
  </svg>
);
export default SvgAllSides;
