///////////////////////////////////////////////////////////////
//-------------------------百度----------------------------
///////////////////////////////////////////////////////////////
//
//搜索建议 
let URL = 'http://suggestion.baidu.com/su?wd=qq&cb=fn'

function baidu_sug0(keywords) {
    let p = new Promise((v, f) => {
        $.get("https://suggestion.baidu.com/su?wd=" + keywords, function(data) {
            v(data);
            sessionStorage.setItem(keywords, JSON.stringify(keywords))
            console.table(data);
        });
    })
    return p;
}
// baidu_sug0(qq)
///////////////百度跨源思路
function fn(data) {
    // alert(5)
    var ul = document.getElementById("list");
    var html = "";
    if (data.s.length) {
        ul.style.display = "block";
        for (var i = 0; i < data.s.length; i++) {
            html += '<li><span class="baiduResult">' + data.s[i] + '</span> <a class="b-link" target="_blank" href="http://www.baidu.com/s?wd=' + data.s[i] + ' "> ' + '百度搜索</a></li>';
        }
        ul.innerHTML = html;
    } else {
        ul.style.display = "none";
    }
}


let q = document.getElementById("serch");
q.onkeyup = function() {
    var ul = document.getElementById("list");

    if (this.value != '') {
        var script = document.createElement("script");
        script.src = 'http://suggestion.baidu.com/su?wd=' + this.value + '&cb=fn';
        document.body.appendChild(script);
    } else {
        ul.style.display = "none";
    }
}


/////////////////////////////////////////////

function baidu_sug1(keywords) {
    let p = new Promise((v, f) => {
        $.get("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + keywords, function(data) {
            v(data);
            sessionStorage.setItem(keywords, JSON.stringify(keywords))
            console.table(list);
        });
    })
    return p;
}



///////////////////////////////////////////////////////////////
//-------------------------谷歌----------------------------
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
//-------------------------淘宝---------------------------
///////////////////////////////////////////////////////////////

function taobao_sug(keywords) {
    let p = new Promise((v, f) => {
        $.get("http://suggest.taobao.com/sug?code=utf-8&q=" + keywords + "&callback=dachie", "", function(data) {
            v(data);
            sessionStorage.setItem(keywords, JSON.stringify(keywords))
            console.table(list);
        });
    })
    return p;
} //跨域问题解决
function ajax_ex(url) {
    var script = document.createElement("script");
    script.src = url; //+ '&cb=' + fn;
    document.body.appendChild(script);
};


//文档增加jqurey功能
function jqueryGet() {
    var script = document.createElement("script");
    script.src = 'https://code.jquery.com/jquery-3.6.0.js';
    document.head.appendChild(script);
    document.body.appendChild(script);
}
//文档增加bootstrap5功能
function bootstrapGet() {
    var script1 = document.createElement("script");
    script1.src = "https://cdn.staticfile.org/twitter-bootstrap/5.1.1/css/bootstrap.min.css";
    var script2 = document.createElement("script");
    script2.src = "https://cdn.staticfile.org/twitter-bootstrap/5.1.1/js/bootstrap.bundle.min.js";
    document.head.appendChild(script1);
    document.head.appendChild(script2);
}