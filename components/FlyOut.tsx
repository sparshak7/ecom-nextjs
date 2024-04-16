"use client"

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/utils/navLinks";
import Link from "next/link";

const FlyOut = () => {
  return (
    <div className="flex justify-center z-50">
      <FlyoutLink FlyoutContent={PricingContent}>
        Browse
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({
  children,
  FlyoutContent,
}: {
  children: React.ReactNode;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit z-50"
    >
      <div className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </div>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold underline text-xl">Our Offerings</h3>
        <div className="flex flex-col gap-4">
          {navLinks.map((item, id) => (
            <Link
              href={`${item.url}`}
              key={id}
              className="relative h-fit w-fit group"
            >
              {item.name}
              <span className="absolute -bottom-2 -right-2 -left-2 h-1 origin-left bg-indigo-500 transition-transform duration-300 ease-out rounded-full transform scale-x-0 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlyOut;
