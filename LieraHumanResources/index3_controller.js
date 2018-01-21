(function () {
    'use strict';
    angular
        .module('lierahuanresources')
        .controller('index3ctrl', index3ctrl);

    index3ctrl.$inject = ['index3_factory', 'item', 'id', '$uibModalInstance', 'ErroFactory', '$stateParams'];

    
})();