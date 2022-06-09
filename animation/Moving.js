import { useRef, useContext } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

const Moving = ({
  children,
  duration,
  delay,
  xFrom,
  yFrom,
  xTo,
  yTo,
  rotateFrom,
  rotateTo,
  callback,
}) => {
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(el.current, {
      x: xTo || 0,
      y: yTo || 0,
      rotate: rotateTo || 0,
      delay: delay || 0,
      duration: duration || 0.5,
      ease: "Sine.easeInOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 50%",
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
        transform:
          "translate(" +
          (xFrom || 0) +
          "px, " +
          (yFrom || 0) +
          "px) rotate(" +
          (rotateFrom || 0) +
          "deg)",
      }}
      ref={el}
    >
      {children}
    </div>
  );
};

export default Moving;
