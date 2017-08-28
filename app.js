const express = require('express');
const app = express();
var soap = require('soap');
var wsdl = 'http://sira.intecoingenieria.com/SWEstimacionParada.asmx?WSDL';
var xml2js = require('xml2js');
var parser = new xml2js.Parser({explicitArray: false});

app.use(express.static('./dist'));

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
})

app.listen(3000, function () {
  console.log('Vitrasa app listening on port 3000!');
})
