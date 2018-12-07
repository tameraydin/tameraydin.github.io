(function() {
  var doc = document;
  var win = window;
  var addEventListenerMethod = win.addEventListener ? 'addEventListener' : 'attachEvent';

  setActivePage();
  win[addEventListenerMethod]('hashchange', setActivePage);

  addEventListenerByTagName('LABEL', 'click', function(event) {
    setTimeout(this.parentNode.lastElementChild.scrollIntoView.bind(this), 0);
  });

  function getActiveSectionFromHash() {
    return win.location.hash && win.location.hash.substr(1);
  }

  function setActivePage() {
    var section = getActiveSectionFromHash();
    if (section) {
      var sectionEl = doc.getElementById(section);
      doc.body.setAttribute('data-page', section);
      sectionEl && doc.getElementById(section).scrollIntoView();
    }
  }

  function addEventListenerByTagName(tagName, event, fn) {
    var list = document.getElementsByTagName(tagName);
    for (var i = 0, len = list.length; i < len; i++) {
      list[i][addEventListenerMethod](event, fn);
    }
  }
})();
