<template>
  <Gif class="absolute left-0 top-0" v-if="videoPlaying" :urls="gifUrls" />
  <Warning v-else @warning-acknowledged="warningAccepted" />
</template>
<script>
import Warning from "../components/Warning.vue";
import Gif from "../components/Gif.vue";
import { mapGetters, mapActions } from "vuex";
import {
  ACTIONS_ACCEPT_WARNING,
  ACTIONS_STOP_VIDEO,
  ACTIONS_USER_INTERACT,
  ACTIONS_USER_INTERACTION_HALT,
  GETTERS_PLAYING_VIDEO
} from "../store";

export default {
  name: "HorsesQuicksandSleepingCartoons",
  components: {
    Warning,
    Gif
  },
  props: {
    gifUrls: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    ...mapGetters({
      videoPlaying: GETTERS_PLAYING_VIDEO
    })
  },
  mounted() {
    document.addEventListener("click", this.userInteractHandler);
    document.addEventListener("mousemove", this.userInteractHandler);
    document.addEventListener("keydown", this.userInteractHandler);
    document.addEventListener("touch", this.userInteractHandler);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.userInteractHandler);
    document.removeEventListener("mousemove", this.userInteractHandler);
    document.removeEventListener("keydown", this.userInteractHandler);
    document.removeEventListener("touch", this.userInteractHandler);
    if (this.videoPlaying) {
      this.videoStopped();
    }
    clearTimeout(this.interactionTimeoutId);
    clearTimeout(this.interactionStoppedTimeoutId);
  },
  methods: {
    ...mapActions({
      warningAccepted: ACTIONS_ACCEPT_WARNING,
      videoStopped: ACTIONS_STOP_VIDEO,
      userInteract: ACTIONS_USER_INTERACT,
      userInteractionHalted: ACTIONS_USER_INTERACTION_HALT
    }),
    userInteractHandler() {
      if (this.interactionTimeoutId) {
        return;
      }
      this.interactionTimeoutId = setTimeout(() => {
        this.interactionTimeoutId = null;
        this.userInteract();
        clearTimeout(this.interactionStoppedTimeoutId);
        this.interactionStoppedTimeoutId = setTimeout(() => {
          this.interactionStoppedTimeoutId = null;
          this.userInteractionHalted();
        }, 1000);
      }, 250);
    }
  }
};
</script>