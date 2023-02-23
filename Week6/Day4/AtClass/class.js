class persona {
    constructor (name, url, description) {

        const p = document.createElement('p');
        p.appendChild(document.createTextNode(name));
        p.addEventListener("click", onClick);
        this.name = p;

        const img = document.createElement("img");
        img.setAttribute('src', url);
        this.image = img;

        const desc = document.createElement('p');
        desc.appendChild(document.createTextNode(description));
        this.descr = desc;

        adToDome (p, img, desc)// Then somehow p, image and desc are added to DOM (not as siblings)
    }
}

const elt = new persona("Bob", url, "Bob is cool");

function onClick(e) {
   const p =  e.currentTarget;
   // p is para with name 
   //can I access image and  description knowing they are all of one class element?
}