import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import data from "./data/winnabilityData.json";

export default function WinnabilityBlocks() {
  return (
    <div className="win2">
      <WinnabilityItem
        data1={data.increasing}
        isDecreasing={false}
        barColor="linear-gradient(to right, rgb(37, 42, 61), rgb(61, 184, 120))"
        numberColor="rgb(61, 184, 120)"
        borderColor="rgb(61, 184, 120)"
        arrowColor="rgb(61, 184, 120)"
      />
      <WinnabilityItem
        data1={data.decreasing}
        isDecreasing={true}
        barColor="linear-gradient(to right, rgb(37, 42, 61), rgb(245, 203, 98))"
        numberColor="rgb(245, 203, 98)"
        borderColor="rgb(245, 203, 98)"
        arrowColor="rgb(245, 203, 98)"
      />
    </div>
  );
}

function WinnabilityItem({
  data1,
  isDecreasing,
  barColor,
  numberColor,
  borderColor,
  arrowColor,
}) {
  const title = isDecreasing
    ? "Decreasing Winnability"
    : "Increasing Winnability";
  const arrowIcon = isDecreasing ? (
    <FaArrowDown
      style={{ color: arrowColor }}
      className="arrow-icon decreasing"
    />
  ) : (
    <FaArrowUp
      style={{ color: arrowColor }}
      className="arrow-icon increasing"
    />
  );

  return (
    <div className="increasing-winnability">
      <div className="center">
        {arrowIcon}
        <h3 className="title">{title}</h3>
      </div>
      <ul className="items-list">
        {data1.map((item) => (
          <li key={item.id} className="item itemof">
            <div
              className="item-number"
              style={{
                color: numberColor,
                borderColor: borderColor,
              }}
            >
              {item.id}
            </div>
            <div>
              <div className="item-label">{item.label}</div>
              <div className="makeflex">
                <div
                  className="under-item"
                  style={{
                    width: `${Math.abs(item.value) * 10}px`,
                    backgroundImage: barColor,
                  }}
                ></div>
                <div
                  className={`item-value ${
                    item.value >= 0 ? "positive" : "negative"
                  }`}
                >
                  {item.value >= 0 ? `+${item.value}%` : `${item.value}%`}
                </div>
              </div>
            </div>
            <div className="item-bar-container"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
