!function () {
    setTimeout(function () {
        siteWelcome.classList.remove('active')
    }, 1000);
    //因为网速太快无法显示等待界面，所以延迟2s来显示等待界面
    // siteWelcome.classList.remove('active')
}.call()