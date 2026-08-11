type ArrowUpRightProps = {
  className?: string;
};

export default function ArrowUpRight({ className }: ArrowUpRightProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
