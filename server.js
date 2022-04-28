const express = require('express');

const PORT = process.env.PORT || 3001;

//start express.js by assigning express() to app
const app = express();
const { animal } = require('./data/animals.json');

app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});


//chain listen method onto server
app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});

function filterByQuery(query, animalsArray) {
    let personalityTraitsArray = [];

    //Note that we save the animalsArray as filtered Results here:
    let filteredResults = animalsArray;
    if (query.personalityTraits) {
        //Save personalityTraits as a dedicated array
        // If personalityTraits is a string, place it into a new array and save.
    }
    if (typeof query.personalityTraits === 'string') {
        personalityTraitsArray = [query.personalityTraits];
    } else {
        personalityTraitsArray = query.personalityTraits;
    }
    //Loop through eah trait in the personalityTraits array:
    personalityTraitsArray.forEach(trait => {
         // Check the trait against each animal in the filteredResults array.
         // Remember, it is initially a copy of the animalsArray,
         // but here we're updating it for each trait in the .forEach() loop.
         // For each trait being targeted by the filter, the filteredResults
         // array will then contain only the entries that contain the trait,
        // so at the end we'll have an array of animals that have every one 
        // of the traits when the .forEach() loop is finished.
        filteredResults = filteredResults.filter(
        animal => animal.personalityTraits.indexOf(trait) !== -1
      );
    });
    }

    if (query.diet) {
        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
        filteredResults = filteredResults.filer(animal => animal.name === query.name);
    }
    return filteredResults;
}