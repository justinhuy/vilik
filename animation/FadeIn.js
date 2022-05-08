import { useRef, useContext } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

const FadeIn = ({ as, children, duration, delay, x, y, ease }) => {
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      x: 0,
      y: 0,
      opacity: 1,
      delay: delay || 0,
      duration: duration || 0.5,
      ease: ease || "power4.out",
    });
  }, []);

  return (
    <div
      style={{
        opacity: 0.5,
        width: "100%",
        height: "72px",
        position: "fixed",
        left: 0,
        transform: "translate(" + (x || 0) + "px, " + (y || 0) + "px)",
        zIndex: 999,
      }}
      ref={el}
    >
      {children}
    </div>
  );
};

export default FadeIn;
