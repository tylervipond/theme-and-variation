<template>
  <div class="px-4">
    <nav class="max-w-5xl mx-auto">
      <FlatList>
        <li>
          <Link as="router-link" to="/masks-vampires-puppets">
            Masks, Vampires, Puppets
          </Link>
        </li>
        <li>
          <Link as="router-link" to="/horses-quicksand-sleeping-cartoons">
            Horses, Quicksand, Sleeping Cartoons
          </Link>
        </li>
      </FlatList>
    </nav>
  </div>
</template>
<script>
import FlatList from "../components/FlatList.vue";

export default {
  name: "Home",
  components: {
    FlatList,
  },
};
</script>
