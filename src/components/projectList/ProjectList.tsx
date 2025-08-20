import Project1 from "../../assets/images/projects/1.jpg";
import Project2 from "../../assets/images/projects/2.jpg";
import Project3 from "../../assets/images/projects/3.jpg";

const projectData = [
  {
    title: "Moderne Wetter App",
    image: Project1,
    alt: "Projekt 1 Wetter App",
    deployLink: "https://andre-herter.github.io/wetter-app",
    githubLink: "andre-herter.github.io/wetter-app",
    linkText: "andre-herter.github.io/wetter-app",
    description:
      "Meine moderne Wetter App zeigt aktuelle Wetterdaten für Städte auf der ganzen Welt an. Die App wurde 'mobile-first' entwickelt und für Mobilgeräte aller Art optimiert. Der Nutzer hat die Möglichkeit, Orte in einer Favoritenliste zu speichern und diese Liste zu bearbeiten.",
    techStack: ["HTML", "JavaScript", "Vite", "SCSS", "BEM", "WeatherAPI"],
    codeLink: "https://github.com/andre-herter/wetter-app",
  },
  {
    title: "Sushibar Tokio",
    image: Project3,
    alt: "Projekt 3 Sushibar App",
    deployLink: "https://andre-herter.github.io/sushibar-website/",
    githubLink: "andre-herter.github.io/sushibar-app",
    linkText: "andre-herter.github.io/sushibar",
    description:
      "Die Website für die fiktive Sushibar Tokio ist ein moderner One-Pager in ansprechendem dunklen Design. Das Layout ist darauf ausgelegt, den Besucher der Seite zu einem Besuch im Restaurant anzuregen. Ich habe das Design responsive umgesetzt und für gängige Bildschirmgrößen optimiert.",
    techStack: ["HTML", "SCSS", "Responsive Design"],
    codeLink: "https://github.com/andre-herter/sushibar-website",
  },
  {
    title: "Lustige Witze App",
    image: Project2,
    alt: "Projekt 2 Lustige Witze App",
    deployLink: "https://andre-herter.github.io/witze-app/",
    githubLink: "andre-herter.github.io/witze-app",
    linkText: "andre-herter.github.io/witze-app",
    description:
      "Als Kind habe ich Witze-Bücher geliebt - Jetzt habe ich meine eigene Witze-App entwickelt! Hierfür habe ich eine öffentliche API verwendet, um die Witze dynamisch zu laden und anzuzeigen. Das Design ist auf Mobilgeräte optimiert und nach SCSS Best Practices optimiert.",
    techStack: ["HTML", "JavaScript", "SCSS", "BEM", "Vite", "AJAX"],
    codeLink: "https://github.com/andre-herter/sushibar-website",
  },
];

export default projectData;
