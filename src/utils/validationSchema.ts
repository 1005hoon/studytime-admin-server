import * as Joi from '@hapi/joi';

export default Joi.object({
  PORT: Joi.number().required(),
  MYSQL_HOST: Joi.string().required(),
  MYSQL_PORT: Joi.number().required(),
  MYSQL_USER: Joi.string().required(),
  MYSQL_PASSWORD: Joi.string().required(),
  MYSQL_NAME: Joi.string().required(),
  OAUTH_KAKAO_BASE_HOST: Joi.string().required(),
  OAUTH_KAKAO_CLIENT_ID: Joi.string().required(),
  OAUTH_KAKAO_CLIENT_SECRET: Joi.string().required(),
  OAUTH_KAKAO_REDIRECT_URI: Joi.string().required(),
  JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.number().required(),
  AWS_REGION: Joi.string().required(),
  AWS_PUBLIC_BUCKET_NAME: Joi.string().required(),
  AWS_ACCESS_KEY_ID: Joi.string().required(),
  AWS_SECRET_ACCESS_KEY: Joi.string().required(),
});
