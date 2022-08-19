const LightningBoltIcon = ({ width, height, strokeColor }) => {

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      stroke={strokeColor}
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

};

export default LightningBoltIcon;