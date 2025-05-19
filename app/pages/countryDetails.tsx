import { useParams } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Detalhes " },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function CountryDetails() {
  const params = useParams();

  return (
    <>
      <button>
        <a href="/countryDetails.tsx">Outra pagina para teste</a>
        codigo: {params.codigo}
      </button>
    </>
  );
}
