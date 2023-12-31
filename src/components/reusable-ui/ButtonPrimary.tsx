interface ButtonPrimaryProps {
  label: string;
  version: string;
  onClick?: () => void;
}

function ButtonPrimary({
  label,
  version = 'default',
  onClick,
}: ButtonPrimaryProps) {
  const versionsStyles: Record<string, string> = {
    default:
      'bg-purple-pri text-white-pri active:bg-purple-pri hover:bg-purple-sec',
    white:
      'bg-white-pri border-purple-pri text-purple-pri hover:bg-purple-sec active:bg-white-pri',
  };
  const style = versionsStyles[version] || versionsStyles.default;
  return (
    <button
      type="submit"
      className={`${style} rounded-lg border transition font-bold w-full h-12 `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default ButtonPrimary;
