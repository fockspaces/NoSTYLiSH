# Week 2 Part 5

## Build Demo Website

### Complete Profile Page

Today, you should build a profile page (`/profile.html`), just follow the logics below:

1. Right after user loaded the page, check if there is an **access token** stored in the front-end.
2. If **access token** existed in the front-end, call **User Profile API** for user profile data and show it in the page.
3. If there is no **access token** stored in the front-end, show sign up and sign in forms in the page.
4. User can sign up for a new account, or sign in to existed account by email/password authentication mechanism.
5. Every time user sign up or sign in successfully, store **access token** in the front-end for following requests.

### Complete Check Out Procedure

In the product page, show a form for credit card inputs and a check out button. When user click on check out button, complete payment by connecting to **Order Check Out API**. Since we need users to sign in before checkout, you should redirect user to sign in/sign up page (user profile page) if he or she haven't done it before.

If everything is OK, send user to thank you page (`/thankyou.html`). Otherwise, show the error message in the product page.

### Go back to Home Page

1. Users should be able to go back to home page by clicking the STYLISH logo at top-left corner in each page.
2. Users can sign in by Facebook login or native login by simple signup and signin form.
