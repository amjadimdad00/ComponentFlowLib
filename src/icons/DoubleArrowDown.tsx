import type { SVGProps } from "react";

const SvgDoubleArrowDown = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M11.225 8.082a.5.5 0 0 1 .693.694l-.064.078-4 4a.5.5 0 0 1-.707 0l-4-4-.065-.078a.5.5 0 0 1 .694-.694l.078.065L7.5 11.793l3.647-3.646zm0-6a.5.5 0 0 1 .693.694l-.064.078-4 4a.5.5 0 0 1-.707 0l-4-4-.065-.078a.5.5 0 0 1 .694-.694l.078.065L7.5 5.793l3.647-3.646z"
    />
  </svg>
);
export default SvgDoubleArrowDown;
