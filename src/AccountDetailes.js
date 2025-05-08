import { Line } from "react-chartjs-2";
import { IoEllipse } from "react-icons/io5";
import WinnabilityBlocks from "./WinnabilityBlocks";
import AIRecommendations from "./AIRecommendations";

export default function AccountDetailes() {
  const positionData = [
    {
      label: "Your score",
      value: 82,
      unit: "%",
      isYourScore: true,
    },
    {
      label: "Market Avg",
      value: 68,
      unit: "%",
    },
    {
      label: "Top competitor",
      value: 88,
      unit: "%",
    },
  ];

  const historicalTrendData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Now"],
    datasets: [
      {
        label: "Тренд",
        data: [25, 19, 40, 41, 50],
        fill: false,
        borderColor: "lightblue",
        tension: 0.1,
      },
    ],
  };

  const historicalTrendOptions = {
    scales: {
      y: {
        min: 15,
        max: 65,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 25,
          display: false,
        },
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10,
          font: {
            size: 16,
          },
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        borderColor: "#3b82f5",
        tension: 0.3,
        borderWidth: 4,
      },
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="documentation grid-1-3">
      <div className="grid-left">
        <div className="decision active1">
          <h2 className="title-num">
            DECISION SUPPORT <span className="number">4</span>
          </h2>
          <ul>
            <p>Winnability</p>
            <p>Exposure Review & Suggested Coverage</p>
            <p>Portfolio Strategy Alignment</p>
            <p>Broker Analytics</p>
          </ul>
        </div>
        <div>
          <div className="decision">
            <h2 className="title-num">
              RISK ASSESMANT <span className="number">6</span>
            </h2>
          </div>
          <div className="decision">
            <h2 className="title-num">
              DOCUMENTS AND COMPLIANCE <span className="number">2</span>
            </h2>
          </div>
        </div>
      </div>
      <div>
        <h1>Winnability</h1>
        <WinnabilityPolicyBlock
          positionData={positionData}
          historicalTrendData={historicalTrendData}
          historicalTrendOptions={historicalTrendOptions}
        />
        <WinnabilityBlocks />
        <AIRecommendations />
      </div>
    </div>
  );
}

function WinnabilityPolicyBlock({
  positionData,
  historicalTrendData,
  historicalTrendOptions,
}) {
  return (
    <div className="win-pol">
      <div className="block1">
        <h4 className="title">Overall Score</h4>
        <div className="under-title">
          <p className="info">25%</p>{" "}
          <span className="result dots">
            <IoEllipse style={{ fontSize: "1em" }} />
            <IoEllipse style={{ fontSize: "1em" }} />
            <IoEllipse style={{ fontSize: "1em" }} />
            <IoEllipse style={{ fontSize: "1em" }} />
            Very Strong
          </span>
        </div>
      </div>
      <div className="block1 historic">
        <h4 className="title">Historical trend</h4>
        <div className="chart-container">
          <Line data={historicalTrendData} options={historicalTrendOptions} />
        </div>
      </div>
      <div className="block1">
        <h4 className="title">Position</h4>
        <div className="statistic">
          {positionData.map((item, index) => (
            <div className="big-row" key={index}>
              <div className="row">
                <div>' '</div>
                <div className="upper-row" style={{ width: `${item.value}%` }}>
                  {}
                </div>
              </div>
              <p>
                {item.label}: {item.value}
                {item.unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
