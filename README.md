# PODCASTR

<h1 align="center">
    <img src="./docs/running.gif" alt="App">
</h1>

[![LEIAME.md](https://img.shields.io/badge/-Leia%20em%20Portugu%C3%AAs-brightgreen?style=for-the-badge)](./LEIAME.md)

## Summary

- [🧾 About](#-about)
- [🚀 Main technologies](#-main-technologies)
- [🔽 How to download the project](#-how-to-download-the-project)
- [💻 How to run the project](#-how-to-run-the-project)
- [👌 How to use the app](#-how-to-use-the-app)
  <br>

## 🧾 About

PODCASTR is a podcast application made with ReactJS and NextJS. There you can listen to the episodes listed on the screen and have all the control you would have in a music player. Some NextJS concepts were applied to this project: Server-side Rendering (SSR), Static Site Generation (SSG), API routes e File-system routes.
<br>

## 🚀 Main technologies

- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [JSON Server](https://github.com/typicode/json-server)

_(You can see all the dependencies in the [package.json](./package.json) file)_
<br>

## 🔽 How to download the project

```bash
$ git clone https://github.com/victorbadaro/podcastr
```

<br>

## 💻 How to run the project

The commands below use the [yarn](https://yarnpkg.com/) package manager.

```bash
# 1. Install all the project dependencies
$ yarn

# 2. Run JSON Server Fake API
yarn server

# You can run the project using both environments: development or production

# Development:
$ yarn dev

# To run it using the production environment you have to build the app first:
$ yarn build

# And then, you can run on terminal:
$ yarn start
```

If everything runs correctly, a message will be displayed on your terminal informing that the app code has been successfully compiled:

```bash
Compiled successfully
```

After that open your browser and access: http://localhost:3000/

✅ Nice! If you followed all the steps above correctly the project will be running locally on your machine already.
<br>

## 👌 How to use the app

- Choose an episode from the list and then hit its play button to start to listen to your podcast. You can also click on the episode to see the page with details about it.
  <img src="./docs/episode.gif" alt="Episode">

<br>

---

<p align="center">This project was created and developed with ❤ by <a href="https://github.com/victorbadaro">Victor Badaró</a></p>
