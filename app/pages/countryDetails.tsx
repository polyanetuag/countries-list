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
  name: string;
  capital: string;
  continents: string;
  populacao: string;
  idioma: string;
  flags: string;
}

export default function CountryDetails() {
  const params = useParams();

  const [countryDetailsCode, setCountryDetailsCode] = useState([]);
  console.log("countryDetailsCode>>>>>>>", countryDetailsCode);

  const countryDetailsData = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${params.code}`
    );
    const json = await response.json();

    setCountryDetailsCode(json);
  };

  useEffect(() => {
    countryDetailsData();
  }, []);

  return (
    <>
      {countryDetailsCode.map((item: CountryDetailsCodeProps) => {
        return (
          <div className="w-full m-auto max-w-3xl">
            <div>
              <header className="my-8 text-center">
                <h1 className="font-bold text-5xl">{item.name.common}</h1>
              </header>
            </div>
            <Link to="/" className="text-gray-500">
              Voltar
            </Link>

            <div className="flex bg-white justify-between rounded-xl m-auto max-w-3xl p-5">
              <section className="w-full text-lg">
                <p className="">
                  <span className="font-bold">🏙️Capital: </span>
                  <span>{item.capital}</span>
                </p>
                <p className="">
                  <span className="font-bold">🗺️Continente: </span>
                  <span>{item.continents}</span>
                </p>
                <p className="">
                  <span className="font-bold">👨‍👩‍👧‍👦População: </span>
                  <span>{item.population}</span>
                </p>
                <p className="">
                  <span className="font-bold">🗣️Línguas faladas: </span>
                  <p className="grid-cols-4">
                    <span className="rounded-full bg-indigo-700 items-center text-white text-base py-1 px-3 w-fit justify-center mt-2.5 leading-none">
                      German
                    </span>
                  </p>
                </p>
              </section>
              <img className="rounded-lg" src={item.flags.png} alt="Alemanha" />
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
      })}
    </>
  );
}
