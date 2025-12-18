import type { SVGProps } from "react";

const SvgPinTop = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M7.252 4.124c.15-.099.346-.099.496 0l.07.058 3.25 3.25a.45.45 0 0 1-.636.637L7.95 5.587V13.5a.45.45 0 0 1-.9 0V5.587L4.569 8.07l-.07.057a.451.451 0 0 1-.625-.624l.058-.07 3.25-3.25zM13.5 1.05a.45.45 0 0 1 0 .9h-12a.45.45 0 0 1 0-.9z"
    />
  </svg>
);
export default SvgPinTop;
