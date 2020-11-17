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
        "money-fumbles-trash/fumble01.gif",
        "money-fumbles-trash/fumble02.gif",
        "money-fumbles-trash/fumble03.gif",
        "money-fumbles-trash/fumble04.gif",
        "money-fumbles-trash/fumble05.gif",
        "money-fumbles-trash/fumble06.gif",
        "money-fumbles-trash/fumble07.gif",
        "money-fumbles-trash/fumble08.gif",
        "money-fumbles-trash/money01.gif",
        "money-fumbles-trash/money02.gif",
        "money-fumbles-trash/money03.gif",
        "money-fumbles-trash/money04.gif",
        "money-fumbles-trash/money05.gif",
        "money-fumbles-trash/money06.gif",
        "money-fumbles-trash/trash01.gif",
        "money-fumbles-trash/trash02.gif",
        "money-fumbles-trash/trash03.gif",
        "money-fumbles-trash/trash04.gif",
        "money-fumbles-trash/trash05.gif"
      ]
    };
  }
};
</script>