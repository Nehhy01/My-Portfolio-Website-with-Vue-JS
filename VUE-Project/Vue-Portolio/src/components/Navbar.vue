<template>
  <header class="flex max-w-7xl mx-auto justify-between item-center  p-6 bg-opacity-50 relative z-20">
    <div
      class="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
    >
      Nehhy <span class="font-black">.Dev </span>
    </div>

    <div class="md:hidden z-30">
      <button
        class="block focus:outline-none p-2 rounded-lg bg-blue-800/50 cursor-pointer hover:bg-blue-700/50 transition-all duration-250"
        @click="isMenuOpen = !isMenuOpen"
      >
        <div class="relative w-6 h-6">
          <span
            :class="[
              `absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300`,
              isMenuOpen ? `rotate-45 top-3` : `top-1`,
            ]"
          ></span>
          <span
            :class="[
              `absolute inset-0 w-6 top-3 bottom-4.5 h-0.5 bg-blue-200 transition-all duration-300`,
              isMenuOpen ? `opacity-0` : `top-3 opacity-100`,
            ]"
          ></span>
          <span
            :class="[
              `absolute left-0 bottom-0 w-6 h-0.5 bg-blue-200 transition-all duration-300`,
              isMenuOpen ? `-rotate-45 top-3` : `top-5`,
            ]"
          ></span>
        </div>
      </button>
    </div>
    <nav
      :class="[
        `fixed inset-0 z-20 flex flex-col items-center justify-center  bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row`,
        isMenuOpen ? `block` : `hidden`,
      ]"
    >
      <ul
        class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
      >
        <li v-for="item in Menu" :key="item.name" class=" group relative">
          <a :href="item.href" class="relative block text-blue-100 hover:text-blue-400 transition-all duration-300 text md:text-base " @click="scrollToSection(item.href)">{{ item.name }}
          <span class="absolute bottom-0 left-0 bg-blue-400 w-0 h-0.5  hover:text-blue-400 transition-all duration-300 group-hover:w-full"></span></a>
        </li>
      </ul>
      <div class="mt-8 md:mt-0 md:ml-8"> 
      <button class="cursor-pointer text-sky-100 font-medium px-6 py-2 bg-linear-to-r from-blue-600 to-cyan-400 rounded-full" @click="toContact">
      Let's Talk
      </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
// const props = defineProps({title: String,description: String})
const isMenuOpen = ref(false);
const Menu = ref([
  { name: "Services", href: "#services" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);
const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if(section) {section.scrollIntoView({behavior: 'smooth'})}

};

function toContact() {
  const contact = document.querySelector("#contact")
  contact.scrollIntoView({behavior: 'smooth'})
}
</script>

<style scoped></style>
