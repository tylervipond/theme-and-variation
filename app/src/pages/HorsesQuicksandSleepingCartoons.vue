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
  name: "HorsesQuicksandSleepingCartoons",
  components: {
    Warning,
    Gif,
  },
  data() {
    return {
      urls: [
        "horses-quicksand-sleepingcartoons/horse01.gif",
        "horses-quicksand-sleepingcartoons/horse02.gif",
        "horses-quicksand-sleepingcartoons/horse03.gif",
        "horses-quicksand-sleepingcartoons/horse04.gif",
        "horses-quicksand-sleepingcartoons/horse05.gif",
        "horses-quicksand-sleepingcartoons/quicksand01.gif",
        "horses-quicksand-sleepingcartoons/quicksand02.gif",
        "horses-quicksand-sleepingcartoons/quicksand03.gif",
        "horses-quicksand-sleepingcartoons/quicksand04.gif",
        "horses-quicksand-sleepingcartoons/quicksand05.gif",
        "horses-quicksand-sleepingcartoons/quicksand06.gif",
        "horses-quicksand-sleepingcartoons/sleep01.gif",
        "horses-quicksand-sleepingcartoons/sleep02.gif",
        "horses-quicksand-sleepingcartoons/sleep03.gif",
        "horses-quicksand-sleepingcartoons/sleep04.gif",
        "horses-quicksand-sleepingcartoons/sleep05.gif",
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
      console.log('1')
      if (this.interactionTimeoutId) {
        console.log('2')
        return
      }
      this.interactionTimeoutId = setTimeout(() => {
        this.interactionTimeoutId = null;
        this.userInteract();
        console.log('made it here')
        clearTimeout(this.interactionStoppedTimeoutId)
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
   mounted() {
    console.log('attaching events')
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
};
</script>