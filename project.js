
let ID ={
    id: [360630,524901,993800,1816670,1850147,1880252,2147714,2643743,2968815,3451189,5128581,5368361] 
};
    let b = document.querySelector('#sendRequest');
    b.addEventListener('click', sendRequest);

function sendRequest() {

    //let KID;

//KID = ID.id[0];
for (let id of ID.id) {

    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id +'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
    }
}
// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

 let B = document.querySelector('button#btn');
B.addEventListener('click', showSelectResult);

function showSelectResult() {
    let s = document.querySelector('select#kuni');
    let idx = s.selectedIndex;
    let os = s.querySelectorAll('option');  
    let o = os.item(idx);      

    console.log('  textContent='+o.textContent);
    
    if(o.textContent == data.name){

    



    // data をコンソールに出力
    //console.log(data);

    // data.x を出力
    console.log(data.x);

    let An = document.querySelector('span#answer');		
        An.textContent = "都市名  "+data.name;
        let Bn = document.querySelector('span#B');		
        Bn.textContent = "天気  "+data.weather[0].description;
        let Cn = document.querySelector('span#C');		
        Cn.textContent = "最低気温  "+data.main.temp_min +"度";
        let Dn = document.querySelector('span#D');		
        Dn.textContent = "最高気温  "+data.main.temp_max +"度";
        let En = document.querySelector('span#E');		
        En.textContent = "湿度  "+data.main.humidity;
        let Fn = document.querySelector('span#F');		
        Fn.textContent = "風速  "+data.wind.speed;
        let Gn = document.querySelector('span#G');		
        Gn.textContent = "風向  "+data.wind.deg;
        let Hn = document.querySelector('span#H');		
        Hn.textContent = "緯度  "+data.coord.lon +"度";
        let In = document.querySelector('span#I');		
        In.textContent = "経度  "+data.coord.lat +"度";
    }
}
}











// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}





   
    