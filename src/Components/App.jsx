import react, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import CreateNote from "./CreateNote/CreateNote";
import Note from "./Note/Note";
const App = () => {
    const[item,addItem]=useState([]);
    const addNote = (Note) => {
        addItem((prevData)=> {
            return[...prevData,Note]
        })
    }
    const onDelete = (id) =>{
        addItem((oldData)=>
            oldData.filter((currdata,indx)=>{
                return indx !== id;
            })
        );
    }
    return(
            <>
                <Header/>
                <CreateNote passNote={addNote}/>
                 { item.map((val,index) =>{
                 return(
                      <Note key={index}
                       id={index}
                       title={val.title}
                       content={val.content}
                       deleteItem={onDelete}    
                       />
                      )
                      
                    })}
                <Footer/>
            </>
           );
};
export default App;