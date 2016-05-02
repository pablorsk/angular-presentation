function MyCtrl( $scope ) {
    $scope.employeeName = "Pablo";
    $scope.company = "Reyesoft";
    $scope.save_info = function() {
        alert($scope.employeeName);
    }
}
