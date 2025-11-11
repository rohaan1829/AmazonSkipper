"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Contact3 from "@/components/sections/contact/Contact3";
import Link from "next/link";

const ContactMain = () => {
  return (
    <main className="overflow-hidden bg-black-color text-white">
      <section className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-20 left-[18%] h-72 w-72 rounded-full bg-[#22C55E]/35 blur-[110px]"></div>
          <div className="absolute top-[30%] right-[22%] h-80 w-80 rounded-full bg-[#0EA5E9]/25 blur-[120px]"></div>
          <div className="absolute bottom-[-12%] left-[26%] h-64 w-64 rounded-full bg-[#16A34A]/30 blur-[100px]"></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mt-10 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[58px]">
            Let's build the calm, profitable Amazon brand you deserve
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Ready to swap chaotic ad spend for predictable revenue? Share your Amazon story and we’ll map out the steps to steady growth, stronger margins, and a partner you can actually reach.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-black-color pb-120px">
        <div className="container">
          <Contact3 />
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[36px] border border-[#4CAF50]/30 bg-gradient-to-br from-black via-[#121212] to-[#0f2b1d] px-8 py-14 text-center text-white">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-[-25%] left-[20%] h-72 w-72 rounded-full bg-[#22C55E] blur-[110px]"></div>
              <div className="absolute bottom-[-18%] right-[18%] h-[300px] w-[300px] rounded-full bg-[#0EA5E9]/35 blur-[120px]"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
                Find My Profit Leaks
              </h2>
              <p className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto">
                Every brand loses money somewhere - we’ll show you where, and how to fix it for good.
              </p>
              <div className="mt-10 flex justify-center">
              <ButtonPrimary type={2} isIcon={true} url="/contact">
                  Find My Profit Leaks
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactMain;
