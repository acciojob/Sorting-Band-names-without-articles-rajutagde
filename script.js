// An array of band names
const bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Aerosmith'];

// Define an array of articles to be excluded
const articles = ['a', 'an', 'the'];

// Sort the band names in lexicographic order excluding articles
bandNames.sort((a, b) => {
  // Remove articles from the band names and convert them to lowercase
  a = a.replace(/^(a|an|the)\s+/i, '').toLowerCase();
  b = b.replace(/^(a|an|the)\s+/i, '').toLowerCase();
  
  // Compare the modified band names
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

// Get the <ul> element with the id "band"
const bandList = document.getElementById('band');

// Loop through the sorted band names and add them to the <ul> element as <li> elements
for (const i = 0; i < bandNames.length; i++) {
  const listItem = document.createElement('li');
  let textNode = document.createTextNode(bandNames[i]);
  listItem.appendChild(textNode);
  bandList.appendChild(listItem);
}
