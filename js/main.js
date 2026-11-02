// Mail y teléfono van codificados para que los bots no los lean del HTML; se muestran al hacer click.
var contact = { mail: 'YWRyaWFuYW1jYWxlcm9AZ21haWwuY29t', tel: 'KzU0IDM1MSAyODIgMzE4Ng==' };
document.querySelectorAll('.reveal').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var kind = btn.dataset.reveal;
    var value = atob(contact[kind]);
    document.querySelectorAll('[data-field="' + kind + '"]').forEach(function (el) { el.textContent = value; });
    document.querySelectorAll('[data-reveal="' + kind + '"]').forEach(function (b) { b.hidden = true; });
    document.querySelectorAll('.copy[data-target="' + kind + '"]').forEach(function (b) { b.hidden = false; });
  });
});

// Descargar PDF: muestra mail y teléfono, carga las fotos diferidas y abre el diálogo de impresión.
document.querySelectorAll('.pdf-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.reveal').forEach(function (b) { if (!b.hidden) b.click(); });
    var pending = Array.prototype.map.call(document.images, function (img) {
      img.loading = 'eager';
      if (img.complete) return null;
      return new Promise(function (resolve) { img.onload = img.onerror = resolve; });
    });
    Promise.all(pending).then(function () { window.print(); });
  });
});

document.querySelectorAll('.copy').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var el = document.getElementById(btn.dataset.target);
    var text = el.textContent.trim();
    function done() { btn.textContent = 'Copiado'; setTimeout(function () { btn.textContent = 'Copiar'; }, 1600); }
    function fallback() {
      var r = document.createRange(); r.selectNodeContents(el);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      btn.textContent = 'Seleccionado';
      setTimeout(function () { btn.textContent = 'Copiar'; }, 1600);
    }
    try {
      navigator.clipboard.writeText(text).then(done, fallback);
    } catch (e) { fallback(); }
  });
});
