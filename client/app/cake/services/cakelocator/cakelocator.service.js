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
            cakeList = response.data;
            return cakeList;
        });
        return promise;
    }

    getLatestCake(lastCakeId) {
        var cakeList = [];

        var promise = this.$http.get("http://localhost:3000/cakelist").then((response) => {
            for (var i = lastCakeId; i < response.data.length; i++) {
                var cake = {};
                cake.type =  _.get(response.data[i], "type"),
                cake.location = _.get(response.data[i], "location"),
                cake.sizeLeft = _.get(response.data[i], "sizeLeft")
                
                cakeList.push(cake);
            }
            return cakeList;
        });
        return promise;
    }

    getCakeListSize() {
        var size= 0;
        this.$http.get("http://localhost:3000/cakelist").then((response) => {
            for(var i = 0; i < response.data.length; i++){
                size++;
            }
            return size;
        });
    }

    saveCake (type, location, size) {
        var promise = this.$http.post("http://localhost:3000/cakelist", { "type" : type, "location": location, "sizeLeft": size}).then((response) => {
            console.log("saved new kake");
        }, (errorCallback) => {

        });
        return promise;
    }

    removeFirstCake() {
        var promise = this.$http.delete("http://location:3000/cakelist", { "id": this.getCakeListSize()-this.getCakeListSize()+1});
    }
}

CakelocatorService.getInstance.$inject = ['$http'];

export default CakelocatorService.getInstance;