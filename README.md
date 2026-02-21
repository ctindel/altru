# Altru - Hugo Theme for Nonprofits

Altru is a Hugo theme designed for nonprofit organizations, charities, and community groups. It includes layouts for programs/causes, events, donations, volunteering, and blogging.

Originally based on a theme by [Themefisher](https://themefisher.com), Altru has been substantially modified with updated icons (Font Awesome 6), a cleaner page title style, clickable images, and flexible social media support.

## Requirements

- Hugo Extended v0.60.0 or later

## Installation

### As a Git Submodule

```bash
cd your-hugo-site
git submodule add https://github.com/ctindel/altru.git themes/altru
```

### Manual

Clone or download this repository into your site's `themes/` directory:

```bash
cd your-hugo-site
git clone https://github.com/ctindel/altru.git themes/altru
```

Then set the theme in your `config.toml`:

```toml
theme = "altru"
```

## Configuration

### Site Parameters

```toml
[params]
  description = "Your organization description"
  author = "Your Org"
  logo = "images/logo.svg"
  phone = "+1-800-555-5555"
  email = "contact@example.com"
  contact_address = "123 Main Street, City, ST 12345"
  footer_address = "123 Main Street, City, ST 12345"
```

### Social Media

Add any number of social media links. Icons use [Font Awesome 6 Brand Icons](https://fontawesome.com/icons?d=gallery&s=brands).

```toml
[[params.social]]
  icon = "facebook"
  name = "Facebook"
  url = "https://facebook.com/yourpage"

[[params.social]]
  icon = "instagram"
  name = "Instagram"
  url = "https://instagram.com/yourpage"

[[params.social]]
  icon = "x-twitter"
  name = "X / Twitter"
  url = "https://x.com/yourhandle"

[[params.social]]
  icon = "youtube"
  name = "YouTube"
  url = "https://youtube.com/yourchannel"
```

### Menus

The theme supports `main` and `footer` menus with dropdown children:

```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1

[[menu.main]]
  name = "Programs"
  identifier = "programs"
  weight = 2
  hasChildren = true

  [[menu.main]]
    name = "All Programs"
    url = "/causes/"
    parent = "programs"
    weight = 1
```

## Content Types

### Homepage

The homepage is driven by `data/homepage.yml`. It supports a hero slider, featured causes/programs, and blog posts. See `exampleSite/data/homepage.yml` for the full structure.

### Causes / Programs

Create program pages under `content/causes/` with type `causes`:

```yaml
---
title: "Program Name"
image: "images/causes/program.jpg"
date: 2025-01-01
type: "causes"
---

Program description here.
```

Programs are displayed as tiled cards on the causes list page and can be featured on the homepage. Use the `weight` front matter field to control ordering.

### Blog

Create blog posts under `content/blog/`:

```yaml
---
title: "Post Title"
image: "images/blog/post.jpg"
date: 2025-01-01
author: "Author Name"
categories: ["news"]
---

Post content here.
```

### Donation

Create a donation page at `content/donation.md` with layout `donation`:

```yaml
---
title: "Donate"
layout: "donation"
type: "page"
membership_levels:
  - name: "Individual"
    amount: "$50"
    paypal_id: "YOUR_BUTTON_ID"
venmo:
  username: "@your-venmo"
  qr_image: "images/venmo-qr.jpg"
---
```

### Volunteer

Create a volunteer page at `content/volunteer.md`:

```yaml
---
title: "Volunteer"
layout: "volunteer"
type: "page"
---
```

### Events

Create event pages under `content/event/`:

```yaml
---
title: "Event Name"
image: "images/event/event.jpg"
date: 2025-06-01
location: "Park Name"
---
```

## Layouts

| Layout | Path | Description |
|--------|------|-------------|
| Homepage | `layouts/index.html` | Hero slider, causes tiles, blog posts |
| Single page | `layouts/_default/single.html` | Generic content page |
| Causes list | `layouts/causes/list.html` | Tiled grid of all causes/programs |
| Cause single | `layouts/causes/single.html` | Individual cause/program page |
| Blog list | `layouts/blog/list.html` | Blog post listing with sidebar |
| Blog single | `layouts/blog/single.html` | Individual blog post with sidebar |
| Donation | `layouts/page/donation.html` | Donation page with PayPal/Venmo |
| Volunteer | `layouts/page/volunteer.html` | Volunteer signup page |
| Event list | `layouts/event/list.html` | Event listing |
| 404 | `layouts/404.html` | Not found page |

### Partials

| Partial | Description |
|---------|-------------|
| `navigation.html` | Top navigation bar with logo, menus, and dropdowns |
| `page-title.html` | Page title banner |
| `footer.html` | Site footer with address, social links, and footer menu |
| `header.html` | HTML head with meta tags, CSS, and fonts |
| `sidebar.html` | Blog sidebar |

## Overriding Layouts

To customize any layout without modifying the theme, copy it to your site's `layouts/` directory with the same path. For example, to customize the cause single page:

```bash
cp themes/altru/layouts/causes/single.html layouts/causes/single.html
```

Your site-level layout will take precedence over the theme's version.

## Example Site

A complete example site is included in `exampleSite/`. To preview it:

```bash
cd exampleSite
hugo server --themesDir ../..
```

## License

MIT License. See [LICENSE](LICENSE) for details.
