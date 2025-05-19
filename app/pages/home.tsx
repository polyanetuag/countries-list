import { CountryCard } from "~/components/countryCard";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Países do mundo" },
    { name: "description", content: "Descubra as bandeiras dos países" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center items-center mt-8">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
}
