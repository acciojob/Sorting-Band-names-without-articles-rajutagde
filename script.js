//your code here
function sortBands(bands) {
  // Define an array of articles to exclude from the sorting
  const articles = ['a', 'an', 'the'];

  // Define a function to strip the articles from a band name
  function stripArticles(name) {
    // Split the name into words
    let words = name.split(' ');

    // Remove any articles from the beginning of the name
    while (articles.includes(words[0].toLowerCase())) {
      words.shift();
    }

    // Join the remaining words back together and return the result
    return words.join(' ');
  }

  // Sort the bands array using the stripArticles function for comparison
  let sortedBands = bands.sort((a, b) => stripArticles(a) > stripArticles(b) ? 1 : -1);

  // Get the UL element with id 'band' from the DOM
  let bandList = document.getElementById('band');

  // Loop over the sorted bands array and create an LI element for each one
  sortedBands.forEach((band) => {
    let li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
  });
}

// Example usage:
let bands = ['The Beatles', 'Aerosmith', 'Rolling Stones', 'The Who', 'The Eagles'];
sortBands(bands);


