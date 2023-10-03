// react-router
import { Link } from 'react-router-dom';

interface HintLinkMessageProps {
  message: string;
  link: string;
  label: string;
}

function HintLinkMessage({ link, label, message }: HintLinkMessageProps) {
  return (
    <p className="flex flex-col justify-center items-center text-light-grey">
      {message}
      <Link to={link} className=" text-purple-pri hover:underline transition">
        {label}
      </Link>
    </p>
  );
}
export default HintLinkMessage;
