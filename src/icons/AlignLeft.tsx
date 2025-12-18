import type { SVGProps } from "react";

const SvgAlignLeft = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M0 1.5a.5.5 0 0 1 1 0V6h11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1v4.5a.5.5 0 0 1-1 0z"
    />
  </svg>
);
export default SvgAlignLeft;
