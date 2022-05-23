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
    
    usernames = Array.from(new Set(input.usernames))

    // we should probably remove white spaces

    let directUrls = [];
    for (const u in usernames) {
        if (usernames[u].toLowerCase().includes('instagram.com/')) {
            directUrls.push(usernames[u])    
        } else if (usernames[u] === '') {
//get rid of empty lines
        } else {
            const directUrl = `https://www.instagram.com/${usernames[u].replace(" ","")}`;
            directUrls.push(directUrl);
        }
    }


    const extendOutputFunction = async ({ data, item, itemSpec, page, request, customData, label }) => {
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
        extendOutputFunction
    });
});