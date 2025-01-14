import { IoMdLaptop } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";


function Hero() {
  const heroDetails = [
    {
      id: 1,
      logo: <IoMdLaptop />,
      title: "RESPONSIVE LAYOUT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      id: 2,
      logo: <FaBootstrap />,
      title: "BOOTSTRAP 3.3.4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      id: 3,
      logo: <SiAffinitydesigner />,
      title: "CLEAN DESIGN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ];

  return (
    <>
      <div className="bg-hero bg-cover bg-center h-screen flex items-center justify-center px-4">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Lorem Landing Page
          </h1>
          <p className="text-white text-lg mt-4">
            This is a fully Responsive, Clean Design, Modern, and Flexible
            Software Landing Page for startups, businesses, and agencies. It is
            built with HTML5 & CSS3, Bootstrap 3.3.4, Font Awesome 4.3.0, and
            much more. Designed by templatemo. Images by Pixabay.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row p-10">
        {heroDetails.map((heroDetail) => (
          <div
            key={heroDetail.id}
            className="flex flex-col items-center gap-y-4 p-3"
          >
            <span className="text-9xl text-[#28a7e9]">{heroDetail.logo}</span>
            <h2 className="text-lg font-semibold">{heroDetail.title}</h2>
            <p className="text-center text-black">{heroDetail.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Hero;
