# HTML INTERVIEW QUESTIONS



| No. | Questions |
|----|------------------------------------|
|01. |[What is difference between HTML and XHTML?](#1-what-is-difference-between-html-and-xhtml)|
|02. |[What are the semantic tags available in html5?](#2-what-are-the-semantic-tags-available-in-html5)|
|03. |[Why you would like to use semantic tag?](#3-why-you-would-like-to-use-semantic-tag)|
|04. |[What does a `<DOCTYPE html>` do?](#4-what-does-a-doctype-html-do)|
|05. |[What happens when DOCTYPE is not given?](#5-what-happens-when-doctype-is-not-given)|
|06. |[What is difference between `span` tag and `div` tag?](#6-what-is-difference-between-span-tag-and-div-tag)|
|07. |[What are optional closing tag?](#7-what-are-optional-closing-tag)|
|08. |[What is a self closing tag?](#8-what-is-a-self-closing-tag)|
|09. |[Explain the difference between block elements and inline elements?](#9-explain-the-difference-between-block-elements-and-inline-elements)|
|10.|[What are semantic and non-semantic elements?](#10-what-are-semantic-and-non-semantic-elements)|
|11. |[What is the purpose of meta tags?](#11-what-is-the-purpose-of-meta-tags)|
|12. |[What is the purpose of the `alt` attribute on images?](#12-what-is-the-purpose-of-the-alt-attribute-on-images)|
|13. |[What is the difference between `<section>` and `<div>`?](#13-what-is-the-difference-between-section-and-div)|
|14. |[When should you use `section`, `div` or `article`?](#14-when-should-you-use-section-div-or-article)|
|15. |[Can a web page contain multiple `<header>` elements? What about `<footer>` elements?](#15-can-a-web-page-contain-multiple-header-elements-what-about-footer-elements)|
|16. |[How many new form elements are introduced in html5?](#16-how-many-new-form-elements-are-introduced-in-html5)|



## 1. What is difference between HTML and XHTML?

The Extensible Hypertext Markup Language, or XHTML, has two important notes for front end developers.

1) It needs to be well formed, meaning all elements need to be closed and nested correctly or you will return errors.
2) Since it is more strict than HTML is requires less pre-processing by the browser, which may improve your sites performance.

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 2. What are the semantic tags available in html5?

HTML5 semantic tags define the function and the category of your text, simplifying the work for browsers and search engines, as well as developers.

HTML5 offers new semantic elements to define different parts of a web page:

* `<article>`
* `<aside>`
* `<details>`
* `<figcaption>`
* `<figure>`
* `<footer>`
* `<header>`
* `<main>`
* `<mark>`
* `<nav>`
* `<section>`
* `<summary>`
* `<time>`

Syntax:

```html
<header></header>
<section>
	<article>
		<figure>
			<img>
			<figcaption></figcaption>
		</figure>
	</article>
</section>
<footer></footer>
```

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 3. Why you would like to use semantic tag?

* Search Engine Optimization, accessibility, repurposing, light code. 
* Many visually impaired person rely on browser speech and semantic tag helps to interpret page content clearly.
* Search engine needs to understand page content to rank and semantic tag helps.
* Semantic code aids accessibility. Specially, many people whose eyes are not good rely on speech browsers to read pages to them. These programs cannot interpret pages very well unless they are clearly explained.
* Help Search engines to better understand pages. Search engine need to understand what your content is about when rank you properly on search engines. Semantic code tends to improve your placement on search engines, as it is easier for the "search engine spiders" to understand.
* It\'s easier to read and edit, which saves time and money during maintenance.

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 4. What does a `<DOCTYPE html>` do?

A DOCTYPE is always associated to a `DTD` ( **Document Type Definition** ). A DTD defines how documents of a certain type should be structured (i.e. a `button` can contain a `span` but not a `div`), whereas a DOCTYPE declares what DTD a document supposedly respects (i.e. this document respects the HTML DTD). For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the HTML specifications your document respects. 

Once a user agent has recognized a correct DOCTYPE, it will trigger the `no-quirks mode` matching this DOCTYPE forreading the document. If a user agent doesn't recognize a correct DOCTYPE, it will trigger the `quirks mode`.

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 5. What happens when DOCTYPE is not given?

The web page is rendered in quirks mode. The web browsers engines use quirks mode to support older browsers which does not follow the **W3C specifications**. In quirks mode CSS class and id names are case insensitive. In standards mode they are case sensitive.

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 6. What is difference between `span` tag and `div` tag?

The primary difference between div and span tag is their default behavior. By default, a `<div>` is a **block-level-element** and a `<span>` is an **inline element**.

* `<div>` is a block level element which means it will render it on it\'s own line with a width of a 100% of the parent element.
* `<span>` is an inline element which means it will render on the same line as the previous element, if it is also an inline element, and it's width will be determined by it\'s content.

```html
<div>Demo Text, with <span>some other</span> text.</div>
```

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>

## 7. What are optional closing tag?

`<p>, <li>, <td>, <tr>, <th>, <html>, <body>`, etc. don\'t have to provide end tag. Whenever browser hits a new tag it automatically ends the previous tag. 

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>

## 8. What is a self closing tag?

In HTML5 it is not strictly necessary to close certain HTML tags. The tags that aren\'t required to have specific closing tags are called “self closing” tags.

An example of a self closing tag is something like a line break (`<br />`) or the meta tag (`<meta>`). This means that the following are both acceptable:

```html
<meta charset="UTF-8">
...
<meta charset="UTF-8" />
```

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>

## 9. Explain the difference between block elements and inline elements?

* block elements `<h1>, <p>, <ul>, <ol>, <li>`,
* inline elements `<span>, <a>, <strong>, <i>, <img>`

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>

## 10. What are semantic and non-semantic elements?

* **Semantic elements**: clearly describes its meaning to both the browser and the developer. For example: `<form>`, `<table>`,  `<article>`, `<aside>`, `<details>`, `<figcaption>`, `<figure>`, `<footer>`, `<header>`, `<main>`, `<mark>`, `<nav>`, `<section>`, `<summary>`, `<time>` clearly defines its content.
  
* **Non-semantic elements**: `<div>` and `<span>` tells nothing about its content.

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 11. What is the purpose of meta tags?

The META elements can be used to include name/value pairs describing properties of the HTML document, such as author, expiry date, a list of keywords, document author etc.

```html
<!DOCTYPE html>
<html>
  <head>
        <!--Recommended Meta Tags-->
        <meta charset="utf-8">
        <meta name="language" content="english"> 
        <meta http-equiv="content-type" content="text/html">
        <meta name="author" content="Author Name">
        <meta name="designer" content="Designer Name">
        <meta name="publisher" content="Publisher Name">
        <meta name="no-email-collection" content="name@email.com">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

        <!--Search Engine Optimization Meta Tags-->
        <meta name="description" content="Project Description">
        <meta name="keywords" content="Software Engineer,Product Manager,Project Manager,Data Scientist">
        <meta name="robots" content="index,follow">
        <meta name="revisit-after" content="7 days">
        <meta name="distribution" content="web">
        <meta name="robots" content="noodp">
        
        <!--Optional Meta Tags-->
        <meta name="distribution" content="web">
        <meta name="web_author" content="">
        <meta name="rating" content="">
        <meta name="subject" content="Personal">
        <meta name="title" content=" - Official Website.">
        <meta name="copyright" content="Copyright 2020">
        <meta name="reply-to" content="">
        <meta name="abstract" content="">
        <meta name="city" content="Bangalore">
        <meta name="country" content="INDIA">
        <meta name="distribution" content="">
        <meta name="classification" content="">
    
        <!--Meta Tags for HTML pages on Mobile-->
        <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        <!--http-equiv Tags-->
        <meta http-equiv="Content-Style-Type" content="text/css">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
      
    <title>HTML5 Meta Tags</title>
  </head>
  <body>
       ...
  </body>
</html>
```

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 12. What is the purpose of the `alt` attribute on images?

The `alt` attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.

```html
<img src="pancakes.png" alt="Stack of blueberry pancakes with powdered sugar">
```

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 13. What is the difference between `<section>` and `<div>`?

The `<section>` tag creates independent sections within a webpage having logically connected content. And the `<div>` tag is an empty container specifying a division or a section.

**The `<section>` Element**

According to the W3C specification, the `<section>` tag means that the content inside this element is grouped. In other words, the content relates to a single theme. It must be an entry in the outline of the page.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Section Tag Example</title>
  </head>
  <body>
    <h1>W3Docs</h1>
    <section>
      <h2>W3Docs Sections</h2>
      <ul>
        <li>Books</li>
        <li>Quizzes</li>
        <li>Snippets</li>
      </ul>
    </section>
    <section>
      <h3>Books</h3>
      <p>Learn HTML</p>
      <p>Learn CSS</p>
      <p>Learn Javascript</p>
    </section>
  </body>
</html>
```

**The `<div>` Element**

The `<div>` element only represents its child elements and doesn\'t have a special meaning. It can be used with the `lang`, `title`, and `class` attributes to add semantics that is common to a group of consecutive elements. This element can also be used in a `<dl>` tag and wrap groups of `<dt>` and `<dd>` elements.

**Example**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Div Tag Example</title>
    <style>
      div {
        background-color: #87f5b3
      }
    </style>
  </head>
  <body>
    <h1>Example</h1>
    <div>
      <h2>A heading in a <div> tag.</h2>
      <p>Some text in a <div> tag.</p>
    </div>
    <p>Here is some other text in a <p> tag.</p>
  </body>
</html>
```

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 14. When should you use `section`, `div` or `article`?

* `<section>`, group of content inside is related to a single theme, and should appear as an entry in an outline of the page. It\'s a chunk of related content, like a subsection of a long article, a major part of the page (eg the news section on the homepage), or a page in a webapp\'s tabbed interface. A section normally has a heading (title) and maybe a footer too.

* `<article>`, represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

* `<div>`, on the other hand, does not convey any meaning, aside from any found in its class, lang and title attributes.

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 15. Can a web page contain multiple `<header>` elements? What about `<footer>` elements?

Yes, header elements can be used multiple times in documents. A `<header>` tag must be present for all articles, sections, and pages, although a `<footer>` tag is not necessary.

**From W3C standards**

```html
A header element is intended to usually contain the section's heading (an h1–h6 element or an hgroup 
element), but this is not required. The header element can also be used to wrap a section's table of 
contents, a search form, or any relevant logos.
```

```html
The footer element represents a footer for its nearest ancestor sectioning content or sectioning root 
element. A footer typically contains information about its section such as who wrote it, links to related 
documents, copyright data, and the like.
```

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>


## 16. How many new form elements are introduced in html5?

|Sl.No| Element     | Description   |
|-----|-------------|---------------------------|
| 01. |color        |Gives the end user a native color picker to choose a color.|
| 02. |date         |Offers a datepicker.|
| 03. |datetime     |An element to choose both date and time.|
| 04. |datetime-local |An element to choose both date and time, with local settings support.|
| 05. |email        |A field for entering e-mail address(es).|
| 06. |month       |Choose a full month.|
| 07. |number       |Picking a number.|
| 08. |range        |Offers a slider to set to a certain value/position.|
| 09. |search       |A field for search queries.|
| 10. |tel          |Choosing a telephone number.|
| 11. |time         |Input a certain time.|
| 12. |url          |Entering a URL.|
| 13. |week         |Picking a specific week.|


**Example:**

```html
<input type="color" value="#b97a57">

<input type="date" value="2020-06-08">

<input type="datetime" value="2020-06-09T20:35:34.32">

<input type="datetime-local" value="2020-06-09T22:41">

<input type="email" value="robert@robertnyman.com">

<input type="month" value="2020-06">

<input type="number" value="4">

<input type="range" value="15">

<!-- Note: If not set, default attribute values are min="0", max="100", step="1". -->

<input type="search" value="[Any search text]">

<input type="tel" value="[Any numeric value]">

<!-- Note: Most web browsers seem to let through any value at this time. -->

<input type="time" value="22:38">

<input type="url" value="https://www.google.com/">

<!-- Note: requires a protocol like http://, ftp:// etc in the beginning. -->


<input type="week" value="2020-W24">
```

<div align="right">
    <b><a href="#">⬆ Back to Top</a></b>
</div>

