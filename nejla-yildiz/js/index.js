(function() {
  var doc = document;
  var win = window;

  setActivePage();
  (win.addEventListener || win.attachEvent)('hashchange', setActivePage);

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
})();
