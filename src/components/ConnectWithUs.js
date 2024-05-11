import { useState } from "react";

function ConnectWithUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // retrive name, email, and message from the form as an object
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
  };
  const [emailValid, setEmailValid] = useState(true);

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === "email") {
      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(inputValue);
      setEmailValid(isValidEmail);
    }
  };

  return (
    <>
      <section className="py-20">
        <h2 className="text-center text-4xl font-bold text-[#a68e86] pb-24">
          Connect With Us
        </h2>
        <div className="flex pl-24 pr-24">
          <div className="w-[50%]">
            <div className="pl-6 pr-6">
              <form onSubmit={handleSubmit}>
                <h4 className="text-2xl mt-6 mb-6">General Inquiries</h4>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="mt-6 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none sm:text-sm"
                  />
                </div>
                <div>
                  <div className="mt-1"></div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    required
                    className="mt-6 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none sm:text-sm"
                    onBlur={handleInputChange}
                  />
                  {!emailValid && (
                    <p className="text-xs text-red-500">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="mt-6 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none sm:text-sm"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-2 font-bold mt-6"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="pl-6 pr-6">
              <h4 className="text-2xl mt-6 mb-6">
                Revolutionizing the way we do consulting using Artificial
                Intelligence
              </h4>
              <p className="text-lg leading-loose">
                Our Mission is facilitating every individual and organization to
                achieve their aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ConnectWithUs;
