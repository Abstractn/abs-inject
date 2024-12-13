(function(){
  [
    Document,
    Element,
    HTMLElement,
    Node
  ].forEach(NativeClass => {
    NativeClass.prototype.waitFor = function (query, callback) {
      const queryNode = this.querySelector(query);
      if(queryNode) {
        callback && callback(queryNode);
      } else {
        const observerCallback = new MutationObserver(() => {
          const observerQueryNode = this.querySelector(query);
          if(observerQueryNode) {
            observerCallback.disconnect();
            callback && callback(observerQueryNode);
          }
        });
        observerCallback.observe(this, { attributes: true, subtree: true, childList: true });
      }
    };
  });
})();
