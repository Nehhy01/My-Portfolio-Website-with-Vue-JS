<template>
  <section class="overflow-hidden relative py-20">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading Here -->
      <div class="text-center mb-22" data-aos="fade-up">
        <h2 class="text-white text-4xl md:text-5xl mb-3 font-bold">
          Get in
          <span
            class="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-600"
            >Touch</span
          >
        </h2>
        <p class="text-blue-100 text-xl font-semibold">
          Let's work together on your next project
        </p>
      </div>

      <!--  -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <!-- contact infos -->
        <div class="flex ml-10 gap-8 flex-col" data-aos="fade-right">
          <h3 class="text-2xl text-white font-bold">Contact Information</h3>
          <div class="flex flex-col gap-6">
            <div
              v-for="(contact, index) in contactInfo"
              :key="contact.id"
              data-aos="fade-right"
              :data-aos-delay="index * 100"
              class="flex items-center gap-4"
            >
              <component :is="contact.icon" class="w-6 h-6 text-blue-300"></component>
              <div>
                <h4 class="text-lg font-semibold text-white">{{ contact.category }}</h4>
                <p class="text-blue-200">{{ contact.address }}</p>
              </div>
            </div>
          </div>

          <!-- Follow me -->
          <div class="mt-4">
            <h3 class="text-2xl text-white font-bold mb-4">Follow Me</h3>
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
        </div>

        <!-- contact form -->

        <div class="col-span-2">
          <form class="flex flex-col gap-6 mt-10 lg:mt-0" @submit="handleSubmit" data-aos="fade-left">
            <!-- form Column -->

            <div class="flex gap-4 flex-col md:flex-row">
              <div class="flex flex-col w-full">
                <label class="label" for="name">Name</label>
                <input id="name" type="text" class="input-field" />
              </div>
              <div class="flex flex-col w-full">
                <label class="text-sm font-semibold mb-2 ml-1 text-white" for="email"
                  >Email</label
                >
                <input id="email" type="email" class="input-field" />
              </div>
            </div>

            <!-- form Column -->
            <div class="flex flex-col w-full">
              <label class="label" for="subject">Subject</label>
              <input
                id="subject"
                type="text"
                class="input-field"
                placeholder=""
              />
            </div>

            <!-- form Column -->
            <div class="flex flex-col w-full">
              <label class="label" for="message">Message</label>
              <textarea
                id="message"
                rows="3"
                type="text"
                class="input-field"
                placeholder="What do you wanna discuss 'bout?"
              />
            </div>

            <button
              type="submit"
              class="cursor-pointer hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 px-4 py-4 font-bold text-white text-lg rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { AtSymbolIcon, HomeIcon, PhoneArrowDownLeftIcon } from "@heroicons/vue/16/solid";

const contactInfo = [
  {
    id: 1,
    icon: PhoneArrowDownLeftIcon,
    category: "Email",
    address: "olanehemiah20@gmail.com",
  },
  {
    id: 2,
    icon: PhoneArrowDownLeftIcon,
    category: "Phone",
    address: "+234 708 446 6606",
  },
  {
    id: 3,
    icon: HomeIcon,
    category: "Location",
    address: "Lagos, Nigeria",
  },
];

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
