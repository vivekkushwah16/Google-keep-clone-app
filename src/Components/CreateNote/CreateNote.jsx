import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./createNote.css";
const CreateNote = (props) =>{
    const[expand,setExpand]=useState(false);
    const [Note,setNote]=useState({
        title:"",
        content:""
    })
    const InputEvent=(object)=>{
        const{name,value}=object.target;
        setNote((prevData)=>{
           return{ 
               ...prevData,
               [name]:value
            };
        });
       
    };
    
    const addEvent=() =>{
            if (Note.title === ""){
            alert("Please write something in title box or in content box..... ");
            }
            else{
            props.passNote(Note);
            setNote({
                title:"",
                content:"",
            })
            }
        }
    const expandIt = () => {
        setExpand(true);
    } 
    const hideIt = () => {
        setExpand(false);
    }   
    return(
        <>
        <div className="main_note" onDoubleClick={hideIt}>
            <form>
               { expand?
                <input type="text" 
                name="title"
                value={Note.title}
                onChange={InputEvent} 
                placeholder="Title"
                autoComplete="off"/> : null}
                <textarea row="" column=""
                name="content"
                value={Note.content}
                onChange={InputEvent} 
                onClick={expandIt}
                placeholder="Write a note..."/>
                {expand?
                <Button  onClick={addEvent}
                > <AddIcon className="plus_sign"/></Button> :null}
            </form>
        </div>
        </>
    )
};
export default CreateNote;