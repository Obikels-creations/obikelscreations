"use client";
import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../layouts/max-width-wrapper";
import { Badge } from "./badge";
import Link from "next/link";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <MaxWidthWrapper>
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-4xl font-serif mb-4 text-black dark:text-white max-w-4xl">
        A Journey of Yarn and Creativity
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-lg max-w-lg">
          {`Obikels Creations Ltd was born out of a passion for crochet and a desire to create
unique, handcrafted garments. `}
        </p>
      </div>
      

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden font-serif md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20  pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block font-serif text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 space-y-4 px-4 md:px-8 lg:px-10">
      <h3 className="text-neutral-700 dark:text-neutral-300 font-medium text-lg md:text-xl">{`Checkout Our Brand Publications`}</h3>
       <div className="grid md:grid-cols-2 items-center justify-center gap-4">
        <Badge className="bg-gray-800 w-full text-center justify-center text-base md:text-lg">
          <Link href='https://ukft.org/member-spotlight-obikels-creations/'>{`Member spotlight: The story of Obikels Creations`}</Link>
        </Badge>
        <Badge className="bg-gray-800 w-full text-center justify-center text-base md:text-lg">
          <Link href='https://allure.vanguardngr.com/2024/05/crochet-couture-obikels-creations-leading-the-charge/'>{`Obikels Creations Leading the Charge`}</Link>
        </Badge>
        <Badge className="bg-gray-800 w-full text-center justify-center text-base md:text-lg">
          <Link href='https://www.citypeopleonline.com/how-obikels-crochet-became-crochets-rising-star/'>{`How Obikels Crochet Became Crochet’s Rising Star`}t</Link>
        </Badge>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300 font-medium text-lg md:text-xl max-w-xl">
          {`Thank you for choosing Obikels Creations Ltd. We invite you to join us on this
exciting journey of creativity and passion.`}
        </p>
      </div>
    </div>
    </MaxWidthWrapper>
  );
};
