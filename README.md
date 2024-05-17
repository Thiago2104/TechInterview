# techinterview

## Project setup
To set up this project, it's important to use the `--legacy-peer-deps` flag when installing dependencies. This flag is necessary due to potential conflicts between certain dependencies, particularly `eslint-plugin-prettier` and `@vue/eslint-config-prettier`.

The conflict arises because the `@vue/eslint-config-prettier@6.0.0` package requires a version of `eslint-plugin-prettier` that conflicts with the version specified by the project's root `eslint-plugin-prettier` dependency. This conflict can cause issues during installation or execution if not resolved properly.

Using the `--legacy-peer-deps` flag ensures that npm resolves these conflicts using the legacy algorithm for peer dependency resolution. This can help prevent installation errors and ensure that the project setup proceeds smoothly.

While downgrading `eslint-plugin-prettier` to version `3.1` may resolve the conflict, it could introduce new issues when running commands like `npm run serve`. For example, downgrading may prompt npm to install additional dependencies like `workbox-webpack` and could result in errors related to `RuleSet` in webpack.

But still, it is worth and needed to resolve this conflict to ensure a good development experience.

By following the recommended setup process and using the `--legacy-peer-deps` flag, you can mitigate potential conflicts and ensure a smoother project setup experience. 
```
npm install --legacy-peer-deps
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
