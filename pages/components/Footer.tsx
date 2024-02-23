import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="text-neutral-500">© 2024 Viv O'Brien</div>
        <div className="flex flex-row item-center justify-center space-x-2 mb-1">
          <a href="" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
          <a href="" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
          <a href="" rel="noreferrer" target="_blank">
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
