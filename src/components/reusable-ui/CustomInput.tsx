interface CustomInputProps {
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  id: string;
}

function CustomInput({ label, icon = '', placeholder, id }: CustomInputProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2 w-full">
      <span className="text-xs text-dark-grey font-light">{label}</span>

      <div className="relative">
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          className="gap-4 border-border-pri border rounded-lg w-full h-12 pl-11 placeholder:text-dark-grey/50 hover:border-purple-pri hover:shadow-purple-pri/20 hover:shadow-lg transition"
        />
        {icon && (
          <div className="absolute left-4 bottom-1/2 text-light-grey text-base translate-y-[55%]">
            {icon}
          </div>
        )}
      </div>
    </label>
  );
}

export default CustomInput;
