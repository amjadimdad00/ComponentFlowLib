import type { SVGProps } from "react";

const SvgArrowBottomRight = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M11.5 12a.5.5 0 0 0 .5-.5V6l-.01-.102a.5.5 0 0 0-.98.001L11 6v4.293L4.353 3.646a.5.5 0 0 0-.707.708L10.293 11H6a.5.5 0 0 0 0 1z"
    />
  </svg>
);
export default SvgArrowBottomRight;
