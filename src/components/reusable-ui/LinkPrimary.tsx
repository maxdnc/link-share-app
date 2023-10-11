import { NavLink } from 'react-router-dom';

interface LinkPrimaryProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  version: string;
}

function LinkPrimary({ to, icon, label, version }: LinkPrimaryProps) {
  const getClassName = (isActive: boolean) => {
    const baseClass =
      'font-bold flex gap-4 rounded-lg items-center justify-center transition h-[42px]';

    if (isActive) {
      switch (version) {
        case 'default':
          return `text-purple-pri bg-purple-ter px-7  ${baseClass} `;
        case 'purple':
          return `text-xl border text-purple-pri border-purple-pri text-light-grey hover:text-purple-pri px-4  ${baseClass}`;

        default:
          return `text-purple-pri bg-purple-ter px-7  ${baseClass}`;
      }
    } else {
      switch (version) {
        case 'default':
          return `text-light-grey hover:text-purple-pri px-7  ${baseClass}`;
        case 'purple':
          return `border text-xl text-purple-pri border-purple-pri text-light-grey hover:text-purple-pri px-4  h-[42px] ${baseClass}`;

        default:
          return `text-light-grey hover:text-purple-pri px-7  ${baseClass}`;
      }
    }
  };
  return (
    <NavLink to={to} className={({ isActive }) => getClassName(isActive)}>
      {icon && <span>{icon}</span>}
      <span className="text-base hidden md:inline-block">{label}</span>
    </NavLink>
  );
}
export default LinkPrimary;
