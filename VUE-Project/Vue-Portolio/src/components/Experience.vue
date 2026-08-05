<template>
  <section class="relative overflow-hidden py-20" id="skills">
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2
          class="text-transparent bg-clip-text bg-linear-to-tr from-blue-500 to-cyan-500 text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          Skills <span class="text-white"> & Experience</span>
        </h2>
        <p class="text-blue-200 font-semibold mt-3 text-lg max-w-2xl mx-auto">
          My technical and professional experiences
        </p>
      </div>

      <div class="grid lg:grid-cols-2 items-center gap-12 lg:gap-16" data-aos="fade-right">

      <div class="h-full lg:justify-between lg:py-15 lg:flex lg:flex-col j's">

      <!-- Technical Skills -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <ArchiveBoxArrowDownIcon class="w-6 h-6 text-cyan-400" />
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              Technical Skills
            </h3>
          </div>

          <div class="space-y-6">
            <div v-for="skill in skills" :key="skill.id" class="group">
              <div class="flex items-center justify-between mb-3">
                <span class="text-blue-200 font-semibold flex items-center gap-2">
                  <component
                    :is="skill.icon"
                    class="w-5 h-5"
                    :class="skill.iconColor"
                  ></component>
                  {{ skill.title }}
                </span>
                <span :class="skill.percentageColor">{{ skill.percentage }}</span>
              </div>
              <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  :class="skill.gradient"
                  class="group-hover:scale-105 transition-all duration-500 h-full rounded-full overflow-hidden"
                  :style="{ width: skill.percentage + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stacks -->        
        <div class="mt-12" data-aos="fade-left">
          <h4
            class="text-2xl font-bold text-white mb-6 flex items-center gap-2"
            data-aos-delay="100"
          >
            <Squares2X2Icon class="w-6 h-6 text-cyan-400" />
            Tech Stack
          </h4>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="(tech, index) in techStack"
              :key="tech"
              data-aos="fade-left"
              :data-aos-delay="100 * index"
              class="px-4 py-2 bg-linear-to-r from-blue-500/40 rounded-full text-white border text-sm border-blue-400/30 font-medium hover:scale-105 transition-all duration-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>
</div>


        <!-- Work Experience -->
        <div data-aos="fade-left" class="mt-12 lg:mt-0">
          <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <BriefcaseIcon class="w-6 h-6 text-cyan-400" /> Work Experience
          </h3>

          <div class="space-y-8">
            <div
              v-for="exp in Experience"
              :key="exp.id"
              class="relative pl-6 border-l-2 group"
              :class="exp.borderColor"
            >
              <div
                class="absolute top-0 -left-2 w-4 h-4 rounded-full group-hover:scale-150 transition-all duration-300"
                :class="exp.dotColor"
              ></div>
              <div
                class="bg-linear-to-br from-gray-800/50 to-blue-900/30 rounded-2xl p-6 border backdrop-blur-sm group-hover:border-blue-400/40 transition-all duration-300"
                :class="exp.borderClass"
              >
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3"
                >
                  <h4 class="text-2xl font-semibold text-white">{{ exp.position }}</h4>
                  <span :class="exp.dateColor" class="mt-1 sm:mt-0">{{
                    exp.period
                  }}</span>
                </div>
                <p :class="exp.companyColor" class="font-medium mb-3">
                  {{ exp.company }}
                </p>
                <p class="text-blue-100 text-sm leading-relaxed">{{ exp.desc }}</p>
              </div>
            </div>
          </div>
        </div>




        
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  CubeIcon,
  PaintBrushIcon,
  ArchiveBoxArrowDownIcon,
  ServerIcon,
  Squares2X2Icon,
  BriefcaseIcon,
} from "@heroicons/vue/16/solid";
import {} from "vue";

const skills = [
  {
    id: 1,
    title: "Frontend Development",
    icon: CodeBracketIcon,
    iconColor: "text-blue-400",
    percentage: 90,
    percentageColor: "text-blue-400 text-sm",
    gradient: "bg-linear-to-r from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: ServerIcon,
    iconColor: "text-cyan-400",
    percentage: 85,
    percentageColor: "text-cyan-400 text-sm",
    gradient: "bg-linear-to-r from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "Graphics Designing",
    icon: PaintBrushIcon,
    iconColor: "text-blue-400",
    percentage: 93,
    percentageColor: "text-blue-400 text-sm",
    gradient: "bg-linear-to-r from-blue-500 to-cyan-500",
  },
];

const Experience = [
  {
    id: 1,
    position: "Frontend Intern",
    company: "FuelMetrics Inc.",
    period: "May 2026 - Present",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam, accusamus quae suscipit aperiam odio!",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-500",
    borderClass: "border-blue-500/20",
    dateColor: "text-blue-400 text-sm font-semibold",
    companyColor: "text-cyan-400",
  },
  {
    id: 2,
    position: "Frontend Intern",
    company: "UBA Group",
    period: "July 2026 - Present",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam, accusamus quae suscipit aperiam odio!",
    borderColor: "border-cyan-500/30",
    dotColor: "bg-cyan-500",
    borderClass: "border-cyan-500/20",
    dateColor: "text-cyan-400 text-sm font-semi-bold",
    companyColor: "text-blue-400",
  },

  {
    id: 3,
    position: "Web Developer Intern",
    company: "TechCrush",
    period: "December 2025 - March 2026",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam, accusamus quae suscipit aperiam odio!",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-500",
    borderClass: "border-blue-500/20",
    dateColor: "text-blue-400 text-sm font-semi-bold",
    companyColor: "text-cyan-400",
  },
];

const techStack = [
  "Vue JS",
  "React JS",
  "Tailwind CSS",
  "Node JS",
  "Express JS",
  "Canva",
  "CorelDraw",
  "Git",
];
</script>
