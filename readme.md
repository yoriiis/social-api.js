![socialAPI](https://img.shields.io/badge/socialAPI-v1.4.0-0769ad.svg?style=flat-square)

# [Social API JS](http://yoriiis.github.io/social-api.js)

Easy way to load social API properly in your Javascript. SocialAPI is compatible with :

* [Facebook API](#facebook_api)
* [Youtube API](#youtube_api)
* [Google Plus API](#google_plus_api)
* [Google Maps API](#google_maps_api)
* [Twitter API](#twitter_api)
* [Pinterest API](#pinterest_api)
* [Vkontakte API](#vkontakte_api)
* [Custom API url](#others_api)

## Installation

Download the project or if you'd like to use [bower](http://bower.io), it's as easy as:

```sh
bower install social-api.js --save
```

Call socialAPI in your HTML and use it to add SDK or any API url in your HTML.
Load directly API in Javascript, not necessarily on document ready.

```html
<script src="js/social-api.js"></script>
```

## How it works

Use `load` function on socialAPI to load one of these apis:

* `facebook`
* `youtube`
* `googlePlus`
* `googleMaps`
* `twitter`
* `pinterest`
* `vkontakte`
* `vkontakte`
* `custom` - Add custom url to load specific api

`options` - _(object)_ specific configuration for each api.

```javascript
socialAPI.load('api_name', {options});
```

Asynchrone loading is enabled by default, but you can disabled it, before using load function.

```javascript
socialAPI.async = false;
```

### <a name="facebook_api"></a>Facebook API

List of `options` for Facebook API:

* `language` -  <a href="https://www.facebook.com/translations/FacebookLocales.xml" title="Documentation - List of languages" target="_blank">language of the SDK</a> (_string - fr_FR by default_)
* `version` - Version of SDK (_string - 2.9 by default_)
* `xfbml` - Parse DOM to initialize social plugins (_int - 0 by default_)

```javascript
//Basic usage
socialAPI.load('facebook');

//Customized use
socialAPI.load('facebook', {
   language: 'en_US',
   version: '2.9',
   xfbml: 1
});
```

The function assigned to `window.fbAsyncInit` is run as soon as the SDK has completed loading. The example below initialize any social plugins:

```javascript
window.fbAsyncInit = function(){
    FB.XFBML.parse();
}
```

### <a name="youtube_api"></a>Youtube API

List of `options` for Youtube API:

* `version` - Version of API (_string - iframe_api by default_)

```javascript
//Basic usage
socialAPI.load('youtube');

//Customized use
socialAPI.load('youtube', {
    api: 'player_api'
});
```

The function assigned to `window.onYouTubeIframeAPIReady` is run as soon as the SDK has completed loading, call them before load API. Initialize Youtube player in this function.

```javascript
window.onYouTubeIframeAPIReady = function(){ }
socialAPI.load('youtube');
```

### <a name="google_plus_api"></a>Google Plus API

List of `options` for Google Plus API:

* `language` -  <a href="https://developers.google.com/+/web/api/supported-languages" title="Documentation - List of languages" target="_blank">language of the SDK</a> (_string - fr by default_)

```javascript
//Basic usage
socialAPI.load('googlePlus');

//Customized use
socialAPI.load('googlePlus', {
    language: 'en'
});
```

### <a name="google_maps_api"></a>Google Maps API

List of `options` for Google Maps API:

* `apiKey` - Api key to use Javascript API</a> (_string_ required)
* `callback` - Function called when API is ready</a> (_string_)

```javascript
//Basic usage
socialAPI.load('googleMaps', {
   apiKey: 'api_key'
});

//Customized use
socialAPI.load('googleMaps', {
   apiKey: 'api_key',
   callback: 'window.onGoogleMapsAPIReady'
});
```

<a href="https://developers.google.com/maps/documentation/javascript/" target="_blank" title="Documentation - Google Maps API">More informations on Google Maps API</a>


### <a name="twitter_api"></a>Twitter API

No options for this API.

```javascript
//Basic usage
socialAPI.load('twitter');
```

### <a name="pinterest_api"></a>Pinterest API

No options for this API.

```javascript
//Basic usage
socialAPI.load('pinterest');
```

### <a name="vkontakte_api"></a>Vkontakte API

No options for this API.

```javascript
//Basic usage
socialAPI.load('vkontakte');
```

### <a name="others_api"></a>Others API

If you want to use an other API, not available in socialAPI, first parameter accept url. No options for this usage. The example below load Google Plus API :

```javascript
//Basic usage
socialAPI.load('https://apis.google.com/js/plusone.js');
```