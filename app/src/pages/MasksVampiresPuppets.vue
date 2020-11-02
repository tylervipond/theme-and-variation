<template>
  <Gif v-if="videoPlaying" :urls="urls" />
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
  GETTERS_PLAYING_VIDEO,
} from "../store";

export default {
  name: "MasksVampiresPuppets",
  components: {
    Warning,
    Gif,
  },
  data() {
    return {
      interactionTimeoutId: null,
      urls: [
        "masks/mask1.gif",
        "masks/mask3.gif",
        "masks/mask4.gif",
        "masks/mask5.gif",
        "masks/mask6.gif",
        "masks/mask7.gif",
        "masks/mask8.gif",
        "masks/mask9.gif",
        "masks/puppet1.gif",
        "masks/puppet2.gif",
        "masks/puppet3.gif",
        "masks/puppet4.gif",
        "masks/vampire1.gif",
        "masks/vampire2.gif",
        "masks/vampire3.gif",
        "masks/vampire4.gif",
        "masks/vampire6.gif",
      ],
    };
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
        return
      }
      this.interactionTimeoutId = setTimeout(() => {
        this.interactionTimeoutId = null;
        this.userInteract();
        this.interactionStoppedTimeoutId = setTimeout(() => {
          this.interactionStoppedTimeoutId = null;
          this.userInteractionHalted();
        }, 1000);
      }, 250);
    }
  },
  computed: {
    ...mapGetters({
      videoPlaying: GETTERS_PLAYING_VIDEO,
    }),
  },
  mount() {
    document.addEventListener("click", this.userInteractHandler);
    document.addEventListener("mouse", this.userInteractHandler);
    document.addEventListener("keydown", this.userInteractHandler);
    document.addEventListener("touch", this.userInteractHandler);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.userInteractHandler);
    document.removeEventListener("mouse", this.userInteractHandler);
    document.removeEventListener("keydown", this.userInteractHandler);
    document.removeEventListener("touch", this.userInteractHandler);
    if (this.videoPlaying) {
      this.videoStopped();
    }
    clearTimeout(this.interactionTimeoutId);
    clearTimeout(this.interactionStoppedTimeoutId);
  },
};
</script>