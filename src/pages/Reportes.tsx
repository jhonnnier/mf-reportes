
import { useEffect, useState } from "react";
import "./Reportes.css";

export default function Reportes(props) {
  const [reportes, setReportes] = useState([])

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
    <div className="reportes-container">
      <h3 className="reportes-title">Lista de Reportes</h3>
      <table className="reportes-table">
        <thead>
          <tr className="reportes-thead-row">
            <th className="reportes-th">Reporte</th>
          </tr>
        </thead>
        <tbody>
          {reportes.map((reporte, idx) => (
            <tr key={idx} className="reportes-tr">
              <td className="reportes-td">{reporte}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
