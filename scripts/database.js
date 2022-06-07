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
            image: "https://www.aquariumnexus.com/wp-content/uploads/2021/05/piranha-tank-size.jpg",
            species: "Species: Pirahna",
            name: "Name: Bart",
            food: "Eats: Crustaceans",
            length: "Length: 3 inches",
            location: "Havested in Louisiana"

        },
        {
            image: "https://cdn.reefs.com/blog/wp-content/uploads/2017/02/red-spot-blenny.jpg",
            species:"Species: Blenny",
            name:"Name: Frank",
            food:"Eats: Algae",
            length: `Length: 4 inches`,
            location: "Harvested in Key Largo"

        },
        {
            image:"https://www.fishkeepingworld.com/wp-content/uploads/2019/08/The-Definitive-Clownfish-Care-Guide-Is-Nemo-The-Fish-For-You-Cover.jpg",
            species:"Species: Clownfish",
            name:"Name: Nemo",
            food:"Eats: Plants",
            length: `Length: 2 inches`,
            location: "Harvested in Panama"

        },
        {
            image: "https://cdn.reefs.com/blog/wp-content/uploads/2011/01/IMG_2264-89e51ebbcdd48e2f690e3720df11bbf2.jpg",
            species:"Species: Goby",
            name:"Name: Goober",
            food:"Eats: Invertebrates",
            length: `Length: 1 inches` ,
            location: "Harvested in Mexico"

        },
        {
            image: "https://www.tfhmagazine.com/-/media/Images/TFH2-NA/US/articles/108_amazing_angelfish.jpg",
            species:"Species: Angelfish",
            name:"Name: Darla",
            food:"Eats: Plants",
            length: `Length: 4 inches`,
            location: "Harvested in Cuba"

        }
    ]
}