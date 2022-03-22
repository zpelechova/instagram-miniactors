## Features
Our free Instagram Comment Scraper allows you to scrape comments from one or more Instagram post URLs.

**This scraper doesn't extract emails or any other contact details!**

## Why scrape Instagram comments?
Scraping comments on Instagram posts can give you quick insights on how an audience is reacting to marketing campaigns, enable you to spot misinformation or abuse, track audience engagement, or help you monitor how competing content is being received.

If you want more ideas, check out our [industries pages](https://apify.com/industries) for ways web scraping is already being used in a wide range of companies.

## How to scrape Instagram comments
Instagram Comment Scraper was created to be fast and easy to use. Just follow these steps.
1. [Create](https://console.apify.com/sign-up) a free Apify account.
1. Open [Instagram Comment Scraper](https://apify.com/zuzka/instagram-comment-scraper)
1. Add one or more Instagram post URLs to scrape.  
1. Click run and wait for the datasets to be extracted.
1. Download your data in JSON, XML, CSV, Excel, or HTML.

## Need to scrape more comments?
Instagram usually only lets you see the first 24 comments without having to log in, so that limits the number of comments you are able to scrape. If you set the max items higher you may get more comments, but it is unreliable and more expensive as it consumes a lot of recources on waiting.

You can scrape more comments by using multiple runs, or if you need more comments per run, use our full-featured [Instagram Scraper](https://apify.com/jaroslavhejlek/instagram-scraper) and log in with your cookies. Beware that Instagram may block your account because of scraping, so use a dummy account if you can.

## Want to scrape Instagram hashtags, profiles, or posts?
Use our super fast and easy dedicated scrapers if you want to scrape specific Instagram data. Fewer settings to change and faster results. Just enter one or more Instagram usernames or URLs and click to scrape.

- [Instagram Hashtag Scraper](https://apify.com/zuzka/instagram-hashtag-scraper)
- [Instagram Profile Scraper](https://apify.com/zuzka/instagram-profile-scraper)
- [Instagram Post Scraper](https://apify.com/zuzka/instagram-post-scraper)

## Is it legal to scrape Instagram?
Our Instagram scrapers are ethical and do not extract any private user data, such as email addresses, gender, or location. They only extract what the user has chosen to share publicly. We therefore believe that our scrapers, when used for ethical purposes by Apify users, are safe. However, you should be aware that your results could contain personal data. Personal data is protected by the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

## Need something more advanced?
Try our more advanced [Instagram Scraper](https://apify.com/jaroslavhejlek/instagram-scraper) if you need more options and are comfortable with changing settings.

Let us know if you need a [custom Instagram scraping solution](https://apify.com/custom-solutions).

If you want more ideas, check out our [industries pages](https://apify.com/industries) for ways web scraping is already being used in a wide range of companies.

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
Scraping 1,000 Instagram comments will cost you just $3.25 platform credits from your [Apify subscription plan](https://apify.com/pricing).

Scraping **1,000 comments** requires about:
- **1 compute unit**
- **0.24 GB of proxy traffic**

### Example pricing
Based on Apify's pricing at the time of writing, scraping **1,000 comments** would cost 1 CU * $0.25 + 0.24 GB * 12.5 GB, which is a total of **$3.25**. The Apify Personal plan ($49) would allow you to scrape about 9,000 Instagram comments monthly.

### Apify residential proxies
The Apify platform [provides residential proxies](https://apify.com/proxy?pricing=residential-ip#pricing) if you have a paid subscription. These proxies are only available to be run within actors on the Apify platform, not externally. If you are interested in using residential proxies for this scraper, contact `support@apify.com` via email or in-app chat to get the proxies enabled.

## Input parameters
The input of this scraper should be JSON containing the post or list of posts that should be scraped. Required fields are:

| Field | Type | Description |
| ----- | ---- | ----------- |
| directUrls | Array | (required) Instagram post URL(s) to scrape posts from |
| resultsLimit | Integer | How many comments should be loaded from each URL (limit is per URL) |

### Instagram post scraper input example

```jsonc
{
  "directUrls": [
    "https://www.instagram.com/p/CH-MgQOn-7E/"
  ],
  "resultsLimit": 24
}
```

## During the actor run
During the run, the actor will output messages letting you know what's going on. Each message always contains a short label specifying which page from the provided list is currently being scraped. When items are loaded from the page, you should see a message about this event with a loaded item count and total item count for each page, in most cases.

If you provide incorrect input to the actor, it will immediately stop with a failure state and output an explanation of what is wrong.

## Instagram output format
The actor stores its results in a dataset. Each item is a separate item in the dataset.

You can manage the results in any language (Python, PHP, Node.js/NPM). See the [Apify API docs](https://docs.apify.com/api/v2) to learn more about getting results from the Instagram Scraper.

The structure of each item in Instagram posts when scrolling looks like this:

```jsonc
{
"id": "17949788698583607",
"postId": "CH-MgQOn-7E",
"text": "Imagine scrolling to find the end of these comments!😂",
"position": 20,
"timestamp": "2021-11-19T13:54:13.000Z",
"ownerId": "47340566177",
"ownerIsVerified": false,
"ownerUsername": "gabriel2005120",
"ownerProfilePicUrl": "https://scontent-msp1-1.cdninstagram.com/v/t51.2885-19/s150x150/217945584_120518610274794_7725650845991377322_n.jpg?_nc_ht=scontent-msp1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=vJx0Cg9blGUAX9QrHVC&edm=AABBvjUBAAAA&ccb=7-4&oh=9d6174f78b6feee553d365b2c66d22b4&oe=61A5CE72&_nc_sid=83d603"
}
```
## Personal data
You should be aware that your results could contain personal data. Personal data is protected by GDPR in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).