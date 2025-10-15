export const EmailIcon = ({
  className,
  fill,
  stroke,
}: {
  className: string;
  fill?: string;
  stroke?: string;
}) => (
  <svg
    className={className}
    data-slot="icon"
    fill={fill ?? "none"}
    strokeWidth={1.5}
    stroke={stroke ?? "currentColor"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);

export const CloseIcon = ({
  className,
  fill,
  stroke,
}: {
  className: string;
  fill?: string;
  stroke?: string;
}) => (
  <svg
    className={className}
    data-slot="icon"
    fill={fill ?? "none"}
    strokeWidth={1.5}
    stroke={stroke ?? "currentColor"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

export const HomeIcon = ({
  className,
  fill,
  stroke,
}: {
  className: string;
  fill?: string;
  stroke?: string;
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill={fill ?? "none"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={stroke ?? "white"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

export const CodeIcon = ({
  className,
  fill,
  stroke,
}: {
  className: string;
  fill?: string;
  stroke?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill ?? "currentColor"}
    className={className}
    strokeWidth={1.5}
    stroke={stroke ?? "black"}
  >
    <path
      fillRule="evenodd"
      d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
      clipRule="evenodd"
    />
  </svg>
);
