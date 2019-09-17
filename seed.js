const {db} = require('./server/db')
const {green, red} = require('chalk')
const Movie = require('./server/db/models/movie')
const User = require('./server/db/models/user')
const Order = require('./server/db/models/order')

const movies = [
  {
    name: 'Hotel Mumbai',
    genre: 'Drama',
    year: 2018,
    price: 14.99,
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
    price: 12.99,
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
    price: 7.99,
    image:
      'https://prod.miramax.digital/media/assets/759_LifeIsBeautiful_Catalog_Poster_v2_Approved.png',
    description:
      'A gentle Jewish-Italian waiter, Guido Orefice (Roberto Benigni), meets Dora (Nicoletta Braschi), a pretty schoolteacher, and wins her over with his charm and humor. Eventually they marry and have a son, Giosue (Giorgio Cantarini). Their happiness is abruptly halted, however, when Guido and Giosue are separated from Dora and taken to a concentration camp. Determined to shelter his son from the horrors of his surroundings, Guido convinces Giosue that their time in the camp is merely a game.',
    inventory: 20
  },
  {
    name: 'The Shawshank Redemption',
    genre: 'https://i.ytimg.com/vi/7cwUcdpUayQ/maxresdefault.jpg',
    year: 1994,
    price: 10.67,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._SY445_.jpg',
    description:
      "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.",
    inventory: 25
  }
]

const users = [
  {
    username: 'ai',
    email: 'ai@gmail.com',
    password: 123
  },
  {
    username: 'ethan',
    email: 'ethan@gmail.com',
    password: 345
  },
  {
    username: 'jon',
    email: 'jon@gmail.com',
    password: 567
  },
  {
    username: 'mike',
    email: 'mike@gmail.com',
    password: 789
  }
]

const orders = [
  {
    status: 'PENDING'
  },
  {
    status: 'COMPLETE'
  },
  {
    status: 'COMPLETE'
  },
  {
    status: 'PENDING'
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
    console.log(green('Seeding success!'))
    db.close()
  } catch (err) {
    console.error(red('Oh no! Something went wrong!'))
    console.error(err)
    db.close()
  }
}

seed()
