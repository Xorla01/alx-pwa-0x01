  <h1>alx-project-0x14</h1>
  <h2>API Overview</h2>
  <p>
    The MoviesDatabase API is a comprehensive collection of information for movies, TV shows, and actors. 
    It includes YouTube trailer URLs, awards, full biographies, and many other useful details. 
    The API provides complete and updated data for over <strong>9 million titles</strong> (movies, series, and episodes) 
    and <strong>11 million actors, crew, and cast members</strong>. 
    Recent titles are updated weekly, while ratings and episode information are updated daily.
  </p>
  <p>Support for developers: <a href="https://www.buymeacoffee.com/SAdrian13" target="_blank">BuyMeACoffee</a></p>

  <h2>Version</h2>
  <p>v1.0</p>

  <h2>Available Endpoints</h2>

  <h3>Titles</h3>
  <ul>
    <li><strong>/titles</strong> – Returns an array of titles filtered or sorted by optional query parameters.</li>
    <li><strong>/x/titles-by-ids</strong> – Returns an array of titles according to an array of IMDb IDs.</li>
    <li><strong>/titles/{id}</strong> – Returns details for a single title by IMDb ID.</li>
    <li><strong>/titles/{id}/ratings</strong> – Returns the rating and number of votes for a title.</li>
    <li><strong>/titles/series/{id}</strong> – Returns an array of episodes (light episode object) for a series.</li>
    <li><strong>/titles/seasons/{id}</strong> – Returns the total number of seasons for a series.</li>
    <li><strong>/titles/series/{id}/{season}</strong> – Returns episodes for a specific season of a series.</li>
    <li><strong>/titles/episode/{id}</strong> – Returns episode details by IMDb ID.</li>
    <li><strong>/titles/x/upcoming</strong> – Returns upcoming titles.</li>
  </ul>

  <h3>Search</h3>
  <ul>
    <li><strong>/titles/search/keyword/{keyword}</strong> – Search titles by keyword.</li>
    <li><strong>/titles/search/title/{title}</strong> – Search titles by title (partial or exact match).</li>
    <li><strong>/titles/search/akas/{aka}</strong> – Search titles by AKA (exact match only).</li>
  </ul>

  <h3>Actors</h3>
  <ul>
    <li><strong>/actors</strong> – Returns an array of actors filtered by query parameters.</li>
    <li><strong>/actors/{id}</strong> – Returns details of an actor by IMDb ID.</li>
  </ul>

  <h3>Utils</h3>
  <ul>
    <li><strong>/title/utils/titleType</strong> – Returns available title types.</li>
    <li><strong>/title/utils/genres</strong> – Returns available genres.</li>
    <li><strong>/title/utils/lists</strong> – Returns predefined lists for the <code>list</code> query parameter.</li>
  </ul>

  <h2>Request and Response Format</h2>

  <h3>Request Example</h3>
  <pre><code>GET /titles/tt1375666
Host: api.moviesdatabase.com
Authorization: Bearer YOUR_API_KEY</code></pre>

  <h3>Response Example (Title Object)</h3>
  <pre><code>{
  "id": "tt1375666",
  "titleText": "Inception",
  "primaryImage": "url_to_image",
  "titleType": "movie",
  "releaseDate": "2010-07-16",
  "genres": ["Action", "Sci-Fi", "Thriller"],
  "runtime": 148,
  "plot": "A skilled thief, the absolute best in the dangerous art of extraction...",
  "ratingsSummary": {
    "averageRating": 8.8,
    "numVotes": 2000000
  }
}</code></pre>

  <h3>Other Models</h3>
  <ul>
    <li><strong>Rating Object</strong> – <code>{ tconst, averageRating, numVotes }</code></li>
    <li><strong>Light Episode Object</strong> – <code>{ tconst, parentTconst, seasonNumber, episodeNumber }</code></li>
    <li><strong>Actor Object</strong> – <code>{ nconst, primaryName, birthYear, deathYear, primaryProfession, knownForTitles }</code></li>
  </ul>

  <h2>Authentication</h2>
  <p>All requests require an API key. Include it in the <code>Authorization</code> header as a Bearer token:</p>
  <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
  <p>Requests without a valid key return <strong>401 Unauthorized</strong>.</p>

  <h2>Error Handling</h2>
  <ul>
    <li>400 Bad Request – Invalid or missing parameters.</li>
    <li>401 Unauthorized – Missing or invalid API key.</li>
    <li>404 Not Found – Resource does not exist.</li>
    <li>429 Too Many Requests – Rate limit exceeded.</li>
  </ul>
  <p>Handle errors by checking HTTP status codes and implementing retries or fallbacks in your code.</p>

  <h2>Usage Limits and Best Practices</h2>
  <ul>
    <li>Respect API rate limits to avoid being blocked.</li>
    <li>Cache responses where possible to minimize redundant requests.</li>
    <li>Validate query parameters to prevent unnecessary errors.</li>
    <li>Keep your API key secure; do not expose it in client-side code.</li>
    <li>Review the API documentation regularly for updates.</li>
  </ul>

  <h2>Optional Query Parameters</h2>
  <ul>
    <li><code>info</code> (default: <code>mini_info</code>) – Type of information returned (e.g., base_info, mini_info, image, rating, awards, etc.)</li>
    <li><code>limit</code> – Number of objects per page (max 50, default 10)</li>
    <li><code>page</code> – Page number (default 1)</li>
    <li><code>titleType</code> – Filter by title type (from <code>/title/utils/titleType</code>)</li>
    <li><code>startYear</code> / <code>endYear</code> – Filter by release year range</li>
    <li><code>year</code> – Filter by exact release year</li>
    <li><code>genre</code> – Filter by genre (case-sensitive)</li>
    <li><code>sort</code> – Sort results (<code>year.incr</code>, <code>year.decr</code>)</li>
    <li><code>exact</code> – For title searches, set exact match (default: false)</li>
    <li><code>list</code> – Predefined title lists (e.g., most_pop_movies, top_rated_250)</li>
  </ul>
