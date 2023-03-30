<template>
  <router-link
    class="image-link"
    :to="{ name: 'details', params: { id: image.id } }"
  >
    <div class="image-card -shadow">
      <img :src="image.image" :alt="image.name" />
      <h4 class="title">{{ image.name }}</h4>
    </div>
  </router-link>
</template>

<script>

export default {
    props: {
        image: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
    .image-card {
        padding: 20px;
        margin-bottom: 24px;
        transition: all 0.2s linear;
        cursor: pointer;
    }
    .event-card:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2) 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
    .image-card > .title {
        margin: 0;
    }
    .image-link{
        color: black;
        text-decoration: none;
        font-weight: 100;
    }
</style>