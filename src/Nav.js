import {
  IoHomeOutline,
  IoPersonOutline,
  IoBriefcaseOutline,
  IoDocumentTextOutline,
  IoBusinessOutline,
  IoStatsChartOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-panel">
      <NavButton icon={<IoHomeOutline />} path="/dashboard">
        Dashboard
      </NavButton>
      <NavButton icon={<IoPersonOutline />} path="/accounts">
        Accounts
      </NavButton>
      <NavButton icon={<IoBriefcaseOutline />} path="/brokers">
        Brokers
      </NavButton>
      <NavButton icon={<IoDocumentTextOutline />} path="/submissions">
        Submissions
      </NavButton>
      <NavButton icon={<IoBusinessOutline />} path="/organisation">
        Organisation
      </NavButton>
      <NavButton icon={<IoStatsChartOutline />} path="/goals">
        Goals & Rules
      </NavButton>
      <NavButton icon={<IoSettingsOutline />} path="/admin">
        Admin
      </NavButton>
    </div>
  );
}

function NavButton({ children, icon, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button className="button_nav" onClick={handleClick}>
      {icon} {children}
    </button>
  );
}
