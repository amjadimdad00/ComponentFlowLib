import type { SVGProps } from "react";

const SvgAlignBaseline = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M14.58 13.108a.4.4 0 0 1 0 .784l-.08.008H.5a.4.4 0 0 1 0-.8h14zM7.97 10.74a.5.5 0 0 1-.94-.339zM10.5 1.75a.5.5 0 0 1 .47.33l3 8.32a.5.5 0 0 1-.94.34l-.983-2.724H8.953l-.982 2.723-.471-.17-.47-.169 3-8.32.031-.071a.5.5 0 0 1 .439-.259m-8 .35c.22 0 .4.18.4.4v7.033l1.317-1.316a.401.401 0 0 1 .566.566l-2 2a.4.4 0 0 1-.566 0l-2-2-.051-.063a.4.4 0 0 1 .554-.554l.063.05L2.1 9.534V2.5c0-.22.18-.4.4-.4m6.759 5.066h2.482L10.5 3.725z"
    />
  </svg>
);
export default SvgAlignBaseline;
