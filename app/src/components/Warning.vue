<template>
  <Typography variant="main-title" class="mb-4 uppercase text-red-800">
    Warning
  </Typography>
  <Typography class="mb-4 max-w-2xl">
    This artwork contains fast flashing images and may cause discomfort or
    trigger seizures for people with photosensitive epilepsy. Viewer Discretion
    is advised.
  </Typography>
  <Button @click="$emit('warning-acknowledged')">
    I Understand - Display the Artwork
  </Button>
</template>

<script>
import Button from "./Button.vue";
import Typography from "./Typography.vue";

export default {
  components: {
    Button,
    Typography
  },
  emits: ["warning-acknowledged"]
};
</script>
