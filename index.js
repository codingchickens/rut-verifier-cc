window.CC = window.CC || {}
CC.readRut = function(rut) {
  let x = rut.replace('.', '').replace('.', '').replace('-', '')
  if (rut.value == "") {
    return false;
  } else {
    return CC.checkRut(x);
  }
}
CC.checkRut = function(rut) {
  var digit = rut.at(-1);
  var body = rut.substring(0, rut.length - 1);
  if (digit == 'K') digit = 'k';
  return (CC.checkDV(body) == digit);
}
CC.checkDV = function(t) {
  var m = 0,
    s = 1;
  for (; t; t = Math.floor(t / 10))
    s = (s + t % 10 * (9 - m++ % 6)) % 11;
  return s ? s - 1 : 'k';
}
CC.verify = function(rut) {
  return CC.readRut(rut);
}
