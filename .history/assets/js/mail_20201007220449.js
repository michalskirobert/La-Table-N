// var response = grecaptcha.getResponse();

var successMsg =
  "メッセージが送信されました。 <br /> お問い合わせありがとうございます。 <br /> ご記入いただいたメールアドレス宛に、<br> 確認メールを送信しております。";
var failMsg =
  "メールを送信できませんでした。<br /> 内容をご確認の上、<br> 再度お試し下さい。";
var failCaptcha =
  "キャプチャーをご確認下さい。<br> ご確認いただけない場合は、<br> お客様のアカウントは <br> ロボットとみなします🤖";
var captchaIssue =
  "キャプチャーに問題が発生しています。<br> レポート機能から、<br> こちらの内容の報告をお願い致します。";

var emailValid = document.querySelector(".emailValid");
var nameValid = document.querySelector(".nameValid");

//contact form
function sendMail() {

  var email = document.querySelector("#email").value;
  var name = document.querySelector("#name").value;
  var msg = document.querySelector("#message").value;
  var page = document.querySelector("#pageTwo").value;


  if (name === "") {
    nameValid.innerHTML = "お名前(必須) ✘";
    nameValid.style.color = "#e91e63;";
    document.querySelector("#name").style.border = "#e91e63;";
    document.querySelector("#name").focus();
    return false;
  } else {
    nameValid.style.color = "#52E5BA";
    nameValid.innerHTML = "お名前 ✓";
    document.querySelector("#name").style.border = "1px solid #52E5BA";
  }

  if (email === "") {
    emailValid.innerHTML = "メールアドレス(必須) ✘";
    nameValid.style.color = "#e91e63;";
    document.querySelector("#email").style.border = "#e91e63;";
    document.querySelector("#email").focus();
    return false;
  }else {
    emailValid.style.color = "#52E5BA";
    emailValid.innerHTML = "メールアドレス ✓";
    document.querySelector("#email").style.border = "1px solid #52E5BA";
  }

  if(message !== ""){
    document.querySelector("#message").style.border = "1px solid #52E5BA";
  }

  var formdata = new FormData();
  formdata.append("email", email);
  formdata.append("name", name);
  formdata.append("message", msg);
  formdata.append("page", page);

  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("sent").style.display = "block";
      document.getElementById("error").style.display = "none";
      document.getElementById("sent").innerHTML = successMsg;
    } else if (this.readyState == 4 && this.status != 200) {
      document.getElementById("error").style.display = "block";
       document.getElementById("sent").style.display = "none";
      document.getElementById("error").innerHTML = failMsg;
    }
  };

  xhttp.open("POST", "./send.php", true);
  xhttp.send(formdata);
}

//Apply
function sendApply() {

  var email = document.querySelector("#applyMail").value;
  var name = document.querySelector("#applyName").value;
  var msg = document.querySelector("#message").value;
  var page = document.querySelector("#page").value;
  var date = document.querySelector("#applyDate").value;
  var phone = document.querySelector("#phone").value;
  var people = document.querySelector("#applyPeople").value;
  var address = document.querySelector("#applyAddress").value;
  var policy = document.querySelector("#policy").value;
  var nameApplyValid = document.querySelector(".nameApplyValid");
  var emailApplyValid = document.querySelector(".emailApplyValid");
  var dateValid = document.querySelector(".dateValid");
  var phoneValid = document.querySelector(".phoneValid");
  var peopleValid = document.querySelector(".peopleValid");
  var policyValid = document.querySelector(".policyValid");

  if (name === "") {
    nameApplyValid.innerHTML = "お名前(必須) ✘";
    nameApplyValid.style.color = "#e91e63;";
    document.querySelector("#applyName").style.border = "#e91e63;";
    document.querySelector("#applyName").focus();
    return false;
  } else {
    nameApplyValid.style.color = "#52E5BA";
    nameApplyValid.innerHTML = "お名前 ✓";
    document.querySelector("#applyName").style.border = "1px solid #52E5BA";
  }

  if (email === "") {
    emailApplyValid.innerHTML = "メールアドレス(必須) ✘";
    emailApplyValid.style.color = "#e91e63;";
    document.querySelector("#applyMai").style.border = "#e91e63;";
    document.querySelector("#applyMail").focus();
    return false;
  }else {
    emailApplyValid.style.color = "#52E5BA";
    emailApplyValid.innerHTML = "メールアドレス ✓";
    document.querySelector("#applyMail").style.border = "1px solid #52E5BA";
  }

  if (date === "") {
    dateValid.innerHTML = "受講希望日(必須) ✘";
    dateValid.style.color = "#e91e63;";
    document.querySelector("#applyDate").style.border = "#e91e63;";
    document.querySelector("#applyDate").focus();
    return false;
  }else {
    dateValid.style.color = "#52E5BA";
    dateValid.innerHTML = "受講希望日 ✓";
    document.querySelector("#applyDate").style.border = "1px solid #52E5BA";
  }

  if (phone === "") {
    phoneValid.innerHTML = "携帯電話番号(必須) ✘";
    phoneValid.style.color = "#e91e63;";
    document.querySelector("#phone").style.border = "#e91e63;";
    document.querySelector("#phone").focus();
    return false;
  }else {
    phoneValid.style.color = "#52E5BA";
    phoneValid.innerHTML = "携帯電話番号 ✓";
    document.querySelector("#phone").style.border = "1px solid #52E5BA";
  }

  if (people === "") {
    peopleValid.innerHTML = "参加人数(必須) ✘";
    peopleValid.style.color = "#e91e63;";
    document.querySelector("#applyPeople").style.border = "#e91e63;";
    document.querySelector("#applyPeople").focus();
    return false;
  }else {
    peopleValid.style.color = "#52E5BA";
    peopleValid.innerHTML = "参加人数 ✓";
    document.querySelector("#applyPeople").style.border = "1px solid #52E5BA";
  }

  if (document.querySelector("#policy").checked === false) {
    policyValid.innerHTML = "クラスポリシー(必須) ✘";
    policyValid.style.color = "#e91e63;";
    document.querySelector("#policy").style.border = "#e91e63;";
    document.querySelector("#policy").focus();
    return false;
  }else {
    policyValid.style.color = "#52E5BA";
    policyValid.innerHTML = "クラスポリシー ✓";
    document.querySelector("#policy").style.border = "1px solid #52E5BA";
  }

  document.querySelector("#applyAddress").style.border = "1px solid #52E5BA";
  document.querySelector("#phone").style.border = "1px solid #52E5BA";


  var formdata = new FormData();
  formdata.append("email", email);
  formdata.append("name", name);
  formdata.append("message", msg);
  formdata.append("page", page);
  formdata.append("date", date);
  formdata.append("phone", phone);
  formdata.append("people", people);
  formdata.append("address", address);
  formdata.append("policy", policy);

  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("sentApply").style.display = "block";
      document.getElementById("errorApply").style.display = "none";
      document.getElementById("sentApply").innerHTML = successMsg;
    } else if (this.readyState == 4 && this.status != 200) {
      document.getElementById("errorApply").style.display = "block";
      document.getElementById("sentApply").style.display = "none";
      document.getElementById("errorApply").innerHTML = failMsg;
    }
  };

  xhttp.open("POST", "./send.php", true);
  xhttp.send(formdata);
}
