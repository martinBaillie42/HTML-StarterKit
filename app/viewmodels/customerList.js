/**
 * Created by martin on 12/02/2017.
 */
'use strict';
define(function(require){
    var backend = require('./backend');
    var ko = require('knockout');

    return {
        customers: ko.observableArray([]),
        activate: function () {
            var that = this;
            return backend.getCustomers().then(function(results){
                console.log(results);
               that.customers(results);
            });
        }
    };
});