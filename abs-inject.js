(function(){
  [
    Document,
    Element,
    HTMLElement,
    Node
  ].forEach(NativeClass => {
    NativeClass.prototype.waitFor = function (query, callback) {
      const observerCallback = new MutationObserver(() => {
        const queryNode = this.querySelector(query);
        if(queryNode) {
          observerCallback.disconnect();
          callback && callback(queryNode);
        }
      });
      observerCallback.observe(this, { attributes: true, subtree: true, childList: true });
    };
  });
})();
