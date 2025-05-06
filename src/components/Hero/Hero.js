import React from 'react';
import '../Hero/Hero.css';
import photoHero from "../../assets/images/Photo.png";
import InfoNumbersBox from '../InfoNumbersBox/InfoNumbersBox';

const Hero = () => {
  return (
    <div className="container-Hero">
      {/* ------------ліва сторона HERO -------------*/}
      <div className="container-info">
        <div className="text-hero1">FIND CLOTHES THAT MATVHES YOUR STYLE</div>
        <div className="text-hero2">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </div>

        {/* кнопка Shop Now */}
        <div className="box-buttonShopNow">
          <button className="buttonShopNow" type="submit">
            Shop Now
          </button>
        </div>
              
        {/* секція інфо з цифрами  */}
        <div className='box-infoNumbers'>
            <InfoNumbersBox/>  
        </div>
              
      </div>
      {/*------------- права сторона HERO -----------*/}
      <div className="box-photoHero">
        <img className="PhotoHero" src={photoHero} alt="photoHero" />
      </div>
    </div>
  );
}

export default Hero
