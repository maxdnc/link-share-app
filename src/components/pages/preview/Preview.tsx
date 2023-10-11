import { Link } from 'react-router-dom';
import { RiImage2Line } from 'react-icons/ri';

function Preview() {
  return (
    <main className="py-4 px-6">
      <div className="flex gap-4 ">
        <Link
          to="/"
          className=" w-full border font-bold flex gap-4 rounded-lg items-center justify-center transition  text-purple-pri border-purple-pri  "
        >
          Back to Editor
        </Link>
        <button
          type="button"
          className={` bg-purple-pri text-white-pri active:bg-purple-pri hover:bg-purple-sec rounded-lg border transition font-bold w-full h-12 `}
        >
          Share Link
        </button>
      </div>

      <section className="flex items-center justify-center py-24">
        <div className="h-28 w-28 bg-purple-ter  rounded-full border-2 border-purple-sec flex flex-col items-center justify-center">
          <RiImage2Line className="text-4xl text-light-grey" />
          <span className="text-light-grey">No Image</span>
        </div>
      </section>
    </main>
  );
}
export default Preview;
