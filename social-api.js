/**
 *
 * Plugin:
 * @version 1.4.0
 *
 * @author: Yoriiis
 * @fileoverview: Easy way to load social API properly in your Javascript
 * Twitter, Pinterest, Youtube, Facebook, GooglePlus, GoogleMaps, VKontakte or any API url
 *
 * Copyright (c) 2017 Yoriiis
 * Licensed under the MIT license
 *
 **/
(function(win, doc) {

    'use strict';

    var socialAPI = {

        async: true,
        apiLoaded: [],

        //Prevent use in <head>
        targetDOM: doc.querySelector('body') || doc.querySelector('head'),

        load: function(api, options) {

            var config = {},
                nameApi = api;

            //Get config api from known apis or load custom url
            if (api in this.apis) {
                config = this.apis[api](options);
            } else {
                nameApi = 'custom';
                config = {
                    name: nameApi,
                    url: api
                }
            }

            if( config !== null ){

                //Add script tag in the DOM
                this.addScript(config);

                //Push new api in array to keep info
                this.apiLoaded.push({
                    name: nameApi,
                    url: config.url
                });

            }

        },

        addScript: function(options) {

            var script = doc.createElement('script'),
                options = options || {};

            script.async = this.async;

            if (typeof options.id !== 'undefined') {
                script.id = options.id;
            }

            script.type = 'text/javascript';
            script.src = options.url;
            this.targetDOM.appendChild(script);

        },

        apis: {

            twitter: function() {

                var apiUrl = 'https://platform.twitter.com/widgets.js';
                return {
                    url: apiUrl,
                    id: 'twitter-wjs'
                };

            },

            pinterest: function() {

                var apiUrl = 'https://assets.pinterest.com/js/pinit.js';
                return {
                    url: apiUrl
                };

            },

            youtube: function(options) {

                var apiUrl = 'https://youtube.com',
                    options = options || {},
                    version = (typeof options.api !== 'undefined') ? options.api : 'iframe_api';

                apiUrl += '/' + version;

                return {
                    url: apiUrl
                };

            },

            facebook: function(options) {

                var apiUrl = 'https://connect.facebook.net',
                    options = options || {},
                    language = (typeof options.language !== 'undefined') ? options.language : 'fr_FR',
                    version = (typeof options.version !== 'undefined') ? options.version : '2.9',
                    xfbml = (typeof options.xfbml !== 'undefined') ? options.xfbml : 0;

                //If Facebook SDK already exist
                if (doc.getElementById('facebook-jssdk')) {
                    console.warn('Facebook SDK is already loaded.');
                    return null;
                }

                apiUrl += '/' + language + '/sdk.js#xfbml=' + xfbml + '&version=v' + version;

                //More information : https://developers.facebook.com/docs/javascript/quickstart
                return {
                    url: apiUrl,
                    id: 'facebook-jssdk'
                };

            },

            googlePlus: function(options) {

                var apiUrl = 'https://apis.google.com/js/plusone.js',
                    options = options || {},
                    language = (typeof options.language !== 'undefined') ? options.language : 'fr';

                //Change the locale
                win.___gcfg = {
                    lang: language
                };

                return {
                    url: apiUrl
                };

            },

            googleMaps: function(options) {

                var apiUrl = 'https://maps.googleapis.com/maps/api/js',
                    options = options || {};

                if (typeof options.apiKey !== 'undefined') {
                    apiUrl += '?key=' + options.apiKey;
                }
                if (typeof options.callback !== 'undefined') {
                    apiUrl += '&callback=' + options.callback;
                }

                return {
                    url: apiUrl
                };

            },

            vkontakte: function() {

                var apiUrl = 'https://vkontakte.ru/js/api/openapi.js';
                return {
                    url: apiUrl
                };

            }

        }
    }

    win.socialAPI = socialAPI;

})(window, document);
