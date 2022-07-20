
  
Have you ever wanted to scrape data from Instagram Posts, but it seemed too complicated or techie? Our Instagram Post Scraper has got you covered!

  

Just decide whose Instagram posts you want to scrape (e.g. @nasa) and how many recent posts you need (let's say 314) and you're good to start scraping.

  

## What does Instagram Post Scraper do?

Our free Instagram Post Scraper allows you to scrape public posts from any Instagram user. Just enter one or more Instagram usernames and you can extract and download all their posts and their details onto your computer.

  

You can download that structured data in Excel, HTML, XML, CSV, Excel, and JSON to use in reports, data visualizations, spreadsheets, and applications.

  

## How much does it cost to scrape Instagram posts?

Scraping a 1,000 Instagram posts will cost you just **$4.25 platform credits** from your [Apify subscription plan](https://apify.com/pricing). For instance, the Apify Personal plan ($49) would allow you to scrape about **11,500 Instagram posts** monthly.

  

If you're wondering which pricing plan would suit your needs best, see our [pricing page](https://apify.com/pricing) or a video explaining &#9655; [how to choose the right subscription plan](https://www.youtube.com/watch?v=s_89WpOsKRI).

  

## How to scrape Instagram posts

Instagram Post Scraper was created to be fast and easy to use. We've made two tutorials that should solve the learning question for you: [a simple guide](https://blog.apify.com/how-to-scrape-instagram-posts-in-5-easy-steps/) and a [quick video](https://www.youtube.com/watch?v=Wzfo3qSSbtU) &#9655;

[![Apify - IG Post video](https://img.youtube.com/vi/Wzfo3qSSbtU/0.jpg)](https://www.youtube.com/watch?v=Wzfo3qSSbtU)

  

## Want to scrape Instagram hashtags, profiles, or comments?

Use our super fast and easy dedicated scrapers if you want to scrape specific Instagram data. There are fewer settings to change and faster results. Just enter one or more Instagram usernames or URLs and click **Start** to scrape Instagram.

  

- [Instagram Hashtag Scraper](https://apify.com/zuzka/instagram-hashtag-scraper)

- [Instagram Profile Scraper](https://apify.com/zuzka/instagram-profile-scraper)

- [Instagram Comment Scraper](https://apify.com/zuzka/instagram-comment-scraper)

  

## Need something more advanced?

Try our more advanced [Instagram Scraper](https://apify.com/jaroslavhejlek/instagram-scraper) if you need more options and are comfortable with changing settings. Let us know if you need a [custom Instagram scraping solution](https://apify.com/custom-solutions).

  

## How can you use Instagram posts data?

So what can you do with all that data you collect by web scraping? Here are just some ideas:

  

- improve your market research

- help you optimize your marketing and PR

- assist with sentiment analysis

- help you understand audience engagement

- datasets containing thousands or millions of Instagram posts can be used to train your AI models, monitor fake news, or fight hate speech.

  

## Do I need to use proxies to scrape Instagram?

Yes, you need to use proxies when scraping Instagram. Instagram now aggressively blocks all scraping attempts that don't use either residential proxies or a login. Every new Apify account includes a small free trial of residential proxies, so you should be able to test any of our Instagram scrapers. If the scraper stops working for you, it might be because you need to subscribe to a paid plan and get access to Apify residential proxies.

  

## Input parameters

There are just two fields to fill out: an Instagram username (one or multiple) and the number of results you'd like to receive. Let's scrape the recent Instagram posts from Volodymyr Zelenskiy's Instagram account.

  

![Apify - Instagram Post Scraper input](https://imgur.com/jK8TUxO.png)

Or, as it would look in JSON format:

```json

{

"username": ["zelenskiy_official"],

"resultsLimit": 10

}

```

  

## Instagram output

Each item will be a separate item in the dataset. You can view the extracted data as an overview table or see all fields in different formats. You can then export them from the platform onto your computer or integrate with other apps directly.

  

![Apify - Instagram Post Scraper output](https://imgur.com/1fb1pwO.png)

  

Or, as it would look in JSON format:

  

```json

[{

"queryUsername": "zelenskiy_official",

"position": 1,

"id": "2872052725666677091",

"type": "Image",

"shortCode": "CfblLy5jgFj",

"caption": "Під час телефонної розмови з Президентом Німеччини @bundespraesident.steinmeier обговорили подальше нарощування оборонної підтримки України. Для нас цінна солідарність німецького народу на шляху України до ЄС і підтримка в протидії агресії. Дякую за співчуття у зв'язку з нелюдською атакою на Кременчук.",

"hashtags": [],

"mentions": [

"bundespraesident.steinmeier"

],

"url": "https://www.instagram.com/p/CfblLy5jgFj/",

"commentsCount": 96,

"firstComment": "",

"latestComments": [],

"dimensionsHeight": 720,

"dimensionsWidth": 1080,

"displayUrl": "https://instagram.fkhi6-1.fna.fbcdn.net/v/t51.2885-15/290674587_140442341970727_8442312739974023977_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fkhi6-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=gdRSwayFqbcAX-rvqMD&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT_rg_MGnokkRvEpUYg8rDSZp0Ufm3MJlACTiKGIvGgqhw&oe=62C5443E&_nc_sid=7bff83",

"images": [],

"alt": null,

"likesCount": 5066,

"timestamp": "2022-06-30T13:23:06.000Z",

"childPosts": [],

"locationName": null,

"locationId": null,

"ownerFullName": null,

"ownerUsername": "zelenskiy_official",

"ownerId": "4731970969"

},

{

"queryUsername": "zelenskiy_official",

"position": 2,

"id": "2871931386540652607",

"type": "Sidecar",

"shortCode": "CfbJmFCDPg_",

"caption": "Україна — держава, де найвищою цінністю є людина. І ми воюємо проти агресора, для якого найвища цінність – це зброя.\n\n——\n\nUkraine is a state where the highest value is a person. And we are fighting against the aggressor whose highest value is weaponry.\n\nPhoto: Ivor Prickett for The New York Times, Heidi Levine for The Washington Post, Evgeny Zavgorodniy, Metin Aktas for Anadolu Images, Julia Kochetova, Marco Djurica, Serhii Korovainyi.",

"hashtags": [],

"mentions": [],

"url": "https://www.instagram.com/p/CfbJmFCDPg_/",

"commentsCount": 2463,

"firstComment": "",

"latestComments": [],

"dimensionsHeight": 498,

"dimensionsWidth": 750,

...

```

  

You can manage the results in any language (Python, PHP, Node.js/NPM). See the [Apify API docs](https://docs.apify.com/api/v2) to learn more about getting results from the scraper.

  

## Is it legal to scrape Instagram?

Our Instagram scrapers are ethical and do not extract any private user data such as email addresses, gender, or location. They only extract what the user has chosen to share publicly. We therefore believe that our scrapers, when used for ethical purposes by Apify users, are safe.

  

However, you should be aware that your results could contain personal data. Personal data is protected by the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).
