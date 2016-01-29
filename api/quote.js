'use strict';

var Quote = require('../models/quote');


module.exports.getAllQuotes = function(req, res) {  
    Quote.find(function(err, quotes) {
        if (err) {
            res.send(err);
        }
        res.json({quotes: quotes});
    });
};

module.exports.addQuote = function(req,res) {  
    var quote = new Quote(req.body.quote);
    quote.save(function(err) {
        if (err) {
            res.send(err);
            
        }
        res.json({quote: quote});
    });
}; 


module.exports.updateQuote = function(req, res, id) {  
        Quote.findByIdAndUpdate(id, {$set: req.body.quote}, function(err, quote) {
            if (err) {
                res.send(err);
            };
            res.json({quote: quote});
        });
};

module.exports.deleteQuote = function(req, res, id) {  
        Quote.findByIdAndRemove(id, function(err, quote) {
           if (err) {
                res.send(err);
           }
            res.json({quote: quote});
        });
};
