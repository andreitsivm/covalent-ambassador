import { useState, useEffect } from "react";

const useOnScreen = (ref, options = {}) => {
  const {
    init = true,
    once = false,
    root = null,
    rootMargin = "0px",
    threshold = 0,
  } = options;
  const [isIntersecting, setIntersecting] = useState(init);

  useEffect(() => {
    const { current } = ref;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);

        /**
         * trigger IntersectionObserver only once
         */
        if (entry.isIntersecting && once) {
          observer.unobserve(current);
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      observer.unobserve(current);
    };
  }, [ref, once, rootMargin, root, threshold]);

  return isIntersecting;
};

export default useOnScreen;
