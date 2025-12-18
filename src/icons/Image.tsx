import type { SVGProps } from "react";

const SvgImage = (props: SVGProps<SVGSVGElement>): JSX.Element => (
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
      d="M12.5 1A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10a1.5 1.5 0 0 1-1.492-1.347L1 12.5v-10A1.5 1.5 0 0 1 2.5 1zM2 9.636V12.5l.01.1c.04.196.194.35.39.39l.1.01h6.441l-1.413-1.56v-.002l-3.54-3.79zm6.483 1.516L10.155 13H12.5l.1-.01a.5.5 0 0 0 .39-.39l.01-.1v-1.863l-2-2zM2.4 2.01A.5.5 0 0 0 2 2.5v5.863l1.682-1.681.07-.057a.45.45 0 0 1 .577.068l3.544 3.796 2.809-2.807.07-.058a.45.45 0 0 1 .566.058L13 9.363V2.5a.5.5 0 0 0-.4-.49L12.5 2h-10zM7.5 3.749a1.751 1.751 0 1 1 0 3.502 1.751 1.751 0 0 1 0-3.502m0 .9a.85.85 0 1 0 0 1.701.85.85 0 0 0 0-1.7"
    />
  </svg>
);
export default SvgImage;
