import type { SVGProps } from "react";

const SvgText = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="m11.58 2.057.01.002h.001l.016.005q.026.006.051.015l.037.017q.015.006.029.014l.01.005.015.011a.45.45 0 0 1 .201.374v2a.45.45 0 0 1-.9 0V2.95h-3v9.1h1.204a.45.45 0 0 1 .09.89l-.09.01h-3.5l-.09-.01a.45.45 0 0 1 0-.88l.09-.01H6.95v-9.1h-3V4.5a.45.45 0 0 1-.9 0v-2q0-.082.028-.155l.004-.014q.009-.018.019-.036l.02-.037.022-.03.017-.023.022-.023.014-.013.038-.031.028-.019.039-.021.034-.017q.024-.008.048-.014l.031-.01A.5.5 0 0 1 3.5 2.05h8z"
    />
  </svg>
);
export default SvgText;
