import { IoRadioButtonOff, IoCheckmark } from "react-icons/io5";

export default function Documentation() {
  return (
    <div className="documentation">
      <DocumentationItem label="KYC verification" isVerified={true} />
      <DocumentationItem label="Required Documentation" isVerified={true} />
      <DocumentationItem label="Regulatory approval" isVerified={true} />
      <DocumentationItem label="Financial Verification" isVerified={true} />
    </div>
  );
}

function DocumentationItem({ label, isVerified }) {
  return (
    <div className="center">
      <div className="checkmark-in-circle">
        <IoRadioButtonOff className="checkmark-circle-outer" />
        {isVerified && <IoCheckmark className="checkmark-inner" />}
      </div>
      {label}
    </div>
  );
}
