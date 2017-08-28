const express = require('express');
const app = express();
var soap = require('soap');
var wsdl = 'http://sira.intecoingenieria.com/SWEstimacionParada.asmx?WSDL';
var xml2js = require('xml2js');
var parser = new xml2js.Parser({explicitArray: false});

app.use(express.static('./public'));

app.get('/api/stop/:stopid/panel', function (req, res) {
  soap.createClient(wsdl, function(err, client) {
      var args = {IdParada: req.params.stopid};
      client.EstimacionParadaIdParada(args, function(err, result) {
        var xml = result.EstimacionParadaIdParadaResult;
        parser.parseString(xml, function (err, resultjson) {
          var estimaciones = resultjson.NewDataSet.Estimaciones;
          res.send(estimaciones);
        });
      });
  });
});

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

app.listen(port, function () {
  console.log('Vitrasa app listening on port ' + port);
});
