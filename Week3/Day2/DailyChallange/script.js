const theForm = document.forms.libform;

const sp = document.querySelector("#story");

var noun;
var adj;
var person;
var verb;
var place;

theForm.addEventListener ("submit" , makeStory);

shuffle = document.querySelector("#shuffle");
shuffle.addEventListener('click', changeStory);

function makeStory (e) {
    e.preventDefault();
    e.target.noun.value
    noun = e.target.noun.value;
    adj = e.target.adjective.value;
    person = e.target.person.value;
    verb = e.target.verb.value;
    place = e.target.place.value;
    let story;
    if (noun === "" || adj == "" || person == "" || verb == "" || place == "") {
        story = "Please fill all empty fields!"
    } else { 
        story = `${adj} ${person} ${verb} a ${noun} in a ${place}`
    }
    
    sp.textContent = story;

}

function changeStory () {
    var storyN = 1;
    storyN = Math.floor(Math.random() * 3);
    myArr = [
        `A ${adj} ${noun} came to ${place}, and ${verb} ${person}`,
        `In a ${place} ${adj} ${person} lives, who loves ${verb} ${noun}`,
        `${person} always dreem of ${adj} ${noun} when comes to ${place}, but this time he ${verb}`
        ];
    sp.textContent = myArr[storyN];
}