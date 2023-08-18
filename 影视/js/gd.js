const textContainer = document.querySelector('.text-container');

    let scrolling = true;

    function autoScroll() {
        if (scrolling) {
            textContainer.scrollTop += 1.5; // 调整滚动速度，根据需要调整
            if (textContainer.scrollTop >= textContainer.scrollHeight - textContainer.clientHeight) {
                // 滚动到底部时回到顶部
                textContainer.scrollTop = 0;
            }
        }
    }

    setInterval(autoScroll, 50); // 调整滚动间隔，根据需要调整

    textContainer.addEventListener('mouseover', () => {
        scrolling = false;
    });

    textContainer.addEventListener('mouseout', () => {
        scrolling = true;
    });