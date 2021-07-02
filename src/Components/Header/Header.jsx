import React from "react";
import "./Header.css";
import { GrDocumentNotes } from "react-icons/gr";
const Header = () => {
    return (<>
            <div className="header">
            <h2>
              <GrDocumentNotes className="mx-1"/>
              Notes
            </h2>
            </div>
             </>)
};
export default Header;