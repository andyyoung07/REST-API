const http = require('http');
const {mongoo} = require('./mongodb');

const port = 3000;
const server = http.createServer();


mongoo(() => {
    server.listen(port, () => {
        console.log(`server listening on port ${port}`);
    });
});


