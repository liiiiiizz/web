import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'БОРЩ С ГОВЯДИНОЙ',
      price: '310 руб.',
      ingredients: 'Говядина, свекла, капуста, картофель, морковь, томатная паста, лук репчатый, сметана, укроп',
      kg: '120 г',
      image: 'https://imgproxy.sbermarket.ru/imgproxy/size-680-680/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIxNzQ0MDcxL29yaWdpbmFsLzEvMjAyMy0wNS0yOVQxNCUzQTMzJTNBMTMuNTU5NDIxJTJCMDAlM0EwMC8yMTc0NDA3MV8xLmpwZw==.jpg',
    },
    {
      id: 2,
      name: 'ОСЕННИЙ САЛАТ С ПЕЧЁНОЙ ТЫКВОЙ И СВЁКЛОЙ',
      price: '410 руб.',
      ingredients: 'Запеченная тыква, свекла отварная, сыр брынза, айсберг, рукола, грецкие орехи, горчичный соус, соус песто, крем бальзамик',
      kg: '120 г',
      image: 'https://shokoladnicatmn.ru/uploads/products/6b2a29b7-5855-11ee-8575-0050569dbef0.jpg',
    },
    {
      id: 3,
      name: '«ЦЕЗАРЬ» С КУРИЦЕЙ',
      price: '450 руб.',
      ingredients: 'Куриная грудка, томаты черри, айсберг, крутоны с паприкой, пармезан, соус цезарь (анчоусы, масло оливкововое, подсолнечное, горчица, яичный желток)',
      kg: '120 г',
      image: 'https://eda.yandex.ru/images/3491582/9669de5eabf4cbd22a6d3ce0492d426a-680x500.jpeg',
    },
    // Добавьте другие блюда в массив с изображениями
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    if (selectedItem === id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(id);
    }
  };

  return (
    <div className="App">
    <header className="header">
                <nav className="top-nav">
          
                        <a href="">ШОКОЛАДНИЦА</a>
                        <a href="">АКЦИИ</a>
                        <a href="">МЕНЮ</a>
                        <a href="">ЗАКАЗАТЬ КОФЕ</a>
                        <a href="">АДРЕСА</a>
                        <a href="">ДОСТАВКА</a>
                        <a href="">О КОМПАНИИ</a>
                        <a href="">ФРАНЧАЙЗИНГ</a>
                </nav>
            </header>
      <main>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item.id)}>
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <img src={item.image} alt={item.name} className="food-image" />
              {selectedItem === item.id && (
                <div className="details">
                  <p>Ингредиенты: {item.ingredients}</p>
                  <p>Вес: {item.kg}</p>
                  {/* Другие детали блюда */}
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
