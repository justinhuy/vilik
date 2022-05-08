import { useRef } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

const FadeIn = ({ duration, delay, ease, callback }) => {
  const el = useRef();
  const path = useRef();

  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline();

    gsap.set(el.current, { autoAlpha: 1 });

    tl.to(path.current, {
      delay: delay || 0,
      duration: duration || 1.25,
      attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      ease: ease || "power2.in",
    }).to(el.current, {
      visibility: "hidden",
      onComplete: function () {
        if (callback) {
          callback();
        }
      },
    });
  }, []);

  return (
    <svg
      className="mask"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      ref={el}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "150%",
        zIndex: 999,
        opacity: 0,
        transform: "rotate(-180deg)",
      }}
    >
      <path
        ref={path}
        vectorEffect="non-scaling-stroke"
        d="M 0 100 V 30 Q 30 0 100 30 V 100 z"
      />
    </svg>
  );
};

export default FadeIn;
