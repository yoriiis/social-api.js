Social API JS
==================================================

Easy way to load social API properly in your Javascript

Call socialAPI in your HTML and use it to add SDK or any url in your HTML.

```html
<script src="js/social-api.js"></script>
```

Load directly API in Javascript, not necessarily in document ready.
Asynchrone loading is enable by default, but you can disable it.

```javascript
socialAPI.load.twitter();
socialAPI.load.pinterest();
socialAPI.load.youtube();
socialAPI.load.facebook();
socialAPI.load.googlePlus();
socialAPI.load.url('anyOtherUrl');
socialAPI.async = false;
```
<hr />
### Facebook example

The function assigned to window.fbAsyncInit is run as soon as the SDK has completed loading. The code placed within this function initialize any social plugins.
The locale can be change for Facebook with parameter "fr_FR", please respect the syntax of the language.
```javascript
window.fbAsyncInit = function(){
    FB.XFBML.parse();
}
socialAPI.load.facebook();
```
<hr />
### Youtube example

The function assigned to window.onYouTubeIframeAPIReady is run as soon as the SDK has completed loading.
You can choose between two API, iframe (by default) or player with parameter "iframe_api" or "player_api".
```javascript
window.onYouTubeIframeAPIReady = function(){
    //Init Youtube player with API
}
socialAPI.load.youtube();
```
<hr />
### Google Plus example

The locale can be change for Google Plus with parameter "fr", please respect the syntax of the language.
```javascript
socialAPI.load.googlePlus('fr');
```