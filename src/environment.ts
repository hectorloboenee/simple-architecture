const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Unknown environment key: ${key}`);
  }
  return value;
};

interface envConfig {
  PORT: number;
}

export const env: envConfig = {
  PORT: parseInt(getEnv('PORT'), 10)
};
