import type { SVGProps } from "react";

const SvgOpenInNewWindow = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M8.5 6q.049 0 .098.009.076.017.142.054.061.034.114.083.05.052.082.113A.5.5 0 0 1 9 6.5v3a.5.5 0 0 1-1 0V7.707l-5.146 5.147a.5.5 0 1 1-.708-.707L7.293 7H5.5a.5.5 0 0 1 0-1zM12 2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H8.5a.5.5 0 0 1 0-1H12V3H3v3.5a.5.5 0 0 1-1 0V3a1 1 0 0 1 1-1z"
    />
  </svg>
);
export default SvgOpenInNewWindow;
