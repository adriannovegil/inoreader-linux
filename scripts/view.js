var view = document.getElementById('view');
var loader = document.querySelector('.loader');

var checkLink = function (e) {
  var link;

  if (e.target.nodeName === 'A') {
    link = e.target;
  } else if (e.target.parentNode.nodeName === 'A') {
    link = e.target.parentNode;
  }


  if (link && link.href !=='' && !link.href.endsWith('#') &&
      !link.href.startsWith('http://www.inoreader.com/')) {
    e.preventDefault();
    gui.Shell.openExternal(link.href);
  }
};

var redirectLink = function (winFrame) {

  var links = winFrame.document.querySelectorAll('a');

  winFrame.addEventListener('click', checkLink);
};

view.addEventListener('load', function () {

  var winFrame = this.contentWindow;

  /*if (winFrame.location.href === 'http://www.inoreader.com/') {
    winFrame.location.href = 'http://www.inoreader.com/';
  } else {
    loader.className = 'loader hide';
  }*/

  // Once the page is loaded, hide the loading layer
  loader.className = 'loader hide';

  winFrame.onbeforeunload = function(e) {
    loader.className = 'loader';
  };

  winFrame.popup = function (url, title, w, h) {

    var oldHref = window.location.href;

    var win = gui.Window.open(url, {
      toolbar: false,
      position: 'center',
      title: title,
      width: w,
      height: h
    });

    win.on('close', function() {
      this.hide();
      this.close();
      window.location.href = oldHref;
    });

    return win;
  }

  redirectLink(winFrame);
});
