// 在页面加载完成后执行
window.addEventListener('load', () => {
  // 页面加载完成后，先向下滑动
  window.scrollBy(0, window.innerHeight);

  // 等待一段时间后，再向上滑动
  setTimeout(() => {
    window.scrollBy(0, -window.innerHeight);
  }, 50);

  // 移除 side ad 画廊
  const needRemoveClassList = ['ad-report video-card-ad-small', 'recommended-swipe grid-anchor'];
  const needRemoveArray = Array.from(needRemoveClassList);
  needRemoveArray.forEach(needRemoveClass => {
    const elements = document.getElementsByClassName(needRemoveClass);
    const elementsArray = Array.from(elements);
    elementsArray.forEach(element => {
      element.remove();
    });
  });


  // 创建一个MutationObserver实例
  const observer = new MutationObserver(mutationsList => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList' || mutation.type === 'characterData') {
        // 移除广告
        const needRemoveAdList = ["feed-card", "bili-video-card is-rcmd"]
        // 或者使用forEach方法遍历数组
        needRemoveAdList.forEach(needRemoveAd => {
          const cards = document.getElementsByClassName(needRemoveAd); // 查找所有具有特定class的元素
          const cardsArray = Array.from(cards);
          cardsArray.forEach(element => {
            // 查找子结点中是否有 bili-video-card__info--ad
            if (element.querySelectorAll('.bili-video-card__info--ad').length > 0) {
              element.remove();
            }
          });
        });
      }
    }
  });
  // 配置观察选项
  const config = { childList: true, subtree: true, characterData: true };
  const layout_elements = document.querySelectorAll('.win');
  layout_elements.forEach(element => {
    // 用MutationObserver实例开始观察目标节点
    observer.observe(element, config);
  });

});
