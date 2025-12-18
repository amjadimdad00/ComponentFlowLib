import type { SVGProps } from "react";

const SvgPinRight = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M9.876 7.252c.099.15.099.346 0 .496l-.058.07-3.25 3.25a.45.45 0 0 1-.637-.636L8.413 7.95H.5a.45.45 0 0 1 0-.9h7.913L5.93 4.569l-.057-.07a.451.451 0 0 1 .624-.625l.07.058 3.25 3.25zM12.95 13.5a.45.45 0 0 1-.9 0v-12a.45.45 0 0 1 .9 0z"
    />
  </svg>
);
export default SvgPinRight;
