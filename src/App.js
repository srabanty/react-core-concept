import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.00'},
  ]
  const nayoks =['Anwar','Jasim'];
  var name ="Hello React";

  var person ={
    name : "Prima",
    job : "Singer"
  }

  var style ={
    color: 'red',
    backgroundColor : 'yellow'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>{name}</h1>
        <h2>{person.name +" "+ person.job}</h2>
        <h1>Heading {2+3}</h1>
        <p>Paragraph</p>

        {/* <Product productName={products[0].name} productPrice={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Person nayok="Rubel"></Person>
        <Person nayok="Bapparaj"></Person>
        <Person nayok={nayoks[1]}></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount]=useState(10);
  // const handleIncrease = ()=> setCount(count + 1);

  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
        <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'2px solid yellow',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'300px',
    float:'left'
  }
  
  console.log(props);
  return(
    <div style={productStyle}>
      {/* <h3>Name: {props.productName}</h3>
      <h4>Price: {props.productPrice}</h4> */}
      
      <h5>New name:{props.product.name}</h5>
      <h4>New Price:{props.product.price}</h4>
      <button>Bye now</button>
    </div>
  )
}
function Person(props){
  const personStyle ={
    border:'2px solid red', 
    margin:'10px', 
    padding:'10px', 
    color:'skyblue'
  }
  return (
  <div style={personStyle}>
    <h1>Name : {props.nayok}</h1>
    <h3>Hi</h3>
  </div>
  )
}
export default App;
