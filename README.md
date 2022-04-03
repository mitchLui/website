# 1. mitchlui.dev

![Deployed](https://github.com/mitchLui/website/actions/workflows/build-and-deploy.yml/badge.svg)

![website](docs/website.png)

- [1. mitchlui.dev](#1-mitchluidev)
  - [1.1. Introduction](#11-introduction)
  - [1.2. Development](#12-development)
    - [1.2.1. Setup](#121-setup)
    - [1.2.2. Deployment](#122-deployment)
  - [1.3. Roadmap](#13-roadmap)


## 1.1. Introduction

URL: [https://mitchlui.dev][1]

This website is a personal website for myself and is used for documenting my projects and serve as a digital portfolio.

The site is built on [React.js][2] and is currently hosted on [namecheap][3].

## 1.2. Development

### 1.2.1. Setup

Install [npm][4] and run `npm install` in `./client`.

### 1.2.2. Deployment

You can build the site and deploy it statically to any hosting service you'd like by running `npm run build` in `./client` and serve the files according to the service's documentation.

## 1.3. Roadmap

There is a `server` directory that is curretly empty. The current plan is to implement a backend API on https://api.mitchlui.dev so that I can implement more features, e.g.

- Creating a blog
- Host my own REST APIs for public use (work in progress!)
- Demo projects

None of these features are set in stone and definitely open to changes. I'm currently cleaning up the code and optimising the site before writing new features.

---
[1]:https://mitchlui.dev
[2]:https://reactjs.org
[3]:https://www.namecheap.com
[4]:https://www.npmjs.com