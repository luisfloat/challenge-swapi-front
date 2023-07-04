import { FC, ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

export type ScrollToTopProps = {
  children: ReactNode;
};

const ScrollToTop: FC<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
