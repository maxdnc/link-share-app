// component
import ButtonPrimary from '../../reusable-ui/ButtonPrimary';
import CustomInput from '../../reusable-ui/CustomInput';

function Details() {
  const handleChange = () => {};
  return (
    <div>
      {' '}
      <div className="flex flex-col gap-2 mb-12">
        <h1 className="text-dark-grey  text-2xl font-bold">Profile Details</h1>
        <p className="text-light-grey">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <form className="flex flex-col gap-4">
        <CustomInput
          label="First Name*"
          icon={null}
          placeholder="e.g. Maxime"
          id="first-name"
          version="noIcon"
          type="text"
          value=""
          name="first-name"
          onChange={handleChange}
        />
        <CustomInput
          label="Last Name*"
          icon={null}
          placeholder="e.g. Danic"
          id="last-name"
          version="noIcon"
          type="text"
          value=""
          name="last-name"
          onChange={handleChange}
        />
        <CustomInput
          label="Email"
          icon={null}
          placeholder="e.g. maxime.danic@gmail.com"
          id="email"
          version="noIcon"
          type="text"
          value=""
          name="email"
          onChange={handleChange}
        />
        <hr className="text-light-grey mt-4" />
        <ButtonPrimary label="Save" version="default" />
      </form>
    </div>
  );
}
export default Details;
