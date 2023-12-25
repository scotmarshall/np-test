<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        temporary
      >
      <v-list>
          <v-list-item
            v-for="item in items"
            :title="item.title"
            :to="item.link"
            :prepend-icon="item.icon"
          ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>
        <router-link :to="'/np-test/gig/'" >NP Test</router-link>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Home',
          link: '/np-test/',
        },
        {
          title: 'Artists',
          link: '/np-test/artists',
        },
        {
          title: 'Venues',
          link: '/np-test/venues',
        },
        {
          title: 'About',
          link: '/np-test/about',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
