import { useEffect, useState } from 'react';

const useScrollHandler = (scrollableRef) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling || !scrollableRef.current) {
        return;
      }

      const delta = Math.sign(event.deltaY);
      const scrollAmount = window.innerHeight;

      if (delta > 0) {
        const nextSection = scrollableRef.current.nextSibling;
        if (nextSection) {
          setIsScrolling(true);
          window.scrollTo({
            top: window.pageYOffset + scrollAmount,
            behavior: 'smooth',
          });

          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        }
      } else if (delta < 0 && window.pageYOffset > 0) {
        setIsScrolling(true);
        window.scrollTo({
          top: window.pageYOffset - scrollAmount,
          behavior: 'smooth',
        });

        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    if (scrollableRef.current) {
      scrollableRef.current.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (scrollableRef.current) {
        scrollableRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, [isScrolling, scrollableRef]);

  return isScrolling;
};

export default useScrollHandler;