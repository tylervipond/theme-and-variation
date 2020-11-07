<template>
  <component :is="as" class="m-0 p-0 list-none"><slot /></component>
</template>
<script>
const VALID_TAGS = ["ul", "ol"];
export default {
  name: "FlatList",
  props: {
    as: {
      type: String,
      default: "ul",
      validator(tag) {
        return VALID_TAGS.includes(tag);
      }
    }
  }
};
</script>