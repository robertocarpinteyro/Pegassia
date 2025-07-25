module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: false,
      };
    }
    
    // Handle OpenSSL legacy provider issue
    const crypto = require('crypto');
    const origCreateHash = crypto.createHash;
    crypto.createHash = (alg, opts) => {
      return origCreateHash(alg === 'md4' ? 'sha256' : alg, opts);
    };
    
    return config;
  },
};