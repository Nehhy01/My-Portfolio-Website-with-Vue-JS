<template>
  <footer class="bg-gray-950/90 overflow-hidden py-20">
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div>
<!-- Logo and Texts -->

<div class="flex flex-col gap-4">
    <h2
      class="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
    >
    Nehhy.dev
    </h2>
    <p class=" text-blue-100 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eaque quidem tempora tenetur, nisi harum expedita cupiditate ipsam dicta corporis. isi harum expedita cupiditate ipsam dicta corporis !</p>

<div></div>
<div class="flex gap-3">
              <a
                v-for="social in socials"
                :key="social.alt"
                class="p-4 rounded-2xl"
                :href="social.src"
                :class="social.style"
                ><component
                  :is="social.src"
                  class="w-5 h-5"
                  :class="social.iconStyle"
                ></component>
              </a>
            </div>
</div>


<!-- Quick links -->
<div></div>

<!-- Services -->
<div></div>

<!-- right reserved -->
<div></div>

</div>

  </div>
  </footer>
</template>

<script setup>
import {AtSymbolIcon} from "@heroicons/vue/16/solid";

const socials = [
  {
    alt: "linkedIn",
    url: "https://www.linkedin.com/in/nehemiah-ola",
    style: "border-pink-600 border bg-red-900",
    iconStyle: "text-red-200",
    src: AtSymbolIcon,
  },
  {
    alt: "facebook",
    url: "https://www.linkedin.com/in/nehemiah-ola",
    style: "border-blue-600 border bg-blue-900",
    iconStyle: "text-blue-200",
    src: AtSymbolIcon,
  },
  {
    alt: "whatsapp",
    url: "https://www.linkedin.com/in/nehemiah-ola",
    style: "border-green-600 border bg-green-900",
    iconStyle: "text-green-200",
    src: AtSymbolIcon,
  },
];

</script>