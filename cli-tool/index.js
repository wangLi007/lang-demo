const FS = require('fs');
var path = require('path'); //系统路径模块

// path 文件夾路徑 例如 './View'
// regular 要替換的正則匹配規則 例如 '/.css"/gm'
// new_content 需要替換上去的內容 例如 '/.css?v=1"'
// is_treatment_sub_file 是否需要遍歷子文件夾 默認為true

var parameters = {
  path: './src',
  regular: /css/gm,
  new_content: 'js',
  is_treatment_sub_file: true,
};

// 输出文件
let outData = {};

async function replacement(parameters) {
  //读取文件，并且替换文件中指定的字符串
  FS.readdir(parameters.path, function (err, files) {
    if (err) {
      return err;
    }
    if (files.length !== 0) {
      files.forEach(function (item, index) {
        //判断文件的状态，用于区分文件名/文件夹
        FS.stat(parameters.path + '/' + item, function (err, status) {
          if (err) {
            return err;
          }
          var this_path = parameters.path + '/' + item;
          var isFile = status.isFile(); //是文件
          var isDir = status.isDirectory(); //是文件夹
          if (isFile) {
            var testHtml = FS.readFileSync(this_path, 'utf8');

            //替换文件
            // var new_testHtml = testHtml.replace(parameters.regular, parameters.new_content);
            // FS.writeFileSync(this_path, new_testHtml, 'utf8');
            let matchList = testHtml.match(/\$t\S*/g);

            matchList.forEach((item, index) => {
              const str = item.replace(/\$t|\(|\)|"|'/g, '');

              if (str.indexOf('.') != -1) {
                const tempArr = str.split('.');
                if (!outData.hasOwnProperty(tempArr[0])) {
                  outData[tempArr[0]] = {};
                }
                outData[tempArr[0]][tempArr[1]] = '翻译后的文案';
              } else {
                outData[str] = '翻译后的文案';
              }
            });
            // console.log(outData, 'outData');
            // writeFile(JSON.stringify(outData));
            // console.log(this_path, '成功');
          }
          if (isDir && parameters.is_treatment_sub_file) {
            parameters.path = this_path;
            replacement(parameters);
          }
        });

        // 读取完成
        // if (files.length - 1 === index) {
        //   console.log('完成!!');
        //   reslove();
        // }
      });
    }
  });
}

//写入文件
function writeFile(content) {
  //指定创建目录及文件名称，__dirname为执行当前js文件的目录
  const files = ['cn', 'en', 'kn'];
  files.forEach(lang => {
    const str = 'export default' + JSON.stringify(content);
    const file = path.join(__dirname, `./local/${lang}.js`);
    FS.writeFile(file, str, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('文件创建成功，地址：' + file);
    });
  });
}

// 匹配key
(async function () {
  await replacement(parameters);
  // 导出文件
  setTimeout(() => {
    console.log(outData, '-----------------');
    writeFile(outData);
  }, 2000);
})();
