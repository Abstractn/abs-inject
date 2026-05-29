(() => {
  /**
   * @param {string} query
   * @param {function} callback
   * @param {HTMLElement} [scopeNode]
   */
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

  /**
   * 
   * @param {HTMLElement} node
   * @param {(mutations: MutationRecord[], stop: () => void) => void} callback
   * @param {MutationObserverInit} [options]
   * @returns {() => void}
   */
  const onDomChanges = (node, callback, options) => {
    const observerOptions = {
      attributes: options?.attributes ?? true,
      subtree: options?.subtree ?? true,
      childList: options?.childList ?? true,
    };

    const obs = new MutationObserver((mutationList) => {
      callback && callback(mutationList, () => obs.disconnect());
    });
    obs.observe(node, observerOptions);
    return () => obs.disconnect();
  };

  [
    Document,
    Element,
    HTMLElement,
    Node
  ].forEach(NativeClass => {
    NativeClass.prototype.waitFor = function (query, callback) { return waitFor(query, callback, this); };
    NativeClass.prototype.onDomChanges = function (callback, options) { return onDomChanges(this, callback, options); };
  });

  window.waitFor = waitFor;
  window.onDomChanges = onDomChanges;
})();
