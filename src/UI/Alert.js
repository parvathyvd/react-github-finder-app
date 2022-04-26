import React from "react";
import { useAlertContext } from "../context/alertContext";

const Alert = () => {
  const { alert } = useAlertContext();
  return <div className={`alert ${alert.type}`}>{alert.msg}</div>;
};

export default Alert;
