<template>
  
  <div class="gallery">
    <div class="cards-container" v-for="card in cards" :key="card.id">
      <router-link :to="{ name: 'details', params: { id: card.id } }">
        <ImageCard :image="card" />
      </router-link>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import ImageCard from '@/components/ImageCard.vue';
import CardService from '@/services/CardService';
export default {
  components: {
    ImageCard
  },
  data() {
    return {
      cards: []
    }
  },
  created() {
    CardService.getCards()
    .then(r => {
      this.cards = r.data
      console.log(this.cards)
    })
    .catch(error => console.error(error.message))
  }
}
</script>

<style scoped>
.gallery {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>