import { IoEllipse } from "react-icons/io5";
import positionData from "./data/positionData.json";

export default function Perfomance() {
  return (
    <div className="grid-4">
      <PerfomanceItem
        title={
          <div className="winnability">
            Winnability{" "}
            <span className="dots">
              <IoEllipse style={{ fontSize: "1em" }} />
              <IoEllipse style={{ fontSize: "1em" }} />
              <IoEllipse style={{ fontSize: "1em" }} />
              <IoEllipse style={{ fontSize: "1em" }} />
            </span>
          </div>
        }
        contents={"Very Strong"}
        link={"See all factors"}
      />
      <PerfomanceItem
        title={"Loos Ratio"}
        contents={"25%"}
        addcontent={"vs 42% target"}
        link={"View history"}
      />
      <PerfomanceItem
        title={"Premium Growth"}
        contents={"12.4%"}
        addcontent={"YoY increase $123M vs $150M Target"}
        link={"View trend"}
      />
      <div className="block expose">
        <h4 className="title">Expose Distribution</h4>
        <div className="statistic">
          {positionData.map((item, index) => (
            <div className="big-row" key={index}>
              <div className="row">
                <div>' '</div>
                <div
                  className="upper-row"
                  style={{ width: `${item.value}%` }}
                ></div>
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

function PerfomanceItem({ title, contents, link, addcontent }) {
  return (
    <div className="block">
      <h4 className="title">{title}</h4>
      <p className="info">
        {contents}{" "}
        <span className="add-content">{addcontent && `${addcontent}`}</span>
      </p>
      <a className="link">{link} &#8594;</a>
    </div>
  );
}
