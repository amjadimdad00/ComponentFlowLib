import type { SVGProps } from "react";

const SvgBorderStyle = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M1.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-10-4a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm5 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm5 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0-4a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1z"
    />
  </svg>
);
export default SvgBorderStyle;
