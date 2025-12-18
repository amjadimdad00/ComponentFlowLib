import type { SVGProps } from "react";

const SvgSpaceEvenlyHorizontally = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M1 13.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0zM7 8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm6 0a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm2 5.5a.5.5 0 0 1-1 0v-12a.5.5 0 1 1 1 0z"
    />
  </svg>
);
export default SvgSpaceEvenlyHorizontally;
