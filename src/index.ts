import server from './server';

const port: number = 3000;

server.listen(port, () => {
    console.log(`Port is running on port ${port}`);
})