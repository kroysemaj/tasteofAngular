/*
 * angular-kramed
 * (c) 2015 Scott Lanning
 * Licensed MIT
 * Modified from angular-marked: https://github.com/Hypercubed/angular-marked
 */

/* jshint undef: true, unused: true */
/* global angular:true */

(function () {

  'use strict';

  angular.module('gh.kramed', [])

  .provider('kramed', function () {

    var self = this;

    self.setOptions = function(opts) {  // Store options for later
      this.defaults = opts;
    };

    self.$get = ['$window',function ($window) {
      var m = $window.kramed;

      self.setOptions = m.setOptions;
      m.setOptions(self.defaults);

      return m;
    }];

  })

  .directive('kramed', ['kramed', function (kramed) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        opts: '=',
        kramed: '='
      },
      link: function (scope, element, attrs) {
        set(scope.kramed || element.text() || '');

        function set(val) {
          element.html(kramed(val || '', scope.opts || null));
        }

        if (attrs.kramed) {
          scope.$watch('kramed', set);
        }

      }
    };
  }]);

}());