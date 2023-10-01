var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText='It was 94 fahrenheit outside, so insertX went for a walk. When they got to insertY, they stared in horror for a few moments, then insertZ. Bob saw the whole thing, but was not surprised — insertX weighs 300 pounds, and it was a hot day.'
var insertX= ['Willy the Goblin','Big Daddy','Father Christmas']
var insertY=['the soup kitchen','Disneyland','the White House']
var insertZ=['spontaneously combusted.','melted into a puddle on the sidewalk','turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {

    var newStory=storyText;
    var xItem=randomValueFromArray(insertX);
    var yItem=randomValueFromArray(insertY);
    var zItem=randomValueFromArray(insertZ);
    var newStory=newStory.replaceAll('insertX',xItem);
    var newStory=newStory.replace('insertY',yItem);
    var newStory=newStory.replace('insertZ',zItem);

  if(customName.value !== '') {
    var name = customName.value;
    storyText= storyText.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.07142) + ' stone';
    const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
    var newStory= newStory.replace('94 farenheit',temperature);
    var newStory= newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}