import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    const extendOutputFunction = async ({ data, item, itemSpec, page, request, customData, label }) => {
        return item;
    }

    await Apify.metamorph('jaroslavhejlek/instagram-scraper', {
        ...input,
        resultsType: "comments",
        proxy: {
            "useApifyProxy": true,
            "apifyProxyGroups": ["RESIDENTIAL"]
        },
        extendOutputFunction
    });
});