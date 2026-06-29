"use client";

import { useEffect, useRef } from "react";
import { heroWords } from "@/data/content";

const LINES = [
  { id: "1", key: "outputs" as const },
  { id: "2", key: "clients" as const },
] as const;

const CHAR_STAGGER_MS = 48;
const TRANSITION_MS = 550;
const HOLD_MS = 2400;
const INITIAL_DELAY_MS = 1500;

export function useHeroAnimation(containerRef: React.RefObject<HTMLElement | null>) {
  const indicesRef = useRef({ outputs: 0, clients: 0 });

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const containerEl: HTMLElement = root;

    let running = true;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    async function animateWord(span: HTMLElement, word: string, direction: "in" | "out") {
      if (direction === "in") {
        span.innerHTML = "";
        const chars = word.split("");

        chars.forEach((char, i) => {
          const el = document.createElement("span");
          el.className = "hw-char";
          el.textContent = char;
          span.appendChild(el);
          window.setTimeout(() => el.classList.add("hw-in"), i * CHAR_STAGGER_MS);
        });
        await wait(chars.length * CHAR_STAGGER_MS + TRANSITION_MS);
      } else {
        const existing = span.querySelectorAll(".hw-char");
        existing.forEach((el, i) => {
          window.setTimeout(() => el.classList.remove("hw-in"), i * CHAR_STAGGER_MS);
        });
        await wait(existing.length * CHAR_STAGGER_MS + TRANSITION_MS);
        span.innerHTML = "";
      }
    }

    async function runLine(line: (typeof LINES)[number]) {
      const span = containerEl.querySelector(
        `[data-hero-word="${line.id}"]`,
      ) as HTMLElement | null;
      if (!span) return;

      while (running) {
        const words = heroWords[line.key];
        const index = indicesRef.current[line.key];
        const word = words[index % words.length];
        indicesRef.current[line.key] = index + 1;

        await animateWord(span, word, "in");
        if (!running) break;
        await wait(HOLD_MS);
        if (!running) break;
        await animateWord(span, word, "out");
      }
    }

    let start = 0;

    const begin = () => {
      start = window.setTimeout(() => {
        LINES.forEach((line) => {
          void runLine(line);
        });
      }, INITIAL_DELAY_MS);
    };

    document.fonts.ready.then(begin).catch(begin);

    return () => {
      running = false;
      window.clearTimeout(start);
    };
  }, [containerRef]);
}
