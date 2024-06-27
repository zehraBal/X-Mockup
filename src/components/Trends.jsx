import { trendTopics } from "/src/trendTopics";
export default function Trends() {
  return (
    <div className="trendTopics-section">
      <div className="topic">
        <h3>Trends for you</h3>
      </div>
      {trendTopics.map((trend, index) => {
        return (
          <div key={index} className="topic">
            <p style={{ color: "gray", fontWeight: "200" }}>{trend.trending}</p>

            <p>{trend.topic}</p>
            <p style={{ color: "gray", fontWeight: "200" }}>
              {trend.postCount}
            </p>
          </div>
        );
      })}
    </div>
  );
}
