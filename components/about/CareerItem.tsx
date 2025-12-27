"use client";

import { toggleArrowImg } from "@/assets";
import Image from "next/image";
import { useState } from "react";

interface CareerItemProps {
  company: string;
  position: string;
  type: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export function CareerItem({
  company,
  position,
  type,
  startDate,
  endDate,
  description,
}: CareerItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <article className="rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:border-blue-300">
        <header className="mb-6 flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold text-gray-900">{company}</h3>
            <p className="text-sm text-gray-600">
              {position} · {type}
            </p>
          </div>
          <time className="text-sm whitespace-nowrap text-gray-600">
            {startDate} ~ {endDate}
          </time>
        </header>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm text-gray-900 transition-transform hover:translate-x-1"
          aria-label="자세히 보기"
          aria-expanded={isOpen}
        >
          <span
            className={`text-2xl leading-none transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
          >
            <Image src={toggleArrowImg} alt=">" />
          </span>
          <span className="cursor-pointer underline-offset-3 hover:underline">
            자세히 보기
          </span>
        </button>

        {isOpen && description && (
          <div className="mt-4 text-sm text-gray-700">
            <p>{description}</p>
          </div>
        )}
      </article>
    </li>
  );
}
