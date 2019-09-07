const server = require('express')();
const morgan = require('morgan');
const process = require('process');

server.use(morgan('dev'));

server.get('/hello/:name', (req, res) => {
    res.status(200).json({'hello' : req.params.name});
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log('Ready.'));
