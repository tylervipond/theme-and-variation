<template>
  <component :is="as" class="text-red-800"><slot></slot></component>
</template>

<script>
const VALID_TAGS = ["router-link", "a", "button"];
export default {
  name: "Link",
  as: {
    type: String,
    default: "a",
    validator(tag) {
      return VALID_TAGS.includes(tag);
    },
  },
};
</script>