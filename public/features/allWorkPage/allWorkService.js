var app = angular.module('intermountain-lift');


app.service('allWorkService', function() {
    this.storeWorkType = function(workType) {
        this.currWorkType = workType;
    }
    
    this.retrieveWorkType = function() {
        if (!this.currWorkType) {
            this.currWorkType = 'Amusement';
        }
        console.log("okay...", this.currWorkType)
        return this.currWorkType;
    }
});