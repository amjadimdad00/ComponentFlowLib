import type { SVGProps } from "react";

const SvgScissors = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M4.776 9.595a2.45 2.45 0 1 1-.552-.836l2.203-1.472.253-.907a1 1 0 0 1 .476-.604l3.074-1.711a10 10 0 0 1 3.819-1.207l.951-.1zM15 12.241l-.951-.101c-1.34-.141-2.64-.552-3.817-1.207L7.156 9.222l-.011-.008L8.81 8.1zM2.5 8.95a1.55 1.55 0 1 0 0 3.099 1.55 1.55 0 0 0 0-3.1m0-6.916a2.45 2.45 0 0 1 2.272 3.364l.965.646-.021.068-.153.55-.353.235-.996-.665A2.45 2.45 0 1 1 2.5 2.035m0 .9a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1"
    />
  </svg>
);
export default SvgScissors;
