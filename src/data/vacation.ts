export type Vacation = {
  city: string;
  title: string;
  intro: string;
  culture: string;
  architecture: string;
  sightSee: string;
  food: string;
  image: string;
};

const vacations: Vacation[] = [
  {
    city: "Tokyo",
    title: "Experience the Future in Tokyo",
    intro:
      "Tokyo is a bustling, futuristic city that combines the old with the new.",
    culture:
      "Tokyo is home to a unique and fascinating culture that has been shaped by its history as the former capital of Japan. The city is known for its ancient temples and shrines, as well as its modern technology and pop culture. Tokyo is also a hub for traditional Japanese arts, such as sumo wrestling, kabuki theater, and tea ceremonies. Additionally, the city is home to many festivals and events that celebrate its rich culture, such as the Cherry Blossom Festival and the Tokyo International Film Festival.",
    architecture:
      "The architecture in Tokyo is a blend of old and new. The city is home to many ancient temples and shrines, such as the Meiji Shrine and the Senso-ji Temple, which are surrounded by modern skyscrapers and bustling streets. Tokyo is also home to the Tokyo Metropolitan Government Building, which features a unique double tower design, and the Tokyo Skytree, which is the tallest tower in Japan. The city is constantly evolving, with new buildings and structures being built all the time.",
    sightSee:
      "There are many things to see and do in Tokyo. Some popular tourist attractions include the Tokyo Tower, the Tokyo Disney Resort, and the Tokyo Metropolitan Government Building. The city is also home to many museums, such as the Tokyo National Museum and the National Museum of Emerging Science and Innovation. Additionally, visitors can take a walk through the bustling streets of Tokyo and visit one of the many shopping districts, such as Ginza or Shibuya. ",
    food: "Tokyo is known for its delicious and diverse food scene. Some popular Japanese dishes to try in Tokyo include sushi, ramen, and tempura. The city is also home to many Michelin-starred restaurants, such as Sukiyabashi Jiro and Kanda. In addition to Japanese cuisine, Tokyo has a wide variety of international restaurants, such as Italian, French, and Chinese. The city is also home to many food markets and street food vendors, where visitors can try a variety of local specialties.",
    image:
      "https://images.unsplash.com/photo-1585987983427-dfcfe63307d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHRva3lvfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
  },
  {
    city: "Paris",
    title: "Fall in Love with Paris",
    intro:
      "Paris is a romantic and elegant city that is known for its art, fashion, and cuisine.",
    culture:
      "Paris has a rich and vibrant culture that has been shaped by its history as the capital of France. The city is known for its art, literature, and music, and is home to many famous museums and galleries, such as the Louvre and the Musée d'Orsay. Paris is also a hub for fashion, with many famous designers and boutiques located in the city. Additionally, the city is home to many festivals and events, such as the Paris Marathon and the Fête de la Musique.",
    architecture:
      "Paris is home to many iconic architectural landmarks, such as the Eiffel Tower, the Notre Dame Cathedral, and the Arc de Triomphe. The city is also known for its beautiful Haussmannian buildings, which are characterized by their ornate facades and uniform appearance. Paris is also home to many modern buildings and structures, such as the Centre Pompidou and the Louvre Pyramid. The city's architecture is a blend of old and new, and has influenced the design of cities around the world.",
    sightSee:
      "There are many things to see and do in Paris. Some popular tourist attractions include the Eiffel Tower, the Louvre Museum, and the Notre Dame Cathedral. Visitors can also take a stroll through the beautiful gardens of the Palace of Versailles or visit the Montmartre neighborhood, which is known for its bohemian atmosphere and stunning views of the city. Additionally, visitors can experience the city's vibrant nightlife by visiting one of the many bars or clubs in Paris.",

    food: "Paris is known for its culinary delights, and is home to many world-renowned restaurants and chefs. Some popular French dishes to try in Paris include croissants, escargot, and coq au vin. The city is also home to many markets, such as the Marché aux Enfants Rouges and the Marché d'Aligre, where visitors can try a variety of local specialties. Additionally, Paris is home to many wine bars and cafes, where visitors can enjoy a glass of wine or a cup of coffee while taking in the city's beautiful architecture and atmosphere.",
    image:
      "https://images.unsplash.com/photo-1584266337361-679ae80c8519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFyaXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
  },

  {
    city: "London",
    title: "Discover the Charm of London",
    intro:
      "London is a historic and cosmopolitan city that is known for its culture, art, and royalty.",
    culture:
      "London is home to a rich and diverse culture that has been shaped by its history as the capital of England. The city is known for its art, literature, and music, and is home to many famous museums and galleries, such as the British Museum and the Tate Modern. London is also a hub for theater, with many famous West End productions and plays being performed in the city. Additionally, the city is home to many festivals and events, such as the Notting Hill Carnival and the London Marathon.",

    architecture:
      "The architecture in London is diverse and reflects the city's long history. The city is home to many iconic landmarks, such as the Tower of London, Buckingham Palace, and the London Eye. London is also known for its beautiful parks, such as Hyde Park and Regent's Park, and its historic neighborhoods, such as Notting Hill and Mayfair. The city is constantly evolving, with new buildings and structures being built all the time.",

    sightSee:
      "There are many things to see and do in London. Some popular tourist attractions include the Tower of London, Buckingham Palace, and the London Eye. Visitors can also take a stroll through the historic neighborhoods of London, such as Notting Hill and Mayfair, or visit one of the many markets and shops in the city. Additionally, visitors can experience London's vibrant nightlife by visiting one of the many bars or clubs in the city.",

    food: "London is known for its diverse and delicious food scene. The city is home to many Michelin-starred restaurants, such as The Fat Duck and The Ritz, as well as a wide variety of international cuisines. Some popular dishes to try in London include fish and chips, bangers and mash, and roast beef. The city is also home to many markets, such as Borough Market and Brick Lane Market, where visitors can try a variety of local specialties. Additionally, London is home to many pubs and cafes, where visitors can enjoy a pint of beer or a cup of tea while taking in the city's charming atmosphere.",
    image:
      "https://images.unsplash.com/photo-1605514449609-055803285148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxvbmRvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60",
  },
];
export default vacations;
