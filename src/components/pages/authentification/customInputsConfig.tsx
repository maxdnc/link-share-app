//  icon
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';

interface ValueLogin {
  email: string;
  password: string;
}

interface LoginInputConfig {
  type: string;
  label: string;
  placeholder: string;
  id: string;
  icon: React.ReactNode;
  name: string;
  value: string;
}

const getLoginInputsConfig = (formData: ValueLogin): LoginInputConfig[] => [
  {
    type: 'Email Addres',
    label: 'email',
    placeholder: 'e.g. maxime@email.com',
    id: 'email-user',
    icon: <HiOutlineMail />,
    name: 'email',
    value: formData.email,
  },
  {
    type: 'text',
    label: 'Password',
    placeholder: 'Enter your password',
    id: 'password-user',
    icon: <RiLockPasswordFill />,
    name: 'password',
    value: formData.password,
  },
];

export default getLoginInputsConfig;
