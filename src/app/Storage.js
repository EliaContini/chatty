//
// Application storage: it manages server I/O (and cache), prepare data and
// notifies changes to registered observers
//
// Author: Elia Contini
//
define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/Stateful",
    "dojo/request"
], function (declare, lang, Stateful, http) {
    return declare([Stateful], {
        lastTimestamp: null, // used to avoid to request all messages everytime
        nickname: null,

        // dev token : fdac83e677d2626247f62b1bc979e66a
        //
        // prod token: d7a57e6adf3ac3dc9c0abcf18234a66d (default)
        //
        // test token: 0397be091db84e163ee8a6846983f8a3
        token: "d7a57e6adf3ac3dc9c0abcf18234a66d",

        endpoint: "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/",

        refreshInterval: 500, // milliseconds

        /**
         * Retrieves chat messages
         *
         * @returns {dojo/promise/Promise} a promise fulfilled with the
         *       handled data of the response
         */
        getMessages: function () {
            
            var endpoint = this.endpoint;
            var query = {
                token: this.token
            };

            if (this.lastTimestamp != null) {
                query["since"] = this.lastTimestamp;
            }

            return http
                .get(endpoint, {
                    handleAs: "json",
                    headers: {
                        "X-Requested-With": null // CORS management
                    },
                    query: query,
                    preventCache: true
                })
                .then(lang.hitch(this, "_getMessagesPrepareData"));
        },

        /**
         * Send a message to the chat
         *
         * @param {object} params
         * @param {object} params.message - the message to be sent
         *
         * @returns {dojo/promise/Promise} a promise fulfilled with the
         *       handled data of the response
         */
        sendMessage: function (params) {
            var endpoint = this.endpoint;

            var data = {
                author: this.nickname,
                message: params["message"]
            };

            return http
                .post(endpoint, {
                    data: JSON.stringify(data),
                    handleAs: "json",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": null, // CORS management
                        token: this.token
                    },
                    preventCache: true
                })
                .then(lang.hitch(this, "_sendMessagePrepareData"));
        },
        // ------------------------------------------------------ helper methods
        _getMessagesPrepareData: function (response) {
            var messages = response;

            // this are supposed messages returned by the server
            // they are in reverse chronological order
            messages = [
                {
                    author: "Elia",
                    message: "for me too",
                    timestamp: 1595666990000
                },
                {
                    author: "Alice",
                    message: "yes",
                    timestamp: 1595666880000
                },
                {
                    author: "Bob",
                    message: "is it OK for you?",
                    timestamp: 1595666826994
                }
            ];

            if (messages.length > 0) {
                this.lastTimestamp = messages[0]["timestamp"];
            }

            return messages;
        },

        _sendMessagePrepareData: function (response) {
            var message = response;

            return message;
        }
    });
});
