<template>
  <v-container class="home">
    <GigList />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import GigList from '@/components/GigList.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    GigList,
  },
});
</script>