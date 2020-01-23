var path=new Array("1.html","2.html","3.html","4.html","5.html"); //获取的文件名
var num=0;
for (var i=0; i<4; i++) //需要遍历四个文件i<4 需要遍历五个就i<5
{
    function createXmlHttp() {

        xmlHttp = new XMLHttpRequest()
        xmlHttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //sources =  escape(this.responseText);
                p = escape(this.responseText);
                console.log(p);
                senddata(path[num],p)
                num = num+1;
            }

        }
    }
    function createXmlHttp2() {
        xmlHttp2 = new XMLHttpRequest()
    }
    function getsource() {
        createXmlHttp()
        xmlHttp.open("GET", path[i], true);
        xmlHttp.send();
    }
    function senddata(filename,data){
        createXmlHttp2();
        nameds = filename;
        url = "http://localhost/pass.php";   //接收地址
        cc = "htmlcode=" + data +"&filename=" + nameds;
        xmlHttp2.open("POST", url, true);
        xmlHttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp2.send(cc);
    };
    getsource()
}