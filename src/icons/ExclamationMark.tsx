import type { SVGProps } from "react";

const SvgExclamationMark = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M7.5 10.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-.017-8.5c.518 0 .931.43.911.948l-.188 5.607a.704.704 0 0 1-1.406 0L6.57 3.198a.91.91 0 0 1 .912-.948"
    />
  </svg>
);
export default SvgExclamationMark;
