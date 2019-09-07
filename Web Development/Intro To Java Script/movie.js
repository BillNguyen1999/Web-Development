var movie = [{title: "Deadpool", rating: 5, hasWatched: true}, 
{title: "Pikachu", rating: 3, hasWatched: false}, 
{title: "Avengers", rating: 4.5, hasWatched: true}];

for(var i = 0; i < movie.length; i++) {
	if(movie[i].hasWatched) {
		console.log("You have watched " + movie[i].title + " - " + movie[i].rating + " stars");
	} else {
		console.log("You have not watched " + movie[i].title + " - " + movie[i].rating + " stars");
	}
}