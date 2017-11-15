# Windowsでの作業

今回、npmではなく、yarnを使ってパッケージ管理をしようと思うので、yarnを入れる。
yarnはchocoで入れる。
コマンドプロンプトかPower Shellを管理者権限で立ち上げてから、以下のコマンドを叩く。

    choco install yarn


# テスト環境について


[一から始めるJavaScriptユニットテスト](http://developer.hatenastaff.com/entry/2016/12/05/102351)


上記ページを参考にテスト環境を構築していく

    yarn add assert mocha --save-dev
    yarn add babel-preset-es2015 babel-register --save-dev


