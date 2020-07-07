const btnSave = document.getElementsByClassName('btn-save')[0]; //кнопка Сохранить
const arrInput = ["mes1","mes2","mes3","mes4","mes5","mes6"]

function setChecked() {
  arrInput.forEach((item)=> {
  if (localStorage.getItem(item)) {
    document.getElementById(item).checked = true;
    }
  })
}

setChecked()

// по кнопке Сохранить записываем изменения в localStorage
btnSave.addEventListener('click', function() {
  arrInput.forEach(function(item) {
    if (document.getElementById(item).checked) {
      localStorage.setItem(item, document.getElementById(item).checked);
    } else {
      localStorage.removeItem(item);
    }
  })
})
