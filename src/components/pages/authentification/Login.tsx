// react
import { ChangeEvent, useState } from 'react';

// react-router
import { Link } from 'react-router-dom';

// icons
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';

// assets
import DevLinkLogo from '../../../assets/logo/devlink-logo.svg';

// components
import CustomInput from '../../reusable-ui/CustomInput';
import InstructionMessage from './InstructionMessage';

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
    <main className="p-8 ">
      <img src={DevLinkLogo} alt="devlink logo" className="mx-auto" />
      <InstructionMessage
        title="Login"
        description=" Add your details below to get back into the app"
      />
      <form className="flex flex-col items-center max-w-md gap-8">
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
        <button type="submit">Login</button>
      </form>

      <p>
        no account ?{' '}
        <Link to="/signup" className="underline text-blue-500">
          {' '}
          Create account
        </Link>
      </p>
    </main>
  );
}
export default Login;
