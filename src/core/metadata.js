'use strict';

angular.module('zongmu-3d-label').factory("Metadata", [function() {

  function Metadata(options) {

    this.getOptions = function() {
      return options;
    };
  }

  // $scope.tableOptions = {
  //   title: "Table",
  //   selectionMode: "multiple",
  //   buttons: [{
  //     name: "add",
  //     label: "添加",
  //     appendClass: "btn-primary",
  //     onClick: function() {
  //       console.log(this)
  //     }
  //   }],
  //   columns: [{
  //     name: "id",
  //     label: "编号",
  //     type: "string"
  //   }, {
  //     name: "firstName",
  //     label: "名",
  //     type: "string"
  //   }, {
  //     name: "lastName",
  //     label: "姓",
  //     type: "string"
  //   }, {
  //     name: "age",
  //     label: "年龄",
  //     type: "number",
  //     visibility: function() {
  //       return true;
  //     },
  //     style: { "text-align": "right" }
  //   }, {
  //     name: "birthday",
  //     label: "生日",
  //     type: "date",
  //     style: function() {
  //       return {
  //         color: "red",
  //         "text-align": "center"
  //       };
  //     }
  //   }]
  // };

  Metadata.prototype.getListViewOptions = function() {

  };

  return Metadata;
}]);

angular.module('zongmu-3d-label').factory("MetadataFactory", ["Metadata", function(Metadata) {

  var map = {};
  map["VideoAttribute"] = new Metadata({
    props: [{
      name: "name",
      label: "属性名称",
      type: "string",
      mandatory: true
    }],
    listview: {
      columns: ["name"]
    }
  });

  return {
    getMetadata: function(name) {
      return map[name];
    }
  };
}]);