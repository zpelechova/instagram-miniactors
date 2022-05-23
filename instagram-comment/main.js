import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    const extendOutputFunction = async ({ data, item, itemSpec, page, request, customData, label }) => {
        return item;
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

    await Apify.metamorph('jaroslavhejlek/instagram-scraper', {
        ...input,
        resultsType: "comments",
        proxy: whichProxy,
        extendOutputFunction
    });
});