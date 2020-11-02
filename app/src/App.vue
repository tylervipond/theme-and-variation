<template>
  <div :class="{ 'pt-32': !isVideoPlaying }">
    <transition name="header">
      <header
        v-show="showHeader"
        class="absolute left-0 top-0 right-0 h-32 bg-white px-4 flex flex-col justify-center"
      >
        <div class="max-w-5xl mx-auto w-full">
          <Link as="router-link" to="/">
            <Typography as="h1" variant="main-title" class="mb-2">
              Theme and Variation
            </Typography>
          </Link>
          <Typography variant="sub-title" as="h2">{{ subTitle }}</Typography>
        </div>
      </header>
    </transition>
    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Typography from "./components/Typography.vue";
import Link from "./components/Link.vue";
import { GETTERS_SHOW_HEADER, GETTERS_PLAYING_VIDEO } from "./store";

export default {
  name: "App",
  components: {
    Typography,
    Link,
  },
  computed: {
    subTitle() {
      return this.$route.meta.title;
    },
    ...mapGetters({
      showHeader: GETTERS_SHOW_HEADER,
      isVideoPlaying: GETTERS_PLAYING_VIDEO,
    }),
  },
};
</script>

<style scoped>
.header-enter-from,
.header-leave-to {
  transform: translateY(-100%);
}
.header-enter-active,
.header-leave-active {
  transition: all 0.3s ease;
}
</style>
