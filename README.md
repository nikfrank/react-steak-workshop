<a name="thatop"></a>
# Single Page Application: Steak Restaurant Website

here, we will learn to complete tasks with ReactJS & SCSS to add responsive interactive features to our website!

we'll cover the architecture of Single Page Applications, and gain more experience with common feature patterns.


Agenda:

- [step 1: routing](#step1)
- [step 2: page content](#step2)
- [step 3: menu with language selection](#step3)
- [step 4: placing an order / shopping cart pattern](#step4)


dep agenda

- parallax Steak & Grill on homepage
  - flying steaks landing on grills, fire, <SteakSVG cooked={true}/>
- menu with language selection
  - render items from menu.json
  - implement language selection feature, with rtl / ltr correction
  - render images of steaks from menu.json[0].imgSrc
- submitting orders
  - menu (<button onClick={()=> this.addToOrder(steak)}> + </>)
  - addToOrder = (steak)=> this.props.saveToLocalStorage(steak) // have already ?perhaps?
  - convert "contact us" page to "submit order", keeping email api call as transit
  - style "current order" responsively to match "shoppingCart" on amazon mas o menos



## getting started


`$ create-react-app steak-shop`

`$ cd steak-shop`

`$ npm start`

you now have the default create-react-app starter running in your browser and can edit the `src` files live

you are now also ready to work through the [exercises](/exercises.md)!

you should be fairly comfortable with writing Components to use as Views or as Widgets, and using `props` thereon.





<a href="#step1"></a>
## step 1: routing

Our page will have three Views:

1. Home / About page with map & animations
2. Menu with language selection
3. Place an Order (shopping cart)


in order to have three Views on one page (without reloading the page like in 1996) we'll use the "client side routing" pattern

this allows us to use the url to decide which View Component to render.


`$ yarn add react-router react-router-dom`











This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
