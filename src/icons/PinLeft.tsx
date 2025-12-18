import type { SVGProps } from "react";

const SvgPinLeft = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M5.124 7.748a.45.45 0 0 1 0-.496l.058-.07 3.25-3.25a.45.45 0 0 1 .637.636L6.587 7.05H14.5a.45.45 0 0 1 0 .9H6.587L9.07 10.43l.057.07a.451.451 0 0 1-.624.625l-.07-.058-3.25-3.25zM2.05 1.5a.45.45 0 0 1 .9 0v12a.45.45 0 0 1-.9 0z"
    />
  </svg>
);
export default SvgPinLeft;
