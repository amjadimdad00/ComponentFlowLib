import type { SVGProps } from "react";

const SvgCaretSort = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M4.932 8.932a.45.45 0 0 1 .637 0L7.5 10.863l1.932-1.931.07-.058a.45.45 0 0 1 .624.624l-.057.07-2.25 2.25-.07.058a.45.45 0 0 1-.567-.057l-2.25-2.25a.45.45 0 0 1 0-.637M7.5 3.05a.45.45 0 0 1 .319.132l2.25 2.25a.45.45 0 0 1-.637.637L7.5 4.137 5.57 6.069l-.07.057a.451.451 0 0 1-.625-.624l.058-.07 2.25-2.25A.45.45 0 0 1 7.5 3.05"
    />
  </svg>
);
export default SvgCaretSort;
