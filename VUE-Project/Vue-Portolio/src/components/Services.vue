<template>
  <section class="relative py-20 overflow-hidden" id="services">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center m-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My
          <span
            class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400"
            >Services</span
          >
        </h2>
        <p
          class="text-blue-200 text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Here is how you can work with me, rest assured, you get permium experience from seasoned hands on your projects.
        </p>
      </div>

      <!-- Services Cards go here -->
      <div class="grid grid-cols-1 md:grid-cols-2  gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          :data-aos="'fade-in'"
          :data-aos-delay="(index + 1) * 100"
          class="group relativep-8 rounded-2xl bg-linear-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all p-6 duration-500 hover:transform hover:-translate-y-2"
        >
          <div
            class="absolute inset-0 bg-linear-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 duration-0 transition-opacity group-hover:opacity-100"
          ></div>
          <div class="relative z-10 mb-6">
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 group-hover:scale-110 transition-transform duration-300"
            >
              <component :is="service.icon" class="w-8 h-8 text-blue-400"></component>
            </div>
          </div>
          <div class="relative z-10">
            <h3
              class="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300"
            >
              {{ service.name }}
            </h3>
            <p class="text-xl text-blue-100 leading-relaxed">{{ service.desc }}</p>
          </div>
          <div
            class="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"
          >
            <ArrowRightIcon class="'w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>
      <div class="text-center mt-16" data-aos="fade-up" data-aos-dalay="800">
      <div class="inline-flex flex-col sm:flex-row gap-4 items-center">
      <button class="px-8 py-4 rounded-xl border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center">Get in touch <ChatBubbleLeftRightIcon class="'w-5 h-5 ml-2"/> </button>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChatBubbleLeftRightIcon, PaintBrushIcon } from "@heroicons/vue/16/solid";
import {
  CodeBracketIcon,
  DocumentTextIcon,
  ServerStackIcon,
  ArrowRightIcon,
} from "@heroicons/vue/16/solid";
import { ref } from "vue";

const services = ref([
  {
    id: 1,
    icon: CodeBracketIcon,
    name: "Web Development",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, porro? adipisicing elit. Vero, porro.",
  },
  {
    id: 2,
    icon: PaintBrushIcon,
    name: "Graphics Design",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, porro? adipisicing elit. Vero, porro.",
  },
  {
    id: 3,
    icon: ServerStackIcon,
    name: "Backend ",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, porro? adipisicing elit. Vero, porro.",
  },
  {
    id: 4,
    icon: CodeBracketIcon,
    name: "Web Development",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, porro? adipisicing elit. Vero, porro.",
  },
]);
</script>
