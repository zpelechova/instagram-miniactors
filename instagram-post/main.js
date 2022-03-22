import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    let directUrls = [];
    for (const u in input.username) {
        if (input.username[u].toLowerCase().includes('instagram.com/')) {
            directUrls.push(input.username[u])    
        } else {
            const directUrl = `https://www.instagram.com/${input.username[u]}`;
            directUrls.push(directUrl);
        }
    }

    const extendOutputFunction = async ({ data, item, itemSpec, page, request, customData, label }) => {
        return item;
    }

    await Apify.metamorph('jaroslavhejlek/instagram-scraper', {
        ...input,
        directUrls,
        resultsType: "posts",
        proxy: {
            "useApifyProxy": true,
            "apifyProxyGroups": ["RESIDENTIAL"]
        },
        extendOutputFunction
    });
});