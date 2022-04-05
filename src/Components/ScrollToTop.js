import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  // This function is used to scroll up automatically whenever a page is changed or dark mode is applied
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