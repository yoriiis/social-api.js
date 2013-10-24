Social API
==================================================

Easy way to load social API properly in your Javascript

Add this code before the closing </body> tag. Do not add SDK in your HTML, and don't add "fb-root" tag for Facebook SDK, all it's automatically add with the script.

```html
<script src="js/social-api.js"></script>
```

Load directly API in Javascript, not in document ready. You can change async mode in the file.

```javascript
socialAPI.load.twitter();
socialAPI.load.pinterest();
socialAPI.load.youtube();
socialAPI.load.facebook();
socialAPI.load.googlePlus();
```

The locale can be change for Facebook and Google Plus (Respect the syntax of the language)

```javascript
socialAPI.load.facebook('fr_FR');
socialAPI.load.googlePlus('fr');
```