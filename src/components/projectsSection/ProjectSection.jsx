import Button from "../button/Button";

function ProjectSection() {
  return (
    <div id="projects" className="text-center mt-24 pt-24">
      <h2 className="text-3xl lg:text-5xl font-bold">Meine Projekte</h2>
      <p className="text-slate-400 mt-4 lg:mt-6 lg:text-lg">
        Hier sind einige Auszüge aus meiner Arbeit, sodass Sie sich ein Bild
        meiner Fähigkeiten und Erfahrungen machen können.
      </p>
      <div className="mt-20 grid gap-y-20 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-start text-left">
          <img
            className="w-full lg:rounded-md"
            src="/projets/1.jpg"
            alt="Projekt 1 Wetter App"
          />
          <h3 className="text-3xl font-bold mt-6 lg:mt-8">
            Moderne Wetter App
          </h3>
          <a
            className="text-blue-500 font-medium flex items-center text-lg mt-4"
            href=""
          >
            username.github.io/wetter-app
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
          </a>
          <p className="text-slate-400 mt-4">
            Meine moderne Wetter App zeigt aktuelle Wetterdaten für Städte auf
            der ganzen Welt an. Die App wurde "mobile-first" entwickelt und für
            Mobilgeräte aller Art optimiert. Der Nutzer hat die Möglichkeit,
            Orte in einer Favoritenliste zu speichern und diese Liste zu
            bearbeiten.
          </p>
          <div className="flex gap-2 mt-4 lg:mt-6 flex-wrap">
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              HTML
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              JavaScript
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              Vite
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              SCSS
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              BEM
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              WeatherAPI
            </div>
          </div>
          <Button
            href="#"
            className="mt-6 lg:mt:8 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-500 rounded-lg px-5 py-3 flex items-center justify-center"
            text={"Code ansehen"}
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            }
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <img
            className="w-full lg:rounded-md"
            src="/projets/3.jpg"
            alt="Projekt 3 Sushibar App"
          />
          <h3 className="text-3xl font-bold mt-6 lg:mt-8 ">Sushibar Tokio</h3>
          <a
            className="text-blue-500 font-medium flex items-center text-lg mt-4"
            href=""
          >
            username.github.io/sushibar-app
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
          </a>
          <p className="text-slate-400 mt-4">
            Die Website für die fiktive Sushibar Tokio ist ein moderner
            One-Pager in ansprechendem dunklen Design. Das Layout ist darauf
            ausgelegt, den Besucher der Seite zu einem Besuch im Restaurant
            anzuregen. Ich habe das Design responsive umgesetzt und für gängige
            Bildschirmgrößen optimiert.
          </p>
          <div className="flex gap-2 mt-4 lg:mt-6 flex-wrap">
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              HTML
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              SCSS
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              Responsive Design
            </div>
          </div>
          <Button
            href="#"
            className="mt-6 lg:mt:8 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-500 rounded-lg px-5 py-3 flex items-center justify-center"
            text={"Code ansehen"}
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            }
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <img
            className="w-full lg:rounded-md"
            src="/projets/2.jpg"
            alt="Projekt 2 Witze App"
          />
          <h3 className="text-3xl font-bold mt-6 lg:mt-8">Lustige Witze App</h3>
          <a
            className="text-blue-500 font-medium flex items-center text-lg mt-4"
            href=""
          >
            username.github.io/witze-app
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
          </a>
          <p className="text-slate-400 mt-4">
            Als Kind habe ich Witze-Bücher geliebt - Jetzt habe ich meine eigene
            Witze-App entwickelt! Hierfür habe ich eine öffentliche API
            verwendet, um die Witze dynamisch zu laden und anzuzeigen. Das
            Design ist auf Mobilgeräte optimiert und nach SCSS Best Practices
            optimiert.
          </p>
          <div className="flex gap-2 mt-4 lg:mt-6 flex-wrap">
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              HTML
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              JavaScript
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              SCSS
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              BEM
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              Vite
            </div>
            <div className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs">
              AJAX
            </div>
          </div>
          <Button
            href="#"
            className="mt-6 lg:mt:8 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-500 rounded-lg px-5 py-3 flex items-center justify-center"
            text={"Code ansehen"}
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
