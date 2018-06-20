'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )

    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider
                    .otherwise('list');
                $stateProvider
                    .state('list', {  //电站列表
                        url: '/list',
                        templateUrl: 'src/tpl/index.html?v=201801051554',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('src/js/controllers/index.js');
                                }]
                        }
                    })

                    .state('app', {
                        url: '/app',
                        templateUrl: 'src/tpl/app.html?v=201801051554'
                    })
                    .state('app.overview', { //电站概览
                        url: '/overview/:id',
                        templateUrl: 'src/tpl/overview.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('src/js/controllers/overview.js');
                                }]
                        }

                    })
                    .state('app.moduleList', {  // 组件列表
                        url: '/moduleList',
                        templateUrl: 'src/tpl/moduleList.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('src/js/controllers/moduleList.js');
                                }]
                        }
                    })
                    .state('app.equipList', {  // 组件列表
                        url: '/equipList',
                        templateUrl: 'src/tpl/equipList.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('src/js/controllers/equipList.js');
                                }]
                        }
                    })
                    .state('app.page3', {
                        url: '/page3',
                        templateUrl: 'src/tpl/page3.html'
                    })
                    .state('app.page4', {
                        url: '/page4',
                        templateUrl: 'src/tpl/page4.html'
                    })



            }
        ]
    );