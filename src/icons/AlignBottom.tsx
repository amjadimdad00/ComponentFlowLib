import type { SVGProps } from "react";

const SvgAlignBottom = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M8 2a1 1 0 0 1 1 1v11h4.5a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1H6V3a1 1 0 0 1 1-1z"
    />
  </svg>
);
export default SvgAlignBottom;
