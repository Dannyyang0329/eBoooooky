﻿var _0xaf49 = [
  "\x63\x6F\x6C\x6F\x72\x48\x65\x78",
  "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65",
  "\x74\x65\x73\x74",
  "\x2C",
  "\x73\x70\x6C\x69\x74",
  "",
  "\x72\x65\x70\x6C\x61\x63\x65",
  "\x23",
  "\x6C\x65\x6E\x67\x74\x68",
  "\x30",
  "\x63\x6F\x6C\x6F\x72\x52\x67\x62",
  "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65",
  "\x73\x6C\x69\x63\x65",
  "\x63\x6F\x6E\x63\x61\x74",
  "\x30\x78",
  "\x70\x75\x73\x68",
  "\x52\x47\x42\x28",
  "\x6A\x6F\x69\x6E",
  "\x29",
];
var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
var regox = /^0x([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
String[_0xaf49[1]][_0xaf49[0]] = function () {
  var _0x2b08x3 = this;
  if (/^(rgb|RGB)/[_0xaf49[2]](_0x2b08x3)) {
    var _0x2b08x4 = _0x2b08x3[_0xaf49[6]](/(?:||rgb|RGB)*/g, _0xaf49[5])[
      _0xaf49[4]
    ](_0xaf49[3]);
    var _0x2b08x5 = _0xaf49[7];
    for (var _0x2b08x6 = 0; _0x2b08x6 < _0x2b08x4[_0xaf49[8]]; _0x2b08x6++) {
      var _0x2b08x7 = Number(_0x2b08x4[_0x2b08x6]).toString(16);
      if (_0x2b08x7 === _0xaf49[9]) {
        _0x2b08x7 += _0x2b08x7;
      }
      _0x2b08x5 += _0x2b08x7;
    }
    if (_0x2b08x5[_0xaf49[8]] !== 7) {
      _0x2b08x5 = _0x2b08x3;
    }
    return _0x2b08x5;
  } else {
    if (reg[_0xaf49[2]](_0x2b08x3)) {
      var _0x2b08x8 = _0x2b08x3[_0xaf49[6]](/#/, _0xaf49[5])[_0xaf49[4]](
        _0xaf49[5]
      );
      if (_0x2b08x8[_0xaf49[8]] === 6) {
        return _0x2b08x3;
      } else {
        if (_0x2b08x8[_0xaf49[8]] === 3) {
          var _0x2b08x9 = _0xaf49[7];
          for (
            var _0x2b08x6 = 0;
            _0x2b08x6 < _0x2b08x8[_0xaf49[8]];
            _0x2b08x6 += 1
          ) {
            _0x2b08x9 += _0x2b08x8[_0x2b08x6] + _0x2b08x8[_0x2b08x6];
          }
          return _0x2b08x9;
        }
      }
    } else {
      return _0x2b08x3;
    }
  }
};
String[_0xaf49[1]][_0xaf49[10]] = function () {
  var _0x2b08xa = this[_0xaf49[11]]();
  if (_0x2b08xa && regox[_0xaf49[2]](_0x2b08xa)) {
    var _0x2b08xb = _0xaf49[7];
    for (var _0x2b08xc = 2; _0x2b08xc < _0x2b08xa[_0xaf49[8]]; _0x2b08xc++) {
      _0x2b08xb += _0x2b08xa[_0xaf49[12]](_0x2b08xc, _0x2b08xc + 1);
    }
    _0x2b08xa = _0x2b08xb;
  }
  if (_0x2b08xa && reg[_0xaf49[2]](_0x2b08xa)) {
    if (_0x2b08xa[_0xaf49[8]] === 4) {
      var _0x2b08xd = _0xaf49[7];
      for (var _0x2b08x6 = 1; _0x2b08x6 < 4; _0x2b08x6 += 1) {
        _0x2b08xd += _0x2b08xa[_0xaf49[12]](_0x2b08x6, _0x2b08x6 + 1)[
          _0xaf49[13]
        ](_0x2b08xa[_0xaf49[12]](_0x2b08x6, _0x2b08x6 + 1));
      }
      _0x2b08xa = _0x2b08xd;
    }
    var _0x2b08xe = [];
    for (var _0x2b08x6 = 1; _0x2b08x6 < 7; _0x2b08x6 += 2) {
      _0x2b08xe[_0xaf49[15]](
        parseInt(_0xaf49[14] + _0x2b08xa[_0xaf49[12]](_0x2b08x6, _0x2b08x6 + 2))
      );
    }
    return _0xaf49[16] + _0x2b08xe[_0xaf49[17]](_0xaf49[3]) + _0xaf49[18];
  } else {
    return _0x2b08xa;
  }
};
