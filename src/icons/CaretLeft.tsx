import type { SVGProps } from "react";

const SvgCaretLeft = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M5.05 7.5c0 .12.047.234.132.318l3 3 .07.058a.451.451 0 0 0 .624-.624l-.058-.07L6.137 7.5l2.681-2.682a.45.45 0 0 0-.636-.636l-3 3a.45.45 0 0 0-.132.318"
    />
  </svg>
);
export default SvgCaretLeft;
