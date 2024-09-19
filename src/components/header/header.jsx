import React, { useState } from "react";
import "../header/header.css"
function Header() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleMenuItemClick = (event) => {
        console.log(`You selected ${event.target.textContent}`);
        setIsOpen(false); // Close the menu after selection
    };
    return (
        <>
            <header>
                <div className="top2">
                    <div className="container">
                        <div className="siteicon">
                            <a href="">
                                <img src="logo.png" />
                            </a>
                        </div>
                        <div className="navbar">
                            <ul>
                                <li><a href="">اتصل بنا</a></li>
                                <li><a>الرحلات السياحية</a></li>
                                <li><a href="">من نحن</a></li>
                                <li><a href="">الصفحة الرئيسية</a></li>
                            </ul>

                        </div>
                    </div>

                </div>
            </header>

        </>
    )
}

export default Header;