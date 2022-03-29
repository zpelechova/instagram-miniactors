import Apify from 'apify';

Apify.main(async () => {
    const dataset = await Apify.openDataset("Followers")

    const input = await Apify.getInput();

    let usernames;

    if (input.username) {
        usernames = input.username;  
    } else if (input.usernames) {
        usernames = input.usernames;
    } else {
        console.log("What are you trying to get? It seems you forgot to add any input.")
    }
    
    let directUrls = [];
    for (const u in usernames) {
        if (usernames[u].toLowerCase().includes('instagram.com/')) {
            directUrls.push(usernames[u])    
        } else {
            const directUrl = `https://www.instagram.com/${usernames[u]}`;
            directUrls.push(directUrl);
        }
    }
    
    const timestamp = new Date();

    const extendOutputFunction = async ({ data, item, itemSpec, page, request, customData, label }) => {

        item = {
            "url": request.url,
            "followersCouunt": item.followersCount,
            "timestamp": timestamp
        };

        return item;
    }

    await Apify.metamorph('jaroslavhejlek/instagram-scraper', {
        ...input,
        resultsType: "details",
        directUrls,
        proxy: {
            "useApifyProxy": true,
            "apifyProxyGroups": ["RESIDENTIAL"]
        },
        resultsLimit: 1,
        extendOutputFunction
    });

    await dataset.pushData();
});