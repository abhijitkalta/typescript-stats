"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(analyser, outPutTraget) {
        this.analyser = analyser;
        this.outPutTraget = outPutTraget;
    }
    Summary.prototype.buildAndPrintReport = function (matchData) {
        var output = this.analyser.run(matchData);
        this.outPutTraget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
