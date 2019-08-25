'use strict'

exports.handler = function (event, context, callback) {

    var language = process.env.language.toLowerCase()

    if(language === 'french') {
        var lang_resp = '<p>Bonjour</p>'
    } else {
        var lang_resp = '<p>Hello</p>'
    }

    var response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        },

    body: lang_resp
}
    callback(null, response)
}