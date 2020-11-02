<template>
  <section class="warning-block">
    <div class="warning-block-content">
      <p class="warning-title">Warning</p>
      <p class="warning-message">
        This artwork contains fast flashing images and may cause discomfort or
        trigger seizures for people with photosensitive epilepsy. Viewer
        Discretion is advised
      </p>
      <button @click="$emit('warning-acknowledged')" type="button">
        I Understand - Display the Artwork
      </button>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style scoped>
.warning-block-content {
  max-width: 640px;
}

.warning-block-content button {
  background-color: white;
  border-color: black;
  padding: 1rem;
  border-style: solid;
  font-size: 1.25rem;
}

.warning-title {
  font-size: 2.5rem;
  color: #f00;
  text-transform: uppercase;
  margin: 0 0 1rem;
}

.warning-message {
  margin: 0 0 1rem;
}
</style>