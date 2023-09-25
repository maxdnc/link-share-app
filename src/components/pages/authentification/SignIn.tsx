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
  passwordConfirm: string;
}

function SignIn() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    passwordConfirm: '',
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
          title="Create Account"
          description="Let's get you started sharing your links!"
        />
        <CustomInput
          label="Email Address"
          type="email"
          placeholder="e.g. maxime@email.com"
          id="email-new-user"
          version="default"
          icon={<HiOutlineMail />}
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <CustomInput
          label="Create Password"
          type="text"
          placeholder="At least 8 characters"
          id="password-new-user"
          version="default"
          icon={<RiLockPasswordFill />}
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <CustomInput
          label="Confirm Password"
          type="text"
          placeholder="Write the same password"
          id="confirm-password-new-user"
          version="default"
          icon={<RiLockPasswordFill />}
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.password}
        />
        <ButtonPrimary label="Create new account" />
        <HintLinkMessage
          message="Already have an account ?"
          link="/login"
          label="Login"
        />
      </form>
    </main>
  );
}
export default SignIn;
