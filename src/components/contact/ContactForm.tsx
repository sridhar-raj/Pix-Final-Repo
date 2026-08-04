"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
  }

  return (
    <div className="relative flex w-full flex-1 flex-col gap-6 overflow-hidden rounded-2xl border border-dark-15 bg-dark-06 p-8 sm:p-10">
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        I&rsquo;m Here for Your Questions
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full rounded-[10px] border border-dark-15 bg-dark-08 px-5 py-3.5 text-base text-white placeholder:text-grey-50 focus:border-dark-15 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full rounded-[10px] border border-dark-15 bg-dark-08 px-5 py-3.5 text-base text-white placeholder:text-grey-50 focus:border-dark-15 focus:outline-none"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Message"
          className="w-full resize-none rounded-[10px] border border-dark-15 bg-dark-08 px-5 py-3.5 text-base text-white placeholder:text-grey-50 focus:border-dark-15 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-[10px] bg-[#d85040] py-3.5 text-base font-medium text-white transition-colors hover:bg-[#c2452f]"
        >
          {status === "success" ? "Thank you" : "Send a Message"}
        </button>
      </form>
    </div>
  );
}
