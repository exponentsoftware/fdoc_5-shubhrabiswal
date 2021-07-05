const fetch = require("node-fetch");
let api = `https://restcountries.eu/rest/v2/all`;

// How many languages are there in the countries API
async function countLanguages() {

    await fetch(api)
        .then((res) => res.json())

        .then((res2) => {
            let obj = res2;
            let lang = []
            for (let country of obj) {
                for (let language of country.languages) {
                    if (lang.includes(language.name) == false) {
                        lang.push(language.name)
                    }
                }
            }
            console.log(lang.length)
        })
}
countLanguages();

// Find the 15 most spoken languages

async function mostSpoken_15Lang() {

    await fetch(api)
        .then((res) => res.json())

        .then((res2) => {
            let obj = res2;
            let arr = [];
            for (let i of obj) {
                for (let language of i.languages) {
                    if (arr.includes(language.name) == false) {
                        arr.push(language.name)
                    }
                }

            }

            // console.log( arr)///all languages
            let arr2 = []
            for (let l of arr) {
                let newObj = {}
                newObj['language'] = l;

                let counter = 0
                for (let i of obj) {
                    for (let language of i.languages) {
                        if (l == language.name) {
                            counter++;
                        }
                    }
                }
                newObj['countries'] = counter
                arr2.push(newObj)
            }
            let sorted_array = arr2.sort(function (x, y) {
                return y.countries - x.countries;
            });
            //top 15 array
            let top_15_countries = []
            // let rev = sorted_array.reverse()
            for (let i = 0; i < 15; i++) {
                top_15_countries.push(sorted_array[i]);
            }
            console.log(top_15_countries)

        })
}
mostSpoken_15Lang()

//Find the 10 most largest countries


async function Largest_10_countries() {

    await fetch(api)
        .then((res) => res.json())

        .then((res2) => {
            let obj = res2;
            let arr = [];

            for (let i of obj) {
                let newObj = {}
                newObj['country'] = i.name;
                newObj['area'] = i.area;
                arr.push(newObj)
            }

            let sorted_array = arr.sort(function (x, y) {
                return y.area - x.area;
            });
            
            let top_10 = []
            // let rev = sorted_array.reverse()
            for (let i = 0; i < 10; i++) {
                top_10.push(sorted_array[i]);
            }
            console.log(top_10)

        })
}
Largest_10_countries()
