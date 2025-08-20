import Button from "../../components/button/Button";
import projectData from "../../components/projectList/ProjectList";

function ProjectSection() {
  return (
    <div className="container mx-auto text-left mt-20 lg:mt-20 px-10">
      <div id="projects" className="text-center mt-24 pt-24">
        <h2 className="text-3xl lg:text-5xl font-bold">Meine Projekte</h2>
        <p className="text-slate-400 mt-4 lg:mt-6 lg:text-lg">
          Hier sind einige Auszüge aus meiner Arbeit, sodass Sie sich ein Bild
          meiner Fähigkeiten und Erfahrungen machen können.
        </p>
        <div className="mt-20 grid gap-y-20 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left justify-between"
            >
              <img
                className="w-full lg:rounded-md"
                src={item.image}
                alt={item.alt}
              />

              <h3 className="text-3xl font-bold mt-6 lg:mt-8">{item.title}</h3>

              <a
                href={item.deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-medium flex items-center text-lg mt-4"
              >
                {item.linkText}
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

              <p className="text-slate-400 mt-4">{item.description}</p>

              <div className="flex gap-2 mt-4 lg:mt-6 flex-wrap">
                {item.techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="bg-slate-700 px-2.5 py-1 rounded-xl text-xs"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <Button
                href={item.codeLink}
                target="_blank"
                className="mt-6 lg:mt-8 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-500 rounded-lg px-5 py-3 flex items-center justify-center"
                text="Code ansehen"
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
