/**
 * Created by Administrator on 2020/6/12.
 */

var dateArray=[
    {"排名":"1","姓名":"aaa","普通票":"111","真爱票":"1276","积分":"566330"},
    {"排名":"1","姓名":"aaa","普通票":"111","真爱票":"1276","积分":"566330"},
    {"排名":"1","姓名":"aaa","普通票":"111","真爱票":"1276","积分":"566330"},
    {"排名":"1","姓名":"aaa","普通票":"111","真爱票":"1276","积分":"566330"},
    {"排名":"1","姓名":"aaa","普通票":"111","真爱票":"1276","积分":"566330"},
    {"排名":"1","姓名":"aaa","普通票":"111","真爱票":"1276","积分":"566330"},
    {"排名":"1","姓名":"aaa","普通票":"111","真爱票":"1276","积分":"566330"},
    {"排名":"1","姓名":"aaa","普通票":"111","真爱票":"1276","积分":"566330"},
    {"排名":"1","姓名":"aaa","普通票":"111","真爱票":"1276","积分":"566330"},
    {"排名":"1","姓名":"aaa","普通票":"111","真爱票":"1276","积分":"566330"}
];
var dateArraymale=[
    {"排名":"1","姓名":"aila","普通票":"1321","真爱票":"1212","积分":"26330"},
    {"排名":"1","姓名":"aila","普通票":"1321","真爱票":"1212","积分":"26330"},
    {"排名":"1","姓名":"aila","普通票":"1321","真爱票":"1212","积分":"26330"},
    {"排名":"1","姓名":"aila","普通票":"1321","真爱票":"1212","积分":"26330"},
    {"排名":"1","姓名":"aila","普通票":"1321","真爱票":"1212","积分":"26330"},
    {"排名":"1","姓名":"aila","普通票":"1321","真爱票":"1212","积分":"26330"},
    {"排名":"1","姓名":"aila","普通票":"1321","真爱票":"1212","积分":"26330"},
    {"排名":"1","姓名":"aila","普通票":"1321","真爱票":"1212","积分":"26330"},
    {"排名":"1","姓名":"aila","普通票":"1321","真爱票":"1212","积分":"26330"},
    {"排名":"1","姓名":"aila","普通票":"1321","真爱票":"1212","积分":"26330"}
];
function a() {
  var a=document.getElementById('j-rank');
    a.style.backgroundImage="url(../imagine/rank-icon1.png) ";
    a.style.backgroundPosition = "0 0";
    a.style.backgroundSize="200%";
    var b=document.getElementById('c-rank');
    b.style.backgroundImage="url(../imagine/rank-icon1.png) ";
    b.style.backgroundPosition = "-232px 0";
    b.style.backgroundSize=" 200% ";
    var c=document.getElementById('male-rank');
    c.style.backgroundImage="url(../imagine/rank-icon1.png) ";
    c.style.backgroundPosition = " 0 -50px";
    c.style.backgroundSize=" 200% ";
    var d=document.getElementById('female-rank');
    d.style.backgroundImage="url(../imagine/rank-icon1.png) ";
    d.style.backgroundPosition = "-232px -50px";
    d.style.backgroundSize=" 200% ";

}
function styleMale() {

    var male1=document.getElementById('j-rank');
    male1.style.backgroundImage="url(../imagine/male.icon.png) ";
    male1.style.backgroundPosition = "0 -20px";
    // male1.style.backgroundRepeat="no-repeat";
    // male1.style.backgroundSize=" 0";
    var male2=document.getElementById('c-rank');
    male2.style.backgroundImage="url(../imagine/male.icon.png) ";
    male2.style.backgroundPosition = "-232px -20px";
    // male2.style.backgroundSize=" 0";
    var male3=document.getElementById('male-rank');
    male3.style.backgroundImage="url(../imagine/male.icon.png) ";
    male3.style.backgroundPosition = "0 -70px";
    // male3.style.backgroundSize=" 0";
    var male4=document.getElementById('female-rank');
    male4.style.backgroundImage="url(../imagine/male.icon.png) ";
    male4.style.backgroundPosition = "-232px -70px";
    // male4.style.backgroundSize=" 0";
    var table=document.getElementById('rt');
    table.innerHTML='';
    table.innerHTML='<th>排名</th> <th>姓名</th> <th>普通票</th> <th>真爱票</th> <th>积分</th>';
    table.innerHTML='<tr style="color: #D9534F" >  <td><img src="../imagine/member-sort-1.png" height="24" width="30"/></td> <td>'+dateArraymale[1].姓名+'</td><td>'+dateArraymale[1].普通票+'</td><td>'+dateArraymale[1].真爱票+'</td><td>'+dateArraymale[1].积分+'</td></tr>';
    // table.innerHTML='<tr style="color: #D9534F" >  <td><img src="../imagine/member-sort-2.png" height="24" width="30"/></td> <td>'+dateArray[2].姓名+'</td><td>'+dateArray[2].普通票+'</td><td>'+dateArray[2].真爱票+'</td><td>'+dateArray[2].积分+'</td></tr>';
    // table.innerHTML='<tr style="color: #D9534F" >  <td><img src="../imagine/member-sort-3.png" height="24" width="30"/></td> <td>'+dateArray[3].姓名+'</td><td>'+dateArray[3].普通票+'</td><td>'+dateArray[3].真爱票+'</td><td>'+dateArray[3].积分+'</td></tr>';
    for(var ii=3;ii<dateArray.length;ii++){
        table.innerHTML+='<tr> <td>'+dateArraymale[ii].排名+'</td><td>'+dateArraymale[ii].姓名+'</td><td>'+dateArraymale[ii].普通票+'</td><td>'+dateArraymale[ii].真爱票+'</td><td>'+dateArraymale[ii].积分+'</td></tr>'
    }
}

function styleFemale() {
    var male1=document.getElementById('j-rank');
    male1.style.backgroundImage="url(../imagine/female-icon.png)";
    male1.style.backgroundPosition = "0 -20px";
    var male2=document.getElementById('c-rank');
    male2.style.backgroundImage="url(../imagine/female-icon.png)  ";
    male2.style.backgroundPosition = "-232px -20px";
    var male3=document.getElementById('male-rank');
    male3.style.backgroundImage="url(../imagine/female-icon.png)";
    male3.style.backgroundPosition = "  0 -70px";
    var male4=document.getElementById('female-rank');
    male4.style.backgroundImage="url(../imagine/female-icon.png) ";
    male4.style.backgroundPosition = " -232px -70px" ;
    var table=document.getElementById('rt');
    table.innerHTML='';
    table.innerHTML='<th>排名</th> <th>姓名</th> <th>普通票</th> <th>真爱票</th> <th>积分</th>';

    table.innerHTML='<tr style="color: #D9534F" >  <td><img src="../imagine/member-sort-1.png" height="24" width="30"/></td> <td>'+dateArray[1].姓名+'</td><td>'+dateArray[1].普通票+'</td><td>'+dateArray[1].真爱票+'</td><td>'+dateArray[1].积分+'</td></tr>';
    // table.innerHTML='<tr style="color: #D9534F" >  <td><img src="../imagine/member-sort-2.png" height="24" width="30"/></td> <td>'+dateArray[2].姓名+'</td><td>'+dateArray[2].普通票+'</td><td>'+dateArray[2].真爱票+'</td><td>'+dateArray[2].积分+'</td></tr>';
    // table.innerHTML='<tr style="color: #D9534F" >  <td><img src="../imagine/member-sort-3.png" height="24" width="30"/></td> <td>'+dateArray[3].姓名+'</td><td>'+dateArray[3].普通票+'</td><td>'+dateArray[3].真爱票+'</td><td>'+dateArray[3].积分+'</td></tr>';
    for(var ii=3;ii<dateArray.length;ii++){
        table.innerHTML+='<tr> <td>'+dateArray[ii].排名+'</td><td>'+dateArray[ii].姓名+'</td><td>'+dateArray[ii].普通票+'</td><td>'+dateArray[ii].真爱票+'</td><td>'+dateArray[ii].积分+'</td></tr>'
    }
}
function colorChange() {
    var a=document.getElementById('male-rank');
    a.style.backgroundColor="#00aed7";
}
function colorChange2() {
    var a=document.getElementById('female-rank');
    a.style.backgroundColor="#00aed7";
}
