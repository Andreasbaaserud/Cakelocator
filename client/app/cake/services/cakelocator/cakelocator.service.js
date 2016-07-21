'use strict';

const Promise = require('promise-polyfill');
const _ = require('lodash');

class CakelocatorService {
    constructor($http) {
        "ngInject";
        this.$http = $http;
        this.baseUrl = '';
    }

    static getInstance($http) {
        return new CakelocatorService($http);
    }

    getCakeList() {
        var cakeList = [];
        var promise = this.$http.get("http://localhost:3000/cakelist").then(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                cakeList.push(response.data[i]);
            }
            return cakeList;
        });
        return promise;
    }

    saveCake (type, location, size) {
        console.log("hei");
        this.$http.post("http://localhost:3000/cakelist", { "type" : type, "location": location, "sizeLeft": size}).then((response) => {
            console.log(response);
        }, (errorCallback) => {

        });
    }
}

CakelocatorService.getInstance.$inject = ['$http'];

export default CakelocatorService.getInstance;