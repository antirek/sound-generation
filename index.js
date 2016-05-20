var Q = require('q');
var yandex_speech = require('yandex-speech');
var texts = require('./texts');

var generate = function (params) {
    var defer = Q.defer();
    yandex_speech.TTS({
        text: params.text,
        file: params.file
        }, function () {
            defer.resolve('generate ' + params.file);
        }
    );  
    return defer.promise;
};

var promises = texts.map(function (text) {
    return generate(text);
});

Q.all(promises).then(function(res){
    console.log(res);
});