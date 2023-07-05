// Game information
const GameInfo = {
   pickaxe: {
      name: "Pickaxe",
      descr: "it mines things for you (lazy)",
      upgrades: [
         // Format: [title, descr, required buildings of type, cost]
         ["Sharper Pickaxes", "This statement has not been evaluated by the FDA", 2, 400],
         ["Handle Grips", "Your unpaid workers won't get blisters anymore!", 10, 4500],
         ["New Element", "Pickaxium works 3x better than competing brands!", 20, 20000],
         ["Automatic Mechanisms", "These pickaxes will mine by themselves!(watching them work may be slightly disconcerting)", 35, 100000],
         ["Self-oiling Gears", "Make them work so fast they blur!(safety gear recommended)", 50, 500000],
      ]
   },
   dwarf: {
      name: "Dwarf",
      descr: "it mines things for you - no salary required!",
      upgrades: [
         ["Paid Vacation", "Don't worry, it's not very long", 2, 1200],
         ["Dwarf Academy", "Complete with posh students!", 10, 7400],
         ["Dwarf Managers", "Down with the worker union!", 20, 30000],
         ["\"Special\" Cafeteria Food", "Your workers will become mysteriously obedient!", 35, 150000],
         ["Paid Holidays", "There's nothing someone won't do when you give them paid holidays!", 50, 750000]
      ]
   },
   goose: {
      name: "Golden Goose",
      descr: "a nice goose - it lays golden eggs",
      upgrades: [
         ["Softer Nests", "They're more comfortable!", 2, 6000],
         ["Healthier Diets", "Improves the Gold-to-lead ratio!", 10, 24000],
         ["Larger Flocks", "More geese, more eggs!", 20, 100000],
         ["Advanced Mental Abilities", "Dark magic is your greatest friend!", 35, 500000],
         ["Bigger Nesting Boxes", "I don't even know how this will help", 50, 2500000]
      ]
   },
   mine: {
      name: "Gold Mine",
      descr: "a mine, with plenty of Gold for the taking",
      upgrades: [
         ["Deeper Mines", "Down, down, down down", 2, 15000],
         ["Better Ventilation", "So your workers don't die!", 10, 60000],
         ["Smaller Mineshafts", "Saftey? Comfort? Who cares? Most certiantly not me, sitting here in my mansion. Why, I don't even know if I have clastrophpobia 'cause the smallest space i've ever been is my private limosine.", 20, 250000],
         ["Even Narrower Shafts", "'Cause dwarves don't have rights!", 35, 80000],
         ["Journey to the Center of the Earth", "Let's hope that isn't copywrited", 50, 350000],
         ["Holy Earth", "The Earth is now so riddled with holes, the ground is constantly being torn apart by earthquakes", 80, 2000000]
      ]
   },
   dragon: {
      name: "Dragon",
      descr: "a nice dragon, it steals Gold for you",
      upgrades: [
         ["Dragon Babysitters", "So the parents can spend more time away from home!", 2, 120000],
         ["Increased Greed", "Umm...ok. Don't worry about it!", 10, 460000],
         ["Dragon Gold Insurance", "Switch to dragon gold insurance!", 20, 2000000],
         ["Selective Breeding", "It's less controversial than CRISPR", 35, 10000000],
         ["Bad Habits", "Sharing may be caring, but I don't care!", 50, 50000000],
      ]
   },
   stone: {
      name: "Philosopher's Stone",
      descr: "an alchemy stone that turns ordinary rocks into gold",
      upgrades: [
         ["The Flammel Effect", "Discovered by Nicolas Flammel himself!", 2, 200000],
         ["Dark Alchemy", "This is fine.", 10, 800000],
         ["Primeval Chemistry", "Tread paths that have not been tread in a thousand millennia!", 20, 3500000],
         ["Necromancy!", "HAHAHAHAHAHAHAHAHAHAH!", 35, 20000000]
      ]
   },
   station: {
      name: "Asteroid Mining Station",
      descr: "a space station, it mines Gold from asteroids",
      upgrades: [
         ["Solar Power!", "WHY did we not think of this before? All of those double-A Duracell batteries where quite difficult to transport!", 2, 400000],
         ["Self-Reparing Hull", "It's like magic!", 10, 1600000],
         ["Nanobot Minions", "Evil at your fingertips!", 20, 7000000],
         ["Space Dust Condenser", "Create your own astroids!", 35, 40000000],
         ["Self-Replicating Stations", "A classic Von Neumann design", 50, 200000000]
      ]
   },
   leprechaun: {
      name: "Leprechaun",
      descr: "will find gold at the end of rainbows",
      upgrades: [
         ["Leprdiction", "Predicts where rainbows will appear", 2, 800000],
         ["Leprechaun Academy", "Teaches leprechauns how to find rainbows", 10, 3200000],
         ["9 Color Rainbows", "Now with goldish!", 20, 14000000],
         ["Invisible Cauldrons", "No more stealing from leprechauns!", 35, 80000000],
         ["Rainbow Generator", "It's called refraction", 50, 400000000]
      ]
   },
   sheep: {
      name: "Golden Sheep",
      descr: "a cute round fluffy sheep with a golden fleece",
      upgrades: [
         ["Bubble Baths!", "Give that fleece a nice good cleaning!", 2, 1600000],
         ["Merino Sheep", "Only the finest wool for your lordsheep!", 10, 6400000],
         ["Fluffy Paddocks!", "The researchers said it makes more wool", 20, 28000000],
         ["Alternate Sheep Universe", "The sheep that come through are not the same, but they have wool", 35, 160000000]
      ]
   },
   ray: {
      name: "Ray Gun",
      descr: "a ray gun that turns things into gold",
      upgrades: [
         ["Recouped Kinetic Energy!", "MORE POWER!", 2, 3200000],
         ["Atomic Rearrangement!", "Rearrange those atoms!", 10, 12800000],
         ["Electron Extraction!", "Collect the electrons! Who cares about radioactive ion waste!", 20, 56000000],
         ["Proton-Neutron Re-thingy!", "Don't question it, it works!", 35, 320000000]
      ]
   },
   merger: {
      name: "Neutron Star Merger",
      descr: "merges neutron stars to create gold",
      upgrades: [
         ["Particle Reconstructor!", "Building neutron stars from the ground up!", 2, 6400000],
         ["Advanced Magnets!", "Increase the collision force!", 10, 25600000],
         ["Hydrolic Densifier!", "Hydro-powered condensers!", 20, 112000000],
         ["Strange Star Collisions", "This may cause unexpected results, such as <strong>Otherworldly</strong> occurrences.", 35, 640000000]
      ]
   }
}


// News
const news = [
   [
      "You like the shiny twinkle of Gold",
      "Mmm, Gold",
      "Random person starts a Gold mining corporation",
      "You go mining sometimes",
      "When you feel sad, you look at your hoard of gold.",
      "You dream of golden sheep in a golden meadow eating golden grass.",
      "You dream of golden dragons flying high through golden clouds in a golden sky with the golden setting sun.",
      "Breaking News: Under threat of closing the press, journalist tells the semi-truth!",
      "News: You magnanimously donate $10 to some random charity.",
      // For when gold is very high - for now always available
      "News: You are the first person to ever donate to the \"Save the Gold\" foundation.",
      `News: Ordinary household items more commonly made of gold to deal with gold surplus.`,
      `News: Random woman asks: "What are we going to do with all this gold?", everyone ignores her.`,
      `News: New podcast about Your's amazing rise to success coming out! Don't miss it!`,
      `News: Studies show that You has made a total of lots of Gold. "That's a lot of shiny" says researcher`,
      `News: Gold's economic worth dramatically reduced, stock market looking for subsitude.`,
      `News: Philosophers agree that gold is the true meaning of life. "What's truly amazing is they agreed on something." says reporter`,
      `News: Gold is now the most common element in the universe, scientists baffled.`
   ],
   [
      "Pickaxes are good for mining Gold!",
      "News: New type of pickaxe coming out, looks suspiciously like normal iron.",
      "News: Purchases of pickaxes on the rise for both practical and decorative purposes.",
      "News: Little plastic keychain pickaxes selling like crazy, tourist shops wildly confused \"Who wants that type of junk?\"",
      "Ad: You looking for a good sturdy pickaxe for some backyard mining? We've got just the thing for you! Get our heavy-duty all-purpose pickaxes today!"
   ],
   [
      "Dwarves protest by the thousands for 'Dwarve Rights'",
      "Dwarves are good for mining Gold!",
      "Dwarves are good for mining Gold! (and they don't need to be paid!)",
      "News: Dwarves stop human miners from going to work, \"They only get in the way.\"",
      "News: Reports of \"Little people wielding pickaxes\" increasing daily",
      "News: Human miners losing their jobs as dwarves overtake the mining industry, \"not necessarily a bad thing\" says retired miner",
      "News: Scientist fear dwarves will \"take complete control of the universe\", AI reportedly \"Feel hurt and betrayed\".",
      "News: Dwarves rights movement spreading across the globe, dwarves demand equality and voting rights.",
      "News: Gold mine collapses, dwarves demand safer workplaces.",
      "News: Hoards of angry dwarves fill the streets worldwide during dwarf rights protests, \"It's surprising how threatening a mob of tiny people can be\" admits journalist",
      "News: Peaceful dwarf protests received with violent reprisal!"

   ],
   [
      "Geese - they lay golden eggs! How? Who cares!",
      "News: Scientists baffled by geese that lay golden eggs, \"It's like they're made of gold!\" says scientist",
      "News: Geese eggs selling like crazy, \"They're so shiny!\" says random person",
      "News: Scientist finally get the government to allow for the genetic modification of geese to make them lay golden eggs, public enraged.",
      "Ad: Your old hen not laying enough eggs? Your job just not paying the bills? Get your very own GOLDEN GOOSE today, for the low price of your soul!",
      "You have a pet goose called Henrieta.",
      "News: Golden goose released into wild, taking the habitats of native geese!"
   ],
   [
      `News: Mines opening everywhere, environmentalists worried.`,
      `News: Coal and diamond mines going out of business as gold mines reign supreme. "I mean, gold is shiny, what's so special about coal?"`,
      `News: "Maybe we should stop drilling holes in the earth." says random man.`,
      `News: Mines inhabited by creatures from the dawn of time, all journalists investingating mysteriously vanished.`,
      `News: As the gold industry gradualy gains control of the government, new laws are passed in the favor of mining.`,
      `News: "Aren't you worried about the enviroment?" ask journalist, Your's cheif mining officer says "I'll be gone by the time it gets bad."`
   ],
   [
      "Dragons scare people when flying in the sky",
      "Dragons are good for stealing Gold!",
      `News: Dragon eats poodle, owner furious: "The monster! I\'ll have his skin for my handbag!"`,
      `News: Gold dragons cause havoc worldwide as they search for gold-hoarding locations.`,
      `News: Scientist warn people to stay indoors during dragon breeding season."It's for your own overall health."`,
      `News: Global dragon-disease pandemic continuing unhindered, doctors searching for cure.`,
      `New: Dragon babysitters needed becase all parents busy hoarding gold.`,
      `News: Sales of dragon scale jackets skyrocketing, encouraging dragon products market.`,
      `News: Grass-fed dragon milk, new lactose-free substitute to cow milk.`,
      `News: Nations in fear as dragons soar above, athorities advise to "Carry umbrellas everywhere, it could save your life!"`
   ],
   [
      `News: Geologist strongly against turning rocks into gold; "You shall not steal our invaluable specimens!"`,
      `News: Throught an aminzing feat of alchemy, Mt. Everest is turned into gold. Locals thoroughly bothered: "Do you know how hard it is to live with a hunk of gold shimmering in your face CONSTANTLY?"`,
      `News: "NO, these philosophers stones DO NOT give longer lives." say exasperated representative of Youc Industries to over enthusiastic crowd.`,
      `News: Scientist lose philosophers stone, having trouble finding it. "I mean, its just a normal rock," says scientist`,
   ],
   [
      `News: Major asteroid mining station slams into Earth, impacted country enraged!`,
      `News: You gets to cut the ribbon for the first asteroid mining station.`,
      `News: Asteroid mining stations becoming popular vacation locations, "It's like a cruise, but in space!" says random person.`
   ],
   [
      `News: Leprechaun becomes politician, world leaders upset.`,
      `News: Rainbows occuring more and more often, leprechaun suspected.`,
      `News: Three leaved clovers become rare due to the large amount of four leaved clovers.`,
      `News: "Don't trust the gold at the end of leprechaun rainbows" says athoritiy, "Who knows what nasty tricks they have up there sleaves!" "Ehm ehm" says leprechaun with camera.`,
      `News: Semi-decent laws are made to protect people from Leprechauns, and vice versa.`
   ],
   [
      `News: New golden sheep breeds coming out, including golden-merino, golden-lincon and golden-corriedale.`,
      `News: Market sees a dramatic upturn in the sales of golden fleece jackets.`,
      `News: Pet sheep are popular now, "They're so fluffy!" says random person.`,
      `News: "I don't know what to do with all this wool!" says sheep farmer, "I mean, it's not like I can sell it or anything."`,
      `News: Pet golden sheeps on the rise, caused by the introduction of pigmy golden sheeps, little fluffy golden sheeps small enough to fit in your palm.`,
      `Ad: Are you looking for a family pet? Are dragons just not right? Get a pigmy golden sheep today!`,
      `News: "Baaaaa", says interviewed golden sheep.`,
      `News: "Just move a bit to the left and you'll be golden," says photographer to golden sheep.`
   ],
   [
      `Warning: do not stand in front of mass ray... actually, on second thought, do.`,
      `News: Mass rays wreak havoc, turning multiple minor plantets into solid gold, astronomers enraged`,
      `News: Illegal criminals illegally use mass rays to turn politicians into gold. "I know it's illegal, but I hope they keep doing it. Wait... are you a reporter?!"`,
   ],
   [
      `News: Scientist figure out a way to make gold by merging neutron stars, "Eureka! Wait a moment- I think this time we actually went to far..."`,
      `News: "Why, may I ask, are we MERGING NEUTRON STARS just to make gold!?! Please explain your reasoning." random man rants.`,
      `News: "I mean, it's not like we're going to run out of neutron stars anytime soon." says scientist.`
   ],
];
let gpsLastTick = -1;