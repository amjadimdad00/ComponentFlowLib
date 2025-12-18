import type { SVGProps } from "react";

const SvgSlash = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path fill="currentColor" d="M5.46 14H4.108L9.465 1h1.353z" />
  </svg>
);
export default SvgSlash;
