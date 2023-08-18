// JavaScript 代码用于折叠和展开导航项
  document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var navItems = navbar.children;
    var moreBtn = document.getElementById("moreBtn");
    var navListContainer = document.getElementById("navListContainer");
    var navList = document.getElementById("navList");

    if (navItems.length > 3) {
      // 超过3个导航项时进行折叠
      for (var i = 3; i < navItems.length; i++) {
        navItems[i].classList.add("hidden-nav-items");
      }

      // 显示更多按钮
      moreBtn.style.display = "inline-block";

      // 更多按钮点击事件
      moreBtn.addEventListener("click", function() {
        // 显示超级导航列表窗口
        navListContainer.classList.toggle("hidden");

        // 构建导航项列表
        navList.innerHTML = "";
        for (var i = 3; i < navItems.length; i++) {
          var clonedNavItem = navItems[i].cloneNode(true);
          navList.appendChild(clonedNavItem);
        }
      });
    }
  });