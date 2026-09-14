"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    eyebrow: "Discover",
    title: "Find the right dentist.",
    description:
      "Search trusted dental professionals by location, specialty, availability, and the care you need.",
    visualLabel: "Dentist discovery",
    visualDetail: "Search by care, place, or availability",
    visualType: "search",
  },
  {
    number: "02",
    eyebrow: "Choose",
    title: "Pick a time that works.",
    description:
      "See real appointment availability and choose a time that fits naturally into your day.",
    visualLabel: "Appointment selection",
    visualDetail: "Tuesday, 18 June",
    visualType: "calendar",
  },
  {
    number: "03",
    eyebrow: "Book",
    title: "Confirm your visit.",
    description:
      "Review your appointment details and confirm your visit in just a few steps.",
    visualLabel: "Visit confirmed",
    visualDetail: "Your appointment is reserved",
    visualType: "confirm",
  },
  {
    number: "04",
    eyebrow: "Stay on track",
    title: "Keep your care connected.",
    description:
      "Manage appointments, treatment information, documents, and follow-ups in one place.",
    visualLabel: "Care overview",
    visualDetail: "Everything in one place",
    visualType: "overview",
  },
] as const;

function StepVisual({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="relative aspect-16/10 overflow-hidden rounded-[1.75rem] border border-[#0F2438]/10 bg-[#DCEBF5] shadow-[0_30px_80px_-36px_rgba(15,36,56,0.4)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.9),transparent_33%),linear-gradient(135deg,#DDEDF7,#B9D7EA)]"
      />

      <div className="absolute inset-5 rounded-[1.25rem] border border-white/75 bg-white/55 p-5 backdrop-blur-sm sm:inset-8 sm:p-7">
        <div className="flex items-center justify-between border-b border-[#0F2438]/10 pb-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C6BAF]">
            DentiCare
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#5E7890]">
            {step.number} / 04
          </span>
        </div>

        <div className="mt-5 flex items-center gap-4 sm:mt-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2C6BAF]/20 bg-white/80 text-[#2C6BAF]">
            {step.visualType === "search" && <span aria-hidden="true" className="text-xl">⌕</span>}
            {step.visualType === "calendar" && <span aria-hidden="true" className="text-xs font-semibold">18</span>}
            {step.visualType === "confirm" && <span aria-hidden="true" className="text-lg">✓</span>}
            {step.visualType === "overview" && <span aria-hidden="true" className="text-lg">+</span>}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#0F2438] sm:text-base">{step.visualLabel}</p>
            <p className="mt-1 truncate text-xs text-[#647A8D]">{step.visualDetail}</p>
          </div>
        </div>

        {step.visualType === "search" && (
          <div className="mt-6 space-y-3 sm:mt-8">
            <div className="flex h-10 items-center rounded-lg border border-[#0F2438]/10 bg-white/75 px-4 text-xs text-[#7690A2]">
              <span className="mr-3 text-[#2C6BAF]">⌕</span>
              Search dentists or treatments
            </div>
            <div className="flex gap-2">
              <span className="h-7 w-24 rounded-full bg-[#2C6BAF]/15" />
              <span className="h-7 w-28 rounded-full bg-white/75" />
              <span className="hidden h-7 w-20 rounded-full bg-white/75 sm:block" />
            </div>
          </div>
        )}

        {step.visualType === "calendar" && (
          <div className="mt-6 grid grid-cols-7 gap-1.5 sm:mt-8 sm:gap-2">
            {Array.from({ length: 14 }, (_, index) => (
              <span
                key={index}
                className={`flex aspect-square items-center justify-center rounded-md text-[10px] ${index === 9 ? "bg-[#2C6BAF] text-white" : "bg-white/70 text-[#71899B]"}`}
              >
                {index + 1}
              </span>
            ))}
          </div>
        )}

        {step.visualType === "confirm" && (
          <div className="mt-6 flex items-center gap-3 rounded-lg border border-[#2C6BAF]/15 bg-white/70 p-3 sm:mt-8 sm:p-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2C6BAF] text-sm text-white">✓</span>
            <span className="h-2 w-28 rounded-full bg-[#0F2438]/15 sm:w-40" />
            <span className="ml-auto h-2 w-10 rounded-full bg-[#2C6BAF]/30" />
          </div>
        )}

        {step.visualType === "overview" && (
          <div className="mt-6 grid grid-cols-[1.35fr_0.65fr] gap-3 sm:mt-8">
            <div className="h-20 rounded-lg border border-[#0F2438]/10 bg-white/70 p-3">
              <span className="block h-2 w-16 rounded-full bg-[#2C6BAF]/35" />
              <span className="mt-5 block h-2 w-24 rounded-full bg-[#0F2438]/10" />
            </div>
            <div className="h-20 rounded-lg border border-[#0F2438]/10 bg-white/70 p-3">
              <span className="block h-2 w-8 rounded-full bg-[#2C6BAF]/35" />
              <span className="mt-5 block h-2 w-12 rounded-full bg-[#0F2438]/10" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches);
    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    let frame = 0;
    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
      const travelled = Math.min(Math.max(-rect.top, 0), scrollableDistance);
      setProgress(travelled / scrollableDistance);
      frame = 0;
    };

    const requestProgressUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    return () => {
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      motionQuery.removeEventListener("change", updateMotionPreference);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activeStep = Math.min(steps.length - 1, Math.floor(progress * steps.length));
  const currentStep = steps[activeStep];
  const motionTransition = reducedMotion ? "" : "transition-all duration-500";

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative min-h-[420vh] bg-[#F4F8FC]"
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-16 sm:py-20">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="mb-12 max-w-2xl sm:mb-16 lg:mb-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C6BAF]">Dental journey</p>
            <h2
              id="how-it-works-heading"
              className="mt-5 max-w-xl text-[2.8rem] font-medium leading-[0.96] tracking-[-0.055em] text-[#0F2438] sm:text-5xl lg:text-[4.75rem]"
            >
              From finding care
              <span className="block text-[#2C6BAF]">to staying on track.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#526173] sm:text-lg sm:leading-8">
              A simpler dental experience from the first search to every appointment that follows.
            </p>
          </div>

          <div className="hidden md:block" aria-label="Dental journey progress">
            <div className="relative">
              <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-[#0F2438]/12" />
              <div aria-hidden="true" className="absolute left-[12.5%] top-5 h-0.5 bg-[#2C6BAF]" style={{ width: `${progress * 75}%` }} />

              <div className="relative grid grid-cols-4">
                {steps.map((step, index) => {
                  const isPassed = index <= activeStep;
                  const isCurrent = index === activeStep;

                  return (
                    <div key={step.number} className="flex flex-col items-center">
                      <div
                        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-[#F4F8FC] ${motionTransition} ${isPassed ? "border-[#2C6BAF] bg-[#2C6BAF] text-white" : "border-[#0F2438]/15 text-[#7C8794]"} ${isCurrent && !reducedMotion ? "scale-110 shadow-[0_0_0_7px_rgba(44,107,175,0.1)]" : ""}`}
                      >
                        <span className="text-[10px] font-semibold tracking-[0.08em]">{step.number}</span>
                      </div>
                      <p className={`mt-5 text-center text-sm font-semibold ${motionTransition} ${isPassed ? "text-[#0F2438]" : "text-[#8993A0]"}`}>
                        {step.title.replace(".", "")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div key={currentStep.number} className={reducedMotion ? "" : "animate-[timelineFade_500ms_ease-out]"} aria-live="polite">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#2C6BAF]">{currentStep.number} / {currentStep.eyebrow}</p>
              <h3 className="mt-5 text-[2.5rem] font-medium leading-none tracking-tighter text-[#0F2438] sm:text-4xl lg:text-5xl">{currentStep.title}</h3>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">{currentStep.description}</p>
            </div>

            <StepVisual step={currentStep} />
          </div>

          <div className="mt-12 flex items-stretch gap-5 md:hidden">
            <div className="relative flex w-10 shrink-0 flex-col items-center">
              <div className="absolute bottom-5 top-5 w-px bg-[#0F2438]/12" />
              <div
                aria-hidden="true"
                className="absolute bottom-5 top-5 w-0.5 origin-top bg-[#2C6BAF]"
                style={{ transform: `scaleY(${progress})` }}
              />
              <div className="relative z-10 flex w-full flex-col justify-between gap-10">
                {steps.map((step, index) => {
                  const isPassed = index <= activeStep;
                  const isCurrent = index === activeStep;

                  return (
                    <div
                      key={step.number}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border bg-[#F4F8FC] text-[10px] font-semibold tracking-[0.08em] ${motionTransition} ${isPassed ? "border-[#2C6BAF] bg-[#2C6BAF] text-white" : "border-[#0F2438]/15 text-[#7C8794]"} ${isCurrent && !reducedMotion ? "scale-110 shadow-[0_0_0_7px_rgba(44,107,175,0.1)]" : ""}`}
                    >
                      {step.number}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-10">
              {steps.map((step, index) => (
                <p key={step.number} className={`flex h-10 items-center text-sm font-semibold ${motionTransition} ${index <= activeStep ? "text-[#0F2438]" : "text-[#8993A0]"}`}>
                  {step.title.replace(".", "")}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}