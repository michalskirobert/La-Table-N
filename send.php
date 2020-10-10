<?php

    function contact(){
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'contact@latablen.saro.website';
    $email_subject = "新しいメッセージを受け取りました";
    $email_subject2 = "LA TABLE N: 新しいメッセージを受け取りました";

    $email_body =
    "名前: $name.\n".
    "メール: $visitor_email.\n".
    "メッセージ: $message.\n";

    $to = 'latablen@gmail.com';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);

    $to = "$visitor_email";
    $headers = "From: $email_from \r\n";
    $headers .= "La table N.\n返信はお問い合わせ後、2日以内にさせていただきます。\nレッスンのお申し込みについては、【申込みフォーム】からお願い致します。\n>携帯キャリアメールで受信をご希望の方は、@gmail.comからのメールを受信できるよう設定をお願い致します。 \r\n";
    mail($to,$email_subject2,$email_body,$headers);
}

function apply(){
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $date = $_POST['date'];
    $people = $_POST['people'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $adress = $_POST['address'];
    $accepted = $_POST['policy'];
    $email = 'latablen@gmail.com';
    $ID = rand(); "\n.";

    $email_from = 'admin@saro.website';
    $email_subject = "$name #LTBN-$ID$date$people 応募中";
    $email_subject2 = "申込みを承りました";

    $email_body =
    "受講希望日: $date.\n".
    "参加人数: $people 人.\n".
    "名前: $name.\n".
    "ご住所: $adress.\n".
    "携帯電話番号: $phone. \n".
    "メール: $visitor_email.\n".
    "備考欄: $message.\n".
    "ID: #LTBN-$ID$date$people.\n".
    "キャンセルポリシー: accepted ✓.\n";

    $to = 'contact@saro.website';
    mail($to,$email_subject,$email_body);

    $to = "$visitor_email";
    $headers = "From: $email_from \r\n";
    $headers .= "La table N.\nレッスンお申し込み/お問い合わせをいただき、誠にありがとうございます。\nこのメールは自動返信です。\nお申し込み後３日以内にご返信致しますので、期日内に返信がない場合は迷惑メールボックスに返信がないかをご確認の上、\n大変お手数ですが下記のメールアドレスまで再度お問い合わせいただけますようお願い申し上げます。\nメールアドレス： $email\n申込みフォームにてお送りいただいた内容は下記の通りです。\n回答まで、今しばらくお待ちくださいませ。 \r\n";
    mail($to,$email_subject2,$email_body,$headers);
}

$page = $_POST['page'];

if($page === "contact"){
    contact();
}elseif($page === "apply"){
    apply();
}

?>