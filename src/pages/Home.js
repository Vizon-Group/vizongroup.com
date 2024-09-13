import ConnectWithUs from "../components/ConnectWithUs";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <header className="mb-36 w-full">
        <p className="text-3xl font-bold text-black text-center mt-4 mb-4">
          Vizon Group
        </p>
        <div className="bg-[url('/Vizonlogo.png')] bg-cover bg-center">
          <div className="flex flex-col gap-6 items-left justify-center w-2/5 pt-40 pb-40 pl-36">
            <div>
              <p className="text-1xl sm:text-2xl text-white">
                Revolutionizing the way we do consulting using Artificial
                Intelligence
              </p>
            </div>
            <div>
              <p className="font-bold text-white text-4xl sm:text-7xl">
                Innovative Information Technology Consulting
              </p>
            </div>
            <div>
              <button className="bg-white px-10 py-5  font-bold">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="mb-36 sm:mb-72 w-full">
        <h2 className="text-center text-4xl font-bold text-[#a68e86] pb-24">
          About Vizon
        </h2>
        <div className="mx-auto max-w-5xl w-full grid grid-cols-1 gap-8 sm:grid-cols-2 text-center">
          <div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="story"
              />
            </div>
            <div>
              <h4 className="text-2xl mt-6 mb-6">Our Story</h4>
              <p className="text-lg leading-loose">
                Vizon is a Canadian software consulting firm established in
                2024. Our founders, Rex and Zoe, envisioned a future where
                various businesses seamlessly integrate artificial intelligence
                into their business operations. Fueled by a passion for
                problem-solving and cutting-edge technologies, they determine to
                start a career by implementing AI related techniques in the
                field of overseas education.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="team"
              />
            </div>
            <div>
              <h4 className="text-2xl mt-6 mb-6">Our Team</h4>
              <p className="text-lg leading-loose">
                Our team comprises seasoned professionals dedicated to
                excellence, with co-founders Rex and Zoe at the helm. Rex,
                leveraging years of software development expertise, excels in
                crafting advanced web and mobile applications, ensuring robust
                and scalable solutions for our clients. Zoe, a project engineer
                and MBA graduate, specializing in regulatory compliance,
                guidelines, and project management.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center text-4xl font-bold text-[#a68e86] pb-24">
          Our Products and Services
        </h2>
        <div className="px-3 grid grid-cols-1 sm:grid-cols-3 gap-7 max-w-6xl mx-auto sm:px-0 ">
          <div className="col-span-1">
            <img
              src="/Vizonlogo.png"
              alt="logo"
              style={{ maxWidth: '400px' }}
              className="w-full"
            />
          </div>
          <div className="col-span-2">
            <h4 className="text-2xl  mb-6">Digital Transformation</h4>
            <p className="text-lg leading-loose mb-8">
              We aim to develop an app to automate and scale oversea education
              related operations through the implementation of artificial
              intelligence. Meanwhile, we assists our clients in other
              industries to achieve digital transformation by leveraging new
              technologies such as artificial intelligence, big data analytics,
              and algorithm optimization to enhance business efficiency and
              innovation.
            </p>
            <h4 className="text-2xl  mb-8">Custom Software Development</h4>
            <p className="text-lg leading-loose ">
              Developing customized software applications (i.e. Apps, websites)
              according to the specific needs of our clients, tailored to meet
              their unique business requirements. Our services including, but
              not limited to:
            </p>
            <ul className="list-disc text-lg leading-loose pl-4 mb-8">
              <li>UI design</li>
              <li> Front-end and back-end development</li>
              <li>Server deployment</li>
              <li>Software launch</li>
              <li> Operational maintenance</li>
            </ul>
            <h4 className="text-2xl  mb-8">Technical Consulting</h4>
            <p className="text-lg leading-loose mb-8">
              Providing professional advice on the latest technology trends,
              best practices, and solutions.
            </p>
            <h4 className="text-2xl  mb-8">Employee Training</h4>
            <p className="text-lg leading-loose">
              Offering training to new graduates or clients' employees to ensure
              they can effectively utilize newly implemented technologies and
              systems. Training contents including, but not limited to:
            </p>
            <ul className="list-disc text-lg leading-loose pl-4 mb-8">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js, Nnode.JS</li>
              <li>Flutter, Java, C++</li>
            </ul>
          </div>
        </div>
      </section>
      <ConnectWithUs />
      <Footer />
    </>
  );
}
export default Home;
