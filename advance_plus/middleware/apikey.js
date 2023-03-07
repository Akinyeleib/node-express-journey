
apiKey = (req, res, next) => {

    console.log(`req-url: ${req.url}`);
    console.log(`req-query: ${req.query.api_key}`);
    
    const theApikey = '1234';

    if (req.query.api_key && req.query.api_key == theApikey) {
        next()
    } else {
        res.json({
            msg: "Invalid Authentication"
        });
    }
}

module.exports = apiKey;
