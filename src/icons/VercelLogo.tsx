import type { SVGProps } from "react";

const SvgVercelLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M14.4 13H.6L7.5 1zM2.328 12h10.343L7.5 3.005z"
    />
  </svg>
);
export default SvgVercelLogo;
