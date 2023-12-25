<template>
  <v-container>
    
    <ArtistList />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import ArtistList from '@/components/ArtistList.vue';

export default defineComponent({
  name: 'ArtistsView',

  components: {
    ArtistList,
  },
});
</script>
