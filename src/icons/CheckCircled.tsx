import type { SVGProps } from "react";

const SvgCheckCircled = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M7.5.877a6.623 6.623 0 1 1 0 13.246A6.623 6.623 0 0 1 7.5.877m0 .95A5.674 5.674 0 1 0 7.5 13.17a5.674 5.674 0 0 0-.002-11.345m1.84 3.135a.5.5 0 0 1 .82.576l-3.168 4.5a.5.5 0 0 1-.765.063L4.644 8.487 5 8.137l.357-.35L6.52 8.971zM4.65 7.78a.5.5 0 0 1 .707.007l-.713.7a.5.5 0 0 1 .006-.707"
    />
  </svg>
);
export default SvgCheckCircled;
