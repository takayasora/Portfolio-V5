'use strict';

function check(){
  //メールアドレスが空の場合
  if(contact.mail_address.value == ""){
    window.alert("メールアドレスを入力してください");
    return false; //送信ボタンの動作をキャンセル
  }
  //メールアドレスが入力されている
  else {
    return true; //送信ボタンの動作を実行
  }
}
