# Infographics

## An example

What if I tell you, that Estonia is a very small country compared to, let's say, Austria and Germany. As of 2020, it's population is about 1 326 535 people. Austria has around 9 million and Germany almost 84 million people. Can you imagine, how big is Germany compared to Estonia, based on these numbers alone? 

You'll have to make a quick calculations and maybe imagine a tape measure, where you compare 84 cm to 1.3 cm and you'll get an approximate idea. But what about Austria? Do you even remeber its population? OK, you look it up from above, to be sure and you'll have to do once again the calculations and the tape measure trick. 

But what if we want to compare not only the population of three countries but of all the EU members? What if there is more different data, than just the population, that we want to measure and compare? 

#### This is where **infographics** come in handy.


<!-- An illustration is often just an add-on to the content &ndash; something that helps bring life to text, add emotion etc. It is not very important, what exact colors you use or how big exactly the elements are compared to each other, as long as the illustrations overall look remains pleasant and proffessional. But sometimes this isn't the case &ndash; sometimes illustrations are based on **real data**. That kind of images are called infographics.  -->

> According to the Oxford English Dictionary, an infographic (or information graphic) is “a visual representation of information or data”.


Look at the image below. 👇 Now, when presented visually, it takes just a few seconds to understand and compare those large numbers.



<svg width="200" height="150" viewBox="0 0 200 150" style="width:100%; height:auto;" class="ed-elevated-05 ed-rounded-05">
    <g transform="translate(0, 120)">
        <g v-for="(v,i) in [{'name':'Estonia','pop':1326535,'col':'hsl(0,40%,70%)'}, {'name':'Austria','pop':9006398,'col':'hsl(120,40%,70%)'}, {'name':'Germany','pop':83783942,'col':'hsl(240,40%,70%)'}]" :transform="translate(map(i,0,2,20,150), 0)">
            <rect width="30" :height="map(v.pop,0,90000000,0,100)"  :fill="v.col" transform="scale(1, -1)" />
            <text y="10" x="15" font-size="7" fill="gray" text-anchor="middle">{{v.name}}</text>
            <text :y="map(v.pop,0,90000000,0,-100)-3" x="15" font-size="5" fill="lightgray" text-anchor="middle">{{v.pop}}</text>
        </g>
    </g>
    <text x="12" y="20" font-size="7" width="150">Population of</text>
    <text x="12" y="30" font-size="7" width="150">Estonia, Austria and Germany (2020)</text>
</svg>

*Source: [World-o-meter](https://www.worldometers.info/population/countries-in-europe-by-population/) - it is also a good habit to show the origin of information*


Above is an example of just one very simple dataset. Complex infographics can be much more.

## So, what is infographics?

- [What is an Infographic?](https://venngage.com/blog/what-is-an-infographic/)
- [15 Stunning Data Visualizations (And What You Can Learn From Them)](https://towardsdatascience.com/15-stunning-data-visualizations-and-what-you-can-learn-from-them-fc5b78f21fb8)
- 






## More about data

asdadasdasd
asdasdasdad
