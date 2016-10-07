---
title: Site and Blog Build with Sculpin
post: true
categories:
    - web-development
tags:
    - sculpin
    - scss
    - smacss
    - bem
meta:
    twitter:
        title: "Site And Blog Build With Sculpin | Ben Plummer"
        description: "An introduction to my Blog and insight into the technologies I used for the site rebuild, including why I chose Sculpin."
    og:
        type: "article"
        title: "Site And Blog Build With Sculpin | Ben Plummer"
        description: "An introduction to my Blog and insight into the technologies I used for the site rebuild, including why I chose Sculpin."
---

I've been wanting to get into blogging for as long as I can remember but the usual factors have held me back until now. 
This post serves as an introduction to my blog and allows me to cover the reasons behind starting it, as well as some 
insight into the decisions I have taken in building this site as a whole.
<!-- More -->

#### Why Not Use a Solution Out The Box?

It would be a lot easier to use something like WordPress, choose a nice theme and have my site up and running in less than a 
week without having to write much code wouldn't it? If shipping out content such as blog posts was my only concern then I 
probably would have went that way myself but with every new project, I like to ensure that I'm learning something new.

#### What Have I Learnt?

With recently leaving a Senior PHP Developer position and going self-employed, I wanted to improve my skills in areas that I 
am not as experienced in, therefore for this project my main concentration was on the front-end. Rather than using something 
like a Bootstrap theme to give me a leg up, I wanted to build the front-end of the site from the ground up. I had done this for 
previous builds of my site although on reflection I knew that I could improve the structuring of my SASS and make things more 
modular and re-usable. As a result, I did research into various CSS methodologies and eventually came to a decision to go 
with [SMACSS](https://smacss.com/) and [BEM](http://getbem.com/) for the rebuild of my site. I won't go into too much detail 
on how they work so to understand more of what I am going to talk about, check out their websites.

SMACSS stands for "Scalable and Modular Architecture for CSS" and is proclaimed to be more of a style guide than a rigid 
framework. Amongst other things, it outlines Base, Layout, Module, State and Theme CSS rules that when followed, allow for 
more CSS flexibility and maintainability in your project.

BEM (Block Element Modifier) is a naming convention for the class attributes of elements, which generally takes the form 
`block__element--modifier`. In a nutshell, a Block represents a standalone entity e.g. a contact form, an Element is a 
component tied to a Block e.g. a contact form button, and a Modifier is a variant of a Block or Element that changes their 
appearance, behaviour or state e.g. a condensed contact form with input field placeholders rather than labels. These concepts 
help to produce a codebase that is easier for everyone to read, understand and apply themselves.

As the purposes of SMACSS and BEM compliment each other, I found that implementing them alongside each other was very effective 
in producing a more modular SASS structure. The construction of SMACSS Modules allowed me to reuse styles for components that 
are used repeatedly across multiple pages or even on the same page. If anything within a Module needed changing for one 
specific occurrence of a component, it was very simple to subclass the relevant Module, which SMACSS also covers. Consequently, 
I think that when SMACSS or BEM are used in any project you will come across issues that are not necessarily covered in their 
documentation, with little help from other online search results. Often at these times, there is no right answer and it is most 
likely best to go with your instinct for what is best for your project. I found myself in this position a few times but I'll 
leave those specifics for a potential future blog post.

For those wondering whether to give SMACSS and BEM a go, I would definitely recommend it. You'll find that they work very 
effectively together and it almost seems second nature to use one when you are using the other.

Aside from the front-end, I also had a decision to make on what to use to serve pages and achieve blog functionality. After 
much consideration, I went with the PHP Static Site Generator [Sculpin](https://sculpin.io/).

#### So, Why a Static Site Generator?

From the moment I decided to rebuild my site, I knew I would use a Static Site Generator. In comparison to dynamic sites, 
static sites are generally faster, more secure and allow you to control content through version control. The majority also 
allow the conversion of Markdown files which itself seems to be becoming more popular across applications all of the time. It 
could be argued that not everyone would be able to understand or write Markdown but in this case only myself and contributors to 
my site would have to be familiar with it.

#### But Why Sculpin?

There are certainly hundreds of Static Site Generators to choose from with [Jekyll](http://jekyllrb.com/) most likely leading 
the way, however I do have my reasons for choosing Sculpin.

PHP is my native programming language thus it makes more sense to choose a solution that is built in PHP so that I can understand 
and debug things if they do not work as expected, and contribute solutions or features to the project if necessary. Not only that,
Sculpin is built on Symfony's HTTP Kernel and utilises Twig templates, which is beneficial as Symfony is my framework of choice 
and the transferable skills should come in useful.

Sculpin is highly configurable and easy to extend in order to fulfil the majority of expectations you would have of a Static Site 
Generator. Out of the box, it ships with a "Posts" content type that has support for Tags and Categories, as well as a generator 
for pagination amongst other things. These features are very helpful in getting a blog, or any type of static site for that matter, 
up and running. This allows you to concentrate on the most important part of your site, content!

Despite the number of pros, with the amount of time I have spent working with Sculpin I have found that it does have its own little 
quirks which sometimes require work-arounds. That said, it is an open source project and what it offers is great. If you 
experience any issues or believe a feature is missing, the Sculpin community is always helpful and willing to provide support. 
Alternatively they would always welcome your contributions.

All in all, I'm glad that I chose Sculpin. It has worked great for what I required for a blog and general static site. With how 
configurable it is, it does not take a lot to adapt to fit a user's requirements. On the occasions if or when there are issues or 
you believe a new feature is required, there is an opportunity to contribute to the project, which is what I intend to do in the future. 
If you are sitting there wondering whether to give Sculpin a go, I definitely recommend it and don't think you'll be disappointed.

#### The Start of a Blogging Adventure...

If you got this far with me waffling on about why I built this site the way I did and how I did it, I applaud you. Now to actually 
talk about the blogging.

I wanted to start a blog in order to help others as well as myself. There have been plenty of times I have spent hours solving an 
issue or researching a method or problem where I could have blogged the solution or results. Occasionally further down the line I 
can find myself in the same scenario again and with a lot of time passed by, it can be difficult to remember a specific solution. 
Blogging will not only help my future self but also hopefully help others and prevent them from spending hours on something I 
already have put the time in on. As a developer, it's impossible to count the amount of times that another person's blog post has 
helped me so I'm really happy to finally have this up and running and hopefully give something back!

In regards to topics and subject areas, I'm mainly going to be covering anything web or computer related but don't be 
surprised to see other random posts popping up. I always have words to say about something!
