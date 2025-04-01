(() => {
  const waitFor = (query, callback, scopeNode = document) => {
    const queryNode = scopeNode.querySelector(query);
    if(queryNode) {
      callback && callback(queryNode);
    } else {
      const observerCallback = new MutationObserver(() => {
        const observerQueryNode = scopeNode.querySelector(query);
        if(observerQueryNode) {
          observerCallback.disconnect();
          callback && callback(observerQueryNode);
        }
      });
      observerCallback.observe(scopeNode, { attributes: true, subtree: true, childList: true });
    }
  };

  [
    Document,
    Element,
    HTMLElement,
    Node
  ].forEach(NativeClass => {
    NativeClass.prototype.waitFor = function (query, callback) { return waitFor(query, callback, this); };
  });

  window.waitFor = waitFor;
})();
