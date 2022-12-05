import React, { useEffect, useState } from "react";
import './App.css';


function App() {
  var UserName = <strong>Daniil</strong>;
  return (
    <div className="result">
        <h1>Hello, {UserName}</h1>
        <div>
        <Task2 posts={posts} />
        </div>
        <Task4 markets={markets}/>
        <Task5 cities={cities} />
        {/* <Product arrayColor={arrayColor}/> */}
        <Product></Product>
    </div>
  );
}
function Task2(props) 
{
  const content = props.posts.map((post) =>
      <tr>
        <th>
          {post.title}
        </th>
        <td>
          {post.name}
        </td>
      </tr>
  );
  return (
    <table>
      {content}
    </table>
  )
}
const posts = [
  {id: 1, title: 'First Name', name: 'John'},
  {id: 2, title: 'Last Name', name: 'Silver'},
  {id: 3, title: 'Occupation', name: 'Pirate Captain'},
];
const markets = [
  {
    image: 'https://content1.rozetka.com.ua/goods/images/preview/25088160.jpg', 
    cost: '383', 
    info: '10м USB 2.0 активний подовжувач репітер'
  },
  {
    image: 'https://content2.rozetka.com.ua/goods/images/preview/216522468.jpg', 
    cost: '720', 
    action: '1 039', 
    info: 'Чоловіча сумка SumWin 2345MJ Чорна'
  },
  {
    image: 'https://content2.rozetka.com.ua/goods/images/preview/264186522.jpg', 
    cost: '3 499', 
    action: '2 950', 
    info: 'Графічний планшет XP-Pen Deco 01 V2 Чорний', 
    active: true
  },
  
  
];

function Task4(market)
{
  const cards = market.markets.map((info) =>
    <div class='card'>
      <div class='card-image'>
        <a href='#'><img src={info.image} alt={info.info}></img></a>
      </div>
      <div class='card-information'>
        <a href='#'><h4>{info.info}</h4></a>
        {info.action != null && 
         <span class='action'>{info.action} ₴</span>
        }
        <p>{info.cost} ₴</p>
        {info.active === true &&
          <span class='active'>Немає в наявності</span>
        }
      </div>
    </div>
  )
  const forms = (
    <form>
      <input type='submit' value='показать больше'></input>
    </form>
  )
  const titles = (
    <h2>Заголовок</h2>
  )
  return(
    <div class='container'>
      {titles}
      <div class='wrapper'>
        {cards}
      </div>
      {forms}
    </div>

  );
}

const cities = [
  {id: 1, name: 'Chicago', image: 'chicago.jpg'},
  {id: 2, name: 'Los Angeles', image: 'los-angeles.jpg'},
  {id: 3, name: 'New York', image: 'new-york.jpg'},
];

function Task5(citie){
  const cities = citie.cities.map((citi) =>
      <option value={citi.name}>{citi.name}</option>
  )
  return(
    <div>
      <form>
      <select>
      {cities}
      </select>
      </form>
    </div>
  )
}
// const arrayColor = [{clr: 'red'}, {clr: 'yellow'}, {clr: 'blue'}];
// function Product(props){
//   const arrayColor = props.arrayColor.map((color) =>
//       <option value={color.clr}>{color.clr}</option>
//   )
//   return(
//     <div>
//       <form>
//       <select>
//       {arrayColor}
//       </select>
//       </form>
//     </div>
//   )
// }

function Product(){
  const [textColor, color] = useState('green');
  const style = {
    backgroundColor: textColor, 
  }
  return (<div style={style}>I`m {textColor} and content
  <form onChange={(e) => color(e.target.value)}>
        <select>
          <option value='green'>green</option>
          <option value='red'>red</option>
          <option value='yellow'>yellow</option>
        </select>
      </form>
  </div>);
}
export default App;
