import React, { useEffect, useState } from "react";

function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Main</h1>
      {!data
        ? "Loading..."
        : data.map((item, index) => <p key={index}>{item.username}</p>)}
    </div>
  );
}

export default Main;
