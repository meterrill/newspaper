newspaperBeats.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId);
  $scope.addReporter = function() {
    $scope.beat.reporters.push({name: $scope.reporterName, birthday: $scope.birthday, yearsOfEmployment: $scope.yearsOfEmployment});
    $scope.reporterName = null;
    $scope.birthday = null;
    $scope.yearsOfEmployment = null;
  };
});
