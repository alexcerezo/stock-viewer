import React, { useState } from "react"; // Importa React y el hook useState
import { mockHistoricalData } from "../constants/mock"; // Importa datos históricos simulados
import { convertUnixTimestampToDate } from "../helpers/date-helper"; // Importa una función para convertir marcas de tiempo Unix a fechas
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts"; // Importa componentes de Recharts para crear gráficos
import Card from "./Card"; // Importa el componente Card
import { chartConfig } from "../constants/config"; // Importa la configuración del gráfico
import ChartFilter from "./ChartFilter"; // Importa el componente ChartFilter

const Chart = () => {
  const [data, setData] = useState(mockHistoricalData); // Estado para los datos del gráfico
  const [filter, setFilter] = useState("1W"); // Estado para el filtro seleccionado

  // Función para formatear los datos del gráfico
  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2), // Formatea el valor a dos decimales
        date: convertUnixTimestampToDate(data.t[index]), // Convierte la marca de tiempo Unix a una fecha
      };
    });
  };

  return (
    <Card>
      {/* Lista de filtros para el gráfico */}
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item); // Actualiza el filtro seleccionado
              }}
            />
          </li>
        ))}
      </ul>
      {/* Contenedor responsive para el gráfico */}
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(199 210 254)"
                stopOpacity={0.8}
              />
              <stop offset="95%" stopColor="rgb(199 210 254)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            fill="url(#chartColor)"
            strokeWidth={0.5}
          />
          <Tooltip />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
