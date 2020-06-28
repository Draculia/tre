/**
 * Created by Administrator on 2019/7/11.
 */

    function a() {
        var name=document.getElementById('user-name').value;
        var password=document.getElementById('password').value;
        if(name==""||password==""){
            alert("账户名或密码不能为空！");
        }
        else {
            alert("登陆成功！");
            // setTimeout("javascript:location.href='index.html'", 2000);
            window.location.href='index.html';
        }

    }


