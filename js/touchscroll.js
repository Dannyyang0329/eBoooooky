var _0xc913 = [
  "\x6D\x61\x74\x63\x68",
  "\x75\x73\x65\x72\x41\x67\x65\x6E\x74",
  "\x54\x6F\x75\x63\x68\x45\x76\x65\x6E\x74",
  "\x63\x72\x65\x61\x74\x65\x45\x76\x65\x6E\x74",
  "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
  "\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74",
  "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70",
  "\x70\x61\x67\x65\x59",
  "\x74\x6F\x75\x63\x68\x65\x73",
  "\x73\x63\x72\x6F\x6C\x6C\x4C\x65\x66\x74",
  "\x70\x61\x67\x65\x58",
  "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74",
  "\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E",
  "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72",
  "\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65",
  "\x73\x63\x72\x6F\x6C\x6C\x48\x65\x69\x67\x68\x74",
  "\x6F\x66\x66\x73\x65\x74\x48\x65\x69\x67\x68\x74",
  "\x73\x63\x72\x6F\x6C\x6C\x57\x69\x64\x74\x68",
  "\x6F\x66\x66\x73\x65\x74\x57\x69\x64\x74\x68",
  "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66",
  "\x72\x61\x6E\x64\x6F\x6D",
  "\x66\x6C\x6F\x6F\x72",
  "\x73\x75\x62\x73\x74\x72",
  "\x34",
  "",
  "\x6A\x6F\x69\x6E",
  "\x6F\x66\x66\x73\x65\x74\x4C\x65\x66\x74",
  "\x6F\x66\x66\x73\x65\x74\x54\x6F\x70",
  "\x6F\x66\x66\x73\x65\x74\x50\x61\x72\x65\x6E\x74",
];
function isTouchDevice() {
  if (
    navigator[_0xc913[1]][_0xc913[0]](/android 3/i) ||
    navigator[_0xc913[1]][_0xc913[0]](/honeycomb/i)
  ) {
    return false;
  }
  try {
    document[_0xc913[3]](_0xc913[2]);
    return true;
  } catch (e) {
    return false;
  }
}
function touchScroll(_0xe4e3x3) {
  if (isTouchDevice()) {
    var _0xe4e3x4 = document[_0xc913[4]](_0xe4e3x3);
    var _0xe4e3x5 = 0;
    var _0xe4e3x6 = 0;
    document[_0xc913[4]](_0xe4e3x3)[_0xc913[13]](
      _0xc913[5],
      function (_0xe4e3x7) {
        _0xe4e3x5 = this[_0xc913[6]] + _0xe4e3x7[_0xc913[8]][0][_0xc913[7]];
        _0xe4e3x6 = this[_0xc913[9]] + _0xe4e3x7[_0xc913[8]][0][_0xc913[10]];
        _0xe4e3x7[_0xc913[11]]();
        _0xe4e3x7[_0xc913[12]]();
      },
      false
    );
    document[_0xc913[4]](_0xe4e3x3)[_0xc913[13]](
      _0xc913[14],
      function (_0xe4e3x7) {
        if (
          (this[_0xc913[6]] < this[_0xc913[15]] - this[_0xc913[16]] &&
            this[_0xc913[6]] + _0xe4e3x7[_0xc913[8]][0][_0xc913[7]] <
              _0xe4e3x5 - 5) ||
          (this[_0xc913[6]] != 0 &&
            this[_0xc913[6]] + _0xe4e3x7[_0xc913[8]][0][_0xc913[7]] >
              _0xe4e3x5 + 5)
        ) {
          _0xe4e3x7[_0xc913[11]]();
        }
        if (
          (this[_0xc913[9]] < this[_0xc913[17]] - this[_0xc913[18]] &&
            this[_0xc913[9]] + _0xe4e3x7[_0xc913[8]][0][_0xc913[10]] <
              _0xe4e3x6 - 5) ||
          (this[_0xc913[9]] != 0 &&
            this[_0xc913[9]] + _0xe4e3x7[_0xc913[8]][0][_0xc913[10]] >
              _0xe4e3x6 + 5)
        ) {
          _0xe4e3x7[_0xc913[11]]();
        }
        this[_0xc913[6]] = _0xe4e3x5 - _0xe4e3x7[_0xc913[8]][0][_0xc913[7]];
        this[_0xc913[9]] = _0xe4e3x6 - _0xe4e3x7[_0xc913[8]][0][_0xc913[10]];
      },
      false
    );
  }
}
function uuid() {
  var _0xe4e3x9 = [];
  var _0xe4e3xa = _0xc913[19];
  for (var _0xe4e3xb = 0; _0xe4e3xb < 36; _0xe4e3xb++) {
    _0xe4e3x9[_0xe4e3xb] = _0xe4e3xa[_0xc913[22]](
      Math[_0xc913[21]](Math[_0xc913[20]]() * 0x10),
      1
    );
  }
  _0xe4e3x9[14] = _0xc913[23];
  _0xe4e3x9[19] = _0xe4e3xa[_0xc913[22]]((_0xe4e3x9[19] & 0x3) | 0x8, 1);
  _0xe4e3x9[8] = _0xe4e3x9[13] = _0xe4e3x9[18] = _0xe4e3x9[23] = _0xc913[24];
  var uuid = _0xe4e3x9[_0xc913[25]](_0xc913[24]);
  return uuid;
}
function getElementPoint(_0xe4e3x3) {
  var _0xe4e3xd = document[_0xc913[4]](_0xe4e3x3);
  var _0xe4e3xe = 0,
    _0xe4e3xf = 0;
  while (_0xe4e3xd[_0xc913[28]]) {
    _0xe4e3xe += _0xe4e3xd[_0xc913[26]];
    _0xe4e3xf += _0xe4e3xd[_0xc913[27]];
    _0xe4e3xd = _0xe4e3xd[_0xc913[28]];
  }
  _0xe4e3xe += _0xe4e3xd[_0xc913[26]];
  _0xe4e3xf += _0xe4e3xd[_0xc913[27]];
  return { "\x78": _0xe4e3xe, "\x79": _0xe4e3xf };
}
