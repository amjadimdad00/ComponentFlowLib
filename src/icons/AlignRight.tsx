import type { SVGProps } from "react";

const SvgAlignRight = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M15 13.5a.5.5 0 0 1-1 0V9H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h11V1.5a.5.5 0 1 1 1 0z"
    />
  </svg>
);
export default SvgAlignRight;
