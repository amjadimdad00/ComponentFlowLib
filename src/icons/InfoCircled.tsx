import type { SVGProps } from "react";

const SvgInfoCircled = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M7.5.877a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877m0 .95A5.674 5.674 0 1 0 7.5 13.17a5.674 5.674 0 0 0-.002-11.345m.1 4.183a.5.5 0 0 1 .4.49V10h1v1H6v-1h1V7H6V6h1.5zm-.1-2.26a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
    />
  </svg>
);
export default SvgInfoCircled;
