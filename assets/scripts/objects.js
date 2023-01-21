const addMovieBtn = document.getElementById("add-movie-btn");
const serchBtn = document.getElementById("search-btn");
const getTitle = document.getElementById("title");
const extraName = document.getElementById("extra-name");
const extraInfo = document.getElementById("extra-value");
const movieList = document.getElementById("movie-list");
//const filtered = document.getElementById("filter-title");
const testCase = document.getElementById("testing");

const movies = [];

const renderMovie = (filter = "") => {
	if (movies.length === 0) {
		movieList.classList.remove("visible");
		return;
	} else {
		movieList.classList.add("visible");
	}
	movieList.innerHTML = "";
	const filteredMovie = !filter
		? movies
		: movies.filter((movie) => movie.info.title.includes(filter));
	filteredMovie.forEach((movie) => {
		const movieEl = document.createElement("li");
		const { info, ...othertProps } = movie;
		console.log(othertProps);
		//const { title } = info;
		const { getFormattedTitle } = movie;
		//getFormattedTitle = getFormattedTitle.bind(movie);
		let text = getFormattedTitle.call(movie) + " - ";

		for (const key in info) {
			if (key !== "title") {
				text = text + `${key}: ${info[key]}`;
			}
		}
		movieEl.textContent = text;
		movieList.append(movieEl);
	});
};
//console.log(this);
const addMovieHandler = () => {
	const title = getTitle.value;
	const getextraName = extraName.value;
	const getEtraInfo = extraInfo.value;
	if (
		title.trim() === "" ||
		getEtraInfo.trim() === "" ||
		getextraName.trim() === ""
	) {
		return;
	}
	const getGeneralMovieInfo = {
		id: Math.random().toString(),
		info: {
			title,
			[getextraName]: getEtraInfo,
		},
		getFormattedTitle() {
			return this.info.title.toUpperCase();
		},
	};
	movies.push(getGeneralMovieInfo);
	renderMovie();
};
const searchMovieHandler = () => {
	console.log(this);
	const filterTerm = document.getElementById("filter-title").value;
	renderMovie(filterTerm);
};
addMovieBtn.addEventListener("click", addMovieHandler);

// Thie is for the serh BTN
serchBtn.addEventListener("click", searchMovieHandler);
// just a sorting practice
