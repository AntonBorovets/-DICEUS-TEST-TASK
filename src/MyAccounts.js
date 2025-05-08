import policiesData from "./data/policiesData.json";

export default function MyAccounts() {
  return (
    <div className="comunication">
      <div className="navigation">
        <p className="title">My accounts</p>
        <input type="text" placeholder="Search" className="input" />
        <button className="result">Filter</button>
        <button className="result">Sort</button>
        <button className="result">Group</button>
        <button className="active-q result">+ NEW</button>
      </div>
      <PolicyBottom policies={policiesData} />
    </div>
  );
}

function PolicyBottom({ policies }) {
  const columns = [
    {
      label: "ACCOUNT NAME/TYPE",
      accessor: (p) => (
        <div className="client-cell">
          <div className="client-line">{p.account_name}</div>
          <div className="sub-line">{p.account_type}</div>
        </div>
      ),
    },
    { label: "LINE", accessor: (p) => p.line },
    { label: "BROKER", accessor: (p) => p.broker },
    { label: "RENEWAL DATE", accessor: (p) => p.renewal_date },
    {
      label: "PREMIUM",
      accessor: (p) => <span className="premium">{p.premium} </span>,
    },
    { label: "RATED PREMIUM", accessor: (p) => p.rated_premium },

    {
      label: "LOSS RATIO",
      accessor: (p) => (
        <span className={`ratio-${getRatioColor(p.loss_ratio)}`}>
          {p.loss_ratio}
        </span>
      ),
    },
    {
      label: "APPETITE",
      accessor: (p) => <span className="apetite">{p.appetite} </span>,
    },

    {
      label: "STATUS",
      accessor: (p) => (
        <div className="status-cell">
          <span
            className={`status-dot ${
              p.status.toLowerCase() === "active"
                ? "green"
                : p.status.toLowerCase() === "under review"
                ? "blue"
                : ""
            }`}
          />
          <span className="status-text">{p.status}</span>
        </div>
      ),
    },
    {
      label: "TRIAGE",
      accessor: (p) => <span className="triage">{p.triage} </span>,
    },
    { label: "WINNABILITY", accessor: (p) => p.winnability },
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

function getRatioColor(ratio) {
  const value = parseInt(ratio);
  if (isNaN(value)) return "na";
  if (value < 30) return "green";
  if (value < 60) return "yellow";
  return "red";
}
