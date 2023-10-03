interface ButtonPrimaryProps {
  label: string;
}

function ButtonPrimary({ label }: ButtonPrimaryProps) {
  return (
    <button
      type="submit"
      className="bg-purple-pri text-white-pri font-bold w-full h-12 rounded-lg border  active:bg-purple-pri  transition hover:bg-purple-sec"
    >
      {label}
    </button>
  );
}
export default ButtonPrimary;
