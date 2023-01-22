import React from "react";
//the Entry component will be the repeated part. copied and pasted the repeated
//part (only 1 part), and deleted the rest parts in App.jsx. and put <Entry /> x3
//to App.jsx
//2.(b)add props in (); replace the exiting value in the 3 different places with
//{props. xxx}

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;
