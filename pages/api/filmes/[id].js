export default async function GetFilmeInfos(request, response) {
    const movieID = request.query.id;
    const apiToken = process.env.THE_MOVIE_DB_API_TOKEN;
    const dynamicDate = new Date();

    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiToken}`);
    const movieResponseJson = await movieResponse.json();
    const movieTitle = movieResponseJson.title;
    const movieGenre = "no genre info available";

    try {
        movieGenre = movieResponseJson.genres[0].name;
    } catch (error) {
        movieGenre = "no genre info available";
    }

    const movieRuntime = movieResponseJson.runtime;
    const movieOverview = movieResponseJson.overview;


    response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        movieId: movieID,
        title: movieTitle,
        genre: movieGenre,
        runtime: movieRuntime,
        sinopse: movieOverview,
        all: movieResponseJson
    });

    response.json({
        date: dynamicDate.toGMTString(),
        movieId: movieID,
        title: movieTitle,
        genre: movieGenre,
        runtime: movieRuntime,
        sinopse: movieOverview
    });
}