var Curso = /** @class */ (function () {
    function Curso(id, nome, ciencia) {
        this.nome = nome;
        this.ciencia = ciencia;
    }
    return Curso;
}());
;
var CRUD = /** @class */ (function () {
    function CRUD() {
        this.cursos = new Array();
    }
    CRUD.prototype.Consultar = function (id, nome, ciencia) {
    };
    return CRUD;
}());
angular.module('triagem', []);
