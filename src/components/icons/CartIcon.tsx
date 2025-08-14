// src/components/icons/CartIcon.tsx
import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export default function CartIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 28}
      height={props.height ?? 28}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="9" cy="21" r="1.75" />
      <circle cx="18" cy="21" r="1.75" />
      <path d="M2 3h2l2.4 12.5a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 7H6" />
    </svg>
  );
}
