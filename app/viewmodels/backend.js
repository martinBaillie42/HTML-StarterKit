/**
 * Created by martin on 12/02/2017.
 */
'use strict';
define(function(require){
    const Q = require('Q');
    console.log('Q', Q);
    return {
        getCustomers: function () {
            return Q([{fullName: 'martin'}, {fullName: 'jo'}]);
        }
    }
});