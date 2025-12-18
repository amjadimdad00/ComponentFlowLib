import type { SVGProps } from "react";

const SvgChevronUp = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M11.158 8.865a.5.5 0 0 0 .684-.73l-4-3.75a.5.5 0 0 0-.684 0l-4 3.75-.066.077a.5.5 0 0 0 .67.715l.08-.062L7.5 5.436z"
    />
  </svg>
);
export default SvgChevronUp;
