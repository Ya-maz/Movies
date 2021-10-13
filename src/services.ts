export async function api<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await response.json() as Promise<T>;
}

export async function falseAPI(url: string) {
  console.log(url);
  return new Promise((r) =>
    setTimeout(() => {
      const result = {
        Title: "Star Wars",
        Year: "1977",
        Rated: "PG",
        Released: "25 May 1977",
        Runtime: "121 min",
        Genre: "Action, Adventure, Fantasy",
        Director: "George Lucas",
        Writer: "George Lucas",
        Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
        Plot: "The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.",
        Language: "English",
        Country: "United States, United Kingdom",
        Awards: "Won 7 Oscars. 63 wins & 29 nominations total",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        Ratings: [
          { Source: "Internet Movie Database", Value: "8.6/10" },
          { Source: "Rotten Tomatoes", Value: "92%" },
          { Source: "Metacritic", Value: "90/100" },
        ],
        Metascore: "90",
        imdbRating: "8.6",
        imdbVotes: "1,276,172",
        imdbID: "tt0076759",
        Type: "movie",
        DVD: "06 Dec 2005",
        BoxOffice: "$460,998,507",
        Production: "Lucasfilm Ltd.",
        Website: "N/A",
        Response: "True",
      };
      r(result);
    }, 1000)
  );
}
