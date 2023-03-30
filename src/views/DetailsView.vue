<template>
    <div class="details">
        <h1>{{card.name}}</h1>
        <div class="image-card -shadow">
            <img :src="card.image" :alt="card.name" class="" />
            <h4 class="title">{{ card.name }}</h4>
            <div class="type">
                <span v-for="t in card.types" :key="t.name">
                    <img :src="t.image">
                </span>
            </div>
            <div>
                <p>{{ card.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>

import CardService from '@/services/CardService'

export default {
  props: ['id'],
  data() {
    return {
      card: {}
    }
  },
  created() {
    CardService.getCardbyId(this.id)
    .then(response => this.card = response.data)
    .catch(error => {console.log(error.response)})
  }
}
</script>

<style scoped>
    .details {
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .image-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        padding: 20px;
    }

    img {
        width: 100%;
    }

    .type {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 50px;
    }
</style>