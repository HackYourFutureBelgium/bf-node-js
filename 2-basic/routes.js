import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// get the current module's directory path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const requestHandler = (req, res) => {
    // get the url and method from the req
    const url = req.url;
    const method = req.method;
    // if the url is the root route
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<html>
                <head></head>
                <body>
                    <form action="/message" method="POST">
                        <input name='message' type="text">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>`
        );
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        // add event data to req
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        // add event end to req
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // the parsedBody will be like that message=hello
            const message = parsedBody.split('=')[1];
            fs.writeFile(path.join(PATH, 'message.txt'), message, (err) => {
                if (err) {
                    console.error(err);
                }
                // redirect to
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
};

export default requestHandler;
