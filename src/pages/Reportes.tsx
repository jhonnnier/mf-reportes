
import { useEffect, useState } from "react";

export default function Reportes(props) {
  const [reportes, setReportes] = useState("NA")

  useEffect(() => {
    fetch("http://localhost:5003/reportes")
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta de /reportes:", data.reportes);
        setReportes(data.reportes)
      })
      .catch((error) => {
        console.error("Error en la petición /estudiantes:", error);
      });
  }, []);
  return (
    <div>
      <h3>{reportes}</h3>
    </div>
  );
}
