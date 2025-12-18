import type { SVGProps } from "react";

const SvgSquare = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path fill="currentColor" d="M14 14H1V1h13zM2 13h11V2H2z" />
  </svg>
);
export default SvgSquare;
