/**
 * Created by bin on 2016/3/30.
 */
(function () {
  'use strict';

  angular
    .module('order.add', [])
    .controller('OrderAddCtrl', OrderAddCtrl);

  OrderAddCtrl.$inject = ['$scope'];

  /* @ngInject */
  function OrderAddCtrl($scope) {
    $scope.init = init;


    init();


    function init() {
    }

    //$('.search_bar_wrap').searchBar({
    //  //替换原模板的“取消”
    //  cancelText:"取消",
    //  //替换原模板的“搜索”
    //  searchText:'搜索',
    //  //搜索栏获得焦点时
    //  onfocus: function (value) {
    //    console.log('focus!The value is '+value);
    //  },
    //  //搜索栏失去焦点时
    //  onblur:function(value) {
    //    console.log('blur!The value is '+value);
    //  },
    //  //搜索栏在输入时
    //  oninput: function(value) {
    //    console.log('Input!The value is '+ value);
    //  },
    //  //搜索栏提交时，如果没有submit方法，则沿用浏览器默认的提交方式
    //  onsubmit:function(value){
    //    console.log('Submit!The value is '+ value);
    //  },
    //  //点击取消按钮
    //  oncancel:function(){
    //    console.log('click cancel');
    //  },
    //  //点击清空按钮
    //  onclear:function(){
    //    console.log('click clear');
    //  }
    //});


  }
})();
