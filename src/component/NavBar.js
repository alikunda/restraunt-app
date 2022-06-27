
import React from "react";
const NavBar = ({filterCategory, menuList}) => {
    return (
        <>
         <nav className="navbar">
            <div className="btn-group">
                {menuList.map((curElem) => {
                     return( <button className="btn-group__item" onClick={() => filterCategory(curElem)}>{curElem}</button>
                );
                })}
            </div>
        </nav>
        </>
    );
}

export default NavBar

