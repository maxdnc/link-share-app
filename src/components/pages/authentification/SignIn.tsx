// react
import { useEffect } from 'react';
// react router
import { useNavigate } from 'react-router-dom';
// hook
import useAuthForm from '../../../hooks/useAuthForm';
// assets
import DevLinkLogo from '../../../assets/logo/devlink-logo.svg';

// components
import CustomInput from '../../reusable-ui/CustomInput';
import InstructionMessage from './InstructionMessage';
import ButtonPrimary from '../../reusable-ui/ButtonPrimary';
import HintLinkMessage from './HintLinkMessage';
// Config
import inputConfig from './customInputsConfig';
// Utils
import errorUtils from '../../../utils/errorUtils';

function SignIn() {
  const {
    formData,
    error,
    isLoading,
    handleChange,
    handleSignIn,
    isUserConnected,
  } = useAuthForm();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserConnection = async () => {
      const userIsConnected = await isUserConnected();
      if (userIsConnected) {
        navigate('/');
      }
    };

    checkUserConnection();
  });

  const signInInputs = inputConfig.getSignInInputsConfig(formData);
  const getInputVersion = (fieldName: string): string => {
    return errorUtils.getInputVersion(fieldName, formData, error);
  };

  return (
    <main className="p-8 flex flex-col items-center justify-center ">
      <img src={DevLinkLogo} alt="devlink logo" className="self-start mb-16" />

      <form
        className="flex flex-col  max-w-md w-full gap-8 mx-auto"
        onSubmit={(event) => {
          handleSignIn(event);
        }}
      >
        <InstructionMessage
          title="Create Account"
          description="Let's get you started sharing your links!"
        />
        {signInInputs.map(
          ({ id, label, type, placeholder, icon, name, value }) => {
            return (
              <CustomInput
                key={id}
                label={label}
                type={type}
                placeholder={placeholder}
                id={id}
                version={getInputVersion(name)}
                icon={icon}
                name={name}
                onChange={(event) => handleChange(name, event.target.value)}
                value={value}
              />
            );
          }
        )}
        {isLoading ? (
          <p className="text-blue-400 text-sm">Creating your account</p>
        ) : null}

        {error ? <p className="text-red-pri text-sm">{error}</p> : null}
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
