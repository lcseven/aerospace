angular.module('app')
    .controller('overViewCtrl',
        function ($scope, $location, $state, $localStorage) {
            $scope.temp = {};
            $scope.temp.warningRadio = '1';
            $scope.temp.powerRadio = '1';
            $scope.temp.viewRadio = 'default';
            $scope.temp.default = 'default';
            $scope.changDefault = function (flag) {
                if($scope.temp.default === 'default'  && flag === 1 ){
                    $scope.temp.default = 'default'
                }else {
                    $scope.temp.default = '1';
                }

            }
            $scope.temp.rotate = 50;





             var chart = Highcharts.chart('power', {
                 chart: {
                     type: 'area'
                 },
                 title: {
                     text: ''
                 },
                 xAxis: {
                     categories: [
                         '6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00'
                     ],
                 },
                 yAxis: {
                     title: {
                         text: '功率（W）'
                     }
                 },
                 tooltip: {
                     valueSuffix: ' W'
                 },
                 plotOptions: {
                     area: {
                         fillOpacity: 0.5
                     }
                 },
                 series: [{
                     name: '804',
                     lineWidth: 1,
                     marker: {
                         fillColor: 'rgba(0,0,0,0)',
                         lineWidth: 0,
                         //lineColor: null // inherit from series
                     },
                     data: [1234, 2546, 4678, 5764, 8900, 16345, 20566]
                 }]
             });

             var chart0 =  Highcharts.chart('power0', {
                 chart: {
                     type: 'column'
                 },
                 title: {
                     text: ''
                 },
                 xAxis: {
                     categories: [
                         '6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00'
                     ],
                 },
                 yAxis: {
                     title: {
                         text: '发电量（kWh）'
                     }
                 },
                 tooltip: {
                     valueSuffix: ' kWh'
                 },
                 series: [{
                     name: '804',
                     data: [1234, 2546, 4678, 5764, 8900, 16345, 20566]
                 }]
             });

             var chart1 = Highcharts.chart('warning', {
                title: {
                    text: ''
                },
                tooltip: {
                    headerFormat: '{series.name}<br>',
                    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true // 设置饼图是否在图例中显示
                    }
                },
                legend: {
                    symbolHeight: 6,
                    symbolWidth: 6,
                    symbolRadius: 3
                },
                series: [{
                    type: 'pie',
                    name: '浏览器访问量占比',
                    data: [
                        ['Firefox',   45.0],
                        ['IE',       26.8],
                        ['Chrome',  12.8],
                        ['Safari',    8.5],
                        ['Opera',     6.2],
                        ['其他',   0.7]
                    ]
                }]
            });

        });