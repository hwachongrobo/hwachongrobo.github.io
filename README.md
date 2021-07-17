# Hwa Chong Robotics Website

![License](https://img.shields.io/github/license/hwachongrobo/hwachongrobo.github.io)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/hwachongrobo/hwachongrobo.github.io/deploy)

## Local Development

```console
yarn start
```

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true DEPLOYMENT_BRANCH=gh-pages yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
