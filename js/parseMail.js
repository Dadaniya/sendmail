var xls = require('node-xlsx');
var fs = require('fs');
var path='./'+new Date().toDateString();

if(fs.exsit())
fs.mkdirSync(path)

module.exports= function parseMail(target, col) {
    var content = xls.parse(__dirname + '/' + target)[0].data; //should put current path
    // console.log(xls.parse(__dirname+'/'+target)[0]);
    var names = {};
    var header=content.shift();
    console.log(header);
    content.forEach(function(data) {
        // console.log(data)
        if (key = data[col]) {
            names[key] ? names[key].push(data) : (names[key] = [data]);
        }
    });
    for (let key in names) {
        names[key].unshift(header)
        fs.writeFile('./' + key+".xlsx",xls.build([{
          name:key,
          data:names[key]
        }]), function(err, value) {
            if (err) throw err
            // console.log(value);
        })
    }
    return names;
}