import type { SVGProps } from "react";

const SvgListBullet = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M1.5 9.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m12.1.26a.5.5 0 0 1 0 .98l-.1.01h-9a.5.5 0 1 1 0-1h9zM1.5 6.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m12.1.26a.5.5 0 0 1 0 .98l-.1.01h-9a.5.5 0 0 1 0-1h9zM1.5 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m12.1.26a.5.5 0 0 1 0 .98l-.1.01h-9a.5.5 0 0 1 0-1h9z"
    />
  </svg>
);
export default SvgListBullet;
