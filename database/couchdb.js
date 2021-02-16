const NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
    auth: {
        user : 'jvcadz',
        pass: 'jvcadz'
    }
})

module.exports = couch;