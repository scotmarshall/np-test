<template>
    <v-card
      class="mx-auto"
      width="250"
      prepend-icon="mdi-warehouse"
    >
      <template v-slot:title>
        {{ venue.name }}
      </template>
  
      <v-card-text>
        {{ venue.location }}
      </v-card-text>
    </v-card>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'VenueCard',
  
    components: {},
    props: ['venue'],
  });
</script>