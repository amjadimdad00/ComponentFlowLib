import type { SVGProps } from "react";

const SvgMinimize = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M6.5 8.05a.45.45 0 0 1 .45.45v4a.45.45 0 0 1-.9 0V9.584l-3.732 3.733a.45.45 0 1 1-.636-.636l3.731-3.731L2.5 8.95a.449.449 0 1 1 0-.9zm6.182-6.368a.45.45 0 0 1 .637.636L9.586 6.05H12.5a.45.45 0 0 1 0 .9h-4l-.09-.01a.45.45 0 0 1-.36-.44v-4a.45.45 0 0 1 .9 0v2.914z"
    />
  </svg>
);
export default SvgMinimize;
