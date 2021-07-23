const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "yahya",
        mongodb_password: "25020680",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-app-dev",
      },
    };
  }

  // production
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "yahya",
      mongodb_password: "25020680",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog-app-prod",
    },
  };
};
