import React from "react";

const HeaderItem = ({ label, onClick }) => {
  return (
    <div className="header-item" onClick={() => onClick(label)}>
      {label}
    </div>
  );
};

export default HeaderItem;
