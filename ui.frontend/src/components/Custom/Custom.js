import React, { useEffect, useState } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

export const CustomEditConfig = {
  emptyLabel: "Custom",

  isEmpty: function (props) {
    return !props || !props.message || props.message.trim().length < 1;
  },
};

export const Custom = (props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (CustomEditConfig.isEmpty(props)) {
    return null;
  }

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="CustomComponent">
      <h2 className="CustomComponent__message_teste">{`${hours}:${minutes}:${seconds}`}</h2>
    </div>
  );
};

MapTo("wknd-spa-react/components/custom-component")(Custom, CustomEditConfig);
