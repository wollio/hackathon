angular.module('feature.overview')

    .controller('OverviewCtrl', function ($scope, $rootScope, $location, $state, $http, $mdDialog) {

        $rootScope.$broadcast('changeMenuVisibility', false);
        $scope.allLoaden = false;

        $http.get('https://pfhackathon.secanis.ch/api/quest').
            then(function (respon) {
                $scope.user = respon.data;
                $http.get('https://pfhackathon.secanis.ch/api/history').
                    then(function (resp) {
                        $scope.history = resp.data;
                        $scope.user.masterQuest.points = 0;
                        $scope.user.quests.forEach(function (quest) {
                            quest.points = 0;
                            $scope.history.forEach(function (hist) {
                                if (hist.serviceID == quest.serviceID) {
                                    quest.points += 1;
                                }
                            });
                            $scope.user.masterQuest.points += quest.points;
                            calculateStuff(quest);
                        });
                        calculateStuff($scope.user.masterQuest);
                        $scope.allLoaden = true;
                    }, function (responses) {
                        $rootScope.$broadcast('error');
                    });
            }, function (response) {
                $rootScope.$broadcast('error');
            });

        $scope.openQuest = function (id, level) {
            $location.path('/reward/' + id + '/' + level);
        };

        var calculateStuff = function (quest) {
            var allPointsUsed = false;
            quest.level = 0;
            var pointsNeededForLevel = 0;
            while (!allPointsUsed) {
                if (quest.level != 0) {
                    pointsNeededForLevel = parseInt(quest.startPoints) * quest.factor * quest.level;
                } else {
                    pointsNeededForLevel = parseInt(quest.startPoints);
                }

                if (pointsNeededForLevel <= quest.points) {
                    quest.points -= pointsNeededForLevel;
                    quest.level++
                } else {
                    if (quest.level != 0) {
                        quest.pointsNeededForLevel = (parseInt(quest.startPoints) * quest.factor * (quest.level + 1) );
                        quest.percentOfActualLevel = 100 / quest.pointsNeededForLevel * quest.points;
                    } else {
                        quest.pointsNeededForLevel = parseInt(quest.startPoints);
                        quest.percentOfActualLevel = 100 / quest.pointsNeededForLevel * quest.points;
                    }
                    allPointsUsed = true;
                }
            }

        };


    });
