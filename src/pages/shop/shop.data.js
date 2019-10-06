const SHOP_DATA = [
    {
        id: 1,
        title: 'Biographies & Auto-Biographies',
        routeName: 'bios',
        items: [
            {
                id: 1,
                name:
                    'The Autobiography of Benjamin Franklin by Benjamin Franklin',
                imageUrl:
                    'https://cdn.lifehack.org/wp-content/uploads/2015/04/franklin.jpg',
                price: 2500.45
            },
            {
                id: 2,
                name: 'Long Walk to Freedom by Nelson Mandela',
                imageUrl:
                    'https://cdn.lifehack.org/wp-content/uploads/2015/04/mandela1.jpeg',
                price: 1870
            },
            {
                id: 3,
                name:
                    'The Story of My Experiments with Truth by Mahatma Gandhi',
                imageUrl:
                    'https://cdn.lifehack.org/wp-content/uploads/2015/04/gandhi.jpeg',
                price: 3505
            },
            {
                id: 4,
                name: 'The Diary of a Young Girl by Anne Frank',
                imageUrl:
                    'https://cdn.lifehack.org/wp-content/uploads/2015/04/annefrank.jpg',
                price: 2510
            },
            {
                id: 5,
                name: 'Chronicles, Vol 1 by Bob Dylan',
                imageUrl:
                    'https://cdn.lifehack.org/wp-content/uploads/2015/04/dylan.jpeg',
                price: 1821
            },
            {
                id: 6,
                name: 'I Know Why the Caged Bird Sings by Maya Angelou',
                imageUrl:
                    'https://cdn.lifehack.org/wp-content/uploads/2015/04/maya.jpeg',
                price: 1432
            },
            {
                id: 7,
                name: 'The Autobiography of Malcolm X by Malcolm X',
                imageUrl:
                    'https://cdn.lifehack.org/wp-content/uploads/2015/04/malcolm.jpeg',
                price: 1843
            },
            {
                id: 8,
                name: 'Agatha Christie: An Autobiography by Agatha Christie',
                imageUrl:
                    'https://cdn.lifehack.org/wp-content/uploads/2015/04/agatha.jpeg',
                price: 1454
            },
            {
                id: 9,
                name: 'Open: An Autobiography by Andre Agassi',
                imageUrl:
                    'https://cdn.lifehack.org/wp-content/uploads/2015/04/agassi.jpeg',
                price: 1676
            }
        ]
    },
    {
        id: 2,
        title: 'Kids',
        routeName: 'kids',
        items: [
            {
                id: 1,
                name: '1 is One',
                imageUrl:
                    'https://fordhaminstitute.org/sites/default/files/body_images/1-is-One.jpg',
                price: 2200
            },
            {
                id: 2,
                name:
                    'Alexander and the Terrible, Horrible, No Good, Very Bad Day',
                imageUrl:
                    'https://edex.s3-us-west-2.amazonaws.com/alexandernogood.jpg',
                price: 2809
            },
            {
                id: 3,
                name: 'Anansi the Spider',
                imageUrl: 'https://edex.s3-us-west-2.amazonaws.com/anansi.gif',
                price: 1108
            },
            {
                id: 4,
                name: 'Amazing Grace',
                imageUrl:
                    'https://edex.s3-us-west-2.amazonaws.com/amazinggrace.jpeg',
                price: 1601
            },
            {
                id: 5,
                name: 'Are You My Mother?',
                imageUrl:
                    'https://edex.s3-us-west-2.amazonaws.com/AreYouMyMother.jpg',
                price: 1602
            },
            {
                id: 6,
                name: 'Bear Called Paddington, A',
                imageUrl:
                    'https://24.media.tumblr.com/tumblr_lb9wh5wR0i1qabm59o1_500.jpg',
                price: 1603
            },
            {
                id: 7,
                name: 'Bear Snores On',
                imageUrl:
                    'https://edex.s3-us-west-2.amazonaws.com/bear-snores-on_256_3.jpg',
                price: 1904
            },
            {
                id: 8,
                name: 'Beauty and the Beast',
                imageUrl:
                    'https://upload.wikimedia.org/wikipedia/commons/c/cd/Anne_Anderson05.jpg',
                price: 2004
            }
        ]
    },
    {
        id: 3,
        title: 'Thriller',
        routeName: 'thriller',
        items: [
            {
                id: 1,
                name: 'Gone Girl by Gillian Flynn',
                imageUrl:
                    'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1555351660-416TH3igfOL.jpg',
                price: 1255
            },
            {
                id: 2,
                name: 'The Girl on the Train by Paula Hawkins',
                imageUrl:
                    'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1555351651-51Dn7fYoHbL.jpg',
                price: 9099
            },
            {
                id: 3,
                name: 'Stillhouse Lake by Rachel Caine',
                imageUrl:
                    'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1555349382-41RTt7alEqL.jpg',
                price: 9000
            },
            {
                id: 4,
                name:
                    'The Wife Between Us by Greer Hendricks and Sarah Pekkanen',
                imageUrl:
                    'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1555349450-41ckuoGw6hL.jpg',
                price: 1650
            },
            {
                id: 5,
                name: 'The Silence of the Lambs by Thomas Harris',
                imageUrl:
                    'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1555351629-51v3js60oVL.jpg',
                price: 1850
            }
        ]
    },
    {
        id: 4,
        title: 'Fiction',
        routeName: 'fiction',
        items: [
            {
                id: 1,
                name: 'Fox 8',
                imageUrl:
                    'https://images3.penguinrandomhouse.com/cover/9781984818027',
                price: 2550
            },
            {
                id: 2,
                name: 'My Sister, the Serial Killer',
                imageUrl:
                    'https://images4.penguinrandomhouse.com/cover/9780525564201',
                price: 2045
            },
            {
                id: 3,
                name: 'McGlue',
                imageUrl:
                    'https://images3.penguinrandomhouse.com/cover/9780525522768',
                price: 8021
            },
            {
                id: 4,
                name: 'OK, Mr. Field',
                imageUrl:
                    'https://images4.penguinrandomhouse.com/cover/9780525573630',
                price: 8033
            },
            {
                id: 5,
                name: 'The Friend',
                imageUrl:
                    'https://images2.penguinrandomhouse.com/cover/9780735219458',
                price: 4544
            },
            {
                id: 6,
                name: 'Wingspan',
                imageUrl:
                    'https://images2.penguinrandomhouse.com/cover/9781984898975',
                price: 1356
            },
            {
                id: 7,
                name: 'My Name Is Lucy Barton',
                imageUrl:
                    'https://images2.penguinrandomhouse.com/cover/9780812979527',
                price: 2000
            }
        ]
    },
    {
        id: 5,
        title: 'Non Fiction',
        routeName: 'nonfiction',
        items: [
            {
                id: 1,
                name: 'When Breath Becomes Air',
                imageUrl:
                    'https://jamesclear.com/wp-content/uploads/2016/10/WHEN-BREATH-BECOMES-AIR-by-PAUL-KALANITHI-474x700.jpg',
                price: 3251
            },
            {
                id: 2,
                name: 'Sapiens: A Brief History of Humankind',
                imageUrl:
                    'https://jamesclear.com/wp-content/uploads/2016/06/sapiens-by-yuval-noah-harari-469x700.jpg',
                price: 2022
            },
            {
                id: 3,
                name:
                    'Into Thin Air: A Personal Account of the Mt. Everest Disaster',
                imageUrl:
                    'https://jamesclear.com/wp-content/uploads/2015/02/Into-Thin-Air-by-Jon-Krakauer-455x700.jpg',
                price: 2590
            },
            {
                id: 4,
                name: 'Surely You’re Joking, Mr. Feynman!',
                imageUrl:
                    'https://jamesclear.com/wp-content/uploads/2015/02/Surely-Youre-Joking-Mr-Feynman-by-Richard-Feynman-496x700.jpeg',
                price: 2520
            },
            {
                id: 5,
                name: 'Guns, Germs, and Steel: The Fates of Human Societies',
                imageUrl:
                    'https://jamesclear.com/wp-content/uploads/2016/08/GunsGermsAndSteel-by-JaredDiamond-459x700.jpg',
                price: 4030
            },
            {
                id: 6,
                name: 'Manual for Living',
                imageUrl:
                    'https://jamesclear.com/wp-content/uploads/2015/09/ManualForLiving-by-Epictetus-596x700.jpg',
                price: 2576
            }
        ]
    }
];

export default SHOP_DATA;
