import { v4 as uuidv4 } from "uuid";

const dishes = [
  // MAIN COURSE (5 items)
  {
    name: "Biriyani",
    category: "MAIN COURSE",
    type: "NON-VEG",
    description:
      "Biriyani is a fragrant rice dish made with basmati rice and aromatic spices. Tender chicken pieces are slow-cooked to absorb the rich flavors. Each bite is a perfect blend of spice, aroma, and texture.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 15,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Basmati Rice", "Chicken", "Onions", "Tomatoes", "Spices", "Yogurt", "Mint"]
  },
  {
    name: "Paneer Butter Masala",
    category: "MAIN COURSE",
    type: "VEG",
    description:
      "Paneer Butter Masala is a creamy curry made with fresh paneer cubes. The tomato-based gravy is cooked with butter and mild spices. It is rich, smooth, and pairs perfectly with naan or rice.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 18,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Paneer", "Tomatoes", "Butter", "Cream", "Spices"]
  },
  {
    name: "Dal Tadka",
    category: "MAIN COURSE",
    type: "VEG",
    description:
      "Dal Tadka is a comforting dish of yellow lentils simmered until soft. A tempering of ghee, garlic, and spices is poured over the cooked dal. It is wholesome, flavorful, and best enjoyed with rice or roti.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 12,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Yellow Lentils", "Garlic", "Onions", "Tomatoes", "Ghee", "Spices"]
  },
  {
    name: "Chicken Curry",
    category: "MAIN COURSE",
    type: "NON-VEG",
    description:
      "Chicken Curry is a classic Indian dish cooked with onions, tomatoes, and spices. The chicken pieces are slow-cooked until tender and juicy. This flavorful curry is a staple in many Indian households.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 20,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Chicken", "Onions", "Tomatoes", "Garlic", "Ginger", "Spices"]
  },
  {
    name: "Veg Pulao",
    category: "MAIN COURSE",
    type: "VEG",
    description:
      "Veg Pulao is a fragrant rice dish with seasonal vegetables. It is mildly spiced and cooked with whole spices for extra aroma. Light yet filling, it makes a great main course or side dish.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 14,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Basmati Rice", "Mixed Vegetables", "Whole Spices", "Onions", "Oil"]
  },

  // STARTER (5 items)
  {
    name: "Paneer Tikka",
    category: "STARTER",
    type: "VEG",
    description:
      "Paneer Tikka is a popular starter made with marinated paneer cubes. The paneer is grilled with onions and capsicum for a smoky flavor. It is served hot with mint chutney.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 10,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Paneer", "Capsicum", "Onions", "Yogurt", "Spices"]
  },
  {
    name: "Spring Rolls",
    category: "STARTER",
    type: "VEG",
    description:
      "Spring Rolls are crispy fried rolls stuffed with spiced vegetables. The outer shell is golden and crunchy. They are perfect as a quick snack or appetizer.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 8,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Spring Roll Sheets", "Cabbage", "Carrots", "Capsicum", "Soy Sauce"]
  },
  {
    name: "Chicken Wings",
    category: "STARTER",
    type: "NON-VEG",
    description:
      "Chicken Wings are juicy pieces coated in a spicy sauce. They are fried until crispy on the outside and tender inside. A favorite starter for any gathering, they are best served hot.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 12,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Chicken Wings", "Hot Sauce", "Garlic", "Oil", "Spices"]
  },
  {
    name: "Hara Bhara Kabab",
    category: "STARTER",
    type: "VEG",
    description:
      "Hara Bhara Kabab is made with spinach, peas, and potatoes. These patties are shallow fried until crisp and golden. They are healthy, tasty, and served with chutney.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 9,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Spinach", "Green Peas", "Potatoes", "Spices", "Bread Crumbs"]
  },
  {
    name: "Soup of the Day",
    category: "STARTER",
    type: "VEG",
    description:
      "Soup of the Day is freshly prepared with seasonal vegetables. It is light, nourishing, and flavored with herbs. A warm bowl makes a perfect start to the meal.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 7,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Seasonal Vegetables", "Garlic", "Onions", "Herbs", "Spices"]
  },

  // SIDES (5 items)
  {
    name: "Butter Naan",
    category: "SIDES",
    type: "VEG",
    description:
      "Butter Naan is a soft, leavened bread baked in a clay oven. It is brushed with butter for extra richness. This bread pairs well with almost any curry.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 4,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Flour", "Yeast", "Yogurt", "Butter", "Salt"]
  },
  {
    name: "Tandoori Roti",
    category: "SIDES",
    type: "VEG",
    description:
      "Tandoori Roti is made from whole wheat flour and cooked in a tandoor. It has a smoky flavor and chewy texture. A wholesome choice to go with dal or curries.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 3,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Whole Wheat Flour", "Salt", "Water"]
  },
  {
    name: "Steamed Rice",
    category: "SIDES",
    type: "VEG",
    description:
      "Steamed Rice is light, fluffy, and aromatic. It is the perfect base for curries, dals, and stir-fries. Simple yet satisfying, it is a staple in Indian meals.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 5,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Rice", "Water", "Salt"]
  },
  {
    name: "Papad",
    category: "SIDES",
    type: "VEG",
    description:
      "Papad is a thin, crisp disc made from lentil flour. It can be roasted or fried for a crunchy snack. Often served as an accompaniment with Indian meals.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 2,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Lentil Flour", "Salt", "Spices"]
  },
  {
    name: "Green Salad",
    category: "SIDES",
    type: "VEG",
    description:
      "Green Salad is made with fresh cucumber, tomato, and onion. A squeeze of lemon enhances its flavor. It is a refreshing and healthy side dish.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 6,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Cucumber", "Tomato", "Onion", "Lemon", "Salt"]
  },

  // DESSERT (5 items)
  {
    name: "Gulab Jamun",
    category: "DESSERT",
    type: "VEG",
    description:
      "Gulab Jamun is made with milk solids shaped into soft balls. They are deep fried and soaked in sugar syrup. This melt-in-the-mouth dessert is a festive favorite.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 6,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Milk Solids", "Sugar", "Cardamom", "Ghee"]
  },
  {
    name: "Rasgulla",
    category: "DESSERT",
    type: "VEG",
    description:
      "Rasgulla is a spongy sweet made from cottage cheese. It is soaked in a light sugar syrup for sweetness. This Bengali delicacy is loved across India.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 5,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Cottage Cheese", "Sugar", "Water", "Cardamom"]
  },
  {
    name: "Ice Cream",
    category: "DESSERT",
    type: "VEG",
    description:
      "Ice Cream is a frozen dessert enjoyed in many flavors. It is creamy, chilled, and refreshing on hot days. A perfect way to end a hearty meal.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 7,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Milk", "Cream", "Sugar", "Flavoring"]
  },
  {
    name: "Kheer",
    category: "DESSERT",
    type: "VEG",
    description:
      "Kheer is a rice pudding made with milk and sugar. It is flavored with cardamom and garnished with nuts. This creamy dessert is often prepared on special occasions.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 8,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Nuts"]
  },
  {
    name: "Brownie",
    category: "DESSERT",
    type: "VEG",
    description:
      "Brownie is a chocolate-based baked dessert. It is fudgy, rich, and slightly chewy in texture. Often served warm, it pairs well with ice cream.",
    image_URL:
      "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    price: 9,
    qty: 0,
    id: uuidv4(),
    ingredients: ["Flour", "Cocoa Powder", "Sugar", "Butter", "Eggs"]
  }
];

export default dishes;

