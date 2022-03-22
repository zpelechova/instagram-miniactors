## Features
Our free Instagram Hashtag Scraper allows you to scrape full Instagram post data based on hashtag searches.

**This scraper doesn't extract emails or any other contact details!**

## Why scrape Instagram hashtags?
Getting live Instagram hashtag data can give you valuable brand or business insights, help you predict trends, keep an eye on your competitors, and connect with your fans or customers.

Scraping Instagram hashtags is the fastest, most efficient way to get datasets that you can use anywhere.

If you want more ideas, check out our [industries pages](https://apify.com/industries) for ways web scraping is already being used in a wide range of companies.

## How to scrape Instagram hashtags
It's super simple to use Instagram Hashtag Scraper.
1. [Create](https://console.apify.com/sign-up) a free Apify account.
2. Open [Instagram Hashtag Scraper](https://apify.com/zuzka/instagram-hashtag-scraper)
3. Add one or more hashtags to scrape.  
4. Click run and wait for the datasets to be extracted.
5. Download your data in JSON, XML, CSV, Excel, or HTML.

If you need some hashtag inspiration, here are some Instagram hashtags that regularly feature in the top 10:
1. #love
2. #instagood
3. #fashion
4. #photooftheday
5. #beautiful
6. #art
7. #photography
8. #happy
9. #picoftheday
10. #cute

## Want to scrape Instagram profiles, posts, or comments?
Use our super fast and easy dedicated scrapers if you want to scrape specific Instagram data. Fewer settings to change and faster results. Just enter one or more Instagram usernames or URLs and click to scrape.

- [Instagram Profile Scraper](https://apify.com/zuzka/instagram-profile-scraper)
- [Instagram Post Scraper](https://apify.com/zuzka/instagram-post-scraper)
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

## Input parameters
The input of this scraper should be JSON containing the hashtag or list of hashtags that should be visited. Required fields are:

| Field | Type | Description |
| ----- | ---- | ----------- |
| hashtags | Array | (required) Hashtags to search on Instagram |
| resultsLimit | Integer | How many posts should be loaded from each hashtag (limit is per hashtag) |

## Scrolling through large profiles or posts
Instagram imposes rate limits that will block scrolling if you want to scroll for more than 1,000 posts or comments. To work around this issue, the scraper starts injecting randomized wait times once you reach 1,000 posts or comments. This is configurable by means of the `scrollWaitSecs` input parameter. If you get the message that you were rate limited, consider increasing this parameter for the specific profile or post.

### Instagram hashtag scraper input example

```jsonc
{
    "hashtags": ["apify", "webscraping"],
    "resultsLimit": 100
}
```

## During the actor run
During the run, the actor will output messages letting you know what's going on. Each message always contains a short label specifying which page from the provided list is currently being scraped. When items are loaded from the page, you should see a message about this event with a loaded item count and total item count for each page, in most cases.

If you provide incorrect input to the actor, it will immediately stop with a failure state and output an explanation of what is wrong.

## Instagram output format
The actor stores its results in a dataset. Each item is a separate item in the dataset.

You can manage the results in any language (Python, PHP, Node.js/NPM). See the [Apify API docs](https://docs.apify.com/api/v2) to learn more about getting results.

The structure of each item in Instagram posts when scrolling looks like this:

```jsonc
{
"queryTag": "apify",
"position": 5,
"type": "Image",
"shortCode": "CPX3fh-sCAu",
"caption": "SEO GRILL MASTER🥩🔥\n•\n•\n#startuplife #apify #teambuilding",
"hashtags": [
"startuplife",
"apify",
"teambuilding"
],
"mentions": [],
"url": "https://www.instagram.com/p/CPX3fh-sCAu",
"commentsCount": 0,
"latestComments": [],
"dimensionsHeight": 1080,
"dimensionsWidth": 1080,
"displayUrl": "https://scontent-iev1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/191303163_3815835068538270_8324023149941865199_n.jpg?_nc_ht=scontent-iev1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=exAwEYfHv2AAX8Wv4L_&edm=ABZsPhsBAAAA&ccb=7-4&oh=c785300c3ce8c893579c0be6bc418513&oe=61A4054C&_nc_sid=4efc9f",
"images": [],
"id": "2582776970667368494",
"alt": "Photo by Apify in Přístav 18600. May be an image of one or more people and outdoors.",
"likesCount": 6,
"timestamp": "2021-05-27T10:23:49.000Z",
"locationName": null,
"locationId": null,
"ownerUsername": "apifytech",
"ownerId": "29230178602",
"fullName": "Apify"
},
```
## Personal data
You should be aware that your results could contain personal data. Personal data is protected by GDPR in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).