import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();
    let usernames;

    if (input.username) {
        usernames = input.username;  
    } else if (input.usernames) {
        usernames = input.usernames;
    } else {
        console.log("What are you trying to get? It seems you forgot to add any input.")
    }

    console.log("1 - " + usernames);

    usernames = Array.from(new Set(usernames))

    console.log("2 - " + usernames);
    
    let directUrls = [];
    for (const u in usernames) {
        if (usernames[u].toLowerCase().includes('instagram.com/')) {
            directUrls.push(usernames[u]) 
            console.log("3 - " + usernames[u]);
       
        } else {
            const directUrl = `https://www.instagram.com/${usernames[u]}`;
            directUrls.push(directUrl);
            console.log("4 - " + directUrl);
        }
    }

    console.log("5 - " + directUrls);
    

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