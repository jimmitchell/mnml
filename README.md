# mnml

![mnml](https://raw.githubusercontent.com/jimmitchell/mnml/main/icon.jpg)

A clean and simple minimalist Micro.blog theme.

## Key Features

- Localized for different languages.
- System display mode aware (light and dark).
- Mobile responsive.
- HTML image class support.
- Featured post category setting.
- Custom home page category setting.
- Multiple, comma-separated home page categories are supported.
- Choose between a wider or narrower site header.
- Choose between long or short date formats.
- Display full posts on category pages.
- Custom photos page category setting.
- Grid or Masonry photo layout options.
- Show all image formats on photos page.
- Wide or narrow photo page layout setting.
- Use a custom site icon of your choosing.
- Hide the site avatar altogether if you choose.
- Setting to enable/disable a button that lets reader copy code blocks in posts.
- Built-in Search shortcode. See instructions below.
- [Fediverse Creator](https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/) tag support.
- Pagination on all post related pages.

See the theme in action at [mnml.micro.blog](https://mnml.micro.blog).

## Image Classes

**mnml** supports the following html image classes:

- `.align-none`: An inline sized image without any alignment.
- `.align-left`: An inline sized image that's left aligned which allows text to wrap around it.
- `.align-right`: An inline sized image that's right aligned which allows text to wrap around it.
- `.align-center`: An inline sized image that's center aligned. There is no text wrapping.
- `.full-width`: A full width image that spans the entire width of the page. This is the same as adding an image using Markdown.
- `.overflow`: A full width image that overflows the width of the page.

Applying one of these classes to an image will allow you to control appearance and layout. It's far better to see it in action, so for more details and code examples, visit the **[mnml]** [style guide page](https://mnml.micro.blog/styleguide/#images-markdown-and-optional-html).

## Adding a Search Page

**mnml** has a built-in Search shortcode to let you add a Search page if you so desire...

1. Create a new Micro.blog page. Name it whatever you like with a url of whatever you like.
2. In the page body, add the `{{< search >}}` shortcode.
3. Visit your new search page and try it out.

Search results default to 5 until you set your own value in the **mnml** plugin settings page.

## Special Thanks

Thank you to the following for their **mnml** localization contributions:

- Swedish: [@robertbirming](https://github.com/robertbirming)
- Ukrainian & Russian: [@luxury-format](https://github.com/luxury-format)
- Chinese (Traditional): [@bobbytung](https://github.com/bobbytung)
- Polish: [@bstn](https://micro.blog/bstn)

## Support

If you like **mnml**, consider supporting it by [buying me a coffee](https://buymeacoffee.com/jim.mitchell).
