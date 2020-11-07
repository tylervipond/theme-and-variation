<script>
import { h } from "vue";

const VALID_TAGS = ["button", "a", "router-link"];
const VALID_TYPES = ["button", "submit"];

export default {
  name: "Button",
  props: {
    as: {
      type: String,
      default() {
        return "button";
      },
      validator(tag) {
        return VALID_TAGS.includes(tag);
      }
    },
    type: {
      type: String,
      default() {
        return "button";
      },
      validator(type) {
        return VALID_TYPES.includes(type);
      }
    }
  },
  render() {
    const classes = "border-teal-800 border-solid border-2 p-4 text-md md:text-lg text-teal-900 hover:text-teal-600 hover:border-teal-600 focus:outline-none focus:shadow-outline";
    const props = {
      ...this.$props,
      class: classes
    };
    return h(this.as, props, this.$slots.default());
  }
};
</script>