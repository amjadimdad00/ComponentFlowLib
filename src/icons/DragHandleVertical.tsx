import type { SVGProps } from "react";

const SvgDragHandleVertical = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M10.109 2.419a.4.4 0 0 1 .783 0l.009.08v10a.401.401 0 0 1-.801 0v-10zm-2 0a.4.4 0 0 1 .783 0l.009.08v10a.401.401 0 0 1-.801 0v-10zm-2 0a.4.4 0 0 1 .783 0l.009.08v10a.401.401 0 0 1-.801 0v-10zm-2 0a.4.4 0 0 1 .783 0l.009.08v10a.401.401 0 0 1-.801 0v-10z"
    />
  </svg>
);
export default SvgDragHandleVertical;
