import {DataSource} from 'typeorm'
import { User } from './entities/User';

export const AppDataSource = new DataSource({
    type: 'mssql',
    host: 'my-friends.database.windows.net',
    username: 'developer',
    password: 'LimaPeru46',
    port: 1433,
    database: 'market',
    entities: [User],
    logging: true,
    synchronize: true
})
