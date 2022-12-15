var ping = require('ping');

ping.sys.probe('1.2.3.4', function(isAlive){
    var msg = isAlive ? 'host ' + ' is alive' : 'host ' + ' is dead';
    console.log(msg);
});