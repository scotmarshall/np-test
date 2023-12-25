<template>
    <v-card
      class="mx-auto"
      width="400"
      prepend-icon="mdi-calendar"
    >
      <template v-slot:title>
        <!-- {{ gig.name }} -->
        Gig Name
      </template>

      <template v-slot:subtitle>
        <!-- {{ gig.date }} @ {{ gig.time }} -->
        Gig Date & Time
      </template>
  
      <v-card-text>
        <!-- add router-link!!! -->
        <!-- {{ gig.location }} -->
        Gig Venue
      </v-card-text>
    </v-card>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'GigCard',
  
    components: {},
    // props: ['gig'],
  });
</script>