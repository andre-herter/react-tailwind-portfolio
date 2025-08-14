import { Link } from "react-router-dom";
import Button from "../button/Button";

function ContactSection() {
  return (
    <div className="flex flex-col-reverse lg:container lg:px-6 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center lg:mt-20">
      <div className="container mx-auto px-6 lg:px-0">
        <h2 className="text-3xl lg:text-4xl font-bold">Noch Fragen?</h2>
        <p className="text-slate-400 mt-4 lg:mt-6 lg:text-lg">
          Zögern Sie nicht mich zu kontaktieren. Nutzen Sie dafür gerne die
          unten aufgeführte E-Mail Adresse oder schauen Sie auf meinen
          Social-Media-Profilen vorbei!
        </p>
        <Link
          to="mailto:andre-herter@web.de"
          className="flex items-center font-medium text-lg mt-8 lg:mt-10 lg:text-xl lg:font-semibold text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          andre-herter@web.de
        </Link>
        <div className="flex gap-6 lg:gap-8 mt-6 lg:mt-10">
          <Link to="#">
            <svg
              className="hover:rotate-[0.1turn] h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link to="">
            <svg
              className="hover:rotate-[0.1turn] h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="bg-slate-900 container mx-auto px-6 lg:px-10 text-center my-40 py-10 lg:py-14 lg:rounded-lg">
        <h2 className="text-3xl lg:text-4xl font-bold">Weitere Erfahrungen</h2>
        <p className="text-slate-300 mt-4 lg:mt-8 lg:text-lg">
          Auf meinem GitHub-Profil finden Sie weitere Projekte, die ich im Laufe
          der Zeit erstellt habe. Dort können Sie sich auch selbst von meinem
          Code überzeugen.
        </p>
        <Button
          href="https://github.com"
          target={"_blank"}
          className="mt-8 lg:mt:12 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-500 rounded-lg px-5 py-3 flex items-center justify-center"
          text={"Github ansehen"}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 ml-2 -mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default ContactSection;
