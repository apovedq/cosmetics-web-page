import './App.css';
import Header from './components/Header/Header'
import List from './components/List/List';
import React, { useState } from 'react';
import AddProduct from './components/AddProduct/AddProduct';
import Cart from './components/Cart/Cart';
import Banner from './components/Banner/Banner';

//Create context.
export const productsContext = React.createContext();
export const cartContext = React.createContext();

function App() {

  //Variable to check if its logged in

  const [isLoggedIn, setIsLoggedIn] = useState("")

//Initial list of the products

  const [productsList, setProductsList] = useState([
    {
      name: "Tinte Rubio",
      brand: "Nouvelle",
      price: 20000,
      avalible: true,
      id: Math.floor(Math.random() * 10000) + 1
    },
    {
      name: "Shampo Negro",
      brand: "Sephora",
      price: 15000,
      avalible: true,
      id: Math.floor(Math.random() * 10000) + 1
      
    },
    {
      name: "Aclarador Natural",
      brand: "Igora",
      price: 45000,
      avaliblde: true,
      id: Math.floor(Math.random() * 10000) + 1
    },
    {
      name: "Gel Capilar",
      brand: "Sephora",
      price: 5000,
      avalible: true,
      id: Math.floor(Math.random() * 10000) + 1
    },
    {
      name: "Aclarador Artificial",
      brand: "Color One",
      price: 25000,
      avalible: true,
      id: Math.floor(Math.random() * 10000) + 1
    }])

  //TODO: create CART context

  const [cartStatus, setCarStatus] = useState([{
    name: "Tinte Rubio",
    brand: "Nouvelle",
    price: "$20.000",
    avalible: true,
    id: Math.floor(Math.random() * 10000) + 1
  }])


 // Displays the add product section
  function handleDisplayAddProduct() {
    

    let detailsSection = document.getElementById("add-product")



    if (detailsSection.style.display === "none") {
      //console.log("abierto")
        detailsSection.style.display = "flex";
    } else {
    //  console.log("abierto")
        detailsSection.style.display = "none";
      }
   
  
   // console.log("display:", detailsSection.style.display);
     // detailsSection.style.display = "none" ? "flex" : "none"
  }

  //TODO: Fix is loggedIn state, not showing properly
  function handleLogIn() {

    //Gets the value from the document and compares either if it has to log in as admin or log out
    let logInButton = document.getElementById("log-in-button");
    let adminSection = document.getElementById("admin-header-section");

    if (logInButton.style.display !== "none") {

      logInButton.style.display = "none";
      adminSection.classList.remove("admin-header-section");
      setIsLoggedIn(true);

    } else {

      //In case is not logged
      logInButton.style.display = "block";
      adminSection.classList.add("admin-header-section");
      setIsLoggedIn(false);//In case is not logged
      
      //Close add product section
      let detailsSection = document.getElementById("add-product");
      detailsSection.style.display = "none";
    }
    
    console.log("Is logged in: ", isLoggedIn)
  }

  function handleSetProductList(prop) {
    setProductsList(prop)
    //console.log(productsList)
  }
 
  function handleSetCartStatus(prop) {
    setCarStatus(prop)
  }

  return (
    <div className="App">
      <Header handleLogIn={handleLogIn} handleDisplayAddProduct={handleDisplayAddProduct}></Header>
      <productsContext.Provider value={productsList}>
        <cartContext.Provider value={cartStatus}>
          <AddProduct handleSetProductList={handleSetProductList}> </AddProduct>
          <Cart></Cart>
          <Banner></Banner>
          <List productsList={productsList} handleSetCartStatus={handleSetCartStatus}> </List>
        </cartContext.Provider>
      </productsContext.Provider>
    </div>
  );
}

export default App;
