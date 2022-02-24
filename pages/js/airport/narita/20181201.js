var img_narita_airport_20181201_1 = new Array("https://github.com/unarikov/shosenmon/pages/img/airport/narita/20181201/l1_p1.png",
                                              "https://github.com/unarikov/shosenmon/pages/img/airport/narita/20181201/l1_p2.png",
                                              "https://github.com/unarikov/shosenmon/pages/img/airport/narita/20181201/l1_p3.png",
                                              "https://github.com/unarikov/shosenmon/pages/img/airport/narita/20181201/l1_p4.png");
//表示する画像のリスト
var naritaairport20181201 = -1;
//カウンタ初期化
naritaairport20181201_graph();
//成田空港アニメーション処理
 
function naritaairport20181201_graph(){
//成田空港アニメーション処理
  if (naritaairport20181201 == 3){
//カウンタがMAX
    naritaairport20181201 = 0;
//カウンタを最初に
  } 
  else {
//カウンタはMAX以外
    naritaairport20181201 ++;
//カウンタ加算
  }
  document.getElementById("narita_airport_20181201_1").src=img_narita_airport_20181201_1[naritaairport20181201];
//imgタグのid test1_animeのsrc設定
  setTimeout("naritaairport20181201_graph()",5000); 
//最初の表示秒数分タイムアウト

  
}
