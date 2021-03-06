# Git Lesson

## リモートリポジトリとローカルリポジトリとはそれぞれ何でしょうか？
### ローカルリポジトリは自分のパソコン内のリポジトリ指定したフォルダ内のファイルをバージョン管理し、リモートリポジトリはネット上にファイルをアップロードした状態でファイル管理するものです。


## プッシュとマージの違いは何でしょうか？
### プッシュはローカルリポジトリを自分が切ったブランチのリモートリポジトリに変更内容を反映させるが、マージはmasterブランチに独立した各ブランチの変更履歴を反映させることを指します。


## コミットとプッシュの違い
### コミットはローカルリポジトリに変更履歴を反映させるがプッシュはコミットで反映させた変更履歴をリモートリポジトリに反映させることを指す。


## コミットのメッセージはどのように書いてあげるのが最適でしょうか？
### 単純に一目で変更内容がわかるようなコミットメッセージが良い。また、各チームやプロジェクトでルールがある場合が多いので、必ずその決まりに準拠したメッセージにする必要がある。


## ローカルでマージするフローと、プルリクエストでマージするフローの違いは何でしょうか？
### ローカルでマージするフローは、直接masterブランチに作業ブランチの変更履歴を取り込んで変更を反映させるが、プルリクエストでマージするフローは、他の人からのコードレビューを行ってから、masterブランチに変更履歴を反映させるやり方です。安全性の違いがあり、バグを発生させるコードを意図せず書いていた場合、masterブランチと作業ブランチの差分を確認できるため、事前にバグを防ぐことができる。


## コンフリクトを起こしてしまった場合、どう対処すべきですか？
### 方法は3つあり、一つ目は先にマージされた変更内容を取り込む。二つ目は後にマージしようとしている変更内容を取り込む。三つ目はどちらの変更内容も取り込む。三つ目は注意が必要でコンフリクトのメッセージは文字列としてソースコードに書き込まれている。なのでエディタを使って両方の変更内容を取り込んだ処理で上書きをし、再度コミットをすることで両方を取り込むことができる。
