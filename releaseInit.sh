echo "本番環境用 Buildを実行中..."
rm -rf dist

echo "キャッシュクリアをスキップしますか？ [yes/no]"
read Cacheclear
case $Cacheclear in
  "" | "Y" | "y" | "yes" | "Yes" | "YES" );;
  * )
  rm -rf node_modules
  npm install
esac

npm run build:production

npm run ejs

rm -rf dist/css dist/js;

echo "\n\tSuccess!\n"
