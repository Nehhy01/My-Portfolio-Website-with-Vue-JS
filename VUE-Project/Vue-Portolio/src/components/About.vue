<template>
  <section
    class="relative py-20 overflow-hideen min-h-screen flex items-center"
    id="about"
  >
    <div
      class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10"
    >
      <div class="grid lg:grid-cols-2 gap-10 xl:gap-14  items-center">
        <!-- GRID CHILD 1 -->
        <div class="lg:h-full flex justify-center lg:justify-start order-2 lg:order-1">
          <div class="relative w-full max-w-md">
            <div
              data-aos="zoom-in"
              class="relative bg-linear-to-br from-gray-800/60 to-blue-900/40 rounded-3xl p-6 background-blur-sm border broder-blue-500/30 shadow-2xl"
            >
              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="(image, index) in aboutImage"
                  :key="image.id"
                  class="relative group"
                  :data-aos="image.animation"
                  :data-aos-delay="image.delay"
                >
                  <div class="rounded-2xl p-2 border shadow-lg" :class="image.gradient">
                    <img
                      :src="image.src"
                      :alt="image.alt"
                      class="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div
                    class="absolute -top-2 -right-2 text-white text-xs px-2 py-1 rounded-full font-semibold"
                    :class="image.badgeColor"
                  >
                    {{ image.badge }}
                  </div>
                </div>
              </div>

              <div
                class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl px-6 py-3 border border-blue-400/40 shadow-xl"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p class="text-white text-center text-xl font-semibold capitalize">
                  3+ years of experience
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- GRID CHILD 2 -->
        <div class="text-center flex flex-col justify-center order-1 lg:order-2 lg:text-left" data-aos="fade-left">
          <h2 class="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            About
            <span
              class="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-500"
              >Me</span
            >
          </h2>
          <p
            class="text-blue-200 font-medium text-lg md:text-xl mt-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Frontend Developer & Graphics Dsign
          </p>

          <p
            class="text-gray-300 pt-4 text-center lg:text-left leading-relaxed"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas
            nemo? Impedit culpa sit temporibus tenetur sunt perspiciatis modi dicta! Odio
            quis consequatur, ratione labore iusto cum deserunt a similique adipisci
            doloribus voluptates vel itaque alias sunt repellendus at neque dolor
            inventore quaerat et sapiente optio id perspiciatis assumenda? Laborum.
          </p>

          <!-- my Tech Stacks -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div v-for="skill in skills" :key="skill.id" class="flex flex-col">
              <div class="flex items-center gap-3 mb-3">
                <component :is="skill.icon" class="w-6 h-6" :class="skill.iconColor">
                </component>
                <h3 class="text-white text-lg font-bold">{{ skill.title }}</h3>
              </div>
              <p class="text-left text-sm text-blue-100">{{ skill.desc }}</p>
            </div>
          </div>

          <!-- CTA buttons -->
          <div
            class="flex gap-4 pt-10 flex-col sm:flex-row"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              v-for="button in ctaButtons"
              :key="button.id"
              class="px-8 py-3 rounded-xl font-semibold transition-all group duration-300 gap-2 flex items-center justify-center"
              :class="button.classes"
            >
              <component
                :is="button.icon"
                class="w-6 h-6"
                :class="button.iconClass"
              ></component>
              {{ button.text }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import about1 from "../assets/About1.png";
import about2 from "../assets/About2.png";
import about3 from "../assets/About3.png";
import about4 from "../assets/About4.png";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketSquareIcon,
  CubeIcon,
  PaintBrushIcon,
  ServerIcon,
} from "@heroicons/vue/16/solid";

const aboutImage = ref([
  {
    id: 1,
    src: about1,
    alt: "Nehhy",
    gradient: `bg-linear-to-r from-blue-600 to-cyan-600 border-blue-400/40`,
    badge: "Professional",
    badgeColor: "bg-blue-500",
    animation: "fade-right",
    delay: 200,
  },
  {
    id: 2,
    src: about2,
    alt: "Nehhy",
    gradient: `bg-linear-to-r from-blue-500 to-cyan-500 border-blue-400/40`,
    badge: "Creative",
    badgeColor: "bg-cyan-500",
    animation: "fade-left",
    delay: 300,
  },
  {
    id: 3,
    src: about3,
    alt: "Nehhy",
    gradient: `bg-linear-to-r from-blue-500 to-cyan-500 border-blue-400/40`,
    badge: "Developer",
    badgeColor: "bg-blue-600",
    animation: "fade-right",
    delay: 400,
  },
  {
    id: 4,
    src: about4,
    alt: "Nehhy",
    gradient: `bg-linear-to-r from-blue-600 to-cyan-600 border-blue-400/40`,
    badge: "Designer",
    badgeColor: "bg-cyan-600",
    animation: "fade-left",
    delay: 600,
  },
]);

const skills = [
  {
    id: 1,
    icon: CodeBracketSquareIcon,
    iconColor: "text-blue-400",
    title: "Frontend",
    desc: "Vuejs React Git JavaScript Tailwind CSS",
  },
  {
    id: 2,
    icon: ServerIcon,
    iconColor: "text-cyan-400",
    title: "Backend",
    desc: "Nodejs Express, MongoDB",
  },
  {
    id: 3,
    icon: PaintBrushIcon,
    iconColor: "text-blue-400",
    title: "Graphics Design",
    desc: "CorelDraw Adobe Photoshop",
  },
  {
    id: 4,
    icon: CubeIcon,
    iconColor: "text-cyan-400",
    title: "Tools",
    desc: "Git VSCode AWS",
  },
];

const ctaButtons = [
  {
    id: 1,
    text: "View Portfolio",
    icon: ArrowRightIcon,
    iconClass: `ml-2 group-hover:translate-x-1 transition-transform`,
    classes: `bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500`,
  },
  {
    id: 2,
    text: "Contact Me",
    icon: ChatBubbleLeftRightIcon,
    iconClass: `mr-2`,
    classes: `border border-blue-400 text-blue-400 hover:bg-blue-400/10`,
  },
];
</script>
