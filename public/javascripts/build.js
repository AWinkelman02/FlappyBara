(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/express-validator/lib/base.js
  var require_base = __commonJS({
    "node_modules/express-validator/lib/base.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ValidationHalt = exports.contextsKey = void 0;
      exports.contextsKey = "express-validator#contexts";
      var ValidationHalt = class extends Error {
      };
      exports.ValidationHalt = ValidationHalt;
    }
  });

  // node_modules/express-validator/lib/chain/sanitizers.js
  var require_sanitizers = __commonJS({
    "node_modules/express-validator/lib/chain/sanitizers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/validator/lib/util/assertString.js
  var require_assertString = __commonJS({
    "node_modules/validator/lib/util/assertString.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = assertString;
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      function assertString(input) {
        var isString = typeof input === "string" || input instanceof String;
        if (!isString) {
          var invalidType = _typeof(input);
          if (input === null) invalidType = "null";
          else if (invalidType === "object") invalidType = input.constructor.name;
          throw new TypeError("Expected a string but received a ".concat(invalidType));
        }
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/toDate.js
  var require_toDate = __commonJS({
    "node_modules/validator/lib/toDate.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toDate;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function toDate(date) {
        (0, _assertString.default)(date);
        date = Date.parse(date);
        return !isNaN(date) ? new Date(date) : null;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/alpha.js
  var require_alpha = __commonJS({
    "node_modules/validator/lib/alpha.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.farsiLocales = exports.englishLocales = exports.dotDecimal = exports.decimal = exports.commaDecimal = exports.bengaliLocales = exports.arabicLocales = exports.alphanumeric = exports.alpha = void 0;
      var alpha = exports.alpha = {
        "en-US": /^[A-Z]+$/i,
        "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
        "bg-BG": /^[А-Я]+$/i,
        "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
        "da-DK": /^[A-ZÆØÅ]+$/i,
        "de-DE": /^[A-ZÄÖÜß]+$/i,
        "el-GR": /^[Α-ώ]+$/i,
        "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
        "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
        "fi-FI": /^[A-ZÅÄÖ]+$/i,
        "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
        "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
        "nb-NO": /^[A-ZÆØÅ]+$/i,
        "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
        "nn-NO": /^[A-ZÆØÅ]+$/i,
        "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
        "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
        "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
        "ru-RU": /^[А-ЯЁ]+$/i,
        "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
        "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
        "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
        "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
        "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
        "sv-SE": /^[A-ZÅÄÖ]+$/i,
        "th-TH": /^[ก-๐\s]+$/i,
        "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
        "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
        "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
        "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
        "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
        ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
        he: /^[א-ת]+$/,
        fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
        bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
        eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
        "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
        "si-LK": /^[\u0D80-\u0DFF]+$/
      };
      var alphanumeric = exports.alphanumeric = {
        "en-US": /^[0-9A-Z]+$/i,
        "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
        "bg-BG": /^[0-9А-Я]+$/i,
        "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
        "da-DK": /^[0-9A-ZÆØÅ]+$/i,
        "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
        "el-GR": /^[0-9Α-ω]+$/i,
        "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
        "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
        "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
        "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
        "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
        "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
        "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
        "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
        "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
        "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
        "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
        "ru-RU": /^[0-9А-ЯЁ]+$/i,
        "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
        "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
        "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
        "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
        "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
        "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
        "th-TH": /^[ก-๙\s]+$/i,
        "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
        "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
        "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
        "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
        "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
        ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
        he: /^[0-9א-ת]+$/,
        fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
        bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
        eo: /^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
        "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
        "si-LK": /^[0-9\u0D80-\u0DFF]+$/
      };
      var decimal = exports.decimal = {
        "en-US": ".",
        ar: "\u066B"
      };
      var englishLocales = exports.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
      for (i2 = 0; i2 < englishLocales.length; i2++) {
        locale = "en-".concat(englishLocales[i2]);
        alpha[locale] = alpha["en-US"];
        alphanumeric[locale] = alphanumeric["en-US"];
        decimal[locale] = decimal["en-US"];
      }
      var locale;
      var i2;
      var arabicLocales = exports.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
      for (_i = 0; _i < arabicLocales.length; _i++) {
        _locale = "ar-".concat(arabicLocales[_i]);
        alpha[_locale] = alpha.ar;
        alphanumeric[_locale] = alphanumeric.ar;
        decimal[_locale] = decimal.ar;
      }
      var _locale;
      var _i;
      var farsiLocales = exports.farsiLocales = ["IR", "AF"];
      for (_i2 = 0; _i2 < farsiLocales.length; _i2++) {
        _locale2 = "fa-".concat(farsiLocales[_i2]);
        alphanumeric[_locale2] = alphanumeric.fa;
        decimal[_locale2] = decimal.ar;
      }
      var _locale2;
      var _i2;
      var bengaliLocales = exports.bengaliLocales = ["BD", "IN"];
      for (_i3 = 0; _i3 < bengaliLocales.length; _i3++) {
        _locale3 = "bn-".concat(bengaliLocales[_i3]);
        alpha[_locale3] = alpha.bn;
        alphanumeric[_locale3] = alphanumeric.bn;
        decimal[_locale3] = decimal["en-US"];
      }
      var _locale3;
      var _i3;
      var dotDecimal = exports.dotDecimal = ["ar-EG", "ar-LB", "ar-LY"];
      var commaDecimal = exports.commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
      for (_i4 = 0; _i4 < dotDecimal.length; _i4++) {
        decimal[dotDecimal[_i4]] = decimal["en-US"];
      }
      var _i4;
      for (_i5 = 0; _i5 < commaDecimal.length; _i5++) {
        decimal[commaDecimal[_i5]] = ",";
      }
      var _i5;
      alpha["fr-CA"] = alpha["fr-FR"];
      alphanumeric["fr-CA"] = alphanumeric["fr-FR"];
      alpha["pt-BR"] = alpha["pt-PT"];
      alphanumeric["pt-BR"] = alphanumeric["pt-PT"];
      decimal["pt-BR"] = decimal["pt-PT"];
      alpha["pl-Pl"] = alpha["pl-PL"];
      alphanumeric["pl-Pl"] = alphanumeric["pl-PL"];
      decimal["pl-Pl"] = decimal["pl-PL"];
      alpha["fa-AF"] = alpha.fa;
    }
  });

  // node_modules/validator/lib/isFloat.js
  var require_isFloat = __commonJS({
    "node_modules/validator/lib/isFloat.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isFloat;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      var _alpha = require_alpha();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isFloat(str, options) {
        (0, _assertString.default)(str);
        options = options || {};
        var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
        if (str === "" || str === "." || str === "," || str === "-" || str === "+") {
          return false;
        }
        var value = parseFloat(str.replace(",", "."));
        return float.test(str) && (!options.hasOwnProperty("min") || value >= options.min) && (!options.hasOwnProperty("max") || value <= options.max) && (!options.hasOwnProperty("lt") || value < options.lt) && (!options.hasOwnProperty("gt") || value > options.gt);
      }
      var locales = exports.locales = Object.keys(_alpha.decimal);
    }
  });

  // node_modules/validator/lib/toFloat.js
  var require_toFloat = __commonJS({
    "node_modules/validator/lib/toFloat.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toFloat;
      var _isFloat = _interopRequireDefault(require_isFloat());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function toFloat(str) {
        if (!(0, _isFloat.default)(str)) return NaN;
        return parseFloat(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/toInt.js
  var require_toInt = __commonJS({
    "node_modules/validator/lib/toInt.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toInt;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function toInt(str, radix) {
        (0, _assertString.default)(str);
        return parseInt(str, radix || 10);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/toBoolean.js
  var require_toBoolean = __commonJS({
    "node_modules/validator/lib/toBoolean.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toBoolean;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function toBoolean(str, strict) {
        (0, _assertString.default)(str);
        if (strict) {
          return str === "1" || /^true$/i.test(str);
        }
        return str !== "0" && !/^false$/i.test(str) && str !== "";
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/equals.js
  var require_equals = __commonJS({
    "node_modules/validator/lib/equals.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = equals;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function equals(str, comparison) {
        (0, _assertString.default)(str);
        return str === comparison;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/util/toString.js
  var require_toString = __commonJS({
    "node_modules/validator/lib/util/toString.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = toString2;
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      function toString2(input) {
        if (_typeof(input) === "object" && input !== null) {
          if (typeof input.toString === "function") {
            input = input.toString();
          } else {
            input = "[object Object]";
          }
        } else if (input === null || typeof input === "undefined" || isNaN(input) && !input.length) {
          input = "";
        }
        return String(input);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/util/merge.js
  var require_merge = __commonJS({
    "node_modules/validator/lib/util/merge.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = merge;
      function merge() {
        var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var defaults = arguments.length > 1 ? arguments[1] : void 0;
        for (var key in defaults) {
          if (typeof obj[key] === "undefined") {
            obj[key] = defaults[key];
          }
        }
        return obj;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/contains.js
  var require_contains = __commonJS({
    "node_modules/validator/lib/contains.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = contains;
      var _assertString = _interopRequireDefault(require_assertString());
      var _toString = _interopRequireDefault(require_toString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var defaulContainsOptions = {
        ignoreCase: false,
        minOccurrences: 1
      };
      function contains(str, elem, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, defaulContainsOptions);
        if (options.ignoreCase) {
          return str.toLowerCase().split((0, _toString.default)(elem).toLowerCase()).length > options.minOccurrences;
        }
        return str.split((0, _toString.default)(elem)).length > options.minOccurrences;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/matches.js
  var require_matches = __commonJS({
    "node_modules/validator/lib/matches.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = matches;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function matches(str, pattern, modifiers) {
        (0, _assertString.default)(str);
        if (Object.prototype.toString.call(pattern) !== "[object RegExp]") {
          pattern = new RegExp(pattern, modifiers);
        }
        return !!str.match(pattern);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isByteLength.js
  var require_isByteLength = __commonJS({
    "node_modules/validator/lib/isByteLength.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isByteLength;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      function isByteLength(str, options) {
        (0, _assertString.default)(str);
        var min;
        var max;
        if (_typeof(options) === "object") {
          min = options.min || 0;
          max = options.max;
        } else {
          min = arguments[1];
          max = arguments[2];
        }
        var len = encodeURI(str).split(/%..|./).length - 1;
        return len >= min && (typeof max === "undefined" || len <= max);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isFQDN.js
  var require_isFQDN = __commonJS({
    "node_modules/validator/lib/isFQDN.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isFQDN;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var default_fqdn_options = {
        require_tld: true,
        allow_underscores: false,
        allow_trailing_dot: false,
        allow_numeric_tld: false,
        allow_wildcard: false,
        ignore_max_length: false
      };
      function isFQDN(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, default_fqdn_options);
        if (options.allow_trailing_dot && str[str.length - 1] === ".") {
          str = str.substring(0, str.length - 1);
        }
        if (options.allow_wildcard === true && str.indexOf("*.") === 0) {
          str = str.substring(2);
        }
        var parts = str.split(".");
        var tld = parts[parts.length - 1];
        if (options.require_tld) {
          if (parts.length < 2) {
            return false;
          }
          if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
            return false;
          }
          if (/\s/.test(tld)) {
            return false;
          }
        }
        if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
          return false;
        }
        return parts.every(function(part) {
          if (part.length > 63 && !options.ignore_max_length) {
            return false;
          }
          if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
            return false;
          }
          if (/[\uff01-\uff5e]/.test(part)) {
            return false;
          }
          if (/^-|-$/.test(part)) {
            return false;
          }
          if (!options.allow_underscores && /_/.test(part)) {
            return false;
          }
          return true;
        });
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIP.js
  var require_isIP = __commonJS({
    "node_modules/validator/lib/isIP.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIP;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
      var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
      var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
      var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
      var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
      function isIP(str) {
        var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        (0, _assertString.default)(str);
        version = String(version);
        if (!version) {
          return isIP(str, 4) || isIP(str, 6);
        }
        if (version === "4") {
          return IPv4AddressRegExp.test(str);
        }
        if (version === "6") {
          return IPv6AddressRegExp.test(str);
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isEmail.js
  var require_isEmail = __commonJS({
    "node_modules/validator/lib/isEmail.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isEmail;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isByteLength = _interopRequireDefault(require_isByteLength());
      var _isFQDN = _interopRequireDefault(require_isFQDN());
      var _isIP = _interopRequireDefault(require_isIP());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var default_email_options = {
        allow_display_name: false,
        allow_underscores: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true,
        blacklisted_chars: "",
        ignore_max_length: false,
        host_blacklist: [],
        host_whitelist: []
      };
      var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
      var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
      var gmailUserPart = /^[a-z\d]+$/;
      var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
      var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
      var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
      var defaultMaxEmailLength = 254;
      function validateDisplayName(display_name) {
        var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1");
        if (!display_name_without_quotes.trim()) {
          return false;
        }
        var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
        if (contains_illegal) {
          if (display_name_without_quotes === display_name) {
            return false;
          }
          var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
          if (!all_start_with_back_slash) {
            return false;
          }
        }
        return true;
      }
      function isEmail(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, default_email_options);
        if (options.require_display_name || options.allow_display_name) {
          var display_email = str.match(splitNameAddress);
          if (display_email) {
            var display_name = display_email[1];
            str = str.replace(display_name, "").replace(/(^<|>$)/g, "");
            if (display_name.endsWith(" ")) {
              display_name = display_name.slice(0, -1);
            }
            if (!validateDisplayName(display_name)) {
              return false;
            }
          } else if (options.require_display_name) {
            return false;
          }
        }
        if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
          return false;
        }
        var parts = str.split("@");
        var domain = parts.pop();
        var lower_domain = domain.toLowerCase();
        if (options.host_blacklist.includes(lower_domain)) {
          return false;
        }
        if (options.host_whitelist.length > 0 && !options.host_whitelist.includes(lower_domain)) {
          return false;
        }
        var user = parts.join("@");
        if (options.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
          user = user.toLowerCase();
          var username = user.split("+")[0];
          if (!(0, _isByteLength.default)(username.replace(/\./g, ""), {
            min: 6,
            max: 30
          })) {
            return false;
          }
          var _user_parts = username.split(".");
          for (var i2 = 0; i2 < _user_parts.length; i2++) {
            if (!gmailUserPart.test(_user_parts[i2])) {
              return false;
            }
          }
        }
        if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
          max: 64
        }) || !(0, _isByteLength.default)(domain, {
          max: 254
        }))) {
          return false;
        }
        if (!(0, _isFQDN.default)(domain, {
          require_tld: options.require_tld,
          ignore_max_length: options.ignore_max_length,
          allow_underscores: options.allow_underscores
        })) {
          if (!options.allow_ip_domain) {
            return false;
          }
          if (!(0, _isIP.default)(domain)) {
            if (!domain.startsWith("[") || !domain.endsWith("]")) {
              return false;
            }
            var noBracketdomain = domain.slice(1, -1);
            if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
              return false;
            }
          }
        }
        if (user[0] === '"') {
          user = user.slice(1, user.length - 1);
          return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
        }
        var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
        var user_parts = user.split(".");
        for (var _i = 0; _i < user_parts.length; _i++) {
          if (!pattern.test(user_parts[_i])) {
            return false;
          }
        }
        if (options.blacklisted_chars) {
          if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), "g")) !== -1) return false;
        }
        return true;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isURL.js
  var require_isURL = __commonJS({
    "node_modules/validator/lib/isURL.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isURL;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isFQDN = _interopRequireDefault(require_isFQDN());
      var _isIP = _interopRequireDefault(require_isIP());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i2) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n13 = Object.prototype.toString.call(o).slice(8, -1);
        if (n13 === "Object" && o.constructor) n13 = o.constructor.name;
        if (n13 === "Map" || n13 === "Set") return Array.from(o);
        if (n13 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n13)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
        return arr2;
      }
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e, n13, i2, u, a = [], f = true, o = false;
          try {
            if (i2 = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t) return;
              f = false;
            } else for (; !(f = (e = i2.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
          } catch (r2) {
            o = true, n13 = r2;
          } finally {
            try {
              if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally {
              if (o) throw n13;
            }
          }
          return a;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      var default_url_options = {
        protocols: ["http", "https", "ftp"],
        require_tld: true,
        require_protocol: false,
        require_host: true,
        require_port: false,
        require_valid_protocol: true,
        allow_underscores: false,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false,
        allow_fragments: true,
        allow_query_components: true,
        validate_length: true
      };
      var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
      function isRegExp(obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
      }
      function checkHost(host, matches) {
        for (var i2 = 0; i2 < matches.length; i2++) {
          var match = matches[i2];
          if (host === match || isRegExp(match) && match.test(host)) {
            return true;
          }
        }
        return false;
      }
      function isURL(url, options) {
        (0, _assertString.default)(url);
        if (!url || /[\s<>]/.test(url)) {
          return false;
        }
        if (url.indexOf("mailto:") === 0) {
          return false;
        }
        options = (0, _merge.default)(options, default_url_options);
        if (options.validate_length && url.length >= 2083) {
          return false;
        }
        if (!options.allow_fragments && url.includes("#")) {
          return false;
        }
        if (!options.allow_query_components && (url.includes("?") || url.includes("&"))) {
          return false;
        }
        var protocol, auth, host, hostname, port, port_str, split, ipv6;
        split = url.split("#");
        url = split.shift();
        split = url.split("?");
        url = split.shift();
        split = url.split("://");
        if (split.length > 1) {
          protocol = split.shift().toLowerCase();
          if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
            return false;
          }
        } else if (options.require_protocol) {
          return false;
        } else if (url.slice(0, 2) === "//") {
          if (!options.allow_protocol_relative_urls) {
            return false;
          }
          split[0] = url.slice(2);
        }
        url = split.join("://");
        if (url === "") {
          return false;
        }
        split = url.split("/");
        url = split.shift();
        if (url === "" && !options.require_host) {
          return true;
        }
        split = url.split("@");
        if (split.length > 1) {
          if (options.disallow_auth) {
            return false;
          }
          if (split[0] === "") {
            return false;
          }
          auth = split.shift();
          if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) {
            return false;
          }
          var _auth$split = auth.split(":"), _auth$split2 = _slicedToArray(_auth$split, 2), user = _auth$split2[0], password = _auth$split2[1];
          if (user === "" && password === "") {
            return false;
          }
        }
        hostname = split.join("@");
        port_str = null;
        ipv6 = null;
        var ipv6_match = hostname.match(wrapped_ipv6);
        if (ipv6_match) {
          host = "";
          ipv6 = ipv6_match[1];
          port_str = ipv6_match[2] || null;
        } else {
          split = hostname.split(":");
          host = split.shift();
          if (split.length) {
            port_str = split.join(":");
          }
        }
        if (port_str !== null && port_str.length > 0) {
          port = parseInt(port_str, 10);
          if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
            return false;
          }
        } else if (options.require_port) {
          return false;
        }
        if (options.host_whitelist) {
          return checkHost(host, options.host_whitelist);
        }
        if (host === "" && !options.require_host) {
          return true;
        }
        if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
          return false;
        }
        host = host || ipv6;
        if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
          return false;
        }
        return true;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMACAddress.js
  var require_isMACAddress = __commonJS({
    "node_modules/validator/lib/isMACAddress.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMACAddress;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var macAddress48 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
      var macAddress48NoSeparators = /^([0-9a-fA-F]){12}$/;
      var macAddress48WithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
      var macAddress64 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/;
      var macAddress64NoSeparators = /^([0-9a-fA-F]){16}$/;
      var macAddress64WithDots = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
      function isMACAddress(str, options) {
        (0, _assertString.default)(str);
        if (options !== null && options !== void 0 && options.eui) {
          options.eui = String(options.eui);
        }
        if (options !== null && options !== void 0 && options.no_colons || options !== null && options !== void 0 && options.no_separators) {
          if (options.eui === "48") {
            return macAddress48NoSeparators.test(str);
          }
          if (options.eui === "64") {
            return macAddress64NoSeparators.test(str);
          }
          return macAddress48NoSeparators.test(str) || macAddress64NoSeparators.test(str);
        }
        if ((options === null || options === void 0 ? void 0 : options.eui) === "48") {
          return macAddress48.test(str) || macAddress48WithDots.test(str);
        }
        if ((options === null || options === void 0 ? void 0 : options.eui) === "64") {
          return macAddress64.test(str) || macAddress64WithDots.test(str);
        }
        return isMACAddress(str, {
          eui: "48"
        }) || isMACAddress(str, {
          eui: "64"
        });
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIPRange.js
  var require_isIPRange = __commonJS({
    "node_modules/validator/lib/isIPRange.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIPRange;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isIP = _interopRequireDefault(require_isIP());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var subnetMaybe = /^\d{1,3}$/;
      var v4Subnet = 32;
      var v6Subnet = 128;
      function isIPRange(str) {
        var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        (0, _assertString.default)(str);
        var parts = str.split("/");
        if (parts.length !== 2) {
          return false;
        }
        if (!subnetMaybe.test(parts[1])) {
          return false;
        }
        if (parts[1].length > 1 && parts[1].startsWith("0")) {
          return false;
        }
        var isValidIP = (0, _isIP.default)(parts[0], version);
        if (!isValidIP) {
          return false;
        }
        var expectedSubnet = null;
        switch (String(version)) {
          case "4":
            expectedSubnet = v4Subnet;
            break;
          case "6":
            expectedSubnet = v6Subnet;
            break;
          default:
            expectedSubnet = (0, _isIP.default)(parts[0], "6") ? v6Subnet : v4Subnet;
        }
        return parts[1] <= expectedSubnet && parts[1] >= 0;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isDate.js
  var require_isDate = __commonJS({
    "node_modules/validator/lib/isDate.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isDate;
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i2) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e, n13, i2, u, a = [], f = true, o = false;
          try {
            if (i2 = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t) return;
              f = false;
            } else for (; !(f = (e = i2.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
          } catch (r2) {
            o = true, n13 = r2;
          } finally {
            try {
              if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally {
              if (o) throw n13;
            }
          }
          return a;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it2 = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it2) {
          if (Array.isArray(o) || (it2 = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it2) o = it2;
            var i2 = 0;
            var F = function F2() {
            };
            return { s: F, n: function n13() {
              if (i2 >= o.length) return { done: true };
              return { done: false, value: o[i2++] };
            }, e: function e(_e2) {
              throw _e2;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return { s: function s() {
          it2 = it2.call(o);
        }, n: function n13() {
          var step = it2.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it2.return != null) it2.return();
          } finally {
            if (didErr) throw err;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n13 = Object.prototype.toString.call(o).slice(8, -1);
        if (n13 === "Object" && o.constructor) n13 = o.constructor.name;
        if (n13 === "Map" || n13 === "Set") return Array.from(o);
        if (n13 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n13)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
        return arr2;
      }
      var default_date_options = {
        format: "YYYY/MM/DD",
        delimiters: ["/", "-"],
        strictMode: false
      };
      function isValidFormat(format) {
        return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
      }
      function zip(date, format) {
        var zippedArr = [], len = Math.min(date.length, format.length);
        for (var i2 = 0; i2 < len; i2++) {
          zippedArr.push([date[i2], format[i2]]);
        }
        return zippedArr;
      }
      function isDate(input, options) {
        if (typeof options === "string") {
          options = (0, _merge.default)({
            format: options
          }, default_date_options);
        } else {
          options = (0, _merge.default)(options, default_date_options);
        }
        if (typeof input === "string" && isValidFormat(options.format)) {
          var formatDelimiter = options.delimiters.find(function(delimiter) {
            return options.format.indexOf(delimiter) !== -1;
          });
          var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function(delimiter) {
            return input.indexOf(delimiter) !== -1;
          });
          var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
          var dateObj = {};
          var _iterator = _createForOfIteratorHelper(dateAndFormat), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _step$value = _slicedToArray(_step.value, 2), dateWord = _step$value[0], formatWord = _step$value[1];
              if (dateWord.length !== formatWord.length) {
                return false;
              }
              dateObj[formatWord.charAt(0)] = dateWord;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var fullYear = dateObj.y;
          if (fullYear.startsWith("-")) {
            return false;
          }
          if (dateObj.y.length === 2) {
            var parsedYear = parseInt(dateObj.y, 10);
            if (isNaN(parsedYear)) {
              return false;
            }
            var currentYearLastTwoDigits = (/* @__PURE__ */ new Date()).getFullYear() % 100;
            if (parsedYear < currentYearLastTwoDigits) {
              fullYear = "20".concat(dateObj.y);
            } else {
              fullYear = "19".concat(dateObj.y);
            }
          }
          var month = dateObj.m;
          if (dateObj.m.length === 1) {
            month = "0".concat(dateObj.m);
          }
          var day = dateObj.d;
          if (dateObj.d.length === 1) {
            day = "0".concat(dateObj.d);
          }
          return new Date("".concat(fullYear, "-").concat(month, "-").concat(day, "T00:00:00.000Z")).getUTCDate() === +dateObj.d;
        }
        if (!options.strictMode) {
          return Object.prototype.toString.call(input) === "[object Date]" && isFinite(input);
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isTime.js
  var require_isTime = __commonJS({
    "node_modules/validator/lib/isTime.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isTime;
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var default_time_options = {
        hourFormat: "hour24",
        mode: "default"
      };
      var formats = {
        hour24: {
          default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
          withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
        },
        hour12: {
          default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
          withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
        }
      };
      function isTime(input, options) {
        options = (0, _merge.default)(options, default_time_options);
        if (typeof input !== "string") return false;
        return formats[options.hourFormat][options.mode].test(input);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isBoolean.js
  var require_isBoolean = __commonJS({
    "node_modules/validator/lib/isBoolean.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBoolean;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var defaultOptions = {
        loose: false
      };
      var strictBooleans = ["true", "false", "1", "0"];
      var looseBooleans = [].concat(strictBooleans, ["yes", "no"]);
      function isBoolean(str) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultOptions;
        (0, _assertString.default)(str);
        if (options.loose) {
          return looseBooleans.includes(str.toLowerCase());
        }
        return strictBooleans.includes(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLocale.js
  var require_isLocale = __commonJS({
    "node_modules/validator/lib/isLocale.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLocale;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var extlang = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})";
      var language = "(([a-zA-Z]{2,3}(-".concat(extlang, ")?)|([a-zA-Z]{5,8}))");
      var script = "([A-Za-z]{4})";
      var region = "([A-Za-z]{2}|\\d{3})";
      var variant = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))";
      var singleton = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])";
      var extension = "(".concat(singleton, "(-[A-Za-z0-9]{2,8})+)");
      var privateuse = "(x(-[A-Za-z0-9]{1,8})+)";
      var irregular = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))";
      var regular = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))";
      var grandfathered = "(".concat(irregular, "|").concat(regular, ")");
      var delimiter = "(-|_)";
      var langtag = "".concat(language, "(").concat(delimiter).concat(script, ")?(").concat(delimiter).concat(region, ")?(").concat(delimiter).concat(variant, ")*(").concat(delimiter).concat(extension, ")*(").concat(delimiter).concat(privateuse, ")?");
      var languageTagRegex = new RegExp("(^".concat(privateuse, "$)|(^").concat(grandfathered, "$)|(^").concat(langtag, "$)"));
      function isLocale(str) {
        (0, _assertString.default)(str);
        return languageTagRegex.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isAbaRouting.js
  var require_isAbaRouting = __commonJS({
    "node_modules/validator/lib/isAbaRouting.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isAbaRouting;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isRoutingReg = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
      function isAbaRouting(str) {
        (0, _assertString.default)(str);
        if (!isRoutingReg.test(str)) return false;
        var checkSumVal = 0;
        for (var i2 = 0; i2 < str.length; i2++) {
          if (i2 % 3 === 0) checkSumVal += str[i2] * 3;
          else if (i2 % 3 === 1) checkSumVal += str[i2] * 7;
          else checkSumVal += str[i2] * 1;
        }
        return checkSumVal % 10 === 0;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isAlpha.js
  var require_isAlpha = __commonJS({
    "node_modules/validator/lib/isAlpha.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isAlpha;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      var _alpha = require_alpha();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isAlpha(_str) {
        var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (0, _assertString.default)(_str);
        var str = _str;
        var ignore = options.ignore;
        if (ignore) {
          if (ignore instanceof RegExp) {
            str = str.replace(ignore, "");
          } else if (typeof ignore === "string") {
            str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
          } else {
            throw new Error("ignore should be instance of a String or RegExp");
          }
        }
        if (locale in _alpha.alpha) {
          return _alpha.alpha[locale].test(str);
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      var locales = exports.locales = Object.keys(_alpha.alpha);
    }
  });

  // node_modules/validator/lib/isAlphanumeric.js
  var require_isAlphanumeric = __commonJS({
    "node_modules/validator/lib/isAlphanumeric.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isAlphanumeric;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      var _alpha = require_alpha();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isAlphanumeric(_str) {
        var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (0, _assertString.default)(_str);
        var str = _str;
        var ignore = options.ignore;
        if (ignore) {
          if (ignore instanceof RegExp) {
            str = str.replace(ignore, "");
          } else if (typeof ignore === "string") {
            str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
          } else {
            throw new Error("ignore should be instance of a String or RegExp");
          }
        }
        if (locale in _alpha.alphanumeric) {
          return _alpha.alphanumeric[locale].test(str);
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      var locales = exports.locales = Object.keys(_alpha.alphanumeric);
    }
  });

  // node_modules/validator/lib/isNumeric.js
  var require_isNumeric = __commonJS({
    "node_modules/validator/lib/isNumeric.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isNumeric;
      var _assertString = _interopRequireDefault(require_assertString());
      var _alpha = require_alpha();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var numericNoSymbols = /^[0-9]+$/;
      function isNumeric(str, options) {
        (0, _assertString.default)(str);
        if (options && options.no_symbols) {
          return numericNoSymbols.test(str);
        }
        return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : ".", "])?[0-9]+$")).test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isPassportNumber.js
  var require_isPassportNumber = __commonJS({
    "node_modules/validator/lib/isPassportNumber.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isPassportNumber;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var passportRegexByCountryCode = {
        AM: /^[A-Z]{2}\d{7}$/,
        // ARMENIA
        AR: /^[A-Z]{3}\d{6}$/,
        // ARGENTINA
        AT: /^[A-Z]\d{7}$/,
        // AUSTRIA
        AU: /^[A-Z]\d{7}$/,
        // AUSTRALIA
        AZ: /^[A-Z]{1}\d{8}$/,
        // AZERBAIJAN
        BE: /^[A-Z]{2}\d{6}$/,
        // BELGIUM
        BG: /^\d{9}$/,
        // BULGARIA
        BR: /^[A-Z]{2}\d{6}$/,
        // BRAZIL
        BY: /^[A-Z]{2}\d{7}$/,
        // BELARUS
        CA: /^[A-Z]{2}\d{6}$/,
        // CANADA
        CH: /^[A-Z]\d{7}$/,
        // SWITZERLAND
        CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
        // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
        CY: /^[A-Z](\d{6}|\d{8})$/,
        // CYPRUS
        CZ: /^\d{8}$/,
        // CZECH REPUBLIC
        DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
        // GERMANY
        DK: /^\d{9}$/,
        // DENMARK
        DZ: /^\d{9}$/,
        // ALGERIA
        EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
        // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
        ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
        // SPAIN
        FI: /^[A-Z]{2}\d{7}$/,
        // FINLAND
        FR: /^\d{2}[A-Z]{2}\d{5}$/,
        // FRANCE
        GB: /^\d{9}$/,
        // UNITED KINGDOM
        GR: /^[A-Z]{2}\d{7}$/,
        // GREECE
        HR: /^\d{9}$/,
        // CROATIA
        HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
        // HUNGARY
        IE: /^[A-Z0-9]{2}\d{7}$/,
        // IRELAND
        IN: /^[A-Z]{1}-?\d{7}$/,
        // INDIA
        ID: /^[A-C]\d{7}$/,
        // INDONESIA
        IR: /^[A-Z]\d{8}$/,
        // IRAN
        IS: /^(A)\d{7}$/,
        // ICELAND
        IT: /^[A-Z0-9]{2}\d{7}$/,
        // ITALY
        JM: /^[Aa]\d{7}$/,
        // JAMAICA
        JP: /^[A-Z]{2}\d{7}$/,
        // JAPAN
        KR: /^[MS]\d{8}$/,
        // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
        KZ: /^[a-zA-Z]\d{7}$/,
        // KAZAKHSTAN
        LI: /^[a-zA-Z]\d{5}$/,
        // LIECHTENSTEIN
        LT: /^[A-Z0-9]{8}$/,
        // LITHUANIA
        LU: /^[A-Z0-9]{8}$/,
        // LUXEMBURG
        LV: /^[A-Z0-9]{2}\d{7}$/,
        // LATVIA
        LY: /^[A-Z0-9]{8}$/,
        // LIBYA
        MT: /^\d{7}$/,
        // MALTA
        MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
        // MOZAMBIQUE
        MY: /^[AHK]\d{8}$/,
        // MALAYSIA
        MX: /^\d{10,11}$/,
        // MEXICO
        NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
        // NETHERLANDS
        NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
        // NEW ZEALAND
        PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
        // PHILIPPINES
        PK: /^[A-Z]{2}\d{7}$/,
        // PAKISTAN
        PL: /^[A-Z]{2}\d{7}$/,
        // POLAND
        PT: /^[A-Z]\d{6}$/,
        // PORTUGAL
        RO: /^\d{8,9}$/,
        // ROMANIA
        RU: /^\d{9}$/,
        // RUSSIAN FEDERATION
        SE: /^\d{8}$/,
        // SWEDEN
        SL: /^(P)[A-Z]\d{7}$/,
        // SLOVENIA
        SK: /^[0-9A-Z]\d{7}$/,
        // SLOVAKIA
        TH: /^[A-Z]{1,2}\d{6,7}$/,
        // THAILAND
        TR: /^[A-Z]\d{8}$/,
        // TURKEY
        UA: /^[A-Z]{2}\d{6}$/,
        // UKRAINE
        US: /^\d{9}$/,
        // UNITED STATES
        ZA: /^[TAMD]\d{8}$/
        // SOUTH AFRICA
      };
      function isPassportNumber(str, countryCode) {
        (0, _assertString.default)(str);
        var normalizedStr = str.replace(/\s/g, "").toUpperCase();
        return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isInt.js
  var require_isInt = __commonJS({
    "node_modules/validator/lib/isInt.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isInt;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
      var intLeadingZeroes = /^[-+]?[0-9]+$/;
      function isInt(str, options) {
        (0, _assertString.default)(str);
        options = options || {};
        var regex = options.allow_leading_zeroes === false ? int : intLeadingZeroes;
        var minCheckPassed = !options.hasOwnProperty("min") || str >= options.min;
        var maxCheckPassed = !options.hasOwnProperty("max") || str <= options.max;
        var ltCheckPassed = !options.hasOwnProperty("lt") || str < options.lt;
        var gtCheckPassed = !options.hasOwnProperty("gt") || str > options.gt;
        return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isPort.js
  var require_isPort = __commonJS({
    "node_modules/validator/lib/isPort.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isPort;
      var _isInt = _interopRequireDefault(require_isInt());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isPort(str) {
        return (0, _isInt.default)(str, {
          allow_leading_zeroes: false,
          min: 0,
          max: 65535
        });
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLowercase.js
  var require_isLowercase = __commonJS({
    "node_modules/validator/lib/isLowercase.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLowercase;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isLowercase(str) {
        (0, _assertString.default)(str);
        return str === str.toLowerCase();
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isUppercase.js
  var require_isUppercase = __commonJS({
    "node_modules/validator/lib/isUppercase.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isUppercase;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isUppercase(str) {
        (0, _assertString.default)(str);
        return str === str.toUpperCase();
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIMEI.js
  var require_isIMEI = __commonJS({
    "node_modules/validator/lib/isIMEI.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIMEI;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var imeiRegexWithoutHypens = /^[0-9]{15}$/;
      var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
      function isIMEI(str, options) {
        (0, _assertString.default)(str);
        options = options || {};
        var imeiRegex = imeiRegexWithoutHypens;
        if (options.allow_hyphens) {
          imeiRegex = imeiRegexWithHypens;
        }
        if (!imeiRegex.test(str)) {
          return false;
        }
        str = str.replace(/-/g, "");
        var sum = 0, mul = 2, l = 14;
        for (var i2 = 0; i2 < l; i2++) {
          var digit = str.substring(l - i2 - 1, l - i2);
          var tp = parseInt(digit, 10) * mul;
          if (tp >= 10) {
            sum += tp % 10 + 1;
          } else {
            sum += tp;
          }
          if (mul === 1) {
            mul += 1;
          } else {
            mul -= 1;
          }
        }
        var chk = (10 - sum % 10) % 10;
        if (chk !== parseInt(str.substring(14, 15), 10)) {
          return false;
        }
        return true;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isAscii.js
  var require_isAscii = __commonJS({
    "node_modules/validator/lib/isAscii.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isAscii;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var ascii = /^[\x00-\x7F]+$/;
      function isAscii(str) {
        (0, _assertString.default)(str);
        return ascii.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isFullWidth.js
  var require_isFullWidth = __commonJS({
    "node_modules/validator/lib/isFullWidth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isFullWidth;
      exports.fullWidth = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
      function isFullWidth(str) {
        (0, _assertString.default)(str);
        return fullWidth.test(str);
      }
    }
  });

  // node_modules/validator/lib/isHalfWidth.js
  var require_isHalfWidth = __commonJS({
    "node_modules/validator/lib/isHalfWidth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isHalfWidth;
      exports.halfWidth = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
      function isHalfWidth(str) {
        (0, _assertString.default)(str);
        return halfWidth.test(str);
      }
    }
  });

  // node_modules/validator/lib/isVariableWidth.js
  var require_isVariableWidth = __commonJS({
    "node_modules/validator/lib/isVariableWidth.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isVariableWidth;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isFullWidth = require_isFullWidth();
      var _isHalfWidth = require_isHalfWidth();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isVariableWidth(str) {
        (0, _assertString.default)(str);
        return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMultibyte.js
  var require_isMultibyte = __commonJS({
    "node_modules/validator/lib/isMultibyte.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMultibyte;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var multibyte = /[^\x00-\x7F]/;
      function isMultibyte(str) {
        (0, _assertString.default)(str);
        return multibyte.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/util/multilineRegex.js
  var require_multilineRegex = __commonJS({
    "node_modules/validator/lib/util/multilineRegex.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = multilineRegexp;
      function multilineRegexp(parts, flags) {
        var regexpAsStringLiteral = parts.join("");
        return new RegExp(regexpAsStringLiteral, flags);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isSemVer.js
  var require_isSemVer = __commonJS({
    "node_modules/validator/lib/isSemVer.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isSemVer;
      var _assertString = _interopRequireDefault(require_assertString());
      var _multilineRegex = _interopRequireDefault(require_multilineRegex());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var semanticVersioningRegex = (0, _multilineRegex.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
      function isSemVer(str) {
        (0, _assertString.default)(str);
        return semanticVersioningRegex.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isSurrogatePair.js
  var require_isSurrogatePair = __commonJS({
    "node_modules/validator/lib/isSurrogatePair.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isSurrogatePair;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
      function isSurrogatePair(str) {
        (0, _assertString.default)(str);
        return surrogatePair.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/util/includes.js
  var require_includes = __commonJS({
    "node_modules/validator/lib/util/includes.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var includes = function includes2(arr, val) {
        return arr.some(function(arrVal) {
          return val === arrVal;
        });
      };
      var _default = exports.default = includes;
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isDecimal.js
  var require_isDecimal = __commonJS({
    "node_modules/validator/lib/isDecimal.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isDecimal;
      var _merge = _interopRequireDefault(require_merge());
      var _assertString = _interopRequireDefault(require_assertString());
      var _includes = _interopRequireDefault(require_includes());
      var _alpha = require_alpha();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function decimalRegExp(options) {
        var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? "" : "?", "$"));
        return regExp;
      }
      var default_decimal_options = {
        force_decimal: false,
        decimal_digits: "1,",
        locale: "en-US"
      };
      var blacklist = ["", "-", "+"];
      function isDecimal(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, default_decimal_options);
        if (options.locale in _alpha.decimal) {
          return !(0, _includes.default)(blacklist, str.replace(/ /g, "")) && decimalRegExp(options).test(str);
        }
        throw new Error("Invalid locale '".concat(options.locale, "'"));
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isHexadecimal.js
  var require_isHexadecimal = __commonJS({
    "node_modules/validator/lib/isHexadecimal.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isHexadecimal;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;
      function isHexadecimal(str) {
        (0, _assertString.default)(str);
        return hexadecimal.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isOctal.js
  var require_isOctal = __commonJS({
    "node_modules/validator/lib/isOctal.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isOctal;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var octal = /^(0o)?[0-7]+$/i;
      function isOctal(str) {
        (0, _assertString.default)(str);
        return octal.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isDivisibleBy.js
  var require_isDivisibleBy = __commonJS({
    "node_modules/validator/lib/isDivisibleBy.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isDivisibleBy;
      var _assertString = _interopRequireDefault(require_assertString());
      var _toFloat = _interopRequireDefault(require_toFloat());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isDivisibleBy(str, num) {
        (0, _assertString.default)(str);
        return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isHexColor.js
  var require_isHexColor = __commonJS({
    "node_modules/validator/lib/isHexColor.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isHexColor;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
      function isHexColor(str) {
        (0, _assertString.default)(str);
        return hexcolor.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isRgbColor.js
  var require_isRgbColor = __commonJS({
    "node_modules/validator/lib/isRgbColor.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isRgbColor;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
      var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
      var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/;
      var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
      function isRgbColor(str) {
        var includePercentValues = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        (0, _assertString.default)(str);
        if (!includePercentValues) {
          return rgbColor.test(str) || rgbaColor.test(str);
        }
        return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isHSL.js
  var require_isHSL = __commonJS({
    "node_modules/validator/lib/isHSL.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isHSL;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
      var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
      function isHSL(str) {
        (0, _assertString.default)(str);
        var strippedStr = str.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
        if (strippedStr.indexOf(",") !== -1) {
          return hslComma.test(strippedStr);
        }
        return hslSpace.test(strippedStr);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISRC.js
  var require_isISRC = __commonJS({
    "node_modules/validator/lib/isISRC.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISRC;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
      function isISRC(str) {
        (0, _assertString.default)(str);
        return isrc.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIBAN.js
  var require_isIBAN = __commonJS({
    "node_modules/validator/lib/isIBAN.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIBAN;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var ibanRegexThroughCountryCode = {
        AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
        AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
        AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
        AT: /^(AT[0-9]{2})\d{16}$/,
        AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
        BA: /^(BA[0-9]{2})\d{16}$/,
        BE: /^(BE[0-9]{2})\d{12}$/,
        BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
        BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
        BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
        BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
        CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
        CR: /^(CR[0-9]{2})\d{18}$/,
        CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
        CZ: /^(CZ[0-9]{2})\d{20}$/,
        DE: /^(DE[0-9]{2})\d{18}$/,
        DK: /^(DK[0-9]{2})\d{14}$/,
        DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
        DZ: /^(DZ\d{24})$/,
        EE: /^(EE[0-9]{2})\d{16}$/,
        EG: /^(EG[0-9]{2})\d{25}$/,
        ES: /^(ES[0-9]{2})\d{20}$/,
        FI: /^(FI[0-9]{2})\d{14}$/,
        FO: /^(FO[0-9]{2})\d{14}$/,
        FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
        GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
        GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
        GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
        GL: /^(GL[0-9]{2})\d{14}$/,
        GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
        GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
        HR: /^(HR[0-9]{2})\d{17}$/,
        HU: /^(HU[0-9]{2})\d{24}$/,
        IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
        IL: /^(IL[0-9]{2})\d{19}$/,
        IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
        IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
        IS: /^(IS[0-9]{2})\d{22}$/,
        IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
        JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
        KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
        KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
        LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
        LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
        LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
        LT: /^(LT[0-9]{2})\d{16}$/,
        LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
        LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
        MA: /^(MA[0-9]{26})$/,
        MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
        MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
        ME: /^(ME[0-9]{2})\d{18}$/,
        MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
        MR: /^(MR[0-9]{2})\d{23}$/,
        MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
        MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
        MZ: /^(MZ[0-9]{2})\d{21}$/,
        NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
        NO: /^(NO[0-9]{2})\d{11}$/,
        PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
        PL: /^(PL[0-9]{2})\d{24}$/,
        PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
        PT: /^(PT[0-9]{2})\d{21}$/,
        QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
        RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
        RS: /^(RS[0-9]{2})\d{18}$/,
        SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
        SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
        SE: /^(SE[0-9]{2})\d{20}$/,
        SI: /^(SI[0-9]{2})\d{15}$/,
        SK: /^(SK[0-9]{2})\d{20}$/,
        SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
        SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
        TL: /^(TL[0-9]{2})\d{19}$/,
        TN: /^(TN[0-9]{2})\d{20}$/,
        TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
        UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
        VA: /^(VA[0-9]{2})\d{18}$/,
        VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
        XK: /^(XK[0-9]{2})\d{16}$/
      };
      function hasOnlyValidCountryCodes(countryCodeArray) {
        var countryCodeArrayFilteredWithObjectIbanCode = countryCodeArray.filter(function(countryCode) {
          return !(countryCode in ibanRegexThroughCountryCode);
        });
        if (countryCodeArrayFilteredWithObjectIbanCode.length > 0) {
          return false;
        }
        return true;
      }
      function hasValidIbanFormat(str, options) {
        var strippedStr = str.replace(/[\s\-]+/gi, "").toUpperCase();
        var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
        var isoCountryCodeInIbanRegexCodeObject = isoCountryCode in ibanRegexThroughCountryCode;
        if (options.whitelist) {
          if (!hasOnlyValidCountryCodes(options.whitelist)) {
            return false;
          }
          var isoCountryCodeInWhiteList = options.whitelist.includes(isoCountryCode);
          if (!isoCountryCodeInWhiteList) {
            return false;
          }
        }
        if (options.blacklist) {
          var isoCountryCodeInBlackList = options.blacklist.includes(isoCountryCode);
          if (isoCountryCodeInBlackList) {
            return false;
          }
        }
        return isoCountryCodeInIbanRegexCodeObject && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
      }
      function hasValidIbanChecksum(str) {
        var strippedStr = str.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
        var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
        var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function(char) {
          return char.charCodeAt(0) - 55;
        });
        var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function(acc, value) {
          return Number(acc + value) % 97;
        }, "");
        return remainder === 1;
      }
      function isIBAN(str) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, _assertString.default)(str);
        return hasValidIbanFormat(str, options) && hasValidIbanChecksum(str);
      }
      var locales = exports.locales = Object.keys(ibanRegexThroughCountryCode);
    }
  });

  // node_modules/validator/lib/isISO31661Alpha2.js
  var require_isISO31661Alpha2 = __commonJS({
    "node_modules/validator/lib/isISO31661Alpha2.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CountryCodes = void 0;
      exports.default = isISO31661Alpha2;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validISO31661Alpha2CountriesCodes = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
      function isISO31661Alpha2(str) {
        (0, _assertString.default)(str);
        return validISO31661Alpha2CountriesCodes.has(str.toUpperCase());
      }
      var CountryCodes = exports.CountryCodes = validISO31661Alpha2CountriesCodes;
    }
  });

  // node_modules/validator/lib/isBIC.js
  var require_isBIC = __commonJS({
    "node_modules/validator/lib/isBIC.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBIC;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isISO31661Alpha = require_isISO31661Alpha2();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
      function isBIC(str) {
        (0, _assertString.default)(str);
        var countryCode = str.slice(4, 6).toUpperCase();
        if (!_isISO31661Alpha.CountryCodes.has(countryCode) && countryCode !== "XK") {
          return false;
        }
        return isBICReg.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMD5.js
  var require_isMD5 = __commonJS({
    "node_modules/validator/lib/isMD5.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMD5;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var md5 = /^[a-f0-9]{32}$/;
      function isMD5(str) {
        (0, _assertString.default)(str);
        return md5.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isHash.js
  var require_isHash = __commonJS({
    "node_modules/validator/lib/isHash.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isHash;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var lengths = {
        md5: 32,
        md4: 32,
        sha1: 40,
        sha256: 64,
        sha384: 96,
        sha512: 128,
        ripemd128: 32,
        ripemd160: 40,
        tiger128: 32,
        tiger160: 40,
        tiger192: 48,
        crc32: 8,
        crc32b: 8
      };
      function isHash(str, algorithm) {
        (0, _assertString.default)(str);
        var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
        return hash.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isBase64.js
  var require_isBase64 = __commonJS({
    "node_modules/validator/lib/isBase64.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBase64;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var notBase64 = /[^A-Z0-9+\/=]/i;
      var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
      var defaultBase64Options = {
        urlSafe: false
      };
      function isBase64(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, defaultBase64Options);
        var len = str.length;
        if (options.urlSafe) {
          return urlSafeBase64.test(str);
        }
        if (len % 4 !== 0 || notBase64.test(str)) {
          return false;
        }
        var firstPaddingChar = str.indexOf("=");
        return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === "=";
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isJWT.js
  var require_isJWT = __commonJS({
    "node_modules/validator/lib/isJWT.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isJWT;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isBase = _interopRequireDefault(require_isBase64());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isJWT(str) {
        (0, _assertString.default)(str);
        var dotSplit = str.split(".");
        var len = dotSplit.length;
        if (len !== 3) {
          return false;
        }
        return dotSplit.reduce(function(acc, currElem) {
          return acc && (0, _isBase.default)(currElem, {
            urlSafe: true
          });
        }, true);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isJSON.js
  var require_isJSON = __commonJS({
    "node_modules/validator/lib/isJSON.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isJSON;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      var default_json_options = {
        allow_primitives: false
      };
      function isJSON(str, options) {
        (0, _assertString.default)(str);
        try {
          options = (0, _merge.default)(options, default_json_options);
          var primitives = [];
          if (options.allow_primitives) {
            primitives = [null, false, true];
          }
          var obj = JSON.parse(str);
          return primitives.includes(obj) || !!obj && _typeof(obj) === "object";
        } catch (e) {
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isEmpty.js
  var require_isEmpty = __commonJS({
    "node_modules/validator/lib/isEmpty.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isEmpty;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var default_is_empty_options = {
        ignore_whitespace: false
      };
      function isEmpty(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, default_is_empty_options);
        return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLength.js
  var require_isLength = __commonJS({
    "node_modules/validator/lib/isLength.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLength;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      function isLength(str, options) {
        (0, _assertString.default)(str);
        var min;
        var max;
        if (_typeof(options) === "object") {
          min = options.min || 0;
          max = options.max;
        } else {
          min = arguments[1] || 0;
          max = arguments[2];
        }
        var presentationSequences = str.match(/(\uFE0F|\uFE0E)/g) || [];
        var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
        var len = str.length - presentationSequences.length - surrogatePairs.length;
        return len >= min && (typeof max === "undefined" || len <= max);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isUUID.js
  var require_isUUID = __commonJS({
    "node_modules/validator/lib/isUUID.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isUUID;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var uuid = {
        1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        7: /^[0-9A-F]{8}-[0-9A-F]{4}-7[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      };
      function isUUID(str, version) {
        (0, _assertString.default)(str);
        var pattern = uuid[![void 0, null].includes(version) ? version : "all"];
        return !!pattern && pattern.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMongoId.js
  var require_isMongoId = __commonJS({
    "node_modules/validator/lib/isMongoId.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMongoId;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isHexadecimal = _interopRequireDefault(require_isHexadecimal());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isMongoId(str) {
        (0, _assertString.default)(str);
        return (0, _isHexadecimal.default)(str) && str.length === 24;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isAfter.js
  var require_isAfter = __commonJS({
    "node_modules/validator/lib/isAfter.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isAfter;
      var _toDate = _interopRequireDefault(require_toDate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isAfter(date, options) {
        var comparisonDate = (options === null || options === void 0 ? void 0 : options.comparisonDate) || options || Date().toString();
        var comparison = (0, _toDate.default)(comparisonDate);
        var original = (0, _toDate.default)(date);
        return !!(original && comparison && original > comparison);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isBefore.js
  var require_isBefore = __commonJS({
    "node_modules/validator/lib/isBefore.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBefore;
      var _assertString = _interopRequireDefault(require_assertString());
      var _toDate = _interopRequireDefault(require_toDate());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isBefore(str) {
        var date = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
        (0, _assertString.default)(str);
        var comparison = (0, _toDate.default)(date);
        var original = (0, _toDate.default)(str);
        return !!(original && comparison && original < comparison);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIn.js
  var require_isIn = __commonJS({
    "node_modules/validator/lib/isIn.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIn;
      var _assertString = _interopRequireDefault(require_assertString());
      var _toString = _interopRequireDefault(require_toString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      function isIn(str, options) {
        (0, _assertString.default)(str);
        var i2;
        if (Object.prototype.toString.call(options) === "[object Array]") {
          var array = [];
          for (i2 in options) {
            if ({}.hasOwnProperty.call(options, i2)) {
              array[i2] = (0, _toString.default)(options[i2]);
            }
          }
          return array.indexOf(str) >= 0;
        } else if (_typeof(options) === "object") {
          return options.hasOwnProperty(str);
        } else if (options && typeof options.indexOf === "function") {
          return options.indexOf(str) >= 0;
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLuhnNumber.js
  var require_isLuhnNumber = __commonJS({
    "node_modules/validator/lib/isLuhnNumber.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLuhnNumber;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isLuhnNumber(str) {
        (0, _assertString.default)(str);
        var sanitized = str.replace(/[- ]+/g, "");
        var sum = 0;
        var digit;
        var tmpNum;
        var shouldDouble;
        for (var i2 = sanitized.length - 1; i2 >= 0; i2--) {
          digit = sanitized.substring(i2, i2 + 1);
          tmpNum = parseInt(digit, 10);
          if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) {
              sum += tmpNum % 10 + 1;
            } else {
              sum += tmpNum;
            }
          } else {
            sum += tmpNum;
          }
          shouldDouble = !shouldDouble;
        }
        return !!(sum % 10 === 0 ? sanitized : false);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isCreditCard.js
  var require_isCreditCard = __commonJS({
    "node_modules/validator/lib/isCreditCard.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isCreditCard;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isLuhnNumber = _interopRequireDefault(require_isLuhnNumber());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var cards = {
        amex: /^3[47][0-9]{13}$/,
        dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
        // /^[25][1-7][0-9]{14}$/;
        unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
        visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
      };
      var allCards = function() {
        var tmpCardsArray = [];
        for (var cardProvider in cards) {
          if (cards.hasOwnProperty(cardProvider)) {
            tmpCardsArray.push(cards[cardProvider]);
          }
        }
        return tmpCardsArray;
      }();
      function isCreditCard(card) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, _assertString.default)(card);
        var provider = options.provider;
        var sanitized = card.replace(/[- ]+/g, "");
        if (provider && provider.toLowerCase() in cards) {
          if (!cards[provider.toLowerCase()].test(sanitized)) {
            return false;
          }
        } else if (provider && !(provider.toLowerCase() in cards)) {
          throw new Error("".concat(provider, " is not a valid credit card provider."));
        } else if (!allCards.some(function(cardProvider) {
          return cardProvider.test(sanitized);
        })) {
          return false;
        }
        return (0, _isLuhnNumber.default)(card);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isIdentityCard.js
  var require_isIdentityCard = __commonJS({
    "node_modules/validator/lib/isIdentityCard.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isIdentityCard;
      var _assertString = _interopRequireDefault(require_assertString());
      var _isInt = _interopRequireDefault(require_isInt());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validators = {
        PL: function PL(str) {
          (0, _assertString.default)(str);
          var weightOfDigits = {
            1: 1,
            2: 3,
            3: 7,
            4: 9,
            5: 1,
            6: 3,
            7: 7,
            8: 9,
            9: 1,
            10: 3,
            11: 0
          };
          if (str != null && str.length === 11 && (0, _isInt.default)(str, {
            allow_leading_zeroes: true
          })) {
            var digits = str.split("").slice(0, -1);
            var sum = digits.reduce(function(acc, digit, index) {
              return acc + Number(digit) * weightOfDigits[index + 1];
            }, 0);
            var modulo = sum % 10;
            var lastDigit = Number(str.charAt(str.length - 1));
            if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) {
              return true;
            }
          }
          return false;
        },
        ES: function ES(str) {
          (0, _assertString.default)(str);
          var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
          var charsValue = {
            X: 0,
            Y: 1,
            Z: 2
          };
          var controlDigits = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
          var sanitized = str.trim().toUpperCase();
          if (!DNI.test(sanitized)) {
            return false;
          }
          var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function(char) {
            return charsValue[char];
          });
          return sanitized.endsWith(controlDigits[number % 23]);
        },
        FI: function FI(str) {
          (0, _assertString.default)(str);
          if (str.length !== 11) {
            return false;
          }
          if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) {
            return false;
          }
          var checkDigits = "0123456789ABCDEFHJKLMNPRSTUVWXY";
          var idAsNumber = parseInt(str.slice(0, 6), 10) * 1e3 + parseInt(str.slice(7, 10), 10);
          var remainder = idAsNumber % 31;
          var checkDigit = checkDigits[remainder];
          return checkDigit === str.slice(10, 11);
        },
        IN: function IN(str) {
          var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/;
          var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
          var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
          var sanitized = str.trim();
          if (!DNI.test(sanitized)) {
            return false;
          }
          var c = 0;
          var invertedArray = sanitized.replace(/\s/g, "").split("").map(Number).reverse();
          invertedArray.forEach(function(val, i2) {
            c = d[c][p[i2 % 8][val]];
          });
          return c === 0;
        },
        IR: function IR(str) {
          if (!str.match(/^\d{10}$/)) return false;
          str = "0000".concat(str).slice(str.length - 6);
          if (parseInt(str.slice(3, 9), 10) === 0) return false;
          var lastNumber = parseInt(str.slice(9, 10), 10);
          var sum = 0;
          for (var i2 = 0; i2 < 9; i2++) {
            sum += parseInt(str.slice(i2, i2 + 1), 10) * (10 - i2);
          }
          sum %= 11;
          return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
        },
        IT: function IT(str) {
          if (str.length !== 9) return false;
          if (str === "CA00000AA") return false;
          return str.search(/C[A-Z]\d{5}[A-Z]{2}/i) > -1;
        },
        NO: function NO(str) {
          var sanitized = str.trim();
          if (isNaN(Number(sanitized))) return false;
          if (sanitized.length !== 11) return false;
          if (sanitized === "00000000000") return false;
          var f = sanitized.split("").map(Number);
          var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
          var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
          if (k1 !== f[9] || k2 !== f[10]) return false;
          return true;
        },
        TH: function TH(str) {
          if (!str.match(/^[1-8]\d{12}$/)) return false;
          var sum = 0;
          for (var i2 = 0; i2 < 12; i2++) {
            sum += parseInt(str[i2], 10) * (13 - i2);
          }
          return str[12] === ((11 - sum % 11) % 10).toString();
        },
        LK: function LK(str) {
          var old_nic = /^[1-9]\d{8}[vx]$/i;
          var new_nic = /^[1-9]\d{11}$/i;
          if (str.length === 10 && old_nic.test(str)) return true;
          else if (str.length === 12 && new_nic.test(str)) return true;
          return false;
        },
        "he-IL": function heIL(str) {
          var DNI = /^\d{9}$/;
          var sanitized = str.trim();
          if (!DNI.test(sanitized)) {
            return false;
          }
          var id = sanitized;
          var sum = 0, incNum;
          for (var i2 = 0; i2 < id.length; i2++) {
            incNum = Number(id[i2]) * (i2 % 2 + 1);
            sum += incNum > 9 ? incNum - 9 : incNum;
          }
          return sum % 10 === 0;
        },
        "ar-LY": function arLY(str) {
          var NIN = /^(1|2)\d{11}$/;
          var sanitized = str.trim();
          if (!NIN.test(sanitized)) {
            return false;
          }
          return true;
        },
        "ar-TN": function arTN(str) {
          var DNI = /^\d{8}$/;
          var sanitized = str.trim();
          if (!DNI.test(sanitized)) {
            return false;
          }
          return true;
        },
        "zh-CN": function zhCN(str) {
          var provincesAndCities = [
            "11",
            // 北京
            "12",
            // 天津
            "13",
            // 河北
            "14",
            // 山西
            "15",
            // 内蒙古
            "21",
            // 辽宁
            "22",
            // 吉林
            "23",
            // 黑龙江
            "31",
            // 上海
            "32",
            // 江苏
            "33",
            // 浙江
            "34",
            // 安徽
            "35",
            // 福建
            "36",
            // 江西
            "37",
            // 山东
            "41",
            // 河南
            "42",
            // 湖北
            "43",
            // 湖南
            "44",
            // 广东
            "45",
            // 广西
            "46",
            // 海南
            "50",
            // 重庆
            "51",
            // 四川
            "52",
            // 贵州
            "53",
            // 云南
            "54",
            // 西藏
            "61",
            // 陕西
            "62",
            // 甘肃
            "63",
            // 青海
            "64",
            // 宁夏
            "65",
            // 新疆
            "71",
            // 台湾
            "81",
            // 香港
            "82",
            // 澳门
            "91"
            // 国外
          ];
          var powers = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];
          var parityBit = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
          var checkAddressCode = function checkAddressCode2(addressCode) {
            return provincesAndCities.includes(addressCode);
          };
          var checkBirthDayCode = function checkBirthDayCode2(birDayCode) {
            var yyyy = parseInt(birDayCode.substring(0, 4), 10);
            var mm = parseInt(birDayCode.substring(4, 6), 10);
            var dd = parseInt(birDayCode.substring(6), 10);
            var xdata = new Date(yyyy, mm - 1, dd);
            if (xdata > /* @__PURE__ */ new Date()) {
              return false;
            } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
              return true;
            }
            return false;
          };
          var getParityBit = function getParityBit2(idCardNo) {
            var id17 = idCardNo.substring(0, 17);
            var power = 0;
            for (var i2 = 0; i2 < 17; i2++) {
              power += parseInt(id17.charAt(i2), 10) * parseInt(powers[i2], 10);
            }
            var mod = power % 11;
            return parityBit[mod];
          };
          var checkParityBit = function checkParityBit2(idCardNo) {
            return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
          };
          var check15IdCardNo = function check15IdCardNo2(idCardNo) {
            var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
            if (!check) return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = "19".concat(idCardNo.substring(6, 12));
            check = checkBirthDayCode(birDayCode);
            if (!check) return false;
            return true;
          };
          var check18IdCardNo = function check18IdCardNo2(idCardNo) {
            var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
            if (!check) return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = idCardNo.substring(6, 14);
            check = checkBirthDayCode(birDayCode);
            if (!check) return false;
            return checkParityBit(idCardNo);
          };
          var checkIdCardNo = function checkIdCardNo2(idCardNo) {
            var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
            if (!check) return false;
            if (idCardNo.length === 15) {
              return check15IdCardNo(idCardNo);
            }
            return check18IdCardNo(idCardNo);
          };
          return checkIdCardNo(str);
        },
        "zh-HK": function zhHK(str) {
          str = str.trim();
          var regexHKID = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/;
          var regexIsDigit = /^[0-9]$/;
          str = str.toUpperCase();
          if (!regexHKID.test(str)) return false;
          str = str.replace(/\[|\]|\(|\)/g, "");
          if (str.length === 8) str = "3".concat(str);
          var checkSumVal = 0;
          for (var i2 = 0; i2 <= 7; i2++) {
            var convertedChar = void 0;
            if (!regexIsDigit.test(str[i2])) convertedChar = (str[i2].charCodeAt(0) - 55) % 11;
            else convertedChar = str[i2];
            checkSumVal += convertedChar * (9 - i2);
          }
          checkSumVal %= 11;
          var checkSumConverted;
          if (checkSumVal === 0) checkSumConverted = "0";
          else if (checkSumVal === 1) checkSumConverted = "A";
          else checkSumConverted = String(11 - checkSumVal);
          if (checkSumConverted === str[str.length - 1]) return true;
          return false;
        },
        "zh-TW": function zhTW(str) {
          var ALPHABET_CODES = {
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            G: 16,
            H: 17,
            I: 34,
            J: 18,
            K: 19,
            L: 20,
            M: 21,
            N: 22,
            O: 35,
            P: 23,
            Q: 24,
            R: 25,
            S: 26,
            T: 27,
            U: 28,
            V: 29,
            W: 32,
            X: 30,
            Y: 31,
            Z: 33
          };
          var sanitized = str.trim().toUpperCase();
          if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;
          return Array.from(sanitized).reduce(function(sum, number, index) {
            if (index === 0) {
              var code = ALPHABET_CODES[number];
              return code % 10 * 9 + Math.floor(code / 10);
            }
            if (index === 9) {
              return (10 - sum % 10 - Number(number)) % 10 === 0;
            }
            return sum + Number(number) * (9 - index);
          }, 0);
        }
      };
      function isIdentityCard(str, locale) {
        (0, _assertString.default)(str);
        if (locale in validators) {
          return validators[locale](str);
        } else if (locale === "any") {
          for (var key in validators) {
            if (validators.hasOwnProperty(key)) {
              var validator = validators[key];
              if (validator(str)) {
                return true;
              }
            }
          }
          return false;
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isEAN.js
  var require_isEAN = __commonJS({
    "node_modules/validator/lib/isEAN.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isEAN;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var LENGTH_EAN_8 = 8;
      var LENGTH_EAN_14 = 14;
      var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
      function getPositionWeightThroughLengthAndIndex(length, index) {
        if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) {
          return index % 2 === 0 ? 3 : 1;
        }
        return index % 2 === 0 ? 1 : 3;
      }
      function calculateCheckDigit(ean) {
        var checksum = ean.slice(0, -1).split("").map(function(char, index) {
          return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
        }).reduce(function(acc, partialSum) {
          return acc + partialSum;
        }, 0);
        var remainder = 10 - checksum % 10;
        return remainder < 10 ? remainder : 0;
      }
      function isEAN(str) {
        (0, _assertString.default)(str);
        var actualCheckDigit = Number(str.slice(-1));
        return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISIN.js
  var require_isISIN = __commonJS({
    "node_modules/validator/lib/isISIN.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISIN;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
      function isISIN(str) {
        (0, _assertString.default)(str);
        if (!isin.test(str)) {
          return false;
        }
        var double = true;
        var sum = 0;
        for (var i2 = str.length - 2; i2 >= 0; i2--) {
          if (str[i2] >= "A" && str[i2] <= "Z") {
            var value = str[i2].charCodeAt(0) - 55;
            var lo = value % 10;
            var hi = Math.trunc(value / 10);
            for (var _i = 0, _arr = [lo, hi]; _i < _arr.length; _i++) {
              var digit = _arr[_i];
              if (double) {
                if (digit >= 5) {
                  sum += 1 + (digit - 5) * 2;
                } else {
                  sum += digit * 2;
                }
              } else {
                sum += digit;
              }
              double = !double;
            }
          } else {
            var _digit = str[i2].charCodeAt(0) - "0".charCodeAt(0);
            if (double) {
              if (_digit >= 5) {
                sum += 1 + (_digit - 5) * 2;
              } else {
                sum += _digit * 2;
              }
            } else {
              sum += _digit;
            }
            double = !double;
          }
        }
        var check = Math.trunc((sum + 9) / 10) * 10 - sum;
        return +str[str.length - 1] === check;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISBN.js
  var require_isISBN = __commonJS({
    "node_modules/validator/lib/isISBN.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISBN;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var possibleIsbn10 = /^(?:[0-9]{9}X|[0-9]{10})$/;
      var possibleIsbn13 = /^(?:[0-9]{13})$/;
      var factor = [1, 3];
      function isISBN(isbn, options) {
        (0, _assertString.default)(isbn);
        var version = String((options === null || options === void 0 ? void 0 : options.version) || options);
        if (!(options !== null && options !== void 0 && options.version || options)) {
          return isISBN(isbn, {
            version: 10
          }) || isISBN(isbn, {
            version: 13
          });
        }
        var sanitizedIsbn = isbn.replace(/[\s-]+/g, "");
        var checksum = 0;
        if (version === "10") {
          if (!possibleIsbn10.test(sanitizedIsbn)) {
            return false;
          }
          for (var i2 = 0; i2 < version - 1; i2++) {
            checksum += (i2 + 1) * sanitizedIsbn.charAt(i2);
          }
          if (sanitizedIsbn.charAt(9) === "X") {
            checksum += 10 * 10;
          } else {
            checksum += 10 * sanitizedIsbn.charAt(9);
          }
          if (checksum % 11 === 0) {
            return true;
          }
        } else if (version === "13") {
          if (!possibleIsbn13.test(sanitizedIsbn)) {
            return false;
          }
          for (var _i = 0; _i < 12; _i++) {
            checksum += factor[_i % 2] * sanitizedIsbn.charAt(_i);
          }
          if (sanitizedIsbn.charAt(12) - (10 - checksum % 10) % 10 === 0) {
            return true;
          }
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISSN.js
  var require_isISSN = __commonJS({
    "node_modules/validator/lib/isISSN.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISSN;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var issn = "^\\d{4}-?\\d{3}[\\dX]$";
      function isISSN(str) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, _assertString.default)(str);
        var testIssn = issn;
        testIssn = options.require_hyphen ? testIssn.replace("?", "") : testIssn;
        testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, "i");
        if (!testIssn.test(str)) {
          return false;
        }
        var digits = str.replace("-", "").toUpperCase();
        var checksum = 0;
        for (var i2 = 0; i2 < digits.length; i2++) {
          var digit = digits[i2];
          checksum += (digit === "X" ? 10 : +digit) * (8 - i2);
        }
        return checksum % 11 === 0;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/util/algorithms.js
  var require_algorithms = __commonJS({
    "node_modules/validator/lib/util/algorithms.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.iso7064Check = iso7064Check;
      exports.luhnCheck = luhnCheck;
      exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
      exports.verhoeffCheck = verhoeffCheck;
      function iso7064Check(str) {
        var checkvalue = 10;
        for (var i2 = 0; i2 < str.length - 1; i2++) {
          checkvalue = (parseInt(str[i2], 10) + checkvalue) % 10 === 0 ? 10 * 2 % 11 : (parseInt(str[i2], 10) + checkvalue) % 10 * 2 % 11;
        }
        checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
        return checkvalue === parseInt(str[10], 10);
      }
      function luhnCheck(str) {
        var checksum = 0;
        var second = false;
        for (var i2 = str.length - 1; i2 >= 0; i2--) {
          if (second) {
            var product = parseInt(str[i2], 10) * 2;
            if (product > 9) {
              checksum += product.toString().split("").map(function(a) {
                return parseInt(a, 10);
              }).reduce(function(a, b) {
                return a + b;
              }, 0);
            } else {
              checksum += product;
            }
          } else {
            checksum += parseInt(str[i2], 10);
          }
          second = !second;
        }
        return checksum % 10 === 0;
      }
      function reverseMultiplyAndSum(digits, base) {
        var total = 0;
        for (var i2 = 0; i2 < digits.length; i2++) {
          total += digits[i2] * (base - i2);
        }
        return total;
      }
      function verhoeffCheck(str) {
        var d_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
        var p_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
        var str_copy = str.split("").reverse().join("");
        var checksum = 0;
        for (var i2 = 0; i2 < str_copy.length; i2++) {
          checksum = d_table[checksum][p_table[i2 % 8][parseInt(str_copy[i2], 10)]];
        }
        return checksum === 0;
      }
    }
  });

  // node_modules/validator/lib/isTaxID.js
  var require_isTaxID = __commonJS({
    "node_modules/validator/lib/isTaxID.js"(exports, module) {
      "use strict";
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isTaxID;
      var _assertString = _interopRequireDefault(require_assertString());
      var algorithms = _interopRequireWildcard(require_algorithms());
      var _isDate = _interopRequireDefault(require_isDate());
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap) return null;
        var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(e2) {
          return e2 ? t : r;
        })(e);
      }
      function _interopRequireWildcard(e, r) {
        if (!r && e && e.__esModule) return e;
        if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e };
        var t = _getRequireWildcardCache(r);
        if (t && t.has(e)) return t.get(e);
        var n13 = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
          var i2 = a ? Object.getOwnPropertyDescriptor(e, u) : null;
          i2 && (i2.get || i2.set) ? Object.defineProperty(n13, u, i2) : n13[u] = e[u];
        }
        return n13.default = e, t && t.set(e, n13), n13;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n13 = Object.prototype.toString.call(o).slice(8, -1);
        if (n13 === "Object" && o.constructor) n13 = o.constructor.name;
        if (n13 === "Map" || n13 === "Set") return Array.from(o);
        if (n13 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n13)) return _arrayLikeToArray(o, minLen);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
        return arr2;
      }
      function bgBgCheck(tin) {
        var century_year = tin.slice(0, 2);
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 40) {
          month -= 40;
          century_year = "20".concat(century_year);
        } else if (month > 20) {
          month -= 20;
          century_year = "18".concat(century_year);
        } else {
          century_year = "19".concat(century_year);
        }
        if (month < 10) {
          month = "0".concat(month);
        }
        var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var digits = tin.split("").map(function(a) {
          return parseInt(a, 10);
        });
        var multip_lookup = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        var checksum = 0;
        for (var i2 = 0; i2 < multip_lookup.length; i2++) {
          checksum += digits[i2] * multip_lookup[i2];
        }
        checksum = checksum % 11 === 10 ? 0 : checksum % 11;
        return checksum === digits[9];
      }
      function isCanadianSIN(input) {
        var digitsArray = input.split("");
        var even = digitsArray.filter(function(_, idx) {
          return idx % 2;
        }).map(function(i2) {
          return Number(i2) * 2;
        }).join("").split("");
        var total = digitsArray.filter(function(_, idx) {
          return !(idx % 2);
        }).concat(even).map(function(i2) {
          return Number(i2);
        }).reduce(function(acc, cur) {
          return acc + cur;
        });
        return total % 10 === 0;
      }
      function csCzCheck(tin) {
        tin = tin.replace(/\W/, "");
        var full_year = parseInt(tin.slice(0, 2), 10);
        if (tin.length === 10) {
          if (full_year < 54) {
            full_year = "20".concat(full_year);
          } else {
            full_year = "19".concat(full_year);
          }
        } else {
          if (tin.slice(6) === "000") {
            return false;
          }
          if (full_year < 54) {
            full_year = "19".concat(full_year);
          } else {
            return false;
          }
        }
        if (full_year.length === 3) {
          full_year = [full_year.slice(0, 2), "0", full_year.slice(2)].join("");
        }
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 50) {
          month -= 50;
        }
        if (month > 20) {
          if (parseInt(full_year, 10) < 2004) {
            return false;
          }
          month -= 20;
        }
        if (month < 10) {
          month = "0".concat(month);
        }
        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        if (tin.length === 10) {
          if (parseInt(tin, 10) % 11 !== 0) {
            var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;
            if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
              if (parseInt(tin.slice(9), 10) !== 0) {
                return false;
              }
            } else {
              return false;
            }
          }
        }
        return true;
      }
      function deAtCheck(tin) {
        return algorithms.luhnCheck(tin);
      }
      function deDeCheck(tin) {
        var digits = tin.split("").map(function(a) {
          return parseInt(a, 10);
        });
        var occurences = [];
        for (var i2 = 0; i2 < digits.length - 1; i2++) {
          occurences.push("");
          for (var j = 0; j < digits.length - 1; j++) {
            if (digits[i2] === digits[j]) {
              occurences[i2] += j;
            }
          }
        }
        occurences = occurences.filter(function(a) {
          return a.length > 1;
        });
        if (occurences.length !== 2 && occurences.length !== 3) {
          return false;
        }
        if (occurences[0].length === 3) {
          var trip_locations = occurences[0].split("").map(function(a) {
            return parseInt(a, 10);
          });
          var recurrent = 0;
          for (var _i = 0; _i < trip_locations.length - 1; _i++) {
            if (trip_locations[_i] + 1 === trip_locations[_i + 1]) {
              recurrent += 1;
            }
          }
          if (recurrent === 2) {
            return false;
          }
        }
        return algorithms.iso7064Check(tin);
      }
      function dkDkCheck(tin) {
        tin = tin.replace(/\W/, "");
        var year = parseInt(tin.slice(4, 6), 10);
        var century_digit = tin.slice(6, 7);
        switch (century_digit) {
          case "0":
          case "1":
          case "2":
          case "3":
            year = "19".concat(year);
            break;
          case "4":
          case "9":
            if (year < 37) {
              year = "20".concat(year);
            } else {
              year = "19".concat(year);
            }
            break;
          default:
            if (year < 37) {
              year = "20".concat(year);
            } else if (year > 58) {
              year = "18".concat(year);
            } else {
              return false;
            }
            break;
        }
        if (year.length === 3) {
          year = [year.slice(0, 2), "0", year.slice(2)].join("");
        }
        var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var digits = tin.split("").map(function(a) {
          return parseInt(a, 10);
        });
        var checksum = 0;
        var weight = 4;
        for (var i2 = 0; i2 < 9; i2++) {
          checksum += digits[i2] * weight;
          weight -= 1;
          if (weight === 1) {
            weight = 7;
          }
        }
        checksum %= 11;
        if (checksum === 1) {
          return false;
        }
        return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
      }
      function elCyCheck(tin) {
        var digits = tin.slice(0, 8).split("").map(function(a) {
          return parseInt(a, 10);
        });
        var checksum = 0;
        for (var i2 = 1; i2 < digits.length; i2 += 2) {
          checksum += digits[i2];
        }
        for (var _i2 = 0; _i2 < digits.length; _i2 += 2) {
          if (digits[_i2] < 2) {
            checksum += 1 - digits[_i2];
          } else {
            checksum += 2 * (digits[_i2] - 2) + 5;
            if (digits[_i2] > 4) {
              checksum += 2;
            }
          }
        }
        return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
      }
      function elGrCheck(tin) {
        var digits = tin.split("").map(function(a) {
          return parseInt(a, 10);
        });
        var checksum = 0;
        for (var i2 = 0; i2 < 8; i2++) {
          checksum += digits[i2] * Math.pow(2, 8 - i2);
        }
        return checksum % 11 % 10 === digits[8];
      }
      function enIeCheck(tin) {
        var checksum = algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
          return parseInt(a, 10);
        }), 8);
        if (tin.length === 9 && tin[8] !== "W") {
          checksum += (tin[8].charCodeAt(0) - 64) * 9;
        }
        checksum %= 23;
        if (checksum === 0) {
          return tin[7].toUpperCase() === "W";
        }
        return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
      }
      var enUsCampusPrefix = {
        andover: ["10", "12"],
        atlanta: ["60", "67"],
        austin: ["50", "53"],
        brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
        cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
        fresno: ["15", "24"],
        internet: ["20", "26", "27", "45", "46", "47"],
        kansas: ["40", "44"],
        memphis: ["94", "95"],
        ogden: ["80", "90"],
        philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
        sba: ["31"]
      };
      function enUsGetPrefixes() {
        var prefixes = [];
        for (var location in enUsCampusPrefix) {
          if (enUsCampusPrefix.hasOwnProperty(location)) {
            prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
          }
        }
        return prefixes;
      }
      function enUsCheck(tin) {
        return enUsGetPrefixes().indexOf(tin.slice(0, 2)) !== -1;
      }
      function esArCheck(tin) {
        var accum = 0;
        var digits = tin.split("");
        var digit = parseInt(digits.pop(), 10);
        for (var i2 = 0; i2 < digits.length; i2++) {
          accum += digits[9 - i2] * (2 + i2 % 6);
        }
        var verif = 11 - accum % 11;
        if (verif === 11) {
          verif = 0;
        } else if (verif === 10) {
          verif = 9;
        }
        return digit === verif;
      }
      function esEsCheck(tin) {
        var chars = tin.toUpperCase().split("");
        if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
          var lead_replace = 0;
          switch (chars[0]) {
            case "Y":
              lead_replace = 1;
              break;
            case "Z":
              lead_replace = 2;
              break;
            default:
          }
          chars.splice(0, 1, lead_replace);
        } else {
          while (chars.length < 9) {
            chars.unshift(0);
          }
        }
        var lookup = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
        chars = chars.join("");
        var checksum = parseInt(chars.slice(0, 8), 10) % 23;
        return chars[8] === lookup[checksum];
      }
      function etEeCheck(tin) {
        var full_year = tin.slice(1, 3);
        var century_digit = tin.slice(0, 1);
        switch (century_digit) {
          case "1":
          case "2":
            full_year = "18".concat(full_year);
            break;
          case "3":
          case "4":
            full_year = "19".concat(full_year);
            break;
          default:
            full_year = "20".concat(full_year);
            break;
        }
        var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var digits = tin.split("").map(function(a) {
          return parseInt(a, 10);
        });
        var checksum = 0;
        var weight = 1;
        for (var i2 = 0; i2 < 10; i2++) {
          checksum += digits[i2] * weight;
          weight += 1;
          if (weight === 10) {
            weight = 1;
          }
        }
        if (checksum % 11 === 10) {
          checksum = 0;
          weight = 3;
          for (var _i3 = 0; _i3 < 10; _i3++) {
            checksum += digits[_i3] * weight;
            weight += 1;
            if (weight === 10) {
              weight = 1;
            }
          }
          if (checksum % 11 === 10) {
            return digits[10] === 0;
          }
        }
        return checksum % 11 === digits[10];
      }
      function fiFiCheck(tin) {
        var full_year = tin.slice(4, 6);
        var century_symbol = tin.slice(6, 7);
        switch (century_symbol) {
          case "+":
            full_year = "18".concat(full_year);
            break;
          case "-":
            full_year = "19".concat(full_year);
            break;
          default:
            full_year = "20".concat(full_year);
            break;
        }
        var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;
        if (checksum < 10) {
          return checksum === parseInt(tin.slice(10), 10);
        }
        checksum -= 10;
        var letters_lookup = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
        return letters_lookup[checksum] === tin.slice(10);
      }
      function frBeCheck(tin) {
        if (tin.slice(2, 4) !== "00" || tin.slice(4, 6) !== "00") {
          var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));
          if (!(0, _isDate.default)(date, "YY/MM/DD")) {
            return false;
          }
        }
        var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
        var checkdigits = parseInt(tin.slice(9, 11), 10);
        if (checksum !== checkdigits) {
          checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;
          if (checksum !== checkdigits) {
            return false;
          }
        }
        return true;
      }
      function frFrCheck(tin) {
        tin = tin.replace(/\s/g, "");
        var checksum = parseInt(tin.slice(0, 10), 10) % 511;
        var checkdigits = parseInt(tin.slice(10, 13), 10);
        return checksum === checkdigits;
      }
      function frLuCheck(tin) {
        var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        if (!algorithms.luhnCheck(tin.slice(0, 12))) {
          return false;
        }
        return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
      }
      function hrHrCheck(tin) {
        return algorithms.iso7064Check(tin);
      }
      function huHuCheck(tin) {
        var digits = tin.split("").map(function(a) {
          return parseInt(a, 10);
        });
        var checksum = 8;
        for (var i2 = 1; i2 < 9; i2++) {
          checksum += digits[i2] * (i2 + 1);
        }
        return checksum % 11 === digits[9];
      }
      function itItNameCheck(name) {
        var vowelflag = false;
        var xflag = false;
        for (var i2 = 0; i2 < 3; i2++) {
          if (!vowelflag && /[AEIOU]/.test(name[i2])) {
            vowelflag = true;
          } else if (!xflag && vowelflag && name[i2] === "X") {
            xflag = true;
          } else if (i2 > 0) {
            if (vowelflag && !xflag) {
              if (!/[AEIOU]/.test(name[i2])) {
                return false;
              }
            }
            if (xflag) {
              if (!/X/.test(name[i2])) {
                return false;
              }
            }
          }
        }
        return true;
      }
      function itItCheck(tin) {
        var chars = tin.toUpperCase().split("");
        if (!itItNameCheck(chars.slice(0, 3))) {
          return false;
        }
        if (!itItNameCheck(chars.slice(3, 6))) {
          return false;
        }
        var number_locations = [6, 7, 9, 10, 12, 13, 14];
        var number_replace = {
          L: "0",
          M: "1",
          N: "2",
          P: "3",
          Q: "4",
          R: "5",
          S: "6",
          T: "7",
          U: "8",
          V: "9"
        };
        for (var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++) {
          var i2 = _number_locations[_i4];
          if (chars[i2] in number_replace) {
            chars.splice(i2, 1, number_replace[chars[i2]]);
          }
        }
        var month_replace = {
          A: "01",
          B: "02",
          C: "03",
          D: "04",
          E: "05",
          H: "06",
          L: "07",
          M: "08",
          P: "09",
          R: "10",
          S: "11",
          T: "12"
        };
        var month = month_replace[chars[8]];
        var day = parseInt(chars[9] + chars[10], 10);
        if (day > 40) {
          day -= 40;
        }
        if (day < 10) {
          day = "0".concat(day);
        }
        var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);
        if (!(0, _isDate.default)(date, "YY/MM/DD")) {
          return false;
        }
        var checksum = 0;
        for (var _i5 = 1; _i5 < chars.length - 1; _i5 += 2) {
          var char_to_int = parseInt(chars[_i5], 10);
          if (isNaN(char_to_int)) {
            char_to_int = chars[_i5].charCodeAt(0) - 65;
          }
          checksum += char_to_int;
        }
        var odd_convert = {
          // Maps of characters at odd places
          A: 1,
          B: 0,
          C: 5,
          D: 7,
          E: 9,
          F: 13,
          G: 15,
          H: 17,
          I: 19,
          J: 21,
          K: 2,
          L: 4,
          M: 18,
          N: 20,
          O: 11,
          P: 3,
          Q: 6,
          R: 8,
          S: 12,
          T: 14,
          U: 16,
          V: 10,
          W: 22,
          X: 25,
          Y: 24,
          Z: 23,
          0: 1,
          1: 0
        };
        for (var _i6 = 0; _i6 < chars.length - 1; _i6 += 2) {
          var _char_to_int = 0;
          if (chars[_i6] in odd_convert) {
            _char_to_int = odd_convert[chars[_i6]];
          } else {
            var multiplier = parseInt(chars[_i6], 10);
            _char_to_int = 2 * multiplier + 1;
            if (multiplier > 4) {
              _char_to_int += 2;
            }
          }
          checksum += _char_to_int;
        }
        if (String.fromCharCode(65 + checksum % 26) !== chars[15]) {
          return false;
        }
        return true;
      }
      function lvLvCheck(tin) {
        tin = tin.replace(/\W/, "");
        var day = tin.slice(0, 2);
        if (day !== "32") {
          var month = tin.slice(2, 4);
          if (month !== "00") {
            var full_year = tin.slice(4, 6);
            switch (tin[6]) {
              case "0":
                full_year = "18".concat(full_year);
                break;
              case "1":
                full_year = "19".concat(full_year);
                break;
              default:
                full_year = "20".concat(full_year);
                break;
            }
            var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);
            if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
              return false;
            }
          }
          var checksum = 1101;
          var multip_lookup = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
          for (var i2 = 0; i2 < tin.length - 1; i2++) {
            checksum -= parseInt(tin[i2], 10) * multip_lookup[i2];
          }
          return parseInt(tin[10], 10) === checksum % 11;
        }
        return true;
      }
      function mtMtCheck(tin) {
        if (tin.length !== 9) {
          var chars = tin.toUpperCase().split("");
          while (chars.length < 8) {
            chars.unshift(0);
          }
          switch (tin[7]) {
            case "A":
            case "P":
              if (parseInt(chars[6], 10) === 0) {
                return false;
              }
              break;
            default: {
              var first_part = parseInt(chars.join("").slice(0, 5), 10);
              if (first_part > 32e3) {
                return false;
              }
              var second_part = parseInt(chars.join("").slice(5, 7), 10);
              if (first_part === second_part) {
                return false;
              }
            }
          }
        }
        return true;
      }
      function nlNlCheck(tin) {
        return algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
          return parseInt(a, 10);
        }), 9) % 11 === parseInt(tin[8], 10);
      }
      function plPlCheck(tin) {
        if (tin.length === 10) {
          var lookup = [6, 5, 7, 2, 3, 4, 5, 6, 7];
          var _checksum = 0;
          for (var i2 = 0; i2 < lookup.length; i2++) {
            _checksum += parseInt(tin[i2], 10) * lookup[i2];
          }
          _checksum %= 11;
          if (_checksum === 10) {
            return false;
          }
          return _checksum === parseInt(tin[9], 10);
        }
        var full_year = tin.slice(0, 2);
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 80) {
          full_year = "18".concat(full_year);
          month -= 80;
        } else if (month > 60) {
          full_year = "22".concat(full_year);
          month -= 60;
        } else if (month > 40) {
          full_year = "21".concat(full_year);
          month -= 40;
        } else if (month > 20) {
          full_year = "20".concat(full_year);
          month -= 20;
        } else {
          full_year = "19".concat(full_year);
        }
        if (month < 10) {
          month = "0".concat(month);
        }
        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        var checksum = 0;
        var multiplier = 1;
        for (var _i7 = 0; _i7 < tin.length - 1; _i7++) {
          checksum += parseInt(tin[_i7], 10) * multiplier % 10;
          multiplier += 2;
          if (multiplier > 10) {
            multiplier = 1;
          } else if (multiplier === 5) {
            multiplier += 2;
          }
        }
        checksum = 10 - checksum % 10;
        return checksum === parseInt(tin[10], 10);
      }
      function ptBrCheck(tin) {
        if (tin.length === 11) {
          var _sum;
          var remainder;
          _sum = 0;
          if (
            // Reject known invalid CPFs
            tin === "11111111111" || tin === "22222222222" || tin === "33333333333" || tin === "44444444444" || tin === "55555555555" || tin === "66666666666" || tin === "77777777777" || tin === "88888888888" || tin === "99999999999" || tin === "00000000000"
          ) return false;
          for (var i2 = 1; i2 <= 9; i2++) _sum += parseInt(tin.substring(i2 - 1, i2), 10) * (11 - i2);
          remainder = _sum * 10 % 11;
          if (remainder === 10) remainder = 0;
          if (remainder !== parseInt(tin.substring(9, 10), 10)) return false;
          _sum = 0;
          for (var _i8 = 1; _i8 <= 10; _i8++) _sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
          remainder = _sum * 10 % 11;
          if (remainder === 10) remainder = 0;
          if (remainder !== parseInt(tin.substring(10, 11), 10)) return false;
          return true;
        }
        if (
          // Reject know invalid CNPJs
          tin === "00000000000000" || tin === "11111111111111" || tin === "22222222222222" || tin === "33333333333333" || tin === "44444444444444" || tin === "55555555555555" || tin === "66666666666666" || tin === "77777777777777" || tin === "88888888888888" || tin === "99999999999999"
        ) {
          return false;
        }
        var length = tin.length - 2;
        var identifiers = tin.substring(0, length);
        var verificators = tin.substring(length);
        var sum = 0;
        var pos2 = length - 7;
        for (var _i9 = length; _i9 >= 1; _i9--) {
          sum += identifiers.charAt(length - _i9) * pos2;
          pos2 -= 1;
          if (pos2 < 2) {
            pos2 = 9;
          }
        }
        var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result !== parseInt(verificators.charAt(0), 10)) {
          return false;
        }
        length += 1;
        identifiers = tin.substring(0, length);
        sum = 0;
        pos2 = length - 7;
        for (var _i10 = length; _i10 >= 1; _i10--) {
          sum += identifiers.charAt(length - _i10) * pos2;
          pos2 -= 1;
          if (pos2 < 2) {
            pos2 = 9;
          }
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result !== parseInt(verificators.charAt(1), 10)) {
          return false;
        }
        return true;
      }
      function ptPtCheck(tin) {
        var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
          return parseInt(a, 10);
        }), 9) % 11;
        if (checksum > 9) {
          return parseInt(tin[8], 10) === 0;
        }
        return checksum === parseInt(tin[8], 10);
      }
      function roRoCheck(tin) {
        if (tin.slice(0, 4) !== "9000") {
          var full_year = tin.slice(1, 3);
          switch (tin[0]) {
            case "1":
            case "2":
              full_year = "19".concat(full_year);
              break;
            case "3":
            case "4":
              full_year = "18".concat(full_year);
              break;
            case "5":
            case "6":
              full_year = "20".concat(full_year);
              break;
            default:
          }
          var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
          if (date.length === 8) {
            if (!(0, _isDate.default)(date, "YY/MM/DD")) {
              return false;
            }
          } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
            return false;
          }
          var digits = tin.split("").map(function(a) {
            return parseInt(a, 10);
          });
          var multipliers = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
          var checksum = 0;
          for (var i2 = 0; i2 < multipliers.length; i2++) {
            checksum += digits[i2] * multipliers[i2];
          }
          if (checksum % 11 === 10) {
            return digits[12] === 1;
          }
          return digits[12] === checksum % 11;
        }
        return true;
      }
      function skSkCheck(tin) {
        if (tin.length === 9) {
          tin = tin.replace(/\W/, "");
          if (tin.slice(6) === "000") {
            return false;
          }
          var full_year = parseInt(tin.slice(0, 2), 10);
          if (full_year > 53) {
            return false;
          }
          if (full_year < 10) {
            full_year = "190".concat(full_year);
          } else {
            full_year = "19".concat(full_year);
          }
          var month = parseInt(tin.slice(2, 4), 10);
          if (month > 50) {
            month -= 50;
          }
          if (month < 10) {
            month = "0".concat(month);
          }
          var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
          if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
            return false;
          }
        }
        return true;
      }
      function slSiCheck(tin) {
        var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
          return parseInt(a, 10);
        }), 8) % 11;
        if (checksum === 10) {
          return parseInt(tin[7], 10) === 0;
        }
        return checksum === parseInt(tin[7], 10);
      }
      function svSeCheck(tin) {
        var tin_copy = tin.slice(0);
        if (tin.length > 11) {
          tin_copy = tin_copy.slice(2);
        }
        var full_year = "";
        var month = tin_copy.slice(2, 4);
        var day = parseInt(tin_copy.slice(4, 6), 10);
        if (tin.length > 11) {
          full_year = tin.slice(0, 4);
        } else {
          full_year = tin.slice(0, 2);
          if (tin.length === 11 && day < 60) {
            var current_year = (/* @__PURE__ */ new Date()).getFullYear().toString();
            var current_century = parseInt(current_year.slice(0, 2), 10);
            current_year = parseInt(current_year, 10);
            if (tin[6] === "-") {
              if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) {
                full_year = "".concat(current_century - 1).concat(full_year);
              } else {
                full_year = "".concat(current_century).concat(full_year);
              }
            } else {
              full_year = "".concat(current_century - 1).concat(full_year);
              if (current_year - parseInt(full_year, 10) < 100) {
                return false;
              }
            }
          }
        }
        if (day > 60) {
          day -= 60;
        }
        if (day < 10) {
          day = "0".concat(day);
        }
        var date = "".concat(full_year, "/").concat(month, "/").concat(day);
        if (date.length === 8) {
          if (!(0, _isDate.default)(date, "YY/MM/DD")) {
            return false;
          }
        } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
        return algorithms.luhnCheck(tin.replace(/\W/, ""));
      }
      function ukUaCheck(tin) {
        var digits = tin.split("").map(function(a) {
          return parseInt(a, 10);
        });
        var multipliers = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
        var checksum = 0;
        for (var i2 = 0; i2 < multipliers.length; i2++) {
          checksum += digits[i2] * multipliers[i2];
        }
        return checksum % 11 === 10 ? digits[9] === 0 : digits[9] === checksum % 11;
      }
      var taxIdFormat = {
        "bg-BG": /^\d{10}$/,
        "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
        "de-AT": /^\d{9}$/,
        "de-DE": /^[1-9]\d{10}$/,
        "dk-DK": /^\d{6}-{0,1}\d{4}$/,
        "el-CY": /^[09]\d{7}[A-Z]$/,
        "el-GR": /^([0-4]|[7-9])\d{8}$/,
        "en-CA": /^\d{9}$/,
        "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
        "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
        "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
        "es-AR": /(20|23|24|27|30|33|34)[0-9]{8}[0-9]/,
        "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
        "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
        "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
        "fr-BE": /^\d{11}$/,
        "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
        // Conforms both to official spec and provided example
        "fr-LU": /^\d{13}$/,
        "hr-HR": /^\d{11}$/,
        "hu-HU": /^8\d{9}$/,
        "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
        "lv-LV": /^\d{6}-{0,1}\d{5}$/,
        // Conforms both to DG TAXUD spec and original research
        "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
        "nl-NL": /^\d{9}$/,
        "pl-PL": /^\d{10,11}$/,
        "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
        "pt-PT": /^\d{9}$/,
        "ro-RO": /^\d{13}$/,
        "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
        "sl-SI": /^[1-9]\d{7}$/,
        "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/,
        "uk-UA": /^\d{10}$/
      };
      taxIdFormat["lb-LU"] = taxIdFormat["fr-LU"];
      taxIdFormat["lt-LT"] = taxIdFormat["et-EE"];
      taxIdFormat["nl-BE"] = taxIdFormat["fr-BE"];
      taxIdFormat["fr-CA"] = taxIdFormat["en-CA"];
      var taxIdCheck = {
        "bg-BG": bgBgCheck,
        "cs-CZ": csCzCheck,
        "de-AT": deAtCheck,
        "de-DE": deDeCheck,
        "dk-DK": dkDkCheck,
        "el-CY": elCyCheck,
        "el-GR": elGrCheck,
        "en-CA": isCanadianSIN,
        "en-IE": enIeCheck,
        "en-US": enUsCheck,
        "es-AR": esArCheck,
        "es-ES": esEsCheck,
        "et-EE": etEeCheck,
        "fi-FI": fiFiCheck,
        "fr-BE": frBeCheck,
        "fr-FR": frFrCheck,
        "fr-LU": frLuCheck,
        "hr-HR": hrHrCheck,
        "hu-HU": huHuCheck,
        "it-IT": itItCheck,
        "lv-LV": lvLvCheck,
        "mt-MT": mtMtCheck,
        "nl-NL": nlNlCheck,
        "pl-PL": plPlCheck,
        "pt-BR": ptBrCheck,
        "pt-PT": ptPtCheck,
        "ro-RO": roRoCheck,
        "sk-SK": skSkCheck,
        "sl-SI": slSiCheck,
        "sv-SE": svSeCheck,
        "uk-UA": ukUaCheck
      };
      taxIdCheck["lb-LU"] = taxIdCheck["fr-LU"];
      taxIdCheck["lt-LT"] = taxIdCheck["et-EE"];
      taxIdCheck["nl-BE"] = taxIdCheck["fr-BE"];
      taxIdCheck["fr-CA"] = taxIdCheck["en-CA"];
      var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
      var sanitizeRegexes = {
        "de-AT": allsymbols,
        "de-DE": /[\/\\]/g,
        "fr-BE": allsymbols
      };
      sanitizeRegexes["nl-BE"] = sanitizeRegexes["fr-BE"];
      function isTaxID(str) {
        var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
        (0, _assertString.default)(str);
        var strcopy = str.slice(0);
        if (locale in taxIdFormat) {
          if (locale in sanitizeRegexes) {
            strcopy = strcopy.replace(sanitizeRegexes[locale], "");
          }
          if (!taxIdFormat[locale].test(strcopy)) {
            return false;
          }
          if (locale in taxIdCheck) {
            return taxIdCheck[locale](strcopy);
          }
          return true;
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMobilePhone.js
  var require_isMobilePhone = __commonJS({
    "node_modules/validator/lib/isMobilePhone.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMobilePhone;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var phones = {
        "am-AM": /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
        "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
        "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
        "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
        "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
        "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
        "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
        "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
        "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
        "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
        "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
        "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
        "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
        "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
        "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
        "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
        "ar-TN": /^(\+?216)?[2459]\d{7}$/,
        "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
        "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
        "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
        "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
        "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
        "ca-AD": /^(\+376)?[346]\d{5}$/,
        "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
        "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
        "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
        "de-LU": /^(\+352)?((6\d1)\d{6})$/,
        "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
        "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
        "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
        "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
        "en-AU": /^(\+?61|0)4\d{8}$/,
        "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
        "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
        "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
        "en-GB": /^(\+?44|0)7\d{9}$/,
        "en-GG": /^(\+?44|0)1481\d{6}$/,
        "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
        "en-GY": /^(\+592|0)6\d{6}$/,
        "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
        "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
        "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
        "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
        "en-JM": /^(\+?876)?\d{7}$/,
        "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
        "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
        "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
        "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
        "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
        "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
        "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
        "en-MU": /^(\+?230|0)?\d{8}$/,
        "en-MW": /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
        "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
        "en-NG": /^(\+?234|0)?[789]\d{9}$/,
        "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
        "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
        "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
        "en-PH": /^(09|\+639)\d{9}$/,
        "en-RW": /^(\+?250|0)?[7]\d{8}$/,
        "en-SG": /^(\+65)?[3689]\d{7}$/,
        "en-SL": /^(\+?232|0)\d{8}$/,
        "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
        "en-UG": /^(\+?256|0)?[7]\d{8}$/,
        "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
        "en-ZA": /^(\+?27|0)\d{9}$/,
        "en-ZM": /^(\+?26)?09[567]\d{7}$/,
        "en-ZW": /^(\+263)[0-9]{9}$/,
        "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
        "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
        "es-BO": /^(\+?591)?(6|7)\d{7}$/,
        "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
        "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
        "es-CR": /^(\+506)?[2-8]\d{7}$/,
        "es-CU": /^(\+53|0053)?5\d{7}$/,
        "es-DO": /^(\+?1)?8[024]9\d{7}$/,
        "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
        "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
        "es-ES": /^(\+?34)?[6|7]\d{8}$/,
        "es-PE": /^(\+?51)?9\d{8}$/,
        "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
        "es-NI": /^(\+?505)\d{7,8}$/,
        "es-PA": /^(\+?507)\d{7,8}$/,
        "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
        "es-SV": /^(\+?503)?[67]\d{7}$/,
        "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
        "es-VE": /^(\+?58)?(2|4)\d{9}$/,
        "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
        "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
        "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
        "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
        "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "fr-BF": /^(\+226|0)[67]\d{7}$/,
        "fr-BJ": /^(\+229)\d{8}$/,
        "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
        "fr-CM": /^(\+?237)6[0-9]{8}$/,
        "fr-FR": /^(\+?33|0)[67]\d{8}$/,
        "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
        "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
        "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
        "fr-PF": /^(\+?689)?8[789]\d{6}$/,
        "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
        "fr-WF": /^(\+681)?\d{6}$/,
        "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
        "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
        "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
        "ir-IR": /^(\+98|0)?9\d{9}$/,
        "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
        "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
        "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
        "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
        "kk-KZ": /^(\+?7|8)?7\d{9}$/,
        "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
        "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
        "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
        "lt-LT": /^(\+370|8)\d{8}$/,
        "lv-LV": /^(\+?371)2\d{7}$/,
        "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
        "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
        "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
        "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
        "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
        "nb-NO": /^(\+?47)?[49]\d{7}$/,
        "ne-NP": /^(\+?977)?9[78]\d{8}$/,
        "nl-BE": /^(\+?32|0)4\d{8}$/,
        "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
        "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
        "nn-NO": /^(\+?47)?[49]\d{7}$/,
        "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
        "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
        "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
        "pt-AO": /^(\+244)\d{9}$/,
        "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
        "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
        "ru-RU": /^(\+?7|8)?9\d{9}$/,
        "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
        "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
        "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
        "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
        "sq-AL": /^(\+355|0)6[789]\d{6}$/,
        "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
        "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
        "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
        "th-TH": /^(\+66|66|0)\d{9}$/,
        "tr-TR": /^(\+?90|0)?5\d{9}$/,
        "tk-TM": /^(\+993|993|8)\d{8}$/,
        "uk-UA": /^(\+?38|8)?0\d{9}$/,
        "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
        "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
        "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
        "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
        "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
        "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
        "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
        "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
      };
      phones["en-CA"] = phones["en-US"];
      phones["fr-CA"] = phones["en-CA"];
      phones["fr-BE"] = phones["nl-BE"];
      phones["zh-HK"] = phones["en-HK"];
      phones["zh-MO"] = phones["en-MO"];
      phones["ga-IE"] = phones["en-IE"];
      phones["fr-CH"] = phones["de-CH"];
      phones["it-CH"] = phones["fr-CH"];
      function isMobilePhone(str, locale, options) {
        (0, _assertString.default)(str);
        if (options && options.strictMode && !str.startsWith("+")) {
          return false;
        }
        if (Array.isArray(locale)) {
          return locale.some(function(key2) {
            if (phones.hasOwnProperty(key2)) {
              var phone2 = phones[key2];
              if (phone2.test(str)) {
                return true;
              }
            }
            return false;
          });
        } else if (locale in phones) {
          return phones[locale].test(str);
        } else if (!locale || locale === "any") {
          for (var key in phones) {
            if (phones.hasOwnProperty(key)) {
              var phone = phones[key];
              if (phone.test(str)) {
                return true;
              }
            }
          }
          return false;
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      var locales = exports.locales = Object.keys(phones);
    }
  });

  // node_modules/validator/lib/isEthereumAddress.js
  var require_isEthereumAddress = __commonJS({
    "node_modules/validator/lib/isEthereumAddress.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isEthereumAddress;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var eth = /^(0x)[0-9a-f]{40}$/i;
      function isEthereumAddress(str) {
        (0, _assertString.default)(str);
        return eth.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isCurrency.js
  var require_isCurrency = __commonJS({
    "node_modules/validator/lib/isCurrency.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isCurrency;
      var _merge = _interopRequireDefault(require_merge());
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function currencyRegex(options) {
        var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
        options.digits_after_decimal.forEach(function(digit, index) {
          if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
        });
        var symbol = "(".concat(options.symbol.replace(/\W/, function(m) {
          return "\\".concat(m);
        }), ")").concat(options.require_symbol ? "" : "?"), negative = "-?", whole_dollar_amount_without_sep = "[1-9]\\d*", whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"), valid_whole_dollar_amounts = ["0", whole_dollar_amount_without_sep, whole_dollar_amount_with_sep], whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join("|"), ")?"), decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? "" : "?");
        var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : "");
        if (options.allow_negatives && !options.parens_for_negatives) {
          if (options.negative_sign_after_digits) {
            pattern += negative;
          } else if (options.negative_sign_before_digits) {
            pattern = negative + pattern;
          }
        }
        if (options.allow_negative_sign_placeholder) {
          pattern = "( (?!\\-))?".concat(pattern);
        } else if (options.allow_space_after_symbol) {
          pattern = " ?".concat(pattern);
        } else if (options.allow_space_after_digits) {
          pattern += "( (?!$))?";
        }
        if (options.symbol_after_digits) {
          pattern += symbol;
        } else {
          pattern = symbol + pattern;
        }
        if (options.allow_negatives) {
          if (options.parens_for_negatives) {
            pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
          } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
            pattern = negative + pattern;
          }
        }
        return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
      }
      var default_currency_options = {
        symbol: "$",
        require_symbol: false,
        allow_space_after_symbol: false,
        symbol_after_digits: false,
        allow_negatives: true,
        parens_for_negatives: false,
        negative_sign_before_digits: false,
        negative_sign_after_digits: false,
        allow_negative_sign_placeholder: false,
        thousands_separator: ",",
        decimal_separator: ".",
        allow_decimal: true,
        require_decimal: false,
        digits_after_decimal: [2],
        allow_space_after_digits: false
      };
      function isCurrency(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, default_currency_options);
        return currencyRegex(options).test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isBtcAddress.js
  var require_isBtcAddress = __commonJS({
    "node_modules/validator/lib/isBtcAddress.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBtcAddress;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var bech32 = /^(bc1)[a-z0-9]{25,39}$/;
      var base58 = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
      function isBtcAddress(str) {
        (0, _assertString.default)(str);
        return bech32.test(str) || base58.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISO6346.js
  var require_isISO6346 = __commonJS({
    "node_modules/validator/lib/isISO6346.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isFreightContainerID = void 0;
      exports.isISO6346 = isISO6346;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isISO6346Str = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/;
      var isDigit = /^[0-9]$/;
      function isISO6346(str) {
        (0, _assertString.default)(str);
        str = str.toUpperCase();
        if (!isISO6346Str.test(str)) return false;
        if (str.length === 11) {
          var sum = 0;
          for (var i2 = 0; i2 < str.length - 1; i2++) {
            if (!isDigit.test(str[i2])) {
              var convertedCode = void 0;
              var letterCode = str.charCodeAt(i2) - 55;
              if (letterCode < 11) convertedCode = letterCode;
              else if (letterCode >= 11 && letterCode <= 20) convertedCode = 12 + letterCode % 11;
              else if (letterCode >= 21 && letterCode <= 30) convertedCode = 23 + letterCode % 21;
              else convertedCode = 34 + letterCode % 31;
              sum += convertedCode * Math.pow(2, i2);
            } else sum += str[i2] * Math.pow(2, i2);
          }
          var checkSumDigit = sum % 11;
          return Number(str[str.length - 1]) === checkSumDigit;
        }
        return true;
      }
      var isFreightContainerID = exports.isFreightContainerID = isISO6346;
    }
  });

  // node_modules/validator/lib/isISO6391.js
  var require_isISO6391 = __commonJS({
    "node_modules/validator/lib/isISO6391.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISO6391;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var isISO6391Set = /* @__PURE__ */ new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);
      function isISO6391(str) {
        (0, _assertString.default)(str);
        return isISO6391Set.has(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISO8601.js
  var require_isISO8601 = __commonJS({
    "node_modules/validator/lib/isISO8601.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISO8601;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
      var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
      var isValidDate = function isValidDate2(str) {
        var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
        if (ordinalMatch) {
          var oYear = Number(ordinalMatch[1]);
          var oDay = Number(ordinalMatch[2]);
          if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
          return oDay <= 365;
        }
        var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
        var year = match[1];
        var month = match[2];
        var day = match[3];
        var monthString = month ? "0".concat(month).slice(-2) : month;
        var dayString = day ? "0".concat(day).slice(-2) : day;
        var d = new Date("".concat(year, "-").concat(monthString || "01", "-").concat(dayString || "01"));
        if (month && day) {
          return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
        }
        return true;
      };
      function isISO8601(str) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, _assertString.default)(str);
        var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
        if (check && options.strict) return isValidDate(str);
        return check;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isRFC3339.js
  var require_isRFC3339 = __commonJS({
    "node_modules/validator/lib/isRFC3339.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isRFC3339;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var dateFullYear = /[0-9]{4}/;
      var dateMonth = /(0[1-9]|1[0-2])/;
      var dateMDay = /([12]\d|0[1-9]|3[01])/;
      var timeHour = /([01][0-9]|2[0-3])/;
      var timeMinute = /[0-5][0-9]/;
      var timeSecond = /([0-5][0-9]|60)/;
      var timeSecFrac = /(\.[0-9]+)?/;
      var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
      var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
      var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
      var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
      var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
      var rfc3339 = new RegExp("^".concat(fullDate.source, "[ tT]").concat(fullTime.source, "$"));
      function isRFC3339(str) {
        (0, _assertString.default)(str);
        return rfc3339.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISO31661Alpha3.js
  var require_isISO31661Alpha3 = __commonJS({
    "node_modules/validator/lib/isISO31661Alpha3.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isISO31661Alpha3;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validISO31661Alpha3CountriesCodes = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);
      function isISO31661Alpha3(str) {
        (0, _assertString.default)(str);
        return validISO31661Alpha3CountriesCodes.has(str.toUpperCase());
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isISO4217.js
  var require_isISO4217 = __commonJS({
    "node_modules/validator/lib/isISO4217.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CurrencyCodes = void 0;
      exports.default = isISO4217;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validISO4217CurrencyCodes = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
      function isISO4217(str) {
        (0, _assertString.default)(str);
        return validISO4217CurrencyCodes.has(str.toUpperCase());
      }
      var CurrencyCodes = exports.CurrencyCodes = validISO4217CurrencyCodes;
    }
  });

  // node_modules/validator/lib/isBase32.js
  var require_isBase32 = __commonJS({
    "node_modules/validator/lib/isBase32.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBase32;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var base32 = /^[A-Z2-7]+=*$/;
      var crockfordBase32 = /^[A-HJKMNP-TV-Z0-9]+$/;
      var defaultBase32Options = {
        crockford: false
      };
      function isBase32(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, defaultBase32Options);
        if (options.crockford) {
          return crockfordBase32.test(str);
        }
        var len = str.length;
        if (len % 8 === 0 && base32.test(str)) {
          return true;
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isBase58.js
  var require_isBase58 = __commonJS({
    "node_modules/validator/lib/isBase58.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isBase58;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;
      function isBase58(str) {
        (0, _assertString.default)(str);
        if (base58Reg.test(str)) {
          return true;
        }
        return false;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isDataURI.js
  var require_isDataURI = __commonJS({
    "node_modules/validator/lib/isDataURI.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isDataURI;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validMediaType = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
      var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
      var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
      function isDataURI(str) {
        (0, _assertString.default)(str);
        var data = str.split(",");
        if (data.length < 2) {
          return false;
        }
        var attributes = data.shift().trim().split(";");
        var schemeAndMediaType = attributes.shift();
        if (schemeAndMediaType.slice(0, 5) !== "data:") {
          return false;
        }
        var mediaType = schemeAndMediaType.slice(5);
        if (mediaType !== "" && !validMediaType.test(mediaType)) {
          return false;
        }
        for (var i2 = 0; i2 < attributes.length; i2++) {
          if (!(i2 === attributes.length - 1 && attributes[i2].toLowerCase() === "base64") && !validAttribute.test(attributes[i2])) {
            return false;
          }
        }
        for (var _i = 0; _i < data.length; _i++) {
          if (!validData.test(data[_i])) {
            return false;
          }
        }
        return true;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMagnetURI.js
  var require_isMagnetURI = __commonJS({
    "node_modules/validator/lib/isMagnetURI.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMagnetURI;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var magnetURIComponent = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
      function isMagnetURI(url) {
        (0, _assertString.default)(url);
        if (url.indexOf("magnet:?") !== 0) {
          return false;
        }
        return magnetURIComponent.test(url);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/rtrim.js
  var require_rtrim = __commonJS({
    "node_modules/validator/lib/rtrim.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = rtrim;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function rtrim(str, chars) {
        (0, _assertString.default)(str);
        if (chars) {
          var pattern = new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
          return str.replace(pattern, "");
        }
        var strIndex = str.length - 1;
        while (/\s/.test(str.charAt(strIndex))) {
          strIndex -= 1;
        }
        return str.slice(0, strIndex + 1);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/ltrim.js
  var require_ltrim = __commonJS({
    "node_modules/validator/lib/ltrim.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = ltrim;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function ltrim(str, chars) {
        (0, _assertString.default)(str);
        var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
        return str.replace(pattern, "");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/trim.js
  var require_trim = __commonJS({
    "node_modules/validator/lib/trim.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = trim;
      var _rtrim = _interopRequireDefault(require_rtrim());
      var _ltrim = _interopRequireDefault(require_ltrim());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function trim(str, chars) {
        return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMailtoURI.js
  var require_isMailtoURI = __commonJS({
    "node_modules/validator/lib/isMailtoURI.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMailtoURI;
      var _trim = _interopRequireDefault(require_trim());
      var _isEmail = _interopRequireDefault(require_isEmail());
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i2) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e, n13, i2, u, a = [], f = true, o = false;
          try {
            if (i2 = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t) return;
              f = false;
            } else for (; !(f = (e = i2.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
          } catch (r2) {
            o = true, n13 = r2;
          } finally {
            try {
              if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally {
              if (o) throw n13;
            }
          }
          return a;
        }
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it2 = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it2) {
          if (Array.isArray(o) || (it2 = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it2) o = it2;
            var i2 = 0;
            var F = function F2() {
            };
            return { s: F, n: function n13() {
              if (i2 >= o.length) return { done: true };
              return { done: false, value: o[i2++] };
            }, e: function e(_e2) {
              throw _e2;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return { s: function s() {
          it2 = it2.call(o);
        }, n: function n13() {
          var step = it2.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it2.return != null) it2.return();
          } finally {
            if (didErr) throw err;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n13 = Object.prototype.toString.call(o).slice(8, -1);
        if (n13 === "Object" && o.constructor) n13 = o.constructor.name;
        if (n13 === "Map" || n13 === "Set") return Array.from(o);
        if (n13 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n13)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
        return arr2;
      }
      function parseMailtoQueryString(queryString) {
        var allowedParams = /* @__PURE__ */ new Set(["subject", "body", "cc", "bcc"]), query = {
          cc: "",
          bcc: ""
        };
        var isParseFailed = false;
        var queryParams = queryString.split("&");
        if (queryParams.length > 4) {
          return false;
        }
        var _iterator = _createForOfIteratorHelper(queryParams), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var q = _step.value;
            var _q$split = q.split("="), _q$split2 = _slicedToArray(_q$split, 2), key = _q$split2[0], value = _q$split2[1];
            if (key && !allowedParams.has(key)) {
              isParseFailed = true;
              break;
            }
            if (value && (key === "cc" || key === "bcc")) {
              query[key] = value;
            }
            if (key) {
              allowedParams.delete(key);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return isParseFailed ? false : query;
      }
      function isMailtoURI(url, options) {
        (0, _assertString.default)(url);
        if (url.indexOf("mailto:") !== 0) {
          return false;
        }
        var _url$replace$split = url.replace("mailto:", "").split("?"), _url$replace$split2 = _slicedToArray(_url$replace$split, 2), to = _url$replace$split2[0], _url$replace$split2$ = _url$replace$split2[1], queryString = _url$replace$split2$ === void 0 ? "" : _url$replace$split2$;
        if (!to && !queryString) {
          return true;
        }
        var query = parseMailtoQueryString(queryString);
        if (!query) {
          return false;
        }
        return "".concat(to, ",").concat(query.cc, ",").concat(query.bcc).split(",").every(function(email) {
          email = (0, _trim.default)(email, " ");
          if (email) {
            return (0, _isEmail.default)(email, options);
          }
          return true;
        });
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isMimeType.js
  var require_isMimeType = __commonJS({
    "node_modules/validator/lib/isMimeType.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isMimeType;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i;
      var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i;
      var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
      function isMimeType(str) {
        (0, _assertString.default)(str);
        return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLatLong.js
  var require_isLatLong = __commonJS({
    "node_modules/validator/lib/isLatLong.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLatLong;
      var _assertString = _interopRequireDefault(require_assertString());
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
      var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
      var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
      var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
      var defaultLatLongOptions = {
        checkDMS: false
      };
      function isLatLong(str, options) {
        (0, _assertString.default)(str);
        options = (0, _merge.default)(options, defaultLatLongOptions);
        if (!str.includes(",")) return false;
        var pair = str.split(",");
        if (pair[0].startsWith("(") && !pair[1].endsWith(")") || pair[1].endsWith(")") && !pair[0].startsWith("(")) return false;
        if (options.checkDMS) {
          return latDMS.test(pair[0]) && longDMS.test(pair[1]);
        }
        return lat.test(pair[0]) && long.test(pair[1]);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isPostalCode.js
  var require_isPostalCode = __commonJS({
    "node_modules/validator/lib/isPostalCode.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isPostalCode;
      exports.locales = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var threeDigit = /^\d{3}$/;
      var fourDigit = /^\d{4}$/;
      var fiveDigit = /^\d{5}$/;
      var sixDigit = /^\d{6}$/;
      var patterns = {
        AD: /^AD\d{3}$/,
        AT: fourDigit,
        AU: fourDigit,
        AZ: /^AZ\d{4}$/,
        BA: /^([7-8]\d{4}$)/,
        BE: fourDigit,
        BG: fourDigit,
        BR: /^\d{5}-\d{3}$/,
        BY: /^2[1-4]\d{4}$/,
        CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
        CH: fourDigit,
        CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
        CZ: /^\d{3}\s?\d{2}$/,
        DE: fiveDigit,
        DK: fourDigit,
        DO: fiveDigit,
        DZ: fiveDigit,
        EE: fiveDigit,
        ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
        FI: fiveDigit,
        FR: /^\d{2}\s?\d{3}$/,
        GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
        GR: /^\d{3}\s?\d{2}$/,
        HR: /^([1-5]\d{4}$)/,
        HT: /^HT\d{4}$/,
        HU: fourDigit,
        ID: fiveDigit,
        IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
        IL: /^(\d{5}|\d{7})$/,
        IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
        IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
        IS: threeDigit,
        IT: fiveDigit,
        JP: /^\d{3}\-\d{4}$/,
        KE: fiveDigit,
        KR: /^(\d{5}|\d{6})$/,
        LI: /^(948[5-9]|949[0-7])$/,
        LT: /^LT\-\d{5}$/,
        LU: fourDigit,
        LV: /^LV\-\d{4}$/,
        LK: fiveDigit,
        MG: threeDigit,
        MX: fiveDigit,
        MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
        MY: fiveDigit,
        NL: /^[1-9]\d{3}\s?(?!sa|sd|ss)[a-z]{2}$/i,
        NO: fourDigit,
        NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
        NZ: fourDigit,
        PL: /^\d{2}\-\d{3}$/,
        PR: /^00[679]\d{2}([ -]\d{4})?$/,
        PT: /^\d{4}\-\d{3}?$/,
        RO: sixDigit,
        RU: sixDigit,
        SA: fiveDigit,
        SE: /^[1-9]\d{2}\s?\d{2}$/,
        SG: sixDigit,
        SI: fourDigit,
        SK: /^\d{3}\s?\d{2}$/,
        TH: fiveDigit,
        TN: fourDigit,
        TW: /^\d{3}(\d{2})?$/,
        UA: fiveDigit,
        US: /^\d{5}(-\d{4})?$/,
        ZA: fourDigit,
        ZM: fiveDigit
      };
      var locales = exports.locales = Object.keys(patterns);
      function isPostalCode(str, locale) {
        (0, _assertString.default)(str);
        if (locale in patterns) {
          return patterns[locale].test(str);
        } else if (locale === "any") {
          for (var key in patterns) {
            if (patterns.hasOwnProperty(key)) {
              var pattern = patterns[key];
              if (pattern.test(str)) {
                return true;
              }
            }
          }
          return false;
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
    }
  });

  // node_modules/validator/lib/escape.js
  var require_escape = __commonJS({
    "node_modules/validator/lib/escape.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = escape;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function escape(str) {
        (0, _assertString.default)(str);
        return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/unescape.js
  var require_unescape = __commonJS({
    "node_modules/validator/lib/unescape.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = unescape;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function unescape(str) {
        (0, _assertString.default)(str);
        return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/blacklist.js
  var require_blacklist = __commonJS({
    "node_modules/validator/lib/blacklist.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = blacklist;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function blacklist(str, chars) {
        (0, _assertString.default)(str);
        return str.replace(new RegExp("[".concat(chars, "]+"), "g"), "");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/stripLow.js
  var require_stripLow = __commonJS({
    "node_modules/validator/lib/stripLow.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = stripLow;
      var _assertString = _interopRequireDefault(require_assertString());
      var _blacklist = _interopRequireDefault(require_blacklist());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function stripLow(str, keep_new_lines) {
        (0, _assertString.default)(str);
        var chars = keep_new_lines ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
        return (0, _blacklist.default)(str, chars);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/whitelist.js
  var require_whitelist = __commonJS({
    "node_modules/validator/lib/whitelist.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = whitelist;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function whitelist(str, chars) {
        (0, _assertString.default)(str);
        return str.replace(new RegExp("[^".concat(chars, "]+"), "g"), "");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isWhitelisted.js
  var require_isWhitelisted = __commonJS({
    "node_modules/validator/lib/isWhitelisted.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isWhitelisted;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function isWhitelisted(str, chars) {
        (0, _assertString.default)(str);
        for (var i2 = str.length - 1; i2 >= 0; i2--) {
          if (chars.indexOf(str[i2]) === -1) {
            return false;
          }
        }
        return true;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/normalizeEmail.js
  var require_normalizeEmail = __commonJS({
    "node_modules/validator/lib/normalizeEmail.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = normalizeEmail;
      var _merge = _interopRequireDefault(require_merge());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var default_normalize_email_options = {
        // The following options apply to all email addresses
        // Lowercases the local part of the email address.
        // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
        // The domain is always lowercased, as per RFC 1035
        all_lowercase: true,
        // The following conversions are specific to GMail
        // Lowercases the local part of the GMail address (known to be case-insensitive)
        gmail_lowercase: true,
        // Removes dots from the local part of the email address, as that's ignored by GMail
        gmail_remove_dots: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        gmail_remove_subaddress: true,
        // Conversts the googlemail.com domain to gmail.com
        gmail_convert_googlemaildotcom: true,
        // The following conversions are specific to Outlook.com / Windows Live / Hotmail
        // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
        outlookdotcom_lowercase: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        outlookdotcom_remove_subaddress: true,
        // The following conversions are specific to Yahoo
        // Lowercases the local part of the Yahoo address (known to be case-insensitive)
        yahoo_lowercase: true,
        // Removes the subaddress (e.g. "-foo") from the email address
        yahoo_remove_subaddress: true,
        // The following conversions are specific to Yandex
        // Lowercases the local part of the Yandex address (known to be case-insensitive)
        yandex_lowercase: true,
        // The following conversions are specific to iCloud
        // Lowercases the local part of the iCloud address (known to be case-insensitive)
        icloud_lowercase: true,
        // Removes the subaddress (e.g. "+foo") from the email address
        icloud_remove_subaddress: true
      };
      var icloud_domains = ["icloud.com", "me.com"];
      var outlookdotcom_domains = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"];
      var yahoo_domains = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"];
      var yandex_domains = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
      function dotsReplacer(match) {
        if (match.length > 1) {
          return match;
        }
        return "";
      }
      function normalizeEmail(email, options) {
        options = (0, _merge.default)(options, default_normalize_email_options);
        var raw_parts = email.split("@");
        var domain = raw_parts.pop();
        var user = raw_parts.join("@");
        var parts = [user, domain];
        parts[1] = parts[1].toLowerCase();
        if (parts[1] === "gmail.com" || parts[1] === "googlemail.com") {
          if (options.gmail_remove_subaddress) {
            parts[0] = parts[0].split("+")[0];
          }
          if (options.gmail_remove_dots) {
            parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
          }
          if (!parts[0].length) {
            return false;
          }
          if (options.all_lowercase || options.gmail_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
          parts[1] = options.gmail_convert_googlemaildotcom ? "gmail.com" : parts[1];
        } else if (icloud_domains.indexOf(parts[1]) >= 0) {
          if (options.icloud_remove_subaddress) {
            parts[0] = parts[0].split("+")[0];
          }
          if (!parts[0].length) {
            return false;
          }
          if (options.all_lowercase || options.icloud_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
        } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
          if (options.outlookdotcom_remove_subaddress) {
            parts[0] = parts[0].split("+")[0];
          }
          if (!parts[0].length) {
            return false;
          }
          if (options.all_lowercase || options.outlookdotcom_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
        } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
          if (options.yahoo_remove_subaddress) {
            var components = parts[0].split("-");
            parts[0] = components.length > 1 ? components.slice(0, -1).join("-") : components[0];
          }
          if (!parts[0].length) {
            return false;
          }
          if (options.all_lowercase || options.yahoo_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
        } else if (yandex_domains.indexOf(parts[1]) >= 0) {
          if (options.all_lowercase || options.yandex_lowercase) {
            parts[0] = parts[0].toLowerCase();
          }
          parts[1] = "yandex.ru";
        } else if (options.all_lowercase) {
          parts[0] = parts[0].toLowerCase();
        }
        return parts.join("@");
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isSlug.js
  var require_isSlug = __commonJS({
    "node_modules/validator/lib/isSlug.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isSlug;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
      function isSlug(str) {
        (0, _assertString.default)(str);
        return charsetRegex.test(str);
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isLicensePlate.js
  var require_isLicensePlate = __commonJS({
    "node_modules/validator/lib/isLicensePlate.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isLicensePlate;
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var validators = {
        "cs-CZ": function csCZ(str) {
          return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
        },
        "de-DE": function deDE(str) {
          return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
        },
        "de-LI": function deLI(str) {
          return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
        },
        "en-IN": function enIN(str) {
          return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(str);
        },
        "es-AR": function esAR(str) {
          return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(str);
        },
        "fi-FI": function fiFI(str) {
          return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
        },
        "hu-HU": function huHU(str) {
          return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(str);
        },
        "pt-BR": function ptBR(str) {
          return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
        },
        "pt-PT": function ptPT(str) {
          return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(str);
        },
        "sq-AL": function sqAL(str) {
          return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
        },
        "sv-SE": function svSE(str) {
          return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(str.trim());
        },
        "en-PK": function enPK(str) {
          return /(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(str.trim());
        }
      };
      function isLicensePlate(str, locale) {
        (0, _assertString.default)(str);
        if (locale in validators) {
          return validators[locale](str);
        } else if (locale === "any") {
          for (var key in validators) {
            var validator = validators[key];
            if (validator(str)) {
              return true;
            }
          }
          return false;
        }
        throw new Error("Invalid locale '".concat(locale, "'"));
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isStrongPassword.js
  var require_isStrongPassword = __commonJS({
    "node_modules/validator/lib/isStrongPassword.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isStrongPassword;
      var _merge = _interopRequireDefault(require_merge());
      var _assertString = _interopRequireDefault(require_assertString());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var upperCaseRegex = /^[A-Z]$/;
      var lowerCaseRegex = /^[a-z]$/;
      var numberRegex = /^[0-9]$/;
      var symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/;
      var defaultOptions = {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10
      };
      function countChars(str) {
        var result = {};
        Array.from(str).forEach(function(char) {
          var curVal = result[char];
          if (curVal) {
            result[char] += 1;
          } else {
            result[char] = 1;
          }
        });
        return result;
      }
      function analyzePassword(password) {
        var charMap = countChars(password);
        var analysis = {
          length: password.length,
          uniqueChars: Object.keys(charMap).length,
          uppercaseCount: 0,
          lowercaseCount: 0,
          numberCount: 0,
          symbolCount: 0
        };
        Object.keys(charMap).forEach(function(char) {
          if (upperCaseRegex.test(char)) {
            analysis.uppercaseCount += charMap[char];
          } else if (lowerCaseRegex.test(char)) {
            analysis.lowercaseCount += charMap[char];
          } else if (numberRegex.test(char)) {
            analysis.numberCount += charMap[char];
          } else if (symbolRegex.test(char)) {
            analysis.symbolCount += charMap[char];
          }
        });
        return analysis;
      }
      function scorePassword(analysis, scoringOptions) {
        var points = 0;
        points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
        points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
        if (analysis.lowercaseCount > 0) {
          points += scoringOptions.pointsForContainingLower;
        }
        if (analysis.uppercaseCount > 0) {
          points += scoringOptions.pointsForContainingUpper;
        }
        if (analysis.numberCount > 0) {
          points += scoringOptions.pointsForContainingNumber;
        }
        if (analysis.symbolCount > 0) {
          points += scoringOptions.pointsForContainingSymbol;
        }
        return points;
      }
      function isStrongPassword(str) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        (0, _assertString.default)(str);
        var analysis = analyzePassword(str);
        options = (0, _merge.default)(options || {}, defaultOptions);
        if (options.returnScore) {
          return scorePassword(analysis, options);
        }
        return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
      }
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/validator/lib/isVAT.js
  var require_isVAT = __commonJS({
    "node_modules/validator/lib/isVAT.js"(exports) {
      "use strict";
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = isVAT;
      exports.vatMatchers = void 0;
      var _assertString = _interopRequireDefault(require_assertString());
      var algorithms = _interopRequireWildcard(require_algorithms());
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap) return null;
        var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(e2) {
          return e2 ? t : r;
        })(e);
      }
      function _interopRequireWildcard(e, r) {
        if (!r && e && e.__esModule) return e;
        if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e };
        var t = _getRequireWildcardCache(r);
        if (t && t.has(e)) return t.get(e);
        var n13 = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
          var i2 = a ? Object.getOwnPropertyDescriptor(e, u) : null;
          i2 && (i2.get || i2.set) ? Object.defineProperty(n13, u, i2) : n13[u] = e[u];
        }
        return n13.default = e, t && t.set(e, n13), n13;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var AU = function AU2(str) {
        var match = str.match(/^(AU)?(\d{11})$/);
        if (!match) {
          return false;
        }
        var weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
        str = str.replace(/^AU/, "");
        var ABN = (parseInt(str.slice(0, 1), 10) - 1).toString() + str.slice(1);
        var total = 0;
        for (var i2 = 0; i2 < 11; i2++) {
          total += weights[i2] * ABN.charAt(i2);
        }
        return total !== 0 && total % 89 === 0;
      };
      var CH = function CH2(str) {
        var hasValidCheckNumber = function hasValidCheckNumber2(digits) {
          var lastDigit = digits.pop();
          var weights = [5, 4, 3, 2, 7, 6, 5, 4];
          var calculatedCheckNumber = (11 - digits.reduce(function(acc, el, idx) {
            return acc + el * weights[idx];
          }, 0) % 11) % 11;
          return lastDigit === calculatedCheckNumber;
        };
        return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(str) && hasValidCheckNumber(str.match(/\d/g).map(function(el) {
          return +el;
        }));
      };
      var PT = function PT2(str) {
        var match = str.match(/^(PT)?(\d{9})$/);
        if (!match) {
          return false;
        }
        var tin = match[2];
        var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
          return parseInt(a, 10);
        }), 9) % 11;
        if (checksum > 9) {
          return parseInt(tin[8], 10) === 0;
        }
        return checksum === parseInt(tin[8], 10);
      };
      var vatMatchers = exports.vatMatchers = {
        /**
         * European Union VAT identification numbers
         */
        AT: function AT(str) {
          return /^(AT)?U\d{8}$/.test(str);
        },
        BE: function BE(str) {
          return /^(BE)?\d{10}$/.test(str);
        },
        BG: function BG(str) {
          return /^(BG)?\d{9,10}$/.test(str);
        },
        HR: function HR(str) {
          return /^(HR)?\d{11}$/.test(str);
        },
        CY: function CY(str) {
          return /^(CY)?\w{9}$/.test(str);
        },
        CZ: function CZ(str) {
          return /^(CZ)?\d{8,10}$/.test(str);
        },
        DK: function DK(str) {
          return /^(DK)?\d{8}$/.test(str);
        },
        EE: function EE(str) {
          return /^(EE)?\d{9}$/.test(str);
        },
        FI: function FI(str) {
          return /^(FI)?\d{8}$/.test(str);
        },
        FR: function FR(str) {
          return /^(FR)?\w{2}\d{9}$/.test(str);
        },
        DE: function DE(str) {
          return /^(DE)?\d{9}$/.test(str);
        },
        EL: function EL(str) {
          return /^(EL)?\d{9}$/.test(str);
        },
        HU: function HU(str) {
          return /^(HU)?\d{8}$/.test(str);
        },
        IE: function IE(str) {
          return /^(IE)?\d{7}\w{1}(W)?$/.test(str);
        },
        IT: function IT(str) {
          return /^(IT)?\d{11}$/.test(str);
        },
        LV: function LV(str) {
          return /^(LV)?\d{11}$/.test(str);
        },
        LT: function LT(str) {
          return /^(LT)?\d{9,12}$/.test(str);
        },
        LU: function LU(str) {
          return /^(LU)?\d{8}$/.test(str);
        },
        MT: function MT(str) {
          return /^(MT)?\d{8}$/.test(str);
        },
        NL: function NL(str) {
          return /^(NL)?\d{9}B\d{2}$/.test(str);
        },
        PL: function PL(str) {
          return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(str);
        },
        PT,
        RO: function RO(str) {
          return /^(RO)?\d{2,10}$/.test(str);
        },
        SK: function SK(str) {
          return /^(SK)?\d{10}$/.test(str);
        },
        SI: function SI(str) {
          return /^(SI)?\d{8}$/.test(str);
        },
        ES: function ES(str) {
          return /^(ES)?\w\d{7}[A-Z]$/.test(str);
        },
        SE: function SE(str) {
          return /^(SE)?\d{12}$/.test(str);
        },
        /**
         * VAT numbers of non-EU countries
         */
        AL: function AL(str) {
          return /^(AL)?\w{9}[A-Z]$/.test(str);
        },
        MK: function MK(str) {
          return /^(MK)?\d{13}$/.test(str);
        },
        AU,
        BY: function BY(str) {
          return /^(УНП )?\d{9}$/.test(str);
        },
        CA: function CA(str) {
          return /^(CA)?\d{9}$/.test(str);
        },
        IS: function IS(str) {
          return /^(IS)?\d{5,6}$/.test(str);
        },
        IN: function IN(str) {
          return /^(IN)?\d{15}$/.test(str);
        },
        ID: function ID(str) {
          return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(str);
        },
        IL: function IL(str) {
          return /^(IL)?\d{9}$/.test(str);
        },
        KZ: function KZ(str) {
          return /^(KZ)?\d{12}$/.test(str);
        },
        NZ: function NZ(str) {
          return /^(NZ)?\d{9}$/.test(str);
        },
        NG: function NG(str) {
          return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(str);
        },
        NO: function NO(str) {
          return /^(NO)?\d{9}MVA$/.test(str);
        },
        PH: function PH(str) {
          return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(str);
        },
        RU: function RU(str) {
          return /^(RU)?(\d{10}|\d{12})$/.test(str);
        },
        SM: function SM(str) {
          return /^(SM)?\d{5}$/.test(str);
        },
        SA: function SA(str) {
          return /^(SA)?\d{15}$/.test(str);
        },
        RS: function RS(str) {
          return /^(RS)?\d{9}$/.test(str);
        },
        CH,
        TR: function TR(str) {
          return /^(TR)?\d{10}$/.test(str);
        },
        UA: function UA(str) {
          return /^(UA)?\d{12}$/.test(str);
        },
        GB: function GB(str) {
          return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(str);
        },
        UZ: function UZ(str) {
          return /^(UZ)?\d{9}$/.test(str);
        },
        /**
         * VAT numbers of Latin American countries
         */
        AR: function AR(str) {
          return /^(AR)?\d{11}$/.test(str);
        },
        BO: function BO(str) {
          return /^(BO)?\d{7}$/.test(str);
        },
        BR: function BR(str) {
          return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(str);
        },
        CL: function CL(str) {
          return /^(CL)?\d{8}-\d{1}$/.test(str);
        },
        CO: function CO(str) {
          return /^(CO)?\d{10}$/.test(str);
        },
        CR: function CR(str) {
          return /^(CR)?\d{9,12}$/.test(str);
        },
        EC: function EC(str) {
          return /^(EC)?\d{13}$/.test(str);
        },
        SV: function SV(str) {
          return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(str);
        },
        GT: function GT(str) {
          return /^(GT)?\d{7}-\d{1}$/.test(str);
        },
        HN: function HN(str) {
          return /^(HN)?$/.test(str);
        },
        MX: function MX(str) {
          return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(str);
        },
        NI: function NI(str) {
          return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(str);
        },
        PA: function PA(str) {
          return /^(PA)?$/.test(str);
        },
        PY: function PY(str) {
          return /^(PY)?\d{6,8}-\d{1}$/.test(str);
        },
        PE: function PE(str) {
          return /^(PE)?\d{11}$/.test(str);
        },
        DO: function DO(str) {
          return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(str);
        },
        UY: function UY(str) {
          return /^(UY)?\d{12}$/.test(str);
        },
        VE: function VE(str) {
          return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(str);
        }
      };
      function isVAT(str, countryCode) {
        (0, _assertString.default)(str);
        (0, _assertString.default)(countryCode);
        if (countryCode in vatMatchers) {
          return vatMatchers[countryCode](str);
        }
        throw new Error("Invalid country code: '".concat(countryCode, "'"));
      }
    }
  });

  // node_modules/validator/index.js
  var require_validator = __commonJS({
    "node_modules/validator/index.js"(exports, module) {
      "use strict";
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _toDate = _interopRequireDefault(require_toDate());
      var _toFloat = _interopRequireDefault(require_toFloat());
      var _toInt = _interopRequireDefault(require_toInt());
      var _toBoolean = _interopRequireDefault(require_toBoolean());
      var _equals = _interopRequireDefault(require_equals());
      var _contains = _interopRequireDefault(require_contains());
      var _matches = _interopRequireDefault(require_matches());
      var _isEmail = _interopRequireDefault(require_isEmail());
      var _isURL = _interopRequireDefault(require_isURL());
      var _isMACAddress = _interopRequireDefault(require_isMACAddress());
      var _isIP = _interopRequireDefault(require_isIP());
      var _isIPRange = _interopRequireDefault(require_isIPRange());
      var _isFQDN = _interopRequireDefault(require_isFQDN());
      var _isDate = _interopRequireDefault(require_isDate());
      var _isTime = _interopRequireDefault(require_isTime());
      var _isBoolean = _interopRequireDefault(require_isBoolean());
      var _isLocale = _interopRequireDefault(require_isLocale());
      var _isAbaRouting = _interopRequireDefault(require_isAbaRouting());
      var _isAlpha = _interopRequireWildcard(require_isAlpha());
      var _isAlphanumeric = _interopRequireWildcard(require_isAlphanumeric());
      var _isNumeric = _interopRequireDefault(require_isNumeric());
      var _isPassportNumber = _interopRequireDefault(require_isPassportNumber());
      var _isPort = _interopRequireDefault(require_isPort());
      var _isLowercase = _interopRequireDefault(require_isLowercase());
      var _isUppercase = _interopRequireDefault(require_isUppercase());
      var _isIMEI = _interopRequireDefault(require_isIMEI());
      var _isAscii = _interopRequireDefault(require_isAscii());
      var _isFullWidth = _interopRequireDefault(require_isFullWidth());
      var _isHalfWidth = _interopRequireDefault(require_isHalfWidth());
      var _isVariableWidth = _interopRequireDefault(require_isVariableWidth());
      var _isMultibyte = _interopRequireDefault(require_isMultibyte());
      var _isSemVer = _interopRequireDefault(require_isSemVer());
      var _isSurrogatePair = _interopRequireDefault(require_isSurrogatePair());
      var _isInt = _interopRequireDefault(require_isInt());
      var _isFloat = _interopRequireWildcard(require_isFloat());
      var _isDecimal = _interopRequireDefault(require_isDecimal());
      var _isHexadecimal = _interopRequireDefault(require_isHexadecimal());
      var _isOctal = _interopRequireDefault(require_isOctal());
      var _isDivisibleBy = _interopRequireDefault(require_isDivisibleBy());
      var _isHexColor = _interopRequireDefault(require_isHexColor());
      var _isRgbColor = _interopRequireDefault(require_isRgbColor());
      var _isHSL = _interopRequireDefault(require_isHSL());
      var _isISRC = _interopRequireDefault(require_isISRC());
      var _isIBAN = _interopRequireWildcard(require_isIBAN());
      var _isBIC = _interopRequireDefault(require_isBIC());
      var _isMD = _interopRequireDefault(require_isMD5());
      var _isHash = _interopRequireDefault(require_isHash());
      var _isJWT = _interopRequireDefault(require_isJWT());
      var _isJSON = _interopRequireDefault(require_isJSON());
      var _isEmpty = _interopRequireDefault(require_isEmpty());
      var _isLength = _interopRequireDefault(require_isLength());
      var _isByteLength = _interopRequireDefault(require_isByteLength());
      var _isUUID = _interopRequireDefault(require_isUUID());
      var _isMongoId = _interopRequireDefault(require_isMongoId());
      var _isAfter = _interopRequireDefault(require_isAfter());
      var _isBefore = _interopRequireDefault(require_isBefore());
      var _isIn = _interopRequireDefault(require_isIn());
      var _isLuhnNumber = _interopRequireDefault(require_isLuhnNumber());
      var _isCreditCard = _interopRequireDefault(require_isCreditCard());
      var _isIdentityCard = _interopRequireDefault(require_isIdentityCard());
      var _isEAN = _interopRequireDefault(require_isEAN());
      var _isISIN = _interopRequireDefault(require_isISIN());
      var _isISBN = _interopRequireDefault(require_isISBN());
      var _isISSN = _interopRequireDefault(require_isISSN());
      var _isTaxID = _interopRequireDefault(require_isTaxID());
      var _isMobilePhone = _interopRequireWildcard(require_isMobilePhone());
      var _isEthereumAddress = _interopRequireDefault(require_isEthereumAddress());
      var _isCurrency = _interopRequireDefault(require_isCurrency());
      var _isBtcAddress = _interopRequireDefault(require_isBtcAddress());
      var _isISO = require_isISO6346();
      var _isISO2 = _interopRequireDefault(require_isISO6391());
      var _isISO3 = _interopRequireDefault(require_isISO8601());
      var _isRFC = _interopRequireDefault(require_isRFC3339());
      var _isISO31661Alpha = _interopRequireDefault(require_isISO31661Alpha2());
      var _isISO31661Alpha2 = _interopRequireDefault(require_isISO31661Alpha3());
      var _isISO4 = _interopRequireDefault(require_isISO4217());
      var _isBase = _interopRequireDefault(require_isBase32());
      var _isBase2 = _interopRequireDefault(require_isBase58());
      var _isBase3 = _interopRequireDefault(require_isBase64());
      var _isDataURI = _interopRequireDefault(require_isDataURI());
      var _isMagnetURI = _interopRequireDefault(require_isMagnetURI());
      var _isMailtoURI = _interopRequireDefault(require_isMailtoURI());
      var _isMimeType = _interopRequireDefault(require_isMimeType());
      var _isLatLong = _interopRequireDefault(require_isLatLong());
      var _isPostalCode = _interopRequireWildcard(require_isPostalCode());
      var _ltrim = _interopRequireDefault(require_ltrim());
      var _rtrim = _interopRequireDefault(require_rtrim());
      var _trim = _interopRequireDefault(require_trim());
      var _escape = _interopRequireDefault(require_escape());
      var _unescape = _interopRequireDefault(require_unescape());
      var _stripLow = _interopRequireDefault(require_stripLow());
      var _whitelist = _interopRequireDefault(require_whitelist());
      var _blacklist = _interopRequireDefault(require_blacklist());
      var _isWhitelisted = _interopRequireDefault(require_isWhitelisted());
      var _normalizeEmail = _interopRequireDefault(require_normalizeEmail());
      var _isSlug = _interopRequireDefault(require_isSlug());
      var _isLicensePlate = _interopRequireDefault(require_isLicensePlate());
      var _isStrongPassword = _interopRequireDefault(require_isStrongPassword());
      var _isVAT = _interopRequireDefault(require_isVAT());
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap) return null;
        var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(e2) {
          return e2 ? t : r;
        })(e);
      }
      function _interopRequireWildcard(e, r) {
        if (!r && e && e.__esModule) return e;
        if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e };
        var t = _getRequireWildcardCache(r);
        if (t && t.has(e)) return t.get(e);
        var n13 = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
          var i2 = a ? Object.getOwnPropertyDescriptor(e, u) : null;
          i2 && (i2.get || i2.set) ? Object.defineProperty(n13, u, i2) : n13[u] = e[u];
        }
        return n13.default = e, t && t.set(e, n13), n13;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var version = "13.12.0";
      var validator = {
        version,
        toDate: _toDate.default,
        toFloat: _toFloat.default,
        toInt: _toInt.default,
        toBoolean: _toBoolean.default,
        equals: _equals.default,
        contains: _contains.default,
        matches: _matches.default,
        isEmail: _isEmail.default,
        isURL: _isURL.default,
        isMACAddress: _isMACAddress.default,
        isIP: _isIP.default,
        isIPRange: _isIPRange.default,
        isFQDN: _isFQDN.default,
        isBoolean: _isBoolean.default,
        isIBAN: _isIBAN.default,
        isBIC: _isBIC.default,
        isAbaRouting: _isAbaRouting.default,
        isAlpha: _isAlpha.default,
        isAlphaLocales: _isAlpha.locales,
        isAlphanumeric: _isAlphanumeric.default,
        isAlphanumericLocales: _isAlphanumeric.locales,
        isNumeric: _isNumeric.default,
        isPassportNumber: _isPassportNumber.default,
        isPort: _isPort.default,
        isLowercase: _isLowercase.default,
        isUppercase: _isUppercase.default,
        isAscii: _isAscii.default,
        isFullWidth: _isFullWidth.default,
        isHalfWidth: _isHalfWidth.default,
        isVariableWidth: _isVariableWidth.default,
        isMultibyte: _isMultibyte.default,
        isSemVer: _isSemVer.default,
        isSurrogatePair: _isSurrogatePair.default,
        isInt: _isInt.default,
        isIMEI: _isIMEI.default,
        isFloat: _isFloat.default,
        isFloatLocales: _isFloat.locales,
        isDecimal: _isDecimal.default,
        isHexadecimal: _isHexadecimal.default,
        isOctal: _isOctal.default,
        isDivisibleBy: _isDivisibleBy.default,
        isHexColor: _isHexColor.default,
        isRgbColor: _isRgbColor.default,
        isHSL: _isHSL.default,
        isISRC: _isISRC.default,
        isMD5: _isMD.default,
        isHash: _isHash.default,
        isJWT: _isJWT.default,
        isJSON: _isJSON.default,
        isEmpty: _isEmpty.default,
        isLength: _isLength.default,
        isLocale: _isLocale.default,
        isByteLength: _isByteLength.default,
        isUUID: _isUUID.default,
        isMongoId: _isMongoId.default,
        isAfter: _isAfter.default,
        isBefore: _isBefore.default,
        isIn: _isIn.default,
        isLuhnNumber: _isLuhnNumber.default,
        isCreditCard: _isCreditCard.default,
        isIdentityCard: _isIdentityCard.default,
        isEAN: _isEAN.default,
        isISIN: _isISIN.default,
        isISBN: _isISBN.default,
        isISSN: _isISSN.default,
        isMobilePhone: _isMobilePhone.default,
        isMobilePhoneLocales: _isMobilePhone.locales,
        isPostalCode: _isPostalCode.default,
        isPostalCodeLocales: _isPostalCode.locales,
        isEthereumAddress: _isEthereumAddress.default,
        isCurrency: _isCurrency.default,
        isBtcAddress: _isBtcAddress.default,
        isISO6346: _isISO.isISO6346,
        isFreightContainerID: _isISO.isFreightContainerID,
        isISO6391: _isISO2.default,
        isISO8601: _isISO3.default,
        isRFC3339: _isRFC.default,
        isISO31661Alpha2: _isISO31661Alpha.default,
        isISO31661Alpha3: _isISO31661Alpha2.default,
        isISO4217: _isISO4.default,
        isBase32: _isBase.default,
        isBase58: _isBase2.default,
        isBase64: _isBase3.default,
        isDataURI: _isDataURI.default,
        isMagnetURI: _isMagnetURI.default,
        isMailtoURI: _isMailtoURI.default,
        isMimeType: _isMimeType.default,
        isLatLong: _isLatLong.default,
        ltrim: _ltrim.default,
        rtrim: _rtrim.default,
        trim: _trim.default,
        escape: _escape.default,
        unescape: _unescape.default,
        stripLow: _stripLow.default,
        whitelist: _whitelist.default,
        blacklist: _blacklist.default,
        isWhitelisted: _isWhitelisted.default,
        normalizeEmail: _normalizeEmail.default,
        toString,
        isSlug: _isSlug.default,
        isStrongPassword: _isStrongPassword.default,
        isTaxID: _isTaxID.default,
        isDate: _isDate.default,
        isTime: _isTime.default,
        isLicensePlate: _isLicensePlate.default,
        isVAT: _isVAT.default,
        ibanLocales: _isIBAN.locales
      };
      var _default = exports.default = validator;
      module.exports = exports.default;
      module.exports.default = exports.default;
    }
  });

  // node_modules/express-validator/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/express-validator/lib/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.runAllChains = exports.toString = exports.bindAll = void 0;
      var bindAll = (object) => {
        const protoKeys = Object.getOwnPropertyNames(Object.getPrototypeOf(object));
        protoKeys.forEach((key) => {
          const maybeFn = object[key];
          if (typeof maybeFn === "function" && key !== "constructor") {
            object[key] = maybeFn.bind(object);
          }
        });
        return object;
      };
      exports.bindAll = bindAll;
      function toString2(value) {
        if (value instanceof Date) {
          return value.toISOString();
        } else if (value && typeof value === "object" && value.toString) {
          if (typeof value.toString !== "function") {
            return Object.getPrototypeOf(value).toString.call(value);
          }
          return value.toString();
        } else if (value == null || isNaN(value) && !value.length) {
          return "";
        }
        return String(value);
      }
      exports.toString = toString2;
      async function runAllChains(req, chains, runOpts) {
        const promises = [];
        for (const chain of chains) {
          const bails = chain.builder.build().bail;
          if (bails) {
            await Promise.all(promises);
          }
          const resultPromise = chain.run(req, runOpts);
          promises.push(resultPromise);
          if (bails) {
            const result = await resultPromise;
            if (!result.isEmpty()) {
              break;
            }
          }
        }
        return Promise.all(promises);
      }
      exports.runAllChains = runAllChains;
    }
  });

  // node_modules/express-validator/lib/context-items/sanitization.js
  var require_sanitization = __commonJS({
    "node_modules/express-validator/lib/context-items/sanitization.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Sanitization = void 0;
      var utils_1 = require_utils();
      var Sanitization = class {
        constructor(sanitizer, custom, options = [], stringify = utils_1.toString) {
          this.sanitizer = sanitizer;
          this.custom = custom;
          this.options = options;
          this.stringify = stringify;
        }
        async run(context, value, meta) {
          const { path, location } = meta;
          const runCustomSanitizer = async () => {
            const sanitizerValue = this.sanitizer(value, meta);
            return Promise.resolve(sanitizerValue);
          };
          if (this.custom) {
            const newValue = await runCustomSanitizer();
            context.setData(path, newValue, location);
            return;
          }
          const values = Array.isArray(value) ? value : [value];
          const newValues = values.map((value2) => {
            return this.sanitizer(this.stringify(value2), ...this.options);
          });
          context.setData(path, values !== value ? newValues[0] : newValues, location);
        }
      };
      exports.Sanitization = Sanitization;
    }
  });

  // node_modules/express-validator/lib/chain/sanitizers-impl.js
  var require_sanitizers_impl = __commonJS({
    "node_modules/express-validator/lib/chain/sanitizers-impl.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SanitizersImpl = void 0;
      var validator = require_validator();
      var sanitization_1 = require_sanitization();
      var SanitizersImpl = class {
        constructor(builder, chain) {
          this.builder = builder;
          this.chain = chain;
        }
        // custom sanitizers
        customSanitizer(sanitizer) {
          this.builder.addItem(new sanitization_1.Sanitization(sanitizer, true));
          return this.chain;
        }
        default(default_value) {
          return this.customSanitizer((value) => [void 0, null, NaN, ""].includes(value) ? default_value : value);
        }
        replace(values_to_replace, new_value) {
          if (!Array.isArray(values_to_replace)) {
            values_to_replace = [values_to_replace];
          }
          return this.customSanitizer((value) => values_to_replace.includes(value) ? new_value : value);
        }
        // Standard sanitizers
        addStandardSanitization(sanitizer, ...options) {
          this.builder.addItem(new sanitization_1.Sanitization(sanitizer, false, options));
          return this.chain;
        }
        blacklist(chars) {
          return this.addStandardSanitization(validator.blacklist, chars);
        }
        escape() {
          return this.addStandardSanitization(validator.escape);
        }
        unescape() {
          return this.addStandardSanitization(validator.unescape);
        }
        ltrim(chars) {
          return this.addStandardSanitization(validator.ltrim, chars);
        }
        normalizeEmail(options) {
          return this.addStandardSanitization(validator.normalizeEmail, options);
        }
        rtrim(chars) {
          return this.addStandardSanitization(validator.rtrim, chars);
        }
        stripLow(keep_new_lines) {
          return this.addStandardSanitization(validator.stripLow, keep_new_lines);
        }
        toArray() {
          return this.customSanitizer((value) => value !== void 0 && (Array.isArray(value) && value || [value]) || []);
        }
        toBoolean(strict) {
          return this.addStandardSanitization(validator.toBoolean, strict);
        }
        toDate() {
          return this.addStandardSanitization(validator.toDate);
        }
        toFloat() {
          return this.addStandardSanitization(validator.toFloat);
        }
        toInt(radix) {
          return this.addStandardSanitization(validator.toInt, radix);
        }
        toLowerCase() {
          return this.customSanitizer((value) => typeof value === "string" ? value.toLowerCase() : value);
        }
        toUpperCase() {
          return this.customSanitizer((value) => typeof value === "string" ? value.toUpperCase() : value);
        }
        trim(chars) {
          return this.addStandardSanitization(validator.trim, chars);
        }
        whitelist(chars) {
          return this.addStandardSanitization(validator.whitelist, chars);
        }
      };
      exports.SanitizersImpl = SanitizersImpl;
    }
  });

  // node_modules/express-validator/lib/chain/context-handler.js
  var require_context_handler = __commonJS({
    "node_modules/express-validator/lib/chain/context-handler.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/express-validator/lib/context-items/chain-condition.js
  var require_chain_condition = __commonJS({
    "node_modules/express-validator/lib/context-items/chain-condition.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ChainCondition = void 0;
      var base_1 = require_base();
      var ChainCondition = class {
        constructor(chain) {
          this.chain = chain;
        }
        async run(_context, _value, meta) {
          const result = await this.chain.run(meta.req, { dryRun: true });
          if (!result.isEmpty()) {
            throw new base_1.ValidationHalt();
          }
        }
      };
      exports.ChainCondition = ChainCondition;
    }
  });

  // node_modules/express-validator/lib/context-items/context-item.js
  var require_context_item = __commonJS({
    "node_modules/express-validator/lib/context-items/context-item.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/express-validator/lib/context-items/custom-condition.js
  var require_custom_condition = __commonJS({
    "node_modules/express-validator/lib/context-items/custom-condition.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CustomCondition = void 0;
      var base_1 = require_base();
      var CustomCondition = class {
        constructor(condition) {
          this.condition = condition;
        }
        async run(_context, value, meta) {
          try {
            const result = this.condition(value, meta);
            await result;
            if (!result) {
              throw new Error();
            }
          } catch (e) {
            throw new base_1.ValidationHalt();
          }
        }
      };
      exports.CustomCondition = CustomCondition;
    }
  });

  // node_modules/express-validator/lib/context-items/custom-validation.js
  var require_custom_validation = __commonJS({
    "node_modules/express-validator/lib/context-items/custom-validation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CustomValidation = void 0;
      var CustomValidation = class {
        constructor(validator, negated) {
          this.validator = validator;
          this.negated = negated;
        }
        async run(context, value, meta) {
          try {
            const result = this.validator(value, meta);
            const actualResult = await result;
            const isPromise = result && result.then;
            const failed = this.negated ? actualResult : !actualResult;
            if (!isPromise && failed || isPromise && this.negated) {
              context.addError({ type: "field", message: this.message, value, meta });
            }
          } catch (err) {
            if (this.negated) {
              return;
            }
            context.addError({
              type: "field",
              message: this.message || (err instanceof Error ? err.message : err),
              value,
              meta
            });
          }
        }
      };
      exports.CustomValidation = CustomValidation;
    }
  });

  // node_modules/express-validator/lib/context-items/standard-validation.js
  var require_standard_validation = __commonJS({
    "node_modules/express-validator/lib/context-items/standard-validation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StandardValidation = void 0;
      var utils_1 = require_utils();
      var StandardValidation = class {
        constructor(validator, negated, options = [], stringify = utils_1.toString) {
          this.validator = validator;
          this.negated = negated;
          this.options = options;
          this.stringify = stringify;
        }
        async run(context, value, meta) {
          const values = Array.isArray(value) ? value : [value];
          values.forEach((value2) => {
            const result = this.validator(this.stringify(value2), ...this.options);
            if (this.negated ? result : !result) {
              context.addError({ type: "field", message: this.message, value: value2, meta });
            }
          });
        }
      };
      exports.StandardValidation = StandardValidation;
    }
  });

  // node_modules/express-validator/lib/context-items/index.js
  var require_context_items = __commonJS({
    "node_modules/express-validator/lib/context-items/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_chain_condition(), exports);
      __exportStar(require_context_item(), exports);
      __exportStar(require_custom_condition(), exports);
      __exportStar(require_custom_validation(), exports);
      __exportStar(require_standard_validation(), exports);
    }
  });

  // node_modules/express-validator/lib/context-items/bail.js
  var require_bail = __commonJS({
    "node_modules/express-validator/lib/context-items/bail.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Bail = void 0;
      var base_1 = require_base();
      var Bail = class {
        run(context) {
          if (context.errors.length > 0) {
            throw new base_1.ValidationHalt();
          }
          return Promise.resolve();
        }
      };
      exports.Bail = Bail;
    }
  });

  // node_modules/express-validator/lib/chain/context-handler-impl.js
  var require_context_handler_impl = __commonJS({
    "node_modules/express-validator/lib/chain/context-handler-impl.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ContextHandlerImpl = void 0;
      var context_items_1 = require_context_items();
      var bail_1 = require_bail();
      var ContextHandlerImpl = class {
        constructor(builder, chain) {
          this.builder = builder;
          this.chain = chain;
        }
        bail(opts) {
          if (opts?.level === "request") {
            this.builder.setRequestBail();
          }
          this.builder.addItem(new bail_1.Bail());
          return this.chain;
        }
        if(condition) {
          if ("run" in condition) {
            this.builder.addItem(new context_items_1.ChainCondition(condition));
          } else if (typeof condition === "function") {
            this.builder.addItem(new context_items_1.CustomCondition(condition));
          } else {
            throw new Error("express-validator: condition is not a validation chain nor a function");
          }
          return this.chain;
        }
        optional(options = true) {
          let value;
          if (typeof options === "boolean") {
            value = options ? "undefined" : false;
          } else {
            value = options.values ? options.values : options.checkFalsy ? "falsy" : options.nullable ? "null" : "undefined";
          }
          this.builder.setOptional(value);
          return this.chain;
        }
      };
      exports.ContextHandlerImpl = ContextHandlerImpl;
    }
  });

  // node_modules/express-validator/lib/chain/context-runner.js
  var require_context_runner = __commonJS({
    "node_modules/express-validator/lib/chain/context-runner.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/lodash/lodash.js
  var require_lodash = __commonJS({
    "node_modules/lodash/lodash.js"(exports, module) {
      (function() {
        var undefined2;
        var VERSION = "4.17.21";
        var LARGE_ARRAY_SIZE = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [
          ["ary", WRAP_ARY_FLAG],
          ["bind", WRAP_BIND_FLAG],
          ["bindKey", WRAP_BIND_KEY_FLAG],
          ["curry", WRAP_CURRY_FLAG],
          ["curryRight", WRAP_CURRY_RIGHT_FLAG],
          ["flip", WRAP_FLIP_FLAG],
          ["partial", WRAP_PARTIAL_FLAG],
          ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
          ["rearg", WRAP_REARG_FLAG]
        ];
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
        var reTrimStart = /^\s+/;
        var reWhitespace = /\s/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([
          rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
          rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
          rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
          rsUpper + "+" + rsOptContrUpper,
          rsOrdUpper,
          rsOrdLower,
          rsDigits,
          rsEmoji
        ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout"
        ];
        var templateCounter = -1;
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var deburredLetters = {
          // Latin-1 Supplement block.
          "\xC0": "A",
          "\xC1": "A",
          "\xC2": "A",
          "\xC3": "A",
          "\xC4": "A",
          "\xC5": "A",
          "\xE0": "a",
          "\xE1": "a",
          "\xE2": "a",
          "\xE3": "a",
          "\xE4": "a",
          "\xE5": "a",
          "\xC7": "C",
          "\xE7": "c",
          "\xD0": "D",
          "\xF0": "d",
          "\xC8": "E",
          "\xC9": "E",
          "\xCA": "E",
          "\xCB": "E",
          "\xE8": "e",
          "\xE9": "e",
          "\xEA": "e",
          "\xEB": "e",
          "\xCC": "I",
          "\xCD": "I",
          "\xCE": "I",
          "\xCF": "I",
          "\xEC": "i",
          "\xED": "i",
          "\xEE": "i",
          "\xEF": "i",
          "\xD1": "N",
          "\xF1": "n",
          "\xD2": "O",
          "\xD3": "O",
          "\xD4": "O",
          "\xD5": "O",
          "\xD6": "O",
          "\xD8": "O",
          "\xF2": "o",
          "\xF3": "o",
          "\xF4": "o",
          "\xF5": "o",
          "\xF6": "o",
          "\xF8": "o",
          "\xD9": "U",
          "\xDA": "U",
          "\xDB": "U",
          "\xDC": "U",
          "\xF9": "u",
          "\xFA": "u",
          "\xFB": "u",
          "\xFC": "u",
          "\xDD": "Y",
          "\xFD": "y",
          "\xFF": "y",
          "\xC6": "Ae",
          "\xE6": "ae",
          "\xDE": "Th",
          "\xFE": "th",
          "\xDF": "ss",
          // Latin Extended-A block.
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010A": "C",
          "\u010C": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010B": "c",
          "\u010D": "c",
          "\u010E": "D",
          "\u0110": "D",
          "\u010F": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011A": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011B": "e",
          "\u011C": "G",
          "\u011E": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011D": "g",
          "\u011F": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012A": "I",
          "\u012C": "I",
          "\u012E": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012B": "i",
          "\u012D": "i",
          "\u012F": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013B": "L",
          "\u013D": "L",
          "\u013F": "L",
          "\u0141": "L",
          "\u013A": "l",
          "\u013C": "l",
          "\u013E": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014A": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014B": "n",
          "\u014C": "O",
          "\u014E": "O",
          "\u0150": "O",
          "\u014D": "o",
          "\u014F": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015A": "S",
          "\u015C": "S",
          "\u015E": "S",
          "\u0160": "S",
          "\u015B": "s",
          "\u015D": "s",
          "\u015F": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016A": "U",
          "\u016C": "U",
          "\u016E": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016B": "u",
          "\u016D": "u",
          "\u016F": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017B": "Z",
          "\u017D": "Z",
          "\u017A": "z",
          "\u017C": "z",
          "\u017E": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017F": "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {
          }
        }();
        var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = array == null ? 0 : array.length;
          while (length--) {
            if (iteratee(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (!predicate(array[index], index, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayFilter(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function arrayIncludes(array, value) {
          var length = array == null ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (comparator(value, array[index])) {
              return true;
            }
          }
          return false;
        }
        function arrayMap(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        function arrayPush(array, values) {
          var index = -1, length = values.length, offset = array.length;
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initAccum) {
          var length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[--length];
          }
          while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
          }
          return accumulator;
        }
        function arraySome(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string) {
          return string.split("");
        }
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result;
          eachFunc(collection, function(value, key, collection2) {
            if (predicate(value, key, collection2)) {
              result = key;
              return false;
            }
          });
          return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (comparator(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee) {
          var length = array == null ? 0 : array.length;
          return length ? baseSum(array, iteratee) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined2 : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined2 : object[key];
          };
        }
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSum(array, iteratee) {
          var result, index = -1, length = array.length;
          while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined2) {
              result = result === undefined2 ? current : result + current;
            }
          }
          return result;
        }
        function baseTimes(n13, iteratee) {
          var index = -1, result = Array(n13);
          while (++index < n13) {
            result[index] = iteratee(index);
          }
          return result;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1, length = strSymbols.length;
          while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;
          while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result = 0;
          while (length--) {
            if (array[length] === placeholder) {
              ++result;
            }
          }
          return result;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue(object, key) {
          return object == null ? undefined2 : object[key];
        }
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }
        function iteratorToArray(iterator) {
          var data, result = [];
          while (!(data = iterator.next()).done) {
            result.push(data.value);
          }
          return result;
        }
        function mapToArray(map) {
          var index = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        function replaceHolders(array, placeholder) {
          var index = -1, length = array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index] = PLACEHOLDER;
              result[resIndex++] = index;
            }
          }
          return result;
        }
        function setToArray(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        function setToPairs(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = [value, value];
          });
          return result;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index = fromIndex + 1;
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return index;
        }
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        function trimmedEndIndex(string) {
          var index = string.length;
          while (index-- && reWhitespace.test(string.charAt(index))) {
          }
          return index;
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }
        var runInContext = function runInContext2(context) {
          context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
          var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
          var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
          var coreJsData = context["__core-js_shared__"];
          var funcToString = funcProto.toString;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          var nativeObjectToString = objectProto.toString;
          var objectCtorString = funcToString.call(Object2);
          var oldDash = root._;
          var reIsNative = RegExp2(
            "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
          );
          var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
          var defineProperty = function() {
            try {
              var func = getNative(Object2, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e) {
            }
          }();
          var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
          var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
          var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
          var metaMap = WeakMap2 && new WeakMap2();
          var realNames = {};
          var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
          var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
          function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) {
                return value;
              }
              if (hasOwnProperty.call(value, "__wrapped__")) {
                return wrapperClone(value);
              }
            }
            return new LodashWrapper(value);
          }
          var baseCreate = /* @__PURE__ */ function() {
            function object() {
            }
            return function(proto) {
              if (!isObject(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result2 = new object();
              object.prototype = undefined2;
              return result2;
            };
          }();
          function baseLodash() {
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined2;
          }
          lodash.templateSettings = {
            /**
             * Used to detect `data` property values to be HTML-escaped.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "escape": reEscape,
            /**
             * Used to detect code to be evaluated.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "evaluate": reEvaluate,
            /**
             * Used to detect `data` property values to inject.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "interpolate": reInterpolate,
            /**
             * Used to reference the data object in the template text.
             *
             * @memberOf _.templateSettings
             * @type {string}
             */
            "variable": "",
            /**
             * Used to import variables into the compiled template.
             *
             * @memberOf _.templateSettings
             * @type {Object}
             */
            "imports": {
              /**
               * A reference to the `lodash` function.
               *
               * @memberOf _.templateSettings.imports
               * @type {Function}
               */
              "_": lodash
            }
          };
          lodash.prototype = baseLodash.prototype;
          lodash.prototype.constructor = lodash;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result2 = new LazyWrapper(this.__wrapped__);
            result2.__actions__ = copyArray(this.__actions__);
            result2.__dir__ = this.__dir__;
            result2.__filtered__ = this.__filtered__;
            result2.__iteratees__ = copyArray(this.__iteratees__);
            result2.__takeCount__ = this.__takeCount__;
            result2.__views__ = copyArray(this.__views__);
            return result2;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result2 = new LazyWrapper(this);
              result2.__dir__ = -1;
              result2.__filtered__ = true;
            } else {
              result2 = this.clone();
              result2.__dir__ *= -1;
            }
            return result2;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
              return baseWrapperValue(array, this.__actions__);
            }
            var result2 = [];
            outer:
              while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1, value = array[index];
                while (++iterIndex < iterLength) {
                  var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                  if (type == LAZY_MAP_FLAG) {
                    value = computed;
                  } else if (!computed) {
                    if (type == LAZY_FILTER_FLAG) {
                      continue outer;
                    } else {
                      break outer;
                    }
                  }
                }
                result2[resIndex++] = value;
              }
            return result2;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result2 = this.has(key) && delete this.__data__[key];
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result2 = data[key];
              return result2 === HASH_UNDEFINED ? undefined2 : result2;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined2;
          }
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
          }
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
            return this;
          }
          Hash.prototype.clear = hashClear;
          Hash.prototype["delete"] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            --this.size;
            return true;
          }
          function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined2 : data[index][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              "hash": new Hash(),
              "map": new (Map2 || ListCache)(),
              "string": new Hash()
            };
          }
          function mapCacheDelete(key) {
            var result2 = getMapData(this, key)["delete"](key);
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size2 = data.size;
            data.set(key, value);
            this.size += data.size == size2 ? 0 : 1;
            return this;
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          function SetCache(values2) {
            var index = -1, length = values2 == null ? 0 : values2.length;
            this.__data__ = new MapCache();
            while (++index < length) {
              this.add(values2[index]);
            }
          }
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }
          function setCacheHas(value) {
            return this.__data__.has(value);
          }
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;
          function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
          }
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }
          function stackDelete(key) {
            var data = this.__data__, result2 = data["delete"](key);
            this.size = data.size;
            return result2;
          }
          function stackGet(key) {
            return this.__data__.get(key);
          }
          function stackHas(key) {
            return this.__data__.has(key);
          }
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs = data.__data__;
              if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }
          Stack.prototype.clear = stackClear;
          Stack.prototype["delete"] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
              (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
              isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
              isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
              isIndex(key, length)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined2;
          }
          function arraySampleSize(array, n13) {
            return shuffleSelf(copyArray(array), baseClamp(n13, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }
          function baseAggregator(collection, setter, iteratee2, accumulator) {
            baseEach(collection, function(value, key, collection2) {
              setter(accumulator, value, iteratee2(value), collection2);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
          }
          function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) {
              defineProperty(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
              });
            } else {
              object[key] = value;
            }
          }
          function baseAt(object, paths) {
            var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
            while (++index < length) {
              result2[index] = skip ? undefined2 : get(object, paths[index]);
            }
            return result2;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              if (upper !== undefined2) {
                number = number <= upper ? number : upper;
              }
              if (lower !== undefined2) {
                number = number >= lower ? number : lower;
              }
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
              result2 = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result2 !== undefined2) {
              return result2;
            }
            if (!isObject(value)) {
              return value;
            }
            var isArr = isArray(value);
            if (isArr) {
              result2 = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result2);
              }
            } else {
              var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
              if (isBuffer(value)) {
                return cloneBuffer(value, isDeep);
              }
              if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result2 = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                  return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
                }
              } else {
                if (!cloneableTags[tag]) {
                  return object ? value : {};
                }
                result2 = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result2);
            if (isSet(value)) {
              value.forEach(function(subValue) {
                result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
            } else if (isMap(value)) {
              value.forEach(function(subValue, key2) {
                result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
              });
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined2 : keysFunc(value);
            arrayEach(props || value, function(subValue, key2) {
              if (props) {
                key2 = subValue;
                subValue = value[key2];
              }
              assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
            return result2;
          }
          function baseConforms(source) {
            var props = keys(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined2 && !(key in object) || !predicate(value)) {
                return false;
              }
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return setTimeout(function() {
              func.apply(undefined2, args);
            }, wait);
          }
          function baseDifference(array, values2, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
            if (!length) {
              return result2;
            }
            if (iteratee2) {
              values2 = arrayMap(values2, baseUnary(iteratee2));
            }
            if (comparator) {
              includes2 = arrayIncludesWith;
              isCommon = false;
            } else if (values2.length >= LARGE_ARRAY_SIZE) {
              includes2 = cacheHas;
              isCommon = false;
              values2 = new SetCache(values2);
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) {
                    if (values2[valuesIndex] === computed) {
                      continue outer;
                    }
                  }
                  result2.push(value);
                } else if (!includes2(values2, computed, comparator)) {
                  result2.push(value);
                }
              }
            return result2;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result2 = true;
            baseEach(collection, function(value, index, collection2) {
              result2 = !!predicate(value, index, collection2);
              return result2;
            });
            return result2;
          }
          function baseExtremum(array, iteratee2, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
              var value = array[index], current = iteratee2(value);
              if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
                var computed = current, result2 = value;
              }
            }
            return result2;
          }
          function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end === undefined2 || end > length ? length : toInteger(end);
            if (end < 0) {
              end += length;
            }
            end = start > end ? 0 : toLength(end);
            while (start < end) {
              array[start++] = value;
            }
            return array;
          }
          function baseFilter(collection, predicate) {
            var result2 = [];
            baseEach(collection, function(value, index, collection2) {
              if (predicate(value, index, collection2)) {
                result2.push(value);
              }
            });
            return result2;
          }
          function baseFlatten(array, depth, predicate, isStrict, result2) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result2 || (result2 = []);
            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result2);
                } else {
                  arrayPush(result2, value);
                }
              } else if (!isStrict) {
                result2[result2.length] = value;
              }
            }
            return result2;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee2) {
            return object && baseFor(object, iteratee2, keys);
          }
          function baseForOwnRight(object, iteratee2) {
            return object && baseForRight(object, iteratee2, keys);
          }
          function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
              return isFunction(object[key]);
            });
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }
            return index && index == length ? object : undefined2;
          }
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result2 = keysFunc(object);
            return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
          }
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined2 ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
          }
          function baseHasIn(object, key) {
            return object != null && key in Object2(object);
          }
          function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
          }
          function baseIntersection(arrays, iteratee2, comparator) {
            var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              if (othIndex && iteratee2) {
                array = arrayMap(array, baseUnary(iteratee2));
              }
              maxLength = nativeMin(array.length, maxLength);
              caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer:
              while (++index < length && result2.length < maxLength) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                  othIndex = othLength;
                  while (--othIndex) {
                    var cache = caches[othIndex];
                    if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                      continue outer;
                    }
                  }
                  if (seen) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseInverter(object, setter, iteratee2, accumulator) {
            baseForOwn(object, function(value, key, object2) {
              setter(accumulator, iteratee2(value), key, object2);
            });
            return accumulator;
          }
          function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined2 : apply(func, object, args);
          }
          function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
          }
          function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
          }
          function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
          }
          function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
              if (!isBuffer(other)) {
                return false;
              }
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined2 && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack();
                if (customizer) {
                  var result2 = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                  return false;
                }
              }
            }
            return true;
          }
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
          }
          function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
          }
          function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
          }
          function baseIteratee(value) {
            if (typeof value == "function") {
              return value;
            }
            if (value == null) {
              return identity;
            }
            if (typeof value == "object") {
              return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
          }
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result2 = [];
            for (var key in Object2(object)) {
              if (hasOwnProperty.call(object, key) && key != "constructor") {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseKeysIn(object) {
            if (!isObject(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result2 = [];
            for (var key in object) {
              if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee2) {
            var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value, key, collection2) {
              result2[++index] = iteratee2(value, key, collection2);
            });
            return result2;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path), srcValue);
            }
            return function(object) {
              var objValue = get(object, path);
              return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(source, function(srcValue, key) {
              stack || (stack = new Stack());
              if (isObject(srcValue)) {
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
                if (newValue === undefined2) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            }, keysIn);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
            var isCommon = newValue === undefined2;
            if (isCommon) {
              var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                newValue = objValue;
                if (isArguments(objValue)) {
                  newValue = toPlainObject(objValue);
                } else if (!isObject(objValue) || isFunction(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n13) {
            var length = array.length;
            if (!length) {
              return;
            }
            n13 += n13 < 0 ? length : 0;
            return isIndex(n13, length) ? array[n13] : undefined2;
          }
          function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) {
              iteratees = arrayMap(iteratees, function(iteratee2) {
                if (isArray(iteratee2)) {
                  return function(value) {
                    return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                  };
                }
                return iteratee2;
              });
            } else {
              iteratees = [identity];
            }
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result2 = baseMap(collection, function(value, key, collection2) {
              var criteria = arrayMap(iteratees, function(iteratee2) {
                return iteratee2(value);
              });
              return { "criteria": criteria, "index": ++index, "value": value };
            });
            return baseSortBy(result2, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
              return hasIn(object, path);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result2 = {};
            while (++index < length) {
              var path = paths[index], value = baseGet(object, path);
              if (predicate(value, path)) {
                baseSet(result2, castPath(path, object), value);
              }
            }
            return result2;
          }
          function basePropertyDeep(path) {
            return function(object) {
              return baseGet(object, path);
            };
          }
          function basePullAll(array, values2, iteratee2, comparator) {
            var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
            if (array === values2) {
              values2 = copyArray(values2);
            }
            if (iteratee2) {
              seen = arrayMap(array, baseUnary(iteratee2));
            }
            while (++index < length) {
              var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
              while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
                if (seen !== array) {
                  splice.call(seen, fromIndex, 1);
                }
                splice.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
              var index = indexes[length];
              if (length == lastIndex || index !== previous) {
                var previous = index;
                if (isIndex(index)) {
                  splice.call(array, index, 1);
                } else {
                  baseUnset(array, index);
                }
              }
            }
            return array;
          }
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
            while (length--) {
              result2[fromRight ? length : ++index] = start;
              start += step;
            }
            return result2;
          }
          function baseRepeat(string, n13) {
            var result2 = "";
            if (!string || n13 < 1 || n13 > MAX_SAFE_INTEGER) {
              return result2;
            }
            do {
              if (n13 % 2) {
                result2 += string;
              }
              n13 = nativeFloor(n13 / 2);
              if (n13) {
                string += string;
              }
            } while (n13);
            return result2;
          }
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
          }
          function baseSample(collection) {
            return arraySample(values(collection));
          }
          function baseSampleSize(collection, n13) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n13, 0, array.length));
          }
          function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
              return object;
            }
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
              var key = toKey(path[index]), newValue = value;
              if (key === "__proto__" || key === "constructor" || key === "prototype") {
                return object;
              }
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined2;
                if (newValue === undefined2) {
                  newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
          };
          var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
              "configurable": true,
              "enumerable": false,
              "value": constant(string),
              "writable": true
            });
          };
          function baseShuffle(collection) {
            return shuffleSelf(values(collection));
          }
          function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result2 = Array2(length);
            while (++index < length) {
              result2[index] = array[index + start];
            }
            return result2;
          }
          function baseSome(collection, predicate) {
            var result2;
            baseEach(collection, function(value, index, collection2) {
              result2 = predicate(value, index, collection2);
              return !result2;
            });
            return !!result2;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed = array[mid];
                if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                  low = mid + 1;
                } else {
                  high = mid;
                }
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee2, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) {
              return 0;
            }
            value = iteratee2(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
              if (valIsNaN) {
                var setLow = retHighest || othIsReflexive;
              } else if (valIsUndefined) {
                setLow = othIsReflexive && (retHighest || othIsDefined);
              } else if (valIsNull) {
                setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
              } else if (valIsSymbol) {
                setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
              } else if (othIsNull || othIsSymbol) {
                setLow = false;
              } else {
                setLow = retHighest ? computed <= value : computed < value;
              }
              if (setLow) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee2) {
            var index = -1, length = array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              if (!index || !eq(computed, seen)) {
                var seen = computed;
                result2[resIndex++] = value === 0 ? 0 : value;
              }
            }
            return result2;
          }
          function baseToNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            return +value;
          }
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function baseUniq(array, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
            if (comparator) {
              isCommon = false;
              includes2 = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
              var set2 = iteratee2 ? null : createSet(array);
              if (set2) {
                return setToArray(set2);
              }
              isCommon = false;
              includes2 = cacheHas;
              seen = new SetCache();
            } else {
              seen = iteratee2 ? [] : result2;
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var seenIndex = seen.length;
                  while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                      continue outer;
                    }
                  }
                  if (iteratee2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                } else if (!includes2(seen, computed, comparator)) {
                  if (seen !== result2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
          }
          function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
          }
          function baseWrapperValue(value, actions) {
            var result2 = value;
            if (result2 instanceof LazyWrapper) {
              result2 = result2.value();
            }
            return arrayReduce(actions, function(result3, action) {
              return action.func.apply(action.thisArg, arrayPush([result3], action.args));
            }, result2);
          }
          function baseXor(arrays, iteratee2, comparator) {
            var length = arrays.length;
            if (length < 2) {
              return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result2 = Array2(length);
            while (++index < length) {
              var array = arrays[index], othIndex = -1;
              while (++othIndex < length) {
                if (othIndex != index) {
                  result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
                }
              }
            }
            return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
          }
          function baseZipObject(props, values2, assignFunc) {
            var index = -1, length = props.length, valsLength = values2.length, result2 = {};
            while (++index < length) {
              var value = index < valsLength ? values2[index] : undefined2;
              assignFunc(result2, props[index], value);
            }
            return result2;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
          }
          function castFunction(value) {
            return typeof value == "function" ? value : identity;
          }
          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString2(value));
          }
          var castRest = baseRest;
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined2 ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }
          var clearTimeout = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result2);
            return result2;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
            return result2;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result2.lastIndex = regexp.lastIndex;
            return result2;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
              var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                return 1;
              }
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
              var result2 = compareAscending(objCriteria[index], othCriteria[index]);
              if (result2) {
                if (index >= ordersLength) {
                  return result2;
                }
                var order = orders[index];
                return result2 * (order == "desc" ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
              result2[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[holders[argsIndex]] = args[argsIndex];
              }
            }
            while (rangeLength--) {
              result2[leftIndex++] = args[argsIndex++];
            }
            return result2;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
              result2[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
              result2[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[offset + holders[holdersIndex]] = args[argsIndex++];
              }
            }
            return result2;
          }
          function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array2(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
              if (newValue === undefined2) {
                newValue = source[key];
              }
              if (isNew) {
                baseAssignValue(object, key, newValue);
              } else {
                assignValue(object, key, newValue);
              }
            }
            return object;
          }
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee2) {
              var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
              customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined2 : customizer;
                length = 1;
              }
              object = Object2(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee2) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee2);
              }
              var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
              while (fromRight ? index-- : ++index < length) {
                if (iteratee2(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee2, keysFunc) {
              var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee2(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string) {
              string = toString2(string);
              var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
              var chr = strSymbols ? strSymbols[0] : string.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string) {
              return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return new Ctor();
                case 1:
                  return new Ctor(args[0]);
                case 2:
                  return new Ctor(args[0], args[1]);
                case 3:
                  return new Ctor(args[0], args[1], args[2]);
                case 4:
                  return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
              return isObject(result2) ? result2 : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
              while (index--) {
                args[index] = arguments[index];
              }
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) {
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  undefined2,
                  args,
                  holders,
                  undefined2,
                  undefined2,
                  arity - length
                );
              }
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return apply(fn, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object2(collection);
              if (!isArrayLike(collection)) {
                var iteratee2 = getIteratee(predicate, 3);
                collection = keys(collection);
                predicate = function(key) {
                  return iteratee2(iterable[key], key, iterable);
                };
              }
              var index = findIndexFunc(collection, predicate, fromIndex);
              return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
              if (fromRight) {
                funcs.reverse();
              }
              while (index--) {
                var func = funcs[index];
                if (typeof func != "function") {
                  throw new TypeError2(FUNC_ERROR_TEXT);
                }
                if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                  var wrapper = new LodashWrapper([], true);
                }
              }
              index = wrapper ? index : length;
              while (++index < length) {
                func = funcs[index];
                var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
                if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                  wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                } else {
                  wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && args.length == 1 && isArray(value)) {
                  return wrapper.plant(value).value();
                }
                var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
                while (++index2 < length) {
                  result2 = funcs[index2].call(this, result2);
                }
                return result2;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length;
              while (index--) {
                args[index] = arguments[index];
              }
              if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
              }
              if (partials) {
                args = composeArgs(args, partials, holders, isCurried);
              }
              if (partialsRight) {
                args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
              }
              length -= holdersCount;
              if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  thisArg,
                  args,
                  newHolders,
                  argPos,
                  ary2,
                  arity - length
                );
              }
              var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
              length = args.length;
              if (argPos) {
                args = reorder(args, argPos);
              } else if (isFlip && length > 1) {
                args.reverse();
              }
              if (isAry && ary2 < length) {
                args.length = ary2;
              }
              if (this && this !== root && this instanceof wrapper) {
                fn = Ctor || createCtor(fn);
              }
              return fn.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee2) {
              return baseInverter(object, setter, toIteratee(iteratee2), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result2;
              if (value === undefined2 && other === undefined2) {
                return defaultValue;
              }
              if (value !== undefined2) {
                result2 = value;
              }
              if (other !== undefined2) {
                if (result2 === undefined2) {
                  return other;
                }
                if (typeof value == "string" || typeof other == "string") {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result2 = operator(value, other);
              }
              return result2;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee2) {
                  return apply(iteratee2, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined2 ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
              return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
              }
              while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
              }
              return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function createRange(fromRight) {
            return function(start, end, step) {
              if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
                end = step = undefined2;
              }
              start = toFinite(start);
              if (end === undefined2) {
                end = start;
                start = 0;
              } else {
                end = toFinite(end);
              }
              step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
              return baseRange(start, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!(typeof value == "string" && typeof other == "string")) {
                value = toNumber(value);
                other = toNumber(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
              bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
              func,
              bitmask,
              thisArg,
              newPartials,
              newHolders,
              newPartialsRight,
              newHoldersRight,
              argPos,
              ary2,
              arity
            ];
            var result2 = wrapFunc.apply(undefined2, newData);
            if (isLaziable(func)) {
              setData(result2, newData);
            }
            result2.placeholder = placeholder;
            return setWrapToString(result2, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math2[methodName];
            return function(number, precision) {
              number = toNumber(number);
              precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
              if (precision && nativeIsFinite(number)) {
                var pair = (toString2(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString2(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
            return new Set2(values2);
          };
          function createToPairs(keysFunc) {
            return function(object) {
              var tag = getTag(object);
              if (tag == mapTag) {
                return mapToArray(object);
              }
              if (tag == setTag) {
                return setToPairs(object);
              }
              return baseToPairs(object, keysFunc(object));
            };
          }
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
              partials = holders = undefined2;
            }
            ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
            arity = arity === undefined2 ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined2;
            }
            var data = isBindKey ? undefined2 : getData(func);
            var newData = [
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary2,
              arity
            ];
            if (data) {
              mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
              bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
              var result2 = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
              result2 = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
              result2 = createPartial(func, bitmask, thisArg, partials);
            } else {
              result2 = createHybrid.apply(undefined2, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result2, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject(value) ? undefined2 : value;
          }
          function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) {
              return arrStacked == other && othStacked == array;
            }
            var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
              var arrValue = array[index], othValue = other[index];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              }
              if (compared !== undefined2) {
                if (compared) {
                  continue;
                }
                result2 = false;
                break;
              }
              if (seen) {
                if (!arraySome(other, function(othValue2, othIndex) {
                  if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                  }
                })) {
                  result2 = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result2 = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result2;
          }
          function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;
              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                  return false;
                }
                return true;
              case boolTag:
              case dateTag:
              case numberTag:
                return eq(+object, +other);
              case errorTag:
                return object.name == other.name && object.message == other.message;
              case regexpTag:
              case stringTag:
                return object == other + "";
              case mapTag:
                var convert = mapToArray;
              case setTag:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                  return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG;
                stack.set(object, other);
                var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack["delete"](object);
                return result2;
              case symbolTag:
                if (symbolValueOf) {
                  return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
          }
          function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                return false;
              }
            }
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) {
              return objStacked == other && othStacked == object;
            }
            var result2 = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key], othValue = other[key];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result2 = false;
                break;
              }
              skipCtor || (skipCtor = key == "constructor");
            }
            if (result2 && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                result2 = false;
              }
            }
            stack["delete"](object);
            stack["delete"](other);
            return result2;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined2, flatten), func + "");
          }
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
          }
          var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
          };
          function getFuncName(func) {
            var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (otherFunc == null || otherFunc == func) {
                return data.name;
              }
            }
            return result2;
          }
          function getHolder(func) {
            var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result2 = lodash.iteratee || iteratee;
            result2 = result2 === iteratee ? baseIteratee : result2;
            return arguments.length ? result2(arguments[0], arguments[1]) : result2;
          }
          function getMapData(map2, key) {
            var data = map2.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result2 = keys(object), length = result2.length;
            while (length--) {
              var key = result2[length], value = object[key];
              result2[length] = [key, value, isStrictComparable(value)];
            }
            return result2;
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined2;
          }
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = undefined2;
              var unmasked = true;
            } catch (e) {
            }
            var result2 = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result2;
          }
          var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) {
              return [];
            }
            object = Object2(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          };
          var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result2 = [];
            while (object) {
              arrayPush(result2, getSymbols(object));
              object = getPrototype(object);
            }
            return result2;
          };
          var getTag = baseGetTag;
          if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
            getTag = function(value) {
              var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
              if (ctorString) {
                switch (ctorString) {
                  case dataViewCtorString:
                    return dataViewTag;
                  case mapCtorString:
                    return mapTag;
                  case promiseCtorString:
                    return promiseTag;
                  case setCtorString:
                    return setTag;
                  case weakMapCtorString:
                    return weakMapTag;
                }
              }
              return result2;
            };
          }
          function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
              var data = transforms[index], size2 = data.size;
              switch (data.type) {
                case "drop":
                  start += size2;
                  break;
                case "dropRight":
                  end -= size2;
                  break;
                case "take":
                  end = nativeMin(end, start + size2);
                  break;
                case "takeRight":
                  start = nativeMax(start, end - size2);
                  break;
              }
            }
            return { "start": start, "end": end };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result2 = false;
            while (++index < length) {
              var key = toKey(path[index]);
              if (!(result2 = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result2 || ++index != length) {
              return result2;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
          }
          function initCloneArray(array) {
            var length = array.length, result2 = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
              result2.index = array.index;
              result2.input = array.input;
            }
            return result2;
          }
          function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
          }
          function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
              case arrayBufferTag:
                return cloneArrayBuffer(object);
              case boolTag:
              case dateTag:
                return new Ctor(+object);
              case dataViewTag:
                return cloneDataView(object, isDeep);
              case float32Tag:
              case float64Tag:
              case int8Tag:
              case int16Tag:
              case int32Tag:
              case uint8Tag:
              case uint8ClampedTag:
              case uint16Tag:
              case uint32Tag:
                return cloneTypedArray(object, isDeep);
              case mapTag:
                return new Ctor();
              case numberTag:
              case stringTag:
                return new Ctor(object);
              case regexpTag:
                return cloneRegExp(object);
              case setTag:
                return new Ctor();
              case symbolTag:
                return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
              return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
          }
          function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
              return false;
            }
            var type = typeof index;
            if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
              return eq(object[index], value);
            }
            return false;
          }
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
          }
          function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
              return false;
            }
            if (func === other) {
              return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var isMaskable = coreJsData ? isFunction : stubFalse;
          function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
            };
          }
          function memoizeCapped(func) {
            var result2 = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }
              return key;
            });
            var cache = result2.cache;
            return result2;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
              return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
              data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
              data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
              data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result2 = [];
            if (object != null) {
              for (var key in Object2(object)) {
                result2.push(key);
              }
            }
            return result2;
          }
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          function overRest(func, start, transform2) {
            start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
            return function() {
              var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
              while (++index < length) {
                array[index] = args[start + index];
              }
              index = -1;
              var otherArgs = Array2(start + 1);
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = transform2(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index = indexes[length];
              array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
            }
            return array;
          }
          function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") {
              return;
            }
            if (key == "__proto__") {
              return;
            }
            return object[key];
          }
          var setData = shortOut(baseSetData);
          var setTimeout = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count = 0;
              }
              return func.apply(undefined2, arguments);
            };
          }
          function shuffleSelf(array, size2) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size2 = size2 === undefined2 ? length : size2;
            while (++index < size2) {
              var rand2 = baseRandom(index, lastIndex), value = array[rand2];
              array[rand2] = array[index];
              array[index] = value;
            }
            array.length = size2;
            return array;
          }
          var stringToPath = memoizeCapped(function(string) {
            var result2 = [];
            if (string.charCodeAt(0) === 46) {
              result2.push("");
            }
            string.replace(rePropName, function(match, number, quote, subString) {
              result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result2;
          });
          function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) {
              return value;
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {
              }
              try {
                return func + "";
              } catch (e) {
              }
            }
            return "";
          }
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
              }
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
              return wrapper.clone();
            }
            var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result2.__actions__ = copyArray(wrapper.__actions__);
            result2.__index__ = wrapper.__index__;
            result2.__values__ = wrapper.__values__;
            return result2;
          }
          function chunk(array, size2, guard) {
            if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
              size2 = 1;
            } else {
              size2 = nativeMax(toInteger(size2), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size2 < 1) {
              return [];
            }
            var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
            while (index < length) {
              result2[resIndex++] = baseSlice(array, index, index += size2);
            }
            return result2;
          }
          function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index];
              if (value) {
                result2[resIndex++] = value;
              }
            }
            return result2;
          }
          function concat() {
            var length = arguments.length;
            if (!length) {
              return [];
            }
            var args = Array2(length - 1), array = arguments[0], index = length;
            while (index--) {
              args[index - 1] = arguments[index];
            }
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
          }
          var difference = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
          });
          var differenceBy = baseRest(function(array, values2) {
            var iteratee2 = last(values2);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
          });
          var differenceWith = baseRest(function(array, values2) {
            var comparator = last(values2);
            if (isArrayLikeObject(comparator)) {
              comparator = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
          });
          function drop(array, n13, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n13 = guard || n13 === undefined2 ? 1 : toInteger(n13);
            return baseSlice(array, n13 < 0 ? 0 : n13, length);
          }
          function dropRight(array, n13, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n13 = guard || n13 === undefined2 ? 1 : toInteger(n13);
            n13 = length - n13;
            return baseSlice(array, 0, n13 < 0 ? 0 : n13);
          }
          function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
              start = 0;
              end = length;
            }
            return baseFill(array, value, start, end);
          }
          function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
          }
          function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
          }
          function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
            while (++index < length) {
              var pair = pairs[index];
              result2[pair[0]] = pair[1];
            }
            return result2;
          }
          function head(array) {
            return array && array.length ? array[0] : undefined2;
          }
          function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseIndexOf(array, value, index);
          }
          function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee2 === last(mapped)) {
              iteratee2 = undefined2;
            } else {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
          });
          var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            if (comparator) {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
          });
          function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
          }
          function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined2;
          }
          function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
          }
          function nth(array, n13) {
            return array && array.length ? baseNth(array, toInteger(n13)) : undefined2;
          }
          var pull = baseRest(pullAll);
          function pullAll(array, values2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
          }
          function pullAllBy(array, values2, iteratee2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
          }
          function pullAllWith(array, values2, comparator) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
          }
          var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
              return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result2;
          });
          function remove(array, predicate) {
            var result2 = [];
            if (!(array && array.length)) {
              return result2;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result2.push(value);
                indexes.push(index);
              }
            }
            basePullAt(array, indexes);
            return result2;
          }
          function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
          }
          function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
              start = 0;
              end = length;
            } else {
              start = start == null ? 0 : toInteger(start);
              end = end === undefined2 ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
          }
          function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
          }
          function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value);
              if (index < length && eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
          }
          function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value, true) - 1;
              if (eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy(array, iteratee2) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take(array, n13, guard) {
            if (!(array && array.length)) {
              return [];
            }
            n13 = guard || n13 === undefined2 ? 1 : toInteger(n13);
            return baseSlice(array, 0, n13 < 0 ? 0 : n13);
          }
          function takeRight(array, n13, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n13 = guard || n13 === undefined2 ? 1 : toInteger(n13);
            n13 = length - n13;
            return baseSlice(array, n13 < 0 ? 0 : n13, length);
          }
          function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
          });
          var unionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
          });
          var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
          });
          function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy(array, iteratee2) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return array && array.length ? baseUniq(array, undefined2, comparator) : [];
          }
          function unzip(array) {
            if (!(array && array.length)) {
              return [];
            }
            var length = 0;
            array = arrayFilter(array, function(group) {
              if (isArrayLikeObject(group)) {
                length = nativeMax(group.length, length);
                return true;
              }
            });
            return baseTimes(length, function(index) {
              return arrayMap(array, baseProperty(index));
            });
          }
          function unzipWith(array, iteratee2) {
            if (!(array && array.length)) {
              return [];
            }
            var result2 = unzip(array);
            if (iteratee2 == null) {
              return result2;
            }
            return arrayMap(result2, function(group) {
              return apply(iteratee2, undefined2, group);
            });
          }
          var without = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
          });
          var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
          });
          var xorBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
          });
          var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
          });
          var zip = baseRest(unzip);
          function zipObject(props, values2) {
            return baseZipObject(props || [], values2 || [], assignValue);
          }
          function zipObjectDeep(props, values2) {
            return baseZipObject(props || [], values2 || [], baseSet);
          }
          var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
            iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
            return unzipWith(arrays, iteratee2);
          });
          function chain(value) {
            var result2 = lodash(value);
            result2.__chain__ = true;
            return result2;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
              return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
              "func": thru,
              "args": [interceptor],
              "thisArg": undefined2
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              if (length && !array.length) {
                array.push(undefined2);
              }
              return array;
            });
          });
          function wrapperChain() {
            return chain(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            if (this.__values__ === undefined2) {
              this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
            return { "done": done, "value": value };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result2, parent2 = this;
            while (parent2 instanceof baseLodash) {
              var clone2 = wrapperClone(parent2);
              clone2.__index__ = 0;
              clone2.__values__ = undefined2;
              if (result2) {
                previous.__wrapped__ = clone2;
              } else {
                result2 = clone2;
              }
              var previous = clone2;
              parent2 = parent2.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result2;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              if (this.__actions__.length) {
                wrapped = new LazyWrapper(this);
              }
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                "func": thru,
                "args": [reverse],
                "thisArg": undefined2
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              ++result2[key];
            } else {
              baseAssignValue(result2, key, 1);
            }
          });
          function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find = createFind(findIndex);
          var findLast = createFind(findLastIndex);
          function flatMap(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), 1);
          }
          function flatMapDeep(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), INFINITY);
          }
          function flatMapDepth(collection, iteratee2, depth) {
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee2), depth);
          }
          function forEach(collection, iteratee2) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function forEachRight(collection, iteratee2) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee2, 3));
          }
          var groupBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              result2[key].push(value);
            } else {
              baseAssignValue(result2, key, [value]);
            }
          });
          function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
              fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value) {
              result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result2;
          });
          var keyBy = createAggregator(function(result2, value, key) {
            baseAssignValue(result2, key, value);
          });
          function map(collection, iteratee2) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
              return [];
            }
            if (!isArray(iteratees)) {
              iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined2 : orders;
            if (!isArray(orders)) {
              orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition = createAggregator(function(result2, value, key) {
            result2[key ? 0 : 1].push(value);
          }, function() {
            return [[], []];
          });
          function reduce(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
          }
          function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
          }
          function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize(collection, n13, guard) {
            if (guard ? isIterateeCall(collection, n13, guard) : n13 === undefined2) {
              n13 = 1;
            } else {
              n13 = toInteger(n13);
            }
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n13);
          }
          function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
          function size(collection) {
            if (collection == null) {
              return 0;
            }
            if (isArrayLike(collection)) {
              return isString(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
              return collection.size;
            }
            return baseKeys(collection).length;
          }
          function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) {
              return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
              iteratees = [];
            } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
              iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
          });
          var now = ctxNow || function() {
            return root.Date.now();
          };
          function after(n13, func) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n13 = toInteger(n13);
            return function() {
              if (--n13 < 1) {
                return func.apply(this, arguments);
              }
            };
          }
          function ary(func, n13, guard) {
            n13 = guard ? undefined2 : n13;
            n13 = func && n13 == null ? func.length : n13;
            return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n13);
          }
          function before(n13, func) {
            var result2;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n13 = toInteger(n13);
            return function() {
              if (--n13 > 0) {
                result2 = func.apply(this, arguments);
              }
              if (n13 <= 1) {
                func = undefined2;
              }
              return result2;
            };
          }
          var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curry.placeholder;
            return result2;
          }
          function curryRight(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curryRight.placeholder;
            return result2;
          }
          function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time2) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined2;
              lastInvokeTime = time2;
              result2 = func.apply(thisArg, args);
              return result2;
            }
            function leadingEdge(time2) {
              lastInvokeTime = time2;
              timerId = setTimeout(timerExpired, wait);
              return leading ? invokeFunc(time2) : result2;
            }
            function remainingWait(time2) {
              var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time2) {
              var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime;
              return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time2 = now();
              if (shouldInvoke(time2)) {
                return trailingEdge(time2);
              }
              timerId = setTimeout(timerExpired, remainingWait(time2));
            }
            function trailingEdge(time2) {
              timerId = undefined2;
              if (trailing && lastArgs) {
                return invokeFunc(time2);
              }
              lastArgs = lastThis = undefined2;
              return result2;
            }
            function cancel() {
              if (timerId !== undefined2) {
                clearTimeout(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined2;
            }
            function flush() {
              return timerId === undefined2 ? result2 : trailingEdge(now());
            }
            function debounced() {
              var time2 = now(), isInvoking = shouldInvoke(time2);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time2;
              if (isInvoking) {
                if (timerId === undefined2) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  clearTimeout(timerId);
                  timerId = setTimeout(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined2) {
                timerId = setTimeout(timerExpired, wait);
              }
              return result2;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
              if (cache.has(key)) {
                return cache.get(key);
              }
              var result2 = func.apply(this, args);
              memoized.cache = cache.set(key, result2) || cache;
              return result2;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }
          memoize.Cache = MapCache;
          function negate(predicate) {
            if (typeof predicate != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return !predicate.call(this);
                case 1:
                  return !predicate.call(this, args[0]);
                case 2:
                  return !predicate.call(this, args[0], args[1]);
                case 3:
                  return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once(func) {
            return before(2, func);
          }
          var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index = -1, length = nativeMin(args.length, funcsLength);
              while (++index < length) {
                args[index] = transforms[index].call(this, args[index]);
              }
              return apply(func, this, args);
            });
          });
          var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
          });
          var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
          });
          var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
          });
          function rest(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start === undefined2 ? start : toInteger(start);
            return baseRest(func, start);
          }
          function spread(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
              var array = args[start], otherArgs = castSlice(args, 0, start);
              if (array) {
                arrayPush(otherArgs, array);
              }
              return apply(func, this, otherArgs);
            });
          }
          function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (isObject(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
              "leading": leading,
              "maxWait": wait,
              "trailing": trailing
            });
          }
          function unary(func) {
            return ary(func, 1);
          }
          function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
          }
          function castArray() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
          }
          function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt = createRelationalOperation(baseGt);
          var gte = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments = baseIsArguments(/* @__PURE__ */ function() {
            return arguments;
          }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
          };
          var isArray = Array2.isArray;
          var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }
          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
          }
          var isBuffer = nativeIsBuffer || stubFalse;
          var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
          function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
          }
          function isEmpty(value) {
            if (value == null) {
              return true;
            }
            if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
              return !value.length;
            }
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
              return !value.size;
            }
            if (isPrototype(value)) {
              return !baseKeys(value).length;
            }
            for (var key in value) {
              if (hasOwnProperty.call(value, key)) {
                return false;
              }
            }
            return true;
          }
          function isEqual(value, other) {
            return baseIsEqual(value, other);
          }
          function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            var result2 = customizer ? customizer(value, other) : undefined2;
            return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
          }
          function isError(value) {
            if (!isObjectLike(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
          }
          function isFinite2(value) {
            return typeof value == "number" && nativeIsFinite(value);
          }
          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
          }
          function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
          }
          function isObjectLike(value) {
            return value != null && typeof value == "object";
          }
          var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
          function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN2(value) {
            return isNumber(value) && value != +value;
          }
          function isNative(value) {
            if (isMaskable(value)) {
              throw new Error2(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
          }
          function isNull(value) {
            return value === null;
          }
          function isNil(value) {
            return value == null;
          }
          function isNumber(value) {
            return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
          }
          function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }
          var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
          }
          var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
          function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
          }
          function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
          function isUndefined(value) {
            return value === undefined2;
          }
          function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
          }
          function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
          }
          var lt = createRelationalOperation(baseLt);
          var lte = createRelationalOperation(function(value, other) {
            return value <= other;
          });
          function toArray(value) {
            if (!value) {
              return [];
            }
            if (isArrayLike(value)) {
              return isString(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
              return iteratorToArray(value[symIterator]());
            }
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
          }
          function toFinite(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger(value) {
            var result2 = toFinite(value), remainder = result2 % 1;
            return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
          }
          function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }
          function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
          }
          function toString2(value) {
            return value == null ? "" : baseToString(value);
          }
          var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
              copyObject(source, keys(source), object);
              return;
            }
            for (var key in source) {
              if (hasOwnProperty.call(source, key)) {
                assignValue(object, key, source[key]);
              }
            }
          });
          var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
          });
          var at2 = flatRest(baseAt);
          function create(prototype, properties) {
            var result2 = baseCreate(prototype);
            return properties == null ? result2 : baseAssign(result2, properties);
          }
          var defaults = baseRest(function(object, sources) {
            object = Object2(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              length = 1;
            }
            while (++index < length) {
              var source = sources[index];
              var props = keysIn(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                  object[key] = source[key];
                }
              }
            }
            return object;
          });
          var defaultsDeep = baseRest(function(args) {
            args.push(undefined2, customDefaultsMerge);
            return apply(mergeWith, undefined2, args);
          });
          function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn(object, iteratee2) {
            return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forInRight(object, iteratee2) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forOwn(object, iteratee2) {
            return object && baseForOwn(object, getIteratee(iteratee2, 3));
          }
          function forOwnRight(object, iteratee2) {
            return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
          }
          function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
          }
          function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
          }
          function get(object, path, defaultValue) {
            var result2 = object == null ? undefined2 : baseGet(object, path);
            return result2 === undefined2 ? defaultValue : result2;
          }
          function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
          }
          function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
          }
          var invert = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            result2[value] = key;
          }, constant(identity));
          var invertBy = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            if (hasOwnProperty.call(result2, value)) {
              result2[value].push(key);
            } else {
              result2[value] = [key];
            }
          }, getIteratee);
          var invoke = baseRest(baseInvoke);
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }
          function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }
          function mapKeys(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, iteratee2(value, key, object2), value);
            });
            return result2;
          }
          function mapValues(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, key, iteratee2(value, key, object2));
            });
            return result2;
          }
          var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit = flatRest(function(object, paths) {
            var result2 = {};
            if (object == null) {
              return result2;
            }
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
              path = castPath(path, object);
              isDeep || (isDeep = path.length > 1);
              return path;
            });
            copyObject(object, getAllKeysIn(object), result2);
            if (isDeep) {
              result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
              baseUnset(result2, paths[length]);
            }
            return result2;
          });
          function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
          }
          var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
          });
          function pickBy(object, predicate) {
            if (object == null) {
              return {};
            }
            var props = arrayMap(getAllKeysIn(object), function(prop) {
              return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
              return predicate(value, path[0]);
            });
          }
          function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            if (!length) {
              length = 1;
              object = undefined2;
            }
            while (++index < length) {
              var value = object == null ? undefined2 : object[toKey(path[index])];
              if (value === undefined2) {
                index = length;
                value = defaultValue;
              }
              object = isFunction(value) ? value.call(object) : value;
            }
            return object;
          }
          function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
          }
          function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseSet(object, path, value, customizer);
          }
          var toPairs = createToPairs(keys);
          var toPairsIn = createToPairs(keysIn);
          function transform(object, iteratee2, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee2 = getIteratee(iteratee2, 4);
            if (accumulator == null) {
              var Ctor = object && object.constructor;
              if (isArrLike) {
                accumulator = isArr ? new Ctor() : [];
              } else if (isObject(object)) {
                accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
              } else {
                accumulator = {};
              }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
              return iteratee2(accumulator, value, index, object2);
            });
            return accumulator;
          }
          function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
          }
          function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
          }
          function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
          }
          function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
          }
          function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
          }
          function clamp(number, lower, upper) {
            if (upper === undefined2) {
              upper = lower;
              lower = undefined2;
            }
            if (upper !== undefined2) {
              upper = toNumber(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined2) {
              lower = toNumber(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
          }
          function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start, end);
          }
          function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
              upper = floating = undefined2;
            }
            if (floating === undefined2) {
              if (typeof upper == "boolean") {
                floating = upper;
                upper = undefined2;
              } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined2;
              }
            }
            if (lower === undefined2 && upper === undefined2) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite(lower);
              if (upper === undefined2) {
                upper = lower;
                lower = 0;
              } else {
                upper = toFinite(upper);
              }
            }
            if (lower > upper) {
              var temp = lower;
              lower = upper;
              upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
              var rand2 = nativeRandom();
              return nativeMin(lower + rand2 * (upper - lower + freeParseFloat("1e-" + ((rand2 + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase = createCompounder(function(result2, word, index) {
            word = word.toLowerCase();
            return result2 + (index ? capitalize(word) : word);
          });
          function capitalize(string) {
            return upperFirst(toString2(string).toLowerCase());
          }
          function deburr(string) {
            string = toString2(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith(string, target, position) {
            string = toString2(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
          }
          function escape(string) {
            string = toString2(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function escapeRegExp(string) {
            string = toString2(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
          }
          var kebabCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "-" : "") + word.toLowerCase();
          });
          var lowerCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toLowerCase();
          });
          var lowerFirst = createCaseFirst("toLowerCase");
          function pad(string, length, chars) {
            string = toString2(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
              return string;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
          }
          function padEnd(string, length, chars) {
            string = toString2(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
          }
          function padStart(string, length, chars) {
            string = toString2(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
          }
          function parseInt2(string, radix, guard) {
            if (guard || radix == null) {
              radix = 0;
            } else if (radix) {
              radix = +radix;
            }
            return nativeParseInt(toString2(string).replace(reTrimStart, ""), radix || 0);
          }
          function repeat(string, n13, guard) {
            if (guard ? isIterateeCall(string, n13, guard) : n13 === undefined2) {
              n13 = 1;
            } else {
              n13 = toInteger(n13);
            }
            return baseRepeat(toString2(string), n13);
          }
          function replace() {
            var args = arguments, string = toString2(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
          }
          var snakeCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "_" : "") + word.toLowerCase();
          });
          function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
              separator = limit = undefined2;
            }
            limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
              return [];
            }
            string = toString2(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string)) {
                return castSlice(stringToArray(string), 0, limit);
              }
            }
            return string.split(separator, limit);
          }
          var startCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + upperFirst(word);
          });
          function startsWith(string, target, position) {
            string = toString2(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
          }
          function template(string, options, guard) {
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
              options = undefined2;
            }
            string = toString2(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp2(
              (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
              "g"
            );
            var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
              if (escapeValue) {
                isEscaping = true;
                source += "' +\n__e(" + escapeValue + ") +\n'";
              }
              if (evaluateValue) {
                isEvaluating = true;
                source += "';\n" + evaluateValue + ";\n__p += '";
              }
              if (interpolateValue) {
                source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
              }
              index = offset + match.length;
              return match;
            });
            source += "';\n";
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) {
              source = "with (obj) {\n" + source + "\n}\n";
            } else if (reForbiddenIdentifierChars.test(variable)) {
              throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result2 = attempt(function() {
              return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
            });
            result2.source = source;
            if (isError(result2)) {
              throw result2;
            }
            return result2;
          }
          function toLower(value) {
            return toString2(value).toLowerCase();
          }
          function toUpper(value) {
            return toString2(value).toUpperCase();
          }
          function trim(string, chars, guard) {
            string = toString2(string);
            if (string && (guard || chars === undefined2)) {
              return baseTrim(string);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
          }
          function trimEnd(string, chars, guard) {
            string = toString2(string);
            if (string && (guard || chars === undefined2)) {
              return string.slice(0, trimmedEndIndex(string) + 1);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart(string, chars, guard) {
            string = toString2(string);
            if (string && (guard || chars === undefined2)) {
              return string.replace(reTrimStart, "");
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
          }
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string = toString2(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
              var strSymbols = stringToArray(string);
              strLength = strSymbols.length;
            }
            if (length >= strLength) {
              return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
              return omission;
            }
            var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined2) {
              return result2 + omission;
            }
            if (strSymbols) {
              end += result2.length - end;
            }
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match, substring = result2;
                if (!separator.global) {
                  separator = RegExp2(separator.source, toString2(reFlags.exec(separator)) + "g");
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index = result2.lastIndexOf(separator);
              if (index > -1) {
                result2 = result2.slice(0, index);
              }
            }
            return result2 + omission;
          }
          function unescape(string) {
            string = toString2(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
          }
          var upperCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toUpperCase();
          });
          var upperFirst = createCaseFirst("toUpperCase");
          function words(string, pattern, guard) {
            string = toString2(string);
            pattern = guard ? undefined2 : pattern;
            if (pattern === undefined2) {
              return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
          }
          var attempt = baseRest(function(func, args) {
            try {
              return apply(func, undefined2, args);
            } catch (e) {
              return isError(e) ? e : new Error2(e);
            }
          });
          var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
          });
          function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
              if (typeof pair[1] != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              return [toIteratee(pair[0]), pair[1]];
            });
            return baseRest(function(args) {
              var index = -1;
              while (++index < length) {
                var pair = pairs[index];
                if (apply(pair[0], this, args)) {
                  return apply(pair[1], this, args);
                }
              }
            });
          }
          function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant(value) {
            return function() {
              return value;
            };
          }
          function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
          }
          var flow = createFlow();
          var flowRight = createFlow(true);
          function identity(value) {
            return value;
          }
          function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method = baseRest(function(path, args) {
            return function(object) {
              return baseInvoke(object, path, args);
            };
          });
          var methodOf = baseRest(function(object, args) {
            return function(path) {
              return baseInvoke(object, path, args);
            };
          });
          function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys(source));
            }
            var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function() {
                  var chainAll = this.__chain__;
                  if (chain2 || chainAll) {
                    var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                    actions.push({ "func": func, "args": arguments, "thisArg": object });
                    result2.__chain__ = chainAll;
                    return result2;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict() {
            if (root._ === this) {
              root._ = oldDash;
            }
            return this;
          }
          function noop() {
          }
          function nthArg(n13) {
            n13 = toInteger(n13);
            return baseRest(function(args) {
              return baseNth(args, n13);
            });
          }
          var over = createOver(arrayMap);
          var overEvery = createOver(arrayEvery);
          var overSome = createOver(arraySome);
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }
          function propertyOf(object) {
            return function(path) {
              return object == null ? undefined2 : baseGet(object, path);
            };
          }
          var range = createRange();
          var rangeRight = createRange(true);
          function stubArray() {
            return [];
          }
          function stubFalse() {
            return false;
          }
          function stubObject() {
            return {};
          }
          function stubString() {
            return "";
          }
          function stubTrue() {
            return true;
          }
          function times(n13, iteratee2) {
            n13 = toInteger(n13);
            if (n13 < 1 || n13 > MAX_SAFE_INTEGER) {
              return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n13, MAX_ARRAY_LENGTH);
            iteratee2 = getIteratee(iteratee2);
            n13 -= MAX_ARRAY_LENGTH;
            var result2 = baseTimes(length, iteratee2);
            while (++index < n13) {
              iteratee2(index);
            }
            return result2;
          }
          function toPath(value) {
            if (isArray(value)) {
              return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString2(value)));
          }
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString2(prefix) + id;
          }
          var add2 = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil = createRound("ceil");
          var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor = createRound("floor");
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
          }
          function maxBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
          }
          function mean(array) {
            return baseMean(array, identity);
          }
          function meanBy(array, iteratee2) {
            return baseMean(array, getIteratee(iteratee2, 2));
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
          }
          function minBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
          }
          var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round = createRound("round");
          var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
          }
          function sumBy(array, iteratee2) {
            return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
          }
          lodash.after = after;
          lodash.ary = ary;
          lodash.assign = assign;
          lodash.assignIn = assignIn;
          lodash.assignInWith = assignInWith;
          lodash.assignWith = assignWith;
          lodash.at = at2;
          lodash.before = before;
          lodash.bind = bind;
          lodash.bindAll = bindAll;
          lodash.bindKey = bindKey;
          lodash.castArray = castArray;
          lodash.chain = chain;
          lodash.chunk = chunk;
          lodash.compact = compact;
          lodash.concat = concat;
          lodash.cond = cond;
          lodash.conforms = conforms;
          lodash.constant = constant;
          lodash.countBy = countBy;
          lodash.create = create;
          lodash.curry = curry;
          lodash.curryRight = curryRight;
          lodash.debounce = debounce;
          lodash.defaults = defaults;
          lodash.defaultsDeep = defaultsDeep;
          lodash.defer = defer;
          lodash.delay = delay;
          lodash.difference = difference;
          lodash.differenceBy = differenceBy;
          lodash.differenceWith = differenceWith;
          lodash.drop = drop;
          lodash.dropRight = dropRight;
          lodash.dropRightWhile = dropRightWhile;
          lodash.dropWhile = dropWhile;
          lodash.fill = fill;
          lodash.filter = filter;
          lodash.flatMap = flatMap;
          lodash.flatMapDeep = flatMapDeep;
          lodash.flatMapDepth = flatMapDepth;
          lodash.flatten = flatten;
          lodash.flattenDeep = flattenDeep;
          lodash.flattenDepth = flattenDepth;
          lodash.flip = flip;
          lodash.flow = flow;
          lodash.flowRight = flowRight;
          lodash.fromPairs = fromPairs;
          lodash.functions = functions;
          lodash.functionsIn = functionsIn;
          lodash.groupBy = groupBy;
          lodash.initial = initial;
          lodash.intersection = intersection;
          lodash.intersectionBy = intersectionBy;
          lodash.intersectionWith = intersectionWith;
          lodash.invert = invert;
          lodash.invertBy = invertBy;
          lodash.invokeMap = invokeMap;
          lodash.iteratee = iteratee;
          lodash.keyBy = keyBy;
          lodash.keys = keys;
          lodash.keysIn = keysIn;
          lodash.map = map;
          lodash.mapKeys = mapKeys;
          lodash.mapValues = mapValues;
          lodash.matches = matches;
          lodash.matchesProperty = matchesProperty;
          lodash.memoize = memoize;
          lodash.merge = merge;
          lodash.mergeWith = mergeWith;
          lodash.method = method;
          lodash.methodOf = methodOf;
          lodash.mixin = mixin;
          lodash.negate = negate;
          lodash.nthArg = nthArg;
          lodash.omit = omit;
          lodash.omitBy = omitBy;
          lodash.once = once;
          lodash.orderBy = orderBy;
          lodash.over = over;
          lodash.overArgs = overArgs;
          lodash.overEvery = overEvery;
          lodash.overSome = overSome;
          lodash.partial = partial;
          lodash.partialRight = partialRight;
          lodash.partition = partition;
          lodash.pick = pick;
          lodash.pickBy = pickBy;
          lodash.property = property;
          lodash.propertyOf = propertyOf;
          lodash.pull = pull;
          lodash.pullAll = pullAll;
          lodash.pullAllBy = pullAllBy;
          lodash.pullAllWith = pullAllWith;
          lodash.pullAt = pullAt;
          lodash.range = range;
          lodash.rangeRight = rangeRight;
          lodash.rearg = rearg;
          lodash.reject = reject;
          lodash.remove = remove;
          lodash.rest = rest;
          lodash.reverse = reverse;
          lodash.sampleSize = sampleSize;
          lodash.set = set;
          lodash.setWith = setWith;
          lodash.shuffle = shuffle;
          lodash.slice = slice;
          lodash.sortBy = sortBy;
          lodash.sortedUniq = sortedUniq;
          lodash.sortedUniqBy = sortedUniqBy;
          lodash.split = split;
          lodash.spread = spread;
          lodash.tail = tail;
          lodash.take = take;
          lodash.takeRight = takeRight;
          lodash.takeRightWhile = takeRightWhile;
          lodash.takeWhile = takeWhile;
          lodash.tap = tap;
          lodash.throttle = throttle;
          lodash.thru = thru;
          lodash.toArray = toArray;
          lodash.toPairs = toPairs;
          lodash.toPairsIn = toPairsIn;
          lodash.toPath = toPath;
          lodash.toPlainObject = toPlainObject;
          lodash.transform = transform;
          lodash.unary = unary;
          lodash.union = union;
          lodash.unionBy = unionBy;
          lodash.unionWith = unionWith;
          lodash.uniq = uniq;
          lodash.uniqBy = uniqBy;
          lodash.uniqWith = uniqWith;
          lodash.unset = unset;
          lodash.unzip = unzip;
          lodash.unzipWith = unzipWith;
          lodash.update = update;
          lodash.updateWith = updateWith;
          lodash.values = values;
          lodash.valuesIn = valuesIn;
          lodash.without = without;
          lodash.words = words;
          lodash.wrap = wrap;
          lodash.xor = xor;
          lodash.xorBy = xorBy;
          lodash.xorWith = xorWith;
          lodash.zip = zip;
          lodash.zipObject = zipObject;
          lodash.zipObjectDeep = zipObjectDeep;
          lodash.zipWith = zipWith;
          lodash.entries = toPairs;
          lodash.entriesIn = toPairsIn;
          lodash.extend = assignIn;
          lodash.extendWith = assignInWith;
          mixin(lodash, lodash);
          lodash.add = add2;
          lodash.attempt = attempt;
          lodash.camelCase = camelCase;
          lodash.capitalize = capitalize;
          lodash.ceil = ceil;
          lodash.clamp = clamp;
          lodash.clone = clone;
          lodash.cloneDeep = cloneDeep;
          lodash.cloneDeepWith = cloneDeepWith;
          lodash.cloneWith = cloneWith;
          lodash.conformsTo = conformsTo;
          lodash.deburr = deburr;
          lodash.defaultTo = defaultTo;
          lodash.divide = divide;
          lodash.endsWith = endsWith;
          lodash.eq = eq;
          lodash.escape = escape;
          lodash.escapeRegExp = escapeRegExp;
          lodash.every = every;
          lodash.find = find;
          lodash.findIndex = findIndex;
          lodash.findKey = findKey;
          lodash.findLast = findLast;
          lodash.findLastIndex = findLastIndex;
          lodash.findLastKey = findLastKey;
          lodash.floor = floor;
          lodash.forEach = forEach;
          lodash.forEachRight = forEachRight;
          lodash.forIn = forIn;
          lodash.forInRight = forInRight;
          lodash.forOwn = forOwn;
          lodash.forOwnRight = forOwnRight;
          lodash.get = get;
          lodash.gt = gt;
          lodash.gte = gte;
          lodash.has = has;
          lodash.hasIn = hasIn;
          lodash.head = head;
          lodash.identity = identity;
          lodash.includes = includes;
          lodash.indexOf = indexOf;
          lodash.inRange = inRange;
          lodash.invoke = invoke;
          lodash.isArguments = isArguments;
          lodash.isArray = isArray;
          lodash.isArrayBuffer = isArrayBuffer;
          lodash.isArrayLike = isArrayLike;
          lodash.isArrayLikeObject = isArrayLikeObject;
          lodash.isBoolean = isBoolean;
          lodash.isBuffer = isBuffer;
          lodash.isDate = isDate;
          lodash.isElement = isElement;
          lodash.isEmpty = isEmpty;
          lodash.isEqual = isEqual;
          lodash.isEqualWith = isEqualWith;
          lodash.isError = isError;
          lodash.isFinite = isFinite2;
          lodash.isFunction = isFunction;
          lodash.isInteger = isInteger;
          lodash.isLength = isLength;
          lodash.isMap = isMap;
          lodash.isMatch = isMatch;
          lodash.isMatchWith = isMatchWith;
          lodash.isNaN = isNaN2;
          lodash.isNative = isNative;
          lodash.isNil = isNil;
          lodash.isNull = isNull;
          lodash.isNumber = isNumber;
          lodash.isObject = isObject;
          lodash.isObjectLike = isObjectLike;
          lodash.isPlainObject = isPlainObject;
          lodash.isRegExp = isRegExp;
          lodash.isSafeInteger = isSafeInteger;
          lodash.isSet = isSet;
          lodash.isString = isString;
          lodash.isSymbol = isSymbol;
          lodash.isTypedArray = isTypedArray;
          lodash.isUndefined = isUndefined;
          lodash.isWeakMap = isWeakMap;
          lodash.isWeakSet = isWeakSet;
          lodash.join = join;
          lodash.kebabCase = kebabCase;
          lodash.last = last;
          lodash.lastIndexOf = lastIndexOf;
          lodash.lowerCase = lowerCase;
          lodash.lowerFirst = lowerFirst;
          lodash.lt = lt;
          lodash.lte = lte;
          lodash.max = max;
          lodash.maxBy = maxBy;
          lodash.mean = mean;
          lodash.meanBy = meanBy;
          lodash.min = min;
          lodash.minBy = minBy;
          lodash.stubArray = stubArray;
          lodash.stubFalse = stubFalse;
          lodash.stubObject = stubObject;
          lodash.stubString = stubString;
          lodash.stubTrue = stubTrue;
          lodash.multiply = multiply;
          lodash.nth = nth;
          lodash.noConflict = noConflict;
          lodash.noop = noop;
          lodash.now = now;
          lodash.pad = pad;
          lodash.padEnd = padEnd;
          lodash.padStart = padStart;
          lodash.parseInt = parseInt2;
          lodash.random = random;
          lodash.reduce = reduce;
          lodash.reduceRight = reduceRight;
          lodash.repeat = repeat;
          lodash.replace = replace;
          lodash.result = result;
          lodash.round = round;
          lodash.runInContext = runInContext2;
          lodash.sample = sample;
          lodash.size = size;
          lodash.snakeCase = snakeCase;
          lodash.some = some;
          lodash.sortedIndex = sortedIndex;
          lodash.sortedIndexBy = sortedIndexBy;
          lodash.sortedIndexOf = sortedIndexOf;
          lodash.sortedLastIndex = sortedLastIndex;
          lodash.sortedLastIndexBy = sortedLastIndexBy;
          lodash.sortedLastIndexOf = sortedLastIndexOf;
          lodash.startCase = startCase;
          lodash.startsWith = startsWith;
          lodash.subtract = subtract;
          lodash.sum = sum;
          lodash.sumBy = sumBy;
          lodash.template = template;
          lodash.times = times;
          lodash.toFinite = toFinite;
          lodash.toInteger = toInteger;
          lodash.toLength = toLength;
          lodash.toLower = toLower;
          lodash.toNumber = toNumber;
          lodash.toSafeInteger = toSafeInteger;
          lodash.toString = toString2;
          lodash.toUpper = toUpper;
          lodash.trim = trim;
          lodash.trimEnd = trimEnd;
          lodash.trimStart = trimStart;
          lodash.truncate = truncate;
          lodash.unescape = unescape;
          lodash.uniqueId = uniqueId;
          lodash.upperCase = upperCase;
          lodash.upperFirst = upperFirst;
          lodash.each = forEach;
          lodash.eachRight = forEachRight;
          lodash.first = head;
          mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
              if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          }(), { "chain": false });
          lodash.VERSION = VERSION;
          arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash[methodName].placeholder = lodash;
          });
          arrayEach(["drop", "take"], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n13) {
              n13 = n13 === undefined2 ? 1 : nativeMax(toInteger(n13), 0);
              var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
              if (result2.__filtered__) {
                result2.__takeCount__ = nativeMin(n13, result2.__takeCount__);
              } else {
                result2.__views__.push({
                  "size": nativeMin(n13, MAX_ARRAY_LENGTH),
                  "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
                });
              }
              return result2;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n13) {
              return this.reverse()[methodName](n13).reverse();
            };
          });
          arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee2) {
              var result2 = this.clone();
              result2.__iteratees__.push({
                "iteratee": getIteratee(iteratee2, 3),
                "type": type
              });
              result2.__filtered__ = result2.__filtered__ || isFilter;
              return result2;
            };
          });
          arrayEach(["head", "last"], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach(["initial", "tail"], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
              return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
          });
          LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
          };
          LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
          };
          LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
          };
          LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == "function") {
              return new LazyWrapper(this);
            }
            return this.map(function(value) {
              return baseInvoke(value, path, args);
            });
          });
          LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
          };
          LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result2 = this;
            if (result2.__filtered__ && (start > 0 || end < 0)) {
              return new LazyWrapper(result2);
            }
            if (start < 0) {
              result2 = result2.takeRight(-start);
            } else if (start) {
              result2 = result2.drop(start);
            }
            if (end !== undefined2) {
              end = toInteger(end);
              result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
            }
            return result2;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
              return;
            }
            lodash.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
              var interceptor = function(value2) {
                var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
                return isTaker && chainAll ? result3[0] : result3;
              };
              if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
                isLazy = useLazy = false;
              }
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result2 = func.apply(value, args);
                result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
                return new LodashWrapper(result2, chainAll);
              }
              if (isUnwrapped && onlyLazy) {
                return func.apply(this, args);
              }
              result2 = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
            };
          });
          arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray(value) ? value : [], args);
              }
              return this[chainName](function(value2) {
                return func.apply(isArray(value2) ? value2 : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "";
              if (!hasOwnProperty.call(realNames, key)) {
                realNames[key] = [];
              }
              realNames[key].push({ "name": methodName, "func": lodashFunc });
            }
          });
          realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
            "name": "wrapper",
            "func": undefined2
          }];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash.prototype.at = wrapperAt;
          lodash.prototype.chain = wrapperChain;
          lodash.prototype.commit = wrapperCommit;
          lodash.prototype.next = wrapperNext;
          lodash.prototype.plant = wrapperPlant;
          lodash.prototype.reverse = wrapperReverse;
          lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
          lodash.prototype.first = lodash.prototype.head;
          if (symIterator) {
            lodash.prototype[symIterator] = wrapperToIterator;
          }
          return lodash;
        };
        var _ = runInContext();
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          root._ = _;
          define(function() {
            return _;
          });
        } else if (freeModule) {
          (freeModule.exports = _)._ = _;
          freeExports._ = _;
        } else {
          root._ = _;
        }
      }).call(exports);
    }
  });

  // node_modules/express-validator/lib/context.js
  var require_context = __commonJS({
    "node_modules/express-validator/lib/context.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Context = void 0;
      var _ = require_lodash();
      function getDataMapKey(path, location) {
        return `${location}:${path}`;
      }
      var Context = class {
        constructor(fields, locations, stack, optional, bail, message) {
          this.fields = fields;
          this.locations = locations;
          this.stack = stack;
          this.optional = optional;
          this.bail = bail;
          this.message = message;
          this._errors = [];
          this.dataMap = /* @__PURE__ */ new Map();
        }
        get errors() {
          return this._errors;
        }
        getData(options = { requiredOnly: false }) {
          const { optional } = this;
          const checks = options.requiredOnly && optional ? [
            (value) => value !== void 0,
            (value) => optional === "null" ? value != null : true,
            (value) => optional === "falsy" ? value : true
          ] : [];
          return _([...this.dataMap.values()]).groupBy("originalPath").flatMap((instances, group) => {
            const locations = _.uniqBy(instances, "location");
            if (instances.length > 1 && locations.length > 1 && !group.includes("*")) {
              const withValue = instances.filter((instance) => instance.value !== void 0);
              return withValue.length ? withValue : [instances[0]];
            }
            return instances;
          }).filter((instance) => checks.every((check) => check(instance.value))).valueOf();
        }
        addFieldInstances(instances) {
          instances.forEach((instance) => {
            this.dataMap.set(getDataMapKey(instance.path, instance.location), { ...instance });
          });
        }
        setData(path, value, location) {
          const instance = this.dataMap.get(getDataMapKey(path, location));
          if (!instance) {
            throw new Error("Attempt to write data that did not pre-exist in context");
          }
          instance.value = value;
        }
        addError(opts) {
          const msg = opts.message || this.message || "Invalid value";
          let error;
          switch (opts.type) {
            case "field":
              error = {
                type: "field",
                value: opts.value,
                msg: typeof msg === "function" ? msg(opts.value, opts.meta) : msg,
                path: opts.meta?.path,
                location: opts.meta?.location
              };
              break;
            case "unknown_fields":
              error = {
                type: "unknown_fields",
                msg: typeof msg === "function" ? msg(opts.fields, { req: opts.req }) : msg,
                fields: opts.fields
              };
              break;
            case "alternative":
              error = {
                type: "alternative",
                msg: typeof msg === "function" ? msg(opts.nestedErrors, { req: opts.req }) : msg,
                nestedErrors: opts.nestedErrors
              };
              break;
            case "alternative_grouped":
              error = {
                type: "alternative_grouped",
                msg: typeof msg === "function" ? msg(opts.nestedErrors, { req: opts.req }) : msg,
                nestedErrors: opts.nestedErrors
              };
              break;
            default:
              throw new Error(`Unhandled addError case`);
          }
          this._errors.push(error);
        }
      };
      exports.Context = Context;
    }
  });

  // node_modules/express-validator/lib/field-selection.js
  var require_field_selection = __commonJS({
    "node_modules/express-validator/lib/field-selection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reconstructFieldPath = exports.selectUnknownFields = exports.selectFields = void 0;
      var _ = require_lodash();
      var selectFields = (req, fields, locations) => _(fields).flatMap((field) => _.flatMap(locations, (location) => {
        return expandField(req, field, location);
      })).uniqWith(isSameFieldInstance).value();
      exports.selectFields = selectFields;
      function isSameFieldInstance(a, b) {
        return a.path === b.path && a.location === b.location;
      }
      function expandField(req, field, location) {
        const originalPath = field;
        const pathToExpand = location === "headers" ? field.toLowerCase() : field;
        const paths = expandPath(req[location], pathToExpand, []);
        return paths.map((path) => {
          const value = path === "" ? req[location] : _.get(req[location], path);
          return {
            location,
            path,
            originalPath,
            value
          };
        });
      }
      function expandPath(object, path, currPath) {
        const segments = _.toPath(path);
        if (!segments.length) {
          return [reconstructFieldPath(currPath)];
        }
        const key = segments[0];
        const rest = segments.slice(1);
        if (object != null && !_.isObjectLike(object)) {
          if (key === "**" && !rest.length) {
            return [reconstructFieldPath(currPath)];
          }
          return [];
        }
        object = object || {};
        if (key === "*") {
          return Object.keys(object).flatMap((key2) => expandPath(object[key2], rest, currPath.concat(key2)));
        }
        if (key === "**") {
          return Object.keys(object).flatMap((key2) => {
            const nextPath = currPath.concat(key2);
            const value = object[key2];
            const set = /* @__PURE__ */ new Set([
              // recursively find matching subpaths
              ...expandPath(value, segments, nextPath),
              // skip the first remaining segment, if it matches the current key
              ...rest[0] === key2 ? expandPath(value, rest.slice(1), nextPath) : []
            ]);
            return [...set];
          });
        }
        return expandPath(object[key], rest, currPath.concat(key));
      }
      var selectUnknownFields = (req, knownFields, locations) => {
        const tree = {};
        knownFields.map((field) => {
          const segments = field === "" ? [""] : _.toPath(field);
          pathToTree(segments, tree);
        });
        const instances = [];
        for (const location of locations) {
          if (req[location] != null) {
            instances.push(...findUnknownFields(location, req[location], tree));
          }
        }
        return instances;
      };
      exports.selectUnknownFields = selectUnknownFields;
      function pathToTree(segments, tree) {
        const branch = tree[segments[0]] || (tree[segments[0]] = {});
        if (segments.length > 1) {
          pathToTree(segments.slice(1), branch);
        } else {
          branch[""] = {};
        }
      }
      function findUnknownFields(location, value, tree, treePath = [], unknownFields = []) {
        const globstarBranch = tree["**"];
        if (tree[""] || globstarBranch?.[""]) {
          return unknownFields;
        }
        if (typeof value !== "object") {
          if (!treePath.length || globstarBranch) {
            unknownFields.push({
              path: reconstructFieldPath(treePath),
              value,
              location
            });
          }
          return unknownFields;
        }
        const wildcardBranch = tree["*"];
        for (const key of Object.keys(value)) {
          const keyBranch = tree[key];
          const path = treePath.concat([key]);
          if (!keyBranch && !wildcardBranch && !globstarBranch) {
            unknownFields.push({
              path: reconstructFieldPath(path),
              value: value[key],
              location
            });
            continue;
          }
          const keyUnknowns = keyBranch ? findUnknownFields(location, value[key], keyBranch, path) : [];
          const wildcardUnknowns = wildcardBranch ? findUnknownFields(location, value[key], wildcardBranch, path) : [];
          const globstarUnknowns = globstarBranch ? findUnknownFields(location, value[key], { ["**"]: globstarBranch, ...globstarBranch }, path) : [];
          if ((!keyBranch || keyUnknowns.length) && (!wildcardBranch || wildcardUnknowns.length) && (!globstarBranch || globstarUnknowns.length)) {
            unknownFields.push(...keyUnknowns, ...wildcardUnknowns, ...globstarUnknowns);
          }
        }
        return unknownFields;
      }
      function reconstructFieldPath(segments) {
        return segments.reduce((prev, segment) => {
          let part = "";
          segment = segment === "\\*" ? "*" : segment;
          if (segment.includes(".")) {
            part = `["${segment}"]`;
          } else if (/^\d+$/.test(segment)) {
            part = `[${segment}]`;
          } else if (prev) {
            part = `.${segment}`;
          } else {
            part = segment;
          }
          return prev + part;
        }, "");
      }
      exports.reconstructFieldPath = reconstructFieldPath;
    }
  });

  // node_modules/express-validator/lib/validation-result.js
  var require_validation_result = __commonJS({
    "node_modules/express-validator/lib/validation-result.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Result = exports.validationResult = void 0;
      var _ = require_lodash();
      var base_1 = require_base();
      var utils_1 = require_utils();
      exports.validationResult = Object.assign(withDefaults(), { withDefaults });
      var Result = class _Result {
        constructor(formatter, errors) {
          this.formatter = formatter;
          this.errors = errors;
        }
        /**
         * Gets the validation errors as an array.
         *
         * @param options.onlyFirstError whether only the first error of each
         */
        array(options) {
          return options && options.onlyFirstError ? Object.values(this.mapped()) : this.errors.map(this.formatter);
        }
        /**
         * Gets the validation errors as an object.
         * If a field has more than one error, only the first one is set in the resulting object.
         *
         * @returns an object from field name to error
         */
        mapped() {
          return this.errors.reduce((mapping, error) => {
            const key = error.type === "field" ? error.path : `_${error.type}`;
            if (!mapping[key]) {
              mapping[key] = this.formatter(error);
            }
            return mapping;
          }, {});
        }
        /**
         * Specifies a function to format errors with.
         * @param formatter the function to use for formatting errors
         * @returns A new {@link Result} instance with the given formatter
         */
        formatWith(formatter) {
          return new _Result(formatter, this.errors);
        }
        /**
         * @returns `true` if there are no errors, `false` otherwise
         */
        isEmpty() {
          return this.errors.length === 0;
        }
        /**
         * Throws an error if there are validation errors.
         */
        throw() {
          if (!this.isEmpty()) {
            throw Object.assign(new Error(), utils_1.bindAll(this));
          }
        }
      };
      exports.Result = Result;
      function withDefaults(options = {}) {
        const defaults = {
          formatter: (error) => error
        };
        const actualOptions = _.defaults(options, defaults);
        return (req) => {
          const contexts = req[base_1.contextsKey] || [];
          const errors = _.flatMap(contexts, "errors");
          return new Result(actualOptions.formatter, errors);
        };
      }
    }
  });

  // node_modules/express-validator/lib/chain/context-runner-impl.js
  var require_context_runner_impl = __commonJS({
    "node_modules/express-validator/lib/chain/context-runner-impl.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ContextRunnerImpl = exports.ResultWithContextImpl = void 0;
      var _ = require_lodash();
      var base_1 = require_base();
      var context_1 = require_context();
      var field_selection_1 = require_field_selection();
      var validation_result_1 = require_validation_result();
      var ResultWithContextImpl = class extends validation_result_1.Result {
        constructor(context) {
          super((error) => error, context.errors);
          this.context = context;
        }
      };
      exports.ResultWithContextImpl = ResultWithContextImpl;
      var ContextRunnerImpl = class {
        constructor(builderOrContext, selectFields = field_selection_1.selectFields) {
          this.builderOrContext = builderOrContext;
          this.selectFields = selectFields;
        }
        async run(req, options = {}) {
          const context = this.builderOrContext instanceof context_1.Context ? this.builderOrContext : this.builderOrContext.build();
          const internalReq = req;
          const bail = internalReq[base_1.contextsKey]?.some((context2) => context2.bail && context2.errors.length > 0);
          if (bail) {
            return new ResultWithContextImpl(context);
          }
          const instances = this.selectFields(req, context.fields, context.locations);
          context.addFieldInstances(instances);
          const haltedInstances = /* @__PURE__ */ new Set();
          for (const contextItem of context.stack) {
            const promises = context.getData({ requiredOnly: true }).map(async (instance) => {
              const { location, path } = instance;
              const instanceKey = `${location}:${path}`;
              if (haltedInstances.has(instanceKey)) {
                return;
              }
              try {
                await contextItem.run(context, instance.value, {
                  req,
                  location,
                  path
                });
                const newValue = instance.value;
                const reqValue = path !== "" ? _.get(req[location], path) : req[location];
                if (!options.dryRun && reqValue !== instance.value) {
                  path !== "" ? _.set(req[location], path, newValue) : _.set(req, location, newValue);
                }
              } catch (e) {
                if (e instanceof base_1.ValidationHalt) {
                  haltedInstances.add(instanceKey);
                  return;
                }
                throw e;
              }
            });
            await Promise.all(promises);
          }
          if (!options.dryRun) {
            internalReq[base_1.contextsKey] = (internalReq[base_1.contextsKey] || []).concat(context);
          }
          return new ResultWithContextImpl(context);
        }
      };
      exports.ContextRunnerImpl = ContextRunnerImpl;
    }
  });

  // node_modules/express-validator/lib/chain/validators.js
  var require_validators = __commonJS({
    "node_modules/express-validator/lib/chain/validators.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/express-validator/lib/chain/validators-impl.js
  var require_validators_impl = __commonJS({
    "node_modules/express-validator/lib/chain/validators-impl.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ValidatorsImpl = void 0;
      var validator = require_validator();
      var context_items_1 = require_context_items();
      var ValidatorsImpl = class {
        constructor(builder, chain) {
          this.builder = builder;
          this.chain = chain;
          this.negateNext = false;
        }
        addItem(item) {
          this.builder.addItem(item);
          this.lastValidator = item;
          this.negateNext = false;
          return this.chain;
        }
        // validation manipulation
        not() {
          this.negateNext = true;
          return this.chain;
        }
        withMessage(message) {
          this.lastValidator.message = message;
          return this.chain;
        }
        // custom validators
        custom(validator2) {
          return this.addItem(new context_items_1.CustomValidation(validator2, this.negateNext));
        }
        exists(options = {}) {
          let validator2;
          if (options.checkFalsy || options.values === "falsy") {
            validator2 = (value) => !!value;
          } else if (options.checkNull || options.values === "null") {
            validator2 = (value) => value != null;
          } else {
            validator2 = (value) => value !== void 0;
          }
          return this.custom(validator2);
        }
        isArray(options = {}) {
          return this.custom((value) => Array.isArray(value) && (typeof options.min === "undefined" || value.length >= options.min) && (typeof options.max === "undefined" || value.length <= options.max));
        }
        isObject(options = { strict: true }) {
          return this.custom((value) => typeof value === "object" && (options.strict == null || options.strict ? value !== null && !Array.isArray(value) : true));
        }
        isString() {
          return this.custom((value) => typeof value === "string");
        }
        isULID() {
          return this.matches(/^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i);
        }
        notEmpty(options) {
          this.not();
          return this.isEmpty(options);
        }
        // Standard validators
        addStandardValidation(validator2, ...options) {
          return this.addItem(new context_items_1.StandardValidation(validator2, this.negateNext, options));
        }
        contains(elem, options) {
          return this.addStandardValidation(validator.contains, elem, options);
        }
        equals(comparison) {
          return this.addStandardValidation(validator.equals, comparison);
        }
        isAbaRouting() {
          return this.addStandardValidation(validator.isAbaRouting);
        }
        isAfter(dateOrOptions) {
          return this.addStandardValidation(validator.isAfter, dateOrOptions);
        }
        isAlpha(locale, options) {
          const ignore = Array.isArray(options?.ignore) ? options?.ignore.join("") : options?.ignore;
          return this.addStandardValidation(validator.isAlpha, locale, { ...options, ignore });
        }
        isAlphanumeric(locale, options) {
          return this.addStandardValidation(validator.isAlphanumeric, locale, options);
        }
        isAscii() {
          return this.addStandardValidation(validator.isAscii);
        }
        isBase32(options) {
          return this.addStandardValidation(validator.isBase32, options);
        }
        isBase58() {
          return this.addStandardValidation(validator.isBase58);
        }
        isBase64(options) {
          return this.addStandardValidation(validator.isBase64, options);
        }
        isBefore(date) {
          return this.addStandardValidation(validator.isBefore, date);
        }
        isBIC() {
          return this.addStandardValidation(validator.isBIC);
        }
        /**
         * There are basically three levels of strictness for this validator.
         * Passing `{ strict: true }` as option only passes the validation if the value is a JS bool. (It also overrides the loose property of the options).
         * Passing `{ loose: true|false }` along with no `strict` prop of with `strict` falsy follows the behaviour specified in validator.js docs.
         */
        isBoolean(options) {
          if (options?.strict) {
            return this.custom((value) => {
              return value === true || value === false;
            });
          }
          return this.addStandardValidation(validator.isBoolean, options);
        }
        isBtcAddress() {
          return this.addStandardValidation(validator.isBtcAddress);
        }
        isByteLength(options) {
          return this.addStandardValidation(validator.isByteLength, options);
        }
        isCreditCard() {
          return this.addStandardValidation(validator.isCreditCard);
        }
        isCurrency(options) {
          return this.addStandardValidation(validator.isCurrency, options);
        }
        isDataURI() {
          return this.addStandardValidation(validator.isDataURI);
        }
        isDate(options) {
          return this.addStandardValidation(validator.isDate, options);
        }
        isDecimal(options) {
          return this.addStandardValidation(validator.isDecimal, options);
        }
        isDivisibleBy(number) {
          return this.addStandardValidation(validator.isDivisibleBy, number);
        }
        isEAN() {
          return this.addStandardValidation(validator.isEAN);
        }
        isEmail(options) {
          return this.addStandardValidation(validator.isEmail, options);
        }
        isEmpty(options) {
          return this.addStandardValidation(validator.isEmpty, options);
        }
        isEthereumAddress() {
          return this.addStandardValidation(validator.isEthereumAddress);
        }
        isFQDN(options) {
          return this.addStandardValidation(validator.isFQDN, options);
        }
        isFloat(options) {
          return this.addStandardValidation(validator.isFloat, options);
        }
        isFreightContainerID() {
          return this.addStandardValidation(validator.isFreightContainerID);
        }
        isFullWidth() {
          return this.addStandardValidation(validator.isFullWidth);
        }
        isHalfWidth() {
          return this.addStandardValidation(validator.isHalfWidth);
        }
        isHash(algorithm) {
          return this.addStandardValidation(validator.isHash, algorithm);
        }
        isHexColor() {
          return this.addStandardValidation(validator.isHexColor);
        }
        isHexadecimal() {
          return this.addStandardValidation(validator.isHexadecimal);
        }
        isHSL() {
          return this.addStandardValidation(validator.isHSL);
        }
        isIBAN(options) {
          return this.addStandardValidation(validator.isIBAN, options);
        }
        isIdentityCard(locale) {
          return this.addStandardValidation(validator.isIdentityCard, locale);
        }
        isIMEI(options) {
          return this.addStandardValidation(validator.isIMEI, options);
        }
        isIP(version) {
          return this.addStandardValidation(validator.isIP, version);
        }
        isIPRange(version) {
          return this.addStandardValidation(validator.isIPRange, version);
        }
        isISBN(versionOrOptions) {
          return this.addStandardValidation(validator.isISBN, versionOrOptions);
        }
        isISSN(options) {
          return this.addStandardValidation(validator.isISSN, options);
        }
        isISIN() {
          return this.addStandardValidation(validator.isISIN);
        }
        isISO6346() {
          return this.addStandardValidation(validator.isISO6346);
        }
        isISO6391() {
          return this.addStandardValidation(validator.isISO6391);
        }
        isISO8601(options) {
          return this.addStandardValidation(validator.isISO8601, options);
        }
        isISO31661Alpha2() {
          return this.addStandardValidation(validator.isISO31661Alpha2);
        }
        isISO31661Alpha3() {
          return this.addStandardValidation(validator.isISO31661Alpha3);
        }
        isISO4217() {
          return this.addStandardValidation(validator.isISO4217);
        }
        isISRC() {
          return this.addStandardValidation(validator.isISRC);
        }
        isIn(values) {
          return this.addStandardValidation(validator.isIn, values);
        }
        isInt(options) {
          return this.addStandardValidation(validator.isInt, options);
        }
        isJSON(options) {
          return this.addStandardValidation(validator.isJSON, options);
        }
        isJWT() {
          return this.addStandardValidation(validator.isJWT);
        }
        isLatLong(options) {
          return this.addStandardValidation(validator.isLatLong, options);
        }
        isLength(options) {
          return this.addStandardValidation(validator.isLength, options);
        }
        isLicensePlate(locale) {
          return this.addStandardValidation(validator.isLicensePlate, locale);
        }
        isLocale() {
          return this.addStandardValidation(validator.isLocale);
        }
        isLowercase() {
          return this.addStandardValidation(validator.isLowercase);
        }
        isLuhnNumber() {
          return this.addStandardValidation(validator.isLuhnNumber);
        }
        isMagnetURI() {
          return this.addStandardValidation(validator.isMagnetURI);
        }
        isMailtoURI(options) {
          return this.addStandardValidation(validator.isMailtoURI, options);
        }
        isMACAddress(options) {
          return this.addStandardValidation(validator.isMACAddress, options);
        }
        isMD5() {
          return this.addStandardValidation(validator.isMD5);
        }
        isMimeType() {
          return this.addStandardValidation(validator.isMimeType);
        }
        isMobilePhone(locale, options) {
          return this.addStandardValidation(validator.isMobilePhone, locale, options);
        }
        isMongoId() {
          return this.addStandardValidation(validator.isMongoId);
        }
        isMultibyte() {
          return this.addStandardValidation(validator.isMultibyte);
        }
        isNumeric(options) {
          return this.addStandardValidation(validator.isNumeric, options);
        }
        isOctal() {
          return this.addStandardValidation(validator.isOctal);
        }
        isPassportNumber(countryCode) {
          return this.addStandardValidation(validator.isPassportNumber, countryCode);
        }
        isPort() {
          return this.addStandardValidation(validator.isPort);
        }
        isPostalCode(locale) {
          return this.addStandardValidation(validator.isPostalCode, locale);
        }
        isRFC3339() {
          return this.addStandardValidation(validator.isRFC3339);
        }
        isRgbColor(includePercentValues) {
          return this.addStandardValidation(validator.isRgbColor, includePercentValues);
        }
        isSemVer() {
          return this.addStandardValidation(validator.isSemVer);
        }
        isSlug() {
          return this.addStandardValidation(validator.isSlug);
        }
        isStrongPassword(options) {
          return this.addStandardValidation(validator.isStrongPassword, options);
        }
        isSurrogatePair() {
          return this.addStandardValidation(validator.isSurrogatePair);
        }
        isTaxID(locale) {
          return this.addStandardValidation(validator.isTaxID, locale);
        }
        isTime(options) {
          return this.addStandardValidation(validator.isTime, options);
        }
        isURL(options) {
          return this.addStandardValidation(validator.isURL, options);
        }
        isUUID(version) {
          return this.addStandardValidation(validator.isUUID, version);
        }
        isUppercase() {
          return this.addStandardValidation(validator.isUppercase);
        }
        isVariableWidth() {
          return this.addStandardValidation(validator.isVariableWidth);
        }
        isVAT(countryCode) {
          return this.addStandardValidation(validator.isVAT, countryCode);
        }
        isWhitelisted(chars) {
          return this.addStandardValidation(validator.isWhitelisted, chars);
        }
        matches(pattern, modifiers) {
          return this.addStandardValidation.apply(this, [
            validator.matches,
            ...typeof pattern === "string" ? [pattern, modifiers] : [pattern.source, [...new Set((modifiers || "") + pattern.flags)].join("")]
          ]);
        }
      };
      exports.ValidatorsImpl = ValidatorsImpl;
    }
  });

  // node_modules/express-validator/lib/chain/validation-chain.js
  var require_validation_chain = __commonJS({
    "node_modules/express-validator/lib/chain/validation-chain.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/express-validator/lib/chain/index.js
  var require_chain = __commonJS({
    "node_modules/express-validator/lib/chain/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_sanitizers(), exports);
      __exportStar(require_sanitizers_impl(), exports);
      __exportStar(require_context_handler(), exports);
      __exportStar(require_context_handler_impl(), exports);
      __exportStar(require_context_runner(), exports);
      __exportStar(require_context_runner_impl(), exports);
      __exportStar(require_validators(), exports);
      __exportStar(require_validators_impl(), exports);
      __exportStar(require_validation_chain(), exports);
    }
  });

  // node_modules/express-validator/lib/middlewares/exact.js
  var require_exact = __commonJS({
    "node_modules/express-validator/lib/middlewares/exact.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.checkExact = void 0;
      var base_1 = require_base();
      var chain_1 = require_chain();
      var context_1 = require_context();
      var field_selection_1 = require_field_selection();
      var utils_1 = require_utils();
      function checkExact(chains, opts) {
        const locations = opts?.locations || ["body", "params", "query"];
        const chainsArr = Array.isArray(chains) ? chains.flat() : chains ? [chains] : [];
        const run = async (req) => {
          const internalReq = req;
          const fieldsByLocation = /* @__PURE__ */ new Map();
          await utils_1.runAllChains(req, chainsArr);
          (internalReq[base_1.contextsKey] || []).forEach((context2) => {
            context2.locations.forEach((location) => {
              if (!locations.includes(location)) {
                return;
              }
              const locationFields = fieldsByLocation.get(location) || [];
              locationFields.push(...context2.fields);
              fieldsByLocation.set(location, locationFields);
            });
          });
          if (!fieldsByLocation.size) {
            locations.forEach((location) => fieldsByLocation.set(location, []));
          }
          let unknownFields = [];
          for (const [location, fields] of fieldsByLocation.entries()) {
            unknownFields = unknownFields.concat(field_selection_1.selectUnknownFields(req, fields, [location]));
          }
          const context = new context_1.Context([], [], [], false, false);
          if (unknownFields.length) {
            context.addError({
              type: "unknown_fields",
              req,
              message: opts?.message || "Unknown field(s)",
              fields: unknownFields
            });
          }
          internalReq[base_1.contextsKey] = internalReq[base_1.contextsKey] || [];
          internalReq[base_1.contextsKey].push(context);
          return new chain_1.ResultWithContextImpl(context);
        };
        const middleware = (req, _res, next) => run(req).then(() => next(), next);
        return Object.assign(middleware, { run });
      }
      exports.checkExact = checkExact;
    }
  });

  // node_modules/express-validator/lib/context-builder.js
  var require_context_builder = __commonJS({
    "node_modules/express-validator/lib/context-builder.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ContextBuilder = void 0;
      var context_1 = require_context();
      var ContextBuilder = class {
        constructor() {
          this.stack = [];
          this.fields = [];
          this.locations = [];
          this.optional = false;
          this.requestBail = false;
        }
        setFields(fields) {
          this.fields = fields;
          return this;
        }
        setLocations(locations) {
          this.locations = locations;
          return this;
        }
        setMessage(message) {
          this.message = message;
          return this;
        }
        addItem(...items) {
          this.stack.push(...items);
          return this;
        }
        setOptional(options) {
          this.optional = options;
          return this;
        }
        setRequestBail() {
          this.requestBail = true;
          return this;
        }
        build() {
          return new context_1.Context(this.fields, this.locations, this.stack, this.optional, this.requestBail, this.message);
        }
      };
      exports.ContextBuilder = ContextBuilder;
    }
  });

  // node_modules/express-validator/lib/middlewares/one-of.js
  var require_one_of = __commonJS({
    "node_modules/express-validator/lib/middlewares/one-of.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.oneOf = void 0;
      var _ = require_lodash();
      var chain_1 = require_chain();
      var context_builder_1 = require_context_builder();
      var utils_1 = require_utils();
      var dummyItem = { async run() {
      } };
      function oneOf(chains, options = {}) {
        const run = async (req, opts) => {
          const surrogateContext = new context_builder_1.ContextBuilder().addItem(dummyItem).build();
          const promises = chains.map(async (chain) => {
            const group = Array.isArray(chain) ? chain : [chain];
            const results = await utils_1.runAllChains(req, group, { dryRun: true });
            const { contexts, groupErrors } = results.reduce(({ contexts: contexts2, groupErrors: groupErrors2 }, result) => {
              const { context } = result;
              contexts2.push(context);
              const fieldErrors = context.errors.filter((error) => error.type === "field");
              groupErrors2.push(...fieldErrors);
              return { contexts: contexts2, groupErrors: groupErrors2 };
            }, {
              contexts: [],
              groupErrors: []
            });
            if (!groupErrors.length) {
              contexts.forEach((context) => {
                surrogateContext.addFieldInstances(context.getData());
              });
            }
            return groupErrors;
          });
          const allErrors = await Promise.all(promises);
          const success = allErrors.some((groupErrors) => groupErrors.length === 0);
          if (!success) {
            const message = options.message || "Invalid value(s)";
            switch (options.errorType) {
              case "flat":
                surrogateContext.addError({
                  type: "alternative",
                  req,
                  message,
                  nestedErrors: _.flatMap(allErrors)
                });
                break;
              case "least_errored":
                let leastErroredIndex = 0;
                for (let i2 = 1; i2 < allErrors.length; i2++) {
                  if (allErrors[i2].length < allErrors[leastErroredIndex].length) {
                    leastErroredIndex = i2;
                  }
                }
                surrogateContext.addError({
                  type: "alternative",
                  req,
                  message,
                  nestedErrors: allErrors[leastErroredIndex]
                });
                break;
              case "grouped":
              default:
                surrogateContext.addError({
                  type: "alternative_grouped",
                  req,
                  message,
                  nestedErrors: allErrors
                });
                break;
            }
          }
          return await new chain_1.ContextRunnerImpl(surrogateContext).run(req, opts);
        };
        const middleware = (req, _res, next) => run(req).then(() => next(), next);
        return Object.assign(middleware, { run });
      }
      exports.oneOf = oneOf;
    }
  });

  // node_modules/express-validator/lib/middlewares/check.js
  var require_check = __commonJS({
    "node_modules/express-validator/lib/middlewares/check.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.check = void 0;
      var chain_1 = require_chain();
      var context_builder_1 = require_context_builder();
      var utils_1 = require_utils();
      function check(fields = "", locations = [], message) {
        const builder = new context_builder_1.ContextBuilder().setFields(Array.isArray(fields) ? fields : [fields]).setLocations(locations).setMessage(message);
        const runner = new chain_1.ContextRunnerImpl(builder);
        const middleware = async (req, _res, next) => {
          try {
            await runner.run(req);
            next();
          } catch (e) {
            next(e);
          }
        };
        return Object.assign(middleware, utils_1.bindAll(runner), utils_1.bindAll(new chain_1.SanitizersImpl(builder, middleware)), utils_1.bindAll(new chain_1.ValidatorsImpl(builder, middleware)), utils_1.bindAll(new chain_1.ContextHandlerImpl(builder, middleware)), { builder });
      }
      exports.check = check;
    }
  });

  // node_modules/express-validator/lib/middlewares/validation-chain-builders.js
  var require_validation_chain_builders = __commonJS({
    "node_modules/express-validator/lib/middlewares/validation-chain-builders.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.query = exports.param = exports.header = exports.cookie = exports.body = exports.check = exports.buildCheckFunction = void 0;
      var check_1 = require_check();
      function buildCheckFunction(locations) {
        return (fields, message) => check_1.check(fields, locations, message);
      }
      exports.buildCheckFunction = buildCheckFunction;
      exports.check = buildCheckFunction(["body", "cookies", "headers", "params", "query"]);
      exports.body = buildCheckFunction(["body"]);
      exports.cookie = buildCheckFunction(["cookies"]);
      exports.header = buildCheckFunction(["headers"]);
      exports.param = buildCheckFunction(["params"]);
      exports.query = buildCheckFunction(["query"]);
    }
  });

  // node_modules/express-validator/lib/middlewares/schema.js
  var require_schema = __commonJS({
    "node_modules/express-validator/lib/middlewares/schema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.checkSchema = exports.createCheckSchema = void 0;
      var _ = require_lodash();
      var chain_1 = require_chain();
      var utils_1 = require_utils();
      var check_1 = require_check();
      var validLocations = ["body", "cookies", "headers", "params", "query"];
      var protectedNames = ["errorMessage", "in", "optional"];
      function createCheckSchema(createChain, extraValidators = [], extraSanitizers = []) {
        function isStandardValidator(entry) {
          return (
            // #664 - explicitly exclude properties which should be set per validator
            !["not", "withMessage"].includes(entry[0]) && (entry[0] in chain_1.ValidatorsImpl.prototype || extraValidators.includes(entry[0])) && entry[1]
          );
        }
        function isStandardSanitizer(entry) {
          return (entry[0] in chain_1.SanitizersImpl.prototype || extraSanitizers.includes(entry[0])) && entry[1];
        }
        function isCustomValidator(entry) {
          return !isStandardValidator(entry) && !isStandardSanitizer(entry) && typeof entry[1] === "object" && entry[1] && typeof entry[1].custom === "function";
        }
        function isCustomSanitizer(entry) {
          return !isStandardValidator(entry) && !isStandardSanitizer(entry) && typeof entry[1] === "object" && entry[1] && typeof entry[1].customSanitizer === "function";
        }
        return (schema, defaultLocations = validLocations) => {
          const chains = Object.keys(schema).map((field) => {
            const config = schema[field];
            const chain = createChain(field, ensureLocations(config, defaultLocations), config.errorMessage);
            if (config.optional) {
              chain.optional(config.optional === true ? true : config.optional.options);
            }
            for (const entry of Object.entries(config)) {
              if (protectedNames.includes(entry[0]) || !entry[1]) {
                continue;
              }
              if (!isStandardValidator(entry) && !isStandardSanitizer(entry) && !isCustomValidator(entry) && !isCustomSanitizer(entry)) {
                console.warn(`express-validator: schema of "${field}" has unknown validator/sanitizer "${entry[0]}"`);
                continue;
              }
              if ((isStandardValidator(entry) || isCustomValidator(entry)) && entry[1] !== true) {
                const [, validatorConfig] = entry;
                validatorConfig.if && chain.if(validatorConfig.if);
                validatorConfig.negated && chain.not();
              }
              if (isStandardValidator(entry) || isStandardSanitizer(entry)) {
                const options = entry[1] ? entry[1] === true ? [] : _.castArray(entry[1].options) : [];
                chain[entry[0]](...options);
              }
              if (isCustomValidator(entry)) {
                chain.custom(entry[1].custom);
              }
              if (isCustomSanitizer(entry)) {
                chain.customSanitizer(entry[1].customSanitizer);
              }
              if ((isStandardValidator(entry) || isCustomValidator(entry)) && entry[1] !== true) {
                const [, validatorConfig] = entry;
                validatorConfig.bail && chain.bail(validatorConfig.bail === true ? {} : validatorConfig.bail);
                validatorConfig.errorMessage && chain.withMessage(validatorConfig.errorMessage);
              }
            }
            return chain;
          });
          const run = async (req) => utils_1.runAllChains(req, chains);
          return Object.assign(chains, { run });
        };
      }
      exports.createCheckSchema = createCheckSchema;
      exports.checkSchema = createCheckSchema(check_1.check);
      function ensureLocations(config, defaults) {
        const locations = Array.isArray(config.in) ? config.in : [config.in].filter(Boolean);
        const actualLocations = locations.length ? locations : defaults;
        return actualLocations.filter((location) => validLocations.includes(location));
      }
    }
  });

  // node_modules/express-validator/lib/matched-data.js
  var require_matched_data = __commonJS({
    "node_modules/express-validator/lib/matched-data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.matchedData = void 0;
      var _ = require_lodash();
      var base_1 = require_base();
      function matchedData(req, options = {}) {
        const internalReq = req;
        const fieldExtractor = createFieldExtractor(options.includeOptionals !== true);
        const validityFilter = createValidityFilter(options.onlyValidData);
        const locationFilter = createLocationFilter(options.locations);
        return _(internalReq[base_1.contextsKey]).flatMap(fieldExtractor).filter(validityFilter).map((field) => field.instance).filter(locationFilter).reduce((state, instance) => _.set(state, instance.path, instance.value), {});
      }
      exports.matchedData = matchedData;
      function createFieldExtractor(removeOptionals) {
        return (context) => {
          const instances = context.getData({ requiredOnly: removeOptionals });
          return instances.map((instance) => ({ instance, context }));
        };
      }
      function createValidityFilter(onlyValidData = true) {
        return !onlyValidData ? () => true : (field) => {
          const hasError = field.context.errors.some((error) => error.type === "field" && error.location === field.instance.location && error.path === field.instance.path);
          return !hasError;
        };
      }
      function createLocationFilter(locations = []) {
        const allLocations = locations.length === 0;
        return allLocations ? () => true : (field) => locations.includes(field.location);
      }
    }
  });

  // node_modules/express-validator/lib/express-validator.js
  var require_express_validator = __commonJS({
    "node_modules/express-validator/lib/express-validator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ExpressValidator = void 0;
      var matched_data_1 = require_matched_data();
      var check_1 = require_check();
      var exact_1 = require_exact();
      var one_of_1 = require_one_of();
      var schema_1 = require_schema();
      var validation_result_1 = require_validation_result();
      var ExpressValidator = class {
        constructor(validators, sanitizers, options) {
          this.validators = validators;
          this.sanitizers = sanitizers;
          this.options = options;
          this.check = this.buildCheckFunction(["body", "cookies", "headers", "params", "query"]);
          this.body = this.buildCheckFunction(["body"]);
          this.cookie = this.buildCheckFunction(["cookies"]);
          this.header = this.buildCheckFunction(["headers"]);
          this.param = this.buildCheckFunction(["params"]);
          this.query = this.buildCheckFunction(["query"]);
          this.checkExact = exact_1.checkExact;
          this.checkSchema = schema_1.createCheckSchema((...args) => this.createChain(...args), Object.keys(this.validators || {}), Object.keys(this.sanitizers || {}));
          this.validationResult = (req) => {
            const formatter = this.options?.errorFormatter;
            const result = validation_result_1.validationResult(req);
            return formatter ? result.formatWith(formatter) : result;
          };
          this.validatorEntries = Object.entries(validators || {});
          this.sanitizerEntries = Object.entries(sanitizers || {});
          this.buildCheckFunction = this.buildCheckFunction.bind(this);
        }
        createChain(fields = "", locations = [], message) {
          const middleware = check_1.check(fields, locations, message);
          const boundValidators = Object.fromEntries(this.validatorEntries.map(([name, fn]) => [name, () => middleware.custom(fn)]));
          const boundSanitizers = Object.fromEntries(this.sanitizerEntries.map(([name, fn]) => [name, () => middleware.customSanitizer(fn)]));
          return Object.assign(middleware, boundValidators, boundSanitizers);
        }
        buildCheckFunction(locations) {
          return (fields, message) => this.createChain(fields, locations, message);
        }
        /**
         * Creates a middleware that will ensure that at least one of the given validation chains
         * or validation chain groups are valid.
         *
         * If none are, a single error of type `alternative` is added to the request,
         * with the errors of each chain made available under the `nestedErrors` property.
         *
         * @param chains an array of validation chains to check if are valid.
         *               If any of the items of `chains` is an array of validation chains, then all of them
         *               must be valid together for the request to be considered valid.
         */
        oneOf(chains, options) {
          return one_of_1.oneOf(chains, options);
        }
        /**
         * Extracts data validated or sanitized from the request, and builds an object with them.
         *
         * This method is a shortcut for `matchedData`; it does nothing different than it.
         *
         * @see {@link matchedData}
         */
        matchedData(req, options) {
          return matched_data_1.matchedData(req, options);
        }
      };
      exports.ExpressValidator = ExpressValidator;
    }
  });

  // node_modules/express-validator/lib/index.js
  var require_lib = __commonJS({
    "node_modules/express-validator/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.checkSchema = void 0;
      __exportStar(require_exact(), exports);
      __exportStar(require_one_of(), exports);
      __exportStar(require_validation_chain_builders(), exports);
      var schema_1 = require_schema();
      Object.defineProperty(exports, "checkSchema", { enumerable: true, get: function() {
        return schema_1.checkSchema;
      } });
      __exportStar(require_matched_data(), exports);
      __exportStar(require_validation_result(), exports);
      __exportStar(require_express_validator(), exports);
    }
  });

  // node_modules/kaboom/dist/kaboom.mjs
  var yi = Object.defineProperty;
  var i = (n13, e) => yi(n13, "name", { value: e, configurable: true });
  var gr = (() => {
    for (var n13 = new Uint8Array(128), e = 0; e < 64; e++) n13[e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e * 4 - 205] = e;
    return (o) => {
      for (var c = o.length, g = new Uint8Array((c - (o[c - 1] == "=") - (o[c - 2] == "=")) * 3 / 4 | 0), m = 0, P = 0; m < c; ) {
        var I = n13[o.charCodeAt(m++)], j = n13[o.charCodeAt(m++)], y = n13[o.charCodeAt(m++)], X = n13[o.charCodeAt(m++)];
        g[P++] = I << 2 | j >> 4, g[P++] = j << 4 | y >> 2, g[P++] = y << 6 | X;
      }
      return g;
    };
  })();
  function Ge(n13) {
    return n13 * Math.PI / 180;
  }
  i(Ge, "deg2rad");
  function ot(n13) {
    return n13 * 180 / Math.PI;
  }
  i(ot, "rad2deg");
  function Le(n13, e, o) {
    return e > o ? Le(n13, o, e) : Math.min(Math.max(n13, e), o);
  }
  i(Le, "clamp");
  function Ve(n13, e, o) {
    if (typeof n13 == "number" && typeof e == "number") return n13 + (e - n13) * o;
    if (n13 instanceof v && e instanceof v) return n13.lerp(e, o);
    if (n13 instanceof W && e instanceof W) return n13.lerp(e, o);
    throw new Error(`Bad value for lerp(): ${n13}, ${e}. Only number, Vec2 and Color is supported.`);
  }
  i(Ve, "lerp");
  function _e(n13, e, o, c, g) {
    return c + (n13 - e) / (o - e) * (g - c);
  }
  i(_e, "map");
  function br(n13, e, o, c, g) {
    return Le(_e(n13, e, o, c, g), c, g);
  }
  i(br, "mapc");
  var v = class n {
    static {
      i(this, "Vec2");
    }
    x = 0;
    y = 0;
    constructor(e = 0, o = e) {
      this.x = e, this.y = o;
    }
    static fromAngle(e) {
      let o = Ge(e);
      return new n(Math.cos(o), Math.sin(o));
    }
    static LEFT = new n(-1, 0);
    static RIGHT = new n(1, 0);
    static UP = new n(0, -1);
    static DOWN = new n(0, 1);
    clone() {
      return new n(this.x, this.y);
    }
    add(...e) {
      let o = T(...e);
      return new n(this.x + o.x, this.y + o.y);
    }
    sub(...e) {
      let o = T(...e);
      return new n(this.x - o.x, this.y - o.y);
    }
    scale(...e) {
      let o = T(...e);
      return new n(this.x * o.x, this.y * o.y);
    }
    dist(...e) {
      let o = T(...e);
      return this.sub(o).len();
    }
    sdist(...e) {
      let o = T(...e);
      return this.sub(o).slen();
    }
    len() {
      return Math.sqrt(this.dot(this));
    }
    slen() {
      return this.dot(this);
    }
    unit() {
      let e = this.len();
      return e === 0 ? new n(0) : this.scale(1 / e);
    }
    normal() {
      return new n(this.y, -this.x);
    }
    reflect(e) {
      return this.sub(e.scale(2 * this.dot(e)));
    }
    project(e) {
      return e.scale(e.dot(this) / e.len());
    }
    reject(e) {
      return this.sub(this.project(e));
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    angle(...e) {
      let o = T(...e);
      return ot(Math.atan2(this.y - o.y, this.x - o.x));
    }
    angleBetween(...e) {
      let o = T(...e);
      return ot(Math.atan2(this.cross(o), this.dot(o)));
    }
    lerp(e, o) {
      return new n(Ve(this.x, e.x, o), Ve(this.y, e.y, o));
    }
    slerp(e, o) {
      let c = this.dot(e), g = this.cross(e), m = Math.atan2(g, c);
      return this.scale(Math.sin((1 - o) * m)).add(e.scale(Math.sin(o * m))).scale(1 / g);
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(e) {
      return new n(Number(this.x.toFixed(e)), Number(this.y.toFixed(e)));
    }
    transform(e) {
      return e.multVec2(this);
    }
    eq(e) {
      return this.x === e.x && this.y === e.y;
    }
    bbox() {
      return new de(this, 0, 0);
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  };
  function T(...n13) {
    if (n13.length === 1) {
      if (n13[0] instanceof v) return new v(n13[0].x, n13[0].y);
      if (Array.isArray(n13[0]) && n13[0].length === 2) return new v(...n13[0]);
    }
    return new v(...n13);
  }
  i(T, "vec2");
  var W = class n2 {
    static {
      i(this, "Color");
    }
    r = 255;
    g = 255;
    b = 255;
    constructor(e, o, c) {
      this.r = Le(e, 0, 255), this.g = Le(o, 0, 255), this.b = Le(c, 0, 255);
    }
    static fromArray(e) {
      return new n2(e[0], e[1], e[2]);
    }
    static fromHex(e) {
      if (typeof e == "number") return new n2(e >> 16 & 255, e >> 8 & 255, e >> 0 & 255);
      if (typeof e == "string") {
        let o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return new n2(parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16));
      } else throw new Error("Invalid hex color format");
    }
    static fromHSL(e, o, c) {
      if (o == 0) return new n2(255 * c, 255 * c, 255 * c);
      let g = i((X, S, q) => (q < 0 && (q += 1), q > 1 && (q -= 1), q < 1 / 6 ? X + (S - X) * 6 * q : q < 1 / 2 ? S : q < 2 / 3 ? X + (S - X) * (2 / 3 - q) * 6 : X), "hue2rgb"), m = c < 0.5 ? c * (1 + o) : c + o - c * o, P = 2 * c - m, I = g(P, m, e + 1 / 3), j = g(P, m, e), y = g(P, m, e - 1 / 3);
      return new n2(Math.round(I * 255), Math.round(j * 255), Math.round(y * 255));
    }
    static RED = new n2(255, 0, 0);
    static GREEN = new n2(0, 255, 0);
    static BLUE = new n2(0, 0, 255);
    static YELLOW = new n2(255, 255, 0);
    static MAGENTA = new n2(255, 0, 255);
    static CYAN = new n2(0, 255, 255);
    static WHITE = new n2(255, 255, 255);
    static BLACK = new n2(0, 0, 0);
    clone() {
      return new n2(this.r, this.g, this.b);
    }
    lighten(e) {
      return new n2(this.r + e, this.g + e, this.b + e);
    }
    darken(e) {
      return this.lighten(-e);
    }
    invert() {
      return new n2(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(e) {
      return new n2(this.r * e.r / 255, this.g * e.g / 255, this.b * e.b / 255);
    }
    lerp(e, o) {
      return new n2(Ve(this.r, e.r, o), Ve(this.g, e.g, o), Ve(this.b, e.b, o));
    }
    toHSL() {
      let e = this.r / 255, o = this.g / 255, c = this.b / 255, g = Math.max(e, o, c), m = Math.min(e, o, c), P = (g + m) / 2, I = P, j = P;
      if (g == m) P = I = 0;
      else {
        let y = g - m;
        switch (I = j > 0.5 ? y / (2 - g - m) : y / (g + m), g) {
          case e:
            P = (o - c) / y + (o < c ? 6 : 0);
            break;
          case o:
            P = (c - e) / y + 2;
            break;
          case c:
            P = (e - o) / y + 4;
            break;
        }
        P /= 6;
      }
      return [P, I, j];
    }
    eq(e) {
      return this.r === e.r && this.g === e.g && this.b === e.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
  };
  function J(...n13) {
    if (n13.length === 0) return new W(255, 255, 255);
    if (n13.length === 1) {
      if (n13[0] instanceof W) return n13[0].clone();
      if (typeof n13[0] == "string") return W.fromHex(n13[0]);
      if (Array.isArray(n13[0]) && n13[0].length === 3) return W.fromArray(n13[0]);
    }
    return new W(...n13);
  }
  i(J, "rgb");
  var vr = i((n13, e, o) => W.fromHSL(n13, e, o), "hsl2rgb");
  var oe = class n3 {
    static {
      i(this, "Quad");
    }
    x = 0;
    y = 0;
    w = 1;
    h = 1;
    constructor(e, o, c, g) {
      this.x = e, this.y = o, this.w = c, this.h = g;
    }
    scale(e) {
      return new n3(this.x + this.w * e.x, this.y + this.h * e.y, this.w * e.w, this.h * e.h);
    }
    pos() {
      return new v(this.x, this.y);
    }
    clone() {
      return new n3(this.x, this.y, this.w, this.h);
    }
    eq(e) {
      return this.x === e.x && this.y === e.y && this.w === e.w && this.h === e.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  };
  function ce(n13, e, o, c) {
    return new oe(n13, e, o, c);
  }
  i(ce, "quad");
  var Ue = class n4 {
    static {
      i(this, "Mat4");
    }
    m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    constructor(e) {
      e && (this.m = e);
    }
    static translate(e) {
      return new n4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e.x, e.y, 0, 1]);
    }
    static scale(e) {
      return new n4([e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(e) {
      e = Ge(-e);
      let o = Math.cos(e), c = Math.sin(e);
      return new n4([1, 0, 0, 0, 0, o, -c, 0, 0, c, o, 0, 0, 0, 0, 1]);
    }
    static rotateY(e) {
      e = Ge(-e);
      let o = Math.cos(e), c = Math.sin(e);
      return new n4([o, 0, c, 0, 0, 1, 0, 0, -c, 0, o, 0, 0, 0, 0, 1]);
    }
    static rotateZ(e) {
      e = Ge(-e);
      let o = Math.cos(e), c = Math.sin(e);
      return new n4([o, -c, 0, 0, c, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(e) {
      return this.m[12] += this.m[0] * e.x + this.m[4] * e.y, this.m[13] += this.m[1] * e.x + this.m[5] * e.y, this.m[14] += this.m[2] * e.x + this.m[6] * e.y, this.m[15] += this.m[3] * e.x + this.m[7] * e.y, this;
    }
    scale(e) {
      return this.m[0] *= e.x, this.m[4] *= e.y, this.m[1] *= e.x, this.m[5] *= e.y, this.m[2] *= e.x, this.m[6] *= e.y, this.m[3] *= e.x, this.m[7] *= e.y, this;
    }
    rotate(e) {
      e = Ge(-e);
      let o = Math.cos(e), c = Math.sin(e), g = this.m[0], m = this.m[1], P = this.m[4], I = this.m[5];
      return this.m[0] = g * o + m * c, this.m[1] = -g * c + m * o, this.m[4] = P * o + I * c, this.m[5] = -P * c + I * o, this;
    }
    mult(e) {
      let o = [];
      for (let c = 0; c < 4; c++) for (let g = 0; g < 4; g++) o[c * 4 + g] = this.m[0 * 4 + g] * e.m[c * 4 + 0] + this.m[1 * 4 + g] * e.m[c * 4 + 1] + this.m[2 * 4 + g] * e.m[c * 4 + 2] + this.m[3 * 4 + g] * e.m[c * 4 + 3];
      return new n4(o);
    }
    multVec2(e) {
      return new v(e.x * this.m[0] + e.y * this.m[4] + this.m[12], e.x * this.m[1] + e.y * this.m[5] + this.m[13]);
    }
    getTranslation() {
      return new v(this.m[12], this.m[13]);
    }
    getScale() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = this.m[0] * this.m[5] - this.m[1] * this.m[4], o = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new v(o, e / o);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = this.m[0] * this.m[5] - this.m[1] * this.m[4], o = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new v(e / o, o);
      } else return new v(0, 0);
    }
    getRotation() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return ot(this.m[1] > 0 ? Math.acos(this.m[0] / e) : -Math.acos(this.m[0] / e));
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return ot(Math.PI / 2 - (this.m[5] > 0 ? Math.acos(-this.m[4] / e) : -Math.acos(this.m[4] / e)));
      } else return 0;
    }
    getSkew() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new v(Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e), 0);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new v(0, Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e));
      } else return new v(0, 0);
    }
    invert() {
      let e = [], o = this.m[10] * this.m[15] - this.m[14] * this.m[11], c = this.m[9] * this.m[15] - this.m[13] * this.m[11], g = this.m[9] * this.m[14] - this.m[13] * this.m[10], m = this.m[8] * this.m[15] - this.m[12] * this.m[11], P = this.m[8] * this.m[14] - this.m[12] * this.m[10], I = this.m[8] * this.m[13] - this.m[12] * this.m[9], j = this.m[6] * this.m[15] - this.m[14] * this.m[7], y = this.m[5] * this.m[15] - this.m[13] * this.m[7], X = this.m[5] * this.m[14] - this.m[13] * this.m[6], S = this.m[4] * this.m[15] - this.m[12] * this.m[7], q = this.m[4] * this.m[14] - this.m[12] * this.m[6], E = this.m[5] * this.m[15] - this.m[13] * this.m[7], K = this.m[4] * this.m[13] - this.m[12] * this.m[5], Q = this.m[6] * this.m[11] - this.m[10] * this.m[7], te = this.m[5] * this.m[11] - this.m[9] * this.m[7], k = this.m[5] * this.m[10] - this.m[9] * this.m[6], pe = this.m[4] * this.m[11] - this.m[8] * this.m[7], C = this.m[4] * this.m[10] - this.m[8] * this.m[6], Ae = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      e[0] = this.m[5] * o - this.m[6] * c + this.m[7] * g, e[4] = -(this.m[4] * o - this.m[6] * m + this.m[7] * P), e[8] = this.m[4] * c - this.m[5] * m + this.m[7] * I, e[12] = -(this.m[4] * g - this.m[5] * P + this.m[6] * I), e[1] = -(this.m[1] * o - this.m[2] * c + this.m[3] * g), e[5] = this.m[0] * o - this.m[2] * m + this.m[3] * P, e[9] = -(this.m[0] * c - this.m[1] * m + this.m[3] * I), e[13] = this.m[0] * g - this.m[1] * P + this.m[2] * I, e[2] = this.m[1] * j - this.m[2] * y + this.m[3] * X, e[6] = -(this.m[0] * j - this.m[2] * S + this.m[3] * q), e[10] = this.m[0] * E - this.m[1] * S + this.m[3] * K, e[14] = -(this.m[0] * X - this.m[1] * q + this.m[2] * K), e[3] = -(this.m[1] * Q - this.m[2] * te + this.m[3] * k), e[7] = this.m[0] * Q - this.m[2] * pe + this.m[3] * C, e[11] = -(this.m[0] * te - this.m[1] * pe + this.m[3] * Ae), e[15] = this.m[0] * k - this.m[1] * C + this.m[2] * Ae;
      let $ = this.m[0] * e[0] + this.m[1] * e[4] + this.m[2] * e[8] + this.m[3] * e[12];
      for (let Te = 0; Te < 4; Te++) for (let ye = 0; ye < 4; ye++) e[Te * 4 + ye] *= 1 / $;
      return new n4(e);
    }
    clone() {
      return new n4([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  };
  function In(n13, e, o, c = (g) => -Math.cos(g)) {
    return n13 + (c(o) + 1) / 2 * (e - n13);
  }
  i(In, "wave");
  var xi = 1103515245;
  var Ui = 12345;
  var wr = 2147483648;
  var bt = class {
    static {
      i(this, "RNG");
    }
    seed;
    constructor(e) {
      this.seed = e;
    }
    gen() {
      return this.seed = (xi * this.seed + Ui) % wr, this.seed / wr;
    }
    genNumber(e, o) {
      return e + this.gen() * (o - e);
    }
    genVec2(e, o) {
      return new v(this.genNumber(e.x, o.x), this.genNumber(e.y, o.y));
    }
    genColor(e, o) {
      return new W(this.genNumber(e.r, o.r), this.genNumber(e.g, o.g), this.genNumber(e.b, o.b));
    }
    genAny(...e) {
      if (e.length === 0) return this.gen();
      if (e.length === 1) {
        if (typeof e[0] == "number") return this.genNumber(0, e[0]);
        if (e[0] instanceof v) return this.genVec2(T(0, 0), e[0]);
        if (e[0] instanceof W) return this.genColor(J(0, 0, 0), e[0]);
      } else if (e.length === 2) {
        if (typeof e[0] == "number" && typeof e[1] == "number") return this.genNumber(e[0], e[1]);
        if (e[0] instanceof v && e[1] instanceof v) return this.genVec2(e[0], e[1]);
        if (e[0] instanceof W && e[1] instanceof W) return this.genColor(e[0], e[1]);
      }
    }
  };
  var Bn = new bt(Date.now());
  function yr(n13) {
    return n13 != null && (Bn.seed = n13), Bn.seed;
  }
  i(yr, "randSeed");
  function xt(...n13) {
    return Bn.genAny(...n13);
  }
  i(xt, "rand");
  function Ln(...n13) {
    return Math.floor(xt(...n13));
  }
  i(Ln, "randi");
  function xr(n13) {
    return xt() <= n13;
  }
  i(xr, "chance");
  function Ur(n13) {
    return n13[Ln(n13.length)];
  }
  i(Ur, "choose");
  function Er(n13, e) {
    return n13.pos.x + n13.width > e.pos.x && n13.pos.x < e.pos.x + e.width && n13.pos.y + n13.height > e.pos.y && n13.pos.y < e.pos.y + e.height;
  }
  i(Er, "testRectRect");
  function Ei(n13, e) {
    if (n13.p1.x === n13.p2.x && n13.p1.y === n13.p2.y || e.p1.x === e.p2.x && e.p1.y === e.p2.y) return null;
    let o = (e.p2.y - e.p1.y) * (n13.p2.x - n13.p1.x) - (e.p2.x - e.p1.x) * (n13.p2.y - n13.p1.y);
    if (o === 0) return null;
    let c = ((e.p2.x - e.p1.x) * (n13.p1.y - e.p1.y) - (e.p2.y - e.p1.y) * (n13.p1.x - e.p1.x)) / o, g = ((n13.p2.x - n13.p1.x) * (n13.p1.y - e.p1.y) - (n13.p2.y - n13.p1.y) * (n13.p1.x - e.p1.x)) / o;
    return c < 0 || c > 1 || g < 0 || g > 1 ? null : c;
  }
  i(Ei, "testLineLineT");
  function it(n13, e) {
    let o = Ei(n13, e);
    return o ? T(n13.p1.x + o * (n13.p2.x - n13.p1.x), n13.p1.y + o * (n13.p2.y - n13.p1.y)) : null;
  }
  i(it, "testLineLine");
  function Sr(n13, e) {
    if (vt(n13, e.p1) || vt(n13, e.p2)) return true;
    let o = n13.points();
    return !!it(e, new Ie(o[0], o[1])) || !!it(e, new Ie(o[1], o[2])) || !!it(e, new Ie(o[2], o[3])) || !!it(e, new Ie(o[3], o[0]));
  }
  i(Sr, "testRectLine");
  function vt(n13, e) {
    return e.x > n13.pos.x && e.x < n13.pos.x + n13.width && e.y > n13.pos.y && e.y < n13.pos.y + n13.height;
  }
  i(vt, "testRectPoint");
  function Cr(n13, e) {
    let o = e.sub(n13.p1), c = n13.p2.sub(n13.p1);
    if (Math.abs(o.cross(c)) > Number.EPSILON) return false;
    let g = o.dot(c) / c.dot(c);
    return g >= 0 && g <= 1;
  }
  i(Cr, "testLinePoint");
  function Vn(n13, e) {
    let o = n13.p2.sub(n13.p1), c = o.dot(o), g = n13.p1.sub(e.center), m = 2 * o.dot(g), P = g.dot(g) - e.radius * e.radius, I = m * m - 4 * c * P;
    if (c <= Number.EPSILON || I < 0) return false;
    if (I == 0) {
      let j = -m / (2 * c);
      if (j >= 0 && j <= 1) return true;
    } else {
      let j = (-m + Math.sqrt(I)) / (2 * c), y = (-m - Math.sqrt(I)) / (2 * c);
      if (j >= 0 && j <= 1 || y >= 0 && y <= 1) return true;
    }
    return Ar(e, n13.p1);
  }
  i(Vn, "testLineCircle");
  function Ar(n13, e) {
    return n13.center.sdist(e) < n13.radius * n13.radius;
  }
  i(Ar, "testCirclePoint");
  function Tr(n13, e) {
    let o = e.pts[e.pts.length - 1];
    for (let c of e.pts) {
      if (Vn(new Ie(o, c), n13)) return true;
      o = c;
    }
    return Ar(n13, e.pts[0]) ? true : _n(e, n13.center);
  }
  i(Tr, "testCirclePolygon");
  function _n(n13, e) {
    let o = false, c = n13.pts;
    for (let g = 0, m = c.length - 1; g < c.length; m = g++) c[g].y > e.y != c[m].y > e.y && e.x < (c[m].x - c[g].x) * (e.y - c[g].y) / (c[m].y - c[g].y) + c[g].x && (o = !o);
    return o;
  }
  i(_n, "testPolygonPoint");
  var Ie = class n5 {
    static {
      i(this, "Line");
    }
    p1;
    p2;
    constructor(e, o) {
      this.p1 = e.clone(), this.p2 = o.clone();
    }
    transform(e) {
      return new n5(e.multVec2(this.p1), e.multVec2(this.p2));
    }
    bbox() {
      return de.fromPoints(this.p1, this.p2);
    }
    area() {
      return this.p1.dist(this.p2);
    }
    clone() {
      return new n5(this.p1, this.p2);
    }
  };
  var de = class n6 {
    static {
      i(this, "Rect");
    }
    pos;
    width;
    height;
    constructor(e, o, c) {
      this.pos = e.clone(), this.width = o, this.height = c;
    }
    static fromPoints(e, o) {
      return new n6(e.clone(), o.x - e.x, o.y - e.y);
    }
    center() {
      return new v(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(e) {
      return new Ke(this.points().map((o) => e.multVec2(o)));
    }
    bbox() {
      return this.clone();
    }
    area() {
      return this.width * this.height;
    }
    clone() {
      return new n6(this.pos.clone(), this.width, this.height);
    }
    distToPoint(e) {
      return Math.sqrt(this.sdistToPoint(e));
    }
    sdistToPoint(e) {
      let o = this.pos, c = this.pos.add(this.width, this.height), g = Math.max(o.x - e.x, 0, e.x - c.x), m = Math.max(o.y - e.y, 0, e.y - c.y);
      return g * g + m * m;
    }
  };
  var yt = class n7 {
    static {
      i(this, "Circle");
    }
    center;
    radius;
    constructor(e, o) {
      this.center = e.clone(), this.radius = o;
    }
    transform(e) {
      return new Fn(this.center, this.radius, this.radius).transform(e);
    }
    bbox() {
      return de.fromPoints(this.center.sub(T(this.radius)), this.center.add(T(this.radius)));
    }
    area() {
      return this.radius * this.radius * Math.PI;
    }
    clone() {
      return new n7(this.center, this.radius);
    }
  };
  var Fn = class n8 {
    static {
      i(this, "Ellipse");
    }
    center;
    radiusX;
    radiusY;
    constructor(e, o, c) {
      this.center = e.clone(), this.radiusX = o, this.radiusY = c;
    }
    transform(e) {
      return new n8(e.multVec2(this.center), e.m[0] * this.radiusX, e.m[5] * this.radiusY);
    }
    bbox() {
      return de.fromPoints(this.center.sub(T(this.radiusX, this.radiusY)), this.center.add(T(this.radiusX, this.radiusY)));
    }
    area() {
      return this.radiusX * this.radiusY * Math.PI;
    }
    clone() {
      return new n8(this.center, this.radiusX, this.radiusY);
    }
  };
  var Ke = class n9 {
    static {
      i(this, "Polygon");
    }
    pts;
    constructor(e) {
      if (e.length < 3) throw new Error("Polygons should have at least 3 vertices");
      this.pts = e;
    }
    transform(e) {
      return new n9(this.pts.map((o) => e.multVec2(o)));
    }
    bbox() {
      let e = T(Number.MAX_VALUE), o = T(-Number.MAX_VALUE);
      for (let c of this.pts) e.x = Math.min(e.x, c.x), o.x = Math.max(o.x, c.x), e.y = Math.min(e.y, c.y), o.y = Math.max(o.y, c.y);
      return de.fromPoints(e, o);
    }
    area() {
      let e = 0, o = this.pts.length;
      for (let c = 0; c < o; c++) {
        let g = this.pts[c], m = this.pts[(c + 1) % o];
        e += g.x * m.y * 0.5, e -= m.x * g.y * 0.5;
      }
      return Math.abs(e);
    }
    clone() {
      return new n9(this.pts.map((e) => e.clone()));
    }
  };
  function Or(n13, e) {
    let o = Number.MAX_VALUE, c = T(0);
    for (let g of [n13, e]) for (let m = 0; m < g.pts.length; m++) {
      let P = g.pts[m], j = g.pts[(m + 1) % g.pts.length].sub(P).normal().unit(), y = Number.MAX_VALUE, X = -Number.MAX_VALUE;
      for (let K = 0; K < n13.pts.length; K++) {
        let Q = n13.pts[K].dot(j);
        y = Math.min(y, Q), X = Math.max(X, Q);
      }
      let S = Number.MAX_VALUE, q = -Number.MAX_VALUE;
      for (let K = 0; K < e.pts.length; K++) {
        let Q = e.pts[K].dot(j);
        S = Math.min(S, Q), q = Math.max(q, Q);
      }
      let E = Math.min(X, q) - Math.max(y, S);
      if (E < 0) return null;
      if (E < Math.abs(o)) {
        let K = q - y, Q = S - X;
        o = Math.abs(K) < Math.abs(Q) ? K : Q, c = j.scale(o);
      }
    }
    return c;
  }
  i(Or, "sat");
  var Ut = class extends Map {
    static {
      i(this, "Registry");
    }
    lastID;
    constructor(...e) {
      super(...e), this.lastID = 0;
    }
    push(e) {
      let o = this.lastID;
      return this.set(o, e), this.lastID++, o;
    }
    pushd(e) {
      let o = this.push(e);
      return () => this.delete(o);
    }
  };
  var ke = class n10 {
    static {
      i(this, "EventController");
    }
    paused = false;
    cancel;
    constructor(e) {
      this.cancel = e;
    }
    static join(e) {
      let o = new n10(() => e.forEach((c) => c.cancel()));
      return Object.defineProperty(o, "paused", { get: () => e[0].paused, set: (c) => e.forEach((g) => g.paused = c) }), o.paused = false, o;
    }
  };
  var be = class {
    static {
      i(this, "Event");
    }
    handlers = new Ut();
    add(e) {
      let o = this.handlers.pushd((...g) => {
        c.paused || e(...g);
      }), c = new ke(o);
      return c;
    }
    addOnce(e) {
      let o = this.add((...c) => {
        o.cancel(), e(...c);
      });
      return o;
    }
    next() {
      return new Promise((e) => this.addOnce(e));
    }
    trigger(...e) {
      this.handlers.forEach((o) => o(...e));
    }
    numListeners() {
      return this.handlers.size;
    }
    clear() {
      this.handlers.clear();
    }
  };
  var Ne = class {
    static {
      i(this, "EventHandler");
    }
    handlers = {};
    on(e, o) {
      return this.handlers[e] || (this.handlers[e] = new be()), this.handlers[e].add(o);
    }
    onOnce(e, o) {
      let c = this.on(e, (...g) => {
        c.cancel(), o(...g);
      });
      return c;
    }
    next(e) {
      return new Promise((o) => {
        this.onOnce(e, (...c) => o(c[0]));
      });
    }
    trigger(e, ...o) {
      this.handlers[e] && this.handlers[e].trigger(...o);
    }
    remove(e) {
      delete this.handlers[e];
    }
    clear() {
      this.handlers = {};
    }
    numListeners(e) {
      return this.handlers[e]?.numListeners() ?? 0;
    }
  };
  function Wt(n13, e) {
    if (n13 === e) return true;
    let o = typeof n13, c = typeof e;
    if (o !== c) return false;
    if (o === "object" && c === "object" && n13 !== null && e !== null) {
      if (Array.isArray(n13) !== Array.isArray(e)) return false;
      let g = Object.keys(n13), m = Object.keys(e);
      if (g.length !== m.length) return false;
      for (let P of g) {
        let I = n13[P], j = e[P];
        if (!Wt(I, j)) return false;
      }
      return true;
    }
    return false;
  }
  i(Wt, "deepEq");
  function Si(n13) {
    let e = window.atob(n13), o = e.length, c = new Uint8Array(o);
    for (let g = 0; g < o; g++) c[g] = e.charCodeAt(g);
    return c.buffer;
  }
  i(Si, "base64ToArrayBuffer");
  function Pr(n13) {
    return Si(n13.split(",")[1]);
  }
  i(Pr, "dataURLToArrayBuffer");
  function Xt(n13, e) {
    let o = document.createElement("a");
    o.href = e, o.download = n13, o.click();
  }
  i(Xt, "download");
  function kn(n13, e) {
    Xt(n13, "data:text/plain;charset=utf-8," + e);
  }
  i(kn, "downloadText");
  function Dr(n13, e) {
    kn(n13, JSON.stringify(e));
  }
  i(Dr, "downloadJSON");
  function Nn(n13, e) {
    let o = URL.createObjectURL(e);
    Xt(n13, o), URL.revokeObjectURL(o);
  }
  i(Nn, "downloadBlob");
  var jn = i((n13) => n13.match(/^data:\w+\/\w+;base64,.+/), "isDataURL");
  var Mr = i((n13) => n13.split(".").slice(0, -1).join("."), "getFileName");
  function Ee(n13, e) {
    return (...o) => {
      let c = o.length;
      if (c === n13.length) return n13(...o);
      if (c === e.length) return e(...o);
    };
  }
  i(Ee, "overload2");
  var Gr = /* @__PURE__ */ (() => {
    let n13 = 0;
    return () => n13++;
  })();
  var Br = i((n13) => n13 instanceof Error ? n13.message : String(n13), "getErrorMessage");
  var Yt = class {
    static {
      i(this, "BinaryHeap");
    }
    _items;
    _compareFn;
    constructor(e = (o, c) => o < c) {
      this._compareFn = e, this._items = [];
    }
    insert(e) {
      this._items.push(e), this.moveUp(this._items.length - 1);
    }
    remove() {
      if (this._items.length === 0) return null;
      let e = this._items[0], o = this._items.pop();
      return this._items.length !== 0 && (this._items[0] = o, this.moveDown(0)), e;
    }
    clear() {
      this._items.splice(0, this._items.length);
    }
    moveUp(e) {
      for (; e > 0; ) {
        let o = Math.floor((e - 1) / 2);
        if (!this._compareFn(this._items[e], this._items[o]) && this._items[e] >= this._items[o]) break;
        this.swap(e, o), e = o;
      }
    }
    moveDown(e) {
      for (; e < Math.floor(this._items.length / 2); ) {
        let o = 2 * e + 1;
        if (o < this._items.length - 1 && !this._compareFn(this._items[o], this._items[o + 1]) && ++o, this._compareFn(this._items[e], this._items[o])) break;
        this.swap(e, o), e = o;
      }
    }
    swap(e, o) {
      [this._items[e], this._items[o]] = [this._items[o], this._items[e]];
    }
    get length() {
      return this._items.length;
    }
  };
  var Ci = Object.freeze([776, 2359, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520]);
  function Fr(n13) {
    if (typeof n13 != "string") throw new TypeError("string cannot be undefined or null");
    let e = [], o = 0, c = 0;
    for (; o < n13.length; ) {
      if (c += Ai(o + c, n13), Gi(n13[o + c]) && c++, Pi(n13[o + c]) && c++, Di(n13[o + c]) && c++, Bi(n13[o + c])) {
        c++;
        continue;
      }
      e.push(n13.substring(o, o + c)), o += c, c = 0;
    }
    return e;
  }
  i(Fr, "runes");
  function Ai(n13, e) {
    let o = e[n13];
    if (!Ti(o) || n13 === e.length - 1) return 1;
    let c = o + e[n13 + 1], g = e.substring(n13 + 2, n13 + 5);
    return Rr(c) && Rr(g) ? 4 : Oi(c) && Mi(g) ? e.slice(n13).indexOf(String.fromCodePoint(917631)) + 2 : Ri(g) ? 4 : 2;
  }
  i(Ai, "nextUnits");
  function Ti(n13) {
    return n13 && tt(n13[0].charCodeAt(0), 55296, 56319);
  }
  i(Ti, "isFirstOfSurrogatePair");
  function Rr(n13) {
    return tt(Hn(n13), 127462, 127487);
  }
  i(Rr, "isRegionalIndicator");
  function Oi(n13) {
    return tt(Hn(n13), 127988, 127988);
  }
  i(Oi, "isSubdivisionFlag");
  function Ri(n13) {
    return tt(Hn(n13), 127995, 127999);
  }
  i(Ri, "isFitzpatrickModifier");
  function Pi(n13) {
    return typeof n13 == "string" && tt(n13.charCodeAt(0), 65024, 65039);
  }
  i(Pi, "isVariationSelector");
  function Di(n13) {
    return typeof n13 == "string" && tt(n13.charCodeAt(0), 8400, 8447);
  }
  i(Di, "isDiacriticalMark");
  function Mi(n13) {
    let e = n13.codePointAt(0);
    return typeof n13 == "string" && typeof e == "number" && tt(e, 917504, 917631);
  }
  i(Mi, "isSupplementarySpecialpurposePlane");
  function Gi(n13) {
    return typeof n13 == "string" && Ci.includes(n13.charCodeAt(0));
  }
  i(Gi, "isGrapheme");
  function Bi(n13) {
    return typeof n13 == "string" && n13.charCodeAt(0) === 8205;
  }
  i(Bi, "isZeroWidthJoiner");
  function Hn(n13) {
    let e = n13.charCodeAt(0) - 55296, o = n13.charCodeAt(1) - 56320;
    return (e << 10) + o + 65536;
  }
  i(Hn, "codePointFromSurrogatePair");
  function tt(n13, e, o) {
    return n13 >= e && n13 <= o;
  }
  i(tt, "betweenInclusive");
  var qn = { "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "select", "10": "lstick", "16": "start" }, sticks: { left: { x: 0, y: 1 } } }, "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "start", "10": "lstick", "16": "select" }, sticks: { left: { x: 0, y: 1 } } }, "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, default: { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } } };
  var at = class {
    static {
      i(this, "ButtonState");
    }
    pressed = /* @__PURE__ */ new Set([]);
    pressedRepeat = /* @__PURE__ */ new Set([]);
    released = /* @__PURE__ */ new Set([]);
    down = /* @__PURE__ */ new Set([]);
    update() {
      this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(e) {
      this.pressed.add(e), this.pressedRepeat.add(e), this.down.add(e);
    }
    pressRepeat(e) {
      this.pressedRepeat.add(e);
    }
    release(e) {
      this.down.delete(e), this.pressed.delete(e), this.released.add(e);
    }
  };
  var $n = class {
    static {
      i(this, "GamepadState");
    }
    buttonState = new at();
    stickState = /* @__PURE__ */ new Map();
  };
  var zn = class {
    static {
      i(this, "FPSCounter");
    }
    dts = [];
    timer = 0;
    fps = 0;
    tick(e) {
      this.dts.push(e), this.timer += e, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((o, c) => o + c) / this.dts.length)), this.dts = []);
    }
  };
  var Ir = i((n13) => {
    if (!n13.canvas) throw new Error("Please provide a canvas");
    let e = { canvas: n13.canvas, loopID: null, stopped: false, dt: 0, time: 0, realTime: 0, fpsCounter: new zn(), timeScale: 1, skipTime: false, numFrames: 0, mousePos: new v(0), mouseDeltaPos: new v(0), keyState: new at(), mouseState: new at(), mergedGamepadState: new $n(), gamepadStates: /* @__PURE__ */ new Map(), gamepads: [], charInputted: [], isMouseMoved: false, lastWidth: n13.canvas.offsetWidth, lastHeight: n13.canvas.offsetHeight, events: new Ne() };
    function o() {
      return e.dt * e.timeScale;
    }
    i(o, "dt");
    function c() {
      return e.time;
    }
    i(c, "time");
    function g() {
      return e.fpsCounter.fps;
    }
    i(g, "fps");
    function m() {
      return e.numFrames;
    }
    i(m, "numFrames");
    function P() {
      return e.canvas.toDataURL();
    }
    i(P, "screenshot");
    function I(l) {
      e.canvas.style.cursor = l;
    }
    i(I, "setCursor");
    function j() {
      return e.canvas.style.cursor;
    }
    i(j, "getCursor");
    function y(l) {
      if (l) try {
        let x = e.canvas.requestPointerLock();
        x.catch && x.catch((R) => console.error(R));
      } catch (x) {
        console.error(x);
      }
      else document.exitPointerLock();
    }
    i(y, "setCursorLocked");
    function X() {
      return !!document.pointerLockElement;
    }
    i(X, "isCursorLocked");
    function S(l) {
      l.requestFullscreen ? l.requestFullscreen() : l.webkitRequestFullscreen && l.webkitRequestFullscreen();
    }
    i(S, "enterFullscreen");
    function q() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    i(q, "exitFullscreen");
    function E() {
      return document.fullscreenElement || document.webkitFullscreenElement;
    }
    i(E, "getFullscreenElement");
    function K(l = true) {
      l ? S(e.canvas) : q();
    }
    i(K, "setFullscreen");
    function Q() {
      return !!E();
    }
    i(Q, "isFullscreen");
    function te() {
      e.stopped = true;
      for (let l in se) e.canvas.removeEventListener(l, se[l]);
      for (let l in le) document.removeEventListener(l, le[l]);
      for (let l in ae) window.removeEventListener(l, ae[l]);
      ge.disconnect();
    }
    i(te, "quit");
    function k(l) {
      e.loopID !== null && cancelAnimationFrame(e.loopID);
      let x = 0, R = i((L) => {
        if (e.stopped) return;
        if (document.visibilityState !== "visible") {
          e.loopID = requestAnimationFrame(R);
          return;
        }
        let he = L / 1e3, z2 = he - e.realTime, Oe = n13.maxFPS ? 1 / n13.maxFPS : 0;
        e.realTime = he, x += z2, x > Oe && (e.skipTime || (e.dt = x, e.time += o(), e.fpsCounter.tick(e.dt)), x = 0, e.skipTime = false, e.numFrames++, ft(), l(), vn()), e.loopID = requestAnimationFrame(R);
      }, "frame");
      R(0);
    }
    i(k, "run");
    function pe() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    i(pe, "isTouchscreen");
    function C() {
      return e.mousePos.clone();
    }
    i(C, "mousePos");
    function Ae() {
      return e.mouseDeltaPos.clone();
    }
    i(Ae, "mouseDeltaPos");
    function $(l = "left") {
      return e.mouseState.pressed.has(l);
    }
    i($, "isMousePressed");
    function Te(l = "left") {
      return e.mouseState.down.has(l);
    }
    i(Te, "isMouseDown");
    function ye(l = "left") {
      return e.mouseState.released.has(l);
    }
    i(ye, "isMouseReleased");
    function Se() {
      return e.isMouseMoved;
    }
    i(Se, "isMouseMoved");
    function st(l) {
      return l === void 0 ? e.keyState.pressed.size > 0 : e.keyState.pressed.has(l);
    }
    i(st, "isKeyPressed");
    function on(l) {
      return l === void 0 ? e.keyState.pressedRepeat.size > 0 : e.keyState.pressedRepeat.has(l);
    }
    i(on, "isKeyPressedRepeat");
    function Tt(l) {
      return l === void 0 ? e.keyState.down.size > 0 : e.keyState.down.has(l);
    }
    i(Tt, "isKeyDown");
    function Ot(l) {
      return l === void 0 ? e.keyState.released.size > 0 : e.keyState.released.has(l);
    }
    i(Ot, "isKeyReleased");
    function Rt(l) {
      return l === void 0 ? e.mergedGamepadState.buttonState.pressed.size > 0 : e.mergedGamepadState.buttonState.pressed.has(l);
    }
    i(Rt, "isGamepadButtonPressed");
    function Ye(l) {
      return l === void 0 ? e.mergedGamepadState.buttonState.down.size > 0 : e.mergedGamepadState.buttonState.down.has(l);
    }
    i(Ye, "isGamepadButtonDown");
    function an(l) {
      return l === void 0 ? e.mergedGamepadState.buttonState.released.size > 0 : e.mergedGamepadState.buttonState.released.has(l);
    }
    i(an, "isGamepadButtonReleased");
    function un(l) {
      return e.events.on("resize", l);
    }
    i(un, "onResize");
    let cn = Ee((l) => e.events.on("keyDown", l), (l, x) => e.events.on("keyDown", (R) => R === l && x(l))), hn = Ee((l) => e.events.on("keyPress", l), (l, x) => e.events.on("keyPress", (R) => R === l && x(l))), ln = Ee((l) => e.events.on("keyPressRepeat", l), (l, x) => e.events.on("keyPressRepeat", (R) => R === l && x(l))), dn = Ee((l) => e.events.on("keyRelease", l), (l, x) => e.events.on("keyRelease", (R) => R === l && x(l))), Pt = Ee((l) => e.events.on("mouseDown", (x) => l(x)), (l, x) => e.events.on("mouseDown", (R) => R === l && x(R))), Dt = Ee((l) => e.events.on("mousePress", (x) => l(x)), (l, x) => e.events.on("mousePress", (R) => R === l && x(R))), Mt = Ee((l) => e.events.on("mouseRelease", (x) => l(x)), (l, x) => e.events.on("mouseRelease", (R) => R === l && x(R)));
    function Gt(l) {
      return e.events.on("mouseMove", () => l(C(), Ae()));
    }
    i(Gt, "onMouseMove");
    function Bt(l) {
      return e.events.on("charInput", l);
    }
    i(Bt, "onCharInput");
    function fn(l) {
      return e.events.on("touchStart", l);
    }
    i(fn, "onTouchStart");
    function ct(l) {
      return e.events.on("touchMove", l);
    }
    i(ct, "onTouchMove");
    function mn(l) {
      return e.events.on("touchEnd", l);
    }
    i(mn, "onTouchEnd");
    function pn(l) {
      return e.events.on("scroll", l);
    }
    i(pn, "onScroll");
    function Ft(l) {
      return e.events.on("hide", l);
    }
    i(Ft, "onHide");
    function gn(l) {
      return e.events.on("show", l);
    }
    i(gn, "onShow");
    function It(l, x) {
      if (typeof l == "function") return e.events.on("gamepadButtonDown", l);
      if (typeof l == "string" && typeof x == "function") return e.events.on("gamepadButtonDown", (R) => R === l && x(l));
    }
    i(It, "onGamepadButtonDown");
    function Lt(l, x) {
      if (typeof l == "function") return e.events.on("gamepadButtonPress", l);
      if (typeof l == "string" && typeof x == "function") return e.events.on("gamepadButtonPress", (R) => R === l && x(l));
    }
    i(Lt, "onGamepadButtonPress");
    function wn(l, x) {
      if (typeof l == "function") return e.events.on("gamepadButtonRelease", l);
      if (typeof l == "string" && typeof x == "function") return e.events.on("gamepadButtonRelease", (R) => R === l && x(l));
    }
    i(wn, "onGamepadButtonRelease");
    function ht(l, x) {
      return e.events.on("gamepadStick", (R, L) => R === l && x(L));
    }
    i(ht, "onGamepadStick");
    function bn(l) {
      e.events.on("gamepadConnect", l);
    }
    i(bn, "onGamepadConnect");
    function lt(l) {
      e.events.on("gamepadDisconnect", l);
    }
    i(lt, "onGamepadDisconnect");
    function Pe(l) {
      return e.mergedGamepadState.stickState.get(l) || new v(0);
    }
    i(Pe, "getGamepadStick");
    function dt() {
      return [...e.charInputted];
    }
    i(dt, "charInputted");
    function Vt() {
      return [...e.gamepads];
    }
    i(Vt, "getGamepads");
    function ft() {
      e.events.trigger("input"), e.keyState.down.forEach((l) => e.events.trigger("keyDown", l)), e.mouseState.down.forEach((l) => e.events.trigger("mouseDown", l)), He();
    }
    i(ft, "processInput");
    function vn() {
      e.keyState.update(), e.mouseState.update(), e.mergedGamepadState.buttonState.update(), e.mergedGamepadState.stickState.forEach((l, x) => {
        e.mergedGamepadState.stickState.set(x, new v(0));
      }), e.charInputted = [], e.isMouseMoved = false, e.gamepadStates.forEach((l) => {
        l.buttonState.update(), l.stickState.forEach((x, R) => {
          l.stickState.set(R, new v(0));
        });
      });
    }
    i(vn, "resetInput");
    function _t(l) {
      let x = { index: l.index, isPressed: (R) => e.gamepadStates.get(l.index).buttonState.pressed.has(R), isDown: (R) => e.gamepadStates.get(l.index).buttonState.down.has(R), isReleased: (R) => e.gamepadStates.get(l.index).buttonState.released.has(R), getStick: (R) => e.gamepadStates.get(l.index).stickState.get(R) };
      return e.gamepads.push(x), e.gamepadStates.set(l.index, { buttonState: new at(), stickState: /* @__PURE__ */ new Map([["left", new v(0)], ["right", new v(0)]]) }), x;
    }
    i(_t, "registerGamepad");
    function ne(l) {
      e.gamepads = e.gamepads.filter((x) => x.index !== l.index), e.gamepadStates.delete(l.index);
    }
    i(ne, "removeGamepad");
    function He() {
      for (let l of navigator.getGamepads()) l && !e.gamepadStates.has(l.index) && _t(l);
      for (let l of e.gamepads) {
        let x = navigator.getGamepads()[l.index], L = (n13.gamepads ?? {})[x.id] ?? qn[x.id] ?? qn.default, he = e.gamepadStates.get(l.index);
        for (let z2 = 0; z2 < x.buttons.length; z2++) x.buttons[z2].pressed ? (he.buttonState.down.has(L.buttons[z2]) || (e.mergedGamepadState.buttonState.press(L.buttons[z2]), he.buttonState.press(L.buttons[z2]), e.events.trigger("gamepadButtonPress", L.buttons[z2])), e.events.trigger("gamepadButtonDown", L.buttons[z2])) : he.buttonState.down.has(L.buttons[z2]) && (e.mergedGamepadState.buttonState.release(L.buttons[z2]), he.buttonState.release(L.buttons[z2]), e.events.trigger("gamepadButtonRelease", L.buttons[z2]));
        for (let z2 in L.sticks) {
          let Oe = L.sticks[z2], $e = new v(x.axes[Oe.x], x.axes[Oe.y]);
          he.stickState.set(z2, $e), e.mergedGamepadState.stickState.set(z2, $e), e.events.trigger("gamepadStick", z2, $e);
        }
      }
    }
    i(He, "processGamepad");
    let se = {}, le = {}, ae = {}, Be = n13.pixelDensity || window.devicePixelRatio || 1;
    se.mousemove = (l) => {
      let x = new v(l.offsetX, l.offsetY), R = new v(l.movementX, l.movementY);
      if (Q()) {
        let L = e.canvas.width / Be, he = e.canvas.height / Be, z2 = window.innerWidth, Oe = window.innerHeight, $e = z2 / Oe, kt = L / he;
        if ($e > kt) {
          let De = Oe / he, Ce = (z2 - L * De) / 2;
          x.x = _e(l.offsetX - Ce, 0, L * De, 0, L), x.y = _e(l.offsetY, 0, he * De, 0, he);
        } else {
          let De = z2 / L, Ce = (Oe - he * De) / 2;
          x.x = _e(l.offsetX, 0, L * De, 0, L), x.y = _e(l.offsetY - Ce, 0, he * De, 0, he);
        }
      }
      e.events.onOnce("input", () => {
        e.isMouseMoved = true, e.mousePos = x, e.mouseDeltaPos = R, e.events.trigger("mouseMove");
      });
    };
    let We = ["left", "middle", "right", "back", "forward"];
    se.mousedown = (l) => {
      e.events.onOnce("input", () => {
        let x = We[l.button];
        x && (e.mouseState.press(x), e.events.trigger("mousePress", x));
      });
    }, se.mouseup = (l) => {
      e.events.onOnce("input", () => {
        let x = We[l.button];
        x && (e.mouseState.release(x), e.events.trigger("mouseRelease", x));
      });
    };
    let yn = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]), qe = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
    se.keydown = (l) => {
      yn.has(l.key) && l.preventDefault(), e.events.onOnce("input", () => {
        let x = qe[l.key] || l.key.toLowerCase();
        x.length === 1 ? (e.events.trigger("charInput", x), e.charInputted.push(x)) : x === "space" && (e.events.trigger("charInput", " "), e.charInputted.push(" ")), l.repeat ? (e.keyState.pressRepeat(x), e.events.trigger("keyPressRepeat", x)) : (e.keyState.press(x), e.events.trigger("keyPressRepeat", x), e.events.trigger("keyPress", x));
      });
    }, se.keyup = (l) => {
      e.events.onOnce("input", () => {
        let x = qe[l.key] || l.key.toLowerCase();
        e.keyState.release(x), e.events.trigger("keyRelease", x);
      });
    }, se.touchstart = (l) => {
      l.preventDefault(), e.events.onOnce("input", () => {
        let x = [...l.changedTouches], R = e.canvas.getBoundingClientRect();
        n13.touchToMouse !== false && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.mouseState.press("left"), e.events.trigger("mousePress", "left")), x.forEach((L) => {
          e.events.trigger("touchStart", new v(L.clientX - R.x, L.clientY - R.y), L);
        });
      });
    }, se.touchmove = (l) => {
      l.preventDefault(), e.events.onOnce("input", () => {
        let x = [...l.changedTouches], R = e.canvas.getBoundingClientRect();
        n13.touchToMouse !== false && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.events.trigger("mouseMove")), x.forEach((L) => {
          e.events.trigger("touchMove", new v(L.clientX - R.x, L.clientY - R.y), L);
        });
      });
    }, se.touchend = (l) => {
      e.events.onOnce("input", () => {
        let x = [...l.changedTouches], R = e.canvas.getBoundingClientRect();
        n13.touchToMouse !== false && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.mouseState.release("left"), e.events.trigger("mouseRelease", "left")), x.forEach((L) => {
          e.events.trigger("touchEnd", new v(L.clientX - R.x, L.clientY - R.y), L);
        });
      });
    }, se.touchcancel = (l) => {
      e.events.onOnce("input", () => {
        let x = [...l.changedTouches], R = e.canvas.getBoundingClientRect();
        n13.touchToMouse !== false && (e.mousePos = new v(x[0].clientX - R.x, x[0].clientY - R.y), e.mouseState.release("left"), e.events.trigger("mouseRelease", "left")), x.forEach((L) => {
          e.events.trigger("touchEnd", new v(L.clientX - R.x, L.clientY - R.y), L);
        });
      });
    }, se.wheel = (l) => {
      l.preventDefault(), e.events.onOnce("input", () => {
        e.events.trigger("scroll", new v(l.deltaX, l.deltaY));
      });
    }, se.contextmenu = (l) => l.preventDefault(), le.visibilitychange = () => {
      document.visibilityState === "visible" ? (e.skipTime = true, e.events.trigger("show")) : e.events.trigger("hide");
    }, ae.gamepadconnected = (l) => {
      let x = _t(l.gamepad);
      e.events.onOnce("input", () => {
        e.events.trigger("gamepadConnect", x);
      });
    }, ae.gamepaddisconnected = (l) => {
      let x = Vt().filter((R) => R.index === l.gamepad.index)[0];
      ne(l.gamepad), e.events.onOnce("input", () => {
        e.events.trigger("gamepadDisconnect", x);
      });
    };
    for (let l in se) e.canvas.addEventListener(l, se[l]);
    for (let l in le) document.addEventListener(l, le[l]);
    for (let l in ae) window.addEventListener(l, ae[l]);
    let ge = new ResizeObserver((l) => {
      for (let x of l) if (x.target === e.canvas) {
        if (e.lastWidth === e.canvas.offsetWidth && e.lastHeight === e.canvas.offsetHeight) return;
        e.lastWidth = e.canvas.offsetWidth, e.lastHeight = e.canvas.offsetHeight, e.events.onOnce("input", () => {
          e.events.trigger("resize");
        });
      }
    });
    return ge.observe(e.canvas), { dt: o, time: c, run: k, canvas: e.canvas, fps: g, numFrames: m, quit: te, setFullscreen: K, isFullscreen: Q, setCursor: I, screenshot: P, getGamepads: Vt, getCursor: j, setCursorLocked: y, isCursorLocked: X, isTouchscreen: pe, mousePos: C, mouseDeltaPos: Ae, isKeyDown: Tt, isKeyPressed: st, isKeyPressedRepeat: on, isKeyReleased: Ot, isMouseDown: Te, isMousePressed: $, isMouseReleased: ye, isMouseMoved: Se, isGamepadButtonPressed: Rt, isGamepadButtonDown: Ye, isGamepadButtonReleased: an, getGamepadStick: Pe, charInputted: dt, onResize: un, onKeyDown: cn, onKeyPress: hn, onKeyPressRepeat: ln, onKeyRelease: dn, onMouseDown: Pt, onMousePress: Dt, onMouseRelease: Mt, onMouseMove: Gt, onCharInput: Bt, onTouchStart: fn, onTouchMove: ct, onTouchEnd: mn, onScroll: pn, onHide: Ft, onShow: gn, onGamepadButtonDown: It, onGamepadButtonPress: Lt, onGamepadButtonRelease: wn, onGamepadStick: ht, onGamepadConnect: bn, onGamepadDisconnect: lt, events: e.events };
  }, "default");
  var Re = class n11 {
    static {
      i(this, "Texture");
    }
    ctx;
    src = null;
    glTex;
    width;
    height;
    constructor(e, o, c, g = {}) {
      this.ctx = e;
      let m = e.gl;
      this.glTex = e.gl.createTexture(), e.onDestroy(() => this.free()), this.width = o, this.height = c;
      let P = { linear: m.LINEAR, nearest: m.NEAREST }[g.filter ?? e.opts.texFilter] ?? m.NEAREST, I = { repeat: m.REPEAT, clampToEadge: m.CLAMP_TO_EDGE }[g.wrap] ?? m.CLAMP_TO_EDGE;
      this.bind(), o && c && m.texImage2D(m.TEXTURE_2D, 0, m.RGBA, o, c, 0, m.RGBA, m.UNSIGNED_BYTE, null), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, P), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, P), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, I), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, I), this.unbind();
    }
    static fromImage(e, o, c = {}) {
      let g = new n11(e, o.width, o.height, c);
      return g.update(o), g.src = o, g;
    }
    update(e, o = 0, c = 0) {
      let g = this.ctx.gl;
      this.bind(), g.texSubImage2D(g.TEXTURE_2D, 0, o, c, g.RGBA, g.UNSIGNED_BYTE, e), this.unbind();
    }
    bind() {
      this.ctx.pushTexture2D(this.glTex);
    }
    unbind() {
      this.ctx.popTexture2D();
    }
    free() {
      this.ctx.gl.deleteTexture(this.glTex);
    }
  };
  var rt = class {
    static {
      i(this, "FrameBuffer");
    }
    ctx;
    tex;
    glFramebuffer;
    glRenderbuffer;
    constructor(e, o, c, g = {}) {
      this.ctx = e;
      let m = e.gl;
      e.onDestroy(() => this.free()), this.tex = new Re(e, o, c, g), this.glFramebuffer = m.createFramebuffer(), this.glRenderbuffer = m.createRenderbuffer(), this.bind(), m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_STENCIL, o, c), m.framebufferTexture2D(m.FRAMEBUFFER, m.COLOR_ATTACHMENT0, m.TEXTURE_2D, this.tex.glTex, 0), m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.RENDERBUFFER, this.glRenderbuffer), this.unbind();
    }
    get width() {
      return this.tex.width;
    }
    get height() {
      return this.tex.height;
    }
    toImageData() {
      let e = this.ctx.gl, o = new Uint8ClampedArray(this.width * this.height * 4);
      this.bind(), e.readPixels(0, 0, this.width, this.height, e.RGBA, e.UNSIGNED_BYTE, o), this.unbind();
      let c = this.width * 4, g = new Uint8Array(c);
      for (let m = 0; m < (this.height / 2 | 0); m++) {
        let P = m * c, I = (this.height - m - 1) * c;
        g.set(o.subarray(P, P + c)), o.copyWithin(P, I, I + c), o.set(g, I);
      }
      return new ImageData(o, this.width, this.height);
    }
    toDataURL() {
      let e = document.createElement("canvas"), o = e.getContext("2d");
      return e.width = this.width, e.height = this.height, o.putImageData(this.toImageData(), 0, 0), e.toDataURL();
    }
    draw(e) {
      this.bind(), e(), this.unbind();
    }
    bind() {
      this.ctx.pushFramebuffer(this.glFramebuffer), this.ctx.pushRenderbuffer(this.glRenderbuffer), this.ctx.pushViewport({ x: 0, y: 0, w: this.width, h: this.height });
    }
    unbind() {
      this.ctx.popFramebuffer(), this.ctx.popRenderbuffer(), this.ctx.popViewport();
    }
    free() {
      let e = this.ctx.gl;
      e.deleteFramebuffer(this.glFramebuffer), e.deleteRenderbuffer(this.glRenderbuffer), this.tex.free();
    }
  };
  var Jt = class {
    static {
      i(this, "Shader");
    }
    ctx;
    glProgram;
    constructor(e, o, c, g) {
      this.ctx = e, e.onDestroy(() => this.free());
      let m = e.gl, P = m.createShader(m.VERTEX_SHADER), I = m.createShader(m.FRAGMENT_SHADER);
      m.shaderSource(P, o), m.shaderSource(I, c), m.compileShader(P), m.compileShader(I);
      let j = m.createProgram();
      if (this.glProgram = j, m.attachShader(j, P), m.attachShader(j, I), g.forEach((y, X) => m.bindAttribLocation(j, X, y)), m.linkProgram(j), !m.getProgramParameter(j, m.LINK_STATUS)) {
        let y = m.getShaderInfoLog(P);
        if (y) throw new Error("VERTEX SHADER " + y);
        let X = m.getShaderInfoLog(I);
        if (X) throw new Error("FRAGMENT SHADER " + X);
      }
      m.deleteShader(P), m.deleteShader(I);
    }
    bind() {
      this.ctx.pushProgram(this.glProgram);
    }
    unbind() {
      this.ctx.popProgram();
    }
    send(e) {
      let o = this.ctx.gl;
      for (let c in e) {
        let g = e[c], m = o.getUniformLocation(this.glProgram, c);
        typeof g == "number" ? o.uniform1f(m, g) : g instanceof Ue ? o.uniformMatrix4fv(m, false, new Float32Array(g.m)) : g instanceof W ? o.uniform3f(m, g.r, g.g, g.b) : g instanceof v && o.uniform2f(m, g.x, g.y);
      }
    }
    free() {
      this.ctx.gl.deleteProgram(this.glProgram);
    }
  };
  var Qt = class {
    static {
      i(this, "BatchRenderer");
    }
    ctx;
    glVBuf;
    glIBuf;
    vqueue = [];
    iqueue = [];
    stride;
    maxVertices;
    maxIndices;
    vertexFormat;
    numDraws = 0;
    curPrimitive = null;
    curTex = null;
    curShader = null;
    curUniform = {};
    constructor(e, o, c, g) {
      let m = e.gl;
      this.vertexFormat = o, this.ctx = e, this.stride = o.reduce((P, I) => P + I.size, 0), this.maxVertices = c, this.maxIndices = g, this.glVBuf = m.createBuffer(), e.pushArrayBuffer(this.glVBuf), m.bufferData(m.ARRAY_BUFFER, c * 4, m.DYNAMIC_DRAW), e.popArrayBuffer(), this.glIBuf = m.createBuffer(), e.pushElementArrayBuffer(this.glIBuf), m.bufferData(m.ELEMENT_ARRAY_BUFFER, g * 4, m.DYNAMIC_DRAW), e.popElementArrayBuffer();
    }
    push(e, o, c, g, m = null, P = {}) {
      (e !== this.curPrimitive || m !== this.curTex || g !== this.curShader || !Wt(this.curUniform, P) || this.vqueue.length + o.length * this.stride > this.maxVertices || this.iqueue.length + c.length > this.maxIndices) && this.flush();
      let I = this.vqueue.length / this.stride;
      for (let j of o) this.vqueue.push(j);
      for (let j of c) this.iqueue.push(j + I);
      this.curPrimitive = e, this.curShader = g, this.curTex = m, this.curUniform = P;
    }
    flush() {
      if (!this.curPrimitive || !this.curShader || this.vqueue.length === 0 || this.iqueue.length === 0) return;
      let e = this.ctx.gl;
      this.ctx.pushArrayBuffer(this.glVBuf), e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(this.vqueue)), this.ctx.pushElementArrayBuffer(this.glIBuf), e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(this.iqueue)), this.ctx.setVertexFormat(this.vertexFormat), this.curShader.bind(), this.curShader.send(this.curUniform), this.curTex?.bind(), e.drawElements(this.curPrimitive, this.iqueue.length, e.UNSIGNED_SHORT, 0), this.curTex?.unbind(), this.curShader.unbind(), this.ctx.popArrayBuffer(), this.ctx.popElementArrayBuffer(), this.vqueue = [], this.iqueue = [], this.numDraws++;
    }
    free() {
      let e = this.ctx.gl;
      e.deleteBuffer(this.glVBuf), e.deleteBuffer(this.glIBuf);
    }
  };
  function nt(n13) {
    let e = [], o = i((m) => {
      e.push(m), n13(m);
    }, "push"), c = i(() => {
      e.pop(), n13(g() ?? null);
    }, "pop"), g = i(() => e[e.length - 1], "cur");
    return [o, c, g];
  }
  i(nt, "genStack");
  function Kn(n13, e = {}) {
    let o = [];
    function c($) {
      o.push($);
    }
    i(c, "onDestroy");
    function g() {
      o.forEach(($) => $()), n13.getExtension("WEBGL_lose_context").loseContext();
    }
    i(g, "destroy");
    let m = null;
    function P($) {
      if (Wt($, m)) return;
      m = $;
      let Te = $.reduce((ye, Se) => ye + Se.size, 0);
      $.reduce((ye, Se, st) => (n13.vertexAttribPointer(st, Se.size, n13.FLOAT, false, Te * 4, ye), n13.enableVertexAttribArray(st), ye + Se.size * 4), 0);
    }
    i(P, "setVertexFormat");
    let [I, j] = nt(($) => n13.bindTexture(n13.TEXTURE_2D, $)), [y, X] = nt(($) => n13.bindBuffer(n13.ARRAY_BUFFER, $)), [S, q] = nt(($) => n13.bindBuffer(n13.ELEMENT_ARRAY_BUFFER, $)), [E, K] = nt(($) => n13.bindFramebuffer(n13.FRAMEBUFFER, $)), [Q, te] = nt(($) => n13.bindRenderbuffer(n13.RENDERBUFFER, $)), [k, pe] = nt(({ x: $, y: Te, w: ye, h: Se }) => {
      n13.viewport($, Te, ye, Se);
    }), [C, Ae] = nt(($) => n13.useProgram($));
    return k({ x: 0, y: 0, w: n13.drawingBufferWidth, h: n13.drawingBufferHeight }), { gl: n13, opts: e, onDestroy: c, destroy: g, pushTexture2D: I, popTexture2D: j, pushArrayBuffer: y, popArrayBuffer: X, pushElementArrayBuffer: S, popElementArrayBuffer: q, pushFramebuffer: E, popFramebuffer: K, pushRenderbuffer: Q, popRenderbuffer: te, pushViewport: k, popViewport: pe, pushProgram: C, popProgram: Ae, setVertexFormat: P };
  }
  i(Kn, "initGfx");
  var ve = class n12 {
    static {
      i(this, "Asset");
    }
    loaded = false;
    data = null;
    error = null;
    onLoadEvents = new be();
    onErrorEvents = new be();
    onFinishEvents = new be();
    constructor(e) {
      e.then((o) => {
        this.data = o, this.onLoadEvents.trigger(o);
      }).catch((o) => {
        if (this.error = o, this.onErrorEvents.numListeners() > 0) this.onErrorEvents.trigger(o);
        else throw o;
      }).finally(() => {
        this.onFinishEvents.trigger(), this.loaded = true;
      });
    }
    static loaded(e) {
      let o = new n12(Promise.resolve(e));
      return o.data = e, o.loaded = true, o;
    }
    onLoad(e) {
      return this.loaded && this.data ? e(this.data) : this.onLoadEvents.add(e), this;
    }
    onError(e) {
      return this.loaded && this.error ? e(this.error) : this.onErrorEvents.add(e), this;
    }
    onFinish(e) {
      return this.loaded ? e() : this.onFinishEvents.add(e), this;
    }
    then(e) {
      return this.onLoad(e);
    }
    catch(e) {
      return this.onError(e);
    }
    finally(e) {
      return this.onFinish(e);
    }
  };
  var je = class {
    static {
      i(this, "AssetBucket");
    }
    assets = /* @__PURE__ */ new Map();
    lastUID = 0;
    add(e, o) {
      let c = e ?? this.lastUID++ + "", g = new ve(o);
      return this.assets.set(c, g), g;
    }
    addLoaded(e, o) {
      let c = e ?? this.lastUID++ + "", g = ve.loaded(o);
      return this.assets.set(c, g), g;
    }
    get(e) {
      return this.assets.get(e);
    }
    progress() {
      if (this.assets.size === 0) return 1;
      let e = 0;
      return this.assets.forEach((o) => {
        o.loaded && e++;
      }), e / this.assets.size;
    }
  };
  function Yn(n13) {
    return fetch(n13).then((e) => {
      if (!e.ok) throw new Error(`Failed to fetch "${n13}"`);
      return e;
    });
  }
  i(Yn, "fetchURL");
  function Et(n13) {
    return Yn(n13).then((e) => e.json());
  }
  i(Et, "fetchJSON");
  function Lr(n13) {
    return Yn(n13).then((e) => e.text());
  }
  i(Lr, "fetchText");
  function Vr(n13) {
    return Yn(n13).then((e) => e.arrayBuffer());
  }
  i(Vr, "fetchArrayBuffer");
  function St(n13) {
    let e = new Image();
    return e.crossOrigin = "anonymous", e.src = n13, new Promise((o, c) => {
      e.onload = () => o(e), e.onerror = () => c(new Error(`Failed to load image from "${n13}"`));
    });
  }
  i(St, "loadImg");
  var Zt = 2.5949095;
  var _r = 1.70158 + 1;
  var kr = 2 * Math.PI / 3;
  var Nr = 2 * Math.PI / 4.5;
  var en = { linear: (n13) => n13, easeInSine: (n13) => 1 - Math.cos(n13 * Math.PI / 2), easeOutSine: (n13) => Math.sin(n13 * Math.PI / 2), easeInOutSine: (n13) => -(Math.cos(Math.PI * n13) - 1) / 2, easeInQuad: (n13) => n13 * n13, easeOutQuad: (n13) => 1 - (1 - n13) * (1 - n13), easeInOutQuad: (n13) => n13 < 0.5 ? 2 * n13 * n13 : 1 - Math.pow(-2 * n13 + 2, 2) / 2, easeInCubic: (n13) => n13 * n13 * n13, easeOutCubic: (n13) => 1 - Math.pow(1 - n13, 3), easeInOutCubic: (n13) => n13 < 0.5 ? 4 * n13 * n13 * n13 : 1 - Math.pow(-2 * n13 + 2, 3) / 2, easeInQuart: (n13) => n13 * n13 * n13 * n13, easeOutQuart: (n13) => 1 - Math.pow(1 - n13, 4), easeInOutQuart: (n13) => n13 < 0.5 ? 8 * n13 * n13 * n13 * n13 : 1 - Math.pow(-2 * n13 + 2, 4) / 2, easeInQuint: (n13) => n13 * n13 * n13 * n13 * n13, easeOutQuint: (n13) => 1 - Math.pow(1 - n13, 5), easeInOutQuint: (n13) => n13 < 0.5 ? 16 * n13 * n13 * n13 * n13 * n13 : 1 - Math.pow(-2 * n13 + 2, 5) / 2, easeInExpo: (n13) => n13 === 0 ? 0 : Math.pow(2, 10 * n13 - 10), easeOutExpo: (n13) => n13 === 1 ? 1 : 1 - Math.pow(2, -10 * n13), easeInOutExpo: (n13) => n13 === 0 ? 0 : n13 === 1 ? 1 : n13 < 0.5 ? Math.pow(2, 20 * n13 - 10) / 2 : (2 - Math.pow(2, -20 * n13 + 10)) / 2, easeInCirc: (n13) => 1 - Math.sqrt(1 - Math.pow(n13, 2)), easeOutCirc: (n13) => Math.sqrt(1 - Math.pow(n13 - 1, 2)), easeInOutCirc: (n13) => n13 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * n13, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * n13 + 2, 2)) + 1) / 2, easeInBack: (n13) => _r * n13 * n13 * n13 - 1.70158 * n13 * n13, easeOutBack: (n13) => 1 + _r * Math.pow(n13 - 1, 3) + 1.70158 * Math.pow(n13 - 1, 2), easeInOutBack: (n13) => n13 < 0.5 ? Math.pow(2 * n13, 2) * ((Zt + 1) * 2 * n13 - Zt) / 2 : (Math.pow(2 * n13 - 2, 2) * ((Zt + 1) * (n13 * 2 - 2) + Zt) + 2) / 2, easeInElastic: (n13) => n13 === 0 ? 0 : n13 === 1 ? 1 : -Math.pow(2, 10 * n13 - 10) * Math.sin((n13 * 10 - 10.75) * kr), easeOutElastic: (n13) => n13 === 0 ? 0 : n13 === 1 ? 1 : Math.pow(2, -10 * n13) * Math.sin((n13 * 10 - 0.75) * kr) + 1, easeInOutElastic: (n13) => n13 === 0 ? 0 : n13 === 1 ? 1 : n13 < 0.5 ? -(Math.pow(2, 20 * n13 - 10) * Math.sin((20 * n13 - 11.125) * Nr)) / 2 : Math.pow(2, -20 * n13 + 10) * Math.sin((20 * n13 - 11.125) * Nr) / 2 + 1, easeInBounce: (n13) => 1 - en.easeOutBounce(1 - n13), easeOutBounce: (n13) => n13 < 1 / 2.75 ? 7.5625 * n13 * n13 : n13 < 2 / 2.75 ? 7.5625 * (n13 -= 1.5 / 2.75) * n13 + 0.75 : n13 < 2.5 / 2.75 ? 7.5625 * (n13 -= 2.25 / 2.75) * n13 + 0.9375 : 7.5625 * (n13 -= 2.625 / 2.75) * n13 + 0.984375, easeInOutBounce: (n13) => n13 < 0.5 ? (1 - en.easeOutBounce(1 - 2 * n13)) / 2 : (1 + en.easeOutBounce(2 * n13 - 1)) / 2 };
  var Ct = en;
  var At = class {
    static {
      i(this, "TexPacker");
    }
    textures = [];
    canvas;
    c2d;
    x = 0;
    y = 0;
    curHeight = 0;
    gfx;
    constructor(e, o, c) {
      this.gfx = e, this.canvas = document.createElement("canvas"), this.canvas.width = o, this.canvas.height = c, this.textures = [Re.fromImage(e, this.canvas)], this.c2d = this.canvas.getContext("2d");
    }
    add(e) {
      if (e.width > this.canvas.width || e.height > this.canvas.height) throw new Error(`Texture size (${e.width} x ${e.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`);
      this.x + e.width > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + e.height > this.canvas.height && (this.c2d.clearRect(0, 0, this.canvas.width, this.canvas.height), this.textures.push(Re.fromImage(this.gfx, this.canvas)), this.x = 0, this.y = 0, this.curHeight = 0);
      let o = this.textures[this.textures.length - 1], c = new v(this.x, this.y);
      return this.x += e.width, e.height > this.curHeight && (this.curHeight = e.height), e instanceof ImageData ? this.c2d.putImageData(e, c.x, c.y) : this.c2d.drawImage(e, c.x, c.y), o.update(this.canvas), [o, new oe(c.x / this.canvas.width, c.y / this.canvas.height, e.width / this.canvas.width, e.height / this.canvas.height)];
    }
    free() {
      for (let e of this.textures) e.free();
    }
  };
  var jr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var Hr = gr("SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExZWVlZWVlnZ2dnZ3V1dXV1dYODg4ODkZGRkZGRn5+fn5+frKysrKy6urq6urrIyMjIyNbW1tbW1uTk5OTk8vLy8vLy//////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAQKAAAAAAAAHjOZTf9/AAAAAAAAAAAAAAAAAAAAAP/7kGQAAANUMEoFPeACNQV40KEYABEY41g5vAAA9RjpZxRwAImU+W8eshaFpAQgALAAYALATx/nYDYCMJ0HITQYYA7AH4c7MoGsnCMU5pnW+OQnBcDrQ9Xx7w37/D+PimYavV8elKUpT5fqx5VjV6vZ38eJR48eRKa9KUp7v396UgPHkQwMAAAAAA//8MAOp39CECAAhlIEEIIECBAgTT1oj///tEQYT0wgEIYxgDC09aIiE7u7u7uIiIz+LtoIQGE/+XAGYLjpTAIOGYYy0ZACgDgSNFxC7YYiINocwERjAEDhIy0mRoGwAE7lOTBsGhj1qrXNCU9GrgwSPr80jj0dIpT9DRUNHKJbRxiWSiifVHuD2b0EbjLkOUzSXztP3uE1JpHzV6NPq+f3P5T0/f/lNH7lWTavQ5Xz1yLVe653///qf93B7f/vMdaKJAAJAMAIwIMAHMpzDkoYwD8CR717zVb8/p54P3MikXGCEWhQOEAOAdP6v8b8oNL/EzdnROC8Zo+z+71O8VVAGIKFEglKbidkoLam0mAFiwo0ZoVExf/7kmQLgAQyZFxvPWAENcVKXeK0ABAk2WFMaSNIzBMptBYfArbkZgpWjEQpcmjxQoG2qREWQcvpzuuIm29THt3ElhDNlrXV///XTGbm7Kbx0ymcRX///x7GVvquf5vk/dPs0Wi5Td1vggDxqbNII4bAPTU3Ix5h9FJTe7zv1LHG/uPsPrvth0ejchVzVT3giirs6sQAACgQAAIAdaXbRAYra/2t0//3HwqLKIlBOJhOg4BzAOkt+MOL6H8nlNvKyi3rOnqP//zf6AATwBAKIcHKixxwjl1TjDVIrvTqdmKQOFQBUBDwZ1EhHlDEGEVyGQWBAHrcJgRSXYbkvHK/8/6rbYjs4Qj0C8mRy2hwRv/82opGT55fROgRoBTjanaiQiMRHUu1/P3V9yGFffaVv78U1/6l/kpo0cz73vuSv/9GeaqDVRA5bWdHRKQKIEAAAAoIktKeEmdQFKN5sguv/ZSC0oxCAR7CzcJgEsd8cA0M/x0tzv15E7//5L5KCqoIAAmBFIKM1UxYtMMFjLKESTE8lhaelUyCBYeA2IN4rK1iDt//+5JkEgAkZzlVq29D8DJDWo0YLLARwPFZrL0PyLsUazTAlpI+hKSx01VSOfbjXg0iW9/jVPDleLJ15QQA4Okdc5ByMDFIeuCCE5CvevwBGH8YibiX9FtaIIgUikF42wrZw6ZJ6WlHrA+Ki5++NNMeYH1lEkwwJAIJB4ugVFguXFc20Vd/FLlvq1GSiSwAFABABABA47k6BFeNvxEQZO9v3L1IE4iEVElfrXmEmlyWIyGslFA55gH/sW7////o9AAFIBIIAAIUMzYTTNkgsAmYObfwQyzplrOmYvq0BKCKNN+nUTbvD7cJzvHxrEWG5QqvP8U1vFx6CwE8NoRc2ADBeEb/HoXh60N7ST8nw9QiiGoYvf/r6GtC9+vLwXHjaSkIp3iupC5+Nii81Zhu85pNYbFvrf+UFThDOYYY26off+W6b//73GTiN9xDfl0AAwBAiMBO8qsDBPOZtuT/dTbjVVbY/KSGH6ppHwKv/6X+s8gUCN/lODzv////GQAGAMQAADlXAUCBJiY0wFQZusYQOaQzaTwDBTcx0IvVp8m7uxKp//uSZBMCBHRI1eNPLHAyxNqWGeoYUIEnWYyxD8DUFSn0l6iojcd+oEOkzV6uWqyHNzjqmv+7V5xGUfY9yEmbziTzjRscm9OqFQp1PKFrqu3PX/7YuGtDU6bt0OUTpv38rdc+37dVDQLKUchaJ853E9edNDGqWwsYz1VoiSStEJtZvw6+sNqFWqaIXJjQCGAAGWAYVwmag/x3BRJw1wYF7IzVqDcNzn85d//FzK7IgwbQwccLoB4AsF8Nj/1ESRUAAVJwAFh0YOFEhmSJEHKQRDyhszgLUpHIgFrb5cySFg5jv10ImlYuvaaGBItfXqnNPmic+XNkmb5fW49vdhq97nQMQyGIlM2v8oQSrxKSxE4F1WqrduqvuJCRof1R7Gsre9KszUVF1/t3PzH2tnp+iSUG3rDwGNcDzxCGA8atuQF0paZAAkAhAQAEAC240yJV+nJgUrqq8axAYtVpYjZyFGb13/17jwiClQDaCdytZpyHHf1R/EG/+lUAgAAAChhmJvioVGGBCFgqdpsGAkUUrbTstwTCJgLQpFIsELW7t/68Iv/7kmQUgAQ9NFO9aeAAPAU6RKwUABClY2e5hoARGpDvPydCAsY8WO10fSvUOnfT98+n/l/6/+hxslhQ1DEOaevNKGocvIYba8WJpaP/15pX0NQ1DUNn/////k6lPp/N61rBi8RJFfERV3IgrqDsJA64sjCoKxDDQ9xEcWDpMBDwVFDIAEIAAzryxsjGi4q/oWpixKjhklAF4pUrDPjFhFVupDFZ/t/t0YPAygUBhADPR/KLCKJ8h2Oxhpxz/zNRAAFl0MAZLAYEAiVbEiz36LSgZ5QoQVat69KNy8FyM5Z80ACHAzgnISEkxUSJIDyBSwi5KF4mjBl4xJdbrG9ComLrL8YATiodhQKCkj6ROdyg1y5XmZlvMVmpJzYppJDwLi/Lp9vT3TfmimOGpuezi2U/9FNav0zX9Oja2r//8+hvuihuQAAMAVmqFgAgCcuboAEAAAUcqy8ca0BHBmwbFkED0CNA1YYDPkhcQrRJxcY3BzfxxltAz9vX62Xl3plAzWmRO+FkZyH///1qAAEjQBAACUpgU5o2AIBmFBGMamrGg0b/+5JkC4ADxyLWb2ngAEEkGofsoACP7U1JLaxTkOqFaKhspGgnW3SGC56ZgUJGCRnLOmIJAkuNBgvwU4Ocf8CJK9UsafH9/Frj///365XSoME+DZMw5UNjrMbVoeIj9EL91IuQ5KHyl5V2LCpdIdESgafOHxVGkAlkHuakmix/gN8+BP/sKguLAAoAtUjtvaoeEADwr3OK11E4KBlojgeQNQBJ4MvCAd/4t/xMMzeLhQGQ1//6tQu5BaBOGCT6U4aafvXZ//4iAPAAAAbLkgIlQmMSLA2H1CVNAlWwyVvKIQIxOSK1NWxs4MBUATlKrAkIMPAjCAdS6MVFzuURWa/+/qQWEGsA6EEpiBEJb9Q21lAHoBoD0B6aAPhyt+bG3muoXIN3RLadXxUfr/ohjGFF/p97eqNI5noKAqYLNPpUTDSI9/TmA6B+YAAADgA0Y4lxTW1SQfOQuDDDI0KTTuIrF5qoJrUFhUFAsg+AT2hbkaRZYGIjBKVDIa5VgNN/9P/rCDsBJbYJRKpCA1ArAkigIeYY61AjE+jubyiZFZ3+L789//uSZBCABHVj2entNmw1JXokLycYEFTFVa0wz4DYjKs08J2Q+r4n3lgbWaaMwMLEjFW88F39brqPF83cv1mCSJeY3Q2uiQxhBJxCBeR1D2LQRsYQcZUTzdNll8+OwZBsIwSgl45ymaHX603Mz7JmZuvt71GDTN66zev/+cLn/b5imV8pAHkg61FIJchBSG+zycgAZgADD6F1iQQRXRWmWS6bDIIgyBCZEcdl/KgXGmVKFv/vl8ry/5bLypf//U5jhYDhL9X/pAA0AKBIAAKgGtGXGGWJgEoF2JNsHlKfSKLRhGBAgIuWZKIJCFpF1VBhkB+EfzEyMUJdWuMrEZoPZ5BfF3/Nu62riIdjoO4AAKD2sTrDmpZZaYysf/810TitAVvn9xtFucieiaEy54YqiIO6RqkGAm5wVO0bFB0sDTdNxYGekKktR4KAAfAwUIgI8Ci6aXgtwbhPWAC+CKExAFydNtYGXNZoQjUsXv/9vKjgmdwieb+h7kHvPoc//0FaCACAATKFC4Y9ammklidbaiJNPBhGWTNhFSgdtalK12lpl//7kmQRAFN2NFI7TBvwNKNaTRsFGBWdfV2tPNcYvBHpgPKJsc8IUcTCxY3HSvUVNTWe/Z3YWlrJ0yrNRUiT19aprA7E+mPP+ZmC3/CsheOJXhc/9VJb3UZnphUBcqZUZQth1i3XqtPYu2Sy1s8DV9ZYACAAASAAHgFkQcOqgB5utFHFh3kSi4USs0yk4iOClREmjvdG+upaiLcRA6/9QGbOfxF/8sEAQAVG0G07YFMihKR4EXJCkRdX9isueLqUMRAQdhDZmv3KeR0nPqRVrZmSIXDt+BBSR7qqbKQcB98W9qiMb55preHIStxFWPE4lAyI+BKz2iSxonpvMR5DgKxTH6vGGXAbYCaAnJUW4W07EesQqbfqdbo4qNnPxSpn1H8eahszc/y9//dn1V7D/OYpn1szQKAPXTMlO/rO//u7JriJXbld7aP33v6RXYg/COIDzTWkTspg6Ay1YaDSwKxrP/LfIikHjmO871POf/kEAseAgoPEi9/0ZziNwfxVKy9qAEGEEAAq1EcOamDEGHAA0iao8k31rz2MiLNEik6VQ37/+5JkEAgEYU5WU0M3MDjDe0o9IjiOzSVM7aCzEM2GqXD8pFB0zxMcHCQNHtZD+R+pMWZxOJ/otEZTvVN/MeU12xTVcL+f2YaiNJTVoPd6SvzEnKel5GXOzEaazgdChnP2jOAwpfyRpVlQwoJBwpN1L1DL////6TVWcoepf7CVWrpEWiym5lR5U0BSMlxQC4qByOyQIAEuJfIriWixDqRgMfVZWuvRowjR9BzP5lZlT/+YG50CsSBG////////liXDQVMxEaBkbzKAAACnDIAstY7iK7gGSF7SIDexaTtPOHABk9YcmJEACmo50pgWal22etroBpYoVqtU6OPqvlf0c4QCAfLk9P/FJs4KCQMf6ECZyA6BwqqyJ0rMYj56k1/UlTIx1V3Rt5NF71D4qlptDC8VMgQVHFDlQnDFi06qQgKQAAIK4TxxJGFGYJuZNGXRdpq7IW/DYpPIQRFJLAc+qn1E0XYdOkQVJT+z8Lvff//8vbKAWTIBBUUdM6cOhlDry7x4dAkJXIBhbO3HSMMMGBQ9K9/JNfu09PjTO64wYEcR//uSZBeABP5g11NPRVwzQ4r8PMJVj7j9UU2wUwDPjeq0Z5w675D9+uDdL2QsuIry2lZtwn/pJYyRRjANEOQxNWw8mU7Tq+vueV7JrX/Pg7VIkEuZT5dwd85MVoq5lpStNICkBAcFR88//58KO8Zjt2PIGxWl1cVfXeNGH18SReNT//hYliWtQuNluxyxONbm4U+lpkAgpyE7yAIYUjIaqHmARJ0GQTtmH60xdwFp/u253XBCxD0f/lBcguCALn//Y5nqEv//1h4BAAwgAA5gcHmpIplgeW9fAOM6RFZUywrsGAiRmKkanQnCFBjYoPDS7bjwtPTkVI8D/P8VVLcTUz65n7PW2s3tNYHgEul4tBaIz0A9RgJAyAMI4/i0fpQKjhX9S+qIa0vmc4CZit/0/3UTDGeKNpkk0nu2rUE2ag8WErhE/kgAiQCJKQEYBA5Wn6CxHoIUh6dQ46nLIuwFk4S/LaDQxXu7Yf/pf//lwJB0S/Ff/4C///EiBEiAAAIAMnpngiIABAdMpKigkXaUwhLEGvpiofmXW57h2XAZO3CMRv/7kmQUAEOHQlHraRTQMkQp6GWFZBTVU1lNPTPYyIyocYeUoNgLBWAs1jPkTv/tXBaeZ/tbD/nAGP8/xT0SNEi5zof0KIVEzVe9r5lZOol7kyaXMYS4J/ZS3djp//UaeVyR0mUMlTgfz8XqMzIEgAQQ6UNQ1DSE0/C16OvyaocF4ijAGFci0FSYqCUSaWs6t9F6/699DKvMgMoK1//kSbvxtyBN27I7mdXgNMAW75sRU1UwUHYG5axI2tFIFpkgx7nnK+1JmRKjqeAd5Ph0QAL4QAnirmiPlg0yBDlrb/d3ngtA65rb999+8vdDCfnJuJAYIl285zklpVbrKpk1PEzrOY9NZUgyz6OiOsKt5qG/g2ibxSZ+/eTI/NB8n4ev//n2nIw85GAdwuJL7kYnnAbpcf1RBKH6b2U4RWP8dmWH5snsAFYwADBgAopKdzFJq4Jlmotloh/m4QpTSvJRE3nYZHephoqBhVf+P7vQ9BPlwZCP+3//+hdy5uUwS3LDEgQx4cdIgvDEBR1YqymCsSbKzRy2aQmSv+AAcAgAkvzPfuX/+5JkFQAj6VFX00Zr5DllOhhgpn4MmSs+zSRRiO8U5tWklYgSLKfs+Xheb/+6WaAQCKTztNeJ382MUltZNnjSJoFrCqB6C4mFcwJpJD4Oc8dLDXMTh9k1/rmTopfzqv9AvHWfOuZJlEvHSVMjyjpkVucKSzxJVQBgAAIo8DGqRdYCXPckFYg+dH9A/qUyljrtpxH9RJX/Z3Vv6uFkPg4M2jf3CL09QrwOrMt69n//8UFEAAMHWdhg1CcjyVBwiArOYlDL5NPY6x8ZLFBCGi6SVTKX5nqdSEFjebnv2zHdt0dj6xvORsSFzwqRNTJSZIrrlpXcURNL9WW7krBgr5jPMaGcvJ5v0N1s19CV7+7fvQfjySX2QECWUgKgeJCIif4WRBZ/6archpDkzE7oWctK3zEHP9Smeai8oeHkM6AK7pGjtOgeFv40ugqNd+Iv///uAZAMgAAAUeSWhLPpdwk3iXpBw43hOVIp1gliUOSaeZcZeZhLAH9TtD56wUpBduzLF5v5qViTH6o+I0+8Z1asaLgKVAohlpB72DgAQBQxEd3g//uSZCiAA6k0UdMPQfA+xcnBYON8E3WDVU0w1ZjPDSmo8IniHAFDNnkXF3B94gicH5d8MFw+IHZwufxOf/8gsHw+XrD4Jn8T4RAyQiABNBQg/3giEWuZ42mVFB3kkXNjhqBg1CghEUbN3/7/KBhyqNueef/MIDBClP3YRnKLiIlEFzf//0g+4zKpRIKTpqQgUtnHGFw6RSLN421iGcYapqFxny/capK9r9v+2BSy/RU1yZxa2eGaWK07ijfcxeiO3iuHJvjbXzts+Ny+XyFnsne1h0qG4mAaN6xRGaLVxKPlrri0Bg9oXGyxcw8JRBPkUzC8v451vVd9liSX85JMrmkVNwxOCwUg298////7ks//L409/hwMRIozKiIckXtjzDaAMTBcAACAwLGargPSEgEJZN/EFjfF/VKgaMYKMbwtf/T0UCGGfjfOAZ2frCigYdwh/+sGlQBxhCAAAUHkDPqOdmmUdAVYl3IhrEfR8qZFjLYEPOyzVGvm6lNUJCk2PNazwFxaijk+ZEaiTehoJGuDh6zN/EVP8BCLD/88BoY7Xv/7kmQlgBNmMtNTL0FwOGZJ/WHiKAyhJU+soE3A3JnmAa2oaCIru/+RrEHMTphxQ0X/LzoVy4gKhYl6ZUlklW7CLRVoYmgABwCRMAAMA/poCiEEYLsBVodWcVZ18+CcAfH165U4Xgh7/X1/BAQF6GN/BwQ/+D9S9P6wII//CoANYFYCBAKlGQDKhVjjylKARw2mPAtp8JjcQHggQswVsOEKsF6AIBWvmpIFdSZvRVv/LHWEy0+txMxu+VK9gEqG5pWf6GNGU4UBVkfd+bsj/6lZE0fkOpAqAOvyUO9oo+IiEtcLKOGzhhSGa4MYINHWoQsFr8zzmow0tRILkqz5/+vFxl/oZX/+qGW//xiLjR3xcGn//0QLkTQJh1UA8MAQAEXC/YxODKTDUEhrASs1512GRp+dRFFdTWIRaOXrve1eNjTNpreqQYrC9NBlQc1f8YO2po8bnH6qffuRvU7taiNF3baokE0YpmjRCHRclWBb9NCHKHpERwHRG3pqgXklq4sBpLjGvmekg8Y7SjM1FZopIM8IhB6dtMr8aKsdovh4FW//+5JkQ4CjTDdSU0gtIDiE+YBrKgwNbSVJTCBPwN8N5ZW8NKDnhRB8AXCm//KAsBUCwKU//oJQnET+UP3/zpYRocAAABJkVzzIuoLGEaDoxfsNva12EUdxhJMGFQioSg8GxKsLm8kWEmExJuNidarkk+OTXc0i2OZEq2v+tZr/MDZRS0I7LfRpHdlsiF6m/mEjk+XlK10UqtKYUwNgMx24hUtCJLfpM3ExUeKDYjClgZAzAjQ0qlNQBTsGpk9zSRkCiKkRGp572VXsPYChGvxhAuYkDYZK//jSRgto2mTf6+PJqgAAgIAAAACYZE6aZOHhYkYlcbpeYQq1RgLO4U8TIlL1sGw+iKZi5Kzc/bKT0yXrIUMES89RCWy8oWlxqIQlKANLFpT/KjUrK+UCYbZqGnjVj29aO5dzofWAskRX5eJWPi4kf/aRVjy3Wlyg2AnMYIDSTLwZUTASIzflPWUwwlUnIFMnGiyABeaXJcN91PmQJCLzmvUJkFOHCrX/+6O///IHnT4tT9YYBoNMQ09GfKIErwdwChNz1Qy5+5S/wWeY//uSZF+C03UyT2tMO0A3RRkhY20KzQjDMszhA8DjlGOBp5y4ZCS3ica52GIGiryv7FAaSDVZSXKFTiir+GvGiuK4rjgwPVTddso+W/42a4ueJJHDYtfj6YoKknnjzRgKA0fBIRZOSsprJqnoNN73ps/Z9DVgbKNbMGmRzrYBMAZCPUANkAZQ0syAC2ubK1NF90+WoesBpnhY8qwVDkNb/5Uof6//418TgElCSgAIgyAAQBHEmiaQFPIRmfAMELffpo0IflyEuAAQnSnKvwTlVlnIgOAAGS3P3IydjXPSh/CaVRqpSNCjQqDvPM+fLcuN+WgqNix6CoHomUWTT86JjziRSZ3yjnq+dIldKPU11KUuf6wAASMAAJxE+MlyktgE9UGSxjEx6RR0v1s9bWZ+EJSrGtjqUIhklG3J8eLRn/2U/nv7f///+7/6gBQgEAMUijVMwweWWMyYM/PLXuc7DptIQmBARMRCxXjEIcTNDQgSSeHpUNXO7dRSOllJPvnY7yzaO1hmUjsKvHe99fOxrabMX7mGTi5tsNkZVZLndzxse//7kmR7ABM2O0pbKTvQN4NI+WGFPA2ZESs1pYAAvA0jVrJwAHfbr/c6//vW790dzX36QNBRlDv/6QQAU3V64yUgBEAYc/lI8e5bm+Z9+j+4aaj4tFrb//iker/4a12b/V//q//9v+7vAEAAAAMqZTGd5gL4f54o6ZebKNrR/zWVYUEVYVVv8BuAV2OUT+DUQgkJ8J1Ey4ZbFCiAwgwzMSdHV4jQR+OoPWEASaPkyYq+PsQFFJCsEEJtOiUjI/+GRhtC2DnizTMXATJig9Ey/kAJMrkHGYJ8gpLjmJOYoskpav+ShRJInyGGZVJMihDi6pIxRZJJel/8iZPkYiREnyKE0akTL5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var qr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABdRJREFUeJzt3d3N3TYMgGG16ADdoAhyl7UyV9bqXRB0g2zQXgRGDcOWSIoUaX3vAwQBknMk/4gWLcnHrQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDEb9kb8FH99eeXf6Wf/efn35ynDyj1pEsb6G6NUxOYZ7sdB/QtPdnWRnn29gbKMYDUspPs0SgPb22cHANo/JG9AZF6wWBp3JLgeir36bvff3x9LOvzp2/dbSFA97bk5I4a9VMD7TXOUcP0uJ+d6emu5d6V1QvMs5nj8FZPx37X/b2TFpzShtnafeP0DipJMFnLnN3/w1OQ7tZgP+pA4VVKcHo0TG36KNULKGt5XsHZmi1APS5WM2Vqg0i7vbsG6YcIznN9vRTxXHavgdxtv6Tc3vc1pAHqdaG6ipwKYprpf1sFp6aH0gRTrxxLubPB2avHu+c/l3mICvqnsr//+Cq+qGrK1Xw/wzbBaRkNvSv3yew9cq+cu89L6nu6F/cMzCgzF1ftANlbe+Otp1IkDVxyVfbo6Z481f3507dhvXfbrk3HpdtjKTNqKuio8678c7mzF6ns6arfMyrVNoA75wMfNU2hKSeCx3Fq7dc+SPfDc39H9Vqn2CT//4bsYeT1PecOJyGSJdh6PZOlbElPZz2PHtlD1cUeS4LT4z5IOihwfNaD5ERm9qxH/dZ7Vmt9M999CtCZbdLUP/p3r2zFQ0paG8lr4Eb6+ZWBcSeq/qhyK6bXUfXOSgtO7/tOb9eT1NveqKttpYbiyXu/euV51JV16/T6e86zyF5TUp731V5Sp+Z7M71h9QvFNWWuvr0Sy4LzLfNvrel6zRX1e+hN2VzrnNlfaYD0xhCs++851lDh3vNV95xe6YvHgb8bwbNcuc+f09wbaUj2dzYgjz93//5kh94t0quCM8OKK6glKKuM0EYHfhUZWd8WwenZa0rLsp6s2YY66o0k9WUvS4NManBaGuo1eDIHgUZ1ePdkntsfFaCz5VZJdStsxyt7ziMNXHEAK5yk1mqmhrMPf1fcp57Vqe3SqZTMEduZhqAZyaywFne0DVHngHTZ11bznE88l/1lBZ9meP8851plWkBCO7drmQvWnL/sY/fKtFaqN3iy6iofsQxNktJnTMgfPXJUz3w3VaP5vOQ7Iyszvy2DczSi+aYFET2jINUEqFcAS4+rV480WlwRWXe07dLa0YGvfl9kmbTvPZJ1TXGvn4t4yuRp+2aMgk27wkm63DIztU3vOVfueC8wK4zKWtK0M+nvJXmOdlt65MgFFCva06qsKz044SvjIiN5TjLaaHxhtNyyouXBGZ1WSn66Ivt+M7pRZAWoZsDq+t2emeM1am/WtHxFG9runrO1/n1CxLK7CilxJM/H4bwuTJJBvWtgvm0gcNu01uvpd8la1soLE7xkpYDea4Ot6W3GOSzRc3o/qHw2M9qmXWA+uw+jbd0hyO9Yz0+vJ9QGcO/8ZV2YUqYVPN8dImXp3aJ/w1XTGGYfKZN+P7IXiXqO1uINLzFOm/Pz+BV4C03PNEqpZl//ELXP1ro8nhLyKLPHMyAiXyvh4cMFZ2uyAJXc62gzgJl1nhrSLMEzcLx+5qQnIhgqv6qhTHC2Zmus1tUuowCVDkRU6j0jgiJqhLPSSq2q7wMtMSBkdbcQWjNCq2nMlRrTnajAPP/t+c5Sj3K8VNueQ+pGzaa2MyOb2sZseW2dpL6ZnjMzfeQFt/Fe3XP2WIfGvRY6a569jCJ9TaIlcCS9KQE5p1TP2VrMbwLNDlZEvpE5AkGxh9f2nLO/QOetytIwAnMf6SfS2ns+jaZ6B4i2sWvSvF0HWOAj/aRGNFAaPXbw2rS2Rzr0T/ChshKNM3qd4135BCaqK9VAKy+lAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4DBC0k0jFtF9wAAAAASUVORK5CYII=";
  var $r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABqxJREFUeJztnU1yFDkQRtMEB+AG7Fk6fBPO6ZsQLGc/N5gbMAtosJvqKv2kpPxS763A0W5XSXqVqZ+SngzgF58/fflx/7N///vnacW1gBkFD2Z2LOYNBF3Dx9UXAGs5kxLWwhNxU2qlJHrOhwLfkNZoiaBzIa3dCFJYLXgSboKXmETPeVDQyamR8vX55fe/v37/9vBzCDoH0tqktEpZ+t0IOh4KOBm16euZmETPtVDAiRgRLRF0HRRuEkrFrE1hzR4Lipxj+bD6AqCPz5++/Bgp5tXfdv1CeAdPPmFmSkn0nE+a0drdFm6XiOkdKWEuKRptTXqlLuqqFNaM6Dkb+T5nbb+npo8WjZVinqFantFJk9bWojaRThq7HzKN8wiPJ7aCoJHEZN5zHvJp7RE1DTV6SnZ1fa/PL1MjJtF5HmnT2tJF3GZ/BIj05I8ULUtR6ypER7ogjxpw61rRGxEal4KYjNyORzatbUlHSxr06tFcBTHPiN5NUEJWzlZKG/aKRqYk5tl1IKgPafucZ7w+vxSluLP6olHnL6MQQfYV6bpk/+BRZXm+cXHEiApSipZHlE6tRBDMkxmyysl5VsmtjXiFoJmiZU35ZWK0oNv1OY+omSv0GDDKJCaMI42cHg25dvFCi6QZxVS6ViVSpLUz38A4oiS9ySjlW2althGWKZrN6XNuOVpbwq0ReIzqZhfTrHwE/PZZuEYqcnqO0tZQGxVqRylprLGIEDXNkLOKEakbYsYiiphmiQaEZuD9BghixiKSmGYJIueqBt4TRZEyHtHENCNyNtMaRREzHhHFNBOKnKv7myVcVXKka4WfRBXTjMjpypl8iBmP6MsOmed0Bgk1UHjxXlpORIAWIqeybyGtha1QEdNMRM5s7wLCGpTENBORE6AXNTHNkBM2QFFMM4F5ToX5TYiLqphmRE7YmMhimiEnJEb9XBdJOUlp4Qp1Mc1E5QQ4I/qyvFJCy8n8JnijEjXNAi3fQ0TwIEM6e2OqnAgII8kkptkgOZEQZlN6BquZjqhVFxlBOkZq4Z6WASAFQQ8jZwQJ70FK8CTiaeb3fDSLJyMiwiwiS/q0SkwEBE+85jYjSTpcTiSE2WQRtVlOpAMVemVdtjXmlZxICFlQk/TJjHcmYS96JJ0p6KmcZggKeWmVdPopYwgKuxJVUuQE+EU0Sd99KYICxJH0ry9DUIA/rFy3WyWnGYLCnqyQ9PCXERTgmJmSPvwlBAU4p1bUWklPP1yytA9JYWdGRtLLDyEowDUjomiRwQgKUIZnJC3OgREUoByPSDpkDyEkBfhJj6RNQ7xEUYA6aiS9Cdo8SUoUBaijVtCuFQwICtBGiajdawARFKCNK0HdVtEjKUAd0+Q0q9v/FklhJ1rmP4e8JEoUBejfq2jYNgtEUdgJzwN7u6dSSkBQyMSME7O7FyHUQpoLCqw8rv5o+d6Uw3NvfzjagUkAZvOlLH1lLMyx8wCzWBEhW3ZDmLZ7NTsrwCpmyui5A1+IPidigjcjhZy14/vytBYxwRsPMVcf/2c2QU72wQUVIgj5lqFyIiZEJ5qQb1me1gLMJLKM93wY9cVETYiGkphmg+RETFhJljY2LHICQB/uchI1AXxwlRMxAfwgrYVtUHvxwk1OoiaAL8MjJ2ICtOEip1q6APnJEBS6VwiRzp4vtM5YBvf3m/EeI8DyvUZK33z4+v1bqsZ7dN+3n2W6zwgMO44hY0X1vIqkXh419x7lXh9ds8oyviFyRqmcXrxf2FUtF89ymFkG6nI2p7WZB4FGvUWfLcVt4ahsdy+TR7ifz6lc0F5v0GfalmXldpE3esrr6PrTR84sjNjS4kpQhQhaUi4lD6KR1xK9DHupfoKoR02vSFDy9FWNoKVivv1/lG7OfZkqR043OZUbWgmtFaomaGl51ZTHCnFv5bqNnFGjZvRtEFUEHSHmI1ZHWgVBXZ5+sxvX7ANlPChpjKsknSllKaPlRU4nZo0Yjq6wiIJGFPMML2mj3M8ZRRe4QkzF6FhCJEFbBn4i0iKswn11yenZiLLKeMRqQdWiZSmlkqrcV9d0gPfksAcqBW+2ZqAoq5gZGSrnTtGwlVmCIqUepxWxerj7iIyNZ7SgiKmJhJw7NJpRgiKmLuHl3KnReA4UIaU+y+WkcbzHQ1DEzMGQ9aJH0BDK6RE0y9wlTDp2HuppERQxc0FFBaZGUMTMB5UlQG/fHyk1odJEaBUUMXWh4oSoFRQxtaHyxMi2uBseQwUKciUoYuaAShTlkaCImQcqUph7QREzF/8DSS/2GZ2/N/sAAAAASUVORK5CYII=";
  var ki = "3000.1.17";
  var zr = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var tn = "topleft";
  var Kr = 64;
  var Ni = "monospace";
  var nn = "monospace";
  var ji = 36;
  var rn = 64;
  var sn = 256;
  var Yr = 2048;
  var Wr = 2048;
  var Xr = 2048;
  var Jr = 2048;
  var Qr = 0.1;
  var Hi = 64;
  var Wn = "linear";
  var qi = 8;
  var $i = 4;
  var Qn = [{ name: "a_pos", size: 2 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var zi = Qn.reduce((n13, e) => n13 + e.size, 0);
  var Zr = 2048;
  var Ki = Zr * 4 * zi;
  var Yi = Zr * 6;
  var Wi = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var Xi = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var Xn = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var Jn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var Ji = /* @__PURE__ */ new Set(["id", "require"]);
  var Qi = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
  function ut(n13) {
    switch (n13) {
      case "topleft":
        return new v(-1, -1);
      case "top":
        return new v(0, -1);
      case "topright":
        return new v(1, -1);
      case "left":
        return new v(-1, 0);
      case "center":
        return new v(0, 0);
      case "right":
        return new v(1, 0);
      case "botleft":
        return new v(-1, 1);
      case "bot":
        return new v(0, 1);
      case "botright":
        return new v(1, 1);
      default:
        return n13;
    }
  }
  i(ut, "anchorPt");
  function Zi(n13) {
    switch (n13) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  i(Zi, "alignPt");
  function eo(n13) {
    return n13.createBuffer(1, 1, 44100);
  }
  i(eo, "createEmptyAudioBuffer");
  var zo = i((n13 = {}) => {
    let e = n13.root ?? document.body;
    e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
    let o = n13.canvas ?? (() => {
      let t = document.createElement("canvas");
      return e.appendChild(t), t;
    })(), c = n13.scale ?? 1, g = n13.width && n13.height && !n13.stretch && !n13.letterbox;
    g ? (o.width = n13.width * c, o.height = n13.height * c) : (o.width = o.parentElement.offsetWidth, o.height = o.parentElement.offsetHeight);
    let m = ["outline: none", "cursor: default"];
    if (g) {
      let t = o.width, r = o.height;
      m.push(`width: ${t}px`), m.push(`height: ${r}px`);
    } else m.push("width: 100%"), m.push("height: 100%");
    n13.crisp && (m.push("image-rendering: pixelated"), m.push("image-rendering: crisp-edges")), o.style.cssText = m.join(";");
    let P = n13.pixelDensity || window.devicePixelRatio;
    o.width *= P, o.height *= P, o.tabIndex = 0;
    let I = document.createElement("canvas");
    I.width = sn, I.height = sn;
    let j = I.getContext("2d", { willReadFrequently: true }), y = Ir({ canvas: o, touchToMouse: n13.touchToMouse, gamepads: n13.gamepads, pixelDensity: n13.pixelDensity, maxFPS: n13.maxFPS }), X = [], S = y.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true }), q = Kn(S, { texFilter: n13.texFilter }), E = (() => {
      let t = ht(Xn, Jn), r = Re.fromImage(q, new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), s = n13.width && n13.height ? new rt(q, n13.width * P * c, n13.height * P * c) : new rt(q, S.drawingBufferWidth, S.drawingBufferHeight), u = null, a = 1;
      n13.background && (u = J(n13.background), a = Array.isArray(n13.background) ? n13.background[3] : 1, S.clearColor(u.r / 255, u.g / 255, u.b / 255, a ?? 1)), S.enable(S.BLEND), S.blendFuncSeparate(S.SRC_ALPHA, S.ONE_MINUS_SRC_ALPHA, S.ONE, S.ONE_MINUS_SRC_ALPHA);
      let h = new Qt(q, Qn, Ki, Yi), f = Re.fromImage(q, new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { lastDrawCalls: 0, defShader: t, defTex: r, frameBuffer: s, postShader: null, postShaderUniform: null, renderer: h, transform: new Ue(), transformStack: [], bgTex: f, bgColor: u, bgAlpha: a, width: n13.width ?? S.drawingBufferWidth / P / c, height: n13.height ?? S.drawingBufferHeight / P / c, viewport: { x: 0, y: 0, width: S.drawingBufferWidth, height: S.drawingBufferHeight }, fixed: false };
    })();
    class K {
      static {
        i(this, "SpriteData");
      }
      tex;
      frames = [new oe(0, 0, 1, 1)];
      anims = {};
      slice9 = null;
      constructor(r, s, u = {}, a = null) {
        this.tex = r, s && (this.frames = s), this.anims = u, this.slice9 = a;
      }
      get width() {
        return this.tex.width * this.frames[0].w;
      }
      get height() {
        return this.tex.height * this.frames[0].h;
      }
      static from(r, s = {}) {
        return typeof r == "string" ? K.fromURL(r, s) : Promise.resolve(K.fromImage(r, s));
      }
      static fromImage(r, s = {}) {
        let [u, a] = k.packer.add(r), h = s.frames ? s.frames.map((f) => new oe(a.x + f.x * a.w, a.y + f.y * a.h, f.w * a.w, f.h * a.h)) : Tt(s.sliceX || 1, s.sliceY || 1, a.x, a.y, a.w, a.h);
        return new K(u, h, s.anims, s.slice9);
      }
      static fromURL(r, s = {}) {
        return St(r).then((u) => K.fromImage(u, s));
      }
    }
    class Q {
      static {
        i(this, "SoundData");
      }
      buf;
      constructor(r) {
        this.buf = r;
      }
      static fromArrayBuffer(r) {
        return new Promise((s, u) => te.ctx.decodeAudioData(r, s, u)).then((s) => new Q(s));
      }
      static fromURL(r) {
        return jn(r) ? Q.fromArrayBuffer(Pr(r)) : Vr(r).then((s) => Q.fromArrayBuffer(s));
      }
    }
    let te = (() => {
      let t = new (window.AudioContext || window.webkitAudioContext)(), r = t.createGain();
      r.connect(t.destination);
      let s = new Q(eo(t));
      return t.decodeAudioData(Hr.buffer.slice(0)).then((u) => {
        s.buf = u;
      }).catch((u) => {
        console.error("Failed to load burp: ", u);
      }), { ctx: t, masterNode: r, burpSnd: s };
    })(), k = { urlPrefix: "", sprites: new je(), fonts: new je(), bitmapFonts: new je(), sounds: new je(), shaders: new je(), custom: new je(), packer: new At(q, Xr, Jr), loaded: false };
    function pe(t) {
      return typeof t != "string" || jn(t) ? t : k.urlPrefix + t;
    }
    i(pe, "fixURL");
    let C = { events: new Ne(), objEvents: new Ne(), root: Un([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: new v(1), angle: 0, shake: 0, transform: new Ue() } };
    C.root.use(An());
    function Ae(t) {
      return k.custom.add(null, t);
    }
    i(Ae, "load");
    function $() {
      let t = [k.sprites, k.sounds, k.shaders, k.fonts, k.bitmapFonts, k.custom];
      return t.reduce((r, s) => r + s.progress(), 0) / t.length;
    }
    i($, "loadProgress");
    function Te(t) {
      return t !== void 0 && (k.urlPrefix = t), k.urlPrefix;
    }
    i(Te, "loadRoot");
    function ye(t, r) {
      return k.custom.add(t, Et(r));
    }
    i(ye, "loadJSON");
    class Se {
      static {
        i(this, "FontData");
      }
      fontface;
      filter = Wn;
      outline = null;
      size = rn;
      constructor(r, s = {}) {
        if (this.fontface = r, this.filter = s.filter ?? Wn, this.size = s.size ?? rn, this.size > sn) throw new Error(`Max font size: ${sn}`);
        s.outline && (this.outline = { width: 1, color: J(0, 0, 0) }, typeof s.outline == "number" ? this.outline.width = s.outline : typeof s.outline == "object" && (s.outline.width && (this.outline.width = s.outline.width), s.outline.color && (this.outline.color = s.outline.color)));
      }
    }
    function st(t, r, s = {}) {
      let u = new FontFace(t, typeof r == "string" ? `url(${r})` : r);
      return document.fonts.add(u), k.fonts.add(t, u.load().catch((a) => {
        throw new Error(`Failed to load font from "${r}": ${a}`);
      }).then((a) => new Se(a, s)));
    }
    i(st, "loadFont");
    function on(t, r, s, u, a = {}) {
      return k.bitmapFonts.add(t, St(r).then((h) => bn(Re.fromImage(q, h, a), s, u, a.chars ?? zr)));
    }
    i(on, "loadBitmapFont");
    function Tt(t = 1, r = 1, s = 0, u = 0, a = 1, h = 1) {
      let f = [], b = a / t, p = h / r;
      for (let d = 0; d < r; d++) for (let w = 0; w < t; w++) f.push(new oe(s + w * b, u + d * p, b, p));
      return f;
    }
    i(Tt, "slice");
    function Ot(t, r) {
      return t = pe(t), Ae(typeof r == "string" ? new Promise((s, u) => {
        Et(r).then((a) => {
          Ot(t, a).then(s).catch(u);
        });
      }) : K.from(t).then((s) => {
        let u = {};
        for (let a in r) {
          let h = r[a], f = s.frames[0], b = Xr * f.w, p = Jr * f.h, d = h.frames ? h.frames.map((A) => new oe(f.x + (h.x + A.x) / b * f.w, f.y + (h.y + A.y) / p * f.h, A.w / b * f.w, A.h / p * f.h)) : Tt(h.sliceX || 1, h.sliceY || 1, f.x + h.x / b * f.w, f.y + h.y / p * f.h, h.width / b * f.w, h.height / p * f.h), w = new K(s.tex, d, h.anims);
          k.sprites.addLoaded(a, w), u[a] = w;
        }
        return u;
      }));
    }
    i(Ot, "loadSpriteAtlas");
    function Rt(t, r = {}) {
      let s = document.createElement("canvas"), u = t[0].width, a = t[0].height;
      s.width = u * t.length, s.height = a;
      let h = s.getContext("2d");
      t.forEach((b, p) => {
        b instanceof ImageData ? h.putImageData(b, p * u, 0) : h.drawImage(b, p * u, 0);
      });
      let f = h.getImageData(0, 0, t.length * u, a);
      return K.fromImage(f, { ...r, sliceX: t.length, sliceY: 1 });
    }
    i(Rt, "createSpriteSheet");
    function Ye(t, r, s = { sliceX: 1, sliceY: 1, anims: {} }) {
      return r = pe(r), Array.isArray(r) ? r.some((u) => typeof u == "string") ? k.sprites.add(t, Promise.all(r.map((u) => typeof u == "string" ? St(u) : Promise.resolve(u))).then((u) => Rt(u, s))) : k.sprites.addLoaded(t, Rt(r, s)) : typeof r == "string" ? k.sprites.add(t, K.from(r, s)) : k.sprites.addLoaded(t, K.fromImage(r, s));
    }
    i(Ye, "loadSprite");
    function an(t, r) {
      return r = pe(r), k.sprites.add(t, new Promise(async (s) => {
        let u = typeof r == "string" ? await Et(r) : r, a = await Promise.all(u.frames.map(St)), h = document.createElement("canvas");
        h.width = u.width, h.height = u.height * u.frames.length;
        let f = h.getContext("2d");
        a.forEach((p, d) => {
          f.drawImage(p, 0, d * u.height);
        });
        let b = await Ye(null, h, { sliceY: u.frames.length, anims: u.anims });
        s(b);
      }));
    }
    i(an, "loadPedit");
    function un(t, r, s) {
      r = pe(r), s = pe(s), typeof r == "string" && !s && (s = Mr(r) + ".json");
      let u = typeof s == "string" ? Et(s) : Promise.resolve(s);
      return k.sprites.add(t, u.then((a) => {
        let h = a.meta.size, f = a.frames.map((p) => new oe(p.frame.x / h.w, p.frame.y / h.h, p.frame.w / h.w, p.frame.h / h.h)), b = {};
        for (let p of a.meta.frameTags) p.from === p.to ? b[p.name] = p.from : b[p.name] = { from: p.from, to: p.to, speed: 10, loop: true, pingpong: p.direction === "pingpong" };
        return K.from(r, { frames: f, anims: b });
      }));
    }
    i(un, "loadAseprite");
    function cn(t, r, s) {
      return k.shaders.addLoaded(t, ht(r, s));
    }
    i(cn, "loadShader");
    function hn(t, r, s) {
      r = pe(r), s = pe(s);
      let u = i((h) => h ? Lr(h) : Promise.resolve(null), "resolveUrl"), a = Promise.all([u(r), u(s)]).then(([h, f]) => ht(h, f));
      return k.shaders.add(t, a);
    }
    i(hn, "loadShaderURL");
    function ln(t, r) {
      return r = pe(r), k.sounds.add(t, typeof r == "string" ? Q.fromURL(r) : Q.fromArrayBuffer(r));
    }
    i(ln, "loadSound");
    function dn(t = "bean") {
      return Ye(t, jr);
    }
    i(dn, "loadBean");
    function Pt(t) {
      return k.sprites.get(t);
    }
    i(Pt, "getSprite");
    function Dt(t) {
      return k.sounds.get(t);
    }
    i(Dt, "getSound");
    function Mt(t) {
      return k.fonts.get(t);
    }
    i(Mt, "getFont");
    function Gt(t) {
      return k.bitmapFonts.get(t);
    }
    i(Gt, "getBitmapFont");
    function Bt(t) {
      return k.shaders.get(t);
    }
    i(Bt, "getShader");
    function fn(t) {
      return k.custom.get(t);
    }
    i(fn, "getAsset");
    function ct(t) {
      if (typeof t == "string") {
        let r = Pt(t);
        if (r) return r;
        if ($() < 1) return null;
        throw new Error(`Sprite not found: ${t}`);
      } else {
        if (t instanceof K) return ve.loaded(t);
        if (t instanceof ve) return t;
        throw new Error(`Invalid sprite: ${t}`);
      }
    }
    i(ct, "resolveSprite");
    function mn(t) {
      if (typeof t == "string") {
        let r = Dt(t);
        if (r) return r;
        if ($() < 1) return null;
        throw new Error(`Sound not found: ${t}`);
      } else {
        if (t instanceof Q) return ve.loaded(t);
        if (t instanceof ve) return t;
        throw new Error(`Invalid sound: ${t}`);
      }
    }
    i(mn, "resolveSound");
    function pn(t) {
      if (!t) return E.defShader;
      if (typeof t == "string") {
        let r = Bt(t);
        if (r) return r.data ?? r;
        if ($() < 1) return null;
        throw new Error(`Shader not found: ${t}`);
      } else if (t instanceof ve) return t.data ? t.data : t;
      return t;
    }
    i(pn, "resolveShader");
    function Ft(t) {
      if (!t) return Ft(n13.font ?? Ni);
      if (typeof t == "string") {
        let r = Gt(t), s = Mt(t);
        if (r) return r.data ?? r;
        if (s) return s.data ?? s;
        if (document.fonts.check(`${rn}px ${t}`)) return t;
        if ($() < 1) return null;
        throw new Error(`Font not found: ${t}`);
      } else if (t instanceof ve) return t.data ? t.data : t;
      return t;
    }
    i(Ft, "resolveFont");
    function gn(t) {
      return t !== void 0 && (te.masterNode.gain.value = t), te.masterNode.gain.value;
    }
    i(gn, "volume");
    function It(t, r = {}) {
      let s = te.ctx, u = r.paused ?? false, a = s.createBufferSource(), h = new be(), f = s.createGain(), b = r.seek ?? 0, p = 0, d = 0, w = false;
      a.loop = !!r.loop, a.detune.value = r.detune ?? 0, a.playbackRate.value = r.speed ?? 1, a.connect(f), a.onended = () => {
        N() >= a.buffer?.duration && h.trigger();
      }, f.connect(te.masterNode), f.gain.value = r.volume ?? 1;
      let A = i((M) => {
        a.buffer = M.buf, u || (p = s.currentTime, a.start(0, b), w = true);
      }, "start"), D = mn(t);
      D instanceof ve && D.onLoad(A);
      let N = i(() => {
        if (!a.buffer) return 0;
        let M = u ? d - p : s.currentTime - p, O = a.buffer.duration;
        return a.loop ? M % O : Math.min(M, O);
      }, "getTime"), _ = i((M) => {
        let O = s.createBufferSource();
        return O.buffer = M.buffer, O.loop = M.loop, O.playbackRate.value = M.playbackRate.value, O.detune.value = M.detune.value, O.onended = M.onended, O.connect(f), O;
      }, "cloneNode");
      return { stop() {
        this.paused = true, this.seek(0);
      }, set paused(M) {
        if (u !== M) if (u = M, M) w && (a.stop(), w = false), d = s.currentTime;
        else {
          a = _(a);
          let O = d - p;
          a.start(0, O), w = true, p = s.currentTime - O, d = 0;
        }
      }, get paused() {
        return u;
      }, play(M = 0) {
        this.seek(M), this.paused = false;
      }, seek(M) {
        a.buffer?.duration && (M > a.buffer.duration || (u ? (a = _(a), p = d - M) : (a.stop(), a = _(a), p = s.currentTime - M, a.start(0, M), w = true, d = 0)));
      }, set speed(M) {
        a.playbackRate.value = M;
      }, get speed() {
        return a.playbackRate.value;
      }, set detune(M) {
        a.detune.value = M;
      }, get detune() {
        return a.detune.value;
      }, set volume(M) {
        f.gain.value = Math.max(M, 0);
      }, get volume() {
        return f.gain.value;
      }, set loop(M) {
        a.loop = M;
      }, get loop() {
        return a.loop;
      }, duration() {
        return a.buffer?.duration ?? 0;
      }, time() {
        return N() % this.duration();
      }, onEnd(M) {
        return h.add(M);
      }, then(M) {
        return this.onEnd(M);
      } };
    }
    i(It, "play");
    function Lt(t) {
      return It(te.burpSnd, t);
    }
    i(Lt, "burp");
    function wn(t, r) {
      return new rt(q, t, r);
    }
    i(wn, "makeCanvas");
    function ht(t = Xn, r = Jn) {
      let s = Wi.replace("{{user}}", t ?? Xn), u = Xi.replace("{{user}}", r ?? Jn);
      try {
        return new Jt(q, s, u, Qn.map((a) => a.name));
      } catch (a) {
        let f = /(?<type>^\w+) SHADER ERROR: 0:(?<line>\d+): (?<msg>.+)/, b = Br(a).match(f), p = Number(b.groups.line) - 14, d = b.groups.msg.trim(), w = b.groups.type.toLowerCase();
        throw new Error(`${w} shader line ${p}: ${d}`);
      }
    }
    i(ht, "makeShader");
    function bn(t, r, s, u) {
      let a = t.width / r, h = {}, f = u.split("").entries();
      for (let [b, p] of f) h[p] = new oe(b % a * r, Math.floor(b / a) * s, r, s);
      return { tex: t, map: h, size: s };
    }
    i(bn, "makeFont");
    function lt(t, r, s, u = E.defTex, a = E.defShader, h = {}) {
      let f = pn(a);
      if (!f || f instanceof ve) return;
      let b = E.fixed || s ? E.transform : C.cam.transform.mult(E.transform), p = [];
      for (let d of t) {
        let w = vn(b.multVec2(d.pos));
        p.push(w.x, w.y, d.uv.x, d.uv.y, d.color.r / 255, d.color.g / 255, d.color.b / 255, d.opacity);
      }
      E.renderer.push(S.TRIANGLES, p, r, f, u, h);
    }
    i(lt, "drawRaw");
    function Pe() {
      E.renderer.flush();
    }
    i(Pe, "flush");
    function dt() {
      S.clear(S.COLOR_BUFFER_BIT), E.frameBuffer.bind(), S.clear(S.COLOR_BUFFER_BIT), E.bgColor || Ce(() => {
        Be({ width: we(), height: xe(), quad: new oe(0, 0, we() / Kr, xe() / Kr), tex: E.bgTex, fixed: true });
      }), E.renderer.numDraws = 0, E.fixed = false, E.transformStack.length = 0, E.transform = new Ue();
    }
    i(dt, "frameStart");
    function Vt(t, r) {
      E.postShader = t, E.postShaderUniform = r ?? null;
    }
    i(Vt, "usePostEffect");
    function ft() {
      Pe(), E.lastDrawCalls = E.renderer.numDraws, E.frameBuffer.unbind(), S.viewport(0, 0, S.drawingBufferWidth, S.drawingBufferHeight);
      let t = E.width, r = E.height;
      E.width = S.drawingBufferWidth / P, E.height = S.drawingBufferHeight / P, We({ flipY: true, tex: E.frameBuffer.tex, pos: new v(E.viewport.x, E.viewport.y), width: E.viewport.width, height: E.viewport.height, shader: E.postShader, uniform: typeof E.postShaderUniform == "function" ? E.postShaderUniform() : E.postShaderUniform, fixed: true }), Pe(), E.width = t, E.height = r;
    }
    i(ft, "frameEnd");
    function vn(t) {
      return new v(t.x / we() * 2 - 1, -t.y / xe() * 2 + 1);
    }
    i(vn, "screen2ndc");
    function _t(t) {
      E.transform = t.clone();
    }
    i(_t, "pushMatrix");
    function ne(...t) {
      if (t[0] === void 0) return;
      let r = T(...t);
      r.x === 0 && r.y === 0 || E.transform.translate(r);
    }
    i(ne, "pushTranslate");
    function He(...t) {
      if (t[0] === void 0) return;
      let r = T(...t);
      r.x === 1 && r.y === 1 || E.transform.scale(r);
    }
    i(He, "pushScale");
    function se(t) {
      t && E.transform.rotate(t);
    }
    i(se, "pushRotate");
    function le() {
      E.transformStack.push(E.transform.clone());
    }
    i(le, "pushTransform");
    function ae() {
      E.transformStack.length > 0 && (E.transform = E.transformStack.pop());
    }
    i(ae, "popTransform");
    function Be(t) {
      if (t.width === void 0 || t.height === void 0) throw new Error('drawUVQuad() requires property "width" and "height".');
      if (t.width <= 0 || t.height <= 0) return;
      let r = t.width, s = t.height, a = ut(t.anchor || tn).scale(new v(r, s).scale(-0.5)), h = t.quad || new oe(0, 0, 1, 1), f = t.color || J(255, 255, 255), b = t.opacity ?? 1, p = t.tex ? Qr / t.tex.width : 0, d = t.tex ? Qr / t.tex.height : 0, w = h.x + p, A = h.y + d, D = h.w - p * 2, N = h.h - d * 2;
      le(), ne(t.pos), se(t.angle), He(t.scale), ne(a), lt([{ pos: new v(-r / 2, s / 2), uv: new v(t.flipX ? w + D : w, t.flipY ? A : A + N), color: f, opacity: b }, { pos: new v(-r / 2, -s / 2), uv: new v(t.flipX ? w + D : w, t.flipY ? A + N : A), color: f, opacity: b }, { pos: new v(r / 2, -s / 2), uv: new v(t.flipX ? w : w + D, t.flipY ? A + N : A), color: f, opacity: b }, { pos: new v(r / 2, s / 2), uv: new v(t.flipX ? w : w + D, t.flipY ? A : A + N), color: f, opacity: b }], [0, 1, 3, 1, 2, 3], t.fixed, t.tex, t.shader, t.uniform), ae();
    }
    i(Be, "drawUVQuad");
    function We(t) {
      if (!t.tex) throw new Error('drawTexture() requires property "tex".');
      let r = t.quad ?? new oe(0, 0, 1, 1), s = t.tex.width * r.w, u = t.tex.height * r.h, a = new v(1);
      if (t.tiled) {
        let h = Math.ceil((t.width || s) / s), f = Math.ceil((t.height || u) / u), p = ut(t.anchor || tn).add(new v(1, 1)).scale(0.5).scale(h * s, f * u);
        for (let d = 0; d < h; d++) for (let w = 0; w < f; w++) Be(Object.assign({}, t, { pos: (t.pos || new v(0)).add(new v(s * d, u * w)).sub(p), scale: a.scale(t.scale || new v(1)), tex: t.tex, quad: r, width: s, height: u, anchor: "topleft" }));
      } else t.width && t.height ? (a.x = t.width / s, a.y = t.height / u) : t.width ? (a.x = t.width / s, a.y = a.x) : t.height && (a.y = t.height / u, a.x = a.y), Be(Object.assign({}, t, { scale: a.scale(t.scale || new v(1)), tex: t.tex, quad: r, width: s, height: u }));
    }
    i(We, "drawTexture");
    function yn(t) {
      if (!t.sprite) throw new Error('drawSprite() requires property "sprite"');
      let r = ct(t.sprite);
      if (!r || !r.data) return;
      let s = r.data.frames[t.frame ?? 0];
      if (!s) throw new Error(`Frame not found: ${t.frame ?? 0}`);
      We(Object.assign({}, t, { tex: r.data.tex, quad: s.scale(t.quad ?? new oe(0, 0, 1, 1)) }));
    }
    i(yn, "drawSprite");
    function qe(t, r, s, u, a, h = 1) {
      u = Ge(u % 360), a = Ge(a % 360), a <= u && (a += Math.PI * 2);
      let f = [], b = Math.ceil((a - u) / Ge(8) * h), p = (a - u) / b;
      for (let d = u; d < a; d += p) f.push(t.add(r * Math.cos(d), s * Math.sin(d)));
      return f.push(t.add(r * Math.cos(a), s * Math.sin(a))), f;
    }
    i(qe, "getArcPts");
    function ge(t) {
      if (t.width === void 0 || t.height === void 0) throw new Error('drawRect() requires property "width" and "height".');
      if (t.width <= 0 || t.height <= 0) return;
      let r = t.width, s = t.height, a = ut(t.anchor || tn).add(1, 1).scale(new v(r, s).scale(-0.5)), h = [new v(0, 0), new v(r, 0), new v(r, s), new v(0, s)];
      if (t.radius) {
        let f = Math.min(Math.min(r, s) / 2, t.radius);
        h = [new v(f, 0), new v(r - f, 0), ...qe(new v(r - f, f), f, f, 270, 360), new v(r, f), new v(r, s - f), ...qe(new v(r - f, s - f), f, f, 0, 90), new v(r - f, s), new v(f, s), ...qe(new v(f, s - f), f, f, 90, 180), new v(0, s - f), new v(0, f), ...qe(new v(f, f), f, f, 180, 270)];
      }
      z2(Object.assign({}, t, { offset: a, pts: h, ...t.gradient ? { colors: t.horizontal ? [t.gradient[0], t.gradient[1], t.gradient[1], t.gradient[0]] : [t.gradient[0], t.gradient[0], t.gradient[1], t.gradient[1]] } : {} }));
    }
    i(ge, "drawRect");
    function l(t) {
      let { p1: r, p2: s } = t;
      if (!r || !s) throw new Error('drawLine() requires properties "p1" and "p2".');
      let u = t.width || 1, a = s.sub(r).unit().normal().scale(u * 0.5), h = [r.sub(a), r.add(a), s.add(a), s.sub(a)].map((f) => ({ pos: new v(f.x, f.y), uv: new v(0), color: t.color ?? W.WHITE, opacity: t.opacity ?? 1 }));
      lt(h, [0, 1, 3, 1, 2, 3], t.fixed, E.defTex, t.shader, t.uniform);
    }
    i(l, "drawLine");
    function x(t) {
      let r = t.pts;
      if (!r) throw new Error('drawLines() requires property "pts".');
      if (!(r.length < 2)) if (t.radius && r.length >= 3) {
        let s = r[0].sdist(r[1]);
        for (let a = 1; a < r.length - 1; a++) s = Math.min(r[a].sdist(r[a + 1]), s);
        let u = Math.min(t.radius, Math.sqrt(s) / 2);
        l(Object.assign({}, t, { p1: r[0], p2: r[1] }));
        for (let a = 1; a < r.length - 2; a++) {
          let h = r[a], f = r[a + 1];
          l(Object.assign({}, t, { p1: h, p2: f }));
        }
        l(Object.assign({}, t, { p1: r[r.length - 2], p2: r[r.length - 1] }));
      } else for (let s = 0; s < r.length - 1; s++) l(Object.assign({}, t, { p1: r[s], p2: r[s + 1] })), t.join !== "none" && L(Object.assign({}, t, { pos: r[s], radius: t.width / 2 }));
    }
    i(x, "drawLines");
    function R(t) {
      if (!t.p1 || !t.p2 || !t.p3) throw new Error('drawTriangle() requires properties "p1", "p2" and "p3".');
      return z2(Object.assign({}, t, { pts: [t.p1, t.p2, t.p3] }));
    }
    i(R, "drawTriangle");
    function L(t) {
      if (typeof t.radius != "number") throw new Error('drawCircle() requires property "radius".');
      t.radius !== 0 && he(Object.assign({}, t, { radiusX: t.radius, radiusY: t.radius, angle: 0 }));
    }
    i(L, "drawCircle");
    function he(t) {
      if (t.radiusX === void 0 || t.radiusY === void 0) throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (t.radiusX === 0 || t.radiusY === 0) return;
      let r = t.start ?? 0, s = t.end ?? 360, u = ut(t.anchor ?? "center").scale(new v(-t.radiusX, -t.radiusY)), a = qe(u, t.radiusX, t.radiusY, r, s, t.resolution);
      a.unshift(u);
      let h = Object.assign({}, t, { pts: a, radius: 0, ...t.gradient ? { colors: [t.gradient[0], ...Array(a.length - 1).fill(t.gradient[1])] } : {} });
      if (s - r >= 360 && t.outline) {
        t.fill !== false && z2(Object.assign(h, { outline: null })), z2(Object.assign(h, { pts: a.slice(1), fill: false }));
        return;
      }
      z2(h);
    }
    i(he, "drawEllipse");
    function z2(t) {
      if (!t.pts) throw new Error('drawPolygon() requires property "pts".');
      let r = t.pts.length;
      if (!(r < 3)) {
        if (le(), ne(t.pos), He(t.scale), se(t.angle), ne(t.offset), t.fill !== false) {
          let s = t.color ?? W.WHITE, u = t.pts.map((h, f) => ({ pos: new v(h.x, h.y), uv: new v(0, 0), color: t.colors && t.colors[f] ? t.colors[f].mult(s) : s, opacity: t.opacity ?? 1 })), a = [...Array(r - 2).keys()].map((h) => [0, h + 1, h + 2]).flat();
          lt(u, t.indices ?? a, t.fixed, E.defTex, t.shader, t.uniform);
        }
        t.outline && x({ pts: [...t.pts, t.pts[0]], radius: t.radius, width: t.outline.width, color: t.outline.color, join: t.outline.join, uniform: t.uniform, fixed: t.fixed, opacity: t.opacity }), ae();
      }
    }
    i(z2, "drawPolygon");
    function Oe(t, r, s) {
      Pe(), S.clear(S.STENCIL_BUFFER_BIT), S.enable(S.STENCIL_TEST), S.stencilFunc(S.NEVER, 1, 255), S.stencilOp(S.REPLACE, S.REPLACE, S.REPLACE), r(), Pe(), S.stencilFunc(s, 1, 255), S.stencilOp(S.KEEP, S.KEEP, S.KEEP), t(), Pe(), S.disable(S.STENCIL_TEST);
    }
    i(Oe, "drawStenciled");
    function $e(t, r) {
      Oe(t, r, S.EQUAL);
    }
    i($e, "drawMasked");
    function kt(t, r) {
      Oe(t, r, S.NOTEQUAL);
    }
    i(kt, "drawSubtracted");
    function De() {
      return (E.viewport.width + E.viewport.height) / (E.width + E.height);
    }
    i(De, "getViewportScale");
    function Ce(t) {
      Pe();
      let r = E.width, s = E.height;
      E.width = E.viewport.width, E.height = E.viewport.height, t(), Pe(), E.width = r, E.height = s;
    }
    i(Ce, "drawUnscaled");
    function Zn(t, r) {
      r.pos && (t.pos = t.pos.add(r.pos)), r.scale && (t.scale = t.scale.scale(T(r.scale))), r.angle && (t.angle += r.angle), r.color && t.ch.length === 1 && (t.color = t.color.mult(r.color)), r.opacity && (t.opacity *= r.opacity);
    }
    i(Zn, "applyCharTransform");
    let er = /\[(?<style>\w+)\](?<text>.*?)\[\/\k<style>\]/g;
    function es(t) {
      let r = {}, s = t.replace(er, "$2"), u = 0;
      for (let a of t.matchAll(er)) {
        let h = a.index - u;
        for (let f = 0; f < a.groups.text.length; f++) r[f + h] = [a.groups.style];
        u += a[0].length - a.groups.text.length;
      }
      return { charStyleMap: r, text: s };
    }
    i(es, "compileStyledText");
    let xn = {};
    function Xe(t) {
      if (t.text === void 0) throw new Error('formatText() requires property "text".');
      let r = Ft(t.font);
      if (t.text === "" || r instanceof ve || !r) return { width: 0, height: 0, chars: [], opt: t };
      let { charStyleMap: s, text: u } = es(t.text + ""), a = Fr(u);
      if (r instanceof Se || typeof r == "string") {
        let Z = r instanceof Se ? r.fontface.family : r, H = r instanceof Se ? { outline: r.outline, filter: r.filter } : { outline: null, filter: Wn }, V = xn[Z] ?? { font: { tex: new Re(q, Yr, Wr, { filter: H.filter }), map: {}, size: rn }, cursor: new v(0), outline: H.outline };
        xn[Z] || (xn[Z] = V), r = V.font;
        for (let fe of a) if (!V.font.map[fe]) {
          let U = j;
          U.clearRect(0, 0, I.width, I.height), U.font = `${r.size}px ${Z}`, U.textBaseline = "top", U.textAlign = "left", U.fillStyle = "#ffffff";
          let G = U.measureText(fe), B = Math.ceil(G.width), F = r.size;
          V.outline && (U.lineJoin = "round", U.lineWidth = V.outline.width * 2, U.strokeStyle = V.outline.color.toHex(), U.strokeText(fe, V.outline.width, V.outline.width), B += V.outline.width * 2, F += V.outline.width * 3), U.fillText(fe, V.outline?.width ?? 0, V.outline?.width ?? 0);
          let Y = U.getImageData(0, 0, B, F);
          if (V.cursor.x + B > Yr && (V.cursor.x = 0, V.cursor.y += F, V.cursor.y > Wr)) throw new Error("Font atlas exceeds character limit");
          r.tex.update(Y, V.cursor.x, V.cursor.y), r.map[fe] = new oe(V.cursor.x, V.cursor.y, B, F), V.cursor.x += B;
        }
      }
      let h = t.size || r.size, f = T(t.scale ?? 1).scale(h / r.size), b = t.lineSpacing ?? 0, p = t.letterSpacing ?? 0, d = 0, w = 0, A = 0, D = [], N = [], _ = 0, M = null, O = null;
      for (; _ < a.length; ) {
        let Z = a[_];
        if (Z === `
`) A += h + b, D.push({ width: d - p, chars: N }), M = null, O = null, d = 0, N = [];
        else {
          let H = r.map[Z];
          if (H) {
            let V = H.w * f.x;
            t.width && d + V > t.width && (A += h + b, M != null && (_ -= N.length - M, Z = a[_], H = r.map[Z], V = H.w * f.x, N = N.slice(0, M - 1), d = O), M = null, O = null, D.push({ width: d - p, chars: N }), d = 0, N = []), N.push({ tex: r.tex, width: H.w, height: H.h, quad: new oe(H.x / r.tex.width, H.y / r.tex.height, H.w / r.tex.width, H.h / r.tex.height), ch: Z, pos: new v(d, A), opacity: t.opacity ?? 1, color: t.color ?? W.WHITE, scale: T(f), angle: 0 }), Z === " " && (M = N.length, O = d), d += V, w = Math.max(w, d), d += p;
          }
        }
        _++;
      }
      D.push({ width: d - p, chars: N }), A += h, t.width && (w = t.width);
      let ie = [];
      for (let Z of D) {
        let H = (w - Z.width) * Zi(t.align ?? "left");
        for (let V of Z.chars) {
          let fe = r.map[V.ch], U = ie.length;
          if (V.pos = V.pos.add(H, 0).add(fe.w * f.x * 0.5, fe.h * f.y * 0.5), t.transform) {
            let G = typeof t.transform == "function" ? t.transform(U, V.ch) : t.transform;
            G && Zn(V, G);
          }
          if (s[U]) {
            let G = s[U];
            for (let B of G) {
              let F = t.styles[B], Y = typeof F == "function" ? F(U, V.ch) : F;
              Y && Zn(V, Y);
            }
          }
          ie.push(V);
        }
      }
      return { width: w, height: A, chars: ie, opt: t };
    }
    i(Xe, "formatText");
    function tr(t) {
      Je(Xe(t));
    }
    i(tr, "drawText");
    function Je(t) {
      le(), ne(t.opt.pos), se(t.opt.angle), ne(ut(t.opt.anchor ?? "topleft").add(1, 1).scale(t.width, t.height).scale(-0.5)), t.chars.forEach((r) => {
        Be({ tex: r.tex, width: r.width, height: r.height, pos: r.pos, scale: r.scale, angle: r.angle, color: r.color, opacity: r.opacity, quad: r.quad, anchor: "center", uniform: t.opt.uniform, shader: t.opt.shader, fixed: t.opt.fixed });
      }), ae();
    }
    i(Je, "drawFormattedText");
    function we() {
      return E.width;
    }
    i(we, "width");
    function xe() {
      return E.height;
    }
    i(xe, "height");
    function ts(t) {
      return new v((t.x - E.viewport.x) * we() / E.viewport.width, (t.y - E.viewport.y) * xe() / E.viewport.height);
    }
    i(ts, "windowToContent");
    function ns(t) {
      return new v(t.x * E.viewport.width / E.width, t.y * E.viewport.height / E.height);
    }
    i(ns, "contentToView");
    function Nt() {
      return ts(y.mousePos());
    }
    i(Nt, "mousePos");
    let nr = false, re = { inspect: false, timeScale: 1, showLog: true, fps: () => y.fps(), numFrames: () => y.numFrames(), stepFrame: dr, drawCalls: () => E.lastDrawCalls, clearLog: () => C.logs = [], log: (t) => {
      let r = n13.logMax ?? qi;
      C.logs.unshift({ msg: t, time: y.time() }), C.logs.length > r && (C.logs = C.logs.slice(0, r));
    }, error: (t) => re.log(new Error(t.toString ? t.toString() : t)), curRecording: null, numObjects: () => On("*", { recursive: true }).length, get paused() {
      return nr;
    }, set paused(t) {
      nr = t, t ? te.ctx.suspend() : te.ctx.resume();
    } };
    function Me() {
      return y.dt() * re.timeScale;
    }
    i(Me, "dt");
    function rs(...t) {
      return t.length > 0 && (C.cam.pos = T(...t)), C.cam.pos ? C.cam.pos.clone() : zt();
    }
    i(rs, "camPos");
    function ss(...t) {
      return t.length > 0 && (C.cam.scale = T(...t)), C.cam.scale.clone();
    }
    i(ss, "camScale");
    function is(t) {
      return t !== void 0 && (C.cam.angle = t), C.cam.angle;
    }
    i(is, "camRot");
    function os(t = 12) {
      C.cam.shake += t;
    }
    i(os, "shake");
    function rr(t) {
      return C.cam.transform.multVec2(t);
    }
    i(rr, "toScreen");
    function sr(t) {
      return C.cam.transform.invert().multVec2(t);
    }
    i(sr, "toWorld");
    function jt(t) {
      let r = new Ue();
      return t.pos && r.translate(t.pos), t.scale && r.scale(t.scale), t.angle && r.rotate(t.angle), t.parent ? r.mult(t.parent.transform) : r;
    }
    i(jt, "calcTransform");
    function Un(t = []) {
      let r = /* @__PURE__ */ new Map(), s = {}, u = new Ne(), a = [], h = null, f = false, b = { id: Gr(), hidden: false, transform: new Ue(), children: [], parent: null, set paused(d) {
        if (d !== f) {
          f = d;
          for (let w of a) w.paused = d;
        }
      }, get paused() {
        return f;
      }, add(d = []) {
        let w = Array.isArray(d) ? Un(d) : d;
        if (w.parent) throw new Error("Cannot add a game obj that already has a parent.");
        return w.parent = this, w.transform = jt(w), this.children.push(w), w.trigger("add", w), C.events.trigger("add", w), w;
      }, readd(d) {
        let w = this.children.indexOf(d);
        return w !== -1 && (this.children.splice(w, 1), this.children.push(d)), d;
      }, remove(d) {
        let w = this.children.indexOf(d);
        if (w !== -1) {
          d.parent = null, this.children.splice(w, 1);
          let A = i((D) => {
            D.trigger("destroy"), C.events.trigger("destroy", D), D.children.forEach((N) => A(N));
          }, "trigger");
          A(d);
        }
      }, removeAll(d) {
        if (d) this.get(d).forEach((w) => this.remove(w));
        else for (let w of [...this.children]) this.remove(w);
      }, update() {
        this.paused || (this.children.sort((d, w) => (d.z ?? 0) - (w.z ?? 0)).forEach((d) => d.update()), this.trigger("update"));
      }, draw() {
        if (this.hidden) return;
        this.canvas && this.canvas.bind();
        let d = E.fixed;
        this.fixed && (E.fixed = true), le(), ne(this.pos), He(this.scale), se(this.angle);
        let w = this.children.sort((A, D) => (A.z ?? 0) - (D.z ?? 0));
        if (this.mask) {
          let A = { intersect: $e, subtract: kt }[this.mask];
          if (!A) throw new Error(`Invalid mask func: "${this.mask}"`);
          A(() => {
            w.forEach((D) => D.draw());
          }, () => {
            this.trigger("draw");
          });
        } else this.trigger("draw"), w.forEach((A) => A.draw());
        ae(), E.fixed = d, this.canvas && this.canvas.unbind();
      }, drawInspect() {
        this.hidden || (le(), ne(this.pos), He(this.scale), se(this.angle), this.children.sort((d, w) => (d.z ?? 0) - (w.z ?? 0)).forEach((d) => d.drawInspect()), this.trigger("drawInspect"), ae());
      }, use(d) {
        if (!d) return;
        if (typeof d == "string") return this.use({ id: d });
        let w = [];
        d.id && (this.unuse(d.id), s[d.id] = [], w = s[d.id], r.set(d.id, d));
        for (let D in d) {
          if (Ji.has(D)) continue;
          let N = Object.getOwnPropertyDescriptor(d, D);
          if (typeof N.value == "function" && (d[D] = d[D].bind(this)), N.set && Object.defineProperty(d, D, { set: N.set.bind(this) }), N.get && Object.defineProperty(d, D, { get: N.get.bind(this) }), Qi.has(D)) {
            let _ = D === "add" ? () => {
              h = i((M) => w.push(M), "onCurCompCleanup"), d[D](), h = null;
            } : d[D];
            w.push(this.on(D, _).cancel);
          } else if (this[D] === void 0) Object.defineProperty(this, D, { get: () => d[D], set: (_) => d[D] = _, configurable: true, enumerable: true }), w.push(() => delete this[D]);
          else throw new Error(`Duplicate component property: "${D}"`);
        }
        let A = i(() => {
          if (d.require) {
            for (let D of d.require) if (!this.c(D)) throw new Error(`Component "${d.id}" requires component "${D}"`);
          }
        }, "checkDeps");
        d.destroy && w.push(d.destroy.bind(this)), this.exists() ? (A(), d.add && (h = i((D) => w.push(D), "onCurCompCleanup"), d.add.call(this), h = null)) : d.require && w.push(this.on("add", A).cancel);
      }, unuse(d) {
        s[d] && (s[d].forEach((w) => w()), delete s[d]), r.has(d) && r.delete(d);
      }, c(d) {
        return r.get(d);
      }, get(d, w = {}) {
        let A = w.recursive ? this.children.flatMap(i(function D(N) {
          return [N, ...N.children.flatMap(D)];
        }, "recurse")) : this.children;
        if (A = A.filter((D) => d ? D.is(d) : true), w.liveUpdate) {
          let D = i((_) => w.recursive ? this.isAncestorOf(_) : _.parent === this, "isChild"), N = [];
          N.push(En((_) => {
            D(_) && _.is(d) && A.push(_);
          })), N.push(ir((_) => {
            if (D(_) && _.is(d)) {
              let M = A.findIndex((O) => O.id === _.id);
              M !== -1 && A.splice(M, 1);
            }
          })), this.onDestroy(() => {
            for (let _ of N) _.cancel();
          });
        }
        return A;
      }, isAncestorOf(d) {
        return d.parent ? d.parent === this || this.isAncestorOf(d.parent) : false;
      }, exists() {
        return C.root.isAncestorOf(this);
      }, is(d) {
        if (d === "*") return true;
        if (Array.isArray(d)) {
          for (let w of d) if (!this.c(w)) return false;
          return true;
        } else return this.c(d) != null;
      }, on(d, w) {
        let A = u.on(d, w.bind(this));
        return h && h(() => A.cancel()), A;
      }, trigger(d, ...w) {
        u.trigger(d, ...w), C.objEvents.trigger(d, this, ...w);
      }, destroy() {
        this.parent && this.parent.remove(this);
      }, inspect() {
        let d = {};
        for (let [w, A] of r) d[w] = A.inspect ? A.inspect() : null;
        return d;
      }, onAdd(d) {
        return this.on("add", d);
      }, onUpdate(d) {
        return this.on("update", d);
      }, onDraw(d) {
        return this.on("draw", d);
      }, onDestroy(d) {
        return this.on("destroy", d);
      }, clearEvents() {
        u.clear();
      } }, p = ["onKeyPress", "onKeyPressRepeat", "onKeyDown", "onKeyRelease", "onMousePress", "onMouseDown", "onMouseRelease", "onMouseMove", "onCharInput", "onMouseMove", "onTouchStart", "onTouchMove", "onTouchEnd", "onScroll", "onGamepadButtonPress", "onGamepadButtonDown", "onGamepadButtonRelease", "onGamepadStick"];
      for (let d of p) b[d] = (...w) => {
        let A = y[d](...w);
        return a.push(A), b.onDestroy(() => A.cancel()), A;
      };
      for (let d of t) b.use(d);
      return b;
    }
    i(Un, "make");
    function ze(t, r, s) {
      return C.objEvents[t] || (C.objEvents[t] = new Ut()), C.objEvents.on(t, (u, ...a) => {
        u.is(r) && s(u, ...a);
      });
    }
    i(ze, "on");
    let as = Ee((t) => {
      let r = gt([{ update: t }]);
      return { get paused() {
        return r.paused;
      }, set paused(s) {
        r.paused = s;
      }, cancel: () => r.destroy() };
    }, (t, r) => ze("update", t, r)), us = Ee((t) => {
      let r = gt([{ draw: t }]);
      return { get paused() {
        return r.hidden;
      }, set paused(s) {
        r.hidden = s;
      }, cancel: () => r.destroy() };
    }, (t, r) => ze("draw", t, r)), En = Ee((t) => C.events.on("add", t), (t, r) => ze("add", t, r)), ir = Ee((t) => C.events.on("destroy", t), (t, r) => ze("destroy", t, r));
    function cs(t, r, s) {
      return ze("collide", t, (u, a, h) => a.is(r) && s(u, a, h));
    }
    i(cs, "onCollide");
    function hs(t, r, s) {
      return ze("collideUpdate", t, (u, a, h) => a.is(r) && s(u, a, h));
    }
    i(hs, "onCollideUpdate");
    function ls(t, r, s) {
      return ze("collideEnd", t, (u, a, h) => a.is(r) && s(u, a, h));
    }
    i(ls, "onCollideEnd");
    function Ht(t, r) {
      On(t, { recursive: true }).forEach(r), En(t, r);
    }
    i(Ht, "forAllCurrentAndFuture");
    let ds = Ee((t) => y.onMousePress(t), (t, r) => {
      let s = [];
      return Ht(t, (u) => {
        if (!u.area) throw new Error("onClick() requires the object to have area() component");
        s.push(u.onClick(() => r(u)));
      }), ke.join(s);
    });
    function fs(t, r) {
      let s = [];
      return Ht(t, (u) => {
        if (!u.area) throw new Error("onHover() requires the object to have area() component");
        s.push(u.onHover(() => r(u)));
      }), ke.join(s);
    }
    i(fs, "onHover");
    function ms(t, r) {
      let s = [];
      return Ht(t, (u) => {
        if (!u.area) throw new Error("onHoverUpdate() requires the object to have area() component");
        s.push(u.onHoverUpdate(() => r(u)));
      }), ke.join(s);
    }
    i(ms, "onHoverUpdate");
    function ps(t, r) {
      let s = [];
      return Ht(t, (u) => {
        if (!u.area) throw new Error("onHoverEnd() requires the object to have area() component");
        s.push(u.onHoverEnd(() => r(u)));
      }), ke.join(s);
    }
    i(ps, "onHoverEnd");
    function gs(t) {
      C.gravity = t;
    }
    i(gs, "setGravity");
    function ws() {
      return C.gravity;
    }
    i(ws, "getGravity");
    function bs(...t) {
      t.length === 1 || t.length === 2 ? (E.bgColor = J(t[0]), t[1] && (E.bgAlpha = t[1])) : (t.length === 3 || t.length === 4) && (E.bgColor = J(t[0], t[1], t[2]), t[3] && (E.bgAlpha = t[3])), S.clearColor(E.bgColor.r / 255, E.bgColor.g / 255, E.bgColor.b / 255, E.bgAlpha);
    }
    i(bs, "setBackground");
    function vs() {
      return E.bgColor.clone();
    }
    i(vs, "getBackground");
    function qt(...t) {
      return { id: "pos", pos: T(...t), moveBy(...r) {
        this.pos = this.pos.add(T(...r));
      }, move(...r) {
        this.moveBy(T(...r).scale(Me()));
      }, moveTo(...r) {
        if (typeof r[0] == "number" && typeof r[1] == "number") return this.moveTo(T(r[0], r[1]), r[2]);
        let s = r[0], u = r[1];
        if (u === void 0) {
          this.pos = T(s);
          return;
        }
        let a = s.sub(this.pos);
        if (a.len() <= u * Me()) {
          this.pos = T(s);
          return;
        }
        this.move(a.unit().scale(u));
      }, worldPos() {
        return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
      }, screenPos() {
        let r = this.worldPos();
        return pt(this) ? r : rr(r);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }, drawInspect() {
        L({ color: J(255, 0, 0), radius: 4 / De() });
      } };
    }
    i(qt, "pos");
    function $t(...t) {
      return t.length === 0 ? $t(1) : { id: "scale", scale: T(...t), scaleTo(...r) {
        this.scale = T(...r);
      }, scaleBy(...r) {
        this.scale.scale(T(...r));
      }, inspect() {
        return `(${mt(this.scale.x, 2)}, ${mt(this.scale.y, 2)})`;
      } };
    }
    i($t, "scale");
    function ys(t) {
      return { id: "rotate", angle: t ?? 0, rotateBy(r) {
        this.angle += r;
      }, rotateTo(r) {
        this.angle = r;
      }, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    i(ys, "rotate");
    function xs(...t) {
      return { id: "color", color: J(...t), inspect() {
        return this.color.toString();
      } };
    }
    i(xs, "color");
    function mt(t, r) {
      return Number(t.toFixed(r));
    }
    i(mt, "toFixed");
    function Us(t) {
      return { id: "opacity", opacity: t ?? 1, inspect() {
        return `${mt(this.opacity, 1)}`;
      }, fadeOut(r = 1, s = Ct.linear) {
        return Rn(this.opacity, 0, r, (u) => this.opacity = u, s);
      } };
    }
    i(Us, "opacity");
    function Sn(t) {
      if (!t) throw new Error("Please define an anchor");
      return { id: "anchor", anchor: t, inspect() {
        return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
      } };
    }
    i(Sn, "anchor");
    function Es(t) {
      return { id: "z", z: t, inspect() {
        return `${this.z}`;
      } };
    }
    i(Es, "z");
    function Ss(t, r) {
      return { id: "follow", require: ["pos"], follow: { obj: t, offset: r ?? T(0) }, add() {
        t.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        t.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    i(Ss, "follow");
    function Cs(t, r) {
      let s = typeof t == "number" ? v.fromAngle(t) : t.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(s.scale(r));
      } };
    }
    i(Cs, "move");
    let As = 200;
    function Ts(t = {}) {
      let r = t.distance ?? As, s = false;
      return { id: "offscreen", require: ["pos"], isOffScreen() {
        let u = this.screenPos(), a = new de(T(0), we(), xe());
        return !vt(a, u) && a.sdistToPoint(u) > r * r;
      }, onExitScreen(u) {
        return this.on("exitView", u);
      }, onEnterScreen(u) {
        return this.on("enterView", u);
      }, update() {
        this.isOffScreen() ? (s || (this.trigger("exitView"), s = true), t.hide && (this.hidden = true), t.pause && (this.paused = true), t.destroy && this.destroy()) : (s && (this.trigger("enterView"), s = false), t.hide && (this.hidden = false), t.pause && (this.paused = false));
      } };
    }
    i(Ts, "offscreen");
    function pt(t) {
      return t.fixed ? true : t.parent ? pt(t.parent) : false;
    }
    i(pt, "isFixed");
    function Os(t = {}) {
      let r = {}, s = /* @__PURE__ */ new Set();
      return { id: "area", collisionIgnore: t.collisionIgnore ?? [], add() {
        this.area.cursor && this.onHover(() => y.setCursor(this.area.cursor)), this.onCollideUpdate((u, a) => {
          r[u.id] || this.trigger("collide", u, a), r[u.id] = a, s.add(u.id);
        });
      }, update() {
        for (let u in r) s.has(Number(u)) || (this.trigger("collideEnd", r[u].target), delete r[u]);
        s.clear();
      }, drawInspect() {
        let u = this.localArea();
        le(), He(this.area.scale), ne(this.area.offset);
        let a = { outline: { width: 4 / De(), color: J(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: pt(this) };
        u instanceof de ? ge({ ...a, pos: u.pos, width: u.width, height: u.height }) : u instanceof Ke ? z2({ ...a, pts: u.pts }) : u instanceof yt && L({ ...a, pos: u.center, radius: u.radius }), ae();
      }, area: { shape: t.shape ?? null, scale: t.scale ? T(t.scale) : T(1), offset: t.offset ?? T(0), cursor: t.cursor ?? null }, isClicked() {
        return y.isMousePressed() && this.isHovering();
      }, isHovering() {
        let u = pt(this) ? Nt() : sr(Nt());
        return this.hasPoint(u);
      }, checkCollision(u) {
        return r[u.id] ?? null;
      }, getCollisions() {
        return Object.values(r);
      }, isColliding(u) {
        return !!r[u.id];
      }, isOverlapping(u) {
        let a = r[u.id];
        return a && a.hasOverlap();
      }, onClick(u) {
        let a = y.onMousePress("left", () => {
          this.isHovering() && u();
        });
        return this.onDestroy(() => a.cancel()), a;
      }, onHover(u) {
        let a = false;
        return this.onUpdate(() => {
          a ? a = this.isHovering() : this.isHovering() && (a = true, u());
        });
      }, onHoverUpdate(u) {
        return this.onUpdate(() => {
          this.isHovering() && u();
        });
      }, onHoverEnd(u) {
        let a = false;
        return this.onUpdate(() => {
          a ? this.isHovering() || (a = false, u()) : a = this.isHovering();
        });
      }, onCollide(u, a) {
        if (typeof u == "function" && a === void 0) return this.on("collide", u);
        if (typeof u == "string") return this.onCollide((h, f) => {
          h.is(u) && a(h, f);
        });
      }, onCollideUpdate(u, a) {
        if (typeof u == "function" && a === void 0) return this.on("collideUpdate", u);
        if (typeof u == "string") return this.on("collideUpdate", (h, f) => h.is(u) && a(h, f));
      }, onCollideEnd(u, a) {
        if (typeof u == "function" && a === void 0) return this.on("collideEnd", u);
        if (typeof u == "string") return this.on("collideEnd", (h) => h.is(u) && a(h));
      }, hasPoint(u) {
        return _n(this.worldArea(), u);
      }, resolveCollision(u) {
        let a = this.checkCollision(u);
        a && !a.resolved && (this.pos = this.pos.add(a.displacement), a.resolved = true);
      }, localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      }, worldArea() {
        let u = this.localArea();
        if (!(u instanceof Ke || u instanceof de)) throw new Error("Only support polygon and rect shapes for now");
        let a = this.transform.clone().scale(T(this.area.scale ?? 1)).translate(this.area.offset);
        if (u instanceof de) {
          let h = ut(this.anchor || tn).add(1, 1).scale(-0.5).scale(u.width, u.height);
          a.translate(h);
        }
        return u.transform(a);
      }, screenArea() {
        let u = this.worldArea();
        return pt(this) ? u : u.transform(C.cam.transform);
      } };
    }
    i(Os, "area");
    function Qe(t) {
      return { color: t.color, opacity: t.opacity, anchor: t.anchor, outline: t.outline, shader: t.shader, uniform: t.uniform };
    }
    i(Qe, "getRenderProps");
    function Cn(t, r = {}) {
      let s = null, u = null, a = null, h = new be();
      if (!t) throw new Error("Please pass the resource name or data to sprite()");
      let f = i((b, p, d, w) => {
        let A = T(1, 1);
        return d && w ? (A.x = d / (b.width * p.w), A.y = w / (b.height * p.h)) : d ? (A.x = d / (b.width * p.w), A.y = A.x) : w && (A.y = w / (b.height * p.h), A.x = A.y), A;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: r.frame || 0, quad: r.quad || new oe(0, 0, 1, 1), animSpeed: r.animSpeed ?? 1, flipX: r.flipX ?? false, flipY: r.flipY ?? false, draw() {
        if (!s) return;
        let b = s.frames[this.frame ?? 0];
        if (!b) throw new Error(`Frame not found: ${this.frame ?? 0}`);
        if (s.slice9) {
          let { left: p, right: d, top: w, bottom: A } = s.slice9, D = s.tex.width * b.w, N = s.tex.height * b.h, _ = this.width - p - d, M = this.height - w - A, O = p / D, ie = d / D, Z = 1 - O - ie, H = w / N, V = A / N, fe = 1 - H - V, U = [ce(0, 0, O, H), ce(O, 0, Z, H), ce(O + Z, 0, ie, H), ce(0, H, O, fe), ce(O, H, Z, fe), ce(O + Z, H, ie, fe), ce(0, H + fe, O, V), ce(O, H + fe, Z, V), ce(O + Z, H + fe, ie, V), ce(0, 0, p, w), ce(p, 0, _, w), ce(p + _, 0, d, w), ce(0, w, p, M), ce(p, w, _, M), ce(p + _, w, d, M), ce(0, w + M, p, A), ce(p, w + M, _, A), ce(p + _, w + M, d, A)];
          for (let G = 0; G < 9; G++) {
            let B = U[G], F = U[G + 9];
            We(Object.assign(Qe(this), { pos: F.pos(), tex: s.tex, quad: b.scale(B), flipX: this.flipX, flipY: this.flipY, tiled: r.tiled, width: F.w, height: F.h }));
          }
        } else We(Object.assign(Qe(this), { tex: s.tex, quad: b.scale(this.quad ?? new oe(0, 0, 1, 1)), flipX: this.flipX, flipY: this.flipY, tiled: r.tiled, width: this.width, height: this.height }));
      }, add() {
        let b = i((d) => {
          let w = d.frames[0].clone();
          r.quad && (w = w.scale(r.quad));
          let A = f(d.tex, w, r.width, r.height);
          this.width = d.tex.width * w.w * A.x, this.height = d.tex.height * w.h * A.y, r.anim && this.play(r.anim), s = d, h.trigger(s);
        }, "setSpriteData"), p = ct(t);
        p ? p.onLoad(b) : Tn(() => b(ct(t).data));
      }, update() {
        if (!u) return;
        let b = s.anims[u.name];
        if (typeof b == "number") {
          this.frame = b;
          return;
        }
        if (b.speed === 0) throw new Error("Sprite anim speed cannot be 0");
        u.timer += Me() * this.animSpeed, u.timer >= 1 / u.speed && (u.timer = 0, this.frame += a, (this.frame < Math.min(b.from, b.to) || this.frame > Math.max(b.from, b.to)) && (u.loop ? u.pingpong ? (this.frame -= a, a *= -1, this.frame += a) : this.frame = b.from : (this.frame = b.to, u.onEnd(), this.stop())));
      }, play(b, p = {}) {
        if (!s) {
          h.add(() => this.play(b, p));
          return;
        }
        let d = s.anims[b];
        if (d === void 0) throw new Error(`Anim not found: ${b}`);
        u && this.stop(), u = typeof d == "number" ? { name: b, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: b, timer: 0, loop: p.loop ?? d.loop ?? false, pingpong: p.pingpong ?? d.pingpong ?? false, speed: p.speed ?? d.speed ?? 10, onEnd: p.onEnd ?? (() => {
        }) }, a = typeof d == "number" ? null : d.from < d.to ? 1 : -1, this.frame = typeof d == "number" ? d : d.from, this.trigger("animStart", b);
      }, stop() {
        if (!u) return;
        let b = u.name;
        u = null, this.trigger("animEnd", b);
      }, numFrames() {
        return s?.frames.length ?? 0;
      }, curAnim() {
        return u?.name;
      }, onAnimEnd(b) {
        return this.on("animEnd", b);
      }, onAnimStart(b) {
        return this.on("animStart", b);
      }, renderArea() {
        return new de(T(0), this.width, this.height);
      }, inspect() {
        if (typeof t == "string") return `"${t}"`;
      } };
    }
    i(Cn, "sprite");
    function Rs(t, r = {}) {
      function s(a) {
        let h = Xe(Object.assign(Qe(a), { text: a.text + "", size: a.textSize, font: a.font, width: r.width && a.width, align: a.align, letterSpacing: a.letterSpacing, lineSpacing: a.lineSpacing, transform: a.textTransform, styles: a.textStyles }));
        return r.width || (a.width = h.width / (a.scale?.x || 1)), a.height = h.height / (a.scale?.y || 1), h;
      }
      i(s, "update");
      let u = { id: "text", set text(a) {
        t = a, s(this);
      }, get text() {
        return t;
      }, textSize: r.size ?? ji, font: r.font, width: r.width ?? 0, height: 0, align: r.align, lineSpacing: r.lineSpacing, letterSpacing: r.letterSpacing, textTransform: r.transform, textStyles: r.styles, add() {
        Tn(() => s(this));
      }, draw() {
        Je(s(this));
      }, renderArea() {
        return new de(T(0), this.width, this.height);
      } };
      return s(u), u;
    }
    i(Rs, "text");
    function Ps(t, r = {}) {
      if (t.length < 3) throw new Error(`Polygon's need more than two points, ${t.length} points provided`);
      return { id: "polygon", pts: t, colors: r.colors, radius: r.radius, draw() {
        z2(Object.assign(Qe(this), { pts: this.pts, colors: this.colors, radius: this.radius, fill: r.fill }));
      }, renderArea() {
        return new Ke(this.pts);
      }, inspect() {
        return this.pts.map((s) => `[${s.x},${s.y}]`).join(",");
      } };
    }
    i(Ps, "polygon");
    function Ds(t, r, s = {}) {
      return { id: "rect", width: t, height: r, radius: s.radius || 0, draw() {
        ge(Object.assign(Qe(this), { width: this.width, height: this.height, radius: this.radius, fill: s.fill }));
      }, renderArea() {
        return new de(T(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    i(Ds, "rect");
    function Ms(t, r) {
      return { id: "rect", width: t, height: r, draw() {
        Be(Object.assign(Qe(this), { width: this.width, height: this.height }));
      }, renderArea() {
        return new de(T(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    i(Ms, "uvquad");
    function Gs(t, r = {}) {
      return { id: "circle", radius: t, draw() {
        L(Object.assign(Qe(this), { radius: this.radius, fill: r.fill }));
      }, renderArea() {
        return new de(new v(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    i(Gs, "circle");
    function Bs(t = 1, r = J(0, 0, 0)) {
      return { id: "outline", outline: { width: t, color: r } };
    }
    i(Bs, "outline");
    function An() {
      return { id: "timer", wait(t, r) {
        let s = [];
        r && s.push(r);
        let u = 0, a = this.onUpdate(() => {
          u += Me(), u >= t && (s.forEach((h) => h()), a.cancel());
        });
        return { get paused() {
          return a.paused;
        }, set paused(h) {
          a.paused = h;
        }, cancel: a.cancel, onEnd(h) {
          s.push(h);
        }, then(h) {
          return this.onEnd(h), this;
        } };
      }, loop(t, r) {
        let s = null, u = i(() => {
          s = this.wait(t, u), r();
        }, "newAction");
        return s = this.wait(0, u), { get paused() {
          return s.paused;
        }, set paused(a) {
          s.paused = a;
        }, cancel: () => s.cancel() };
      }, tween(t, r, s, u, a = Ct.linear) {
        let h = 0, f = [], b = this.onUpdate(() => {
          h += Me();
          let p = Math.min(h / s, 1);
          u(Ve(t, r, a(p))), p === 1 && (b.cancel(), u(r), f.forEach((d) => d()));
        });
        return { get paused() {
          return b.paused;
        }, set paused(p) {
          b.paused = p;
        }, onEnd(p) {
          f.push(p);
        }, then(p) {
          return this.onEnd(p), this;
        }, cancel() {
          b.cancel();
        }, finish() {
          b.cancel(), u(r), f.forEach((p) => p());
        } };
      } };
    }
    i(An, "timer");
    let Fs = 640, Is = 65536;
    function Ls(t = {}) {
      let r = null, s = null, u = false;
      return { id: "body", require: ["pos", "area"], vel: new v(0), jumpForce: t.jumpForce ?? Fs, gravityScale: t.gravityScale ?? 1, isStatic: t.isStatic ?? false, mass: t.mass ?? 1, add() {
        if (this.mass === 0) throw new Error("Can't set body mass to 0");
        this.onCollideUpdate((a, h) => {
          if (a.is("body") && !h.resolved && (this.trigger("beforePhysicsResolve", h), a.trigger("beforePhysicsResolve", h.reverse()), !h.resolved && !(this.isStatic && a.isStatic))) {
            if (!this.isStatic && !a.isStatic) {
              let f = this.mass + a.mass;
              this.pos = this.pos.add(h.displacement.scale(a.mass / f)), a.pos = a.pos.add(h.displacement.scale(-this.mass / f)), this.transform = jt(this), a.transform = jt(a);
            } else {
              let f = !this.isStatic && a.isStatic ? h : h.reverse();
              f.source.pos = f.source.pos.add(f.displacement), f.source.transform = jt(f.source);
            }
            h.resolved = true, this.trigger("physicsResolve", h), a.trigger("physicsResolve", h.reverse());
          }
        }), this.onPhysicsResolve((a) => {
          C.gravity && (a.isBottom() && this.isFalling() ? (this.vel.y = 0, r = a.target, s = a.target.pos, u ? u = false : this.trigger("ground", r)) : a.isTop() && this.isJumping() && (this.vel.y = 0, this.trigger("headbutt", a.target)));
        });
      }, update() {
        if (!C.gravity || this.isStatic) return;
        if (u && (r = null, s = null, this.trigger("fallOff"), u = false), r) if (!this.isColliding(r) || !r.exists() || !r.is("body")) u = true;
        else {
          !r.pos.eq(s) && t.stickToPlatform !== false && this.moveBy(r.pos.sub(s)), s = r.pos;
          return;
        }
        let a = this.vel.y;
        this.vel.y += C.gravity * this.gravityScale * Me(), this.vel.y = Math.min(this.vel.y, t.maxVelocity ?? Is), a < 0 && this.vel.y >= 0 && this.trigger("fall"), this.move(this.vel);
      }, onPhysicsResolve(a) {
        return this.on("physicsResolve", a);
      }, onBeforePhysicsResolve(a) {
        return this.on("beforePhysicsResolve", a);
      }, curPlatform() {
        return r;
      }, isGrounded() {
        return r !== null;
      }, isFalling() {
        return this.vel.y > 0;
      }, isJumping() {
        return this.vel.y < 0;
      }, jump(a) {
        r = null, s = null, this.vel.y = -a || -this.jumpForce;
      }, onGround(a) {
        return this.on("ground", a);
      }, onFall(a) {
        return this.on("fall", a);
      }, onFallOff(a) {
        return this.on("fallOff", a);
      }, onHeadbutt(a) {
        return this.on("headbutt", a);
      } };
    }
    i(Ls, "body");
    function Vs(t = 2) {
      let r = t;
      return { id: "doubleJump", require: ["body"], numJumps: t, add() {
        this.onGround(() => {
          r = this.numJumps;
        });
      }, doubleJump(s) {
        r <= 0 || (r < this.numJumps && this.trigger("doubleJump"), r--, this.jump(s));
      }, onDoubleJump(s) {
        return this.on("doubleJump", s);
      }, inspect() {
        return `${r}`;
      } };
    }
    i(Vs, "doubleJump");
    function _s(t, r) {
      return { id: "shader", shader: t, ...typeof r == "function" ? { uniform: r(), update() {
        this.uniform = r();
      } } : { uniform: r } };
    }
    i(_s, "shader");
    function ks() {
      return { id: "fixed", fixed: true };
    }
    i(ks, "fixed");
    function or(t) {
      return { id: "stay", stay: true, scenesToStay: t };
    }
    i(or, "stay");
    function Ns(t, r) {
      if (t == null) throw new Error("health() requires the initial amount of hp");
      return { id: "health", hurt(s = 1) {
        this.setHP(t - s), this.trigger("hurt", s);
      }, heal(s = 1) {
        let u = t;
        this.setHP(t + s), this.trigger("heal", t - u);
      }, hp() {
        return t;
      }, maxHP() {
        return r ?? null;
      }, setMaxHP(s) {
        r = s;
      }, setHP(s) {
        t = r ? Math.min(r, s) : s, t <= 0 && this.trigger("death");
      }, onHurt(s) {
        return this.on("hurt", s);
      }, onHeal(s) {
        return this.on("heal", s);
      }, onDeath(s) {
        return this.on("death", s);
      }, inspect() {
        return `${t}`;
      } };
    }
    i(Ns, "health");
    function js(t, r = {}) {
      if (t == null) throw new Error("lifespan() requires time");
      let s = r.fade ?? 0;
      return { id: "lifespan", async add() {
        await hr(t), s > 0 && this.opacity && await Rn(this.opacity, 0, s, (u) => this.opacity = u, Ct.linear), this.destroy();
      } };
    }
    i(js, "lifespan");
    function Hs(t, r, s) {
      if (!t) throw new Error("state() requires an initial state");
      let u = {};
      function a(p) {
        u[p] || (u[p] = { enter: new be(), end: new be(), update: new be(), draw: new be() });
      }
      i(a, "initStateEvents");
      function h(p, d, w) {
        return a(d), u[d][p].add(w);
      }
      i(h, "on");
      function f(p, d, ...w) {
        a(d), u[d][p].trigger(...w);
      }
      i(f, "trigger");
      let b = false;
      return { id: "state", state: t, enterState(p, ...d) {
        if (b = true, r && !r.includes(p)) throw new Error(`State not found: ${p}`);
        let w = this.state;
        if (s) {
          if (!s?.[w]) return;
          let A = typeof s[w] == "string" ? [s[w]] : s[w];
          if (!A.includes(p)) throw new Error(`Cannot transition state from "${w}" to "${p}". Available transitions: ${A.map((D) => `"${D}"`).join(", ")}`);
        }
        f("end", w, ...d), this.state = p, f("enter", p, ...d), f("enter", `${w} -> ${p}`, ...d);
      }, onStateTransition(p, d, w) {
        return h("enter", `${p} -> ${d}`, w);
      }, onStateEnter(p, d) {
        return h("enter", p, d);
      }, onStateUpdate(p, d) {
        return h("update", p, d);
      }, onStateDraw(p, d) {
        return h("draw", p, d);
      }, onStateEnd(p, d) {
        return h("end", p, d);
      }, update() {
        b || (f("enter", t), b = true), f("update", this.state);
      }, draw() {
        f("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    i(Hs, "state");
    function qs(t = 1) {
      let r = 0, s = false;
      return { require: ["opacity"], add() {
        this.opacity = 0;
      }, update() {
        s || (r += Me(), this.opacity = _e(r, 0, t, 0, 1), r >= t && (this.opacity = 1, s = true));
      } };
    }
    i(qs, "fadeIn");
    function $s(t = "intersect") {
      return { id: "mask", mask: t };
    }
    i($s, "mask");
    function zs(t) {
      return { add() {
        this.canvas = t;
      } };
    }
    i(zs, "drawon");
    function Tn(t) {
      k.loaded ? t() : C.events.on("load", t);
    }
    i(Tn, "onLoad");
    function Ks(t, r) {
      C.scenes[t] = r;
    }
    i(Ks, "scene");
    function Ys(t, ...r) {
      if (!C.scenes[t]) throw new Error(`Scene not found: ${t}`);
      C.events.onOnce("frameEnd", () => {
        C.events.trigger("sceneLeave", t), y.events.clear(), C.events.clear(), C.objEvents.clear(), [...C.root.children].forEach((s) => {
          (!s.stay || s.scenesToStay && !s.scenesToStay.includes(t)) && C.root.remove(s);
        }), C.root.clearEvents(), pr(), C.cam = { pos: null, scale: T(1), angle: 0, shake: 0, transform: new Ue() }, C.scenes[t](...r);
      });
    }
    i(Ys, "go");
    function Ws(t) {
      return C.events.on("sceneLeave", t);
    }
    i(Ws, "onSceneLeave");
    function Xs(t, r) {
      try {
        return JSON.parse(window.localStorage[t]);
      } catch {
        return r ? (ar(t, r), r) : null;
      }
    }
    i(Xs, "getData");
    function ar(t, r) {
      window.localStorage[t] = JSON.stringify(r);
    }
    i(ar, "setData");
    function ur(t, ...r) {
      let s = t(Ze), u;
      typeof s == "function" ? u = s(...r)(Ze) : u = s;
      for (let a in u) Ze[a] = u[a], n13.global !== false && (window[a] = u[a]);
      return Ze;
    }
    i(ur, "plug");
    function zt() {
      return T(we() / 2, xe() / 2);
    }
    i(zt, "center");
    let Js;
    ((O) => (O[O.None = 0] = "None", O[O.Left = 1] = "Left", O[O.Top = 2] = "Top", O[O.LeftTop = 3] = "LeftTop", O[O.Right = 4] = "Right", O[O.Horizontal = 5] = "Horizontal", O[O.RightTop = 6] = "RightTop", O[O.HorizontalTop = 7] = "HorizontalTop", O[O.Bottom = 8] = "Bottom", O[O.LeftBottom = 9] = "LeftBottom", O[O.Vertical = 10] = "Vertical", O[O.LeftVertical = 11] = "LeftVertical", O[O.RightBottom = 12] = "RightBottom", O[O.HorizontalBottom = 13] = "HorizontalBottom", O[O.RightVertical = 14] = "RightVertical", O[O.All = 15] = "All"))(Js ||= {});
    function cr(t = {}) {
      let r = T(0), s = t.isObstacle ?? false, u = t.cost ?? 0, a = t.edges ?? [], h = i(() => {
        let b = { left: 1, top: 2, right: 4, bottom: 8 };
        return a.map((p) => b[p] || 0).reduce((p, d) => p | d, 0);
      }, "getEdgeMask"), f = h();
      return { id: "tile", tilePosOffset: t.offset ?? T(0), set tilePos(b) {
        let p = this.getLevel();
        r = b.clone(), this.pos = T(this.tilePos.x * p.tileWidth(), this.tilePos.y * p.tileHeight()).add(this.tilePosOffset);
      }, get tilePos() {
        return r;
      }, set isObstacle(b) {
        s !== b && (s = b, this.getLevel().invalidateNavigationMap());
      }, get isObstacle() {
        return s;
      }, set cost(b) {
        u !== b && (u = b, this.getLevel().invalidateNavigationMap());
      }, get cost() {
        return u;
      }, set edges(b) {
        a = b, f = h(), this.getLevel().invalidateNavigationMap();
      }, get edges() {
        return a;
      }, get edgeMask() {
        return f;
      }, getLevel() {
        return this.parent;
      }, moveLeft() {
        this.tilePos = this.tilePos.add(T(-1, 0));
      }, moveRight() {
        this.tilePos = this.tilePos.add(T(1, 0));
      }, moveUp() {
        this.tilePos = this.tilePos.add(T(0, -1));
      }, moveDown() {
        this.tilePos = this.tilePos.add(T(0, 1));
      } };
    }
    i(cr, "tile");
    function Qs(t, r) {
      if (!r.tileWidth || !r.tileHeight) throw new Error("Must provide tileWidth and tileHeight.");
      let s = gt([qt(r.pos ?? T(0))]), u = t.length, a = 0, h = null, f = null, b = null, p = null, d = i((U) => U.x + U.y * a, "tile2Hash"), w = i((U) => T(Math.floor(U % a), Math.floor(U / a)), "hash2Tile"), A = i(() => {
        h = [];
        for (let U of s.children) D(U);
      }, "createSpatialMap"), D = i((U) => {
        let G = d(U.tilePos);
        h[G] ? h[G].push(U) : h[G] = [U];
      }, "insertIntoSpatialMap"), N = i((U) => {
        let G = d(U.tilePos);
        if (h[G]) {
          let B = h[G].indexOf(U);
          B >= 0 && h[G].splice(B, 1);
        }
      }, "removeFromSpatialMap"), _ = i(() => {
        let U = false;
        for (let G of s.children) {
          let B = s.pos2Tile(G.pos);
          (G.tilePos.x != B.x || G.tilePos.y != B.y) && (U = true, N(G), G.tilePos.x = B.x, G.tilePos.y = B.y, D(G));
        }
        U && s.trigger("spatial_map_changed");
      }, "updateSpatialMap"), M = i(() => {
        let U = s.getSpatialMap(), G = s.numRows() * s.numColumns();
        f ? f.length = G : f = new Array(G), f.fill(1, 0, G);
        for (let B = 0; B < U.length; B++) {
          let F = U[B];
          if (F) {
            let Y = 0;
            for (let ee of F) if (ee.isObstacle) {
              Y = 1 / 0;
              break;
            } else Y += ee.cost;
            f[B] = Y || 1;
          }
        }
      }, "createCostMap"), O = i(() => {
        let U = s.getSpatialMap(), G = s.numRows() * s.numColumns();
        b ? b.length = G : b = new Array(G), b.fill(15, 0, G);
        for (let B = 0; B < U.length; B++) {
          let F = U[B];
          if (F) {
            let Y = F.length, ee = 15;
            for (let ue = 0; ue < Y; ue++) ee |= F[ue].edgeMask;
            b[B] = ee;
          }
        }
      }, "createEdgeMap"), ie = i(() => {
        let U = s.numRows() * s.numColumns(), G = i((F, Y) => {
          let ee = [];
          for (ee.push(F); ee.length > 0; ) {
            let ue = ee.pop();
            V(ue).forEach((me) => {
              p[me] < 0 && (p[me] = Y, ee.push(me));
            });
          }
        }, "traverse");
        p ? p.length = U : p = new Array(U), p.fill(-1, 0, U);
        let B = 0;
        for (let F = 0; F < f.length; F++) {
          if (p[F] >= 0) {
            B++;
            continue;
          }
          G(F, B), B++;
        }
      }, "createConnectivityMap"), Z = i((U, G) => f[G], "getCost"), H = i((U, G) => {
        let B = w(U), F = w(G);
        return B.dist(F);
      }, "getHeuristic"), V = i((U, G) => {
        let B = [], F = Math.floor(U % a), Y = F > 0 && b[U] & 1 && f[U - 1] !== 1 / 0, ee = U >= a && b[U] & 2 && f[U - a] !== 1 / 0, ue = F < a - 1 && b[U] & 4 && f[U + 1] !== 1 / 0, me = U < a * u - a - 1 && b[U] & 8 && f[U + a] !== 1 / 0;
        return G ? (Y && (ee && B.push(U - a - 1), B.push(U - 1), me && B.push(U + a - 1)), ee && B.push(U - a), ue && (ee && B.push(U - a + 1), B.push(U + 1), me && B.push(U + a + 1)), me && B.push(U + a)) : (Y && B.push(U - 1), ee && B.push(U - a), ue && B.push(U + 1), me && B.push(U + a)), B;
      }, "getNeighbours"), fe = { id: "level", tileWidth() {
        return r.tileWidth;
      }, tileHeight() {
        return r.tileHeight;
      }, spawn(U, ...G) {
        let B = T(...G), F = (() => {
          if (typeof U == "string") {
            if (r.tiles[U]) {
              if (typeof r.tiles[U] != "function") throw new Error("Level symbol def must be a function returning a component list");
              return r.tiles[U](B);
            } else if (r.wildcardTile) return r.wildcardTile(U, B);
          } else {
            if (Array.isArray(U)) return U;
            throw new Error("Expected a symbol or a component list");
          }
        })();
        if (!F) return null;
        let Y = false, ee = false;
        for (let me of F) me.id === "tile" && (ee = true), me.id === "pos" && (Y = true);
        Y || F.push(qt()), ee || F.push(cr());
        let ue = s.add(F);
        return Y && (ue.tilePosOffset = ue.pos.clone()), ue.tilePos = B, h && (D(ue), this.trigger("spatial_map_changed"), this.trigger("navigation_map_invalid")), ue;
      }, numColumns() {
        return a;
      }, numRows() {
        return u;
      }, levelWidth() {
        return a * this.tileWidth();
      }, levelHeight() {
        return u * this.tileHeight();
      }, tile2Pos(...U) {
        return T(...U).scale(this.tileWidth(), this.tileHeight());
      }, pos2Tile(...U) {
        let G = T(...U);
        return T(Math.floor(G.x / this.tileWidth()), Math.floor(G.y / this.tileHeight()));
      }, getSpatialMap() {
        return h || A(), h;
      }, onSpatialMapChanged(U) {
        return this.on("spatial_map_changed", U);
      }, onNavigationMapInvalid(U) {
        return this.on("navigation_map_invalid", U);
      }, getAt(U) {
        h || A();
        let G = d(U);
        return h[G] || [];
      }, update() {
        h && _();
      }, invalidateNavigationMap() {
        f = null, b = null, p = null;
      }, onNavigationMapChanged(U) {
        return this.on("navigation_map_changed", U);
      }, getTilePath(U, G, B = {}) {
        if (f || M(), b || O(), p || ie(), U.x < 0 || U.x >= a || U.y < 0 || U.y >= u || G.x < 0 || G.x >= a || G.y < 0 || G.y >= u) return null;
        let F = d(U), Y = d(G);
        if (f[Y] === 1 / 0) return null;
        if (F === Y) return [];
        if (p[F] != -1 && p[F] !== p[Y]) return null;
        let ee = new Yt((Fe, Mn) => Fe.cost < Mn.cost);
        ee.insert({ cost: 0, node: F });
        let ue = /* @__PURE__ */ new Map();
        ue.set(F, F);
        let me = /* @__PURE__ */ new Map();
        for (me.set(F, 0); ee.length !== 0; ) {
          let Fe = ee.remove()?.node;
          if (Fe === Y) break;
          let Mn = V(Fe, B.allowDiagonals);
          for (let et of Mn) {
            let Gn = (me.get(Fe) || 0) + Z(Fe, et) + H(et, Y);
            (!me.has(et) || Gn < me.get(et)) && (me.set(et, Gn), ee.insert({ cost: Gn, node: et }), ue.set(et, Fe));
          }
        }
        let Dn = [], wt = Y, vi = w(wt);
        for (Dn.push(vi); wt !== F; ) {
          wt = ue.get(wt);
          let Fe = w(wt);
          Dn.push(Fe);
        }
        return Dn.reverse();
      }, getPath(U, G, B = {}) {
        let F = this.tileWidth(), Y = this.tileHeight(), ee = this.getTilePath(this.pos2Tile(U), this.pos2Tile(G), B);
        return ee ? [U, ...ee.slice(1, -1).map((ue) => ue.scale(F, Y).add(F / 2, Y / 2)), G] : null;
      } };
      return s.use(fe), s.onNavigationMapInvalid(() => {
        s.invalidateNavigationMap(), s.trigger("navigation_map_changed");
      }), t.forEach((U, G) => {
        let B = U.split("");
        a = Math.max(B.length, a), B.forEach((F, Y) => {
          s.spawn(F, T(Y, G));
        });
      }), s;
    }
    i(Qs, "addLevel");
    function Zs(t = {}) {
      let r = null, s = null, u = null, a = null;
      return { id: "agent", require: ["pos", "tile"], agentSpeed: t.speed ?? 100, allowDiagonals: t.allowDiagonals ?? true, getDistanceToTarget() {
        return r ? this.pos.dist(r) : 0;
      }, getNextLocation() {
        return s && u ? s[u] : null;
      }, getPath() {
        return s ? s.slice() : null;
      }, getTarget() {
        return r;
      }, isNavigationFinished() {
        return s ? u === null : true;
      }, isTargetReachable() {
        return s !== null;
      }, isTargetReached() {
        return r ? this.pos.eq(r) : true;
      }, setTarget(h) {
        r = h, s = this.getLevel().getPath(this.pos, r, { allowDiagonals: this.allowDiagonals }), u = s ? 0 : null, s ? (a || (a = this.getLevel().onNavigationMapChanged(() => {
          s && u !== null && (s = this.getLevel().getPath(this.pos, r, { allowDiagonals: this.allowDiagonals }), u = s ? 0 : null, s ? this.trigger("navigation-next", this, s[u]) : this.trigger("navigation-ended", this));
        }), this.onDestroy(() => a.cancel())), this.trigger("navigation-started", this), this.trigger("navigation-next", this, s[u])) : this.trigger("navigation-ended", this);
      }, update() {
        if (s && u !== null) {
          if (this.pos.sdist(s[u]) < 2) if (u === s.length - 1) {
            this.pos = r.clone(), u = null, this.trigger("navigation-ended", this), this.trigger("target-reached", this);
            return;
          } else u++, this.trigger("navigation-next", this, s[u]);
          this.moveTo(s[u], this.agentSpeed);
        }
      }, onNavigationStarted(h) {
        return this.on("navigation-started", h);
      }, onNavigationNext(h) {
        return this.on("navigation-next", h);
      }, onNavigationEnded(h) {
        return this.on("navigation-ended", h);
      }, onTargetReached(h) {
        return this.on("target-reached", h);
      }, inspect() {
        return JSON.stringify({ target: JSON.stringify(r), path: JSON.stringify(s) });
      } };
    }
    i(Zs, "agent");
    function ei(t) {
      let r = y.canvas.captureStream(t), s = te.ctx.createMediaStreamDestination();
      te.masterNode.connect(s);
      let u = new MediaRecorder(r), a = [];
      return u.ondataavailable = (h) => {
        h.data.size > 0 && a.push(h.data);
      }, u.onerror = () => {
        te.masterNode.disconnect(s), r.getTracks().forEach((h) => h.stop());
      }, u.start(), { resume() {
        u.resume();
      }, pause() {
        u.pause();
      }, stop() {
        return u.stop(), te.masterNode.disconnect(s), r.getTracks().forEach((h) => h.stop()), new Promise((h) => {
          u.onstop = () => {
            h(new Blob(a, { type: "video/mp4" }));
          };
        });
      }, download(h = "kaboom.mp4") {
        this.stop().then((f) => Nn(h, f));
      } };
    }
    i(ei, "record");
    function ti() {
      return document.activeElement === y.canvas;
    }
    i(ti, "isFocused");
    function ni(t) {
      t.destroy();
    }
    i(ni, "destroy");
    let gt = C.root.add.bind(C.root), ri = C.root.readd.bind(C.root), si = C.root.removeAll.bind(C.root), On = C.root.get.bind(C.root), hr = C.root.wait.bind(C.root), ii = C.root.loop.bind(C.root), Rn = C.root.tween.bind(C.root);
    function lr(t = 2, r = 1) {
      let s = 0;
      return { require: ["scale"], update() {
        let u = Math.sin(s * t) * r;
        u < 0 && this.destroy(), this.scale = T(u), s += Me();
      } };
    }
    i(lr, "boom");
    let oi = Ye(null, qr), ai = Ye(null, $r);
    function ui(t, r = {}) {
      let s = gt([qt(t), or()]), u = (r.speed || 1) * 5, a = r.scale || 1;
      s.add([Cn(ai), $t(0), Sn("center"), lr(u, a), ...r.comps ?? []]);
      let h = s.add([Cn(oi), $t(0), Sn("center"), An(), ...r.comps ?? []]);
      return h.wait(0.4 / u, () => h.use(lr(u, a))), h.onDestroy(() => s.destroy()), s;
    }
    i(ui, "addKaboom");
    function dr() {
      C.root.update();
    }
    i(dr, "updateFrame");
    class Pn {
      static {
        i(this, "Collision");
      }
      source;
      target;
      displacement;
      resolved = false;
      constructor(r, s, u, a = false) {
        this.source = r, this.target = s, this.displacement = u, this.resolved = a;
      }
      reverse() {
        return new Pn(this.target, this.source, this.displacement.scale(-1), this.resolved);
      }
      hasOverlap() {
        return !this.displacement.isZero();
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolution() {
        this.resolved = true;
      }
    }
    function ci() {
      let t = {}, r = n13.hashGridSize || Hi, s = new Ue(), u = [];
      function a(h) {
        if (u.push(s.clone()), h.pos && s.translate(h.pos), h.scale && s.scale(h.scale), h.angle && s.rotate(h.angle), h.transform = s.clone(), h.c("area") && !h.paused) {
          let f = h, p = f.worldArea().bbox(), d = Math.floor(p.pos.x / r), w = Math.floor(p.pos.y / r), A = Math.ceil((p.pos.x + p.width) / r), D = Math.ceil((p.pos.y + p.height) / r), N = /* @__PURE__ */ new Set();
          for (let _ = d; _ <= A; _++) for (let M = w; M <= D; M++) if (!t[_]) t[_] = {}, t[_][M] = [f];
          else if (!t[_][M]) t[_][M] = [f];
          else {
            let O = t[_][M];
            e: for (let ie of O) {
              if (ie.paused || !ie.exists() || N.has(ie.id)) continue;
              for (let H of f.collisionIgnore) if (ie.is(H)) continue e;
              for (let H of ie.collisionIgnore) if (f.is(H)) continue e;
              let Z = Or(f.worldArea(), ie.worldArea());
              if (Z) {
                let H = new Pn(f, ie, Z);
                f.trigger("collideUpdate", ie, H);
                let V = H.reverse();
                V.resolved = H.resolved, ie.trigger("collideUpdate", f, V);
              }
              N.add(ie.id);
            }
            O.push(f);
          }
        }
        h.children.forEach(a), s = u.pop();
      }
      i(a, "checkObj"), a(C.root);
    }
    i(ci, "checkFrame");
    function hi() {
      let t = C.cam, r = v.fromAngle(xt(0, 360)).scale(t.shake);
      t.shake = Ve(t.shake, 0, 5 * Me()), t.transform = new Ue().translate(zt()).scale(t.scale).rotate(t.angle).translate((t.pos ?? zt()).scale(-1).add(r)), C.root.draw(), Pe();
    }
    i(hi, "drawFrame");
    function li() {
      let t = $();
      C.events.numListeners("loading") > 0 ? C.events.trigger("loading", t) : Ce(() => {
        let r = we() / 2, s = 24, u = T(we() / 2, xe() / 2).sub(T(r / 2, s / 2));
        ge({ pos: T(0), width: we(), height: xe(), color: J(0, 0, 0) }), ge({ pos: u, width: r, height: s, fill: false, outline: { width: 4 } }), ge({ pos: u, width: r * t, height: s });
      });
    }
    i(li, "drawLoadScreen");
    function fr(t, r) {
      Ce(() => {
        let s = T(8);
        le(), ne(t);
        let u = Xe({ text: r, font: nn, size: 16, pos: s, color: J(255, 255, 255), fixed: true }), a = u.width + s.x * 2, h = u.height + s.x * 2;
        t.x + a >= we() && ne(T(-a, 0)), t.y + h >= xe() && ne(T(0, -h)), ge({ width: a, height: h, color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), Je(u), ae();
      });
    }
    i(fr, "drawInspectText");
    function di() {
      if (re.inspect) {
        let t = null;
        for (let r of C.root.get("*", { recursive: true })) if (r.c("area") && r.isHovering()) {
          t = r;
          break;
        }
        if (C.root.drawInspect(), t) {
          let r = [], s = t.inspect();
          for (let u in s) s[u] ? r.push(`${u}: ${s[u]}`) : r.push(`${u}`);
          fr(ns(Nt()), r.join(`
`));
        }
        fr(T(8), `FPS: ${re.fps()}`);
      }
      re.paused && Ce(() => {
        le(), ne(we(), 0), ne(-8, 8);
        let t = 32;
        ge({ width: t, height: t, anchor: "topright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let r = 1; r <= 2; r++) ge({ width: 4, height: t * 0.6, anchor: "center", pos: T(-t / 3 * r, t * 0.5), color: J(255, 255, 255), radius: 2, fixed: true });
        ae();
      }), re.timeScale !== 1 && Ce(() => {
        le(), ne(we(), xe()), ne(-8, -8);
        let t = 8, r = Xe({ text: re.timeScale.toFixed(1), font: nn, size: 16, color: J(255, 255, 255), pos: T(-t), anchor: "botright", fixed: true });
        ge({ width: r.width + t * 2 + t * 4, height: r.height + t * 2, anchor: "botright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let s = 0; s < 2; s++) {
          let u = re.timeScale < 1;
          R({ p1: T(-r.width - t * (u ? 2 : 3.5), -t), p2: T(-r.width - t * (u ? 2 : 3.5), -t - r.height), p3: T(-r.width - t * (u ? 3.5 : 2), -t - r.height / 2), pos: T(-s * t * 1 + (u ? -t * 0.5 : 0), 0), color: J(255, 255, 255), fixed: true });
        }
        Je(r), ae();
      }), re.curRecording && Ce(() => {
        le(), ne(0, xe()), ne(24, -24), L({ radius: 12, color: J(255, 0, 0), opacity: In(0, 1, y.time() * 4), fixed: true }), ae();
      }), re.showLog && C.logs.length > 0 && Ce(() => {
        le(), ne(0, xe()), ne(8, -8);
        let t = 8, r = [];
        for (let u of C.logs) {
          let a = "", h = u.msg instanceof Error ? "error" : "info";
          a += `[time]${u.time.toFixed(2)}[/time]`, a += " ", a += `[${h}]${u.msg?.toString ? u.msg.toString() : u.msg}[/${h}]`, r.push(a);
        }
        C.logs = C.logs.filter((u) => y.time() - u.time < (n13.logTime || $i));
        let s = Xe({ text: r.join(`
`), font: nn, pos: T(t, -t), anchor: "botleft", size: 16, width: we() * 0.6, lineSpacing: t / 2, fixed: true, styles: { time: { color: J(127, 127, 127) }, info: { color: J(255, 255, 255) }, error: { color: J(255, 0, 127) } } });
        ge({ width: s.width + t * 2, height: s.height + t * 2, anchor: "botleft", color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), Je(s), ae();
      });
    }
    i(di, "drawDebug");
    function fi(t) {
      C.events.on("loading", t);
    }
    i(fi, "onLoading");
    function mi(t) {
      y.onResize(t);
    }
    i(mi, "onResize");
    function pi(t) {
      C.events.on("error", t);
    }
    i(pi, "onError");
    function gi(t) {
      console.error(t), te.ctx.suspend(), y.run(() => {
        dt(), Ce(() => {
          let u = we(), a = xe(), h = { size: 36, width: u - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: nn, fixed: true };
          ge({ width: u, height: a, color: J(0, 0, 255), fixed: true });
          let f = Xe({ ...h, text: "Error", pos: T(32), color: J(255, 128, 0), fixed: true });
          Je(f), tr({ ...h, text: t.message, pos: T(32, 32 + f.height + 16), fixed: true }), ae(), C.events.trigger("error", t);
        }), ft();
      });
    }
    i(gi, "handleErr");
    function wi(t) {
      X.push(t);
    }
    i(wi, "onCleanup");
    function bi() {
      C.events.onOnce("frameEnd", () => {
        y.quit(), S.clear(S.COLOR_BUFFER_BIT | S.DEPTH_BUFFER_BIT | S.STENCIL_BUFFER_BIT);
        let t = S.getParameter(S.MAX_TEXTURE_IMAGE_UNITS);
        for (let r = 0; r < t; r++) S.activeTexture(S.TEXTURE0 + r), S.bindTexture(S.TEXTURE_2D, null), S.bindTexture(S.TEXTURE_CUBE_MAP, null);
        S.bindBuffer(S.ARRAY_BUFFER, null), S.bindBuffer(S.ELEMENT_ARRAY_BUFFER, null), S.bindRenderbuffer(S.RENDERBUFFER, null), S.bindFramebuffer(S.FRAMEBUFFER, null), q.destroy(), X.forEach((r) => r());
      });
    }
    i(bi, "quit");
    let Kt = true;
    y.run(() => {
      try {
        k.loaded || $() === 1 && !Kt && (k.loaded = true, C.events.trigger("load")), !k.loaded && n13.loadingScreen !== false || Kt ? (dt(), li(), ft()) : (re.paused || dr(), ci(), dt(), hi(), n13.debug !== false && di(), ft()), Kt && (Kt = false), C.events.trigger("frameEnd");
      } catch (t) {
        gi(t);
      }
    });
    function mr() {
      let t = P, r = S.drawingBufferWidth / t, s = S.drawingBufferHeight / t;
      if (n13.letterbox) {
        if (!n13.width || !n13.height) throw new Error("Letterboxing requires width and height defined.");
        let u = r / s, a = n13.width / n13.height;
        if (u > a) {
          let h = s * a, f = (r - h) / 2;
          E.viewport = { x: f, y: 0, width: h, height: s };
        } else {
          let h = r / a, f = (s - h) / 2;
          E.viewport = { x: 0, y: f, width: r, height: h };
        }
        return;
      }
      if (n13.stretch && (!n13.width || !n13.height)) throw new Error("Stretching requires width and height defined.");
      E.viewport = { x: 0, y: 0, width: r, height: s };
    }
    i(mr, "updateViewport");
    function pr() {
      y.onHide(() => {
        n13.backgroundAudio || te.ctx.suspend();
      }), y.onShow(() => {
        !n13.backgroundAudio && !re.paused && te.ctx.resume();
      }), y.onResize(() => {
        if (y.isFullscreen()) return;
        let t = n13.width && n13.height;
        t && !n13.stretch && !n13.letterbox || (o.width = o.offsetWidth * P, o.height = o.offsetHeight * P, mr(), t || (E.frameBuffer.free(), E.frameBuffer = new rt(q, S.drawingBufferWidth, S.drawingBufferHeight), E.width = S.drawingBufferWidth / P, E.height = S.drawingBufferHeight / P));
      }), n13.debug !== false && (y.onKeyPress("f1", () => re.inspect = !re.inspect), y.onKeyPress("f2", () => re.clearLog()), y.onKeyPress("f8", () => re.paused = !re.paused), y.onKeyPress("f7", () => {
        re.timeScale = mt(Le(re.timeScale - 0.2, 0, 2), 1);
      }), y.onKeyPress("f9", () => {
        re.timeScale = mt(Le(re.timeScale + 0.2, 0, 2), 1);
      }), y.onKeyPress("f10", () => re.stepFrame())), n13.burp && y.onKeyPress("b", () => Lt());
    }
    i(pr, "initEvents"), mr(), pr();
    let Ze = { VERSION: ki, loadRoot: Te, loadProgress: $, loadSprite: Ye, loadSpriteAtlas: Ot, loadSound: ln, loadBitmapFont: on, loadFont: st, loadShader: cn, loadShaderURL: hn, loadAseprite: un, loadPedit: an, loadBean: dn, loadJSON: ye, load: Ae, getSprite: Pt, getSound: Dt, getFont: Mt, getBitmapFont: Gt, getShader: Bt, getAsset: fn, Asset: ve, SpriteData: K, SoundData: Q, width: we, height: xe, center: zt, dt: Me, time: y.time, screenshot: y.screenshot, record: ei, isFocused: ti, setCursor: y.setCursor, getCursor: y.getCursor, setCursorLocked: y.setCursorLocked, isCursorLocked: y.isCursorLocked, setFullscreen: y.setFullscreen, isFullscreen: y.isFullscreen, isTouchscreen: y.isTouchscreen, onLoad: Tn, onLoading: fi, onResize: mi, onGamepadConnect: y.onGamepadConnect, onGamepadDisconnect: y.onGamepadDisconnect, onError: pi, onCleanup: wi, camPos: rs, camScale: ss, camRot: is, shake: os, toScreen: rr, toWorld: sr, setGravity: gs, getGravity: ws, setBackground: bs, getBackground: vs, getGamepads: y.getGamepads, add: gt, make: Un, destroy: ni, destroyAll: si, get: On, readd: ri, pos: qt, scale: $t, rotate: ys, color: xs, opacity: Us, anchor: Sn, area: Os, sprite: Cn, text: Rs, polygon: Ps, rect: Ds, circle: Gs, uvquad: Ms, outline: Bs, body: Ls, doubleJump: Vs, shader: _s, timer: An, fixed: ks, stay: or, health: Ns, lifespan: js, z: Es, move: Cs, offscreen: Ts, follow: Ss, state: Hs, fadeIn: qs, mask: $s, drawon: zs, tile: cr, agent: Zs, on: ze, onUpdate: as, onDraw: us, onAdd: En, onDestroy: ir, onClick: ds, onCollide: cs, onCollideUpdate: hs, onCollideEnd: ls, onHover: fs, onHoverUpdate: ms, onHoverEnd: ps, onKeyDown: y.onKeyDown, onKeyPress: y.onKeyPress, onKeyPressRepeat: y.onKeyPressRepeat, onKeyRelease: y.onKeyRelease, onMouseDown: y.onMouseDown, onMousePress: y.onMousePress, onMouseRelease: y.onMouseRelease, onMouseMove: y.onMouseMove, onCharInput: y.onCharInput, onTouchStart: y.onTouchStart, onTouchMove: y.onTouchMove, onTouchEnd: y.onTouchEnd, onScroll: y.onScroll, onHide: y.onHide, onShow: y.onShow, onGamepadButtonDown: y.onGamepadButtonDown, onGamepadButtonPress: y.onGamepadButtonPress, onGamepadButtonRelease: y.onGamepadButtonRelease, onGamepadStick: y.onGamepadStick, mousePos: Nt, mouseDeltaPos: y.mouseDeltaPos, isKeyDown: y.isKeyDown, isKeyPressed: y.isKeyPressed, isKeyPressedRepeat: y.isKeyPressedRepeat, isKeyReleased: y.isKeyReleased, isMouseDown: y.isMouseDown, isMousePressed: y.isMousePressed, isMouseReleased: y.isMouseReleased, isMouseMoved: y.isMouseMoved, isGamepadButtonPressed: y.isGamepadButtonPressed, isGamepadButtonDown: y.isGamepadButtonDown, isGamepadButtonReleased: y.isGamepadButtonReleased, getGamepadStick: y.getGamepadStick, charInputted: y.charInputted, loop: ii, wait: hr, play: It, volume: gn, burp: Lt, audioCtx: te.ctx, Line: Ie, Rect: de, Circle: yt, Polygon: Ke, Vec2: v, Color: W, Mat4: Ue, Quad: oe, RNG: bt, rand: xt, randi: Ln, randSeed: yr, vec2: T, rgb: J, hsl2rgb: vr, quad: ce, choose: Ur, chance: xr, lerp: Ve, tween: Rn, easings: Ct, map: _e, mapc: br, wave: In, deg2rad: Ge, rad2deg: ot, clamp: Le, testLineLine: it, testRectRect: Er, testRectLine: Sr, testRectPoint: vt, testCirclePolygon: Tr, testLinePoint: Cr, testLineCircle: Vn, drawSprite: yn, drawText: tr, formatText: Xe, drawRect: ge, drawLine: l, drawLines: x, drawTriangle: R, drawCircle: L, drawEllipse: he, drawUVQuad: Be, drawPolygon: z2, drawFormattedText: Je, drawMasked: $e, drawSubtracted: kt, pushTransform: le, popTransform: ae, pushTranslate: ne, pushScale: He, pushRotate: se, pushMatrix: _t, usePostEffect: Vt, makeCanvas: wn, debug: re, scene: Ks, go: Ys, onSceneLeave: Ws, addLevel: Qs, getData: Xs, setData: ar, download: Xt, downloadJSON: Dr, downloadText: kn, downloadBlob: Nn, plug: ur, ASCII_CHARS: zr, canvas: y.canvas, addKaboom: ui, LEFT: v.LEFT, RIGHT: v.RIGHT, UP: v.UP, DOWN: v.DOWN, RED: W.RED, GREEN: W.GREEN, BLUE: W.BLUE, YELLOW: W.YELLOW, MAGENTA: W.MAGENTA, CYAN: W.CYAN, WHITE: W.WHITE, BLACK: W.BLACK, quit: bi, Event: be, EventHandler: Ne, EventController: ke };
    if (n13.plugins && n13.plugins.forEach(ur), n13.global !== false) for (let t in Ze) window[t] = Ze[t];
    return n13.focus !== false && y.canvas.focus(), Ze;
  }, "default");

  // public/javascripts/bamboo.js
  var FLOOR_HEIGHT = 48;
  var TILE_HEIGHT = 120;
  var LEAF_OFFSET = 34;
  var LAMP_OFFSET = 91;
  var SPEED = 300;
  var OFFSET_OFFSCREEN = 95;
  function bambooBaseType(i2) {
    let rndInt = randomIntFromInterval(1, 6);
    switch (Math.ceil(rndInt)) {
      case 1:
        add([
          pos(width() + OFFSET_OFFSCREEN, height() - TILE_HEIGHT * i2 - FLOOR_HEIGHT),
          sprite("b1"),
          area(),
          move(LEFT, SPEED),
          offscreen({ destroy: true }),
          z(10),
          "pipe"
        ]);
        break;
      case 2:
        add([
          pos(width() + OFFSET_OFFSCREEN, height() - TILE_HEIGHT * i2 - FLOOR_HEIGHT),
          sprite("b2"),
          area(),
          move(LEFT, SPEED),
          offscreen({ destroy: true }),
          z(10),
          "pipe"
        ]);
        break;
      case 3:
        add([
          pos(width() + OFFSET_OFFSCREEN, height() - TILE_HEIGHT * i2 - FLOOR_HEIGHT),
          sprite("b3"),
          area(),
          move(LEFT, SPEED),
          offscreen({ destroy: true }),
          z(10),
          "pipe"
        ]);
        break;
      case 4:
        add([
          pos(width() + OFFSET_OFFSCREEN, height() - TILE_HEIGHT * i2 - FLOOR_HEIGHT),
          sprite("b4"),
          area(),
          move(LEFT, SPEED),
          offscreen({ destroy: true }),
          z(10),
          "pipe"
        ]);
        break;
      case 5:
        add([
          pos(width() + OFFSET_OFFSCREEN, height() - TILE_HEIGHT * i2 - FLOOR_HEIGHT),
          sprite("b5"),
          area(),
          move(LEFT, SPEED),
          offscreen({ destroy: true }),
          z(10),
          "pipe"
        ]);
        break;
      case 6:
        add([
          pos(width() + OFFSET_OFFSCREEN, height() - TILE_HEIGHT * i2 - FLOOR_HEIGHT),
          sprite("b6"),
          area(),
          move(LEFT, SPEED),
          offscreen({ destroy: true }),
          z(10),
          "pipe"
        ]);
        break;
    }
  }
  function bambooLeafType(i2) {
    const rndInt = randomIntFromInterval(1, 6);
    switch (rndInt) {
      case 1:
        break;
      case 2:
        add([
          pos(width() + OFFSET_OFFSCREEN - LEAF_OFFSET, height() - TILE_HEIGHT * i2 - FLOOR_HEIGHT),
          sprite("l1"),
          area(),
          move(LEFT, SPEED),
          offscreen({ destroy: true }),
          z(9),
          "leaf"
        ]);
        break;
      case 3:
        break;
      case 4:
        add([
          pos(width() + OFFSET_OFFSCREEN - LEAF_OFFSET, height() - TILE_HEIGHT * i2 - FLOOR_HEIGHT),
          sprite("l2"),
          area(),
          move(LEFT, SPEED),
          offscreen({ destroy: true }),
          z(9),
          "leaf"
        ]);
        break;
      case 5:
        break;
      case 6:
        add([
          pos(width() + OFFSET_OFFSCREEN - LEAF_OFFSET, height() - TILE_HEIGHT * i2 - FLOOR_HEIGHT),
          sprite("l3"),
          area(),
          move(LEFT, SPEED),
          offscreen({ destroy: true }),
          z(9),
          "leaf"
        ]);
        break;
    }
  }
  function createLamp(i2) {
    const rndInt = randomIntFromInterval(1, 4);
    if (rndInt === 2) {
      add([
        pos(width() + OFFSET_OFFSCREEN - LAMP_OFFSET, height() - TILE_HEIGHT * i2 - FLOOR_HEIGHT),
        sprite("lamp"),
        area(),
        move(LEFT, SPEED),
        offscreen({ destroy: true }),
        z(9),
        "lamp"
      ]);
    }
  }
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // public/javascripts/scores.js
  function compareScore(score) {
    let currBest = getBestScore();
    if (currBest === null) {
      saveBestScore(score);
      return "new";
    }
    if (score > currBest) {
      saveBestScore(score);
      return "new";
    } else {
      return "old";
    }
  }
  function saveBestScore(score) {
    localStorage.setItem("bestScore", JSON.stringify(score));
  }
  function getBestScore() {
    let score = JSON.parse(localStorage.getItem("bestScore"));
    return score;
  }
  function checkMedal(score) {
    if (score >= 300) {
      saveMedal(5);
      return "diamond";
    } else if (score >= 200) {
      saveMedal(4);
      return "plat";
    } else if (score >= 100) {
      saveMedal(3);
      return "gold";
    } else if (score >= 50) {
      saveMedal(2);
      return "silver";
    } else if (score >= 15) {
      saveMedal(1);
      return "bronze";
    } else {
      saveMedal(0);
      return "none";
    }
  }
  function saveMedal(medal) {
    let totalMedals = JSON.parse(localStorage.getItem("medals"));
    if (totalMedals === null) {
      totalMedals = 0;
    }
    ;
    if (medal > totalMedals) {
      localStorage.setItem("medals", JSON.stringify(medal));
    } else {
      localStorage.setItem("medals", JSON.stringify(totalMedals));
    }
  }
  function getMedal() {
    let totalMedals = JSON.parse(localStorage.getItem("medals"));
    return totalMedals;
  }
  function medalList(totalMedals) {
    let list = ["bronze", "silver", "gold", "plat", "diamond"];
    let playerMedals = [];
    if (totalMedals === 0 || totalMedals === null) {
      playerMedals.push("none");
      return playerMedals;
    }
    for (let i2 = 0; i2 < totalMedals; i2++) {
      playerMedals.push(list[i2]);
    }
    return playerMedals;
  }
  async function postLeaderboardData(name, score) {
    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify({
        name,
        score
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }
  async function getLeaderboardData() {
    fetch("/data", { mode: "cors" }).then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response);
    });
  }

  // public/javascripts/main.js
  var import_express_validator = __toESM(require_lib());
  var FLOOR_HEIGHT2 = 48;
  var TILE_HEIGHT2 = 120;
  var CEILING = -130;
  var SPEED2 = 300;
  var OFFSET_OFFSCREEN2 = 95;
  document.addEventListener("DOMContentLoaded", () => {
    getLeaderboardData();
  });
  zo();
  setBackground(102, 207, 46);
  loadSound("flap", "./images/sounds/flap.mp3");
  loadSound("click", "./images/sounds/click.wav");
  loadSprite("background", "./images/assets/background.png");
  loadSprite("title", "./images/assets/fonts/title.png");
  loadSprite("btn1", "./images/assets/button 1.png");
  loadSprite("btn2", "./images/assets/button 2.png");
  loadSprite("scorecard", "./images/assets/scorecard.png");
  loadSprite("medal frame", "./images/assets/medal frame.png");
  loadSprite("header", "./images/assets/lb header.png");
  loadSprite("row", "./images/assets/lb row.png");
  loadSprite("footer", "./images/assets/lb footer.png");
  loadSprite("grass", "./images/assets/grass block.png");
  loadSprite("grass trim", "./images/assets/grass trim.png");
  loadSprite("lamp", "./images/assets/lamp.png");
  loadSprite("ghost", "./images/sprites/ghost.png");
  loadSprite("arrow", "./images/assets/arrow.png");
  loadSprite("jump lines", "./images/assets/jump lines.png");
  loadSpriteAtlas("./images/sprites/capybara.png", {
    "capy": {
      x: 0,
      y: 0,
      width: 486,
      height: 76,
      sliceX: 6,
      anims: {
        "fly": { from: 0, to: 5, speed: 23 }
        //23 13
      }
    }
  });
  loadSpriteAtlas("./images/assets/bamboo.png", {
    "b1": {
      x: 0,
      y: 0,
      width: 45,
      height: 120,
      sliceX: 1
    },
    "b2": {
      x: 45,
      y: 0,
      width: 45,
      height: 120,
      sliceX: 1
    },
    "b3": {
      x: 90,
      y: 0,
      width: 45,
      height: 120,
      sliceX: 1
    },
    "b4": {
      x: 135,
      y: 0,
      width: 45,
      height: 120,
      sliceX: 1
    },
    "b5": {
      x: 180,
      y: 0,
      width: 45,
      height: 120,
      sliceX: 1
    },
    "b6": {
      x: 225,
      y: 0,
      width: 45,
      height: 120,
      sliceX: 1
    }
  });
  loadSpriteAtlas("./images/assets/bamboo leaves.png", {
    "l1": {
      x: 0,
      y: 0,
      width: 113,
      height: 120,
      sliceX: 1
    },
    "l2": {
      x: 113,
      y: 0,
      width: 113,
      height: 120,
      sliceX: 1
    },
    "l3": {
      x: 226,
      y: 0,
      width: 113,
      height: 120,
      sliceX: 1
    }
  });
  loadSpriteAtlas("./images/assets/medals.png", {
    "bronze": {
      x: 0,
      y: 0,
      width: 85,
      height: 85,
      sliceX: 1
    },
    "silver": {
      x: 85,
      y: 0,
      width: 85,
      height: 85,
      sliceX: 1
    },
    "gold": {
      x: 170,
      y: 0,
      width: 85,
      height: 85,
      sliceX: 1
    },
    "plat": {
      x: 255,
      y: 0,
      width: 85,
      height: 85,
      sliceX: 1
    },
    "diamond": {
      x: 340,
      y: 0,
      width: 85,
      height: 85,
      sliceX: 1
    },
    "none": {
      x: 425,
      y: 0,
      width: 85,
      height: 85,
      sliceX: 1
    }
  });
  loadSpriteAtlas("./images/assets/new tag.png", {
    "new": {
      x: 0,
      y: 0,
      width: 77,
      height: 37,
      sliceX: 1
    },
    "old": {
      x: 77,
      y: 0,
      width: 77,
      height: 37,
      sliceX: 1
    }
  });
  loadSpriteAtlas("./images/assets/ui keys.png", {
    "s": {
      x: 0,
      y: 0,
      width: 32,
      height: 32,
      sliceX: 1
    },
    "sx": {
      x: 32,
      y: 0,
      width: 32,
      height: 32,
      sliceX: 1
    },
    "m": {
      x: 64,
      y: 0,
      width: 32,
      height: 32,
      sliceX: 1
    },
    "mx": {
      x: 96,
      y: 0,
      width: 32,
      height: 32,
      sliceX: 1
    }
  });
  loadFont("pixelify", "./images/assets/fonts/PixelifySans-Medium.ttf");
  setGravity(0);
  var playSound = true;
  function buttonSoundEffect() {
    if (playSound === true) {
      play("click");
    }
  }
  function flySoundEffect() {
    if (playSound === true) {
      play("flap");
    }
  }
  function uiKeysSounds() {
    const sfx = add([
      pos(80, height() - 120),
      sprite("s"),
      area(),
      z(101)
    ]);
    const sfxX = add([
      pos(80, height() - 120),
      sprite("sx"),
      area(),
      z(101)
    ]);
    add([
      text("Mute Sounds", {
        font: "Pixelify"
      }),
      //anchor("left"),
      color(255, 255, 255),
      pos(122, height() - 120),
      z(101)
    ]);
    if (playSound === true) {
      readd(sfx);
    } else {
      readd(sfxX);
    }
  }
  scene("start", () => {
    onUpdate(() => setCursor("default"));
    add([
      sprite("background", { width: width(), height: height() }),
      pos(width() / 2, height() / 2),
      anchor("center"),
      scale(1),
      fixed()
    ]);
    uiKeysSounds();
    onKeyPress("s", () => {
      if (playSound === true) {
        playSound = false;
        uiKeysSounds();
      } else {
        playSound = true;
        uiKeysSounds();
      }
    });
    add([
      sprite("title"),
      pos(width() / 2, height() / 4),
      anchor("center"),
      scale(1.5),
      fixed()
    ]);
    let btnStart = add([
      sprite("btn1"),
      pos(width() / 2, height() / 1.9),
      area(),
      scale(1),
      anchor("center"),
      "start",
      opacity(1)
    ]);
    btnStart.add([
      text("Start", {
        font: "Pixelify"
      }),
      anchor("center"),
      color(0, 0, 0)
    ]);
    btnStart.onHoverUpdate(() => {
      setCursor("pointer");
      btnStart.scale = vec2(1.2);
    });
    btnStart.onHoverEnd(() => {
      btnStart.scale = vec2(1);
      btnStart.color = rgb();
    });
    btnStart.onClick(() => {
      go("game");
      buttonSoundEffect();
    });
    const btnLeader = add([
      sprite("btn1"),
      pos(width() / 2, height() / 1.5),
      area(),
      scale(1),
      anchor("center"),
      outline(4)
    ]);
    btnLeader.add([
      text("Scoreboard", {
        font: "Pixelify"
      }),
      anchor("center"),
      color(0, 0, 0)
    ]);
    btnLeader.onHoverUpdate(() => {
      setCursor("pointer");
      btnLeader.scale = vec2(1.2);
    });
    btnLeader.onHoverEnd(() => {
      btnLeader.scale = vec2(1);
      btnLeader.color = rgb();
    });
    btnLeader.onClick(() => {
      go("scoreboard");
      buttonSoundEffect();
    });
  });
  scene("scoreboard", () => {
    let medals = medalList(getMedal());
    async function getSBData() {
      fetch("/data", { mode: "cors" }).then((response) => {
        return response.json();
      }).then((response) => {
        for (let i2 = 0; i2 < response.leaderboard.length + 1; i2++) {
          if (i2 != response.leaderboard.length) {
            buildBoardRow(i2, response.leaderboard[i2].name, response.leaderboard[i2].score);
          } else {
            buildBoardFooter(i2);
          }
        }
      });
    }
    getSBData();
    add([
      sprite("background", { width: width(), height: height() }),
      pos(width() / 2, height() / 2),
      anchor("center"),
      scale(1),
      fixed()
    ]);
    uiKeysSounds();
    onKeyPress("s", () => {
      if (playSound === true) {
        playSound = false;
        uiKeysSounds();
      } else {
        playSound = true;
        uiKeysSounds();
      }
    });
    const btnHome = add([
      sprite("btn2"),
      pos(width() / 8, height() / 7),
      area(),
      scale(1),
      anchor("center"),
      outline(4)
    ]);
    btnHome.add([
      text("Back", {
        font: "Pixelify"
      }),
      anchor("center"),
      color(0, 0, 0)
    ]);
    btnHome.onHoverUpdate(() => {
      const t = time() * 10;
      btnHome.scale = vec2(1.2);
      setCursor("pointer");
    });
    btnHome.onHoverEnd(() => {
      btnHome.scale = vec2(1);
      btnHome.color = rgb();
    });
    btnHome.onClick(() => {
      go("start");
      buttonSoundEffect();
    });
    add([
      sprite("medal frame"),
      pos(width() / 4, height() / 7),
      anchor("top"),
      scale(1),
      fixed()
    ]);
    for (let i2 = 0; i2 < medals.length; i2++) {
      add([
        sprite(medals[i2]),
        pos(width() / 4 - 43, height() / 7 + 27 + i2 * 93)
      ]);
    }
    add([
      sprite("header"),
      pos(width() / 2, height() / 7),
      fixed(),
      anchor("top")
    ]);
    function buildBoardRow(i2, name, score) {
      let row = add([
        sprite("row"),
        pos(width() / 2, height() / 7 + 96 + 83 * i2),
        fixed(),
        anchor("top")
      ]);
      row.add([
        text(name, {
          font: "Pixelify"
        }),
        pos(-200, 17),
        color(255, 255, 255)
      ]);
      row.add([
        text(score, {
          font: "Pixelify"
        }),
        pos(130, 36),
        anchor("center"),
        color(255, 255, 255)
      ]);
    }
    function buildBoardFooter(i2) {
      add([
        sprite("footer"),
        pos(width() / 2, height() / 7 + i2 * 83 + 96),
        fixed(),
        anchor("top")
      ]);
    }
  });
  scene("game", () => {
    setGravity(0);
    let obsTileAmount = Math.ceil(height() / 120);
    let timing = obsTileAmount * 0.1625;
    const player = add([
      pos(width() / 3, height() / 3),
      sprite("capy"),
      area(),
      body(),
      z(1),
      { moved: false },
      "capy"
    ]);
    add([
      sprite("background", { width: width(), height: height() }),
      pos(width() / 2, height() / 2),
      anchor("center"),
      scale(1),
      fixed()
    ]);
    uiKeysSounds();
    onKeyPress("s", () => {
      if (playSound === true) {
        playSound = false;
        uiKeysSounds();
      } else {
        playSound = true;
        uiKeysSounds();
      }
    });
    add([
      text("Click or Press Space to Jump", {
        font: "Pixelify"
      }),
      color(255, 255, 255),
      pos(width() / 2.4, height() / 4),
      scale(1.4),
      anchor("center"),
      "ghost"
    ]);
    add([
      pos(width() / 2.4, height() / 3),
      sprite("arrow"),
      z(1),
      "ghost"
    ]);
    add([
      pos(width() / 2.1, height() / 3),
      sprite("ghost"),
      z(1),
      "ghost"
    ]);
    add([
      pos(width() / 2.1 - 20, height() / 3 + 68),
      sprite("jump lines"),
      z(1),
      "ghost"
    ]);
    let tileAmount = width() / 48;
    for (let i2 = 0; i2 < tileAmount; i2++) {
      add([
        sprite("grass"),
        pos(i2 * 48, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        z(100),
        move(LEFT, SPEED2),
        offscreen({ destroy: true }),
        "floor"
      ]);
      add([
        sprite("grass trim"),
        pos(i2 * 48, height() - FLOOR_HEIGHT2 + 6),
        anchor("botleft"),
        z(100),
        move(LEFT, SPEED2),
        offscreen({ destroy: true }),
        "floor"
      ]);
    }
    function spawnFloor() {
      let tileAmount2 = width() / 48;
      for (let i2 = 0; i2 < tileAmount2; i2++) {
        add([
          sprite("grass"),
          pos(width() - 2 + i2 * 48, height()),
          anchor("botleft"),
          area(),
          body({ isStatic: true }),
          z(100),
          move(LEFT, SPEED2),
          offscreen({ destroy: true }),
          "floor"
        ]);
        add([
          sprite("grass trim"),
          pos(width() - 2 + i2 * 48, height() - FLOOR_HEIGHT2 + 6),
          anchor("botleft"),
          z(100),
          move(LEFT, SPEED2),
          offscreen({ destroy: true }),
          "floor"
        ]);
      }
    }
    onKeyPress("space", () => {
      if (player.moved === false) {
        setGravity(3200);
        player.moved = true;
        player.jump();
        player.play("fly");
        flySoundEffect();
        removeGhosts();
      } else {
        player.jump();
        player.play("fly");
        flySoundEffect();
        removeGhosts();
      }
    });
    onClick(() => {
      if (player.moved === false) {
        setGravity(3200);
        player.moved = true;
        player.jump();
        player.play("fly");
        flySoundEffect();
        removeGhosts();
      } else {
        player.jump();
        player.play("fly");
        flySoundEffect();
        removeGhosts();
      }
    });
    onKeyPress("up", () => {
      if (player.moved === false) {
        setGravity(3200);
        player.moved = true;
        player.jump();
        player.play("fly");
        flySoundEffect();
        removeGhosts();
      } else {
        player.jump();
        player.play("fly");
        flySoundEffect();
        removeGhosts();
      }
    });
    function removeGhosts() {
      destroyAll("ghost");
    }
    function spawnObsactle() {
      if (player.moved === true) {
        let obsTileAmount2 = Math.ceil(height() / 120);
        let beginOpening = Math.ceil(rand(2, obsTileAmount2 - 3));
        let lampLevel = obsTileAmount2 - 1;
        for (let i2 = 1; i2 <= obsTileAmount2; i2++) {
          if (i2 === 1) {
            add([
              pos(width() + OFFSET_OFFSCREEN2, height() - TILE_HEIGHT2 * i2 - FLOOR_HEIGHT2),
              sprite("b1"),
              area(),
              move(LEFT, SPEED2),
              offscreen({ destroy: true }),
              z(2),
              "pipe",
              { passed: false }
            ]);
            bambooLeafType(i2);
          } else if (i2 != beginOpening && i2 != beginOpening + 1) {
            bambooBaseType(i2);
            bambooLeafType(i2);
            if (i2 === lampLevel) {
              createLamp(i2);
            }
          }
        }
      }
    }
    ;
    player.onCollide("pipe", () => {
      go("lose", score, currBest);
    });
    player.onCollide("floor", () => {
      if (player.moved === true) {
        go("lose", score, currBest);
      }
    });
    player.onUpdate(() => {
      if (player.pos.y >= height() || player.pos.y <= CEILING) {
        go("lose", score, currBest);
      }
    });
    onUpdate("pipe", (p) => {
      if (p.pos.x + p.width <= player.pos.x && p.passed === false) {
        addScore();
        p.passed = true;
      }
    });
    loop(timing, () => {
      spawnObsactle();
    });
    loop(0.79, () => {
      spawnFloor();
    });
    onLoad(() => {
      if (player.moved === false) {
        player.play("fly");
      }
    });
    loop(0.45, () => {
      if (player.moved === false) {
        player.play("fly");
      }
    });
    let score = 0;
    let currBest = getBestScore();
    const scoreLabel = add([
      text(score, {
        //score
        font: "Pixelify"
      }),
      anchor("center"),
      pos(width() / 2, 80),
      fixed(),
      z(100)
    ]);
    function addScore() {
      score++;
      scoreLabel.text = score;
    }
  });
  scene("lose", (score, currBest) => {
    let tag = "old";
    let best = 0;
    let checkBest = compareScore(score);
    if (currBest < score) {
      tag = "new";
    }
    if (checkBest === "new") {
      best = score;
    } else {
      best = getBestScore();
    }
    add([
      sprite("background", { width: width(), height: height() }),
      pos(width() / 2, height() / 2),
      anchor("center"),
      scale(1),
      fixed()
    ]);
    const menu = add([
      sprite("scorecard"),
      //rect(width() / 3, height() / 3, { radius: 8 }),
      pos(width() / 2, height() / 2),
      area(),
      scale(1),
      anchor("center"),
      fixed(),
      outline(4)
    ]);
    let txtScore = add([
      text(score, {
        //score
        font: "Pixelify"
      }),
      pos(width() / 2 + 285, height() / 2 - 155),
      scale(2),
      anchor("right"),
      color(255, 255, 255),
      z(10)
    ]);
    let txtBest = add([
      text(best, {
        //best
        font: "Pixelify"
      }),
      pos(width() / 2 + 285, height() / 2 - 35),
      scale(2),
      anchor("right"),
      color(255, 255, 255),
      z(10)
    ]);
    let newTag = add([
      sprite(tag),
      //tag
      pos(width() / 2 + 30, height() / 2 - 116),
      z(10)
    ]);
    let medal = add([
      sprite(checkMedal(score)),
      //score
      pos(width() / 2 - 218, height() / 2 - 141)
    ]);
    let txtInput = add([
      rect(192, 64, { radius: 8 }),
      pos(width() / 2 + 200, height() / 2 + 120),
      area(),
      scale(1),
      anchor("center"),
      color(182, 151, 0)
    ]);
    txtInput.add([
      text("", {
        font: "Pixelify"
      }),
      input(),
      anchor("center"),
      color(255, 255, 255)
    ]);
    function input() {
      let charEv;
      let backEv;
      let maxLength = 8;
      return {
        id: "input",
        require: ["text"],
        add() {
          charEv = onCharInput((character) => {
            if (this.text.length < maxLength) {
              this.text += character.toUpperCase();
              txt = this.text;
            }
          });
          backEv = onKeyPress("backspace", () => {
            this.text = this.text.slice(0, -1);
            txt = this.text;
          });
        },
        destroy() {
          charEv.cancel();
          backEv.cancel();
        }
      };
    }
    const btnSubmit = add([
      sprite("btn2"),
      pos(width() / 2 + 200, height() / 2 + 220),
      area(),
      scale(1),
      anchor("center"),
      outline(4)
    ]);
    btnSubmit.add([
      text("Submit", {
        font: "Pixelify"
      }),
      anchor("center"),
      color(0, 0, 0)
    ]);
    btnSubmit.onHoverUpdate(() => {
      btnSubmit.scale = vec2(1.2);
      setCursor("pointer");
    });
    btnSubmit.onHoverEnd(() => {
      btnSubmit.scale = vec2(1);
    });
    btnSubmit.onClick(() => {
      postLeaderboardData(txt, score);
      go("scoreboard");
      buttonSoundEffect();
    });
    const btnRestart = add([
      sprite("btn2"),
      pos(width() / 2 - 200, height() / 2 + 350),
      area(),
      scale(1),
      anchor("center"),
      outline(4)
    ]);
    btnRestart.add([
      text("Restart", {
        font: "Pixelify"
      }),
      anchor("center"),
      color(0, 0, 0)
    ]);
    btnRestart.onHoverUpdate(() => {
      btnRestart.scale = vec2(1.2);
      setCursor("pointer");
    });
    btnRestart.onHoverEnd(() => {
      btnRestart.scale = vec2(1);
    });
    btnRestart.onClick(() => {
      go("game");
      buttonSoundEffect();
    });
    const btnHome = add([
      sprite("btn2"),
      pos(width() / 2 + 200, height() / 2 + 350),
      area(),
      scale(1),
      anchor("center"),
      outline(4)
    ]);
    btnHome.add([
      text("Home", {
        font: "Pixelify"
      }),
      anchor("center"),
      color(0, 0, 0)
    ]);
    btnHome.onHoverUpdate(() => {
      btnHome.scale = vec2(1.2);
      setCursor("pointer");
    });
    btnHome.onHoverEnd(() => {
      btnHome.scale = vec2(1);
    });
    btnHome.onClick(() => {
      go("start");
      buttonSoundEffect();
    });
  });
  go("start");
})();
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
