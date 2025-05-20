import { Link, useParams } from "react-router";
import type { Route } from "./+types/home";
import { CountryCard } from "~/components/countryCard";

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
      <div style={{ width: "100%", margin: "auto", maxWidth: "800px" }}>
        <div
          style={{
            borderRadius: "10px",
          }}
        >
          <header className="my-8" style={{ textAlign: "center" }}>
            <h1 className="font-bold text-3xl">Alemanha</h1>
          </header>
        </div>
        <Link to="/" className="text-gray-500">
          Voltar
        </Link>

        <div
          style={{
            display: "flex",
            gap: "20px",
            background: "white",
            justifyContent: "space-between",
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          <div>
            <p>
              🏙️ <strong>Capital:</strong> Berlin
            </p>
            <p>
              🗺️ <strong>Continente: </strong> Europe
            </p>
            <p>👨‍👩‍👧‍👦 População: 83.2M</p>
            <p>
              🗣️ Línguas faladas:
              <span
                style={{
                  display: "flex",
                  borderRadius: "999px",
                  background: "#4338CA",
                  alignItems: "center",
                  color: "white",
                  padding: "2px 12px",
                  justifyContent: "center",
                  width: "fit-content",
                  lineHeight: "1",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                {" "}
                German
              </span>
            </p>
          </div>
          <img
            className="rounded-lg"
            src="https://flagcdn.com/w320/de.png"
            alt="Alemanha"
          />
        </div>

        <div>
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
        </div>
      </div>
    </>
  );
}
