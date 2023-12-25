<template>
  <v-container>
    
    <VenueList />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import VenueList from '@/components/VenueList.vue';

export default defineComponent({
  name: 'VenuesView',

  components: {
    VenueList,
  },
});
</script>
