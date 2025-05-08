import Header from "./Header";
import Nav from "./Nav_dash";
import { IoEllipse, IoArrowUp } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";
import port from "./image/port.png";
import static_2 from "./image/static_2.png";
import MyAccounts from "./MyAccounts";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <MainDash />
      <div className="margin">
        <MyAccounts />
      </div>
    </div>
  );
}

function MainDash() {
  return (
    <div className="main-dash">
      <div className="work-q">
        <p className="title">Work Queue</p>
        <br />
        <div className="blochok-work">
          <div className="nav-q active-q">Assigned to me (12)</div>
          <div className="nav-q">Pending Review (8)</div>
          <div className="nav-q">Referrals (3)</div>
        </div>
        <div>
          <Policies_final />
        </div>
      </div>
      <div className="goals work-q">
        <p className="title">Portfolio goals</p>
        <Portfolio />
      </div>

      <div className="quick-market">
        <div className="goals work-q">
          <div>
            <p className="title">Quick actions</p>
            <div className="action-center">
              <button className="action">New Submission</button>
              <button className="action">Quote Builder</button>
              <button className="action">Risk Models</button>
              <button className="action">Documents Upload</button>
            </div>
          </div>
        </div>
        <div className="goals work-q">
          <div>
            <p className="title">Market intelligence</p>
            <div className="action-center">
              <p className="market-item">
                <div>
                  <IoEllipse
                    style={{ fontSize: "1.2em", color: "rgb(186, 60, 60)" }}
                  />
                </div>
                Rate hardering in Cyber <br /> matket - + 15% YOY
              </p>
              <p className="market-item">
                <div>
                  <IoEllipse
                    style={{ fontSize: "1.2em", color: "rgb(252, 208, 96)" }}
                  />
                </div>
                New capacity entering
                <br /> Marine market
              </p>
              <p className="market-item">
                <div>
                  <IoEllipse
                    style={{ fontSize: "1.2em", color: "rgb(30, 64, 176)" }}
                  />
                </div>
                Environmental regulatory
                <br /> changes in CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Policies_final() {
  const policiesData = [
    {
      originator: "SM",
      originatorName: "Sam Masters",
      clientLine: "NAMEX TECH SOLUTIONS",
      subLine: "Cyber Liability",
      type: "Underwriter Referral",
      status: "New",
      created: "04/16/2025",
    },
    {
      originator: "AW",
      originatorName: "Annalise Willis",
      clientLine: "MARITIME LOGISTICS CORP",
      subLine: "Marine Cargo",
      type: "Underwriter Referral",
      status: "New",
      created: "04/20/2025",
    },
    {
      originator: "PD",
      originatorName: "Patrick Devenport",
      clientLine: "GREENFIELD ENERGY",
      subLine: "Environmental",
      type: "Loss Control Request",
      status: "New",
      created: "04/16/2025",
    },
    {
      originator: "AK",
      originatorName: "Ana Killian",
      clientLine: "NORTHSTAR FINANCIAL GROUP",
      subLine: "D&O Liability",
      type: "Underwriter Referral",
      status: "Pending Review",
      created: "04/22/2025",
    },
    {
      originator: "AK",
      originatorName: "Ana Killian",
      clientLine: "ALLIANCE HEALTHCARE SYSTEMS",
      subLine: "Medical Malpractice",
      type: "Email",
      status: "Completed",
      created: "04/28/2025",
    },
    {
      originator: "MK",
      originatorName: "Me",
      clientLine: "QUANTUMTECH INDUSTRIES",
      subLine: "Product Liability",
      type: "Email",
      status: "Completed",
      created: "04/20/2025",
    },
  ];

  return (
    <div>
      <PolicyTable policies={policiesData} />
    </div>
  );
}

function PolicyTable({ policies }) {
  const columns = [
    { label: "ORIGINATOR", accessor: (p) => p.originatorName },
    {
      label: "CLIENT/LINE",
      accessor: (p) => (
        <div className="client-cell">
          <div className="client-line">{p.clientLine}</div>
          <div className="sub-line">{p.subLine}</div>
        </div>
      ),
    },
    { label: "TYPE", accessor: (p) => p.type },
    {
      label: "STATUS",
      accessor: (p) => (
        <div className="status-cell">
          <span
            className={`status-dot ${
              p.status.toLowerCase() === "completed"
                ? "green"
                : p.status.toLowerCase() === "pending review"
                ? "orange"
                : p.status.toLowerCase() === "new"
                ? "blue"
                : ""
            }`}
          />
          <span className="status-text">{p.status}</span>
        </div>
      ),
    },
    { label: "CREATED", accessor: (p) => p.created },
    {
      label: "",
      accessor: () => <div className="actions-cell">⋮</div>,
    },
  ];

  return (
    <div className="policy-flex-table">
      {columns.map((col, i) => (
        <div className="column" key={i}>
          <div className="header1">{col.label}</div>
          {policies.map((p, j) => (
            <div className="cell" key={j}>
              {col.accessor(p)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Portfolio() {
  const positionData = [
    {
      title: "NEW BUSSINES TARGET",
      label: "$12M",
      value: 67,
      unit: "%",
      isYourScore: true,
    },
    {
      title: "ANNUAL GWP TARGET",
      label: "$42M",
      value: 68,
      unit: "%",
    },
  ];
  return (
    <div className="port">
      <p className="header1">PORTFOLIO LOSS RATIO TARGET</p>

      <div className="image-container">
        <img src={port} alt="static" />
        <IoArrowDown className="arrow-down" />
        <IoArrowUp className="arrow-up" />
      </div>

      <p className="header1">RENEWAL RETENTION</p>
      <div className="image-container">
        <img src={static_2} alt="static" />
        <IoArrowUp className="arrow-up_2" />
      </div>

      <div>
        {positionData.map((item, index) => (
          <div className="big-row" key={index}>
            <div className="title">{item.title}</div>
            <div className="row">
              <div>' '</div>
              <div className="upper-row" style={{ width: `${item.value}%` }}>
                <p className="down-num">{item.label}</p>
                <p className="percent">
                  {item.value}
                  {item.unit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
