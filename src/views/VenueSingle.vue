<template>
    <v-container>
        <h1>{{ venue.name }}</h1>
        <p>{{ venue.location }}</p>
    </v-container>

    <v-container>
        <p>{{ venue.description }}</p>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            venue: {},
            venues: [
            {
                id: '170.russell',
                name: '170 Russell',
                description:
                '170 Russell is one of our longest standing venues, having seen a number of great international performers grace its stage over the years. There’s some cool acts on their way in 2022, Cory Henry, Broods, and many more.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '170 Russell St, Melbourne VIC 3000',
            },
            {
                id: 'baropenfitzroy',
                name: 'Bar Open',
                description:
                'Bar Open is a Fitzroy legend, a mainstay of Melbourne’s live music scene for 24 years that supports a huge array of genres. With art and mural splashed walls and a general decor and clientele that screams ‘You’re in Fitzroy, welcome home’, it’s no wonder that Bar Open is one of those venues that people associate with unique Melbourne culture. It has a delightful beer garden, a cozy fireplace, an upper level and an improv night, but you really need to head here to experience the dazzling array of live music for yourself. The treasured venue hosts bands six nights per-week over two stages, and is widely renowned for everything from weekly experimental/improvised gigs (the home of Make It Up Club) to jazz/groove-based genres as well as heavier guitar-based rock (doom, punk, grind core).',
                featuredImage: 'https://placekitten.com/500/500',
                images: [
                'https://placekitten.com/500/500',
                'https://placekitten.com/500/500',
                'https://placekitten.com/500/500',
                ],
                location: '317 Brunswick St, Fitzroy VIC 3065',
            },
            {
                id: 'birdsbasement',
                name: 'Birds Basement',
                description:
                'You’d be hard pressed to find a cooler venue than the Bird’s Basement. It’s like a New York Jazz club that has been picked up and plonked in the middle of Melbourne. Over the years there has been a heap of great acts that have graced the Birds Basement stage. You can catch some great performers at Birds Basement over coming months, acts like Jack Jones, Renee Geyer, Thando and Ross Wilson.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '11 Singers Ln, Melbourne VIC 3000',
            },
            {
                id: 'cherrybarmelb',
                name: 'Cherry Bar',
                description:
                'The Cherry Bar owners stunned many of us when they announced the opening of their new venue The Hotel Westwood where the old Reverence Hotel used to stand. Amidst that, their premier venue is still slinging live gigs, you’ve got Weened, The Poor, and Mountain Wizard Death Cult wach on their way to the Cherry Bar this year.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '68 Little Collins St, Melbourne VIC 3000',
            },
            {
                id: 'festivalhallmelbourne',
                name: 'Festival Hall',
                description:
                '...',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '300 Dudley Street, West Melbourne VIC 3003',
            },
            {
                id: 'hotelesplanadestkilda',
                name: 'Hotel Esplanade',
                description:
                'It’s the venue that’s the epitome of Melbourne. Across from the beach, a great menu, tasty drinks, what else can you ask for? – Music. The Espy has heaps of it, with Death By Denim, and Mako Road being some of many groups on their way to The Espy stage.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '11 The Esplanade, St Kilda VIC 3182',
            },
            {
                id: 'maxwattsvenue',
                name: 'Max Watt’s',
                description:
                'Max Watt’s loves putting on shows that can appeal to all types of people – whether you like High School Musical, Haiku Hands or the sounds of Ibiza Nightclubs, Max Watts will have a show for you.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '125 Swanston St, Melbourne VIC 3000',
            },
            {
                id: 'memomusichall',
                name: 'Memo Music Hall',
                description:
                'Not even COVID could stop St Kilda’s beloved Memo Music Hall. The venue kept up appearances by throwing livestreamed gigs week after week. But now that things are back, you can catch some killer shows with their super bill of shows across the coming months. Expect to see everyone including greats The Chantoozies, Henry Wagons, Vanessa Amarossi, and many more.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '88 Acland St, St Kilda VIC 3182',
            },
            {
                id: 'northcotesocialclub',
                name: 'Northcote Social Club',
                description:
                'There’s no question that when you think of Melbourne live music venues, the Northcote Social Club is one of the first that pops into mind. It’s a chilled, laid back space that garners a chill crowd who are there just for the music.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '301 High St, Northcote VIC 3070',
            },
            {
                id: 'openstudiobar',
                name: 'Open Studio',
                description:
                'Northcote’s Open Studio is full of live music as it brings some of Melbourne’s brightest music talents to its space. There’s more where that came from with heaps of gigs booked over the coming months.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '204 High St, Northcote VIC 3070',
            },
            {
                id: 'palaistheatre',
                name: 'Palais Theatre',
                description:
                'It’s been around for many years, had a few facelifts, but we all still love the Palais. There’s no limit to what kind of shows they can put on, having seen acts from Eves Karydas to Brian Wilson to comedian/musician Reggie Watts grace the stage in the past. There’s too many cool events coming up to list here, check out their gig guide here.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: 'Lower Esplanade, St Kilda VIC 3182',
            },
            {
                id: 'pariscatjazz',
                name: 'Paris Cat',
                description:
                'Iconic Melbourne jazz cauldron Paris Cat is a major player in the live music game and they’re not mucking around – featuring music from all different types of talented performers. You can catch the Rachel Ross quintet, The Cope Street Parade, and even a cool tribute show to Frank Sinatra. Check out what else is on here.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '6 Goldie Pl, Melbourne VIC 3000',
            },
            {
                id: 'small.time.group',
                name: 'Small Time',
                description:
                'Small Time is a chameleon of the Melbourne music space wearing the different capes of a music video platform, artist development program, production space and live music venue/pizza bar. Having livestreamed shows throughout the lockdown, Small Time is back with live gigs, initially welcoming names such as Lewis Coleman, Cantrips amd AM Reruns and more since things eased. Upcoming, there’s Leslie D King, Bares, and more.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '271-273 Albert St, Brunswick VIC 3056',
            },
            {
                id: 'sookilounge',
                name: 'Sooki Lounge',
                description:
                'If you live up in the hills and are envious of all the gigs at inner-city venues, Sooki Lounge solves all your problems, putting on some awesome gigs just down the road. They feature a great mix of genres, from talented performers like Bonnie Anderson and Russell Morris to indie rockers like British India and The Delta Riggs.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '1648 Burwood Hwy, Belgrave VIC 3160',
            },
            {
                id: 'staygoldmelbourne',
                name: 'Stay Gold',
                description:
                'Fantastic Sydney Road live music venue Stay Gold is back in the swing of live music with a bunch of sweet shows coming up. Their venue celebrates the glorious punk and emo music of the early noughties with many cool music nights, while they’ve also got shows from Windwaker, Ironstone and Eye of The Enemy to name a few.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '133 Sydney Rd, Brunswick VIC 3056',
            },
            {
                id: 'thebendigo',
                name: 'The Bendigo Hotel',
                description:
                'The Bendigo has been a staple of the Melbourne music scene for a number of years, putting on some awesome shows year after year, featuring rock acts from all around the world. Artists on their way to The Bendigo include The Krugers and Stalker.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '125 Johnston St, Collingwood VIC 3066',
            },
            {
                id: 'brunswickballroomaus',
                name: 'The Brunswick Ballroom',
                description:
                'One of the finest live music venues in Melbourne, The Brunswick Ballroom is a beautifully refurbished hall in the old Metropolis House building that now hosts some of Melbourne’s favourite live acts. The upstairs ballroom, accessed via the dramatic staircase, features superb stained glass domes evoking the work of Australian artist Leonard French, before expanding out onto an open-air balcony that takes in the urban streetscape below and the sights of Melbourne’s skyline. It also has the Brunswick Artist’s Bar next door, which doubles as a lovely quaint cafe and bakery.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '314 Sydney Rd, Brunswick VIC 3056',
            },
            {
                id: 'cornerhotel',
                name: 'The Corner Hotel',
                description:
                'You can’t have a list of venues without mentioning The Corner. We’ve all been stuck behind the iconic pole, and enjoyed some great music from bands local and international. The venue always pulls some of the best acts to grace Melbourne stages, national and international.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '57 Swan St, Richmond VIC 3121',
            },
            {
                id: 'thecurtin',
                name: 'The Curtin',
                description:
                'It’s been in the news a great deal lately, with word that it will likely be closing down. But the John Curtin Hotel is still in business on the live music front to the glee of all Melburnians. They’ve got some amazing live shows on the horizon, including Hobsons Bay Coast guard, Mylk, Dana Mitchell Revenge Plot, and Sappho. Keep an eye on Beat for any further announcements about The Curtin.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '29 Lygon St, Carlton VIC 3053',
            },
            {
                id: 'thejazzlab',
                name: 'The Jazzlab',
                description:
                'The Jazzlab is quickly becoming one of the coolest venues across Melbourne’s live scene, putting on some amazing shows from virtuosic acts that live on our doorstep. Coming up at The Jazzlab is Rai Thistlethwayte, Luke Howard Trio, and USA’s very own Trio Grande. The Jazzlab is also one of the only live music joints holding a show for the Melbourne International Comedy Festival, called The Marvellous Elephant Man.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '27 Leslie St, Brunswick VIC 3056',
            },
            {
                id: 'leadbeaterhotel',
                name: 'The Leadbeater Hotel',
                description:
                'Richmond’s emerging live music haunt The Leadbeater Hotel only opened late 2019 but they’re certainly put their best foot forward during these tough times and put on a bunch of great gigs.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '1 Church St, Richmond VIC 3121',
            },
            {
                id: 'thenightcat_fitzroy',
                name: 'The Night Cat',
                description:
                'The Night Cat give a different vibe to the music-watching experience, the venue featuring a stage that has a 360” view. Now as restrictions have eased even further, the venue has a number of live gigs on the way, featuring everyone from The Beths to Sycco.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '137-141 Johnston St, Fitzroy VIC 3065',
            },
            {
                id: 'theoldbar',
                name: 'The Old Bar',
                description:
                'If you’re after music, music and more music, The Old Bar is the spot for you. There’s 7 days a week of live music, and covers a number of different genres, like blues, rock, and Indie. If you want to get your bearings of the venue before you head there, you can play this cool little minigame on their website that gives you a tour of the grounds.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '74-76 Johnston St, Fitzroy VIC 3065',
            },
            {
                id: 'poh3058',
                name: 'The Post Office Hotel',
                description:
                'Sydney Road’s The Post Office Hotel is not only a stellar pub for a pint and a meal, it also doubles as a fantastic live music venue. Regularly updating their gig guide via their website, make sure you duck down to The Post Office for a gig coming up.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '229-231 Sydney Rd, Coburg VIC 3058',
            },
            {
                id: 'retreat_hotel_brunswick',
                name: 'The Retreat',
                description:
                'Connoisseurs of the best local talent, everyone from the likes of Floodlights, Bones & Jones, Porpoise Spit, Lewis Coleman and more, have stepped into their beloved bandroom.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '280 Sydney Rd, Brunswick VIC 3056',
            },
            {
                id: 'thornburytheatre',
                name: 'The Thornbury Theatre',
                description:
                'The Thornbury Theatre are a relatively to the live music world and have already had a handful of awesome gigs that have found a bunch of new fans. They are usually used as a function space for lavish weddings and big parties. There’s some great shows coming to the Thornbury in the next few months, this includes Babe Rainbow, Karma County and Casey Donovan.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '859 High St, Thornbury VIC 3071',
            },
            {
                id: 'thetoffintown',
                name: 'The Toff in Town',
                description:
                'If you want to catch a performer before they become the next big thing, look no further than The Toff in Town. The part cocktail bar – part live music venue has got some cool shows on the horizon, like Sydney Miller, onesevenfour, and Zheani to name a few.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '2f/252 Swanston St, Melbourne VIC 3000',
            },
            {
                id: 'thetotehotel',
                name: 'The Tote',
                description:
                'Melbourne rock kingdom The Tote is back up and firing in the live music space. This spot is dedicated to putting on some hard rocking shows featuring some of Melbourne’s coolest new acts. Groups like Fan Haus, Teenage Joans, and many more are on their way to The Tote.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '67-71 Johnston St, Collingwood VIC 3066',
            },
            {
                id: 'theworkersclub',
                name: 'The Workers Club',
                description:
                'Fitzroy live music haunt The Workers Club are well and truly back to doing what they do best, putting on gigs, gigs, and more gigs, and the tickets are selling like hot cakes. Now that restrictions have eased, you can catch some full capacity shows with Supercab, Proposal, Semantics, and many more that you can check out here.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '51 Brunswick St, Fitzroy VIC 3065',
            },
            {
                id: 'thewesleyanne',
                name: 'Wesley Anne',
                description:
                'The iconic Wesley Anne is not only a revered abode for a tasty meal, they’ve got live music too and they’ve well and truly fired up the amps as we embark on 2022. Wurli, Paige Black and Ade Ishs are some of the names you will have caught over the last few years, while the likes of Rayhab, Alex Taylor and Rosario De Marco are to come.',
                featuredImage: 'https://placekitten.com/500/500',
                images: ['https://placekitten.com/500/500'],
                location: '250 High St, Northcote VIC 3070',
            },
            ],
        }),

        created() {
            const ID = this.$route.params.id;
            let venue = this.venues.find((venue) => venue.id === ID);
            this.venue = venue;
        },
    }
</script>