$('.copy-btn').click(function () {
            let id = $(this).attr('id')
            copy('#' + id)
        })
        function copy(id) {
            let clipboard = new ClipboardJS(id);
            clipboard.on('success', function (e) {
                console.log(e);
                alert('𝓵𝔂提醒您：已复制成功！')
                clipboard.destroy();//解决多次弹窗问题
            });
            clipboard.on('error', function (e) {
                console.log(e);
                alert('此处为空 请复制已有接口配置')
                clipboard.destroy();//解决多次弹窗问题
            });
        }