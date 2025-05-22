import { CountryCard } from "~/components/countryCard";
import type { Route } from "../+types/root";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Países do mundo" },
    { name: "description", content: "Descubra as bandeiras dos países" },
  ];
}

export default function Home() {
  const [countryList, setCountryList] = useState([]);

  const countriesData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const json = await response.json();

    setCountryList(json);
  };

  useEffect(() => {
    countriesData();
  }, []);

  return (
    <div className="container ">
      <ul className="flex flex-wrap justify-center items-center mt-8">
        {countryList.map(
          (item: {
            name: { common: string };
            flags: { png: string };
            cca2: string;
          }) => {
            return (
              <li key={item.name.common}>
                <CountryCard
                  name={item.name.common}
                  flag={item.flags.png}
                  code={item.cca2}
                />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
