import Button from "../button/Button";

function Impressum() {
  return (
    <>
      <Button
        href="/react-tailwind-portfolio/"
        className="flex flex-row-reverse gap-2 m-4"
        text={"Zurück"}
        svg={
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
        }
      />
      <div className="text-center">
        <h2 className="text-3xl lg:4xl font-bold mt-28">Impressum</h2>
        <h3 className="text-xl lg:text-2xl font-bold mt-8">
          Angaben gemäß § 5 TMG
        </h3>
        <p>Vorname Nachname</p>
        <p>Straße Hausnummer</p>
        <p>PLZ Ortsname</p>
        <h3 className="text-xl lg:text-2xl font-bold mt-8">Kontakt</h3>
        <p>Telefon: 0123/456789</p>
        <p>E-Mail: andre-herter@web.de</p>
      </div>
    </>
  );
}

export default Impressum;
