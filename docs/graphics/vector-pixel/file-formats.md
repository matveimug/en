# Graphic file formats for web apps

<DurationSnippet s="x" i="x" es="x" />

You should know from your previous study about vector and pixel graphics and what distinguishes them. Then you also know, that there is a lot of [different type file formats](https://en.wikipedia.org/wiki/Image_file_formats), like JPG, TIFF, PSD, PDF, SVG, EPS, RAW and so on...
 

**Here we will focus on the file formats, you can use in web developement ie what work in browsers.**


::: tip Quick reminder
- **Pixel or Raster graphics** *(aka bitmap)* is made of pixels - tiny squares that have a certain color (and sometimes transparency). Like digital photos from your phone, for example. It is hard to enlarge pixel images, because we just do not have the data. 
- **Vector graphics** is drawn with mathematic coordinates and curves, which can be recalculated each time. Thats's why vector graphics can be easily resized or even manipulated in real time. 

[Read this](https://vector-conversions.com/vectorizing/raster_vs_vector.html) if you need more information.

:::

## List of available formats

We can not use all graphic file formats in browsers or web apps. Let's take a look, which ones we will talk about. 

| Pixel     | Vector    |
| -----     |--------   |
| [JPG](https://en.wikipedia.org/wiki/JPEG)       | [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)       |
| [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)       |           |
| [GIF](https://en.wikipedia.org/wiki/GIF)       |           |
| [WebP](https://en.wikipedia.org/wiki/WebP)      |           |

::: warning NOTE

Should we mention ```<canvas>``` here as an option to show and manipulate raster images on browser?

:::

☝ As you can see, there are many options for pixel formats and only one for vector.


## Subtopics

### Importing and exporting graphic assets

- Photoshop
- Illustrator
- Figma etc

### Raster graphic formats

- When to choose each format 
- Transparency
- Animation
- Using in code

### SVG format

- SVG syntax 
- [Using SVG](https://www.freecodecamp.org/news/use-svg-images-in-css-html/) ```<img>```, ```<inline>```, ```<object>``` 
- Manipulating SVG with code
- Frameworks

### Using graphic assets in HTML

- Responsive images
- Media queries
- Icons / icon fonts


<!-- ## Main topics

- Importing and exporting graphic assets with Photoshop, Illustrator and Figma
- About raster graphic formats, how and when to use
    - Transparency
    - Animated GIFs
    - Optimization
- About SVG format, how and when to use
    - ```<img>```, ```<object>```, ```<inline>```
    - SVG and HTML/CSS
    - Optimization
- Using graphic assets in HTML
    - Responsive images
    - Media queries
    - Icons / icon fonts -->
