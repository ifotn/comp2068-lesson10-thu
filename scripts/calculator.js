/**
 * Created by RFreeman on 11/17/2016.
 */

// reference the angular app and controller to run the calculation
angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {

    // set the scope result variable
        $scope.result = function() {
            switch ($scope.op) {
                case '+': {
                    return parseInt($scope.x) + parseInt($scope.y);
                    break;
                }
                case '-': {
                    return $scope.x - $scope.y;
                    break;
                }
                case '*': {
                    return $scope.x * $scope.y;
                    break;
                }
                case '/': {
                    return $scope.x / $scope.y;
                    break;
                }
                default: {
                    return 'Enter 2 numbers and select an operator';
                    break;
                }
            }
        };
});
