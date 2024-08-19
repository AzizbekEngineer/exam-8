import React from "react";

const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === "reviews" ? "active" : ""}`}
        onClick={() => onTabClick("reviews")}
      >
        Rating & Reviews
      </button>
      <button
        className={`tab ${activeTab === "faqs" ? "active" : ""}`}
        onClick={() => onTabClick("faqs")}
      >
        FAQs
      </button>
    </div>
  );
};

export default Tabs;
