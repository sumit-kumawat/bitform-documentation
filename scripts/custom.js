// TAWK.to API START
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/60eac4b6d6e7610a49aab375/1faah0r3e';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

// TAWK.to API END


document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keyup', function (e) {
    console.log('sdf', e.key)
    if (e.key === '/') {
      document.querySelector('.navbar__search-input').focus()
    }
  })
})


