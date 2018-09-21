// Generated by CoffeeScript 2.3.1
(function() {
  var DATE_FORMAT, Ohlc, _, moment;

  _ = require('lodash');

  moment = require('moment');

  DATE_FORMAT = 'YYYY-MM-DD';

  Ohlc = class Ohlc {
    constructor(items) {
      this.items = items.map(function(item) {
        var d;
        if (Array.isArray(item)) {
          return {
            "Date": moment(item[0]).format(DATE_FORMAT),
            Open: item[1],
            High: item[2],
            Low: item[3],
            Close: item[4],
            Volume: item[5]
          };
        } else if (_.isPlainObject(item)) {
          d = item.Date || item.date || item.DateTime || item.dateTime;
          return {
            "Date": moment(d).format(DATE_FORMAT),
            Open: item.Open || item.open,
            High: item.High || item.high,
            Low: item.Low || item.low,
            Close: item.Close || item.close,
            Volume: item.Volume || item.volume
          };
        } else {
          throw new Error('ArrayType Or ObjectType Required');
        }
      });
    }

    addSma(range) {
      var key;
      key = `sma${range}`;
      return this.items.forEach(function(item, i, arr) {
        var refItems;
        if (i < range - 1) {
          return item[key] = null;
        } else {
          refItems = arr.slice(i - (range - 1), +i + 1 || 9e9);
          return item[key] = _.round(_.meanBy(refItems, 'Close'));
        }
      });
    }

    toDays() {
      return _.cloneDeep(this.items);
    }

    toWeeks() {
      var groups, items;
      items = _.cloneDeep(this.items);
      groups = _.groupBy(items, function(item) {
        return moment(item.Date).format('gggg-ww');
      });
      return Object.keys(groups).map(function(_week) {
        var _m, _weekDay, weekItems;
        weekItems = groups[_week];
        weekItems = _.sortBy(weekItems, function(item) {
          return moment(item.Date).unix();
        });
        _m = moment(weekItems[0].Date);
        _weekDay = _m.format('d');
        return {
          "Date": _m.subtract(_weekDay, 'days').format(DATE_FORMAT),
          Open: weekItems[0].Open,
          Close: _.last(weekItems).Close,
          High: _.maxBy(weekItems, 'High').High,
          Low: _.minBy(weekItems, 'Low').Low,
          Volume: _.sumBy(weekItems, 'Volume')
        };
      });
    }

    toMonths() {
      var groups, items;
      items = _.cloneDeep(this.items);
      groups = _.groupBy(items, function(item) {
        return moment(item.Date).format('YYYY-MM');
      });
      return Object.keys(groups).map(function(_month) {
        var monthItems;
        monthItems = groups[_month];
        monthItems = _.sortBy(monthItems, function(item) {
          return moment(item.Date).unix();
        });
        return {
          "Date": moment(monthItems[0].Date).format('YYYY-MM-01'),
          Open: monthItems[0].Open,
          Close: _.last(monthItems).Close,
          High: _.maxBy(monthItems, 'High').High,
          Low: _.minBy(monthItems, 'Low').Low,
          Volume: _.sumBy(monthItems, 'Volume')
        };
      });
    }

  };

  module.exports = Ohlc;

}).call(this);