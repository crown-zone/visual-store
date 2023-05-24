import * as path from 'path';
import * as fs from 'fs';
import { parse } from 'yaml';

type ApplicationEnv = 'production' | 'development';

export const getApplicationEnv = (): ApplicationEnv => {
    return process.env.APPLICATION_ENV as ApplicationEnv;
};

export const getApplicationConfig = () => {
    const applicationEnv = getApplicationEnv();
    const yamlPath = path.join(process.cwd(), `./resource/application.env.yml`);
    const yamlFile = fs.readFileSync(yamlPath, 'utf8');
    const config = parse(yamlFile);

    return config[applicationEnv];
};
