<template>
    <GifPage :gif-urls="urls" />
  </template>
  <script>
  import GifPage from "./GifPage.vue";
  
  export default {
    name: "TelevisionDishesLizards",
    components: { GifPage },
    data() {
      return {
        urls: [
          "television-dishes-lizards/scrubbing01.gif",
          "television-dishes-lizards/scrubbing02.gif",
          "television-dishes-lizards/scrubbing03.gif",
          "television-dishes-lizards/scrubbing04.gif",
          "television-dishes-lizards/scrubbing05.gif",
          "television-dishes-lizards/scrubbing06.gif",
          "television-dishes-lizards/scrubbing07.gif",
          "television-dishes-lizards/scrubbing08.gif",
          "television-dishes-lizards/lizard01.gif",
          "television-dishes-lizards/lizard02.gif",
          "television-dishes-lizards/lizard03.gif",
          "television-dishes-lizards/lizard04.gif",
          "television-dishes-lizards/lizard05.gif",
          "television-dishes-lizards/lizard06.gif",
          "television-dishes-lizards/television01.gif",
          "television-dishes-lizards/television02.gif",
          "television-dishes-lizards/television03.gif",
          "television-dishes-lizards/television04.gif",
          "television-dishes-lizards/television05.gif",
          "television-dishes-lizards/television06.gif",
          "television-dishes-lizards/television07.gif",
          "television-dishes-lizards/television08.gif"

        ]
      };
    }
  };
  </script>