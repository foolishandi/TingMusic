//组件初始化
var load2 = "";
load2 += "<div class=\"xxx\">";
load2 += "<span class=\"loading\"><\/span>";
load2 += "<span class=\"loading\"><\/span>";
load2 += "<span class=\"loading\"><\/span>";
load2 += "<span class=\"loading\"><\/span>";
load2 += "<span class=\"loading\"><\/span>";
load2 += "<span class=\"loading\"><\/span>";
load2 += "<\/div>";
var words_rest = '<p class="l1">---</p><p class="l2">---:</p><p class="l3 active">正在播放</p><p class="l4">---</p><p class="l5">---</p>'
var detail_rest = '<span>歌曲</span><span class="singer  text-light">-歌手</span><span class="album  text-light">-专辑</span>'
var nowlric_rest = '---歌词---'
var laoding = '<div class="xxx"><span></span><span></span><span></span><span></span></div>';
//数据相关
var qq = JSON.parse(localStorage.getItem("17628097136"))
    //初始网址
var domain = 'https://mu-two.vercel.app'
var localUrl = location.href;
var testMusic = "http://m702.music.126.net/20220505002924/c133d7e76d240d9a72a863e4457755d6/jd-musicrep-ts/4600/a5fa/c85f/555d31856cd048d0635a8903e3fdce2c.mp3";
//全局wyy对象初始化
let app = new personSong('', '', '.main_cont tbody');
app.getSingerDetail(11972054).then(e => {
    allSave('aa', e)
})