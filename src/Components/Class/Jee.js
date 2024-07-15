import React from "react";
import Data from "../Api";

function Jee() {
  return (
    <>
      <div className="wrapper">
        {tenthData.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default Jee;
