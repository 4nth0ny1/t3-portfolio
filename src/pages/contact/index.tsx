import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex h-screen flex-row justify-center">
      <div className="gap-42 mt-20 flex h-[500px] w-full flex-row justify-between ">
        <div className="flex w-1/2 flex-row items-center justify-center text-white">
          <div className="text-xl">
            <h2 className="text-3xl">Contact Me Here</h2>
            <p>For Business Inquires</p>
            <p>Please fill out the form ...</p>
          </div>
        </div>
        <div className="w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
