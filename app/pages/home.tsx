import { CountryCard } from "~/components/countryCard";
import type { Route } from "../+types/root";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries of the world" },
    { name: "description", content: "Discover country information" },
  ];
}

export default function Home() {
  const [countryList, setCountryList] = useState([]);
  console.log("countryList", countryList);

  const countriesData = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,cca2"
    );
    const json = await response.json();

    setCountryList(json);
  };

  useEffect(() => {
    countriesData();
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full py-24">
      {countryList?.map(
        (item: {
          name: { common: string };
          flags: { png: string };
          cca2: string;
        }) => {
          return (
            <CountryCard
              name={item.name.common}
              flag={item.flags.png}
              code={item.cca2}
            />
          );
        }
      )}
    </div>
  );
}
