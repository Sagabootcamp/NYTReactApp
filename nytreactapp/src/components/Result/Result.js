import React  from "react";

const Result = (props) => (
  <div className="Result">
    <div className="panel panel-primary">
      <div className="panel-heading"><h3>Result</h3></div>
        <div className="panel-body">
          {props.displayResult.map((article) => {
            return(
                    <div key ={article._id} className="panel panel-success"> 
                      <div className = "panel-body">
                        <div className = "row">
                          <div className="col-lg-10">
                            <p>{article.headline.main}</p>
                          </div>
                          <div className="col-lg-2">
                            <form>
                              <button className="btn btn-info">Save Article</button>
                            </form>
                          </div>

                        </div>
                     </div> 
                    </div> 
            );
          }
        ) 
        }
        </div>
    </div>
  </div>    
);

export default Result;
