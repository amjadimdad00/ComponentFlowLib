import type { SVGProps } from "react";

const SvgBorderSolid = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M13.35 7.01a.5.5 0 0 1 0 .98l-.1.01H1.75a.5.5 0 0 1 0-1h11.5z"
    />
  </svg>
);
export default SvgBorderSolid;
