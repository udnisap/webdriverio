/**
 *
 * Protocol bindings to get the session storage size.
 *
 * @returns {Number} The number of items in the storage.
 * @callbackParameter error, response
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/session_storage/size
 * @type protocol
 *
 */

module.exports = function sessionStorageSize () {

    this.requestHandler.create(
        '/session/:sessionId/session_storage/size',
        arguments[arguments.length - 1]
    );

};