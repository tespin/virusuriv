"use client";
import React, { useState, useEffect } from "react";
import FlexContainer from "./components/FlexContainer";
import Clip from "./components/Clip";

export default function Home() {
  const id = "kkVTaW02lY1t01zMdSO7fWf9bNPr89OpQd8JPzPvo00hok";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <FlexContainer className="">
        <Clip playbackId={id} />
      </FlexContainer>
    </main>
  );
}
