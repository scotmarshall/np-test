<template>
    <v-container>
        <h1>{{ gig.name }}</h1>
        <h2>{{ gig.date }} @ {{ gig.time }}</h2>
    </v-container>

    <v-container>
        <p>{{ gig.description }}</p>
    </v-container>

    <v-container>
        <p>{{ gig.location }}</p>
        <p>{{ gig.category }}</p>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            gig: {},
            gigs: [
                {
                    id: 'nofx-final-tour-night-1',
                    name: "NOFX 'FINAL TOUR: NIGHT 1'",
                    category: 'Punk',
                    description:
                    "Night one performing songs from: Wolves in Wolves Clothing / Punk in Drublic / War on Errorism. Influential punk band NOFX is known as one of the world's most controversial and significant punk bands of their time. They are no strangers to pushing boundaries at their live shows, and their final tour will be no different. January 2024 will see the iconic punk band hitting the east coast of Australia. NOFX will perform forty songs a night, including three albums and rarities, plus they will never repeat a setlist to ensure that each show is unique. Fat Mike adds, “This is not a final tour like Mötley Crüe or Black Sabbath... These are the very last shows NOFX will ever be playing. We are gonna play with all our hearts... With all our joy... And then we are done. We are done done.” What better way to celebrate the amazing career of NOFX. The final tour will see the band perform songs from their classic releases Wolves In Wolves Clothing, Punk In Drublic, The War On Errorism, White Trash Two Heebs And A Bean, So Long And Thanks For All The Shoes and The Decline over two nights in Melbourne, Sydney and Brisbane.",
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
                    description:
                    "Night two performing songs from: White Trash, Two Heebs and a Bean / So Long and Thanks for All the Shoes / The Decline. Influential punk band NOFX is known as one of the world's most controversial and significant punk bands of their time. They are no strangers to pushing boundaries at their live shows, and their final tour will be no different. January 2024 will see the iconic punk band hitting the east coast of Australia. NOFX will perform forty songs a night, including three albums and rarities, plus they will never repeat a setlist to ensure that each show is unique. Fat Mike adds, “This is not a final tour like Mö tley Crü e or Black Sabbath...These are the very last shows NOFX will ever be playing. We are gonna play with all our hearts...With all our joy...And then we are done. We are done done.” What better way to celebrate the amazing career of NOFX. The final tour will see the band perform songs from their classic releases Wolves In Wolves Clothing, Punk In Drublic, The War On Errorism, White Trash Two Heebs And A Bean, So Long And Thanks For All The Shoes and The Decline over two nights in Melbourne, Sydney and Brisbane.",
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

        created() {
            const ID = this.$route.params.id;
            let gig = this.gigs.find((gig) => gig.id === ID);
            this.gig = gig;
        },
    }
</script>
