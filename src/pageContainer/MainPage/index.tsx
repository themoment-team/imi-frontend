'use client';

import { Section1, Section2 } from '@/components';

import { useRef } from 'react';

const MainPage = () => {
  const section2Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Section1
        scrollToSection2={() =>
          section2Ref.current?.scrollIntoView({ behavior: 'smooth' })
        }
      />
      <Section2 ref={section2Ref} />
    </>
  );
};

export default MainPage;
