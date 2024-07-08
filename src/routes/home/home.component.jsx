import Directory from "../../components/directory/directory.component";


const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://americanhatmakers.com/cdn/shop/files/Summit-Coal-Men-Felt-Leather-American-Hat-Makers-fall-refresh.jpg?v=1696972794&width=1000"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Y4ggVt91L_kvbi8lKhZxxawiAUsiP33-1Q&s"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://www.calzadosvictoria.com/dw/image/v2/BGDL_PRD/on/demandware.static/-/Sites-victoria_b2c-Library/default/dwfc18289f/SS24/PRODUCT_CARD_SS24_INTERNO_1134106GRIS_01.jpg"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.pinimg.com/736x/a6/6f/74/a66f743c812b0c2d164ba41a3028ed31.jpg"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i2.wp.com/www.mrkoachman.com/wp-content/uploads/2022/04/20220425_125846-e1650888052983.jpeg?ssl=1"
    },
  ];

  return (
      <Directory categories={categories}/>
  );
};

export default Home;