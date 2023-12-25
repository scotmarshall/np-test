<template>
    <v-container>
      <v-row>
        <v-col
          v-for="gig in gigs"
          :key="gig.id"
          cols="auto"
        >
          <router-link :to="'/np-test/gig/' + gig.id">
              <!-- <GigCard :gig="gig" /> -->
              <GigCard />
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    
</template>
  
<script>
  import { defineComponent } from 'vue';
  import GigCard from '@/components/GigCard';
  
  export default defineComponent({
    name: 'GigList',
  
    components: {
        GigCard,
    },

    data: () => ({
        gig: {},
        gigs: [
          {
            id: 'nofx-final-tour-night-1',
            name: "NOFX 'FINAL TOUR: NIGHT 1'",
            category: 'Punk',
            featuredImage: 'https://dynamicmedia.livenationinternational.com/w/x/p/75434be6-1b3e-4db5-8158-fd89805bdf65.jpeg',
            images: [
              'https://placekitten.com/500/500',
              'https://placekitten.com/500/500',
              'https://placekitten.com/500/500',
            ],
            location: 'Festival Hall',
            date: '26-01-2024',
            time: '7:00PM',
          },
          {
            id: 'nofx-final-tour-night-2',
            name: "NOFX 'FINAL TOUR: NIGHT 2'",
            category: 'Punk',
            featuredImage: 'https://dynamicmedia.livenationinternational.com/w/x/p/75434be6-1b3e-4db5-8158-fd89805bdf65.jpeg',
            images: [
              'https://placekitten.com/500/500',
              'https://placekitten.com/500/500',
              'https://placekitten.com/500/500',
            ],
            location: 'Festival Hall',
            date: '27-01-2024',
            time: '7:00PM',
          },
        ],
    }),
  });
</script>