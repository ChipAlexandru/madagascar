export type Entry = {
  type: "photo" | "video";
  src: string;
  title?: string;
  location?: string;
  caption: string;
};

export const hero = {
  title: "Madagascar",
  subtitle: "Chip & Sara — five days on Nosy Be",
};

export const outro = {
  title: "Veloma",
  text: "Goodbye, for now.",
};

export const entries: Entry[] = [
  {
    type: "photo",
    src: "IMG_5532.jpg",
    location: "Zurich Airport",
    title: "Day zero",
    caption:
      "18 April, 19:13. Zurich to Addis Ababa to Nosy Be — two flights, one overnight layover. The pink lenses were a last-minute airport buy; they stayed on for the whole trip.",
  },
  {
    type: "video",
    src: "IMG_5535.mp4",
    location: "Crater Bay, Nosy Be",
    title: "First view",
    caption:
      "19 April, late afternoon. A viewpoint over the anchorage on the drive north to Andilana — someone had tipped a box of sailboats into the bay.",
  },
  {
    type: "video",
    src: "IMG_5537.mp4",
    location: "Ampangorina, Nosy Komba",
    title: "Arrival party",
    caption:
      "The first minute on the path into the sanctuary — a male black lemur and a chestnut female trotting across the stones as if we'd arrived late.",
  },
  {
    type: "photo",
    src: "IMG_5546.jpg",
    location: "Ampangorina, Nosy Komba",
    title: "Breakfast crew",
    caption:
      "Sara learned the rules of the game quickly: black lemurs know exactly who's holding the banana. Four of them had their paws on her hand before she understood what was happening.",
  },
  {
    type: "photo",
    src: "IMG_5548.jpg",
    location: "Ampangorina, Nosy Komba",
    title: "Over the shoulder",
    caption:
      "Three of them perched on a branch behind me. They were there for the snack; I was there for them.",
  },
  {
    type: "photo",
    src: "IMG_5552.jpg",
    location: "Ampangorina, Nosy Komba",
    title: "Calm body, calm snake",
    caption:
      "A Madagascar ground boa — heavier than it looks. The handler's rule: don't move fast and it won't either. Sara gave it a slow, steady try.",
  },
  {
    type: "photo",
    src: "IMG_5557.jpg",
    location: "Ampangorina, Nosy Komba",
    title: "The elder",
    caption:
      "An Aldabra tortoise, maybe a hundred years old. He moved like he had all the time in the world, because he does.",
  },
  {
    type: "photo",
    src: "baby-tortoises.jpg",
    location: "Ampangorina, Nosy Komba",
    title: "Next generation",
    caption:
      "Two radiated tortoises, palm-sized. Same deliberate pace as their grandfather, just with a smaller radius.",
  },
  {
    type: "photo",
    src: "shot-sunset-1.jpg",
    location: "Nosy Komba",
    title: "Panther chameleon",
    caption:
      "Electric teal against the leaves. He rotated one eye toward me, then the other — nothing else about him moved.",
  },
  {
    type: "photo",
    src: "chameleon-2.jpg",
    location: "Nosy Komba",
    title: "Juvenile, on a stick",
    caption:
      "Half the size of my thumb, orange with dark bands. Still the same pair of independent eyes, still the same unhurried grip.",
  },
  {
    type: "video",
    src: "clip-underwater.mp4",
    location: "Nosy Tanikely",
    title: "Bubbles",
    caption:
      "Afternoon snorkel at the Tanikely marine park. The goggles fogged up within thirty seconds; Sara just kept going under.",
  },
  {
    type: "photo",
    src: "IMG_5574.jpg",
    location: "Andriana Resort, Nosy Be",
    title: "The book, mostly ignored",
    caption:
      "A leadership textbook open on Sara's lap, the sun dropping into the sea, a mojito at hand. The reading was not going well, and that was the point.",
  },
  {
    type: "photo",
    src: "IMG_5578.jpg",
    location: "Andriana Resort, Nosy Be",
    title: "Day one, sunset",
    caption:
      "The sky goes through every orange in ten minutes. A fishing boat drifts across the reflection and holds the whole frame together.",
  },
  {
    type: "photo",
    src: "IMG_5579.jpg",
    location: "Andriana Resort, Nosy Be",
    title: "Dinner for two",
    caption:
      "Plates we didn't recognize and didn't ask about. I'd thrown a towel over my shoulders because the breeze had gone cool. Sara laughed at the towel.",
  },
  {
    type: "photo",
    src: "IMG_5582.jpg",
    location: "Andriana Resort, Nosy Be",
    title: "A trick of light",
    caption:
      "Crepuscular rays fanning up from the horizon, a crescent moon already out. We stood on the balcony for half an hour and didn't say anything.",
  },
  {
    type: "photo",
    src: "IMG_5591.jpg",
    location: "Nosy Be → Nosy Sakatia",
    title: "Boat day",
    caption:
      "Half an hour across the channel under a blue shade cloth. Sara's first speedboat — she kept grinning at the spray.",
  },
  {
    type: "video",
    src: "IMG_5596.mp4",
    location: "Nosy Sakatia",
    title: "The landing",
    caption:
      "White sand, palms all along the edge, no buildings in sight. The engine drops and the hull hisses onto the beach.",
  },
  {
    type: "video",
    src: "clip-turtle.mp4",
    location: "Nosy Sakatia",
    title: "Sea turtle, up close",
    caption:
      "A green turtle grazing on seagrass, six or seven feet across. We floated above it for a long time — it didn't care we were there.",
  },
  {
    type: "photo",
    src: "IMG_5652.jpg",
    location: "Andilana Beach, Nosy Be",
    title: "Off-schedule",
    caption:
      "Back at Andilana Beach after the Sakatia crossing. Palm shadows on the sand, the best hour of the day — the one with nothing planned.",
  },
  {
    type: "photo",
    src: "IMG_5661.jpg",
    location: "Mont Passot, Nosy Be",
    title: "329 meters up",
    caption:
      "Highest point on Nosy Be. The whole archipelago spread out behind Sara — crater lakes on one side, the islands trailing off the other.",
  },
  {
    type: "photo",
    src: "IMG_5666.jpg",
    location: "Mont Passot, Nosy Be",
    title: "Same view, my side",
    caption:
      "Sunset light does the hard work up here. We were both just trying not to squint into it.",
  },
  {
    type: "photo",
    src: "IMG_5682.jpg",
    location: "Mont Passot, Nosy Be",
    title: "Sun, down",
    caption:
      "It touched the water for about thirty seconds. Then it was gone and the cicadas started.",
  },
  {
    type: "photo",
    src: "IMG_5738.jpg",
    location: "Nosy Iranja",
    title: "The sandbar",
    caption:
      "22 April. A ribbon of white sand running out between two islands at low tide — the kind of place that doesn't photograph any bigger than this and doesn't need to.",
  },
  {
    type: "photo",
    src: "IMG_5739.jpg",
    location: "Nosy Iranja",
    title: "Between snorkels",
    caption:
      "Goggles still on Sara's head, salt drying on our shoulders. The reef out there is busier than any street back home.",
  },
  {
    type: "photo",
    src: "IMG_8650.jpg",
    location: "Nosy Iranja",
    title: "From the top",
    caption:
      "Short climb up the hill above the village, lighthouse at your back. The sandbar we'd just walked on, now a thin white line tying the two islands together.",
  },
  {
    type: "photo",
    src: "IMG_5757.jpg",
    location: "En route to Lokobe",
    title: "One more boat",
    caption:
      "Short crossing to the last reserve on the list. The breeze flattens your hair and you end up squinting in every photo.",
  },
  {
    type: "photo",
    src: "IMG_5760.jpg",
    location: "En route to Lokobe",
    title: "Full sun",
    caption: "Too much light, too much salt, grinning anyway.",
  },
  {
    type: "photo",
    src: "IMG_5766.jpg",
    location: "Lokobe Reserve",
    title: "Black lemur, female",
    caption:
      "The males are jet black; the females are this russet color. She stared at us from exactly eye level, then went back to the leaves.",
  },
  {
    type: "photo",
    src: "IMG_5771.jpg",
    location: "Lokobe Reserve",
    title: "Into the forest",
    caption:
      "Our guide spotted three species in twenty minutes just by listening. Every click and rustle meant something to him.",
  },
  {
    type: "photo",
    src: "IMG_5775.jpg",
    location: "Lokobe Reserve",
    title: "Waterfall stop",
    caption:
      "Cold water running down warm rock in the middle of the rainforest. We stood under it just long enough to get the point.",
  },
  {
    type: "photo",
    src: "IMG_5787.jpg",
    location: "Lokobe Reserve",
    title: "Last forest",
    caption:
      "Sara picked up a rhythm on these walks — slow, quiet, eyes up.",
  },
  {
    type: "video",
    src: "IMG_5792.mp4",
    location: "Lokobe village",
    title: "Fresh mango",
    caption:
      "Lunch in the village at the edge of the reserve: thatched roof, colorful table runner, mango so ripe it was basically juice.",
  },
  {
    type: "photo",
    src: "shot-evening.jpg",
    location: "Lokobe village",
    title: "Uninvited lunch guests",
    caption:
      "Two lemurs came in over the thatch while we ate. They weren't scared of us; we weren't scared of them. Fair deal.",
  },
  {
    type: "photo",
    src: "IMG_5819.jpg",
    location: "Andriana Resort, Nosy Be",
    title: "Last light",
    caption:
      "Same ocean, different night. You'd think five days of sunsets would blur together — they don't.",
  },
];
