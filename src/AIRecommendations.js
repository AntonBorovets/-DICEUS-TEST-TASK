import { IoRocketOutline } from "react-icons/io5";
import recommendationsData from "./data/recommendations.json";

export default function AIRecommendations() {
  return (
    <div className="AI">
      <h2 className="AI-title">
        <IoRocketOutline /> AI-Povered Recommendations
      </h2>
      {recommendationsData.map((recommendation, index) => (
        <RecommendationItem
          key={index}
          title={recommendation.title}
          text={recommendation.text}
          buttonText={recommendation.buttonText}
        />
      ))}
    </div>
  );
}

function RecommendationItem({ title, text, buttonText }) {
  return (
    <div className="AI-item">
      <div>
        <div className="mini-title">{title}</div>
        <div className="mini-text">{text}</div>
      </div>
      <button className="apply">{buttonText}</button>
    </div>
  );
}
