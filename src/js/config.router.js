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
                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

                    if(toState.name === 'app.overview'){

                        $rootScope.$broadcast('overview',true);
                    }else {
                        $rootScope.$broadcast('overview',false);
                    }
                })
            }
        ]
    )

    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider
                    .otherwise('/app/overview/');
                $stateProvider
                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class="fade-in-right-big smooth"></div>'
                    })
                    .state('access.login', {
                        url: '/login',
                        templateUrl: 'src/tpl/login.html?v=201801051554'
                    })
                    .state('access.signUp', {
                        url: '/signUp',
                        templateUrl: 'src/tpl/signUp.html?v=201801051554'
                    })
                    .state('app', {
                        url: '/app',
                        templateUrl: 'src/tpl/app.html?v=201801051554'
                    })
                    .state('app.overview', {
                        url: '/overview/:id',
                        templateUrl: 'src/tpl/overview.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('src/js/controllers/overview.js');
                                }]
                        }

                    })
                    .state('app.page2', {
                        url: '/page2',
                        templateUrl: 'src/tpl/page2.html'
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