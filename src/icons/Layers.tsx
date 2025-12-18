import type { SVGProps } from "react";

const SvgLayers = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M12.838 10.277a.5.5 0 0 1 .498.843l-.082.06-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25-.082-.06a.5.5 0 0 1 .498-.843l.092.042 5.246 3.1 5.246-3.1zm0-3a.5.5 0 0 1 .498.843l-.082.06-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25-.082-.06a.5.5 0 0 1 .498-.843l.092.042 5.246 3.1 5.246-3.1zM7.306.79a.5.5 0 0 1 .448.03l5.5 3.25a.5.5 0 0 1 0 .862l-5.5 3.25a.5.5 0 0 1-.508 0l-5.5-3.25a.5.5 0 0 1 0-.862l5.5-3.25zM2.982 4.5 7.5 7.17 12.017 4.5 7.5 1.83z"
    />
  </svg>
);
export default SvgLayers;
