//variables
let button = document.querySelector('#bttn');
let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let overlay = document.getElementById('overlay');
let phrasesArray = ["Break a leg","Bite the bullet","Call it a day","Better late than never","Cutting corners"]

//event listeners
button.addEventListener('click',() => {
overlay.style.display = "none";
})


function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
  let ul = document.querySelector('#phrase ul');
  for(let i = 0; i<arr.length; i++){
         //looping to single text and adding letter class and not adding letter class to the spaces
        if(arr[i] == " ") {
            var li = `<li>${arr[i]}</li>`;
        } else{
          // i was able to grab all the buttons and my goal is 
            let buttons = document.querySelectorAll('#qwerty buttons') 
            var li = document.createElement('LI');
          
//          there's a pre-defined style for letter class so i want to add letter class to all my list items which i done below
            li.setAttribute('class','letter')
            li.innerText = `${arr[i]}`;
          
//          
//          my problem is that i want to add show class too when sokmeonec click on respective button meaning if someone click on a button with the text content of 'w' then in th grey box i want the 'w' word pops up i made a pre deifinned style for popup style too name show please try to solve this please
          
          }
  }
}


// onclick karne pe show class add hone waal function













function getRandomPhraseAsArray(arr)  {
    const randomIndex = Math.floor(Math.random() * arr.length);
    let randomPhrase = arr[randomIndex].split("");
    addPhraseToDisplay(randomPhrase)
}
getRandomPhraseAsArray(phrasesArray);

//checkletter function















