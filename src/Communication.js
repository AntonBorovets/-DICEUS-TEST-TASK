import { FaPaperclip } from "react-icons/fa";

export default function Communication() {
  return (
    <div className="comunication">
      <div className="navigation">
        <input type="text" placeholder="Search" className="input" />
        <button className="result">Filter</button>
        <button className="result"> Group</button>
      </div>
      <div className="grid-container">
        <div className="grid-1">
          <GridItem
            status={"NEW"}
            title={"Policy Renewal - Auto Insurance 5/15/25"}
            man={"Michael Roberts"}
            data={"Apr 5"}
            numberof={3}
            reply={true}
            className="com-act"
          >
            Hello Arthur, I'm reaching out regarding the upcoming auto policy
            renewal for Real Estate Group, LLC. The current policy expires on
            6/30/2024. Would you like to review coverage options before
            proceeding with the renewal? I've attached the current policy
            details and premium breakdown for your reference.
          </GridItem>
          <GridItem
            status={"NEW"}
            title={"New Quote Request - Workers Comp Insurance"}
            man={"Sarah Chen"}
            data={"Apr 5"}
            numberof={3}
            reply={true}
            className="com-act"
          >
            Hi Arthur, Real Estate Group has expressed interest in adding
            workers compensation coverage to their insurance portfolio. I've
            completed the initial risk assessment based
          </GridItem>
        </div>
        <div className="grid-2">
          <GridItem
            status={"Responded"}
            title={"Fwd: New Submission - BPM Real Estate - EFF 4/1/24"}
            man={"Joshua Dunmire"}
            data={"Mar 25"}
            reply={false}
          >
            Arthur, attached please find our submission for the above mentioned
            applicant. We have...
          </GridItem>
          <GridItem
            title={"New Business: BPM Real Estate Group, LLC"}
            man={"Isabel Kreller"}
            data={"Feb 28"}
            numberof={5}
            reply={true}
          >
            Hello Arthur, I am pleased to present you with a submission on this
            client&#39;s upco...
          </GridItem>
        </div>
      </div>
    </div>
  );
}

function GridItem({ children, status, title, man, data, reply, numberof }) {
  return (
    <div className="grid-item">
      <div className="title">
        {status && <span className="status">{status}</span>} {title}
      </div>
      <div className="from add-content">
        {man} // {data}
      </div>
      <div className="children-text">{children}</div>
      {numberof > 0 && (
        <div className="attachments">
          <FaPaperclip style={{ marginRight: "5px" }} /> {numberof} attachments
        </div>
      )}
      {reply && (
        <div className="reply-container">
          <button className="reply">Reply</button>
        </div>
      )}
    </div>
  );
}
