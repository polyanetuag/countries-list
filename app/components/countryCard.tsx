import { Link } from "react-router";

export function CountryCard() {
  return (
    <Link
      to="/country-details"
      className="p-4 bg-white rounded-lg m-4 max-w-52 "
    >
      <div className="">
        <img
          className="rounded-lg"
          src="https://flagcdn.com/w320/de.png"
          alt="Alemanha"
        />
        <h2 className="font-semibold mt-2 flex justify-center">Alemanha</h2>
      </div>
    </Link>
  );
}
