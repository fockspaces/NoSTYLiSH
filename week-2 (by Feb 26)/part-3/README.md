# Week 2 Part 3

## Learning Objective: Build Demo Website

Even though you would like to be a backend engineer, you should build a basic user interface for demonstration.

#### There are 4 pages await to be completed. Take a look at all of them:

1. Home Page - `/index.html`
2. Product Page - `/product.html`
3. Thank You Page - `/thankyou.html`
4. Profile Page - `/profile.html`

#### What do we have?

1. There are 3 well-designed pages from our designer. We should follow those designs.  
   Refer to: https://www.figma.com/file/sKhc4A0Gi427u1I5leT5ug/STYLiSH

2. There are logo and icons ready.  
   Download from: https://s3.amazonaws.com/appworks-school-stylish/images.zip

3. Get data from your own backend APIs.

#### What should we do?

1. Page Layout.
2. Check Out Procedure.
3. User Sign Up and Sign In.

### Complete Home Page Layout

Today, you only need to build the static home page (`/index.html`) layout **without effects or actions**.

1. You need to render the data received from `https://[HOST_NAME]/api/[API_VERSION]/products/all`, and only need to show the first page of data.

2. It is also necessary to implement different product category pages. For example, when the user clicks 女裝, the URL needs to be changed to `http://[HOST_NAME]/index.html?catetory=women`, and render the data received from `https://[HOST_NAME]/api/[API_VERSION]/products/women`.

3. The block in the upper part of the index page comes from `https://[HOST_NAME]/api/[API_VERSION]/marketing/campaigns`, you only need to show the first campaign.
