<script setup>
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Services from './components/Services.vue';
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900">
 <Navbar />
 <Hero />
 <Services />
 <About />
 <Experience />
  </div>
</template>
