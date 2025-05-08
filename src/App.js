import Main from "./Main";
import Header from "./Header";
import Policies from "./Policies";
import Nav from "./Nav";
import Documentation from "./Documentation";
import Perfomance from "./Perfomance";
import Communication from "./Communication";
import PolicieFinal from "./Policies_final";
import AccountDetailes from "./AccountDetailes";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <h3>
        Dashboard // Accounts // <a>Maritime Logistics Corp</a>
      </h3>
      <Main />
      <h2>Perfomance Metrics</h2>
      <Perfomance />
      <h2>Policies</h2>
      <Policies />
      <div className="grid--2">
        <h2>Account Status</h2>
        <h2>Compilance & Documentation</h2>
      </div>
      <div className="grid--2">
        <ProgressBar />
        <Documentation />
      </div>
      <h2>Account Detailes</h2>
      <AccountDetailes />
      <h2>Communication</h2>
      <Communication />
      <h2>Policies</h2>
      <PolicieFinal />
    </div>
  );
}

/********************/
function ProgressBar() {
  const steps = [
    { label: "SUBMITTED", completed: true },
    { label: "REVIEW", completed: true },
    { label: "QUOTE", completed: true },
    { label: "BIND", completed: true },
    { label: "ISSUE", completed: true },
    { label: "RENEW", completed: false },
  ];

  return (
    <div className="policies package">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className="step-container">
            <div className={`step ${step.completed ? "completed" : "pending"}`}>
              {step.completed && <span className="checkmark">✔</span>}
            </div>
            <span className="step-label">{step.label}</span>
            {index < steps.length - 1 && <div className="connector"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
/***********************/
