
let KID;
let ID ={
    id: [360630,524901,993800] 
};
KID = ID.id[0];
//for (let n of ID.id) {
  //      console.log(n);
//}    


/*    let b = document.querySelector('button#btn');
b.addEventListener('click', showSelectResult);

function showSelectResult() {
    let s = document.querySelector('select#kuni');
    let idx = s.selectedIndex;
    let os = s.querySelectorAll('option');  
    let o = os.item(idx);      

    console.log('  value=' + o.getAttribute('value'));
    console.log('  textContent='+o.textContent);
    */
    
    let b = document.querySelector('#sendRequest');
    b.addEventListener('click', sendRequest);

function sendRequest() {
    
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}
// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }






    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);


}










// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
