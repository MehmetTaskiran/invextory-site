"use client";

import { useState } from "react";
import { IntroAnimation } from "@/components/sections/IntroAnimation";
import { HeroSection } from "@/components/sections/hero";
import { SolutionSection } from "@/components/sections/solution";
import { RfidSection } from "@/components/sections/rfid";
import { SystemFlowSection } from "@/components/sections/system-flow";
import { HandheldSection } from "@/components/sections/HandheldSection";

export default function Page() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <IntroAnimation onFinish={() => setShowIntro(false)} />
      )}

      <main>
        <HeroSection />
         <SolutionSection />
         <HandheldSection />
        <SystemFlowSection />  
        <RfidSection />
      </main>
    </>
  );
}