<p align="center">
  This was Build Using Gatsby's default starter by @Nugoo 🚀
</p>


## Introduction
This Application uses Gatsbyjs. Gatsby is a React-based, GraphQL powered, static site generator. It weaves together the best parts of React, webpack, react-router, GraphQL, and other front-end tools in to one very enjoyable developer experience. It is similar to Nextjs but it has better performance for smaller sites (like this one). Unlike Nextjs, Gatsby also does not require a server.

### Frameworks Used
* Gatsby - Static Site Generator for React
* Axios - Make HTTP requests or XMLHttpRequests. Supports promises. No parsing needed.
* Redux - State Management System to Pass State Between Pages
* React Icons - Icon Library (includes FontAwesome)
* React Helmet - SEO Optimization on the fly
* Formik & Yup - Form handling and validation
* Material UI - Used for Mobile Drawer/Navigation


### Styling Rules
* Use of SCSS Modules and regular SCSS to minimize complexity
* SCSS files to match name of corresponding .js file
* SCSS/CSS to be ordered alphabetically

## Comments
1. The task of the react project made the whole application into a multi-page form, making the navigation quite obsolete (users shouldn't be able to visit other pages without selecting a book/category from current page). From a UI/UX perspective it doesn't work - jst following instructions of the task.

2. Having a Multi-Page form is a bad design - prefer to have all this functionality as one component to prevent unnecessary routing! Could have also skipped using Redux in that case.

3. A lot of unnecessary validation is also in the code in case the user navigates to a page without selecting something. Again - bad choice of separating the steps in to different pages.


