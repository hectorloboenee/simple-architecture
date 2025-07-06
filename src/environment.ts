const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Unknown environment key: ${key}`);
  }
  return value;
};

interface envConfig {
  PORT: number;
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE: string;
}

export const env: envConfig = {
  PORT: parseInt(getEnv('PORT'), 10),
  DATABASE_HOST: getEnv('DATABASE_HOST'),
  DATABASE_PORT: parseInt(getEnv('DATABASE_PORT')),
  DATABASE_USER: getEnv('DATABASE_USER'),
  DATABASE_PASSWORD: getEnv('DATABASE_PASSWORD'),
  DATABASE: getEnv('DATABASE')
};
