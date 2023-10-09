interface ButtonPrimaryProps {
  label: string;
  version: string;
}

function ButtonPrimary({ label, version = 'default' }: ButtonPrimaryProps) {
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
    >
      {label}
    </button>
  );
}
export default ButtonPrimary;
