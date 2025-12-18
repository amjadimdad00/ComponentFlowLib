import type { SVGProps } from "react";

const SvgPencil1 = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M11.225 1.082a.5.5 0 0 1 .629.064l2 2 .064.079a.5.5 0 0 1-.064.629l-7.432 7.431a1 1 0 0 1-.228.171l-.086.041-3.41 1.463a.5.5 0 0 1-.658-.657l1.463-3.411.04-.086q.07-.126.172-.228l7.432-7.432zM4.422 9.285 3.78 10.78l.438.438 1.497-.64L12.793 3.5 11.5 2.207z"
    />
  </svg>
);
export default SvgPencil1;
