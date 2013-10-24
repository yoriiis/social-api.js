(function( $, window ){

	'use strict';

	var socialAPI 	= window.socialAPI || {},
		doc   	= document,
		body 	 = doc.getElementsByTagName('body')[0];

	//Load script in asynchrone mode
	socialAPI.async   = true;

	//Manage API to load and params
	socialAPI.load  = {

		twitter: function(){
			this.append('//platform.twitter.com/widgets.js', 'twitter-wjs');
		},

		pinterest: function(){
			this.append('//assets.pinterest.com/js/pinit.js');
		},

		youtube: function(){
			this.append('//youtube.com/player_api');
		},

		facebook: function( locale ){

			var defaultLanguage = 'fr_FR',
			    localeSDK = ( typeof locale != 'undefined' ) ? locale : defaultLanguage,
			    tag;

			if( doc.getElementById('facebook-jssdk') ) {return}

			tag = document.createElement('div');
			tag.id = 'fb-root';
			doc.getElementsByTagName('body')[0].appendChild( tag );

			this.append('//connect.facebook.net/' + localeSDK + '/all.js#xfbml=1&status=0', 'facebook-jssdk');

		},

		googlePlus: function( locale ){

			var defaultLanguage = 'fr',
			    localeSDK = ( typeof locale != 'undefined' ) ? locale : defaultLanguage;

			window.___gcfg = { lang: localeSDK };
			this.append('//apis.google.com/js/plusone.js');

		},

		append: function( url, id ){
			
			var tag;

			tag = doc.createElement('script');
			tag.async = socialAPI.async;
			if( typeof id != 'undefined' ){
				tag.id = id;
			}
			tag.type = 'text/javascript';
			tag.src = url;
			body.appendChild( tag );

		}

	}

	window.socialAPI = socialAPI;
	
})( jQuery, window )
