# Graphic file formats for web apps

You should know from your previous study about vector and pixel graphics and what distinguishes them. Then you also know, that there is a lot of [different type file formats](https://en.wikipedia.org/wiki/Image_file_formats), like JPG, TIFF, PSD, PDF, SVG, EPS, RAW and so on. But not all the formats are suitable for web developement.
 

**Here we will focus on the file formats, you can use in web developement ie what work in browsers.**


::: tip Quick reminder
- **Raster *(aka Pixel or Bitmap)* graphics** is made of pixels - tiny squares that have a certain color (and sometimes transparency). Like digital photos from your phone, for example. It is hard to enlarge pixel images, because we just do not have the data. 
- **Vector graphics** is drawn with mathematic point coordinates, curves and equations, which can be recalculated each time. Thats's why vector graphics can be easily resized or even manipulated in real time. 

[Read this](https://vector-conversions.com/vectorizing/raster_vs_vector.html) if you need more information.

:::

<!-- ## List of available formats

We can not use all graphic file formats in browsers or web apps. Let's take a look, which ones we will talk about. 

| Pixel     | Vector    |
| -----     |--------   |
| [JPG](https://en.wikipedia.org/wiki/JPEG)       | [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)       |
| [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)       |           |
| [GIF](https://en.wikipedia.org/wiki/GIF)       |           |
| [WebP](https://en.wikipedia.org/wiki/WebP)      |           | -->

::: warning NOTE: canvas

Should we mention ```<canvas>``` here as an option to show and manipulate raster images on browser?

:::

::: warning NOTE: video

Where are we talking about ```<video>```?

:::

<!-- ☝ As you can see, there are many options for pixel formats and only one for vector. -->


<!-- ## Subtopics -->






## Exporting graphic assets

- From [Photoshop](https://helpx.adobe.com/photoshop/using/export-artboards-layers.html)
- From [Illustrator](https://vectortwist.com/asset-export-illustrator/)
- From [Figma](https://help.figma.com/hc/en-us/articles/360040028114-Guide-to-exports-in-Figma) 
- From After Effects
    - As [animated GIF](https://www.schoolofmotion.com/blog/gif-in-after-effects)
    - Using [Lottie](https://lottiefiles.com/plugins/after-effects)
- etc






## Raster graphic formats

- **[JPG](https://en.wikipedia.org/wiki/JPEG)**
- **[PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)**
    - Supports transparency
        - [Adobe online tool](https://www.adobe.com/photoshop/online/transparent-background.html)
        - [With Photoshop](https://www.youtube.com/watch?v=P7aNejNEiPE)
        - [Remove BG](https://www.remove.bg/)
    - Animated PNGs (**APNG**)
        - Rendering from After Effects
        - [EzGif APNG converter](https://ezgif.com/apng-maker)
    - Optimizing PNG
        - [TinyPNG](https://tinypng.com/)
- **[GIF](https://en.wikipedia.org/wiki/GIF)** - mostly for animations
    - [Animated GIFs](https://www.schoolofmotion.com/blog/gif-in-after-effects)
- **[WebP](https://developers.google.com/speed/webp)** is relatively new and not very videly supported by the mainstream design programs.
    - Supports animation
    - Helper tools and utilities
        - [Google converters](https://developers.google.com/speed/webp/docs/precompiled)
        - [Photoshop plugin](https://developers.google.com/speed/webp/docs/webpshop)
        - [CloudConvert](https://cloudconvert.com/webp-converter)
        - [EzGif WebP converter](https://ezgif.com/webp-maker)
- When to choose each format
    - 📌[JPG vs PNG vs GIF vs WebP](https://wpmudev.com/blog/best-image-formats-png-vs-jpg-svg-gif-webp/)

⚠ *<mark>AVIF, JPEG XL, JPEG XR</mark> etc formats should be considered to cover later, when/if wider browser support becomes available* 








## Vector format (SVG)

There are a bunch of different raster formats for web, but only one vector - the SVG

- 📌[All you have to know about SVG](https://css-tricks.com/lodge/svg/) (and probably more)

::: tip NOTE
There is only one link, so you may think that there isn't much to talk about. But wait, just click and see!
:::






## Using graphic assets in HTML

Imagine a website that is displayed on huge desktop monitor and a small smartphone. If there should be a full-width image, which size is optimized for the phone, it will appear stretched and blurry on the big screen. We can use big image and show it on both devices, but its "weight" is huge and it makes no point to download all the image data to the phone. It means that we should use **different size files for different devices**. As we talk about **raster images**, of course. **Vector (SVG) is scalable**. In this section we talk about, how.


- [Responsive images](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/)
- Responsive background images
    - with [media queries](https://www.juangarcia.design/blog/responsive-background-images-with-image-set/#the-problem)
    - with [image-set()](https://www.juangarcia.design/blog/responsive-background-images-with-image-set/#the-solution) <mark>⚠ check [the support](https://caniuse.com/css-image-set) before using in production!</mark>
- Icons / icon fonts
    - add
    - content
    - here

⚠ *<mark>Content queries</mark> should be also covered when wider browser support becomes available. Maybe its not that important here, but in the main CSS part of the course?*


