import React, { Fragment } from 'react';

const Question = () => {
  return ( 
    <Fragment>
        <h2>Your budget here</h2>

        <form>
          <input 
              type="number"
              className="u-full-width"
              placeholder="Write your budget here"
          />
          <input 
             type="submit"
             className="button-primary u-full-width"
             value="Define Budget"
          />
        </form>
    </Fragment> );
}
 
export default Question;