import { mount } from "marketing/MarketingApp"; //mount obtained from marketing function
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null); //accesses a mutable ref to the child

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
