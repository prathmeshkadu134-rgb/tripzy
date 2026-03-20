// import mahaImg from '../assets/maharastra.png';
import mahaImg from '../assets/raigad.png';
import rajaImg from '../assets/rajastancamel.png'
import keralaImg from '../assets/keralatemple.png'
import gujaratImg from '../assets/gujaratdesert.png'
import meghaImg from '../assets/meghalayawaterfall.png'
import kashmirImg from '../assets/kashmirmountain.png'
import assamImg from '../assets/assamtea.png'
import punjabImg from '../assets/punjabfarms.png'


export const touristPlaces = [
  {
    id:"maharastra",
    state: "Maharashtra",
    capital: "Mumbai",
    famousFor: "Beaches, Bollywood, Caves, Forts",
    places: ["Mumbai", "Lonavala", "Ajanta-Ellora Caves", "Shirdi", "Mahabaleshwar"],
    description: "Maharashtra offers a blend of urban vibrancy and ancient heritage. Explore the buzzing city life of Mumbai, the tranquil hill stations of Lonavala and Mahabaleshwar, and the spiritual aura of Shirdi.",
    image: mahaImg,
    tourHighlights: {
      destination: "Mumbai – Lonavala – Shirdi – Mahabaleshwar – Ajanta – Ellora",
      duration: "7 Days and 6 Nights",
      bestTime: "October to March"
    }
  },
  {
    id: "rajasthan",
    state: "Rajasthan",
    capital: "Jaipur",
    famousFor: "Palaces, Forts, Desert, Culture",
    places: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur", "Pushkar"],
    description: "Rajasthan is the land of royal heritage and desert charm. Explore majestic forts, colorful bazaars, traditional music and dance, and camel rides in the Thar Desert.",
    image: rajaImg,
    tourHighlights: {
      destination: "Jaipur – Jodhpur – Udaipur – Jaisalmer – Pushkar",
      duration: "8 Days and 7 Nights",
      bestTime: "October to March"
    }
  },
  {
    id: "kerala",
    state: "Kerala",
    capital: "Thiruvananthapuram",
    famousFor: "Backwaters, Beaches, Ayurveda, Hill Stations",
    places: ["Alleppey", "Munnar", "Kochi", "Wayanad", "Kovalam"],
    description: "Known as 'God’s Own Country', Kerala is famous for its serene backwaters, lush greenery, Ayurvedic retreats, and rich traditions.",
    image: keralaImg,
    tourHighlights: {
      destination: "Kochi – Munnar – Thekkady – Alleppey – Kovalam",
      duration: "6 Days and 5 Nights",
      bestTime: "September to March"
    }
  },
  {
    id: "gujarat",
    state: "Gujarat",
    capital: "Gandhinagar",
    famousFor: "White Desert, Temples, Gir Lions",
    places: ["Rann of Kutch", "Gir National Park", "Dwarka", "Ahmedabad", "Somnath"],
    description: "Gujarat blends history with natural beauty. Witness the white desert, the roar of Asiatic lions, ancient temples, and vibrant festivals like Navratri.",
    image: gujaratImg,
    tourHighlights: {
      destination: "Ahmedabad – Gir National Park – Somnath – Dwarka – Rann of Kutch",
      duration: "7 Days and 6 Nights",
      bestTime: "November to February"
    }
  },
  {
    id: "meghalaya",
    state: "Meghalaya",
    capital: "Shillong",
    famousFor: "Waterfalls, Caves, Living Root Bridges",
    places: ["Cherrapunji", "Mawsynram", "Shillong", "Dawki", "Nongriat"],
    description: "Meghalaya, the 'abode of clouds', is a paradise of lush green hills, cascading waterfalls, and awe-inspiring natural root bridges.",
    image: meghaImg,
     tourHighlights: {
      destination: "Guwahati – Shillong – Cherrapunji – Dawki – Mawlynnong – Nongriat",
      duration: "10 Days and 9 Nights",
      bestTime: "October to April"
    }
  },
  {
    id: "kashmir",
    state: "Kashmir",
    capital: "Srinagar",
    famousFor: "Snow-capped mountains, Houseboats, Gardens",
    places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg", "Leh (Ladakh)"],
    description: "Kashmir is often called 'Heaven on Earth'. From shikara rides in Dal Lake to skiing in Gulmarg, it's a dream destination for nature lovers.",
    image: kashmirImg,
    tourHighlights: {
      destination: "Srinagar – Gulmarg – Pahalgam – Sonmarg – Leh",
      duration: "8 Days and 7 Nights",
      bestTime: "April to October"
    }
  },
  {
    id: "assam",
    state: "Assam",
    capital: "Dispur",
    famousFor: "Tea Gardens, National Parks, River Brahmaputra",
    places: ["Kaziranga National Park", "Majuli Island", "Guwahati", "Sivasagar", "Tezpur"],
    description: "Assam is a treasure of biodiversity and culture. Famous for its tea plantations and one-horned rhinos, it also boasts spiritual sites and scenic beauty.",
    image: assamImg,
     tourHighlights: {
      destination: "Guwahati – Kaziranga – Majuli – Sivasagar – Tezpur",
      duration: "7 Days and 6 Nights",
      bestTime: "November to April"
    }
  },
  {
    id: "punjab",
    state: "Punjab",
    capital: "Chandigarh",
    famousFor: "Golden Temple, Bhangra, Food",
    places: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Anandpur Sahib"],
    description: "Punjab is known for its vibrant culture, spirituality, and hospitality. The Golden Temple, delicious food, and colorful festivals draw visitors from across the world.",
    image: punjabImg,
    tourHighlights: {
      destination: "Amritsar – Jalandhar – Ludhiana – Patiala – Anandpur Sahib",
      duration: "5 Days and 4 Nights",
      bestTime: "October to March"
    }
  }
];