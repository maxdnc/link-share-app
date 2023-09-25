import { ChangeEvent } from 'react';

interface CustomInputProps {
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  id: string;
  version: 'default' | 'variant1' | 'variant2';
  type: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({
  label,
  icon,
  placeholder,
  id,
  version = 'default',
  type,
  value,
  name,
  onChange,
}: CustomInputProps) {
  const versionsStyles: Record<string, string> = {
    default:
      'transition border-border-pri border rounded-lg w-full h-12 pl-11 placeholder:truncate placeholder:text-dark-grey/50 hover:border-purple-pri hover:shadow-purple-pri/20 hover:shadow-lg focus:shadow-purple-pri/20 focus:shadow-lg focus:outline-purple-pri caret-purple-pri',
    variant1:
      'border-border-pri border rounded-lg w-full h-12 pl-11 placeholder:text-dark-grey/50 hover:border-red-pri hover:shadow-purple-pri/20 hover:shadow-lg transition',

    variant2: '...',
  };
  const style = versionsStyles[version] || versionsStyles.default;

  return (
    <label htmlFor={id} className="flex flex-col gap-2 w-full">
      <span className="text-xs text-dark-grey font-light ">{label}</span>

      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={style}
          value={value}
          onChange={onChange}
          name={name}
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
