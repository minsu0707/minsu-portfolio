"use client";

import { deleteImg } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SendEmailPage() {
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key !== "Enter") return;
    if (!linkInput.startsWith("http")) {
      toast.error("유효하지 않는 링크입니다.");
      return;
    }
    e.preventDefault();

    const url = linkInput.trim();
    if (!url) return;
    if (links.includes(url)) {
      toast.error("이미 추가한 링크입니다.");
      return;
    }
    if (links.length >= 5) {
      toast.error("추가 가능한 링크는 최대 5개입니다.");
      return;
    }

    setLinks([...links, url]);
    setLinkInput("");
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, idx) => idx !== index));
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-10 border-b border-gray-200 pb-4 text-2xl font-bold">
          Send Email
        </h2>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors outline-none focus:border-blue-300"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="내용을 입력하세요"
              className="resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors outline-none focus:border-blue-300"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="link" className="text-sm font-medium text-gray-700">
              링크 <span className="text-gray-400">(선택, 엔터로 추가)</span>
            </label>
            <input
              type="text"
              id="link"
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://example.com"
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm transition-colors outline-none focus:border-blue-300"
            />
            {links.length > 0 && (
              <ul className="mt-2 flex flex-wrap gap-2">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700"
                  >
                    <span className="break-all">{link}</span>
                    <button
                      type="button"
                      onClick={() => removeLink(index)}
                      className="shrink-0"
                    >
                      <Image
                        className="h-4 w-4 cursor-pointer opacity-50 transition-opacity hover:opacity-100"
                        src={deleteImg}
                        alt="x"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="button"
            className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            이메일 보내기
          </button>
        </form>
      </section>
    </main>
  );
}
