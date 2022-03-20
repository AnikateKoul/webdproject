import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
        top: '0px',
        behavior: "auto",
      })}
      );
  return <>{props.children}</>
};

export default ScrollToTop;