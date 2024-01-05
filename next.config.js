// next.config.js

module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    env: {
        NEXT_PUBLIC_AUTH_TOKEN: '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',
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
  };
  