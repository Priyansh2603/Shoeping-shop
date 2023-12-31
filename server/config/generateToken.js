import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { fileURLToPath, URL } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: new URL('config/config.env', import.meta.url) });
const generateToken = (id) => {
    console.log("secret:",process.env.JWT_SECRET)
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
}

export default generateToken;
