// 在页面加载完成后执行
window.addEventListener('load', () => {
  // 页面加载完成后，先向下滑动
  window.scrollBy(0, window.innerHeight);

  // 等待一段时间后，再向上滑动
  setTimeout(() => {
    window.scrollBy(0, -window.innerHeight);
  }, 5);

  // 移除 画廊
  const elements = document.getElementsByClassName('recommended-swipe grid-anchor');
  const elementsArray = Array.from(elements);
  elementsArray.forEach(element => {
    element.remove();
  });

  // 移除广告
  removeNthParentNodesWithClass("bili-video-card__info--ad", 6);
});

// 找到一个子元素的第七个父节点并删除它
function removeNthParentOfChild(childElement, n) {
  let parent = childElement.parentElement;
  for (let i = 0; i < n; i++) {
    if (parent === null) {
      return; // 如果父节点不存在，直接返回
    }
    parent = parent.parentElement; // 循环找到第七个父节点
  }
  if (parent !== null) {
    parent.remove(); // 删除第七个父节点
  }
}


// 查找所有具有特定class的子元素，并删除其父节点
function removeNthParentNodesWithClass(className, n) {
  const elements = document.querySelectorAll('.' + className); // 查找所有具有特定class的元素
  elements.forEach(element => {
    // 删除父节点
    removeNthParentOfChild(element, n);
  });
}


