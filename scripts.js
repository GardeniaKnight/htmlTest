// 用于切换页面的函数
function changePage(pageNumber) {
  // 隐藏所有页面
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
      page.style.display = 'none';
  });

  // 显示选中的页面
  const selectedPage = document.getElementById(`page${pageNumber}`);
  selectedPage.style.display = 'block';
}

// 播放/暂停视频
function togglePlay() {
  const video = document.getElementById('videoPlayer');
  if (video.paused) {
      video.play();
  } else {
      video.pause();
  }
}

// 初始化：显示第一个页面
document.addEventListener('DOMContentLoaded', () => {
  changePage(1);
});

// 提交表单并创建文本文件（模拟）
function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  if (!name || !email) {
      alert('请填写所有字段');
      return;
  }

  // 模拟创建文本文件
  const content = `姓名: ${name}\n邮箱: ${email}`;
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'user-info.txt';
  link.click();

  // 清空表单
  document.getElementById('userForm').reset();
}

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
  });
}

window.onload = function() {
  initMap();
};