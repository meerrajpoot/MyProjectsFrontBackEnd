import crypto from 'crypto';

const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString('hex');
    console.log(`SECRET_KEY=${secretKey}`);
};

generateSecretKey();
