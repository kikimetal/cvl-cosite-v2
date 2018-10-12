<?php
mb_language("Japanese");
mb_internal_encoding("UTF-8");

if (!empty($_POST)) {
  $result = sendEmail($_POST);
  response_json($result);
} else {
  response_json(null);
}

// 与えられた object をもとに json string をレスポンスする
function response_json($obj) {
  if (!empty($obj)) {
    http_response_code(200);
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($obj);
  } else {
    http_response_code(404);
  }
}

// コンタクトフォームよりメールを送信
function sendEmail ($data) {

  // $to = "takahashi@maylily.co.jp";
  $to = "info@maylily.co.jp";
  $fromName = "メイリリィ WEBコンタクトフォーム";
  $fromAddress = "info@maylily.co.jp";

  // 全ての値をエスケープ
  foreach ($data as $value) {
    $value = htmlspecialchars($value);
  }

  $inputAllOK = true;
  foreach ($data as $key => $value) {
    if(!$value){
      $inputAllOK = false;
    }
  }

  if ($inputAllOK) {

    $subject = "[メイリリィ] お問い合わせを受け付けました。";
    $header = "From: " . mb_encode_mimeheader($fromName) . "<" . $fromAddress . ">";

    // HTML メールはなんか<html></html>のなかで変数展開がうまく行かない
    // $header .= "\r\n";
    // $header .= "Content-type: text/html; charset=UTF-8";

    $body_common =
      "このたびは当社ウェブサイトをご利用いただきまして、誠にありがとうございます。\n\n".
      "▼下記のお問い合わせ内容を受付いたしました。\n".
      "確認次第ご連絡いたしますので、少々お待ちください。\n".
      "_______________________________\n\n";

    $body_common .=
      "■会社名"."\n".
      $data["company"]."\n\n".
      "■会社名おくりがな"."\n".
      $data["companyOkurigana"]."\n\n".
      "■お名前"."\n".
      $data["name"]."\n\n".
      "■メールアドレス"."\n".
      $data["email"]."\n\n".
      "■電話番号"."\n".
      $data["phone"]."\n\n".
      "■郵便番号"."\n".
      $data["zipcode"]."\n\n".
      "■住所"."\n".
      $data["address"]."\n\n".
      "";

    $body_branch = "";
    if ($data["contactTypeOEM"] === "true") {
      $body_branch .=
        "■OEM製造品目"."\n".
        str_replace(",", "\n", $data["oemProductSelect"])."\n\n".
        "■OEM製造品名"."\n".
        $data["oemProductName"]."\n\n".
        "■OEM製造目的"."\n".
        str_replace(",", "\n", $data["oemObjectSelect"])."\n\n".
        "■OEMご希望数量"."\n".
        $data["oemNum"]."\n\n".
        "■OEMご希望納期"."\n".
        $data["oemDate"]."\n\n";
    } else {
      $body_branch .=
        "■お問い合わせ項目"."\n".
        str_replace(",", "\n", $data["contactContentSelect"])."\n\n";
    }

    $body_message = "■メッセージ本文"."\n".$data["message"]."\n";

    $body = $body_common . $body_branch . $body_message;

    mb_send_mail($data["email"], $subject, $body, $header);
    $sendEmailResult = mb_send_mail($to, $subject, $body, $header);
  }
  return $sendEmailResult || false; // true | false
} // function sendEmail
