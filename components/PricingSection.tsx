import React from "react";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";
import { Check } from "lucide-react";
import Image from "next/image";
import { icons } from "@/constants";
import { motion } from "framer-motion";

const PricingSection = ({ courseFees = "999/-" }) => {
  return (
    <section
      className={
        " w-screen overflow-clip relative flex flex-col mt-24 items-center"
      }
    >
      <div
        id={"pricing-section"}
        className={
          "section-content  relative w-10/12 h-full pt-72 z-40 flex flex-col items-center gap-y-16"
        }
      >
        <div
          className={
            "absolute bg-primary -z-10 w-96 h-72 rounded-full bottom-0 left-40 object-contain blur-[200px] "
          }
        />
        <Image
          unoptimized
          src={icons.marks}
          alt={"100"}
          height={100}
          width={100}
          className={"absolute select-none -z-40 right-32 top-20"}
        />
        <div className={"gradientBorder w-full h-full rounded-3xl"}>
          <div
            className={
              "w-full h-full bg-[#220D00] p-6 sm:p-12 lg:p-16 rounded-3xl"
            }
          >
            <div className={"flex lg:flex-row flex-col gap-x-2 gap-y-5"}>
              <div
                className={
                  "w-full lg:w-1/2 h-full lg:pr-12 flex flex-col gap-y-5 sm:gap-y-8 lg:gap-y-12"
                }
              >
                <h1 className={" text-3xl sm:text-6xl lg:text-7xl font-bold"}>
                Crack Every Question in a Flash – The PYQ Express is Here!
                </h1>
                <p>
                  {`Concepts Simplified. Time Maximized. Results Guaranteed.
`}
                </p>
                <a href="/enrollment">
                  <motion.button
                    id={"joinButtonPricingSection"}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "anticipate",
                    }}
                    className={
                      "bg-primary primary-button-animation border-white font-bold text-nowrap text-lg sm:text-xl lg:text-2xl border p-5 max-sm:p-3 w-full rounded-2xl"
                    }
                  >
                    Join Now <span className={"ml-2"}>🏆</span>
                  </motion.button>
                </a>
              </div>
              <div
                className={"w-full lg:w-1/2 h-full flex flex-col rounded-2xl"}
              >
                <div
                  className={
                    " bg-primary flex h-full flex-col p-10 items-center gap-y-6 rounded-2xl"
                  }
                >
                  <div
                    className={
                      "flex flex-col items-center gap-y-6 h-fit relative"
                    }
                  >
                    <h3 className={"text-2xl font-bold"}> Course Fees </h3>
                    <motion.img
                      animate={{ x: [0, 150] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      src={icons.handOnVideo}
                      alt={"hand"}
                      width={50}
                      height={50}
                      className={"absolute -bottom-5"}
                    />
                    <h2
                      className={
                        "text-6xl sm:text-7xl lg:text-8xl font-bold transition-all duration-200"
                      }
                    >
                      {`₹ ${courseFees}`}
                    </h2>
                  </div>
                  <ul
                    className={
                      "gap-y-6 flex flex-col text-sm sm:text-xl lg:text-2xl"
                    }
                  >
                    <li className={"flex flex-row gap-x-2"}>
                      <Check
                        className={"bg-foreground p-1 rounded-full"}
                        color={"#F15E04"}
                      />{" "}
                      Concise Conceptual Solutions
                    </li>
                    <li className={"flex flex-row gap-x-2"}>
                      <Check
                        className={"bg-foreground p-1 rounded-full"}
                        color={"#F15E04"}
                      />
                     Structured Topic and Chapter Segmentation
                    </li>
                    <li className={"flex flex-row gap-x-2"}>
                      <Check
                        className={"bg-foreground p-1 rounded-full"}
                        color={"#F15E04"}
                      />
                     Comprehensive Text Solution
                    </li>
                    <li className={"flex flex-row gap-x-2"}>
                      <Check
                        className={"bg-foreground p-1 rounded-full"}
                        color={"#F15E04"}
                      />
                      Refund applies only to student of this course
                    </li>
                    <li className={"flex flex-row gap-x-2"}>
                      <Check
                        className={"bg-foreground p-1 rounded-full"}
                        color={"#F15E04"}
                      />
                      Solutions crafted by renowned educators MT Sir, ALK Sir, NS Sir, and ABJ Sir,
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
