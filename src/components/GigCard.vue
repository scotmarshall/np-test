<template>
    <v-card
      class="mx-auto"
      width="360"
      prepend-icon="mdi-calendar"
    >
      <template v-slot:title>
        {{ gig.name }}
      </template>

      <template v-slot:subtitle>
        {{ gig.date }} @ {{ gig.time }}
      </template>
  
      <v-card-text>
        <!-- add router-link!!! -->
        {{ gig.location }}
      </v-card-text>
    </v-card>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'GigCard',
  
    components: {},
    props: ['gig'],
  });
</script>