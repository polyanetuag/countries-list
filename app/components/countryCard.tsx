import { Link } from "react-router";

type CountryCardProps = {
  name: string;
  flag: string;
  code: string;
};

export function CountryCard({ name, flag, code }: CountryCardProps) {
  return (
    <Link
      to="/country-details"
      className="p-4 bg-white rounded-lg m-4 max-w-52 "
    >
      <div className="">
        <img className="rounded-lg" src={flag} alt={code} />
        <h2 className="font-semibold mt-2 flex justify-center">{name}</h2>
      </div>
    </Link>
  );
}
