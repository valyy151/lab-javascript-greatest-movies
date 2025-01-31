// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
	let directorArray = moviesArray.map((movie) => movie.director);
	return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	let spielbergArray = moviesArray.filter(
		(movie) => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')
	);

	return spielbergArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (moviesArray.length === 0) {
		return 0;
	} else {
		let filteredMovies = moviesArray.filter((movie) => movie.score);
		let totalScore = filteredMovies.reduce((sum, movie) => {
			return sum + movie.score;
		}, 0);

		let averageScore = totalScore / moviesArray.length;
		return Number(averageScore.toFixed(2));
	}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	let dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));

	if (dramaMovies.length === 0) {
		return 0;
	} else {
		let totalScore = dramaMovies.reduce((sum, movie) => {
			return sum + movie.score;
		}, 0);

		let averageScore = totalScore / dramaMovies.length;

		let floatedNumber = Number(averageScore.toFixed(2));
		return floatedNumber;
	}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	let newArray = [...moviesArray];

	let sortedArray = newArray.sort((a, b) => {
		if (a.year === b.year) {
			return a.title.localeCompare(b.title);
		} else return a.year - b.year;
	});
	return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	let newArray = moviesArray.map((movie) => movie.title);
	newArray.sort();
	if (newArray.length > 20) {
		return newArray.slice(0, 20);
	} else return newArray;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	return moviesArray.map((movie) => {
		let duration = movie.duration;
		let separatedArray = duration.split(' ');
		let hours = parseInt(separatedArray[0]);
		let minutes = parseInt(separatedArray[1] || 0);

		let totalMinutes = hours * 60 + minutes;

		return { ...movie, duration: totalMinutes };
	});
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
