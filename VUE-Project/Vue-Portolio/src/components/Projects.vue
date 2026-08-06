<template>
  <section class="relative py-20 overflow-hidden" id="projects">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section-Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My
          <span
            class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600"
            >Projects</span
          >
        </h2>
        <p class="text-lg font-semibold text-blue-200 mx-auto max-w-2xl">
          A collection of my recent works and creative solutions
        </p>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group relative bg-linear-to-br from-gray-800/50 to-blue-900/30 rounded-3xl overflow-hidden border background-blur-sm hover:boder-blue-400/40 transition-all duration-500 hover:transform hover:-translate-y-2"
          :class="project.borderColor"
          data-aos="fade-up"
          :data-aos-delay="(index + 1) * 100"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
            />

            <div
              class="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent"
            ></div>
            <div class="absolute top-4 right-4">
              <span
                class="px-3 py-1 text-white text-xs rounded-full font-semibold"
                :class="project.badgeColor"
                >{{ project.category }}</span
              >
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <h3
              class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300"
            >
              {{ project.title }}
            </h3>
            <p class="text-blue-200 mt-2 mb-4 leading-tight">{{ project.desc }}</p>

            <!-- Technologies used -->
            <div class="flex gap-3 flex-wrap mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech.name"
                class="py-1 px-3 rounded border text-white"
                :class="tech.class"
                >{{ tech.name }}</span
              >
            </div>
            <!-- ------------------- -->

            <!-- Project links -->
            <div class="flex gap-5">
              <a
                v-for="link in project.links"
                :key="link.name"
                :href="link.url"
                :class="link.class"
                class="flex items-center gap-1 transition-colors duration-300 text-sm font-medium"
              >
                <component :is="link.icon" class="w-4 h-4"></component>
                {{ link.name }}
              </a>
            </div>
          </div>
          <!-- ------------------- -->
        </div>
        <!-----END OF A SINGLE PROJECT CARD----- -->
      </div>
      <!-----END OF A SINGLE PROJECT GRID----- -->

      <!-- CTA Section -->
      <div class="text-center mt-16" data-aos="fade-up">
        <div class="flex flex-col w-full sm:flex-row gap-4 items-center justify-center">

        <button  class=" cursor-pointer px-8 py-4 rounded-xl bg-linear-to-r group from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center">View All Projects <ArrowRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300"/> </button>

        <button  class="relative overflow-hidden cursor-pointer px-8 py-4 rounded-xl border border-blue-400 text-blue-200 font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center"> 
        <ChatBubbleLeftRightIcon class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-all duration-300"/> Discuss Projects  </button>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { CodeBracketIcon, EyeIcon, ArrowRightIcon, ChatBubbleLeftRightIcon } from "@heroicons/vue/16/solid";

const projects = ref([
  {
    id: 1,
    title: "Abojuto Healthcare",
    desc:
      "Abojuto is an hospital management system that coordinates the operations of the patients, doctor, nurses and all financial transactions. It includes features such as appointment, consultations, patient registration and lots more.",
    image: project1,
    category: "Full-stack",
    borderColor: "border-blue-500/20",
    badgeColor: "bg-blue-500",
    technologies: [
      { name: "Vue JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
      { name: "Tailwind CSS", class: "bg-cyan-500/20 border-cyan-400/30 text-cyan" },
      { name: "Express JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
    ],
    links: [
      {
        name: "Live Demo",
        url: "#",
        icon: EyeIcon,
        class: "text-blue-400 hover:text-blue-300",
      },
      {
        name: "Code",
        url: "#",
        icon: CodeBracketIcon,
        class: "text-cyan-400 hover:text-cyan-300",
      },
    ],
  },
  {
    id: 2,
    title: "Abojuto Healthcare",
    desc:
      "Abojuto is an hospital management system that coordinates the operations of the patients, doctor, nurses and all financial transactions. It includes features such as appointment, consultations, patient registration and lots more.",
    image: project2,
    category: "Full-stack",
    borderColor: "border-cyan-500/20",
    badgeColor: "bg-cyan-500",
    technologies: [
      { name: "Vue JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
      { name: "Tailwind CSS", class: "bg-cyan-500/20 border-cyan-400/30 text-cyan" },
      { name: "Express JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
    ],
    links: [
      {
        name: "Live Demo",
        url: "#",
        icon: EyeIcon,
        class: "text-blue-400 hover:text-blue-300",
      },
      {
        name: "Code",
        url: "#",
        icon: CodeBracketIcon,
        class: "text-cyan-400 hover:text-cyan-300",
      },
    ],
  },
  {
    id: 3,
    title: "Abojuto Healthcare",
    desc:
      "Abojuto is an hospital management system that coordinates the operations of the patients, doctor, nurses and all financial transactions. It includes features such as appointment, consultations, patient registration and lots more.",
    image: project3,
    category: "Full-stack",
    borderColor: "border-blue-500/20",
    badgeColor: "bg-blue-500",
    technologies: [
      { name: "Vue JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
      { name: "Tailwind CSS", class: "bg-cyan-500/20 border-cyan-400/30 text-cyan" },
      { name: "Express JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
    ],
    links: [
      {
        name: "Live Demo",
        url: "#",
        icon: EyeIcon,
        class: "text-blue-400 hover:text-blue-300",
      },
      {
        name: "Code",
        url: "#",
        icon: CodeBracketIcon,
        class: "text-cyan-400 hover:text-cyan-300",
      },
    ],
  },
  {
    id: 4,
    title: "Abojuto Healthcare",
    desc:
      "Abojuto is an hospital management system that coordinates the operations of the patients, doctor, nurses and all financial transactions. It includes features such as appointment, consultations, patient registration and lots more.",
    image: project4,
    category: "Full-stack",
    borderColor: "border-cyan-500/20",
    badgeColor: "bg-cyan-500",
    technologies: [
      { name: "Vue JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
      { name: "Tailwind CSS", class: "bg-cyan-500/20 border-cyan-400/30 text-cyan" },
      { name: "Express JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
    ],
    links: [
      {
        name: "Live Demo",
        url: "#",
        icon: EyeIcon,
        class: "text-blue-400 hover:text-blue-300",
      },
      {
        name: "Code",
        url: "#",
        icon: CodeBracketIcon,
        class: "text-cyan-400 hover:text-cyan-300",
      },
    ],
  },
  {
    id: 5,
    title: "Abojuto Healthcare",
    desc:
      "Abojuto is an hospital management system that coordinates the operations of the patients, doctor, nurses and all financial transactions. It includes features such as appointment, consultations, patient registration and lots more.",
    image: project5,
    category: "Full-stack",
    borderColor: "border-blue-500/20",
    badgeColor: "bg-blue-500",
    technologies: [
      { name: "Vue JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
      { name: "Tailwind CSS", class: "bg-cyan-500/20 border-cyan-400/30 text-cyan" },
      { name: "Express JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
    ],
    links: [
      {
        name: "Live Demo",
        url: "#",
        icon: EyeIcon,
        class: "text-blue-400 hover:text-blue-300",
      },
      {
        name: "Code",
        url: "#",
        icon: CodeBracketIcon,
        class: "text-cyan-400 hover:text-cyan-300",
      },
    ],
  },
  {
    id: 6,
    title: "Abojuto Healthcare",
    desc:
      "Abojuto is an hospital management system that coordinates the operations of the patients, doctor, nurses and all financial transactions. It includes features such as appointment, consultations, patient registration and lots more.",
    image: project6,
    category: "Full-stack",
    borderColor: "border-cyan-500/20",
    badgeColor: "bg-cyan-500",
    technologies: [
      { name: "Vue JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
      { name: "Tailwind CSS", class: "bg-cyan-500/20 border-cyan-400/30 text-cyan" },
      { name: "Express JS", class: "bg-blue-500/20 border-blue-400/30 text-blue" },
    ],
    links: [
      {
        name: "Live Demo",
        url: "#",
        icon: EyeIcon,
        class: "text-blue-400 hover:text-blue-300",
      },
      {
        name: "Code",
        url: "#",
        icon: CodeBracketIcon,
        class: "text-cyan-400 hover:text-cyan-300",
      },
    ],
  },
]);
</script>
