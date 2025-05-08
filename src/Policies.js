import {
  IoHomeOutline,
  IoPersonOutline,
  IoBoatOutline,
  IoShieldOutline,
  IoUmbrellaOutline,
} from "react-icons/io5";

export default function Policies() {
  return (
    <div className="policies">
      <PoliciesItem
        title={
          <>
            <IoBoatOutline style={{ color: "#4A90E2" }} /> Marine Cargo
          </>
        }
        premium={"625,000"}
        date={" 6/30/2026"}
      />
      <PoliciesItem
        title={
          <>
            <IoShieldOutline style={{ color: "#50E3C2" }} /> General Liability
          </>
        }
        premium={"175,000"}
        date={" 6/30/2026"}
      />
      <PoliciesItem
        title={
          <>
            <IoPersonOutline style={{ color: "#BD10E0" }} /> Workers Comp
          </>
        }
        premium={"75,000"}
      />
      <PoliciesItem
        title={
          <>
            <IoHomeOutline style={{ color: "#F5A623" }} /> Property
          </>
        }
        premium={"64,829.83"}
      />
      <PoliciesItem
        title={
          <>
            <IoUmbrellaOutline style={{ color: "#D0021B" }} /> Umbrella
          </>
        }
        premium={"275,000"}
        date={" 13/03/2026"}
      />
    </div>
  );
}

function PoliciesItem({ title, premium, date }) {
  return (
    <div className="block1">
      <p className="title ">{title}</p>{" "}
      <p className="add-content">Premium: ${premium}</p>{" "}
      <p className="add-content">Eff.Date:{date ? date : " ---"}</p>
    </div>
  );
}
