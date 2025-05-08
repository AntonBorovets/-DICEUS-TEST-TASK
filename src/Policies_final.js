export default function Policies_final() {
  const policiesData = [
    {
      line: "Marine Cargo 17030212",
      effDate: "6/30/2026",
      expDate: "6/30/2027",
      status: "Active",
      expiringTech: "$587,500",
      expiringPremium: "$605,000",
      renewalTech: "$610,000",
      renewalPremium: "$625,000",
      rateChange: "3.3%",
      lossRatio: "22%",
    },
    {
      line: "General Liability 4631092",
      effDate: "6/30/2026",
      expDate: "6/30/2027",
      status: "Active",
      expiringTech: "$160,000",
      expiringPremium: "$165,000",
      renewalTech: "$170,000",
      renewalPremium: "$175,000",
      rateChange: "6.1%",
      lossRatio: "58%",
    },
    {
      line: "Workers Comp 9182371",
      effDate: "Pending",
      expDate: "Pending",
      status: "Pending",
      expiringTech: "$0",
      expiringPremium: "$0",
      renewalTech: "$73,500",
      renewalPremium: "$75,000",
      rateChange: "N/A",
      lossRatio: "N/A",
    },
    {
      line: "Umbrella 9178436",
      effDate: "13/03/2026",
      expDate: "13/03/2027",
      status: "Active",
      expiringTech: "$245,000",
      expiringPremium: "$250,000",
      renewalTech: "$267,500",
      renewalPremium: "$275,000",
      rateChange: "10.0%",
      lossRatio: "78%",
    },
    {
      line: "",
      effDate: "",
      expDate: "",
      status: "TOTAL (4)",
      expiringTech: "$992,500",
      expiringPremium: "$1,020,000",
      renewalTech: "$1,121,000",
      renewalPremium: "$1,150,000",
      rateChange: "6.9%",
      lossRatio: "58.3%",
    },
  ];

  return (
    <div className="comunication">
      <div className="navigation">
        <input type="text" placeholder="Search" className="input" />
        <button className="result">Filter</button>
        <button className="result">Group</button>
      </div>
      <PolicyTable policies={policiesData} />
    </div>
  );
}

function PolicyTable({ policies }) {
  const columns = [
    {
      label: "Line",
      accessor: (p) => {
        const [name, number] = [
          p.line.split(" ").slice(0, -1).join(" "),
          p.line.split(" ").at(-1),
        ];
        return (
          <div className="line-cell">
            <div className="line-name">{name}</div>
            <div className="line-number">{number}</div>
          </div>
        );
      },
    },
    { label: "Eff. Date", accessor: (p) => p.effDate },
    { label: "Exp. Date", accessor: (p) => p.expDate },
    {
      label: "Status",
      accessor: (p) => (
        <div className="status-cell">
          <span
            className={`status-dot ${
              p.status.toLowerCase() === "active"
                ? "green"
                : p.status.toLowerCase() === "pending"
                ? "orange"
                : ""
            }`}
          />
          <span className="status-text">{p.status}</span>
        </div>
      ),
    },
    { label: "Expiring Tech", accessor: (p) => p.expiringTech },
    { label: "Expiring Premium", accessor: (p) => p.expiringPremium },
    { label: "Renewal to Tech", accessor: (p) => p.renewalTech },
    { label: "Renewal Tech", accessor: (p) => p.renewalTech },
    { label: "Renewal Premium", accessor: (p) => p.renewalPremium },
    { label: "Rate Change", accessor: (p) => p.rateChange },
    {
      label: "Loss Ratio",
      accessor: (p) => (
        <span className={`ratio-${getRatioColor(p.lossRatio)}`}>
          {p.lossRatio}
        </span>
      ),
    },
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
