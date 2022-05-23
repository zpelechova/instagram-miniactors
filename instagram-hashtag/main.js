import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();
    let directUrls = [];
    for (const h in input.hashtags) {
        if (input.hashtags[h].toLowerCase().includes('instagram.com/explore/tags/')) {
            directUrls.push(input.hashtags[h])    
        } else if (input.hashtags[h].toLowerCase().includes('instagram.com/')) {
            Apify.utils.log.warning(`Sorry, ${input.hashtags[h]} is not a valid input, skipping. Use hashtag or instagram hashtag URL containing "instagram.com/explore/tags/"`)
        } else {
            let hashtag = input.hashtags[h];
            if (hashtag.startsWith("#")) {
                hashtag = hashtag.replace("#", "");
            }
            const directUrl = `https://www.instagram.com/explore/tags/${hashtag}`;
            directUrls.push(directUrl);
        }
    }

    let whichProxy = {
        "useApifyProxy": true,
        "apifyProxyGroups": ["RESIDENTIAL"]
    };

    if (input.loginCookies) {
        whichProxy = {
            "useApifyProxy": true
        };
    }

    const extendOutputFunction = async ({ data, item, itemSpec, page, request, customData, label }) => {
        item.fullName = item.owner && item.owner.full_name ? item.owner.full_name : 'owner didnt open';
        if (item.owner) { delete item.owner; }
        return item;
    }

    await Apify.metamorph('jaroslavhejlek/instagram-scraper', {
        ...input,
        resultsType: "posts",
        searchType:  "hashtag",
        searchLimit: 1,
        expandOwners: true,
        proxy: whichProxy,
        directUrls,
        extendOutputFunction: extendOutputFunction.toString(),
    });
});