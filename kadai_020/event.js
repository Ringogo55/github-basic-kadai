//btnというid要素を持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//HTML要素がクリックされた時にイベント実行する
btn.addEventListener('click', () => {
  
  //textというid要素を持つHTML要素に「クリックしました」と表示する
  text.textContent = 'ボタンをクリックしました'
})