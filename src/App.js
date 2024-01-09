import React, { useState } from 'react';
import './App.css';

function App() {
  // Define lists of nouns and adjectives
  const nouns = ['apple', 'banana', 'car', 'dog', 'elephant', 'flower', 'guitar', 'house', 
  'food', 'jacket', 'kite', 'lamp', 'mouse', 'notebook', 'orange', 'pencil', 'queen', 'robot', 
   'tree', 'umbrella', 'violin', 'water', 'yarn', 'zebra',
  'airplane', 'ball', 'cat', 'door', 'egg', 'frog', 'giraffe', 'hat', 'ice', 'jelly', 'key', 'lion', 
  'nose', 'owl', 'panda', 'quilt', 'rain', 'sun', 'tiger', 'umbrella', 'vase', 'window', 'fire',
    'water', 'earth', 'air', 'grass', 'sand', 'snow', 'rain', 'cloud', 'lightning', 'thunder',
      'river', 'lake', 'ocean', 'sea', 'wave', 'leaf', 'flower', 'rose', 'daisy',
      'butterfly', 'bee', 'ladybug', 'ant', 'spider', 'web', 'snail', 'lizard', 
      'fish', 'shark', 'dolphin', 'octopus', 'crab', 'lobster', 'starfish', 'dinosaur',
        'dragon', 'unicorn', 'mermaid', 'alien', 'robot', 'rocket', 'planet', 'star', 
        'moon', 'sun', 'galaxy', 'astronaut', 'spaceship', 'car', 'train', 'boat'].filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
  const adjectives = ['happy', 'strong', 'colorful', 'quick', 'friendly', 'tall', 'short', 'loud', 'quiet', 
  'slow', 'fast', 'big', 'small', 'tiny', 'giant', 'soft', 'smooth', 'rough', 
  'sweet', 'sour', 'bitter', 'spicy', 'salty', 'cold', 'hot', 'warm',
   'cool', 'fuzzy', 'fluffy', 'sharp', 'dull', 'heavy', 'light', 'clean',
     'fresh', 'stale', 'empty', 'full', 'solid', 
    'shallow', 'wide', 'narrow', 'tall', 'high', 'low', 'open', 'closed', 'young',
     'old', 'new', 'used', 'fresh', 'good', 'bad', 'beautiful', 'pretty', 
     'plain', 'fancy', 'expensive', 'free', 'busy', 'lazy', 'calm', 'angry', 'happy', 'sad',
      'tired', 'sleepy', 'healthy', 'hungry', 'full', 'dry', 'afraid', 'brave', 
      'scared', 'safe', 'dangerous', 'strong', 'weak', 'rich', 'smart', 'funny', 
      'serious', 'silly', 'strange', 'weird', 'normal', 'odd', 'loud', 'quiet', 'noisy', 'silent', 
      'proud', 'polite', 'kind', 'mean', 'nice', 'honest'].filter((value, index, self) => {
        return self.indexOf(value) === index;
      });

  // Function to generate a random password
  const generatePassword = () => {
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    // Either capitalize the first letter of the adjective, noun, or capitalise both
    const capitalize = Math.floor(Math.random() * 3);

    if (capitalize === 0) {
      randomAdjective = randomAdjective[0].toUpperCase() + randomAdjective.slice(1);
    } else if (capitalize === 1) {
      randomNoun = randomNoun[0].toUpperCase() + randomNoun.slice(1);
    } else {
      randomAdjective = randomAdjective[0].toUpperCase() + randomAdjective.slice(1);
      randomNoun = randomNoun[0].toUpperCase() + randomNoun.slice(1);
    }
    const mapping = {
      a: '@',
      e: '3',
      l: '!',
      o: '0',
      s: '$',
      t: '+',
      i: '1'
    };
    //select either the adjective or noun to be mapped
    const randomWord = Math.floor(Math.random() * 2);
    // select a random letter from the word to be mapped, if the letter is in the mapping, replace it with a capitalised version of the replacement
    if (randomWord === 0) {
      const randomLetter = Math.floor(Math.random() * randomAdjective.length);
      if (randomAdjective[randomLetter].toLowerCase() in mapping) {
        randomAdjective = randomAdjective.slice(0, randomLetter) + mapping[randomAdjective[randomLetter].toLowerCase()].toUpperCase() + randomAdjective.slice(randomLetter + 1);
      } else {
        randomAdjective = randomAdjective.slice(0, randomLetter) + randomAdjective[randomLetter].toUpperCase() + randomAdjective.slice(randomLetter + 1);
      }
    }
    else {
      const randomLetter = Math.floor(Math.random() * randomNoun.length);
      if (randomNoun[randomLetter].toLowerCase() in mapping) {
        randomNoun = randomNoun.slice(0, randomLetter) + mapping[randomNoun[randomLetter].toLowerCase()].toUpperCase() + randomNoun.slice(randomLetter + 1);
      } else {
        randomNoun = randomNoun.slice(0, randomLetter) + randomNoun[randomLetter].toUpperCase() + randomNoun.slice(randomLetter + 1);
      }
    }



    // random number between 1 and 9
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    // Add the random number to either the beginning, middle or end of the password
    const position = Math.floor(Math.random() * 2);
    if (position === 0) {
      randomNoun = randomNoun + randomNumber;
    } else if (position === 1) {
      randomAdjective = randomAdjective + randomNumber;
    }

    // Get a random character from a set list
    const specialCharacters = ['!', '@', '#', '/', '?'];

    // Add the special character to either the beginning, middle or end of the password
    const position2 = Math.floor(Math.random() * 2);
    if (position2 === 0) {
      randomNoun = randomNoun + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    } else if (position2 === 1) {
      randomAdjective = randomAdjective + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }

    // Create a mapping of letters to replacement symbols or numbers
    


    return `${randomAdjective}${randomNoun}`;
  };

  // State to store generated passwords
  const [passwords, setPasswords] = useState(Array.from({ length: 5 }, (_, index) => generatePassword()));

  // Function to handle button click and generate new passwords
  const handleGeneratePasswords = () => {
    setPasswords(Array.from({ length: 10 }, (_, index) => generatePassword()));
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold my-2">Ask 4 some passwords</h1>
      
      <div className="flex flex-col justify-center items-center">
        {passwords.map((password, index) => (
          <p className="text-xl" key={index}>{password}</p>
        ))}
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4" 
      onClick={handleGeneratePasswords}>Generate</button>
    </div>
  );
}

export default App;