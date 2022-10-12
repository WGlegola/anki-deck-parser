import React from "react";

type Props = {};

function NewDeck({}: Props) {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="frontTag">Front card tag</label>
          <input type="text" id="frontTag"></input>
        </div>
        <div>
          <label htmlFor="reverseTag">Reverse card tag</label>
          <input type="text" id="reverseTag"></input>
        </div>
        <div>
          <label htmlFor="endTag">End of card tag</label>
          <input type="text" id="frontTag"></input>
        </div>
      </form>
    </div>
  );
}

export default NewDeck;
