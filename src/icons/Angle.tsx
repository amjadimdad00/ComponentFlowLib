import type { SVGProps } from "react";

const SvgAngle = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M8.26 2.233a.5.5 0 0 1 .797.57l-.051.088-6.532 9.11H13.5l.1.01a.5.5 0 0 1 0 .979l-.1.01h-12a.5.5 0 0 1-.406-.792l7.1-9.9zM13.4 10a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-.8-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-1-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-1.2-2a.5.5 0 1 1 0 1.001.5.5 0 0 1 0-1"
    />
  </svg>
);
export default SvgAngle;
