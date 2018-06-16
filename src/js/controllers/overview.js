angular.module('app')
    .controller('overViewCtrl',
        function ($scope, $location, $state, $localStorage) {
            $scope.temp = {};
            $scope.temp.warningRadio = '1';
            $scope.temp.viewRadio = '3';
            $scope.temp.rotate = 50
            var chart = null;
            $.getJSON('https://data.jianshukeji.com/jsonp?filename=json/usdeur.json&callback=?', function (data) {
                chart = Highcharts.chart('salary', {
                    chart: {
                        zoomType: 'x'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            millisecond: '%H:%M:%S.%L',
                            second: '%H:%M:%S',
                            minute: '%H:%M',
                            hour: '%H:%M',
                            day: '%m-%d',
                            week: '%m-%d',
                            month: '%Y-%m',
                            year: '%Y'
                        }
                    },
                    tooltip: {
                        dateTimeLabelFormats: {
                            millisecond: '%H:%M:%S.%L',
                            second: '%H:%M:%S',
                            minute: '%H:%M',
                            hour: '%H:%M',
                            day: '%Y-%m-%d',
                            week: '%m-%d',
                            month: '%Y-%m',
                            year: '%Y'
                        }
                    },
                    yAxis: {
                        title: {
                            text: '汇率'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        area: {
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, Highcharts.getOptions().colors[0]],
                                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                ]
                            },
                            marker: {
                                radius: 2
                            },
                            lineWidth: 1,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null
                        }
                    },
                    series: [{
                        type: 'area',
                        name: '美元兑欧元',
                        data: data
                    }]
                });
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
            // $('#circle').circleProgress({
            //     value: 0.5,
            //     size: 160,
            //     thickness: 30,
            //     emptyFill:"rgba(0, 0, 0, 0)",
            //     fill: {
            //         gradient: [['rgba(0, 179, 238, 0)',0],['rgba(0, 179, 238, 0.5)',.5],['rgba(0, 179, 238, 1)',1]],
            //         gradientDirection: ['x0', 'y0', 'x1', 'y1'],
            //         gradient: ['red', 'green', 'blue'], gradientDirection: [x0, y0, x1, y1]
            //     }
            // });
        });