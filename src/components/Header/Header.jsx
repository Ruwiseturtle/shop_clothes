import React from "react";
import "./Header.css";
import basketImage from "../../assets/images/Frame.png";
import avatarImage from "../../assets/images/Vector.png";
import searchImage from "../../assets/images/Search.png";

// some comment
const Header = () => {
  return (
    <header className="container-header">
      {/* логотип */}
      <div className="Logo">SHOP.CO</div>

      {/* список для фільтру */}
      <div>
        <ul className="list-to-choose">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </div>

      {/* контейнер для пошуку */}
      <div className="search-container">
        {/* іконка пошуку */}
        <div className="container-searchImage">
          <img className="searchImg" src={searchImage} alt="searcher" />
        </div>
        {/* для ввода пошукового слова */}
        <input
          type="text"
          //   value={query}
          placeholder="Search for products..."
        />
      </div>

      {/* корзина та аватарка */}
      <div className="container-icons">
        <div className="container-basket">
          <img className="basket" src={basketImage} alt="basket" />
        </div>
        <div className="container-avatarImage">
          <img className="avatarImage" src={avatarImage} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
