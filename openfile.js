var fs = require('fs')

fs.open('./coverletter.txt', 'w+', function (err, f) {
    if (err) {
         return console.error(err);
        }
        console.log(f);
        console.log("File opened!!");     
     });