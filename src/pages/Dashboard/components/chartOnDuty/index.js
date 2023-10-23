import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart({ data, type, label, title, head }) {
  const donutData = {
    labels: [""],
    datasets: [
      {
        data: data,
        backgroundColor: ["rgba(2, 151, 196)", "rgba(242, 208, 17)"],
      },
    ],
  };
  return (
    <div
      className="bg-slate-100 rounded-lg w-full h-72 p-8"
      style={{ position: "relative" }}
    >
      <p>
        <span className="text-red-600">Today</span> {title}
      </p>
      {type === "chart" ? (
        <div className="text-center">
          <Doughnut
            data={donutData}
            options={{
              maintainAspectRatio: false,
              type: "doughnut",
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: false,
                },
              },
            }}
            height={220}
          />
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div>
              <p className="text-lg font-bold">{head}</p>
              <p className="text-sm">{label}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div>
              <p className="text-lg font-bold">{head}</p>
              <p className="text-sm">{label}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DonutChart;
