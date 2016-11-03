![socialAPI](https://img.shields.io/badge/socialAPI-v1.3.3-0769ad.svg?style=flat-square)

# [Social API JS](http://yoriiis.github.io/social-api.js)

Easy way to load social API properly in your Javascript. SocialAPI is compatible with :

* [Facebook API](#facebook_api)
* [Youtube API](#youtube_api)
* [Google Plus API](#google_plus_api)
* [Google Maps API](#google_maps_api)
* [Twitter API](#twitter_api)
* [Pinterest API](#pinterest_api)
* [Vkontakte API](#vkontakte_api)
* [Others API url](#others_api)

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

## Examples


### <a name="facebook_api"></a>Facebook API

This function accept one parameter, the locale, which can be changed with the language code, please respect the syntax of the language. By default, API is loaded in `fr_FR`.<br />
The function assigned to `window.fbAsyncInit` is run as soon as the SDK has completed loading. The code placed within this function initialize any social plugins.
```javascript
window.fbAsyncInit = function(){
    //Parse all Facebook social plugins
    FB.XFBML.parse();
}
socialAPI.load.facebook('fr_FR');
```

### <a name="youtube_api"></a>Youtube API

This function accept one parameter, type of API, you can choose between iframe or player with parameter `iframe_api` or `player_api`. By default, `iframe_api` is used.<br />
The function assigned to `window.onYouTubeIframeAPIReady` is run as soon as the SDK has completed loading.
```javascript
window.onYouTubeIframeAPIReady = function(){
    //Init Youtube player with API
}
socialAPI.load.youtube();
```

### <a name="google_plus_api"></a>Google Plus API

This function accept one parameter, the locale, which can be changed with the language code, please respect the syntax of the language. By default, API is loaded in `fr`.
```javascript
socialAPI.load.googlePlus('fr');
```

### <a name="google_maps_api"></a>Google Maps API

This function accept two parameters, api key required by API and callback function when API is ready (the name of the function must be a string), <a href="https://developers.google.com/maps/documentation/javascript/" target="_blank" title="more informations on Google Maps API">more informations on Google Maps API</a>

```javascript
socialAPI.load.googleMaps('xxxxx', 'window.callbackGMapAPIReady');
```

### <a name="twitter_api"></a>Twitter API

Load directly without options.

```javascript
socialAPI.load.twitter();
```

### <a name="pinterest_api"></a>Pinterest API

Load directly without options.

```javascript
socialAPI.load.pinterest();
```

### <a name="vkontakte_api"></a>Vkontakte API

Load directly without options.

```javascript
socialAPI.load.vkontakte();
```

### <a name="others_api"></a>Others API

If you want to use an other APIs, not available in socialAPI, use `url` method which accept any url.

```javascript
socialAPI.load.url('https://apis.google.com/js/plusone.js');
```

### Options

#### Asynchrone

Asynchrone loading is enabled by default, but you can disabled it.

```javascript
socialAPI.async = false;
```
