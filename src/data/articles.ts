export type Article = {
  city: string;
  image: string;
  title: string;
  date: string;
  readingTime: number;
  summary: string;
  info: string;
};

const data: Article[] = [
  {
    city: "New York",
    image:
      "https://images.unsplash.com/photo-1548182880-8b7b2af2caa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3eW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    title: "The History of Pizza in New York City",
    date: "2020-07-23",
    readingTime: 10,
    summary:
      "Pizza has been a beloved food in New York City for decades. This article delves into the history of how pizza became so popular in the city.",
    info: "New York City is one of the most popular tourist destinations in the world, and for good reason. The city is home to some of the most iconic landmarks in the world, including the Statue of Liberty, the Empire State Building, and Central Park. Visitors can also explore world-class museums like the Metropolitan Museum of Art and the Museum of Modern Art, or take in a show on Broadway. In addition, New York is known for its diverse food scene and visitors can find anything from Pizza to the most delicious Chinese and Italian cuisine.",
  },
  {
    city: "Paris",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "Exploring the Best Pastry Shops in Paris",
    date: "2021-03-14",
    readingTime: 15,
    summary:
      "Paris is known for its delicious pastries. This article rounds up some of the best pastry shops in the city, including popular spots like Ladurée and Pierre Hermé.",
    info: "Paris is known for its romantic atmosphere, charming streets, and world-renowned museums. Visitors can stroll along the Champs-Élysées, climb to the top of the Eiffel Tower, or admire the works of master artists at the Louvre. Paris is also famous for its fashion, and many visitors make a point to visit the famous designer boutiques on the Avenue des Champs-Élysées. Additionally, the city is renowned for its patisseries and chocolatiers, and a walk around the city can become an indulgence in taste sensation.",
  },
  {
    city: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "A Guide to Tokyo's Best Ramen Restaurants",
    date: "2022-01-01",
    readingTime: 20,
    summary:
      "Ramen is a popular dish in Tokyo and there are many great restaurants to try it at. This article recommends some of the best places to get ramen in the city.",
    info: "Tokyo is a city of contrasts, where ancient temples stand alongside futuristic skyscrapers. Visitors can explore the vibrant neighborhoods of Shinjuku and Shibuya, visit the famous Tsukiji Fish Market, and admire the views from the observation deck of the Tokyo Tower. Tokyo is also known for its delicious food, from sushi to ramen, and visitors can find street food stands as well as some of the best Michelin-starred restaurants. Additionally, there are many shopping areas in Tokyo, from luxury department stores to trendy boutiques, and visitors can find traditional Japanese goods such as kimonos, pottery and calligraphy brushes.",
  },
  {
    city: "London",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "The Best Afternoon Tea Spots in London",
    date: "2022-06-15",
    readingTime: 15,
    summary:
      "Afternoon tea is a beloved tradition in London. This article recommends some of the best spots in the city to enjoy this classic experience.",
    info: "London is one of the most cosmopolitan cities in the world, and visitors can find a diverse range of things to see and do. Some of the must-see sights in London include Buckingham Palace, the London Eye, and the British Museum. Visitors can also explore the historic neighborhoods of London like Notting Hill and Mayfair. London is also a shopper’s paradise, with luxury department stores, designer boutiques and street markets. Additionally, London is famous for its afternoon tea tradition and visitors can find traditional afternoon tea experiences as well as new twist in some of London’s top restaurants and hotels.",
  },
  {
    city: "Sydney",
    image:
      "https://images.unsplash.com/photo-1549180030-48bf079fb38a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3lkbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "The Best Beaches in Sydney",
    date: "2021-09-01",
    readingTime: 10,
    summary:
      "Sydney is home to some of the most beautiful beaches in the world. This article recommends the best beaches to visit in the city, including Bondi Beach and Manly Beach.",
    info: "Sydney is a city famous for its beautiful beaches and iconic landmarks. Some of the must-see sights in Sydney include the Sydney Opera House and the Sydney Harbour Bridge. Visitors can also take a ferry to the nearby Taronga Zoo and admire the views from the top of Sydney Tower. The city also offers a diverse range of outdoor activities, from swimming and surfing at Bondi Beach to hiking in the nearby Blue Mountains. In addition to its natural beauty, Sydney is also a vibrant cultural hub, with a thriving arts scene and a diverse food scene featuring everything from seafood to Modern Australian Cuisine.",
  },
  {
    city: "Rome",
    image:
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    title: "A Foodie's Guide to Rome",
    date: "2020-12-01",
    readingTime: 20,
    summary:
      "Rome is a food lover's paradise. This article recommends some of the best restaurants and dishes to try when visiting the city.",
    info: "Rome is the city of ancient history and art, and is home to some of the most famous landmarks in the world. Visitors can explore the Colosseum, the Pantheon, and the Vatican City, home of the Sistine Chapel and the Vatican Museums. Additionally, visitors can also explore the charming neighborhoods of Rome like Trastevere and Monti, where they can find quaint streets and traditional trattorias. Rome is also known for its gelato, pizza and pasta and visitors can indulge in some of the best food.",
  },
  {
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "Exploring the Street Food Scene in Mumbai",
    date: "2022-02-14",
    readingTime: 15,
    summary:
      "Mumbai is known for its vibrant street food scene. This article recommends some of the best places to try street food in the city, including popular dishes like chaat and vada pav.",
    info: "Mumbai, also known as Bombay, is the financial and entertainment capital of India. Visitors can explore the famous Gateway of India, a historic monument that sits on the waterfront in the Apollo Bunder area. Another popular destination is the Elephanta Caves, an UNESCO World Heritage Site located on an island in Mumbai Harbour, that features ancient rock cut temples. Visitors can also experience the vibrant street life and shopping scene of Mumbai, and sample some of the delicious street food, from pav bhaji to bhel puri, and also famous local snack 'vada pav'. Additionally, Mumbai is home to Bollywood, the Indian film industry and visitors can take a tour of the famous Film City where many movies are produced.",
  },
];

export default data;
