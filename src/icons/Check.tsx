import type { SVGProps } from "react";

const SvgCheck = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M10.602 3.908a.626.626 0 0 1 1.046.684l-4.25 6.5a.626.626 0 0 1-.944.12l-2.75-2.5-.084-.094a.626.626 0 0 1 .823-.906l.103.075 2.207 2.006z"
    />
  </svg>
);
export default SvgCheck;
