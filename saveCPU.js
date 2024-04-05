// 在页面加载完成后执行
window.addEventListener('load', () => {
  // 页面加载完成后，先向下滑动
  window.scrollBy(0, window.innerHeight);

  // 等待一段时间后，再向上滑动
  setTimeout(() => {
    window.scrollBy(0, -window.innerHeight);
  }, 5);
});
