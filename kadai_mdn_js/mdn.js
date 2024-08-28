//今日の日付を取得
const today = new Date();

//今日の年を取得
const year = today.getFullYear();

//今日の月を取得　但し1月=0
const month = today.getMonth();

//今日の日付を取得
const day = today.getDate();

//年月日を書き出し　但し月は+1とする
console.log( year + '年' + (month+1) + '月' + day + '日')
