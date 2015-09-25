angular.module('feature.reward')
    .controller('RewardCtrl', function($scope, $rootScope, $location, $state, $http, $stateParams, $mdDialog){
        $rootScope.$broadcast('changeMenuVisibility', false);
        var id = $stateParams.id;
        $scope.currentQuestLevel = $stateParams.level;
        $http.get('https://pfhackathon.secanis.ch/api/reward/' + id).
            then(function (resp) {
                $scope.rewards = resp.data;

            }, function (response) {
                $rootScope.$broadcast('error');
            });

        $scope.redeem = function(reward) {



          var confirm = $mdDialog.confirm()
            .title('Reward anfordern')
            .content('Möchten Sie den Reward anfordern?')
            .ariaLabel('bla')
            .ok('Ja, gerne')
            .cancel('Nein danke');
          $mdDialog.show(confirm).then(function() {

              $http.put('https://pfhackathon.secanis.ch/api/reward/' + reward.rewardID, {}).
                  then(function(response) {
                    reward.inUse = 1;
                    alert = $mdDialog.alert({
                        title: 'Vielen Dank',
                        content: 'Sie werden in den nächsten Tagen von uns schriftlich benachrichtig.',
                        ok: 'Schliessen'
                    });
                    $mdDialog
                        .show( alert )
                        .finally(function() {
                            alert = undefined;
                        });
                  }, function(response) {
                      $rootScope.$broadcast('error');
                  });
          }, function() {

          });
        }
    });
