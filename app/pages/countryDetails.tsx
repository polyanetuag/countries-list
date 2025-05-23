import { Link, useParams } from "react-router";
import type { Route } from "./+types/home";
import { CountryCard } from "~/components/countryCard";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Details " },
    { name: "description", content: "Country information" },
  ];
}

interface CountryDetailsCodeProps {
  name: { common: string };
  capital: string;
  continents: string;
  population: string;
  languages: string;
  flags: { png: string };
  borders: string;
}

export default function CountryDetails() {
  const params = useParams();

  const [country, setCountry] = useState<CountryDetailsCodeProps | null>(null);
  const [countryBorder, setCountryBorder] = useState([]);
  const paisesFronteiraCodigo = country?.borders;

  useEffect(() => {
    // função para pegar os detalhes de cada país
    const countryDetailsData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${params.code}`
      );
      const json = await response.json();

      setCountry(json[0]);
    };

    countryDetailsData();
  }, []);

  useEffect(() => {
    // função para países que fazem fronteira
    const countryBorderData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${paisesFronteiraCodigo}`
      );
      const json = await response.json();

      setCountryBorder(json);
    };

    if (paisesFronteiraCodigo?.length) {
      countryBorderData();
    }
  }, [paisesFronteiraCodigo]);

  if (!country) return <div>Carregando...</div>;
  if (!countryBorder) return <div>Este país não posssui nenhum fronteira</div>;

  const idiomas = Object.values(country.languages);

  return (
    <div className="w-full m-auto max-w-3xl">
      <div>
        <header className="my-8 text-center">
          <h1 className="font-bold text-5xl text-gray-900">
            {country?.name.common}
          </h1>
        </header>
      </div>
      <Link to="/" className="text-gray-500 ">
        To go back
      </Link>

      <div className="flex bg-white justify-between rounded-xl m-auto p-5 gap-5 h-full">
        <section className="w-full text-lg text-gray-800">
          <p className="">
            <span className="font-bold">🏙️Capital: </span>
            <span>{country?.capital}</span>
          </p>
          <p className="">
            <span className="font-bold">🗺️Continent: </span>
            <span>{country?.continents}</span>
          </p>
          <p className="">
            <span className="font-bold">👨‍👩‍👧‍👦Population: </span>
            <span>{country?.population}</span>
          </p>
          <p className="">
            <span className="font-bold">🗣️Spoken languages: </span>
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
      {/* Seção dos países que fazem fronteira */}

      <div className="">
        <div>
          <h2 className="font-semibold mt-2 flex py-4 text-2xl">
            Countries that border
          </h2>
        </div>
        {countryBorder.length > 0 ? (
          <div className="grid flex-wrap mx-auto gap-2 w-auto grid-cols-3">
            {countryBorder?.map((border: any) => {
              return (
                <CountryCard
                  name={border.name.common}
                  flag={border.flags.png}
                  code={border.cca2}
                />
              );
            })}
          </div>
        ) : (
          <h1>This country has no bordering countries. </h1>
        )}
      </div>
    </div>
  );
}
