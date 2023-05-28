let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;



// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let hantei = document.querySelector('#print');
hantei.addEventListener('click', greeting);



/*
hantei();
hantei();
hantei();
hantei();
*/
 

// ボタンを押した後の処理をする関数 hantei() の定義

function greeting() {
    let i = document.querySelector('input[name="bangou"]');
    let bangou = i.value; 
    let yoso = bangou-0 ;

kaisu = kaisu +1
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    


 hantei ={kotoba: ["答えは "+kotae+" でした．すでにゲームは終わっています",
                      "正解です．おめでとう!",
                      "まちがい．残念でした答えは "+kotae+" です．",
                      "まちがい．答えはもっと大きいですよ",
                      "まちがい．答えはもっと小さいですよ"] 
}


//kaisu = Math.floor(Math.random()*10) + 1;
        //console.log(kaisu +"回目の予想は:"+yoso)

       
        let An = document.querySelector('span#answer');		
        An.textContent = yoso;
        let K = document.querySelector('span#kaisu');		
        K.textContent = kaisu;
       			



/*
    let A = document.createElement('span#kaisu');
    //A.textContent =(kaisu);
    let B = document.createElement('span#answer');
    //B.textContent =(yoso);
    //let C = document.createElement('p#result');
    //C2.textContent =(A+"回目の予想は:"+B);

    let C = document.querySelector('p#result');		

let C2 = document.createElement('p');				
C2.textContent = (A+"回目の予想は:"+B);							

C.insertAdjacentElement('afterend', C2);
*/



     let R = document.querySelector('p#result');		

if(kaisu >= 4){
        R.textContent = (hantei.kotoba[0])

}else if (kotae === yoso){
        R.textContent = (hantei.kotoba[1])
}else if (kaisu === 3){
        R.textContent = (hantei.kotoba[2])
}else if (kotae < yoso){
        R.textContent = (hantei.kotoba[4])
}else if(kotae > yoso){
        R.textContent = (hantei.kotoba[3])
}


}


/*}else if(kotae > yoso){
        console.log(hantei.kotoba[3])
}*/



  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
