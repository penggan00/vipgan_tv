function copyToClipboard(button) {
    const pre = button.parentElement;
    const code = pre.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        button.textContent = '已复制';
        setTimeout(() => {
            button.textContent = '复制';
        }, 2000);
    }).catch(err => {
        console.log('复制失败', err);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var dateElement = document.getElementById("lastModified");
    var creationDate = localStorage.getItem("creationDate");

    // 显示保存的创建日期
    dateElement.innerHTML = creationDate;
});

// 设置文章标题
document.getElementById('articleTitle').textContent = "Your Article Title";

