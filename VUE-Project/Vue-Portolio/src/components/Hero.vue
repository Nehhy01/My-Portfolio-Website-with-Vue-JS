<template>
  <section class="relative min-h-screen w-full overflow-hidden flex items-center">
    <div
      class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10"
    >
      <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
        <!-- Hero Texts -->
        <div class="flex flex-col md:mt-0 mt-20 justify-center">
          <div class="text-white lg:text-left" data-aos="fade-right">
            <h1 class="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Hi, I'm
              <span
                class="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400"
                >Nehhy</span
              >✌️
            </h1>
            <p
              class="text-blue-200 font-medium text-lg md:text-xl mt-3"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Frontend Developer & Graphic Artist
            </p>
          </div>
          <p class="text-gray-300 pt-6 text-center lg:text-left mx-auto max-w-xl" data-aos="fade-right" data-aos-delay="200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officiis
            ex eligendi incidunt ratione aliquid doloremque porro odit rerum earum!
          </p>
          <div
            class="flex items-center gap-4 pt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button
              class="flex group w-full overflow-hidden hover:from-blue-400 hover:to-sky-600 transition ease-in duration-150 items-center justify-center bg-linear-to-r sm:w-max from-blue-800 relative to-cyan-400 px-8 py-4 md:px-8 rounded-xl cursor-pointer"
            >
              <span
                class="relative flex items-center justify-center text-white font-semibold text-lg"
                >Contact me
                <ArrowRightIcon
                  class="text-white ml-2 w-5 h-5 group-hover:translate-x-2 transition-all duration-300"
                />
              </span>
            </button>

            <button
              class="border-2 border-blue-400 px-8 py-4 md:px-8 rounded-xl relative flex w-full sm:w-max items-center justify-center group text-sky-400 cursor-pointer"
            >
              <div class="flex items-center justify-center relative">
                <ArrowDownTrayIcon
                  class="w-5 h-5 group-hover:translate-y-1 transition-all"
                /><span class="pl-3 font-semibold text-lg">Download CV</span>
              </div>
            </button>
          </div>

          <div
            class="flex mt-15 items-center gap-6 justify-center lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
              <p class="text-blue-400 text-3xl font-bold">50+</p>
              <p class="text-white text-sm">Projects</p>
            </div>
            <div>
              <p class="text-blue-400 text-3xl font-bold">3+</p>
              <p class="text-white text-sm">Years</p>
            </div>
            <div>
              <p class="text-blue-400 text-3xl font-bold">20+</p>
              <p class="text-white text-sm">Clients</p>
            </div>
          </div>
        </div>
        <!-- Hero-text Finish -->

        <!-- Hero Image -->
        <div class="lg:h-full flex justify-center lg:justify-end">
          <div class="relative w-full max-w-md lg:max-w-lg">
            <div class="relative z-10 bg-linear-to-r  from-blue-600 to-cyan-600 shadow-2xl rounded-[50%_40%_30%_60%/60%_30%_70%_30%] p-4 backdrop-blur-sm border border-blue-400/30 -tanslate-y-6" data-aos="zoom-in" data-aos-delay="500">
            
             <div class="overflow-hidden rounded-xl">
             <img src="../assets/hero1.png" loading="lazy" class="object-cover w-150 h-150 -translate-y-8" alt="">
             </div>
            </div>
            <div class="absolute -top-2 right-1 w-10 h-10 bg-blue-400 rounded-full blur-sm animate-pulse "></div>
          </div>
        </div>
        <!-- Hero Image don finish  -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/vue/16/solid";

const loading = ref(true);

onMounted(async () => {
  await nextTick();

  AOS.init({
    duration: 800,
    once: false,
    offset: 100,
    easing: "ease-in-out",
  });

  setTimeout(() => {
    loading.value = false;
  }, 800);
});
</script>
