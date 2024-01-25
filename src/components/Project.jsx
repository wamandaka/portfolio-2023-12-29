// import landingPage from "../assets/landing-page.png";
// import prakiraanCuaca from "../assets/prakiraan-cuaca.jpg";
// import reverse from "../assets/reverse.png";
// import saasLP from "../assets/saas.png";
// import personalWebAyaka from "../assets/personal-web-ayaka.png";
import { IoLogoGithub } from "react-icons/io5";
import { TbBrandFigma } from "react-icons/tb";
// import { CiPen } from "react-icons/ci";

const Project = () => {
  return (
    <>
      <section id="project" className="w-full mx-auto px-4">
        <div className="flex flex-col pt-32 justify-center text-center gap-3 md:pt-28 md:mx-auto md:w-[60%]">
          <h1 className=" text-5xl font-bold md:text-6xl">Projects</h1>
          <p className=" text-xl font-bold md:text-2xl">
            Explore my latest projects showcased in the center of attention.
          </p>
        </div>
        <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:px-11 lg:grid-cols-3 lg:gap-8 lg:px-32">
          <a
            href="https://wamandaka.github.io/react-app-weatherapp/"
            target="_blank"
            rel="noreferrer"
            class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
          >
            <div class="rounded-[10px] bg-white p-4 pt-20 sm:p-6 relative md:pt-10">
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                {" "}
                6th Jun 2023{" "}
              </time>

              <a
                href="https://wamandaka.github.io/react-app-weatherapp/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 class="mt-0.5 text-lg font-medium text-gray-900 md:h-24">
                  Create a Weather App using ReactJS, TailwindCSS, Axios and
                  OpenWeather API
                </h3>
              </a>

              <div class="mt-4 flex flex-wrap gap-1">
                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  ReactJS
                </span>

                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  TailwindCSS
                </span>

                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Axios
                </span>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <a
                  href="https://github.com/wamandaka/weather-app-reactjs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoGithub size={30} />
                </a>
              </div>
            </div>
          </a>
          <a
            href="https://personal-website-ayaka.vercel.app"
            target="_blank"
            rel="noreferrer"
            class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
          >
            <div class="rounded-[10px] bg-white p-4 pt-20 sm:p-6 relative md:pt-10">
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                {" "}
                12th Jan 2024{" "}
              </time>

              <a
                href="https://personal-website-ayaka.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <h3 class="mt-0.5 text-lg font-medium text-gray-900 md:h-24">
                  Slicing UI Personal Website with ReactJS and TailwindCSS
                </h3>
              </a>

              <div class="mt-4 flex flex-wrap gap-1">
                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  ReactJS
                </span>

                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  TailwindCSS
                </span>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <a
                  href="https://github.com/wamandaka/personal-website-ayaka.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoGithub size={30} />
                </a>
              </div>
              <div className="absolute top-0 right-10 p-4">
                <a
                  href="https://www.figma.com/file/f6jQZZ2LAApH8n5SGC42F3/Design?type=design&node-id=4598%3A251&mode=design&t=enZN1KsRN4OOU8Qc-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbBrandFigma size={30} />
                </a>
              </div>
            </div>
          </a>
          <a
            href="https://reverse1999-characters-kang-piscok.koyeb.app"
            target="_blank"
            rel="noreferrer"
            class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
          >
            <div class="rounded-[10px] bg-white p-4 pt-20 sm:p-6 relative md:pt-10">
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                {" "}
                8th Nov 2023{" "}
              </time>

              <a
                href="https://reverse1999-characters-kang-piscok.koyeb.app"
                target="_blank"
                rel="noreferrer"
              >
                <h3 class="mt-0.5 text-lg font-medium text-gray-900 md:h-24">
                  Create a Public API (Reverse 1999 Character List)
                </h3>
              </a>

              <div class="mt-4 flex flex-wrap gap-1">
                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  NodeJS
                </span>

                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  ExpressJS
                </span>

                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  PostgreSQL
                </span>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <a
                  href="https://github.com/wamandaka/reverse-1999-characters-api-fanmade.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoGithub size={30} />
                </a>
              </div>
            </div>
          </a>
          <a
            href="https://slicing-saas-landing-page.vercel.app/"
            target="_blank"
            rel="noreferrer"
            class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
          >
            <div class="rounded-[10px] bg-white p-4 pt-20 sm:p-6 relative md:pt-10">
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                {" "}
                6th Jan 2024{" "}
              </time>

              <a
                href="https://slicing-saas-landing-page.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 class="mt-0.5 text-lg font-medium text-gray-900 md:h-24">
                  Slicing UI Landing Page with ReactJS and TailwindCSS
                </h3>
              </a>

              <div class="mt-4 flex flex-wrap gap-1">
                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  ReactJS
                </span>

                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  TailwindCSS
                </span>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <a
                  href="https://github.com/wamandaka/saas-landing-page-design-by-animaapp.com.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoGithub size={30} />
                </a>
              </div>
              <div className="absolute top-0 right-10 p-4">
                <a
                  href="https://www.figma.com/file/rhNqIevZzQRXkqq7nP9qaQ/SaaS-Landing-Page-Template---Landing-Page-Template-ready-to-export-to-HTML---Landing-page-for-SaaS-(Community)?type=design&node-id=47%3A689&mode=dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbBrandFigma size={30} />
                </a>
              </div>
            </div>
          </a>
          <a
            href="https://wamandaka.github.io/react-app-landingpage/"
            target="_blank"
            rel="noreferrer"
            class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
          >
            <div class="rounded-[10px] bg-white p-4 pt-20 sm:p-6 relative md:pt-10">
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                {" "}
                2nd Mar 2023{" "}
              </time>

              <a
                href="https://wamandaka.github.io/react-app-landingpage/"
                target="_blank"
                rel="noreferrer"
              >
                <h3 class="mt-0.5 text-lg font-medium text-gray-900 md:h-24">
                  Slicing UI Landing Page with ReactJS and TailwindCSS
                </h3>
              </a>

              <div class="mt-4 flex flex-wrap gap-1">
                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  ReactJS
                </span>

                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  TailwindCSS
                </span>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <a
                  href="https://github.com/wamandaka/landing-page-reactjs.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoGithub size={30} />
                </a>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Project;
