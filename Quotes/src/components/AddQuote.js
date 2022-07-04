import React, { useState } from "react";

import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useDispatch , useSelector } from "react-redux";
import { ADD_QUOTE } from "../redux/reducers/QuoteReducer";


const AddQuote= ({  addContact }) => {
  const [Quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  
  const contacts = useSelector(state => state)
  console.log(contacts)
 
  const dispatch = useDispatch();


  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

   
  console.log("----");
    const data ={
      id:  Date.now(),
      author,
      Quote,
      
    };

    dispatch( ADD_QUOTE(data) );
    toast.success("Quote added successfully!!");
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add New Quotes</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="quote"
                placeholder="Add quote"
                value={Quote}
                onChange={(e) => setQuote(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add quote"
              />
              <button
                  type="button"
                  className="btn btn-block btn-dark"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   contacts: state,
// });


export default AddQuote;
