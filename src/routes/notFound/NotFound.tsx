import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="flex justify-start">
        <Link to="/" className="flex flex-row-reverse gap-2 m-4">
          Zurück
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
      </div>
      <div className="text-center">
        <h2 className="text-3xl lg:4xl font-bold mt-28">
          404 - Seite nicht gefunden
        </h2>
        <h3 className="text-xl lg:text-2xl font-bold mt-8">
          Die Seite, die du suchst, existiert nicht.
        </h3>
      </div>
    </>
  );
}

export default NotFound;
