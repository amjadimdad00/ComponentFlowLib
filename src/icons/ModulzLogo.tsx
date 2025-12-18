import type { SVGProps } from "react";

const SvgModulzLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M3.889 11.833 1 14V9.667zM14 14l-2.889-2.167L14 9.667zM3.889 11.111 1 8.944l2.889-2.167zM14 8.944l-2.889 2.167V6.777zM3.889 6.056 1 8.223V3.889zm3.37 2.167L4.37 6.056 7.26 3.889zm3.37-2.167L7.742 8.223V3.889zM14 8.223l-2.889-2.167L14 3.889zM3.889 5.333 1 3.167 3.889 1zm3.37-2.166L4.37 5.333V1zm3.37 2.166L7.742 3.167 10.63 1zM14 3.167l-2.889 2.166V1z"
    />
  </svg>
);
export default SvgModulzLogo;
