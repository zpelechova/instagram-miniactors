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
    
    let directUrls = [];
    for (const u in usernames) {
        if (usernames[u].toLowerCase().includes('instagram.com/')) {
            directUrls.push(usernames[u])    
        } else {
            const directUrl = `https://www.instagram.com/${usernames[u]}`;
            directUrls.push(directUrl);
        }
    }
    

    const extendOutputFunction = async ({ data, item, itemSpec, page, request, customData, label }) => {
        const followers = [];
        // console.log(data);

        for (const f of item.followedBy) {
            f.followedId = item.id;
            f.followedUsername = item.username;
            f.followedFullName = item.fullName;
            f.followedFollowersCount = item.followersCount;
            f.followedUrl = `https://www.instagram.com/${item.username}/`;
            followers.push(f);
        }

        item = followers;

        return item;
    }

    await Apify.metamorph('jaroslavhejlek/instagram-scraper', {
        ...input,
        resultsType: "details",
        directUrls,
        proxy: {
            "useApifyProxy": true
        },
        resultsLimit: 1,
        extendOutputFunction
    });
});