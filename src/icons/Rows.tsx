import type { SVGProps } from "react";

const SvgRows = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M14 12.85v1.3H1v-1.3zm0-4v1.3H1v-1.3zm0-4v1.3H1v-1.3zm0-4v1.3H1V.85z"
    />
  </svg>
);
export default SvgRows;
