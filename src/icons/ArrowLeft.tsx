import type { SVGProps } from "react";

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M6.225 3.082a.5.5 0 0 1 .693.694l-.065.078L3.707 7H12.5a.5.5 0 0 1 0 1H3.707l3.146 3.147.065.078a.5.5 0 0 1-.693.693l-.079-.064-4-4a.5.5 0 0 1 0-.707l4-4z"
    />
  </svg>
);
export default SvgArrowLeft;
