import { Link, useParams } from "react-router";
import type { Route } from "./+types/home";
import { CountryCard } from "~/components/countryCard";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Detalhes " },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

interface CountryDetailsCodeProps {
  name: { common: string };
  capital: string;
  continents: string;
  population: string;
  languages: string;
  flags: { png: string };
}

export default function CountryDetails() {
  const params = useParams();

  const [country, setCountry] = useState<CountryDetailsCodeProps | null>(null);

  // função para o code de cada país
  const countryDetailsData = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${params.code}`
    );
    const json = await response.json();

    setCountry(json[0]);
  };

  useEffect(() => {
    countryDetailsData();
  }, []);

  if (!country) return <div>Carregando...</div>;

  const idiomas = Object.values(country.languages);

  return (
    <div className="w-full m-auto max-w-3xl">
      <div>
        <header className="my-8 text-center">
          <h1 className="font-bold text-5xl">{country?.name.common}</h1>
        </header>
      </div>
      <Link to="/" className="text-gray-500">
        Voltar
      </Link>

      <div className="flex bg-white justify-between rounded-xl m-auto max-w-3xl p-5 gap-5">
        <section className="w-full text-lg">
          <p className="">
            <span className="font-bold">🏙️Capital: </span>
            <span>{country?.capital}</span>
          </p>
          <p className="">
            <span className="font-bold">🗺️Continente: </span>
            <span>{country?.continents}</span>
          </p>
          <p className="">
            <span className="font-bold">👨‍👩‍👧‍👦População: </span>
            <span>{country?.population}</span>
          </p>
          <p className="">
            <span className="font-bold">🗣️Línguas faladas: </span>
            <div className=" flex flex-wrap gap-1">
              {idiomas.map((item) => {
                return (
                  <span className="rounded-full bg-indigo-700 items-center text-white text-base py-1 px-3 w-fit justify-center mt-2.5 leading-none">
                    {item}
                  </span>
                );
              })}
            </div>
          </p>
        </section>
        <img className="rounded-lg" src={country?.flags.png} alt="Alemanha" />
      </div>

      {/* <div>
          <div>
            <h2 className="font-semibold mt-2 flex py-4">
              Países que fazem fronteira com a Alemanha
            </h2>
          </div>

          <div style={{ display: "flex" }}>
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
            <CountryCard />
          </div>
        </div> */}
    </div>
  );
}
