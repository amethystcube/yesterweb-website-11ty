# Yesterweb Website x 11ty

This repository contains (most of) the files for [yesterweb.org](https://www.yesterweb.org). The [Eleventy](https://www.11ty.dev) static site generator has been used to make editing the site faster and easier. An overview of everything you need to know in order to edit the site will be included in this document, but if you want to dive deeper, check out the [Getting Started](https://www.11ty.dev/docs/getting-started/) page of the Eleventy documentation.

## Table of Contents

- [Yesterweb Website x 11ty](#yesterweb-website-x-11ty)
  - [Table of Contents](#table-of-contents)
  - [Building the site](#building-the-site)
  - [Contributing to the site](#contributing-to-the-site)
    - [Adding content](#adding-content)
      - [Eleventy shortcodes and macros](#eleventy-shortcodes-and-macros)
      - [Page templates and metadata](#page-templates-and-metadata)
    - [Adding a theme](#adding-a-theme)
    - [Joining the webring](#joining-the-webring)
  - [Folder structure](#folder-structure)
  - [`_data`](#_data)
  - [Building the site](#building-the-site-1)

## Building the site

The following command will run Eleventy and output your site to the `_site` directory:
```npm run build```

## Contributing to the site

Feel free to fork this repository, make changes, and submit a pull request! Read on for any specific instructions that may relate to what you'd like to do.

### Adding content

If you see something out-of-date or think there are topics we should cover on the site, you can add new pages by creating new files in the `src` folder. Pop over to the [Yesterweb forum](https://forum.yesterweb.org) to discuss any proposed additions with other community members; we're building a better web *together*!

#### Eleventy shortcodes and macros

[Eleventy shortcodes](https://www.11ty.dev/docs/shortcodes/) are a way to reduce duplicate markup; you can pass information to a shortcode and Eleventy will insert it into a snippet that you define. Shortcodes can be created and edited in the `.eleventy.js` file in the root directory.

There is currently only one shortcode, `button`, that is used to render the many buttons that appear across the site.

There is also one macro, `plainButton`, in the `src/graphics/buttons.html` file, that functions similarly to the shortcode; it's a different approach for the same result. A macro was used because running the shortcode hundreds of times in a row was causing Eleventy to fail. An issue in the Eleventy repository describes a [similar, but not identical, problem](https://github.com/11ty/eleventy/issues/498).

#### Page templates and metadata

One template, `base.njk`, is used for almost every page across the site. Information added to the top of each page, known as front matter, can be parsed by the template and added to the appropriate spot on the page. An example of page front matter in the YAML format and descriptions of their use is below:
```yaml
---
title: My Page Title
description: A short description of this page.
---
```
- `title`: Used for both the `<h1>` and `<title>` elements of the page
`description`: Used for the "description" `<meta>` tag
- `permalink`: Use this if you to specify a different URL than the default
---

You can learn more about [Eleventy front matter](https://www.11ty.dev/docs/data-frontmatter/) and its many uses in the documentation.

### Adding a theme

*This is a work-in-progress; any added themes will not currently be selectable.*

If you want to add a theme to the site's theme picker, complete the following steps:
1. Create a new CSS file in `src/themes` named for your theme; no spaces, please! (Ex. `old-school.css`)
2. Add an object with the following keys to the `items` array in `_data/themes.json`:
   - `name`: The name of your theme as you'd like it to appear in the theme selector dropdown
   - `slug`: The name of the CSS file you made earlier
   - `credit`: This is an object with a `name` and `link` that will be used to credit you for your contribution

### Joining the webring

The data stored in `src/_data/webring.json` is requested from the webring's website when the site is built; any changes made to `webring.json` will be overrwritten.

**[The webring is currently closed.](https://forum.yesterweb.org/viewtopic.php?p=4611)**

## Folder structure

The `src` is where Eleventy will look for files when building the site. Unless a different permalink is specified within the files metadata, each HTML file will be copied to a corresponding folder when the site is built; for example: `src/no-to-web3.html` would be copied to `_site/no-to-web3/index.html`. This allows us to avoid using file extensions in our links.

Inside the `src` directory, you will find the following folders; any folder not in this list contains files that will be turned into pages on the website:
- `_data`: contains JSON files with information that is used throughout the site
- `_includes`: Eleventy page templates
- `css`: CSS files (copied to the site as-is)
- `img`: Image files (copied to the site as-is)
- `js`: JavaScript files (copied to the site as-is)

## `_data`

Information from files within `_data` can be accessed by their name (without the file extension). Here's a Nunjucks snippet that loops through the data in the `items` key of `nav.json` :
```
{% for item in nav.items %}
...
{% endfor %}
```

Each file in the folder serves the following purpose:
- `manifestos.json`: Titles and links for the manifestos of Yesterweb members
- `nav.json`: The labels and URLs for the main site navigation
- `site.json`: Basic site information, such as the title and description that will be used in none is set in a particular file
- `themes.json`: Theme names, file paths, and credits
- `webring.json`: Information about members of the Yesterweb Ring

## Building the site

In order to build the site, you must have a supported version of Node.js installed. Visit Eleventy's [Getting started](https://www.11ty.dev/docs/getting-started/) page to see which versions of Node are currently supported.

- `npm run build`: Gets the latest webring information, stores it in `src/_data/webring.json`, and builds the site
- `npm run serve`: Builds the site and serves in on an auto-reloading local server