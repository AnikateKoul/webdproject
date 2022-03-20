import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
        top: '400',
        behavior: 'smooth',
      })}
      );
  return <>{props.children}</>
};

export default ScrollToTop;