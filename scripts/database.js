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
            image: "",
            species: "Pirahna",
            name: "Bart",
            food: "crustaceans",
            length: 3,
            location: "Louisiana"

        },
        {
            image: "",
            species:"Blenny",
            name:"Frank",
            food:"Algae",
            length: 4 ,
            location: "Key Largo"

        },
        {
            image:"",
            species:"Clownfish",
            name:"Nemo",
            food:"small plants",
            length: 2 ,
            location: "Panama"

        },
        {
            image: "",
            species:"Goby",
            name:"Goober",
            food:"Plants",
            length: 1 ,
            location: "Mexico"

        },
        {
            image:"",
            species:"Angelfish",
            name:"Darla",
            food:"Plants and Smaller fish",
            length: 4 ,
            location: "Cuba"

        }
    ]
}