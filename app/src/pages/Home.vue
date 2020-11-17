<template>
  <nav>
    <FlatList>
      <Typography as="li">
        <Link as="router-link" to="/masks-vampires-puppets">
          Masks, Vampires, Puppets
        </Link>
      </Typography>
      <Typography as="li">
        <Link as="router-link" to="/horses-quicksand-sleeping-cartoons">
          Horses, Quicksand, Sleeping Cartoons
        </Link>
      </Typography>
      <Typography as="li">
        <Link as="router-link" to="/money-fumbles-trash">
          Money, Fumbles, Trash
        </Link>
      </Typography>
    </FlatList>
  </nav>
</template>
<script>
import FlatList from "../components/FlatList.vue";
import Link from "../components/Link.vue";
import Typography from "../components/Typography.vue";

export default {
  name: "Home",
  components: {
    FlatList,
    Link,
    Typography,
  },
};
</script>
