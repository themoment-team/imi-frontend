type Props = {
  width: string;
  height: string;
  className?: string;
  onClick?: () => void;
};

const BackBtn = ({ width, height, className, onClick }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <path
        d="M10.5 13L5.5 8L10.5 3"
        stroke="#A0A3A8"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackBtn;
