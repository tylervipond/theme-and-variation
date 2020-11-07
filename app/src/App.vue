<template>
  <div class="h-full" :class="{ 'py-32': !isVideoPlaying }">
    <transition name="header">
      <header
        v-show="showUI"
        class="absolute z-20 left-0 top-0 right-0 h-32 bg-white flex flex-col justify-center"
      >
        <div class="max-w-5xl mx-auto w-full px-4">
            <Typography as="h1" variant="main-title" class="mb-2">
              <Link as="router-link" to="/">Theme and Variation</Link>
            </Typography>
          <Typography variant="sub-title" as="h2">
            {{ subTitle }}
          </Typography>
        </div>
      </header>
    </transition>
    <main class="relative z-10">
      <div class="max-w-5xl mx-auto w-full p-4 ">
        <router-view />
      </div>
    </main>
    <transition name="footer">
      <footer
        v-show="showUI"
        class="absolute z-20 left-0 bottom-0 right-0 h-32 bg-white px-4 flex flex-col justify-center"
      >
        <div class="max-w-5xl mx-auto w-full px-4">
          <Link href="mailto:tylervipond@gmail.com">Tyler Vipond</Link> 2020
        </div>
      </footer>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Typography from "./components/Typography.vue";
import Link from "./components/Link.vue";
import { GETTERS_SHOW_UI, GETTERS_PLAYING_VIDEO } from "./store";

export default {
  name: "App",
  components: {
    Typography,
    Link
  },
  computed: {
    subTitle() {
      return this.$route.meta.title;
    },
    ...mapGetters({
      showUI: GETTERS_SHOW_UI,
      isVideoPlaying: GETTERS_PLAYING_VIDEO
    })
  }
};
</script>

<style scoped>
.header-enter-from,
.header-leave-to {
  transform: translateY(-100%);
}
.header-enter-active,
.header-leave-active,
.footer-enter-active,
.footer-leave-active {
  transition: all 0.3s ease;
}
.footer-enter-from,
.footer-leave-to {
  transform: translateY(100%);
}
</style>
