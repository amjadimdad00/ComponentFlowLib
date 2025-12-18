import type { SVGProps } from "react";

const SvgTextAlignRight = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M12.5 10a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1z"
    />
  </svg>
);
export default SvgTextAlignRight;
