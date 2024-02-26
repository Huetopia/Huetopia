import stefanImage from "../images/stefan.png";
import erikImage from "../images/erik.png";
import laiaImage from "../images/laia.jpg";

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex-grow flex flex-col m-auto w-full">
      <h1 className=" text-2xl font-bold my-6">About this project:</h1>{" "}
      <p>
        Huetopia, a React-powered web-app crafted during our Ironhack Web
        Development Bootcamp, unlocks the power of color. Harnessing advanced
        AI, it transforms your words into vibrant color palettes. Unleash your
        imagination with Huetopia! Explore the codebase on{" "}
        <a
          href="https://github.com/Huetopia"
          className="hover:border-b-2 italic"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>
      <br />
      <div className="font-bold ">Team behind the magic:</div>
      <div className="flex items-start flex-col my-6 ">
        <div className="my-6 flex justify-center">
          <div className="avatar">
            <div className="h-24 md:shrink-0 rounded-full ">
              <img src={laiaImage} />
            </div>
          </div>
          <div className="flex flex-col items-start  ml-4">
            <h2 className="font-bold ml-3">Laia Navalón</h2>
            <div className="ml-3">
              Former fashion designer changing career paths but forever a colour
              theory enthusiast
            </div>
            <div className="flex ">
              <a href="https://github.com/feelikeadoll" target="_blank">
                <button className="btn btn-sm bg-github text-white m-3">
                  GitHub
                </button>
              </a>
              <a
                href="https://es.linkedin.com/in/laia-navalon-arxe-763b2353" target="_blank"
              >
                <button className="btn btn-sm text-white bg-linkedIn  m-3" >
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className=" my-6 flex justify-center ">
          <div className="avatar">
            <div className="h-24 rounded-full  ">
              <img src={stefanImage} />
            </div>
          </div>

          <div className="flex flex-col items-start  ml-4 ">
            <h2 className="font-bold ml-3">Stefan Kummerlöw</h2>

            <div className="ml-3">UI Designer with a lot of passion for AI</div>
            <div className="flex ">
              <a href="https://github.com/gummiz" target="_blank">
                <button className="btn btn-sm bg-github text-white m-3">
                  GitHub
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/stefankummerloew/" target="_blank"
              >
                <button className="btn btn-sm text-white bg-linkedIn m-3">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className=" my-6 flex justify-center ">
          <div className="avatar">
            <div className="h-24 rounded-full ">
              <img src={erikImage} />
            </div>
          </div>
          <div className="flex flex-col items-start ml-4">
            <h2 className="font-bold ml-3">Erik Busch</h2>

            <div className="ml-3">
              Aspiring software developer with a passion for yoga and riding
              single speed bikes
            </div>
            <div className="flex ">
              <a href="https://github.com/EazyErik" target="_blank">
                <button className="btn btn-sm bg-github text-white m-3">
                  GitHub
                </button>
              </a>
              <a href="https://www.linkedin.com/in/erik-busch-fullstack-development/" target="_blank">
                <button className="btn btn-sm text-white bg-linkedIn  m-3">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
