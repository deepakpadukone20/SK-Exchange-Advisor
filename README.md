# Exchange Advisor

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
### Comments

- I could develop all requiremnts mentioned. 
- I tired deploying this dist to gh-pages which was not asked in the brief, I could not figure out vite config usage. Unlike webpack config which I have done before. I understaood it was something to do with ***base*** url, but did not work more.
- I tired to work on about 2 hours with my previous experiance in React/Angular. It was great learning,
- I did not really work on adding unit test, I know that would have been made it complete.
- I started with default vue-vite cli setup. I could see there were existing router config and I did not remove it. 
- I observed one issue with api, ie., when Higher exchange rate Currency(eg USD) was on ***from*** symbol the api sometime returned negligible rates agaist weeker rate symbol , which resulted in a straight line (Screen Grab Below)


![](https://github.com/deepakpadukone20/SK-Exchange-Advisor/raw/main/Screenshot%202022-09-05%20at%2022.50.29.png)


### Final Screenshot

![](https://github.com/deepakpadukone20/SK-Exchange-Advisor/raw/main/Screenshot%202022-09-06%20at%2008.53.50.png)