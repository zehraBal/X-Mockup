import { useState } from "react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("foryou");

  return (
    <div className="header">
      <div
        className={`header-com ${activeTab === "foryou" ? "active" : ""}`}
        onClick={() => setActiveTab("foryou")}
      >
        For you
      </div>
      <div
        className={`header-com ${activeTab === "following" ? "active" : ""}`}
        onClick={() => setActiveTab("following")}
      >
        Following
      </div>
      <div className={`underline ${activeTab}`}></div>
    </div>
  );
}
