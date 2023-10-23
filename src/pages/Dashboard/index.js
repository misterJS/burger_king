import faker from "faker";
import { Sidebar } from "../../components";
import DonatChart from "./components/chartOnDuty";
import LongChart from "./components/longChart";
import firstData from "../../mock/file_1.json";
import secondData from "../../mock/file_2.json";
import { FaMoon, FaSignOutAlt, FaSun } from "react-icons/fa";

export const Dashboard = () => {
  const labels = secondData[0].data.map((d) => d.date);

  const datas = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Accumulation Attend",
        borderColor: "#0afa56",
        borderWidth: 2,
        fill: false,
        data: secondData[0].data.map((d) => d.data[3]),
      },
      {
        type: "line",
        label: "Accumulation Un Attend",
        borderColor: "#0725e8",
        borderWidth: 2,
        fill: false,
        data: secondData[0].data.map((d) => d.data[4]),
      },
      {
        type: "line",
        label: "Accumulation Non Schedule",
        borderColor: "#ed0c75",
        borderWidth: 2,
        fill: false,
        data: secondData[0].data.map((d) => d.data[5]),
      },
      {
        type: "bar",
        label: "Attend",
        backgroundColor: "rgb(75, 192, 192)",
        data: secondData[0].data.map((d) => d.data[0]),
        borderWidth: 2,
        stack: 0,
      },
      {
        type: "bar",
        label: "Un-Attend",
        backgroundColor: "rgb(53, 162, 235)",
        data: secondData[0].data.map((d) => d.data[1]),
        stack: 0,
      },
      {
        type: "bar",
        label: "Non Schedule",
        backgroundColor: "#000000",
        data: secondData[0].data.map((d) => d.data[2]),
        stack: 0,
      },
    ],
  };
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <main className="flex-1">
        <header className="bg-slate-100 text-slate-950 p-4 flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard Attendance</h1>
          <div className="flex gap-3">
            <input type="text" value={"--All Organization--"} />
            <FaSun size={30} />
            <FaMoon size={30} />
            <FaSignOutAlt size={30} />
          </div>
        </header>
        <div className="px-2 bg-slate-200">
          <div className="grid grid-cols-5">
            <div className="col-span-2 p-2 grid grid-cols-2 gap-2 h-72">
              {firstData.map((data, i) => (
                <DonatChart
                  data={data.data}
                  head={
                    data.head && data.type === "chart"
                      ? `${(
                          (Number(data.data[0]) /
                            (Number(data.data[0]) + Number(data.data[1]))) *
                          100
                        ).toFixed(2)}%`
                      : data.head && data.data
                  }
                  label={
                    data.type === "chart"
                      ? `${data.data[0]} / ${
                          Number(data.data[0]) + Number(data.data[1])
                        } ${data.head ? "Person" : ""}`
                      : "Person"
                  }
                  title={data.title}
                  type={data.type}
                />
              ))}
            </div>
            <div className="col-span-3 p-2 grid gap-2">
              {secondData.map((data, i) => (
                <LongChart data={datas} title={data.title} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
