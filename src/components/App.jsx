import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1. create Entry component
//look at <div className="term"> is repeating, so we copy one block of that div.
//And in that block div, identity emoji picture, span and dd content are different,
//they need to set to props.

//2.Create props to replace hardcoded data.
//props can be named whatever you like, but sth meaningful related to 3 places
//that needs to update (here are: emoji, name, description)
//it will end up 3 <Entry />, but inorder to have less code, we do step 3.

//after coding in App.jsx, back to this file:
//try hardcoding in 3 props. copy value from emojipedia array. here no need a comma
//now on the webpage, we have one successfully block of image, repeating the rest is waste,
//so use step 3 to map for the test.

//3. (a)export emojipedia object from emojipedia.js to App.jsx
//(a1)in emojipedia file
//(a2) add the top, import emojipedia(name is lowercase, because it's not react)
// console.log(emojipedia); will see the array shows in browser console

//(b) Map through the emojipedia array and render Entry components.
//(b1)delete all <Entry /> components. replace by map function component:
//{emojipedia.map()} remember to wrap it inside a {} to make it a real js code.
//(b2) create a function to get a single entry of emojipedia inside App.jsx
//put 3 props emoji, name, description. And inorder the map function can work,
//we need an extra key, which expected by React.
//for convinience purposes, copy the first array to here, for reference below
//{
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

//pass createEntry function to the () inside map.

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
