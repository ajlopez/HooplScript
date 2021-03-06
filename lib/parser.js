
var sg = require('simplegrammar');
var get = sg.get;

var rules = [
    get([' ','\t','\r','\n']).oneOrMore().skip(),
    get(['a-z', 'A-Z', '_'], get(['a-z', 'A-Z', '_', '0-9']).zeroOrMore()).generate('Name'),
    get('0-9', get('0-9').zeroOrMore()).generate('Integer')
]

function createParser(text) {
    return sg.createParser(text, rules);
}

module.exports = {
    createParser: createParser
};