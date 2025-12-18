import type { SVGProps } from "react";

const SvgMagnifyingGlass = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M6.5 2a4.5 4.5 0 0 1 3.515 7.308l2.839 2.839.064.078a.5.5 0 0 1-.693.693l-.079-.064-2.838-2.84A4.5 4.5 0 1 1 6.5 2m0 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
    />
  </svg>
);
export default SvgMagnifyingGlass;
