import type { SVGProps } from "react";

const SvgStopwatch = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M9 0a.5.5 0 0 1 0 1H8v1.121a6.36 6.36 0 0 1 2.993 1.017 1 1 0 0 1 .065-.08l.469.47.003.001-.03-.029-.442-.441.8-.801a.626.626 0 0 1 .885.885l-.777.775A6.4 6.4 0 1 1 7 2.121V1H6a.5.5 0 1 1 0-1zM7.5 3.1a5.401 5.401 0 1 0 .002 10.802A5.401 5.401 0 0 0 7.5 3.1m0 .9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5"
    />
  </svg>
);
export default SvgStopwatch;
