angular.module('feature.overview')
    .controller('OverviewCtrl', function ($scope, $rootScope, $location, $state, $http) {

        $http.get('http://hackathon-secanis.rhcloud.com/index.php/api/quest').
            then(function (respon) {
                $scope.user = respon.data;
                $http.get('http://hackathon-secanis.rhcloud.com/index.php/api/history').
                    then(function (resp) {
                        $scope.history = resp.data;
                        $scope.user.masterQuest.points = 0;
                        $scope.user.quests.forEach(function (quest) {
                            $scope.history.forEach(function (hist) {
                                quest.points = 0;
                                if (hist.quest_id == quest.id) {
                                    quest.points += 1;
                                }
                            });
                            $scope.user.masterQuest.points += quest.points;
                            calculateStuff(quest);
                        });
                        calculateStuff($scope.user.masterQuest);

                    }, function (response) {
                        $rootScope.$broadcast('error');
                    });
            }, function (response) {
                $rootScope.$broadcast('error');
            });

        $scope.openQuest = function (id) {
            $location.path('/reward/' + id );
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
                        quest.percentOfActualLevel = 100 / (parseInt(quest.startPoints) * quest.factor * (quest.level + 1) ) * quest.points;
                    } else {
                        quest.percentOfActualLevel = 100 / parseInt(quest.startPoints) * quest.points;
                    }
                    allPointsUsed = true;
                }
            }
        };


    });