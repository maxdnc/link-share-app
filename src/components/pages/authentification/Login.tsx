// assets
import DevLinkLogo from '../../../assets/logo/devlink-logo.svg';

// components
import CustomInput from '../../reusable-ui/CustomInput';
import InstructionMessage from './InstructionMessage';
import ButtonPrimary from '../../reusable-ui/ButtonPrimary';
import HintLinkMessage from './HintLinkMessage';

// Config
import inputConfig from './customInputsConfig';
import useAuthForm from '../../../hooks/useAuthForm';

function Login() {
  const { handleChange, handleLogin, formData, error, isLoading } =
    useAuthForm();
  const loginInputs = inputConfig.getLoginInputsConfig(formData);

  return (
    <main className="p-8 flex flex-col items-center justify-center ">
      <img src={DevLinkLogo} alt="devlink logo" className="self-start mb-16" />

      <form
        className="flex flex-col  max-w-md w-full gap-8 mx-auto"
        onSubmit={(event) => {
          handleLogin(event);
        }}
      >
        <InstructionMessage
          title="Login"
          description=" Add your details below to get back into the app"
        />

        {loginInputs.map(
          ({ id, label, type, placeholder, icon, name, value }) => {
            return (
              <CustomInput
                key={id}
                label={label}
                type={type}
                placeholder={placeholder}
                id={id}
                version="default"
                icon={icon}
                name={name}
                onChange={(event) => handleChange(name, event.target.value)}
                value={value}
              />
            );
          }
        )}
        {isLoading ? (
          <p className="text-blue-400 text-sm">Fetching data</p>
        ) : null}
        {error ? <p className="text-red-pri text-sm">{error}</p> : null}
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
