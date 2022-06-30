/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :["127.0.0.1", "::ffff:127.0.0.1", "::1"]
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},

{
	module: "MMM-JsonValue",
	position: "top_right",
	config: {
		apiBase: 'https://industrial.api.ubidots.com/api/v1.6/variables?token=BBFF-ZglcMrneQxQnj1sUSlHanfnHBu31Nd',
		method: "GET",

		title: "Smart Plant Growing System", // Widget Title, set to null if not needed
		icon: null, // Font Awesome icon, displayed before any text, set to null if not needed
		prefix: "Water Level: ", // Text displayed before the value, can be a blank String ""
		suffix: "%", // Text displayed after the value, can be a blank String ""
		jsonPath: "results[1].last_value.value", // value in the json to display, the module use https://github.com/dchester/jsonpath for parsing. You don't need leading $. in your path.

		refreshInterval: 1000 * 60, // refresh every minute
		skipPadding: true, // yo can un-comment this line if you want to display a related value below; using a second instance.
	}

 },
{
	module: "MMM-JsonValue",
	position: "top_right",
	config: {
		apiBase: 'https://industrial.api.ubidots.com/api/v1.6/variables?token=BBFF-ZglcMrneQxQnj1sUSlHanfnHBu31Nd',
		method: "GET",

		title: null, // Widget Title, set to null if not needed
		icon: null, // Font Awesome icon, displayed before any text, set to null if not needed
		prefix: "Moisture: ", // Text displayed before the value, can be a blank String ""
		suffix: "%", // Text displayed after the value, can be a blank String ""
		jsonPath: "results[0].last_value.value", // value in the json to display, the module use https://github.com/dchester/jsonpath for parsing. You don't need leading $. in your path.

		refreshInterval: 1000 * 1, // refresh every minute
		//skipPadding: true, // yo can un-comment this line if you want to display a related value below; using a second instance.
	}

 },
{
			module: "newsfeed",
			position: "bottom_right",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
{
            module: 'MMM-CoinMarketCap',
            position: "bottom_left",
            header: "Cryptocurrencies",
            config: {
                apiKey: '9177b257-aa32-4218-80f9-60841c34a48a',
                currencies: ['bitcoin', 'ethereum', 'DeFiChain', 'Nano'],
                view: 'graphWithChanges',
                conversion: 'USD',
                // See below for more Configuration Options
            }
        },

		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
{
    module:     'MMM-3Day-Forecast',
    position:   'top_right',
	config: {
		api_key:    'dd2f75d9773245d8a91e6fc8bbdec35f',
		lat:        1.290270,
		lon:        103.851959,
		units:      'M',
		lang:       'en',
		interval:   900000
	}
},
		
		
		
		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
