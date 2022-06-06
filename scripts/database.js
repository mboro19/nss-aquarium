export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */




const database = {
    fish: [
        {
            species: "Pirahna",
            name: "Bart",
            food: "crustaceans",
            length: 3,
            locationHarvested: "Louisiana"

        },
        {
            species:"Blenny",
            name:"Frank",
            food:"Algae",
            length: 4 ,
            locationHarvested: "Key Largo"

        },
        {

            species:"Clownfish",
            name:"Nemo",
            food:"small plants",
            length: 2 ,
            locationHarvested: "Panama"

        },
        {

            species:"Goby",
            name:"Goober",
            food:"Plants",
            length: 1 ,
            locationHarvested: "Mexico"

        },
        {

            species:"Angelfish",
            name:"Darla",
            food:"Plants and Smaller fish",
            length: 4 ,
            locationHarvested: "Cuba"

        }
    ]
}