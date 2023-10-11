// icon
import { RiImageAddLine } from 'react-icons/ri';

function ImageUploader() {
  return (
    <label htmlFor="image" className="flex flex-col gap-4 items-center mb-8">
      <span className="text-light-grey">Profil Picture</span>

      <div className="h-48 w-48 bg-purple-ter flex flex-col items-center justify-center gap-2 rounded-xl cursor-pointer">
        <input
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg, image/jpg"
          className="hidden cursor-pointer"
        />
        <RiImageAddLine className="text-purple-pri text-3xl" />
        <span className="text-purple-pri font-bold">Upload Image</span>
      </div>
      <p className="text-light-grey text-xs">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </label>
  );
}
export default ImageUploader;
