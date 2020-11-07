<template>
  <component :is="as" :class="{
      'm-0': true,
      'text-base': variant === VARIANT_COPY,
      'md:text-3xl text-2xl font-bold leading-none': variant === VARIANT_MAIN_TITLE,
      'md:text-xl text-lg italic leading-none': variant === VARIANT_SUB_TITLE,
    }"><slot /></component>
</template>
<script>
const VARIANT_COPY = "copy";
const VARIANT_MAIN_TITLE = "main-title";
const VARIANT_SUB_TITLE = "sub-title";
const VALID_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "li"];
const VALID_VARIANTS = [
  VARIANT_COPY,
  VARIANT_MAIN_TITLE,
  VARIANT_SUB_TITLE,
];

export default {
  name: "Typography",
  props: {
    as: {
      type: String,
      default: "p",
      validator(tag) {
        return VALID_TAGS.includes(tag);
      }
    },
    variant: {
      type: String,
      default: "copy",
      validator(variant) {
        return VALID_VARIANTS.includes(variant);
      }
    }
  },
  data() {
    return {
      VARIANT_COPY,
      VARIANT_MAIN_TITLE,
      VARIANT_SUB_TITLE,
    };
  }
};
</script>
