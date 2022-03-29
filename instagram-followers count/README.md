## Features
Our free Instagram Profile Scraper allows you to scrape profile information from Instagram. Just add one or more Instagram usernames to get all profile data.

## Why scrape Instagram profiles?
Scraping Instagram profiles just means that you're collecting publicly available data on Instagram users.

This data can give you valuable information about popular users anywhere in the world, help you predict trends, track brand awareness, learn how to improve your Instagram performance, or just keep an eye on competing influencers.

If you want more ideas, check out our [industries pages](https://apify.com/industries) for ways web scraping is already being used in a wide range of companies.

## How to scrape Instagram profiles
Instagram Profile Scraper is designed to be fast and easy to use so there aren't too many parameters or settings.
1. [Create](https://console.apify.com/sign-up) a free Apify account.
2. Open [Instagram Profile Scraper](https://apify.com/zuzka/instagram-profile-scraper)
3. Add one or more Instagram usernames to scrape.  
4. Click run and wait for the datasets to be extracted.
5. Download your data in JSON, XML, CSV, Excel, or HTML.

## Want to scrape Instagram hashtags, posts, or comments?
Use our super fast and easy dedicated scrapers if you want to scrape specific Instagram data. Fewer settings to change and faster results. Just enter one or more Instagram usernames or URLs and click to scrape.

- [Instagram Hashtag Scraper](https://apify.com/zuzka/instagram-hashtag-scraper)
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
Scraping 1,000 Instagram profiles will cost you just $5.50 platform credits from your [Apify subscription plan](https://apify.com/pricing).

Scraping **1,000 profiles** requires about:
- **10 compute units**
- **0.24 GB of proxy traffic**

### Example pricing
Based on Apify's pricing at the time of writing, scraping **1,000 profiles** would cost 10 CU * $0.25 + 0.24 GB * 12.5 GB, which is a total of **$5.50**. The Apify Personal plan ($49) would allow you to scrape about 9,000 Instagram profiles monthly.

### Apify residential proxies
The Apify platform [provides residential proxies](https://apify.com/proxy?pricing=residential-ip#pricing) if you have a paid subscription. These proxies are only available to be run within actors on the Apify platform, not externally. If you are interested in using residential proxies for this scraper, contact `support@apify.com` via email or in-app chat to get the proxies enabled.

## Input parameters
The input of this scraper should be JSON containing the Instagram username or usernames to be scraped. Required fields are:

| Field | Type | Description |
| ----- | ---- | ----------- |
| username | Array | (required) Username to scrape posts from |

### Instagram Profile Scraper input example

```jsonc
{
    "username": ["apifytech"],
}
```