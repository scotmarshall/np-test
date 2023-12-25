<template>
    <v-card
      class="mx-auto"
      width="360"
      prepend-icon="mdi-account-music"
    >
      <template v-slot:title>{{ artist.name }}</template>

      <template v-slot:subtitle>{{ artist.category }}</template>
  
      <!-- <v-card-text>
        {{ artist.description }}
      </v-card-text> -->
    </v-card>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ArtistCard',
  
    components: {},
    props: ['artist'],
  });
</script>