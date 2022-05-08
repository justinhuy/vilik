import { useRef, useContext } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

const FadeTitle = ({ children, duration, delay, x, y, ease, callback }) => {
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      x: 0,
      y: 0,
      delay: delay || 0,
      duration: duration || 0.5,
      ease: ease || "power4.out",
      onComplete: function () {
        if (callback) {
          callback();
        }
      },
    });
  }, []);

  return (
    <div
      style={{
        transform: "translate(" + (x || 0) + "px, " + (y || 0) + "px)",
      }}
      ref={el}
    >
      {children}
    </div>
  );
};

export default FadeTitle;
