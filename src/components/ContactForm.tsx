export default function ContactForm() {
  return (
    <form className="rounded-xlp-10 mt-10 flex w-[600px] flex-col">
      <div className="flex flex-col pt-4">
        <input
          type="text"
          placeholder="Name"
          className=" input input-bordered mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered mb-4 w-full "
        />
        <input
          type="text"
          placeholder="Phone"
          className="input input-bordered mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Company"
          className="input input-bordered mb-4 w-full"
        />
        <textarea
          className="textarea textarea-bordered mb-4"
          placeholder="Reason for Contacting"
        ></textarea>
        <div className="flex flex-row justify-end">
          <button className="border border-white px-6 py-2 font-bold text-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
