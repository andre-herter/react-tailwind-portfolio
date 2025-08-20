import Button from "../../components/button/Button";
import Profile from "../../assets/images/profile_picture.png";
import Technology from "../../assets/images/techs.png";

function HeroSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-20">
      <section>
        <img
          className="mt-8 h-20 w-20 rounded-full object-cover"
          src={Profile}
          alt="Andre Herter"
        />
        <h2 className="text-lg mt-4 lg:mt-6 lg:text-2xl">
          Hi, ich bin <span className="font-bold">Andre</span>.
        </h2>
        <h1 className="text-4xl mt-4 lg:mt-6 lg:text-6xl">
          Ihr neuer <br />
          <span className="font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Frontend Developer.
          </span>
        </h1>

        <p className="text-slate-400 mt-6 lg:mt-8 lg:text-lg">
          Mein Name ist Andre Herter und ich bin Softwareentwickler mit
          Schwerpunkt auf den Bereich Frontend Web Development aus dem schönen
          Siegerland. Ich liebe es neue Dinge zu lernen und Ideen in die
          Realität zu bringen.
        </p>

        <div className="flex gap-6 lg:gap-8 mt-6 lg:mt-10">
          <a href="https://github.com/" target="_blank">
            <svg
              className="hover:rotate-[0.1turn] h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://de.linkedin.com" target="_blank">
            <svg
              className="hover:rotate-[0.1turn] h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        <Button
          href="#projects"
          target={""}
          className="mt-10 lg:mt-12 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-500 rounded-lg px-5 py-3 flex items-center justify-center"
          text={"Projekte ansehen"}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w5 h-5 ml-2 -mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
              />
            </svg>
          }
        />
      </section>
      <div className="flex items-center justify-center">
        <img
          src={Technology}
          alt="Meine Technologien"
          className="w-full max-w-[500px]"
        />
      </div>
    </div>
  );
}

export default HeroSection;
