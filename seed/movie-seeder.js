var Movie = require('../models/movie');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/edu', { useNewUrlParser: true });

// let uri = process.env.MONGOLAB_URI || 'mongodb://lin:chjmdan410@ds255262.mlab.com:55262/edu';
// mongoose.connect(uri);

var movies = [
    new Movie({
        imagePath: 'https://a.ltrbxd.com/resized/sm/upload/gr/n4/vo/kp/how-to-train-your-dragon-2-1200-1200-675-675-crop-000000.jpg?k=555715a4ab',
        videoPath: 'videos/howtotrainyourdragon.mp4',
        title: 'How to train your dragon 2',
        description: 'When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.',
        language: 'English',
        videoLink: 'https://www.youtube.com/watch?v=1P-Plgj8ktA',
        message: [
            {
                timeStart: "00:00:02,133",
                timeEnd: "00:00:12,855",
                mess: "How to Train Your Dragon 2"
            },
            {
                timeStart: "00:00:12,907",
                timeEnd: "00:00:24,224",
                mess: "Credit: ABC"
            },
            {
                timeStart: "00:00:24,500",
                timeEnd: "00:00:26,000",
                mess: "Hello"
            },
            {
                timeStart: "00:00:26,200",
                timeEnd: "00:00:29,000",
                mess: "This is toothless"
            },
            {
                timeStart: "00:00:30,000",
                timeEnd: "00:00:32,224",
                mess: "The end"
            }
        ]
    }),
    new Movie({
        imagePath: 'http://image.phimmoi.net/film/6130/preview.medium.jpg?_v=1524253897',
        videoPath: '',
        title: 'The walking dead season 8',
        description: 'When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.',
        language: 'English',
        videoLink: 'https://www.youtube.com/watch?v=1P-Plgj8ktA',
        message: [
            {
                timeStart: "00:00:02,133",
                timeEnd: "00:00:12,855",
                mess: "bla bla"
            },
            {
                timeStart: "00:00:12,907",
                timeEnd: "00:00:24,224",
                mess: "bla bla 2"
            },
            {
                timeStart: "00:00:24,500",
                timeEnd: "00:00:26,000",
                mess: "bla bla 3"
            },
            {
                timeStart: "00:00:26,200",
                timeEnd: "00:00:29,000",
                mess: "bla bla 4"
            },
            {
                timeStart: "00:00:30,000",
                timeEnd: "00:00:32,224",
                mess: "bla bla 5"
            }
        ]
    }),
    new Movie({
        imagePath: 'https://www.serietotaal.nl/images/nieuws/t/rmn7i8ks5yf6-full.jpg',
        videoPath: '',
        title: 'Revenge season 8',
        description: 'When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.',
        language: 'English',
        videoLink: 'https://www.youtube.com/watch?v=1P-Plgj8ktA',
        message: [
            {
                timeStart: "00:00:02,133",
                timeEnd: "00:00:12,855",
                mess: "yo yo"
            },
            {
                timeStart: "00:00:12,907",
                timeEnd: "00:00:24,224",
                mess: "yo yo 1"
            },
            {
                timeStart: "00:00:24,500",
                timeEnd: "00:00:26,000",
                mess: "yo yo 2"
            },
            {
                timeStart: "00:00:26,200",
                timeEnd: "00:00:29,000",
                mess: "yo yo 3"
            },
            {
                timeStart: "00:00:30,000",
                timeEnd: "00:00:32,224",
                mess: "yo yo 4"
            }
        ]
    }),
    new Movie({
        imagePath: 'https://static.goldderby.com/wp-content/uploads/2018/02/The-Voice-Season-14-Kelly-Clarkson-Alicia-Keys-Adam-Levine-Blake-Shelton.jpg',
        videoPath: '',
        title: 'The voice America 2018',
        description: 'When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.',
        language: 'English',
        videoLink: 'https://www.youtube.com/watch?v=1P-Plgj8ktA',
        message: [
            {
                timeStart: "00:00:02,133",
                timeEnd: "00:00:12,855",
                mess: "nene"
            },
            {
                timeStart: "00:00:12,907",
                timeEnd: "00:00:24,224",
                mess: "nene 1"
            },
            {
                timeStart: "00:00:24,500",
                timeEnd: "00:00:26,000",
                mess: "nene 2"
            },
            {
                timeStart: "00:00:26,200",
                timeEnd: "00:00:29,000",
                mess: "nene 3"
            },
            {
                timeStart: "00:00:30,000",
                timeEnd: "00:00:32,224",
                mess: "nene 4"
            }
        ]
    }),
];

var done = 0;

for (var i = 0; i < movies.length; i++) {
    movies[i].save(function (err, result) {
        done++;
        if (done === movies.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}