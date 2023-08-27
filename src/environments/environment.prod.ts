import { Environment } from './environment';

export const ProdEnvironment: Environment = {
    db_uri:'mongodb://localhost:27017/swegyApp',
    jwt_secret_key: 'secretkeyprod',
    sendgrid: {
        api_key: 'your_sendgrid_api_key',
        email_from: 'sender_email'
    },
    gmail_auth: {
        user: "your_gmail_email_id",
        pass: "your_gmail_password"
    }
};