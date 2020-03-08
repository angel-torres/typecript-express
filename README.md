# Express Server /w TypeScript and MongoDb
I've created this repo to learn to use TypeScript with ExpressJS. 

## What is TypeScript?

TypeScript is a superset of JavaScript. It was created by Microsoft and was first relased in 2012. TypeScript provides optional static typing along with other features. It caught my attention a few months ago when I was learning a bit about AngularJS, which uses TypeScript. It has been increasing in popularity and it does not seem like it will be disappearing anytime soon. This project implements many of it's core features.

## What are some cool features?

**Optional Chaining**

*This is a cool feature I found out about which helps cleans up the code. It es very useful whenever you have nested data. Sometimes it turns out that one of the objects in the chain is undefined. This can cause errors but with the `.?` we can catch those errors before runtime instead of using the `&&` operator.*

*BEFORE*
```
if (data && data.customer && data.customer.address) {
   const {address} = data.customer
   const fullAddress = `${address.street}, ${address.city}, ${address.state }${address.zipcode}`
}
```

*AFTER* 
```
const address = data?.customer?.address
const fullAddress = `${address?.street}, ${address?.city}, ${address?.state } ${address?.zipcode}`
```

### Why use TypeScript?

## Getting Started

1. cd into root directory 

2. run `npm install` 

3. run `npm run watch-ts` - this starts the TypeScript compiler

4. open up a different terminal and cd into the same project. Run `npm run watch-node` - this starts the node server
