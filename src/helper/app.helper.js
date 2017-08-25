'use strict';

angular.module('zongmu-3d-label').factory("AppHelper", [function() {

  return {
    setGroupItemSelected: function(groups, groupItem) {
      groups.forEach(function(group) {
        group.items.forEach(function($groupItem) {
          if (groupItem !== $groupItem) {
            $groupItem.selected = false;
          } else {
            $groupItem.selected = true;
          }
        });
      });
    }
  };
}]);