"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

const nav_item = ["About", "Experience", "Projects"];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo name={"Priyam"} />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]"
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          {nav_item.map((label, index) => (
            <React.Fragment key={label}>
              <li className="first:mt-8">
                <Link
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 "
                  )}
                  onClick={() => setOpen(false)}
                  aria-current={pathname.includes(label) ? "page" : undefined}
                  href={`/#${label.toLowerCase()}`}
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                      pathname.includes(label)
                        ? "translate-y-6"
                        : "translate-y-18"
                    )}
                  />
                  <span className="relative">{label}</span>
                </Link>
              </li>
              {index < nav_item.length - 1 && (
                <span
                  className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </React.Fragment>
          ))}
          <li>
            <Button label={"Contact"} className="ml-3" />
          </li>
        </div>
        <DesktopMenu pathname={pathname} />
      </ul>
    </nav>
  );
}

function NameLogo({ name }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-900"
    >
      {name}
    </Link>
  );
}

function DesktopMenu({ pathname }) {
  const MotionLink = motion(Link);

  // const motionValues = nav_item.map(() => ({
  //   x: useMotionValue(0),
  //   y: useMotionValue(0),
  // }));

  //function to return a value between 1 and -1 for the
  //position of the cursor/link
  const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  // const setTransform = (item, event, x, y) => {
  //   const bounds = item.getBoundingClientRect();
  //   console.log("bounds", bounds);
  //   console.log("event.clientX", event.clientX);
  //   console.log("event.clientY", event.clientY);
  //   const relativeX = event.clientX - bounds.left;
  //   const relativeY = event.clientY - bounds.top;
  //   console.log("relativeX", relativeX);
  //   console.log("relativeY", relativeY);
  //   const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
  //   const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
  //   console.log("xRange", xRange);
  //   console.log("yRange", yRange);

  //   x.set(xRange * 10);
  //   y.set(yRange * 10);
  // };

  useEffect(() => {
    let items = document.querySelectorAll("ul li").forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        const bounds = item.getBoundingClientRect();
        console.log("bounds", bounds);

        let x = e.offsetX;
        let y = e.offsetY;

        const xRange = mapRange(0, bounds.width, -1, 1)(x);
        const yRange = mapRange(0, bounds.height, -1, 1)(y);

        console.log("xRange1", xRange);
        console.log("yRange1", yRange);

        let transX = xRange * 10;
        let transY = yRange * 10;

        console.log("transX", transX);
        console.log("transY", transY);

        item.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
      });

      item.addEventListener("mouseout", (e) => {
        item.style.transform = ""; 
      });
    });
  });

  // const motionValues = nav_item.map(() => ({
  //   x: useMotionValue(0),
  //   y: useMotionValue(0),
  // }));

  // const motionValues = nav_item.map((item) => {
  //   x: useMotionValue(0);
  //   y: useMotionValue(0)
  // })

  return (
    <ul className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {nav_item.map((label, index) => {
        return (
          <React.Fragment key={index}>
            <AnimatePresence>
              <motion.li>
                <MotionLink
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
                  )}
                  href={`/#${label.toLowerCase()}`}
                >
                  <motion.span
                    className={clsx(
                      "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                      pathname.includes(label)
                        ? "translate-y-6 bg-yellow-300"
                        : "translate-y-8"
                    )}
                  />
                  <span className="relative">{label}</span>
                </MotionLink>
              </motion.li>
            </AnimatePresence>

            {index < nav_item.length - 1 && (
              <span
                className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                aria-hidden="true"
              >
                /
              </span>
            )}
          </React.Fragment>
        );
      })}
      <li>
        <Button label={"Contact"} className="ml-3" />
      </li>
    </ul>
  );
}
