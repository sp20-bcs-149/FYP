// export const categories = [
//     {
//         id: 1,
//         name: 'Vaccine',
//         image:  require('../assets/Images/HepatitisB.png'),
//     },
//     {
//         id: 2,
//         name: 'Vaccine',
//         image:  require('../assets/Images/HepatitisB.png'),
//     },
//     {
//         id: 3,
//         name: 'Vaccine',
//         image:  require('../assets/Images/HepatitisB.png'),
//     },
//     {
//         id: 4,
//         name: 'Vaccine',
//         image:  require('../assets/Images/HepatitisB.png'),
//     },
//     {
//         id: 5,
//         name: 'Vaccine',
//         image:  require('../assets/Images/HepatitisB.png'),
//     },
//     {
//         id: 7,
//         name: 'Vaccine',
//         image:  require('../assets/Images/HepatitisB.png'),
//     },

// ]


export const featured = {
    id: 1,
    title: 'Vaccines',
    description: 'All categories with required vaccines',
    categories: [
        {
            id: 1,
            name: 'Vaccines for Children',
            image:  require('../../../../assets/Images/Child(0-17).png'),
            description: 'Hot and spicy pizza',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Vaccine',
            dishes: [
                {
                   id: 1,
                   name: 'Hepatitis B',
                   description: 'Use for Hepatitis B and very affective against these germs of hepatitis',
                   price: 10,
                   image:  require('../../../../assets/Images/HepatitisB.png')
                },
                {
                   id: 2,
                   name: 'Hepatitis A',
                   description: 'Use for Hepatitis A and very affective against the germs of Hepatitis A',
                   price: 10,
                   image:  require('../../../../assets/Images/hepatitisa.png')
                },
                {
                   id: 3,
                   name: 'Polio',
                   description: 'Use Orally to protect a child from the polio disability',
                   price: 10,
                   image:  require('../../../../assets/Images/HepatitisB.png')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Vaccines for Old Age',
            image:  require('../../../../assets/Images/old.png'),
            description: 'All vaccines that are recommended for Adults',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Vaccine',
            dishes: [
                {
                   id: 1,
                   name: 'Flu Vaccine',
                   description: 'Affective for the Seasonal Flu and protect the body against the Flu',
                   price: 10,
                   image:  require('../../../../assets/Images/influenza.png')
                },
                {
                   id: 2,
                   name: 'Hib Vaccine',
                   description: 'Affective against the Hib virus and provide full immunization against this virus',
                   price: 10,
                   image:  require('../../../../assets/Images/hib.jpg')
                },
                {
                   id: 3,
                   name: 'MMR Vaccine',
                   description: 'Affective against the MMR virus and provide full immunization against this virus',
                   price: 10,
                   image:  require('../../../../assets/Images/MMR.jpeg')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Vaccines for Youngs',
            image:  require('../../../../assets/Images/youngVac.jpg'),
            description: 'All vaccines recommended for Youngs are given in this category',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Vaccine',
            dishes: [
                {
                   id: 1,
                   name: 'Hepatitis B',
                   description: 'Vaccine of Hepatitis B',
                   price: 10,
                   image:  require('../../../../assets/Images/HepatitisB.png')
                },
                {
                   id: 2,
                   name: 'Hepatitis A',
                   description: 'Vaccine of Hepatitis A',
                   price: 10,
                   image:  require('../../../../assets/Images/HepatitisB.png')
                },
                {
                   id: 3,
                   name: 'HIB',
                   description: 'Vaccine of HIB',
                   price: 10,
                   image:  require('../../../../assets/Images/HepatitisB.png')
                },
            ]
    
        }
    ]
}