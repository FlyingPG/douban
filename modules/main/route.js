/**
 * Created by Administrator on 2016/10/31 0031.
 */
(function (angular) {
    //路由主模块
    var app=angular.module('movie.mainApp');
    //配置路由表
    app.config(function ($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo:'/in_theaters'
            })
    })
})(angular)