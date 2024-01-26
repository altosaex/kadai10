# kadai10_卒業制作第二弾

https://ssmdssns.web.app/

デプロイまで完了。
下記アプリはデプロイが実現できず、reactとfirebaseで１から作り直しました。
まだupdate途中ですが、ひとまず完成

https://github.com/altosaex/kadai11



# kadai9_卒業制作第二弾

クローズドなSNSサービスを作るため、まずはfacebookのようなサイトをフルスタックで構築することを目指しました

## DEMO

https://github.com/altosaex/kadai10/blob/main/%E7%94%BB%E9%9D%A2%E5%8F%8E%E9%8C%B2%202024-01-06%2020.00.09.mov

## Getting Started

backendフォルダとfrontendフォルダ共に　`npm start` にてスタート

```
bash
npm start
```

## 紹介と使い方

- facebookと同様の状態をまずは目指します
- その後、投稿画面に「今日の質問」を追加して、自己内省をサポートする質問をランダムで選べるように機能追加予定

## 工夫した点
 - 今回はUdemyを見ながら一通りバックエンド、フロントエンドをフルスタックで通して作る体験をすることをゴールにしております
 - 自分がやっている事業のブランドカラーや雰囲気を大切にしました
  
## 苦戦した点
- MERN=MongoDB×Express×React×Node.jsのフルスタック技術を使って、普段利用しているSNSアプリを１から構築していく
- フロントエンドからバックエンドまで手作業で通すことに挑戦しました
- Udemyを見ながら全て手打ちで写経したもののエラーが出ることもありましたが、エラーが出た時の方が気づきが多く学びが多かった
- 謎のエラーに苦しんだが再起動したりWi-Fiを切り替えることで解消することが２度ほどあった
- バックエンドのlocalhost番号が [5000] でエラーが出て [4000] や [2000] でその都度切り替えて試していたが、タイミングによって成功するポート番号が違うことが未だに謎でした

  - 今回使用したサービス
    　- MongoDB／Postman／Timeago.js／React Material Icons／mongoose

## 参考にした web サイトなど

https://www.udemy.com/course/fullstack-mern-project-course/


