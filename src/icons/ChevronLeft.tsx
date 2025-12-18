import type { SVGProps } from "react";

const SvgChevronLeft = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M8.212 3.092a.5.5 0 0 1 .715.67l-.062.08L5.435 7.5l3.43 3.658.062.08a.501.501 0 0 1-.715.67l-.077-.066-3.75-4a.5.5 0 0 1 0-.684l3.75-4z"
    />
  </svg>
);
export default SvgChevronLeft;
