import { useState } from "react";

function ConnectWithUs() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log("Name: ", name, "Email: ", email, "Message: ", message);
  };

  return (
    <>
      <section className="py-20">
        <h2 className="text-center text-4xl font-bold text-[#a68e86] pb-24">
          Connect With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-5xl mx-auto">
          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <h4 className="text-2xl">General Inquiries</h4>
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
          <div className="">
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
