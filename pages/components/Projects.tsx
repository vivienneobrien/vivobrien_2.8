import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "The Union Survives",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/assets/the_union_survives.JPG",
    github: "",
    link: "",
  },
  {
    name: "Behind The Screen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/assets/behind_the_screen.JPG",
    github: "",
    link: "",
  },
  {
    name: "Arcadia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/assets/arcadia.jpg",
    github: "",
    link: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-16 md:pb-40">
        <h1 className="text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-28">
          {projects.map((item, id) => (
            <div key={id}>
              <div className="flex flex-col md:flex-row md:space-x-12 items-center">
                <div className="mt-8 md:w-1/2">
                  <Link href={item.github} target="_blacnk">
                    <Image
                      src={item.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{item.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600">
                    {item.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={item.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointed"
                      />
                    </Link>
                    <Link href={item.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointed"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
