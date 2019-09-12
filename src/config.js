const dev = {
  STRIPE_KEY: "sk_test_SQNPZC9lYQYWTcbWiYOpe9mj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1k3ma84gkkpoq"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://am05dhdqye.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_1QPnefkvY",
    APP_CLIENT_ID: "2cm5hv7sfimge1gc5e5rr8imne",
    IDENTITY_POOL_ID: "us-east-1:75449b43-d35d-4a2e-bbba-5dafd165d584"
  }
};

const prod = {
  STRIPE_KEY: "sk_test_SQNPZC9lYQYWTcbWiYOpe9mj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-gg916wzx0oa4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://tdrmej71qh.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UC3EYsduT",
    APP_CLIENT_ID: "6a6r5k4vd6sccpa67dam9cishq",
    IDENTITY_POOL_ID: "us-east-1:43a3fc03-48ee-4114-aa30-3f6c77913c72"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
