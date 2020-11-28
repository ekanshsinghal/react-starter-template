# React Starter Template

This template repository is the easiast way to create react projects from scratch without any bloatware that comes with `create-react-app`.\
Unlike CRA, it has only the minimum packages required to get a `react` project up and running. This results in a much lighter application and snappier performance.
### Built With
The only extra package configured along with vanila `react` is added support for `.scss` and `.sass` files.
- `react 17.0.x`
- `babel 7.12.x`
- `webpack cli 4.x`
- `sass`

Note: This repository is configured with [Dart Sass](https://sass-lang.com/dart-sass) since it is recommended by webpack. A [node-sass](https://github.com/sass/node-sass) version is in the works.

## Getting Started

### Prerequisites
- npm

### Installation 
#### Method 1 (Recommended)
1. Click on [`Use this template`](https://github.com/ekanshsinghal/react-starter-template/generate) button in top right corner to create a new repository from this template.
2. Give a name to your repository and click Next.
3. Clone the repository
```
git clone <your repository path>        # eg. https://github.com/ekanshsinghal/react-starter-template.git
```
4. Install NPM packages
```
cd <repository name>                    # eg. cd react-starter-template
npm install
```

#### Method 2 (clone using CLI)
1. Clone the repository
```
git clone https://github.com/ekanshsinghal/react-starter-template.git
```
2. Install NPM packages
```
cd react-starter-template
npm install
```

## Available Scripts
In the project directory, you can run:
```
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
npm build
```
Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## License

Distributed under the MIT License. See `LICENSE` for more information.