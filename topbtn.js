let mybutton = document.getElementById("goTop");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };



    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }