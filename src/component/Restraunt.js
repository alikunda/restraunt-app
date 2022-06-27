import React, { useState } from "react";
import './style.css';
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import NavBar from "./NavBar";

const allCategory = [
    ...new Set (Menu.map((curElem) => {
    return curElem.category;
})
)
, "All",
];


const Restraunt = ()=> {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(allCategory)
    console.log(menuData);

    const filterCategory = (category) => {

        if(category === "All"){
            setMenuData(Menu) 
            return;
        } 

        const updatedList = Menu.filter((curElem) =>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }

    return(
      <>
       <NavBar filterCategory = {filterCategory} menuList = {menuList}/>
        <MenuCard menuData={menuData} />
      </>
    )
}

export default Restraunt;