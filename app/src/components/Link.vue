<template>
  <component
    :is="as"
    class="text-teal-800 hover:underline hover:text-teal-600 focus:outline-none focus:shadow-outline"
  >
    <slot />
  </component>
</template>

<script>
const VALID_TAGS = ["router-link", "a", "button"];
export default {
  name: "Link",
  props: {
    as: {
      type: String,
      default: "a",
      validator(tag) {
        return VALID_TAGS.includes(tag);
      }
    }
  }
};
</script>