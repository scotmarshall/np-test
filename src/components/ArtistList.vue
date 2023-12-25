<template>
    <v-container>
      <v-row>
        <v-col
          v-for="artist in artists"
          :key="artist.id"
          cols="auto"
        >
          <router-link :to="'/np-test/artist/' + artist.id">
              <ArtistCard :artist="artist" />
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    
</template>
  
<script>
  import { defineComponent } from 'vue';
  import ArtistCard from '@/components/ArtistCard';
  
  export default defineComponent({
    name: 'ArtistList',
  
    components: {
        ArtistCard,
    },

    data: () => ({
        artist: {},
        artists: [
          {
            id: 'atlvsau',
            name: 'ATLVS',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'beatnikcollectivemcr',
            name: 'Beatnik Collective',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'yawnbig',
            name: 'Big Yawn',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: '_blackbats',
            name: 'Black Bats',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'bodyprisonau',
            name: 'BODY PRISON',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'cerementaus',
            name: 'Cerement',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'clownsband',
            name: 'Clowns',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'deadskin_band',
            name: 'DEADSKIN',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'drcolossustheband',
            name: 'Dr. Colossus',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'drunkmums',
            name: 'Drunk Mums',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'iamduckeye',
            name: 'DUCKEYE',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'easybrownss',
            name: 'Easy Browns',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'sound_exek',
            name: 'Exek',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'future_suck',
            name: 'Future Suck',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'g.al.ah',
            name: 'Galah',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: '6regor',
            name: 'Gregor',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'kosmetikamuzika_',
            name: 'Kosmetika',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'liar.noise',
            name: 'LIAR',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'loosetooth',
            name: 'Loose Tooth',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'mannequindeathsquad',
            name: 'Mannequin Death Squad',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'muma_ganoush',
            name: 'Muma Ganoush',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'our.carlson',
            name: 'Our Carlson',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'pollyandthepocketsband',
            name: 'Polly and the Pockets',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'privatefunction69',
            name: 'Private Function',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'rvgband',
            name: 'RVG',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'sleepd93',
            name: 'Sleep D',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'socialhaunts',
            name: 'Social Haunts',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'thecontrollers',
            name: 'The Controllers',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'themaggiepills',
            name: 'The Maggie Pills',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'themiffsband',
            name: 'The Miffs',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'theuglykings',
            name: 'The Ugly Kings',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'timsmythholytrash',
            name: 'Tim Smyth & HolyTrash',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'whipwerm',
            name: 'Whipwerm',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'ynot_official_aus',
            name: 'Ynot',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
          {
            id: 'zenmonkee',
            name: 'Zen Monkee',
            category: 'Genre',
            featuredImage: 'https://placekitten.com/500/500',
            images: ['https://placekitten.com/500/500'],
          },
        ],
    }),
  });
</script>