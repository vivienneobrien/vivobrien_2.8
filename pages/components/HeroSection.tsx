import Image from "next/image";
import { HiArrowDown } from "react-icons/hi2";
import { Link } from "react-scroll";

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-10 md:flex-row md:space-x-4 md:text-left md:py-10">
        {/* md:py-52 */}
        {/* md:py-10 */}
        <div className="md:w-1/2 md:mt-2">
          <Image
            src="/assets/viv.jpg"
            alt="headshot"
            width={300}
            height={300}
            className="rounded-full shadow-2xl"
          />
        </div>

        <div className="md:w-1/2 md:mt-2">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I&#39;m Viv
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a Software Engineer based in Montreal, Canada. Learning how
            to self-publish my book "The Union Survives" and create content on
            YouTube. I have a special interest in product.
          </p>
          <Link
            to="projects"
            className={
              "text-neutral-100 font-semibold px-6 py-3 bg-orange-600 rounded shadow hover:bg-orange-700" // dark:text-neutral-100
            }
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};
