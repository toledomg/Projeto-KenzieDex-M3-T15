import React, { useEffect, useRef } from 'react';

interface IInfinityScrollProps {
  callback: () => void;
}

const InfinityScroll = ({ callback }: IInfinityScrollProps) => {
  const scrollInfinityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0) {
        callback();
      }
    });

    if (scrollInfinityRef.current) {
      observer.observe(scrollInfinityRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [scrollInfinityRef]);

  return <div ref={scrollInfinityRef} />;
};

export default InfinityScroll;
