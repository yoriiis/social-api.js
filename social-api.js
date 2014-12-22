/**
 *
 * Plugin:
 * @version 1.1
 *
 * @author: Joris DANIEL
 * @fileoverview: Easy way to load social API properly in your Javascript
 * Twitter, Pinterest, Youtube, Facebook, GooglePlus, VKontakte
 *
 * Copyright (c) 2014 Joris DANIEL
 * Licensed under the MIT license
 *
 **/

(function(win, doc) {

    'use strict';

    var socialAPI = win.socialAPI || {},
        body = doc.getElementsByTagName('body')[0];

    //Load script in asynchrone mode
    socialAPI.async = true;

    //Manage API to load and params
    socialAPI.load = {

        twitter: function() {
            this.append('//platform.twitter.com/widgets.js', 'twitter-wjs');
        },

        pinterest: function() {
            this.append('//assets.pinterest.com/js/pinit.js');
        },

        youtube: function() {
            this.append('//youtube.com/player_api');
        },

        facebook: function(locale) {

            var defaultLanguage = 'fr_FR',
                localeSDK = (typeof locale != 'undefined') ? locale : defaultLanguage,
                tag;

            //If Facebook SDK already exist
            if (doc.getElementById('facebook-jssdk')) {
                return;
            }

            //Add fb-root tag
            tag = document.createElement('div');
            tag.id = 'fb-root';
            doc.getElementsByTagName('body')[0].appendChild(tag);

            //More information : https://developers.facebook.com/docs/javascript/quickstart
            this.append('//connect.facebook.net/' + localeSDK + '/sdk.js', 'facebook-jssdk');

        },

        googlePlus: function(locale) {

            var defaultLanguage = 'fr',
                localeSDK = (typeof locale != 'undefined') ? locale : defaultLanguage;

            //Change the locale
            win.___gcfg = { lang: localeSDK };

            this.append('//apis.google.com/js/plusone.js');

        },

        vkontakte: function(){
            this.append('//vkontakte.ru/js/api/openapi.js');
        },

        append: function(url, id) {

            var tag = doc.createElement('script');
            tag.async = socialAPI.async;
            if (typeof id != 'undefined') {
                tag.id = id;
            }
            tag.type = 'text/javascript';
            tag.src = url;
            body.appendChild(tag);

        }

    }

    win.socialAPI = socialAPI;

})(window, document);
