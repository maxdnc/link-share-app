// react router
import { Link } from 'react-router-dom';
// components
import ButtonPrimary from '../../reusable-ui/ButtonPrimary';
// assets
import SmartPhone from '../../../assets/logo/smartphone.svg';

function Links() {
  return (
    <div>
      {' '}
      <div className="flex flex-col gap-2 mb-12">
        <h1 className="text-dark-grey  text-2xl font-bold">
          Customize your links
        </h1>
        <p className="text-light-grey">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <ButtonPrimary label="+ Add new link" version="white" />
      <div className="flex flex-col items-center gap-4">
        <img
          src={SmartPhone}
          alt="illustration user using smartphone"
          className="w-[125px] h-auto mb-4 mt-16"
        />
        <h2 className="text-dark-grey  text-2xl font-bold">
          Let's get you started
        </h2>
        <p className="text-light-grey text-center max-w-[255px]">
          Use the "Add new link" button to get started. Once you have more than
          one link, you can reorder and edit them. We're here to help you share
          your profiles with everyone!
        </p>
      </div>
      <hr className="text-light-grey my-8" />
      <ButtonPrimary label="Save" version="default" />
      <p>
        Please login{' '}
        <Link to="/login" className="text-blue-400 underline">
          here
        </Link>{' '}
      </p>
    </div>
  );
}
export default Links;
