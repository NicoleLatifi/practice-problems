const beyonce = {
  hits: [
    {
      title: 'bootylicious',
      group: true,
      groupName: 'destinysChild',
      hair: ['straight', 'blonde', 'pink tips'],
      signatureLook: 'fedora with yellow feather',
      videoTheme: 'dressing room dance',
      bestLine: 'Move your body up and down, make your booty touch the ground',
      fierceness: 7,
      formation: false,
      dancers: 20
    },
    {
      title: 'singleLadies',
      group: false,
      groupName: 'none',
      hair: ['honey brown', 'half up, half down'],
      signatureLook: 'black bodysuit and legs for days',
      videoTheme: 'single ladies dance',
      bestLine: 'if you like it then you should\'ve put a ring on it',
      fierceness: 10,
      formation: true,
      dancers: 2
    },
    {
      title: 'letMeUpgradeYou',
      group: false,
      groupName: 'none',
      hair: ['beaded bun', 'wet hair', 'honey brown', 'waves'],
      signatureLook: 'flapper dress and bodysuit',
      videoTheme: 'decadence, water, gold beads and pearls',
      bestLine: 'I could do for you what Martin did for the people',
      fierceness: 10,
      formation: true,
      dancers: 5
    },
    {
      title: 'sorry',
      group: false,
      groupName: 'none',
      hair: ['braids', 'bun', 'blonde', 'waves', 'bob'],
      signatureLook: 'braided crown with gold bikini top',
      videoTheme: 'party bus and Serena Williams in bodysuit',
      bestLine: 'Boi bye',
      fierceness: 10,
      formation: false,
      dancers: 1
    },
    {
      title: 'sayMyName',
      group: true,
      groupName: 'destinysChild',
      hair: ['blonde', 'curly', 'braid', 'pony tail'],
      signatureLook: 'none',
      videoTheme: 'color blocked scenes with group',
      bestLine: 'say my name, say my name',
      fierceness: 7,
      formation: true,
      dancers: 6
    },
    {
      title: 'feelingMyself',
      group: true,
      groupName: 'Nicki Minaj featuring Beyonce',
      hair: ['blonde', 'wavy'],
      signatureLook: 'sporty bodysuit',
      videoTheme: 'Coachella music festival',
      bestLine: 'Im felling myself',
      fierceness: 9,
      formation: false,
      dancers: 0
    }
  ],
  movies: [
    { title: 'Austin Power\'s Goldmember', year: 2002, rating: 5},
    { title: 'Dreamgirls', year: 2006, rating: 7},
    { title: 'Obsessed', year: 2009, rating: 6},
    { title: 'Cadillac Records', year: 2008, rating: 8},
    { title: 'Life is But a Dream', year: 2013, rating: 6},
    { title: 'The Pink Panther', year: 2006, rating: 4},
    { title: 'Epic', year: 2013, rating: 7},
    { title: 'The Fighting Temptations', year: 2003, rating: 5}
  ]
};

//1. console log all the songs

// beyonce.hits.forEach(hit => {
//   console.log(hit);
// })

//2. create an array with a list of all the titles of Beyonce's hit songs

// function getAllTitles() {
//   return beyonce.hits.map(hit => {
//     return hit.title;
//   });
// };
// const allTitles = getAllTitles();
//
// console.log(allTitles);

//3. create an array with a list of all of Beyonce's fierceness ratings

// function getAllRatings() {
//   return beyonce.hits.map(hit => {
//     return hit.fierceness;
//   });
// };
// const allRatings = getAllRatings();
//
// console.log(allRatings);

// give me a song where Beyonce is not wearing a bodysuit

function getNonBodysuitSong() {
  return beyonce.hits.find(hit => {
    return hit.signatureLook.includes('fedora with yellow feather')
  })
}

const nonBodysuitSong = getNonBodysuitSong();

console.log(nonBodysuitSong.title)


// give me all the songs where Beyonce is wearing a bodysuit or a bodysuit is part of the video theme


// create an array with all of the songs where Beyonce's fierceness is greater than or equal to 8


// find a song where Nicki Minaj is part of the group


// create an array with all Beyonce's songs that were not with a group


// create an array with all of the movies Beyonce made in 2006 and after


// find all of the group hit songs



// find a hit song where Beyonce's hair is blonde


// find the hit song sorry



// find all hit songs where Beyonce's fierceness rating is 10



// sum up Beyonces fierceness value for all of her hit songs



// get the average fierceness value for all of her hit songs



// sum up Beyonces rating value for all of her movies



// get the average rating value for all of her movies


// create an object where the properties are song names and the value is an object which contains that fierceness


// create an object where the properties are movie names and the value is an object which contains that rating and average rating



// sum up the total number of dancers in all of the hit song videos



// create an array of beyonces hairstyles without repeats



// create an object list with beyonces hairstyles with a tally of each


//




//ANSWERS BELOW - SCROLL WAAAY DOWN































































// // console log all the songs
// console.log(beyonce.hits)

// // create an array with a list of all the titles of Beyonce's hit songs
// const hitSongs = beyonce.hits.map(hit => {
//   return hit.title
// })

// // console.log(hitSongs)
// // create an array with a list of all of Beyonce's fierceness ratings
// const fierceRating = beyonce.hits.map(hit => {
//   return hit.fierceness
// })

// console.log (fierceRating)


// // give me a song where Beyonce is not wearing a bodysuit
// const noBodySuit = beyonce.hits.find(hit => {
//   return !(hit.signatureLook.includes('bodysuit'))
// })

// // console.log(noBodySuit)

// // give me all the songs where Beyonce is wearing a bodysuit or a bodysuit is part of the video theme

// const bodySuits = beyonce.hits.filter(hit => {
//   return hit.signatureLook.includes('bodysuit') || hit.videoTheme.includes('bodysuit')
// })

// // console.log(bodySuits)


// // create an array with all of the songs where Beyonce's fierceness is greater than or equal to 8
// const hiFierce = beyonce.hits.filter(hit => {
//   return hit.fierceness >= 8
// })

// // console.log(hiFierce)

// // find a song where Nicki Minaj is part of the group
// const withNicki = beyonce.hits.find(hit => {
//   return hit.groupName.includes('Nicki');
// })

// // console.log(withNicki);

// // create an array with all Beyonce's songs that were not with a group
// const noGroup = beyonce.hits.filter(hit => {
//   return hit.groupName === 'none'
// });

// // console.log(noGroup)

// // create an array with all of the movies Beyonce made in 2006 and after
// const post2006 = beyonce.movies.filter(movie => {
//   return movie.year >= 2006
// })

// // console.log(post2006)

// // find all of the group hit songs
// const groupHits = beyonce.hits.filter(hit => {
//   return hit.groupName !== 'none'
// })

// // console.log(groupHits)

// // find a hit song where Beyonce's hair is blonde
// const blonde = beyonce.hits.find(hit => {
//   return hit.hair.includes('blonde');
// })

// // console.log(blonde);

// // find the hit song sorry
// const sorry = beyonce.hits.find(hit => hit.title === 'sorry');
// // console.log(sorry);

// // find all hit songs where Beyonce's fierceness rating is 10
// const tenfierce = beyonce.hits.filter(hit => hit.fierceness === 10);
// // console.log(tenfierce);

// sum up Beyonces fierceness value for all of her hit songs
// const sumFierce = beyonce.hits.reduce((sum, currHit) => {
//   sum += currHit.fierceness
//   return sum
// }, 0)

// console.log(sumFierce)

// // get the average fierceness value for all of her hit songs
// const avgFierce = beyonce.hits.reduce((sum, currHit) => {
//   sum += currHit.fierceness
//   return sum
// }, 0) / beyonce.hits.length;

// // console.log(avgFierce)


// // sum up Beyonces rating value for all of her movies
// const movSum = beyonce.movies.reduce((sum, movie) => {
//   sum += movie.rating
//   return sum
// }, 0)

// // console.log(movSum)


// // get the average rating value for all of her movies

// const avgRate = beyonce.movies.reduce((sum, movie) => {
//   sum += movie.rating
//   return sum
// }, 0) / beyonce.movies.length;

// // console.log(avgRate);

// // create an object where the properties are song names and the value is an object which contains that fierceness

// const fierceObj = beyonce.hits.reduce((obj, hit) => {
//     if (!obj[hit.title]) {
//     obj[hit.title] = hit.fierceness;
//   }
//   return obj
// }, {})

// // console.log(fierceObj)

// // create an object where the properties are movie names and the value is an object which contains that rating and average rating


// const movRatings = beyonce.movies.reduce((obj, movie) => {

//   if (!obj[movie.title]) {
//     obj[movie.title] = {rating : movie.rating, averageRating : avgRate}
//   }
//   return obj
// }, {})

// // console.log(movRatings)


// // sum up the total number of dancers in all of the hit song videos
// const allDancers = beyonce.hits.reduce((sum, currHit) => {
//   sum += currHit.dancers
//   return sum
// }, 0)

// // console.log(allDancers)


// // create an array of beyonces hairstyles without repeats
// const hairstyles = beyonce.hits.reduce((arr, hit) => {
//   hit.hair.forEach(hairstyle => {
//     if(arr.indexOf(hairstyle) === -1) {
//       arr.push(hairstyle)
//       }
//   });
//   return arr
// }, [])

// // console.log(hairstyles)


// // create an object list with beyonces hairstyles with a tally of each
// const hairList = beyonce.hits.reduce((obj, hit) => {
//    hit.hair.forEach(hairstyle => {
//       if (!obj[hairstyle]) {
//         obj[hairstyle] = 0;
//       }
//       obj[hairstyle] ++;
//    })
//   return obj
// }, [])

// console.log(hairList)
