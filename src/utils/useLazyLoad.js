import { useEffect } from "react";

const useLazyLoad = () => {
  useEffect(() => {
    let lazyloadImages;

    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.classList.remove("lazy");
            observer.unobserve(image);
          }
        });
      });

      lazyloadImages.forEach((image) => {
        imageObserver.observe(image);
      });

      return () => {
        lazyloadImages.forEach((image) => imageObserver.unobserve(image));
      };
    } else {
      let lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      const lazyload = () => {
        if (lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(() => {
          const scrollTop = window.pageYOffset;
          lazyloadImages.forEach((img) => {
            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src;
              img.classList.remove("lazy");
            }
          });
          if (lazyloadImages.length === 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      };

      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);

      return () => {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      };
    }
  }, []);
};

export default useLazyLoad;