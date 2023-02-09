const searchField = document.querySelector("#search");
const main = document.querySelector("#main");
objArr = [];

const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir\xa0V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

class Robot {
    constructor (_name, _email, imgsourse) {
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.setAttribute("src", imgsourse);
        img.classList.add("mainpic");
        const name_ = document.createElement("p");
        name_.classList.add("name");
        name_.appendChild(document.createTextNode(_name));
        const email_ = document.createElement("p");
        email_.classList.add("email");
        email_.appendChild(document.createTextNode(_email));
        card.appendChild(img);
        card.appendChild(name_);
        card.appendChild(email_);
        this.obj = card;
        this.name = _name;
        this.displayed = true;
    }
    display(val) {
        if (val) {
            this.obj.style.display = "flex";
            this.displayed = true;
        } else {
            this.obj.style.display = "none";
            this.displayed = false;
        }

    }
}


(function initialise () {
    robots.forEach ((elt) =>{
        const newRobot = new Robot (elt.name, elt.email, elt.image);
        main.appendChild(newRobot.obj);
        objArr.push(newRobot);
    })
})();

searchField.addEventListener("input", performSearch);

function performSearch (e) {
    const str = e.target.value.toLowerCase();
    objArr.forEach(elt => {
        if (elt.name.toLowerCase().includes(str)) {
            elt.display(true);
        } else elt.display(false);
    })

}



