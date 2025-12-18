import type { SVGProps } from "react";

const SvgFilter = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M9.6 10.01a.5.5 0 0 1 0 .98l-.1.01h-4a.5.5 0 0 1 0-1h4zm2-3a.5.5 0 0 1 0 .98l-.1.01h-8a.5.5 0 0 1 0-1h8zM13.5 4a.5.5 0 0 1 0 1h-12a.5.5 0 0 1 0-1z"
    />
  </svg>
);
export default SvgFilter;
