"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/Icon/Icon";

interface IAccordianProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export default function Accordion({ items }: IAccordianProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <div
          key={index}
          className={`rounded-lg p-[24px] ${
            openIndex !== index
              ? "bg-[#F9F9F6]"
              : "bg-white border-[0.5px] border-[#00000033]"
          }`}
        >
          <button
            className="w-full flex justify-between items-center text-left cursor-pointer"
            onClick={() => toggle(index)}
          >
            <span className="font-semibold text-lg">{faq.question}</span>
            {openIndex === index ? (
              <Icon name="minus.svg" />
            ) : (
              <Icon name="plus.svg" />
            )}
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden py-4"
              >
                <p className="text-gray-600 text-base">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
