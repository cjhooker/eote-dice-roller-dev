appModule.service("playerService", ["messageService", "diceService", function (messageService, diceService) {

    this.getPlayerList = function () {
        return gapi.hangout.getEnabledParticipants();
    }

    this.getCurrentPlayer = function () {
        return gapi.hangout.getLocalParticipant();
    }

    this.setDiceForPlayer = function (playerId, diceQuantities) {
        gapi.hangout.data.setValue("diceQuantities-" + playerId, JSON.stringify(diceQuantities));
    }

    this.getDiceForPlayer = function (playerId) {
        var diceQuantities = gapi.hangout.data.getValue("diceQuantities-" + playerId);
        if (diceQuantities == undefined) {
            return diceService.getEmptyDiceQuantities();
        } else {
            return JSON.parse(diceQuantities);
        }
    }
}]);
