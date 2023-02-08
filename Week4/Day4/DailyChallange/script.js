// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.


class Video {
    constructor (t, u, tm) {
        this.title = t;
        this.uploader = u;
        this.time = tm;
    }
    wacth () {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}`);
    }
}
const drama = new Video ("Dark soul", "Anatoly", 3601);

drama.wacth();

const drama2 = new Video ("Batman", "Anatoly", 7000)

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class VideoCool {
    constructor (title, uploader, time) {
        this.data = [];
        this.data[0] = title;
        this.data[1] = uploader;
        this.data[2] = time;
    }
    wacth () {
        console.log(`${this.data[1]} watched all ${this.data[2]} seconds of ${this.data[0]}`);
    }
}
const drama3 = new VideoCool ("Dark soul", "Anatoly", 3601);

drama3.wacth();

