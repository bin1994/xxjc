// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'order'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      //底栏
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:
      //主页
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      //公告
      .state('tab.notice', {
        url: '/notice',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-notice.html',
            controller: 'NoticeCtrl'
          }
        }
      })

      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })
      //个人中心
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })
      //在线下单
      .state('order', {
        url: '/order',
        templateUrl: 'templates/order.html',
        controller: 'OrderAddCtrl'
      })
      //登录
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
      })
      //返利规则
      .state('rebate-rule', {
        url: '/rebate-rule',
        templateUrl: 'templates/rebate-rule.html',
      })
      //库存查询（暂不做）
      .state('stock-search', {
        url: '/stock-search',
        templateUrl: 'templates/stock-search.html',
      })
      //我的订单
      .state('my-order', {
        url: '/my-order',
        templateUrl: 'templates/my-order.html',
      })
      //我的消息
      .state('my-msg', {
        url: '/my-msg',
        templateUrl: 'templates/my-msg.html',
      })
      //我的返利
      .state('my-rebate', {
        url: '/my-rebate',
        templateUrl: 'templates/my-rebate.html',
      })
      //密码修改
      .state('change-password', {
        url: '/change-password',
        templateUrl: 'templates/change-password.html',
      })
//个人信息
      .state('my-information', {
        url: '/my-information',
        templateUrl: 'templates/my-information.html',
      })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

  });
