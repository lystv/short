let res
  function shorturl() {
    if(document.querySelector("#text").value==""){
        alert("错误：长链地址不能为空，请重新输入!")
        return
    }

    document.getElementById("searchbtn").disabled=true;
	document.getElementById("searchbtn").innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>请稍等...马上缩短！！';
    fetch(window.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: document.querySelector("#text").value,key: document.querySelector("#key").value,hash: md5(document.querySelector("#text").value+document.querySelector("#password").value) })
    }).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    res = myJson;
    document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML=' 点击缩短';
    if(res.key!=="")
    document.getElementById("result").innerHTML=window.location.origin+res.key;
    $('#exampleModal').modal('show')
  }).catch(function(err){alert("未知错误 请重试！！");
  console.log(err);
  document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML=' 点击缩短';})
  }
  function copyurl (id, attr) {
    let target = null;

    if (attr) {
        target = document.createElement('div');
        target.id = 'tempTarget';
        target.style.opacity = '0';
        if (id) {
            let curNode = document.querySelector('#' + id);
            target.innerText = curNode[attr];
        } else {
            target.innerText = attr;
        }
        document.body.appendChild(target);
    } else {
        target = document.querySelector('#' + id);
    }

    try {
        let range = document.createRange();
        range.selectNode(target);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('Copy success')
    } catch (e) {
        console.log('Copy error')
    }

    if (attr) {
        // remove temp target
        target.parentElement.removeChild(target);
    }
  }
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
