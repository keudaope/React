import React from "react";

const Laatikko = (props) => {
  const [on, setOn] = React.useState(props.on);

  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return <button style={styles} className="box" onClick={toggle}></button>;
};

export default Laatikko;
