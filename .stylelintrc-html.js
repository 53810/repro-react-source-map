module.exports = {
  extends: ["real-config/stylelint/html"],
  rules: {
    // eslint-disable-next-line no-warning-comments -- Wait for real-config update
    // fixme
    "font-family-name-quotes": "always-unless-keyword",
    "keyframes-name-pattern": /^[A-Z][-a-z]+/u.source
  }
};
