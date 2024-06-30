module.exports = function(api) {
  api.cache(true);
  const loose = true;

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-transform-class-properties', { loose }],
      ['@babel/plugin-transform-private-methods', { loose }],
      ['@babel/plugin-transform-private-property-in-object', { loose }],
      ['react-native-reanimated/plugin'],
      '@babel/plugin-transform-nullish-coalescing-operator',
      '@babel/plugin-transform-numeric-separator',
      '@babel/plugin-transform-optional-catch-binding',
      '@babel/plugin-transform-logical-assignment-operators',
      '@babel/plugin-transform-optional-chaining',
      '@babel/plugin-transform-object-rest-spread',
      '@babel/plugin-transform-async-generator-functions',
    ],
  };
};
