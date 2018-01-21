(function () {
    'use strict';
    angular.module('liera').factory('index3_factory', index3_factory);

    EstudoCancelamentoFactory.$inject = ['$http', 'SETTINGS'];
    var routePrefix = 'rentabilidade/incluir/';
    function EstudoCancelamentoFactory($http, SETTINGS) {
        return {
            realizarCancelamento: _realizarCancelamento,
           
        };

        function _realizarCancelamento(id, mensagem) {
            var url = String.format('{0}rentabilidade/cancelarproposta?id={1}&justificativa={2}', SETTINGS.SERVICE_URL, id, mensagem);
            return $http.get(url);
        }

    }
})();