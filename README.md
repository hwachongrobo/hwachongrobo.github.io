# Hwa Chong Robotics Website

![License](https://img.shields.io/github/license/hwachongrobo/hwachongrobo.github.io)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/hwachongrobo/hwachongrobo.github.io/deploy)

## Local Development

```console
yarn start
```

## Deployment

Website should be automatically deployed to the `gh-pages` branch when a push or pull request is made to the `main` branch.

For manual deployment, run the following:

```console
GIT_USER=<Your GitHub username> USE_SSH=true DEPLOYMENT_BRANCH=gh-pages yarn deploy
```
