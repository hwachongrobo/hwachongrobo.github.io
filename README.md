# Hwa Chong Robotics Website

![![License File][]][license]
![![Deploy Action][]][deploy status]

## Local Development

```console
yarn start
```

### Adding Content to the Docs

#### File Structure

```
docs
├── home.mdx
├── lego                      # These are configured as separate pages through
│   │                         # docusaurs magic in sidebars.js.
│   ├── 00-introduction.mdx   # This is the root page for the lego docs.
│   ├── 01-first_section      # Sections here represent groups on the sidebar.
│   │   ├── 00-first_doc.mdx  # Doc files are written in MDX.
│   │   └── _category_.yaml   # Each section has a _category_.yaml file.
│   └── 02-second_section     # Positions on the sidebar are determined by the
│       │                     # numbering in XX-title. Note that "XX-" does not
│       │                     # show up in the URL.
│       ├── ...
│       └── _category_.yaml
├── others
│   ├── 00-introduction.mdx
│   └── ...
├── rcj
│   ├── 00-introduction.mdx
│   └── ...
└── vex
    ├── 00-introduction.mdx
    └── ...
```

#### Doc Files

```md
import Tabs from '@theme/Tabs'; <!-- Put imports on top for consistency -->
import TabItem from '@theme/TabItem';

# Title <!--- This will be the title of the webpage and must show up first -->

<!-- Content -->
```

The MDX syntax of doc files allow you to use Markdown, HTML, and ReactJS code.

For information on how to write markdown, refer to
[www.markdownguide.org/basic-syntax][markdown syntax] and
[docusaurus.io/docs/markdown-features][docusaurus markdown syntax].

## Deployment

Website should be automatically deployed to the `gh-pages` branch when a push or
pull request is made to the `main` branch.

For manual deployment, run the following:

```console
GIT_USER=<Your GitHub username> USE_SSH=true DEPLOYMENT_BRANCH=gh-pages yarn deploy
```

YAY PASSED THE 100 COMMITS MILESTONE 🥳

[license file]: https://github.com/hwachongrobotics/hwachongrobotics.github.io/blob/main/LICENSE
[license]: https://img.shields.io/github/license/hwachongrobotics/hwachongrobotics.github.io
[deploy action]: https://github.com/hwachongrobotics/hwachongrobotics.github.io/actions/workflows/deploy.yml
[deploy status]: https://img.shields.io/github/workflow/status/hwachongrobotics/hwachongrobotics.github.io/deploy
[markdown syntax]: https://www.markdownguide.org/basic-syntax
[docusaurus markdown syntax]: https://docusaurus.io/docs/markdown-features
