import React, {useState,useEffect} from 'react';
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import './Card.css';
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { DELETE_QUOTE } from '../redux/reducers/QuoteReducer';


const Card = () => {

  const quotes = useSelector(state => state)
   
    const dispatch = useDispatch();
    const history = useHistory();
    const contact = (Object.values(quotes.QuoteReducer))
   

    const[Quote , setQuote] = useState(contact[0])

    const getQuote =()=>{
        let randomNum =Math.floor(Math.random()*contact.length);
        setQuote(contact[randomNum])
    }

    const deleteQuote =(id)=>{
        
        dispatch(DELETE_QUOTE(id))
        toast.success("Quote Deleted successfully!!");
        history.push("/");


    }
  
    

  return (<div className="Container">

<Link to="/add" className="btn btn-outline-dark my-5 mr-50 ">
          Add quote
        </Link>

{Quote ?(<div className="quote">
       
        
         
       <p>"{Quote.Quote}"</p>
     <p>Author : {Quote.author}</p>
     <button
                       type="button"
                       onClick={getQuote}
                       className="btn btn-success mr-1"
                     >

                       New Quote
                     </button> 
                     <Link
                        to={`/edit/${Quote.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>

                      <button
                        type="button"
                        onClick={()=>deleteQuote(Quote.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                     
                     
                    
                     
 

   </div>):<h3>No quotes are added</h3>}        
    
    
    </div>);
};


export default (Card);
