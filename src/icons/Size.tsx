import type { SVGProps } from "react";

const SvgSize = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M11.591 3.059c.205.042.36.224.36.441v4l-.01.091a.45.45 0 0 1-.882 0l-.009-.09V4.585L4.587 11.05l2.913.001.091.009a.45.45 0 0 1-.092.89H3.5a.45.45 0 0 1-.45-.45V7.5l.01-.09a.45.45 0 0 1 .882 0l.008.09v2.914l6.464-6.464H7.5a.45.45 0 0 1 0-.9h4z"
    />
  </svg>
);
export default SvgSize;
