//  icon
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';

interface ValueLogin {
  email: string;
  password: string;
}
interface ValueSignIn {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface InputConfig {
  type: 'text' | 'email';
  label: string;
  placeholder: string;
  id: string;
  icon: React.ReactNode;
  name: string;
  value: string;
}

const getLoginInputsConfig = (formData: ValueLogin): InputConfig[] => [
  {
    type: 'email',
    label: 'Email Addres',
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

const getSignInInputsConfig = (formData: ValueSignIn): InputConfig[] => [
  {
    type: 'email',
    label: 'Email address',
    placeholder: 'e.g. maxime@email.com',
    id: 'email-new-user',
    icon: <HiOutlineMail />,
    name: 'email',
    value: formData.email,
  },
  {
    type: 'text',
    label: 'Create Password',
    placeholder: 'At least 8 characters',
    id: 'password-new-user',
    icon: <RiLockPasswordFill />,
    name: 'password',
    value: formData.password,
  },
  {
    type: 'text',
    label: 'Confirm Password',
    placeholder: 'Write the same password',
    id: 'confirm-password-new-user',
    icon: <RiLockPasswordFill />,
    name: 'passwordConfirm',
    value: formData.passwordConfirm,
  },
];

export default {
  getLoginInputsConfig,
  getSignInInputsConfig,
};
