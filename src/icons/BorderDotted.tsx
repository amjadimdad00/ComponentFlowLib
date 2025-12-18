import type { SVGProps } from "react";

const SvgBorderDotted = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M1.5 6.625a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75m4 0a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75m4 0a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75m4 0a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75"
    />
  </svg>
);
export default SvgBorderDotted;
