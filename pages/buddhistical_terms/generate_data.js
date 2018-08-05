/*
* Node.js
* terms.md ==> data.js
* */
/*
var terms=[
  {
    name:'',
    explanations:[
      ''
    ]
  },
];
* */
var fs = require("fs");

var path = './data.js';

if (fs.existsSync(path)) {
  fs.unlinkSync(path);
  console.log("已删除 data.js 文件。");
}

console.log('正在读取 terms.md 文件···');
var lines = fs.readFileSync('./terms.md').toString().split("\r\n");

console.log('正在生成新的数据···');
var content = 'var terms=[';
var datum = {
  name: '',
  explanations: []
};
var line = '';
for (var i = 0; i < lines.length; i++) {
  line = lines[i];
  if (line === '') {
    content += JSON.stringify(datum) + ',';
    datum = {
      name: '',
      explanations: []
    };
  } else if (line.startsWith('#')) {
    datum.name = line.substr(5);
  } else if (line.startsWith('-')) {
    datum.explanations.push(line.substr(2));
  }
}

content += '];';

fs.writeFileSync(path, content, function (err) {
  if (err) {
    return console.error(err);
  }
});
console.log('新 data.js 生成完毕。');
