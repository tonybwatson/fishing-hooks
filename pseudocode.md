<!-- Path 1

Must:
    - allow user to see all products listed on products page - sorted by type
    - allow user to see individual product pages when they click a product (either from products page or from cart)
    - allow user to add any number of items to cart
    - use hooks to manage state/lifecycle
    - pull item info from API
    - start at home page
    - block access to restricted pages 
    - have cart persist on refresh

Should:

Could: 

Won't: 
    - show cart if nothing is in it
    - allow user to remove items if nothing in cart


Page loads
Start on home splash page
click 'enter'
go to products page - list of all items as cards with button to add/change number of items to add to list - get information from api, place into necessary spots on ItemCard - do this for each
IF item clicked, go to individual page for it
IF 'add' clicked, add item to cart (local storage)
    cart page displays storage data as cards
    if 'delete' clicked, remove from cart/local storage


Components

    App
        M -
        V - 
        C - api call, pass to children
        Routing - 

    Home
        M - 
        V - simple splash page, navbar
        C - 
        R - One link to start, takes you to ProductsPage
    
    MyNavbar
        M - 
        V - menu of locations in app
        C - 
        R - links to Home, productsPage, Cart
    
    ProductsPage
        M - array of all items from api call
        V - display ItemCards, grouped by type
        C - 
        R - Link to cart
    
    ItemCard
        M - information passed from App api call
        V - display api info as card
        C - 
        R - Clicking item name/picture takes you to individual item page
    
    Cart
        M - array of items saved to cart, number of each added
        V - display cards of items saved to cart
        C - 
        R - 
 -->




Path 3
Must
    - allow user to register - Sign Up - POST new user data 
(name, email, password), receive token, save to local storage

    - authenticate user - Login - POST existing user data, receive token and save in local storage

    - sign out - delete token from local storage and POST token, revoke session on api

    - display user information on a Dashboard (GET specific user data based on token)

    - use react hooks

    - use axios to hit api

    - keep track of view or page with react-router

    - start at home page

    - block access to restricted pages using conditional rendering - cannot display dashboard if not logged in, cannot see login button if already logged in

    - if site refreshed, status is persistent using localstorage


Should

    - 

Could

    - 

Won't

    - 


App loads

Two options - login/sign up

user clicks 'sign up'

form displays - inputs for name, email, password

user fills out info, clicks "sign up"

information is posted to api, token is saved to local storage

IF user has token in localstorage, dashboard is available

page changes to dashboard showing user information

user clicks "log out"

token is deleted from local storage

user is kicked back to login screen

user types username and password into inputs




Components

    App
        M - 
        V - 
        C - sends requests to api

        - isLoggedIn - if token exists, show dashboard, else show signup/signin

    SplashPage
        M - 
        V - display "sign in" and 'sign up" buttons
        C - 

    InfoInput
        M - 
        V - 
        C - createUser() -Posts user info from input to API to create user account

    
    start from inside, move out -
    form to submit user data - form inputs sent into axios post request
    form posts data to api, returns token - saves in local storage
    display data on page 

