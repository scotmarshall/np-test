<template>
    <v-container>
      <v-row>
        <v-col
          v-for="venue in venues"
          :key="venue.id"
          cols="auto"
        >
          <router-link :to="'/np-test/venue/' + venue.id">
              <VenueCard :venue="venue" />
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    
</template>
  
<script>
  import { defineComponent } from 'vue';
  import VenueCard from '@/components/VenueCard';
  
  export default defineComponent({
    name: 'VenueList',
  
    components: {
        VenueCard,
    },

    data: () => ({
        venue: {},
        venues: [
          {
            id: '170.russell',
            name: '170 Russell',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '170 Russell St, Melbourne VIC 3000',
          },
          {
            id: 'baropenfitzroy',
            name: 'Bar Open',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '317 Brunswick St, Fitzroy VIC 3065',
          },
          {
            id: 'birdsbasement',
            name: 'Birds Basement',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '11 Singers Ln, Melbourne VIC 3000',
          },
          {
            id: 'cherrybarmelb',
            name: 'Cherry Bar',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '68 Little Collins St, Melbourne VIC 3000',
          },
          {
            id: 'festivalhallmelbourne',
            name: 'Festival Hall',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '300 Dudley Street, West Melbourne VIC 3003',
          },
          {
            id: 'hotelesplanadestkilda',
            name: 'Hotel Esplanade',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '11 The Esplanade, St Kilda VIC 3182',
          },
          {
            id: 'maxwattsvenue',
            name: 'Max Watt’s',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '125 Swanston St, Melbourne VIC 3000',
          },
          {
            id: 'memomusichall',
            name: 'Memo Music Hall',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '88 Acland St, St Kilda VIC 3182',
          },
          {
            id: 'northcotesocialclub',
            name: 'Northcote Social Club',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '301 High St, Northcote VIC 3070',
          },
          {
            id: 'openstudiobar',
            name: 'Open Studio',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '204 High St, Northcote VIC 3070',
          },
          {
            id: 'palaistheatre',
            name: 'Palais Theatre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: 'Lower Esplanade, St Kilda VIC 3182',
          },
          {
            id: 'pariscatjazz',
            name: 'Paris Cat',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '6 Goldie Pl, Melbourne VIC 3000',
          },
          {
            id: 'small.time.group',
            name: 'Small Time',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '271-273 Albert St, Brunswick VIC 3056',
          },
          {
            id: 'sookilounge',
            name: 'Sooki Lounge',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '1648 Burwood Hwy, Belgrave VIC 3160',
          },
          {
            id: 'staygoldmelbourne',
            name: 'Stay Gold',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '133 Sydney Rd, Brunswick VIC 3056',
          },
          {
            id: 'thebendigo',
            name: 'The Bendigo Hotel',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '125 Johnston St, Collingwood VIC 3066',
          },
          {
            id: 'brunswickballroomaus',
            name: 'The Brunswick Ballroom',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '314 Sydney Rd, Brunswick VIC 3056',
          },
          {
            id: 'cornerhotel',
            name: 'The Corner Hotel',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '57 Swan St, Richmond VIC 3121',
          },
          {
            id: 'thecurtin',
            name: 'The Curtin',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '29 Lygon St, Carlton VIC 3053',
          },
          {
            id: 'thejazzlab',
            name: 'The Jazzlab',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '27 Leslie St, Brunswick VIC 3056',
          },
          {
            id: 'leadbeaterhotel',
            name: 'The Leadbeater Hotel',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '1 Church St, Richmond VIC 3121',
          },
          {
            id: 'thenightcat_fitzroy',
            name: 'The Night Cat',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '137-141 Johnston St, Fitzroy VIC 3065',
          },
          {
            id: 'theoldbar',
            name: 'The Old Bar',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '74-76 Johnston St, Fitzroy VIC 3065',
          },
          {
            id: 'poh3058',
            name: 'The Post Office Hotel',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '229-231 Sydney Rd, Coburg VIC 3058',
          },
          {
            id: 'retreat_hotel_brunswick',
            name: 'The Retreat',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '280 Sydney Rd, Brunswick VIC 3056',
          },
          {
            id: 'thornburytheatre',
            name: 'The Thornbury Theatre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '859 High St, Thornbury VIC 3071',
          },
          {
            id: 'thetoffintown',
            name: 'The Toff in Town',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '2f/252 Swanston St, Melbourne VIC 3000',
          },
          {
            id: 'thetotehotel',
            name: 'The Tote',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '67-71 Johnston St, Collingwood VIC 3066',
          },
          {
            id: 'theworkersclub',
            name: 'The Workers Club',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '51 Brunswick St, Fitzroy VIC 3065',
          },
          {
            id: 'thewesleyanne',
            name: 'Wesley Anne',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
            location: '250 High St, Northcote VIC 3070',
          },
        ],
    }),
  });
</script>