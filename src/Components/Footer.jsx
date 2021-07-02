import React from "react";
const Footer = () => {
    const Year = new Date().getFullYear();
    return ( <> 
             <footer style={{ position: "fixed",bottom: "0",right: "45vw"}}>
                 <p>copyright &copy;  {Year}</p>
             </footer>
             </>)
};
export default Footer;