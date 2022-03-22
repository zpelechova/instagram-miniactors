## Features
Our free Instagram Post Scraper allows you to scrape public posts from any Instagram user. Just enter one or more Instagram usernames and you can extract and download all their posts.

**This scraper doesn't extract emails or any other contact details!**

## Why scrape Instagram posts?
Scraping Instagram posts can improve your market research, help you optimize your marketing and PR, assist with sentiment analysis, and help you understand audience engagement. Datasets containing thousands or millions of Instagram posts can be used to train your AI models, monitor fake news, or fight hate speech.

If you want more ideas, check out our [industries pages](https://apify.com/industries) for ways web scraping is already being used in a wide range of companies.

## How to scrape Instagram posts
Instagram Post Scraper was created to be fast and easy to use. Just follow these steps.
1. [Create](https://console.apify.com/sign-up) a free Apify account.
2. Open [Instagram Post Scraper](https://apify.com/zuzka/instagram-post-scraper)
3. Add one or more Instagram usernames to scrape.  
4. Click run and wait for the datasets to be extracted.
5. Download your data in JSON, XML, CSV, Excel, or HTML.

## Want to scrape Instagram hashtags, profiles, or comments?
Use our super fast and easy dedicated scrapers if you want to scrape specific Instagram data. Fewer settings to change and faster results. Just enter one or more Instagram usernames or URLs and click to scrape.

- [Instagram Hashtag Scraper](https://apify.com/zuzka/instagram-hashtag-scraper)
- [Instagram Profile Scraper](https://apify.com/zuzka/instagram-profile-scraper)
- [Instagram Comment Scraper](https://apify.com/zuzka/instagram-comment-scraper)

## Is it legal to scrape Instagram?
Our Instagram scrapers are ethical and do not extract any private user data, such as email addresses, gender, or location. They only extract what the user has chosen to share publicly. We therefore believe that our scrapers, when used for ethical purposes by Apify users, are safe. However, you should be aware that your results could contain personal data. Personal data is protected by the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

## Need something more advanced?
Try our more advanced [Instagram Scraper](https://apify.com/jaroslavhejlek/instagram-scraper) if you need more options and are comfortable with changing settings.

Let us know if you need a [custom Instagram scraping solution](https://apify.com/custom-solutions).

## Cost of usage
There are two main factors to take into account if you want to run one of our Instagram scrapers on the Apify platform:
- [Compute units](https://apify.com/pricing/actors) - used for running the scraper
- [Residential proxy traffic](https://apify.com/pricing/proxy) - needed to access Instagram without login

### Using proxies
Instagram now aggressively blocks scrapers and redirects them to a login page. The only reliable solution to this problem is to use residential proxies. Datacenter proxies only work in rare cases.

### Residential proxies
Instagram scraper is free to use, although you will need to use [residential proxies](https://apify.com/proxy?pricing=residential-ip#pricing) on [Apify Proxy](https://apify.com/proxy) if you run it on the Apify platform. This is because Instagram changed the rules in 2021 and now you always need to use a residential proxy for scraping. Luckily, every new Apify account includes a small free trial of residential proxies, so you should be able to test any of our Instagram scrapers.

### Custom proxies
You can also use proxies from other providers in the custom proxies fields (`proxyUrls` in the JSON settings).

### Cost of usage breakdown
Scraping 1,000 Instagram posts will cost you just $4.25 platform credits from your [Apify subscription plan](https://apify.com/pricing).

Scraping **1,000 posts** requires about:
- **5 compute units**
- **0.24 GB of proxy traffic**

### Example pricing
Based on Apify's pricing at the time of writing, scraping **1,000 posts** would cost 5 CU * $0.25 + 0.24 GB * 12.5 GB, which is a total of **$4.25**. The Apify Personal plan ($49) would allow you to scrape about 11,500 Instagram posts monthly.

### Apify residential proxies
The Apify platform [provides residential proxies](https://apify.com/proxy?pricing=residential-ip#pricing) if you have a paid subscription. These proxies are only available to be run within actors on the Apify platform, not externally. If you are interested in using residential proxies for this scraper, contact `support@apify.com` via email or in-app chat to get the proxies enabled.

## Input parameters
The input of this scraper should be JSON containing the username/list of usernames that should be visited. Required fields are:

| Field | Type | Description |
| ----- | ---- | ----------- |
| username | Array | (required) Instagram profile username(s) to scrape posts from |
| resultsLimit | Integer | How many posts should be loaded from each post (limit is per post) |

### Instagram post scraper input example

```jsonc
{
    "directUrls": ["apifytech"],
    "resultsLimit": 100
}
```

## During the actor run
During the run, the actor will output messages letting you know what's going on. Each message always contains a short label specifying which page from the provided list is currently being scraped. When items are loaded from the page, you should see a message about this event with a loaded item count and total item count for each page, in most cases.

If you provide incorrect input to the actor, it will immediately stop with a failure state and output an explanation of what is wrong.

## Instagram output format
The actor stores its results in a dataset. Each item is a separate item in the dataset.

You can manage the results in any language (Python, PHP, Node.js/NPM). See the [Apify API docs](https://docs.apify.com/api/v2) to learn more about getting results from the scraper.

The structure of each item in Instagram posts when scrolling looks like this:

```jsonc
{
"queryUsername": "apifytech",
"position": 2,
"type": "Video",
"shortCode": "CVdF6ztgMX1",
"caption": "After the superfun offsite in Croatia, it's good to remind ourselves that we actually work here 😁 So let's rewatch the intro video together ▶️ We mean every word of what we say in it, so it's your call now: would you work with us? Don't hesitate to send in your applications - we can't wait to read them 😉",
"hashtags": [],
"mentions": [],
"url": "https://www.instagram.com/p/CVdF6ztgMX1",
"commentsCount": 0,
"latestComments": [],
"dimensionsHeight": 607,
"dimensionsWidth": 1080,
"displayUrl": "https://instagram.fbeg7-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/248313208_5056389781056509_753703490695178596_n.jpg?_nc_ht=instagram.fbeg7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=GrIZWjqNCSsAX9FqVAq&edm=ABfd0MgBAAAA&ccb=7-4&oh=83ea2baa9663cd33f77f6a3cce87155d&oe=61A0654B&_nc_sid=7bff83",
"images": [],
"videoUrl": "https://instagram.fbeg7-1.fna.fbcdn.net/v/t50.16885-16/247647900_575381867012921_3295740409131590183_n.mp4?_nc_ht=instagram.fbeg7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Su-kgeScIukAX_JCWC9&edm=ABfd0MgBAAAA&ccb=7-4&oe=61A0DCE5&oh=e2391fd86bc4fc96bf97a8475170a1bd&_nc_sid=7bff83",
"id": "2692334183723877877",
"alt": null,
"likesCount": 5,
"videoViewCount": 55,
"timestamp": "2021-10-25T14:24:24.000Z",
"locationName": "Prague, Czech Republic",
"locationId": "110589025635590",
"ownerUsername": "apifytech",
"ownerId": "29230178602",
"productType": "igtv"
}
```
## Personal data
You should be aware that your results could contain personal data. Personal data is protected by GDPR in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).