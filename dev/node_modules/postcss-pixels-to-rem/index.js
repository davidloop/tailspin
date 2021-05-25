var postcss = require('postcss');

module.exports = postcss.plugin('postcss-pixels-to-rem', function pixelstorem(options) {
  return function (css) {
      options = options || {};
      var base = options.base ? options.base : 16,
          mediaQueries = options.mediaQueries === undefined ? true: options.mediaQueries,
          exclude = options.exclude || [];

      function findMatches (el) {
        return el.match(/(em\(\d+\)|rem\(\d+\)|\d+px)/ig, "");
      };

      function convertValues(matches) {
        var revised = matches.map(function(el, i) {
          var regExVal = new RegExp(/\d+/, 'g'),
              regExType = new RegExp(/(^em|rem|px)/, 'ig'),
              unit = regExType.exec(el)[0].toString();
          var measureType = options.unit ? options.unit : unit !== 'px' ? unit: 'rem';
          return convertedVal = regExVal.exec(el) / base + measureType;
        });
        return revised
      }

    function replaceItem(item, convertedValues, matches) {
      var revisedParam = item;
      convertedValues.map(function(el, i) {
        revisedParam = revisedParam.replace(matches[i], el);
      });
      return revisedParam
    }

    css.walkRules(function (rule) {
      var ruleParent = rule.parent;

      if (ruleParent.type === "atrule" && ruleParent.name === "media" && mediaQueries) {
        var matches = findMatches(ruleParent.params) || false,
            convertedVal = matches? convertedVal = convertValues(matches): false;

        if (convertedVal) {
          rule.parent.params = replaceItem(rule.parent.params, convertedVal, matches);
        }
      }
      rule.walkDecls(function (decl, i) {
        var excludedTest = exclude.some(function(el, i){
            return decl.prop === el;
        });
        var matches = findMatches(decl.value);
        if (matches && !excludedTest) {
          var convertedValues = convertValues(matches);
          decl.value = replaceItem(decl.value, convertedValues, matches);
        }
      });
    });
  }
});
