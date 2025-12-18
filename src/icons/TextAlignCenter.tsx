import type { SVGProps } from "react";

const SvgTextAlignCenter = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M11.5 10a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1zm-1-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1z"
    />
  </svg>
);
export default SvgTextAlignCenter;
