import React from 'react'
import numbers from '../../data/Numbers.json';
import './InfoNumbersBox.css';
import formatNiceNumber from '../../helpers/formatNiceNumber';

const InfoNumbersBox = () => {
 return (
   <div className="box-infoNumbers">
     {numbers.map((item) => (
       <div className='box-number' key={item.id}>
         <p className="number">{formatNiceNumber(item.number)}+</p>
         <p className='number-text'>{item.info}</p>
       </div>
     ))}
   </div>
 );
};

export default InfoNumbersBox
