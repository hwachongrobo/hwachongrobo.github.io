# Hwa Chong Robotics Website

![![License File][]][license]
![![Deploy Action][]][deploy status]

## Local Development

```console
yarn start
```

For information on how to add content, refer to
[www.markdownguide.org/basic-syntax][markdown syntax] and
[docusaurus.io/docs/markdown-features][docusaurus markdown syntax].

## Deployment

Website should be automatically deployed to the `gh-pages` branch when a push or
pull request is made to the `main` branch.

For manual deployment, run the following:

```console
GIT_USER=<Your GitHub username> USE_SSH=true DEPLOYMENT_BRANCH=gh-pages yarn deploy
```

[license file]: https://github.com/hwachongrobo/hwachongrobo.github.io/blob/main/LICENSE
[license]: https://img.shields.io/github/license/hwachongrobo/hwachongrobo.github.io
[deploy action]: https://github.com/hwachongrobo/hwachongrobo.github.io/actions/workflows/deploy.yml
[deploy status]: https://img.shields.io/github/workflow/status/hwachongrobo/hwachongrobo.github.io/deploy
[markdown syntax]: https://www.markdownguide.org/basic-syntax
[docusaurus markdown syntax]: https://docusaurus.io/docs/markdown-features