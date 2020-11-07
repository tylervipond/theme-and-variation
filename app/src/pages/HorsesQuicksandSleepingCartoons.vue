<template>
  <GifPage :gif-urls="urls" />
</template>
<script>
import GifPage from "./GifPage.vue";

export default {
  name: "HorsesQuicksandSleepingCartoons",
  components: { GifPage },
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
        "horses-quicksand-sleepingcartoons/sleep05.gif"
      ]
    };
  }
};
</script>