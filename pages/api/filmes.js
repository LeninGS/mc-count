async function Filme(request, response) {
    const apiToken = process.env.THE_MOVIE_DB_API_TOKEN;
    const dynamicDate = new Date();

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const movieID = getRndInteger(55555, 300000);
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiToken}`);
    const movieResponseJson = await movieResponse.json();
    const movieTitle = movieResponseJson.title;
    const movieGenre = "no genre info available";

    try {
        const movieGenre = movieResponseJson.genres[0].name;
    } catch (error) {
        const movieGenre = "no genre info available";
    }

    const movieRuntime = movieResponseJson.runtime;
    const movieOverview = movieResponseJson.overview;
    const mineItems = await fetch('https://minecraft-ids.grahamedgecombe.com/items.json');
    const mineItemsJson = await mineItems.json();

    console.log(mineItemsJson);

    response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

    response.json({
        items: mineItemsJson,
        date: dynamicDate.toGMTString(),
        movieId: movieID,
        title: movieTitle,
        genre: movieGenre,
        runtime: movieRuntime,
        sinopse: movieOverview,
        all: movieResponseJson
    });
}

export default Filme;