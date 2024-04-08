// 在页面加载完成后执行
window.addEventListener('load', () => {
  setTimeout(() => {
    // 移除 side ad 画廊
    const needRemoveClassList = ['ad-report video-card-ad-small'];
    const needRemoveArray = Array.from(needRemoveClassList);
    needRemoveArray.forEach(needRemoveClass => {
      const elements = document.getElementsByClassName(needRemoveClass);
      const elementsArray = Array.from(elements);
      elementsArray.forEach(element => {
        element.remove();
      });
    });
  }, 800);
});
