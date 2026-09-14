"use client";

import { useEffect, useRef, useState } from "react";

const stories = [
  {
    id: "01",
    quote:
      "The whole experience felt simple from the beginning. I found a dentist I trusted and booked a time that actually worked for me.",
    name: "Ananya Mehta",
    meta: "Patient · New Delhi",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "02",
    quote:
      "Seeing available appointment times before I called made finding dental care much easier than I expected.",
    name: "Rahul Verma",
    meta: "Patient · Noida",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "03",
    quote:
      "Having my appointments and follow-ups together makes staying on top of my dental care feel much easier.",
    name: "Meera Kapoor",
    meta: "Patient · Gurugram",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function PatientStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeStory = stories[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = () => setIsReducedMotion(mediaQuery.matches);

    handleMotionPreference();
    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => mediaQuery.removeEventListener("change", handleMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || isReducedMotion || document.hidden) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % stories.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isReducedMotion, activeIndex]);

  useEffect(() => {
    const handleVisibilityChange = () => setIsPaused(document.hidden);

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const changeStory = (nextIndex: number) => {
    setActiveIndex((nextIndex + stories.length) % stories.length);
  };

  return (
    <section
      id="patient-stories"
      aria-labelledby="patient-stories-heading"
      className="bg-[#F8FBFD] py-24 sm:py-32 lg:py-40"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C6BAF]">
              Patient stories
            </p>

            <h2
              id="patient-stories-heading"
              className="mt-5 max-w-md text-[3.25rem] font-medium leading-[0.94] tracking-[-0.055em] text-[#0F2438] sm:text-6xl lg:text-[4.75rem]"
            >
              Real people.
              <span className="block text-[#2C6BAF]">Healthier smiles.</span>
            </h2>
          </div>

          <div className="min-w-0">
            <div
              key={activeStory.id}
              className="animate-[patient-story-in_700ms_ease-out]"
              aria-live="polite"
            >
              <blockquote className="max-w-3xl text-[1.65rem] font-medium leading-[1.2] tracking-[-0.035em] text-[#0F2438] sm:text-4xl lg:text-[2.75rem]">
                “{activeStory.quote}”
              </blockquote>

              <div className="mt-8 border-t border-[#0F2438]/10 pt-5">
                <p className="text-sm font-semibold text-[#0F2438]">
                  {activeStory.name}
                </p>
                <p className="mt-1 text-xs text-[#718094]">{activeStory.meta}</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-[1.25rem] border border-[#0F2438]/10 bg-[#EAF2F8] shadow-[0_20px_45px_-30px_rgba(15,36,56,0.38)] sm:w-48">
                <img
                  key={activeStory.image}
                  src={activeStory.image}
                  alt={`Portrait of ${activeStory.name}`}
                  className="h-full w-full animate-[patient-image-in_800ms_ease-out] object-cover"
                />
              </div>

              <div className="flex w-full items-center justify-between gap-5 border-t border-[#0F2438]/10 pt-5 sm:w-auto sm:min-w-[17rem] sm:border-t-0 sm:pt-0">
                <button
                  type="button"
                  aria-label="Previous patient story"
                  onClick={() => changeStory(activeIndex - 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0F2438]/15 text-lg text-[#0F2438] transition-colors hover:border-[#2C6BAF] hover:text-[#2C6BAF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6BAF] focus-visible:ring-offset-4"
                >
                  <span aria-hidden="true">←</span>
                </button>

                <span className="text-xs font-medium tracking-[0.16em] text-[#2C6BAF]">
                  {activeStory.id} / 03
                </span>

                <button
                  type="button"
                  aria-label="Next patient story"
                  onClick={() => changeStory(activeIndex + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0F2438]/15 text-lg text-[#0F2438] transition-colors hover:border-[#2C6BAF] hover:text-[#2C6BAF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6BAF] focus-visible:ring-offset-4"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 sm:justify-end">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  type="button"
                  aria-label={`Show patient story ${story.id}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  onClick={() => changeStory(index)}
                  className="group flex h-6 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C6BAF] focus-visible:ring-offset-2"
                >
                  <span
                    className={`block h-1 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? "w-8 bg-[#2C6BAF]"
                        : "w-2 bg-[#B9C8D5] group-hover:bg-[#7898B3]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}