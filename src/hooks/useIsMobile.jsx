import React, { useEffect, useState } from "react";

function useIsMobile() {
  const [mQuery, setMQuery] = useState({ matches: true });

  const listener = () => {
    setMQuery({ matches: window?.innerWidth < 992 ? true : false });
  };

  useEffect(() => {
    try {
      setMQuery({ matches: window?.innerWidth < 992 ? true : false });
      const mql = window?.matchMedia("(min-width: 992px)");
      mql?.addEventListener
        ? mql.addEventListener("change", listener)
        : mql.addListener(listener);
      if (mql.removeEventListener) {
        return () => mql.removeEventListener("change", listener);
      } else {
        return () => mql.removeListener(listener);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return mQuery.matches;
}

export default useIsMobile;
