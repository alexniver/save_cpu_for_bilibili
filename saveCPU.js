// 在页面加载完成后执行
window.addEventListener('load', () => {
  // 页面加载完成后，先向下滑动
  window.scrollBy(0, window.innerHeight);

  // 等待一段时间后，再向上滑动
  setTimeout(() => {
    window.scrollBy(0, -window.innerHeight);
  }, 5);

  // 查找所有具有特定类名的元素
  const elements = document.getElementsByClassName('recommended-swipe-body');

  // 将HTMLCollection转换为数组，以便使用forEach方法
  const elementsArray = Array.from(elements);

  // 遍历数组，移除每个元素
  elementsArray.forEach(element => {
    element.remove();
  });
});
