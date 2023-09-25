// react
import { ChangeEvent, useState } from 'react';

// icons
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';

// assets
import DevLinkLogo from '../../../assets/logo/devlink-logo.svg';

// components
import CustomInput from '../../reusable-ui/CustomInput';
import InstructionMessage from './InstructionMessage';
import ButtonPrimary from '../../reusable-ui/ButtonPrimary';
import HintLinkMessage from './HintLinkMessage';

interface FormData {
  email: string;
  password: string;
}

function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <main className="p-8 flex flex-col items-center justify-center ">
      <img src={DevLinkLogo} alt="devlink logo" className="self-start mb-16" />

      <form className="flex flex-col  max-w-md w-full gap-8 mx-auto">
        <InstructionMessage
          title="Login"
          description=" Add your details below to get back into the app"
        />
        <CustomInput
          label="Email Address"
          type="email"
          placeholder="e.g. maxime@email.com"
          id="email-user"
          version="default"
          icon={<HiOutlineMail />}
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <CustomInput
          label="Password"
          type="text"
          placeholder="Enter your password"
          id="password-user"
          version="default"
          icon={<RiLockPasswordFill />}
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <ButtonPrimary label="Login" />
        <HintLinkMessage
          message="Don't have an account ?"
          link="/signin"
          label="Create account"
        />
      </form>
    </main>
  );
}
export default Login;
