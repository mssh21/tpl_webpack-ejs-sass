const fs = require('fs');
const beautify = require('js-beautify');

// HTMLファイルを検索するディレクトリ
const targetDirs = ['./dist/'];

// 整形オプション
// https://www.npmjs.com/package/js-beautify
const beautifyOptions = {
  indent_size: 2,
  end_with_newline: true,
  preserve_newlines: false,
  max_preserve_newlines: 0,
  wrap_line_length: 0,
  wrap_attributes_indent_size: 0,
  unformatted: ['b', 'em']
};

targetDirs.forEach(targetDir => {

  fs.readdir(targetDir, (err, files) => {

    if (err) console.log(err);
    if (err) return;

    const htmls = files.filter(name => {
      return name.match(/\.html$/);
    });

    htmls.forEach(file => {

      fs.readFile(targetDir + file, 'utf8', (err, html) => {

        if (err) console.log(err);
        if (err) return;

        const result = beautify.html(html, beautifyOptions);

        fs.writeFile(targetDir + file, result, 'utf8', err => {
          if (err) console.log(err);
        });

      });

    });

  });

});
