import React, { useEffect, useState,useRef } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { useDispatch , useSelector } from "react-redux";
import { UPDATE_QUOTE } from "../redux/reducers/QuoteReducer";

const EditQuote= ({updateQuote}) => {
  
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const quotes= useSelector(state => state)
  
  const currentQuote =useRef(Object.values(quotes.QuoteReducer).filter(contact=>
    
    contact.id === parseInt(id)
    ))
  
  
 
    const [Quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
   
    
  useEffect(() => {
    setQuote(currentQuote.current[0].Quote);
    setAuthor(currentQuote.current[0].author);
    
  }, [currentQuote]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
   

   

    const data = {
      id: currentQuote.current[0].id,
      author,
      Quote,
     
    };
   
    

    updateQuote(data);
    toast.success("Quotes updated successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentQuote ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={Quote}
                  placeholder={"Name"}
                  onChange={(e) => {
                    console.log(e.target.value)
                    setQuote(e.target.value)}
                  }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={author}
                  placeholder={"Email"}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
             
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update quote
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  updateQuote: (data) => {
    dispatch(UPDATE_QUOTE(data));
  },
});

export default connect(null, mapDispatchToProps)(EditQuote);
