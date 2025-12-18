import type { SVGProps } from "react";

const SvgFontSize = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M2.5 2.1c.106 0 .208.042.283.117l2 2 .05.064a.4.4 0 0 1-.05.503.4.4 0 0 1-.503.05l-.063-.05L2.9 3.467v8.067l1.317-1.317a.4.4 0 0 1 .566.566l-2 2a.4.4 0 0 1-.566 0l-2-2-.051-.063a.4.4 0 0 1 .554-.554l.063.051 1.316 1.316V3.467L.783 4.784a.401.401 0 0 1-.566-.567l2-2 .061-.05A.4.4 0 0 1 2.5 2.1m5.47 9.64a.501.501 0 0 1-.94-.34zm2.53-8.99a.5.5 0 0 1 .47.33l3 8.32a.5.5 0 0 1-.94.34l-.983-2.724H8.953l-.982 2.724-.471-.17-.47-.17 3-8.32.031-.07a.5.5 0 0 1 .439-.26M9.259 8.166h2.482L10.5 4.725z"
    />
  </svg>
);
export default SvgFontSize;
