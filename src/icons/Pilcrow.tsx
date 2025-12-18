import type { SVGProps } from "react";

const SvgPilcrow = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      fillRule="evenodd"
      d="M3 5.5C3 7.983 4.992 9 7 9v3.5a.5.5 0 0 0 1 0V3.1h1v9.4a.5.5 0 0 0 1 0V3.1h1.5l.111-.01a.55.55 0 0 0 0-1.08L11.5 2H7C4.992 2 3 3.017 3 5.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPilcrow;
