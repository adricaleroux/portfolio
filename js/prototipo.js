// Prototipo navegable: cada [data-go] muestra otra pantalla, cada [data-sheet] abre una hoja de detalle.
document.querySelectorAll('.proto').forEach(function (proto) {
  var screens = proto.querySelectorAll('.proto-screen');
  var sheets = proto.querySelectorAll('.proto-sheet');

  function show(name) {
    screens.forEach(function (s) {
      var on = s.dataset.screen === name;
      s.hidden = !on;
      if (on) s.scrollTop = 0;
    });
  }
  function openSheet(name) {
    sheets.forEach(function (s) { s.hidden = s.dataset.sheet !== name; });
  }
  function closeSheets() {
    sheets.forEach(function (s) { s.hidden = true; });
  }

  proto.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    var sheet = e.target.closest('[data-sheet-open]');
    if (go) { closeSheets(); show(go.dataset.go); }
    else if (sheet) openSheet(sheet.dataset.sheetOpen);
    else if (e.target.closest('[data-close]')) closeSheets();
  });
  proto.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSheets();
  });
});
