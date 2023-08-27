import { DevEnvironment } from './environment.dev';
import { ProdEnvironment } from './environment.prod';

export interface Environment {
   db_uri:'mongodb://localhost:27017/swegyApp',
    jwt_secret_key: string,
    sendgrid?: {
        api_key: string,
        email_from: string,
    },
    gmail_auth?: {
        user: string,
        pass: string,
    }
};

export function getEnvironmentVariables() {
    if(process.env.NODE_ENV === 'production') {
        return ProdEnvironment;
    }
    return DevEnvironment;
}