const Users = require('./secrets')
const db = require('./server/db')
// const {green, red} = require('chalk')
const {Movie, User, Order, ProductOrder} = require('./server/db/models')

const movies = [
  {
    name: 'Hotel Mumbai',
    genre: 'Drama',
    year: 2018,
    price: 1499,
    image:
      'https://m.media-amazon.com/images/M/MV5BYTJlZWY2YjYtZGIxMy00MDEwLTliNzMtZGM3MDQ1NzlmNDY1XkEyXkFqcGdeQXVyNDY2MjcyOTQ@._V1_.jpg',
    description:
      'Terror strikes in the heart of Mumbai, India, as members of Lashkar-e-Taiba storm the Taj Mahal Palace Hotel in a series of coordinated attacks throughout the city. Amid the gunfire and mayhem, a brave chef and kitchen worker decide to risk their own lives to try and protect the frightened guests. As the militants continue their assault on the hotel, a desperate couple must do whatever they can to protect their newborn baby.',
    inventory: 15
  },
  {
    name: "Knight's Tale",
    genre: 'Drama',
    year: '2001',
    price: 1299,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51UaTeuUe1L._SY445_.jpg',
    description:
      'Peasant-born William Thatcher (Heath Ledger) begins a quest to change his stars, win the heart of an exceedingly fair maiden (Shanynn Sossamon) and rock his medieval world. With the help of friends (Mark Addy, Paul Bettany, Alan Tudyk), he faces the ultimate test of medieval gallantry -- tournament jousting -- and tries to discover if he has the mettle to become a legend.',
    inventory: 10
  },
  {
    name: 'Life Is Beautiful',
    genre: 'Drama',
    year: 1997,
    price: 799,
    image:
      'https://prod.miramax.digital/media/assets/759_LifeIsBeautiful_Catalog_Poster_v2_Approved.png',
    description:
      'A gentle Jewish-Italian waiter, Guido Orefice (Roberto Benigni), meets Dora (Nicoletta Braschi), a pretty schoolteacher, and wins her over with his charm and humor. Eventually they marry and have a son, Giosue (Giorgio Cantarini). Their happiness is abruptly halted, however, when Guido and Giosue are separated from Dora and taken to a concentration camp. Determined to shelter his son from the horrors of his surroundings, Guido convinces Giosue that their time in the camp is merely a game.',
    inventory: 20
  },
  {
    name: 'The Shawshank Redemption',
    genre: 'Drama',
    year: 1994,
    price: 1067,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._SY445_.jpg',
    description:
      "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.",
    inventory: 25
  },
  {
    name: 'Office Space',
    genre: 'Comedy',
    year: 1999,
    price: 1471,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41-R3n8HVnL._SY445_.jpg',
    description:
      'Corporate drone Peter Gibbons (Ron Livingston) hates his soul-killing job at software company Initech. While undergoing hypnotherapy, Peter is left in a blissful state when his therapist dies in the middle of their session. He refuses to work overtime, plays games at his desk and unintentionally charms two consultants into putting him on the management fast-track. When Peter\'s friends learn they\'re about to be downsized, they hatch a revenge plot against the company inspired by "Superman III."',
    inventory: 10
  },
  {
    name: 'Sideways',
    genre: 'Comedy',
    year: 2004,
    price: 1499,
    image:
      'https://s3-us-west-2.amazonaws.com/fsl.web/production/media/spotlight/page/poster-76790dda-ea18-40e9-9311-c16e27a13625.jpg',
    description:
      'Struggling writer and wine enthusiast Miles (Paul Giamatti) takes his engaged friend, Jack (Thomas Haden Church), on a trip to wine country for a last single-guy bonding experience. While Miles wants to relax and enjoy the wine, Jack is in search of a fling before his wedding. Soon Jack is sleeping with Stephanie (Sandra Oh), while her friend Maya (Virginia Madsen) connects with Miles. When Miles lets slip that Jack is getting married, both women are furious, sending the trip into disarray.',
    inventory: 10
  },
  {
    name: 'Waking Life',
    genre: 'Drama',
    year: 2001,
    price: 1799,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51P24AAS71L._SY445_.jpg',
    description:
      'Transcending the boundaries of technology and imagination, "Waking Life" is a revolutionary breakthrough in film animation. In "Waking Life," Wiley Wiggins ("Dazed and Confused") travels through a series of encounters and observations in a world that may or may not be reality. It is this surreal existence, flourishing with endless ideas and possibilities, that ultimately leads to the question -- Are we sleep-walking through our waking state or wake-walking through our dreams?',
    inventory: 10
  },
  {
    name: 'Half-Baked',
    genre: 'Comedy',
    year: 1998,
    price: 699,
    image:
      'https://i5.walmartimages.com/asr/32400578-e4fb-488c-ae7d-b89a40170d08_1.83471cf5d611a8c23b2fc8526c557b02.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
    description:
      "When a member of their crew gets arrested for killing a New York City police horse by feeding it junk food, three slackin' stoners are forced to get off their butts and raise bail by selling pot stolen from a pharmaceutical lab. It's a risky plan but, hey, these are stand-up guys who would do anything to help out a friend in need.",
    inventory: 10
  },
  {
    name: 'Casino',
    genre: 'Drama',
    year: 1995,
    price: 797,
    image:
      'https://i5.walmartimages.com/asr/c9d21b5b-c637-4e9b-9bad-44880c0b749e_1.6ee03d431970847e8b9aac0c8148a7ba.jpeg',
    description:
      'In early-1970s Las Vegas, low-level mobster Sam "Ace" Rothstein (Robert De Niro) gets tapped by his bosses to head the Tangiers Casino. At first, he\'s a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro (Joe Pesci), his ex-hustler wife Ginger (Sharon Stone), her con-artist ex Lester Diamond (James Woods) and a handful of corrupt politicians put Sam in ever-increasing danger. Martin Scorsese directs this adaptation of Nicholas Pileggi\'s book.',
    inventory: 10
  },
  {
    name: 'A Bronx Tale',
    genre: 'Drama',
    year: 1993,
    price: 1306,
    image: 'https://www.vermontmoviestore.com/products/a-bronx-tale',
    description:
      'As he grows into a teenager on the streets of the Bronx in the socially turbulent 1960s, Calogero (Lillo Brancato) gets taken under the wing of neighborhood mobster Sonny (Chazz Palminteri). Sonny initiates the boy into the ways of gangland life, in direct conflict with his straight-arrow bus driver father (Robert De Niro). But when Calogero falls for his African-American classmate, Jane (Taral Hicks), the repercussions threaten the entire neighborhood.',
    inventory: 10
  },
  {
    name: 'Scarface',
    genre: 'Drama',
    year: 1983,
    price: 1398,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71uaTG-7CxL._SY445_.jpg',
    description:
      'After getting a green card in exchange for assassinating a Cuban government official, Tony Montana (Al Pacino) stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.',
    inventory: 10
  },
  {
    name: 'The Godfather',
    genre: 'Drama',
    year: 1972,
    price: 797,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    description:
      'This is the epic tale of a 1940s New York Mafia family and their struggle to protect their empire from rival families as the leadership switches from the father to his youngest son.',
    inventory: 10
  },
  {
    name: 'Raging Bull',
    genre: 'Drama',
    year: 1980,
    price: 688,
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2880/28805217_sa.jpg;maxHeight=640;maxWidth=550',
    description:
      'The story of a middleweight boxer as he rises through ranks to earn his first shot at the middleweight crown. He falls in love with a gorgeous girl from the Bronx. The inability to express his feelings enters into the ring and eventually takes over his life. He eventually is sent into a downward spiral that costs him everything.',
    inventory: 10
  },
  {
    name: 'Forrest Gump',
    genre: 'Drama',
    year: 1994,
    price: 859,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81xTx-LxAPL._SY445_.jpg',
    description:
      'Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).',
    inventory: 10
  },
  {
    name: 'The Matrix',
    genre: 'Sci-Fi',
    year: 1999,
    price: 957,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg',
    description:
      'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.',
    inventory: 10
  },
  {
    name: 'Rocky',
    genre: 'Drama',
    year: 1976,
    price: 399,
    image:
      'https://static.raru.co.za/cover/2014/04/01/14201-l.jpg?v=1398417345',
    description:
      "Rocky Balboa (Sylvester Stallone), a small-time boxer from working-class Philadelphia, is arbitrarily chosen to take on the reigning world heavyweight champion, Apollo Creed (Carl Weathers), when the undefeated fighter's scheduled opponent is injured. While training with feisty former bantamweight contender Mickey Goldmill (Burgess Meredith), Rocky tentatively begins a relationship with Adrian (Talia Shire), the wallflower sister of his meat-packer pal Paulie (Burt Young).",
    inventory: 10
  },
  {
    name: 'Terminator II',
    genre: 'Action',
    year: 1991,
    price: 500,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51hRUw7ba6L._SY445_.jpg',
    description:
      'In this sequel set eleven years after "The Terminator," young John Connor (Edward Furlong), the key to civilization\'s victory over a future robot uprising, is the target of the shape-shifting T-1000 (Robert Patrick), a Terminator sent from the future to kill him. Another Terminator, the revamped T-800 (Arnold Schwarzenegger), has been sent back to protect the boy. As John and his mother (Linda Hamilton) go on the run with the T-800, the boy forms an unexpected bond with the robot.',
    inventory: 10
  },
  {
    name: 'Back to the Future',
    genre: 'Sci-Fi',
    year: 1985,
    price: 499,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/91LbNAAfA4L._SY445_.jpg',
    description:
      "In this 1980s sci-fi classic, small-town California teen Marty McFly (Michael J. Fox) is thrown back into the '50s when an experiment by his eccentric scientist friend Doc Brown (Christopher Lloyd) goes awry. Traveling through time in a modified DeLorean car, Marty encounters young versions of his parents (Crispin Glover, Lea Thompson), and must make sure that they fall in love or he'll cease to exist. Even more dauntingly, Marty has to return to his own time and save the life of Doc Brown.",
    inventory: 10
  },
  {
    name: 'Commando',
    genre: 'Action',
    year: 1985,
    price: 1625,
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3603/3603746_sa.jpg;maxHeight=640;maxWidth=550',
    description:
      'Retired Special Forces soldier John Matrix (Arnold Schwarzenegger) lives with daughter Jenny (Alyssa Milano) in isolation, but his privacy is disturbed by former commander Franklin Kirby (James Olson), who warns him that his fellow soldiers are getting killed one by one. After Kirby leaves, Jenny is kidnapped by former Latin American dictator Arius (Dan Hedaya), who wants Matrix to restore him to power. Instead, Matrix sets out to take down the rogue leader and rescue his daughter.',
    inventory: 10
  },
  {
    name: 'Predator',
    genre: 'Sci-Fi',
    year: 1987,
    price: 399,
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6305/6305927_sa.jpg;maxHeight=640;maxWidth=550',
    description:
      'Dutch (Arnold Schwarzenegger), a soldier of fortune, is hired by the U.S. government to secretly rescue a group of politicians trapped in Guatemala. But when Dutch and his team, which includes weapons expert Blain (Jesse Ventura) and CIA agent George (Carl Weathers), land in Central America, something is gravely wrong. After finding a string of dead bodies, the crew discovers they are being hunted by a brutal creature with superhuman strength and the ability to disappear into its surroundings.',
    inventory: 10
  },
  {
    name: 'Arrival',
    genre: 'Sci-Fi',
    year: 2016,
    price: 999,
    image:
      'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg',
    description:
      'Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind.',
    inventory: 10
  },
  {
    name: 'Saving Private Ryan',
    genre: 'Drama',
    year: 1998,
    price: 749,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51cdxa%2BOfvL._SY445_.jpg',
    description:
      'Captain John Miller (Tom Hanks) takes his men behind enemy lines to find Private James Ryan, whose three brothers have been killed in combat. Surrounded by the brutal realties of war, while searching for Ryan, each man embarks upon a personal journey and discovers their own strength to triumph over an uncertain future with honor, decency and courage.',
    inventory: 10
  },
  {
    name: 'Gladiator',
    genre: 'Drama',
    year: 2000,
    price: 976,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51GA6V6VE1L._SY445_.jpg',
    description:
      "Set in Roman times, the story of a once-powerful general forced to become a common gladiator. The emperor's son is enraged when he is passed over as heir in favour of his father's favourite general. He kills his father and arranges the murder of the general's family, and the general is sold into slavery to be trained as a gladiator - but his subsequent popularity in the arena threatens the throne.",
    inventory: 10
  },
  {
    name: 'The Godfather Part II',
    genre: 'Drama',
    year: 1974,
    price: 739,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41V2AB34KCL._SY445_.jpg',
    description:
      'The compelling sequel to "The Godfather," contrasting the life of Corleone father and son. Traces the problems of Michael Corleone (Al Pacino) in 1958 and that of a young immigrant Vito Corleone (Robert De Niro) in 1917\'s Hell\'s Kitchen. Michael survives many misfortunes and Vito is introduced to a life of crime.',
    inventory: 10
  },
  {
    name: 'Jurassic Park',
    genre: 'Action',
    year: 1993,
    price: 500,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/91rQiQbPFkL._SY445_.jpg',
    description:
      "In Steven Spielberg's massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park's mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.",
    inventory: 10
  },
  {
    name: 'Full Metal Jacket',
    genre: 'Drama',
    year: 1987,
    price: 1276,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL._SY445_.jpg',
    description:
      'Stanley Kubrick\'s take on the Vietnam War follows smart-aleck Private Davis (Matthew Modine), quickly christened "Joker" by his foul-mouthed drill sergeant (R. Lee Ermey), and pudgy Private Lawrence (Vincent D\'Onofrio), nicknamed "Gomer Pyle," as they endure the rigors of basic training. Though Pyle takes a frightening detour, Joker graduates to the Marine Corps and is sent to Vietnam as a journalist, covering -- and eventually participating in -- the bloody Battle of Hué.',
    inventory: 10
  },
  {
    name: 'Good Will Hunting',
    genre: 'Drama',
    year: 1997,
    price: 948,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51TzX8er11L._SY445_.jpg',
    description:
      'Will Hunting (Matt Damon) has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau (Stellan Skarsgard), who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire (Robin Williams).',
    inventory: 10
  },
  {
    name: 'American History X',
    genre: 'Drama',
    year: 1998,
    price: 1044,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81gFsrQDw7L._SY445_.jpg',
    description:
      'Living a life marked by violence and racism, neo-Nazi Derek Vinyard (Edward Norton) finally goes to prison after killing two black youths who tried to steal his car. Upon his release, Derek vows to change his ways; he hopes to prevent his younger brother, Danny (Edward Furlong), who idolizes Derek, from following in his footsteps. As he struggles with his own deeply ingrained prejudices and watches their mother grow sicker, Derek wonders if his family can overcome a lifetime of hate.',
    inventory: 10
  },
  {
    name: 'The Bourne Identity',
    genre: 'Action',
    year: 2002,
    price: 1499,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51960R4T44L._SY445_.jpg',
    description:
      "The story of a man (Matt Damon), salvaged, near death, from the ocean by an Italian fishing boat. When he recuperates, the man suffers from total amnesia, without identity or background... except for a range of extraordinary talents in fighting, linguistic skills and self-defense that speak of a dangerous past. He sets out on a desperate search-assisted by the initially rebellious Marie (Franka Potente) - to discover who he really is, and why he's being lethally pursued by assassins.",
    inventory: 10
  },
  {
    name: 'Dumb and Dumber',
    genre: 'Comedy',
    year: 1994,
    price: 1198,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51XVZYDA0ZL.jpg',
    description:
      "Imbecilic best friends Lloyd Christmas (Jim Carrey) and Harry Dunne (Jeff Daniels) stumble across a suitcase full of money left behind in Harry's car by Mary Swanson (Lauren Holly), who was on her way to the airport. The pair decide to go to Aspen, Colo., to return the money, unaware that it is connected to a kidnapping. As Harry and Lloyd -- who has fallen in love with Mary -- are pursued across the country by hired killers and police, they find both their friendship and their brains tested.",
    inventory: 10
  }
]

const users = Users

const orders = [
  {
    status: 'PENDING',
    price: 1000,
    userId: 1
  },
  {
    status: 'COMPLETE',
    price: 1500,
    userId: 2
  },
  {
    status: 'COMPLETE',
    price: 2000,
    userId: 3
  },
  {
    status: 'PENDING',
    price: 2500,
    userId: 4
  }
]

const productOrders = [
  {
    quantity: 3,
    movieId: 1,
    orderId: 1
  },
  {
    quantity: 1,
    movieId: 2,
    orderId: 2
  },
  {
    quantity: 2,
    movieId: 3,
    orderId: 3
  },
  {
    quantity: 5,
    movieId: 4,
    orderId: 4
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})
    await Promise.all(
      movies.map(movie => {
        return Movie.create(movie)
      })
    )
    await Promise.all(
      users.map(user => {
        return User.create(user)
      })
    )
    await Promise.all(
      orders.map(order => {
        return Order.create(order)
      })
    )
    await Promise.all(
      productOrders.map(order => {
        return ProductOrder.create(order)
      })
    )
    console.log('Seeding success!')
    db.close()
  } catch (err) {
    console.error('Oh no! Something went wrong!')
    console.error(err)
    db.close()
  }
}

seed()
