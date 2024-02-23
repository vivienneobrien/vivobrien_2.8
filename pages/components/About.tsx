import Lottie from "react-lottie";
import vivAnimation from "../../public/assets/viv_animation.json";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Javascript" },
  { skill: "React.js" },
  { skill: "Typescript" },
  { skill: "Next.js" },
  { skill: "Storybook.js" },
  { skill: "TailwindCSS" },
  { skill: "NodeJS" },
  { skill: "MongoDB" },
  { skill: "PostGreSQL" },
  { skill: "Git" },
  { skill: "Jest" },
  { skill: "Cypress" },
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: vivAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-40">
        <h1 className="text-center font-bold text-4xl">
          🚀 About me
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center md:flex-row md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Work Experience
            </h1>
            <p>
              Hi, my name is Viv and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,{" "}
              <span className="font-bold">{"self-motivated"}</span>, and{" "}
              <span className="font-bold">{"driven"}</span> software engineer
              based in Montreal, Canada.
            </p>
            <br />
            <p>
              I graduated from my MSc Computer Science in 2019 with a focus on
              Machine Learning. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, id) => {
                return (
                  <p
                    key={id}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
