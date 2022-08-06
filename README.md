# webpack-ejs-sass

## 基本

- `npm install`

  ***

## 基本的なコマンド・スクリプト

- `npm run start`
  ルートディレクトリでこのコマンドを打つと、ローカルサーバーが立ち上がり、ブラウザのタブが新たに開かれ、dist/index.html が表示される。表示されない場合はブラウザリロードする。ファイルの監視も行われる。中止したい場合は`control + c`コマンド
- `npm run build`
  ビルドコマンド。サーバーを立ち上げたくないが、build したいときに有効
- `npm run watch`
  ビルドせずに動作を確認

  ***

### 本番環境適用時・サイトリリース時には releaseInit.sh を実行する。

`sh releaseInit.sh`

1. 念の為キャッシュを削除する（dist と node_modules を削除、node_modules を再インストール。）
2. html,css,js,画像などのビルドを実行
