System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "phaser": "github:photonstorm/phaser@2.5.0/build/phaser"
  }
});
