//The data.js file contains a variable named favMovies, its value is an array, and it contains four objects: title, year, rating, description.
let favMovies = {title: ["Game of Thrones", "The War of the Roses", "The Game", "Warcraft"],  year: [2011, 1989, 1997, 2016], rating: [9.2, 6.8, 7.7, 6.7], 
description: ["Nine noble families fight for control over the lands ofWesteros, while an ancient enemy returns after being dormant for millennia.", "A married couple tries everything to drive each other out of the house in a vicious divorce battle.", "After a wealthy San Francisco banker is given an opportunity to participate in a mysterious game, his life is turned upside down as he begins to question if it might really be a concealed conspiracy to destroy him.", "As an Orc horde invades the planet Azeroth using a magic portal, a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war."]};

console.log(favMovies.title[0]);
console.log(favMovies.year[1]);
console.log(favMovies.rating[2]);
console.log(favMovies.description[3]);

console.log("The fisrt movie's title is: "+favMovies.title[0]);
console.log("The second movie's release year is: "+favMovies.year[1]);
console.log("The third movie's IMDB rating is: "+favMovies.rating[2]);
console.log("The fourth movie's short description is: "+favMovies.description[3]);

//All objects in the favMovies array have the following keys: directors, writers, stars, genres
let favMovies = {title: ["Game of Thrones", "The War of the Roses", "The Game", "Warcraft"],  year: [2011, 1989, 1997, 2016], rating: [9.2, 6.8, 7.7, 6.7], 
description: ["Nine noble families fight for control over the lands ofWesteros, while an ancient enemy returns after being dormant for millennia.", "A married couple tries everything to drive each other out of the house in a vicious divorce battle.", "After a wealthy San Francisco banker is given an opportunity to participate in a mysterious game, his life is turned upside down as he begins to question if it might really be a concealed conspiracy to destroy him.", "As an Orc horde invades the planet Azeroth using a magic portal, a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war."],
directors: ["David Benioff", "Danny DeVito", "David Fincher", "Duncan Jones"], writers: ["David Benioff & George R.R. Martin", "Warren Adler & Michael Leeson", "John Brancato & Michael Ferris", "Charles Leavitt & Duncan Jones"],
stars: ["Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington", "	Michael Douglas, Kathleen Turner, Danny DeVito", "Michael Douglas, Sean Penn, Deborah Kara Unger", "Travis Fimmel, Paula Patton, Ben Foster"], 
genres: ["Action, Adventure, Drama", "Comedy, Romance", "Drama, Mystery, Thriller", "Action, Adventure,Fantasy"]};

console.log("The first movie's lead director is: "+favMovies.directors[0]);
console.log("The second movie's lead writer is: "+favMovies.writers[1]);
console.log( "The third movie's lead star is: "+favMovies.stars[2]);
console.log("The fourth movie's main genre is: "+favMovies.generes[3]);
