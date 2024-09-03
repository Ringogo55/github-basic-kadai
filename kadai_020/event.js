//btnというid要素を持つHTML要素を取得し、定数に代入する
const btnElement = document.getElementById('btn');

//textというid要素を持つHTML要素を取得する
const textElement = document.getElementById('text');

//HTML要素がクリックされた時にイベント実行する
btnElement.addEventListener('click', () => {

  textElement.textContent = 'ボタンをクリックしました'
})