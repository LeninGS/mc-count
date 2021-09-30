async function filme(request, response) {
    const apiToken = process.env.THE_MOVIE_DB_API_TOKEN;
    const dynamicDate = new Date();

    const movieID = "343611";
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiToken}`);
    const movieResponseJson = await movieResponse.json();
    const movieOverview = movieResponseJson.overview;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-reavalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        sinopse: movieOverview
    });
}

export default filme;