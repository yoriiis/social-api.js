/**
 *
 * Plugin:
 * @version 1.3.3
 *
 * @author: Joris DANIEL
 * @fileoverview: Easy way to load social API properly in your Javascript
 * Twitter, Pinterest, Youtube, Facebook, GooglePlus, GoogleMaps, VKontakte or any API url
 *
 * Copyright (c) 2016 Joris DANIEL
 * Licensed under the MIT license
 *
 **/
(function(win, doc) {

    'use strict';

    var socialAPI = win.socialAPI || {},
        targetDOM = doc.getElementsByTagName('body')[0];

    //Prevent use in <head>
    if( typeof targetDOM === 'undefined' ){
        targetDOM = doc.getElementsByTagName('head')[0];
    }

    socialAPI = {

        async: true,

        load: {

            twitter: function twitter() {
                this.append('https://platform.twitter.com/widgets.js', 'twitter-wjs');
            },

            pinterest: function pinterest() {
                this.append('https://assets.pinterest.com/js/pinit.js');
            },

            youtube: function youtube(api) {

                var defaultAPI = 'iframe_api',
                    versionAPI = (typeof api != 'undefined') ? api : defaultAPI;
                this.append('https://youtube.com/' + versionAPI);

            },

            facebook: function facebook(locale) {

                var defaultLanguage = 'fr_FR',
                    localeSDK = (typeof locale != 'undefined') ? locale : defaultLanguage;

                //If Facebook SDK already exist
                if (doc.getElementById('facebook-jssdk')) {
                    return;
                }

                //More information : https://developers.facebook.com/docs/javascript/quickstart
                this.append('https://connect.facebook.net/' + localeSDK + '/sdk.js#version=v2.5', 'facebook-jssdk');

            },

            googlePlus: function googlePlus(locale) {

                var defaultLanguage = 'fr',
                    localeSDK = (typeof locale != 'undefined') ? locale : defaultLanguage;

                //Change the locale
                win.___gcfg = { lang: localeSDK };

                this.append('https://apis.google.com/js/plusone.js');

            },

            googleMap: function(apiKey, callback){

                var urlApi = 'https://maps.googleapis.com/maps/api/js';

                if( typeof apiKey !== 'undefined' ){
                    urlApi += '?key=' + apiKey;
                }else{
                    console.warn('Google Map API Javascript need a valid api key');
                }

                if( typeof callback !== 'undefined' ){
                    urlApi += '&callback=' + callback;
                }

                this.append(urlApi);
            },

            vkontakte: function vkontakte(){
                this.append('https://vkontakte.ru/js/api/openapi.js');
            },

            url: function url(urlAdress){
                this.append(urlAdress);
            },

            append: function append(url, id) {

                var tag = doc.createElement('script');
                tag.async = this.async;
                if (typeof id != 'undefined') {
                    tag.id = id;
                }
                tag.type = 'text/javascript';
                tag.src = url;
                targetDOM.appendChild(tag);

            }
        }
    }

    win.socialAPI = socialAPI;

})(window, document);