# TagChecker
FrontEnd and BackEnd

### Opening Words
I wanted to go an extra mile and added a front-end as a bonus :) :) :)

## Technology used
BackEnd
* NodeJs
* Express
* Ramda - Functional programming JS library
* Joi - property validation

FrontEnd
* React
* Axios
* Styled.Components
* Ant Design - React Component

### Get Started FrontEnd
```
cd client
npm ci
npm audit
npm start
```

### Get Started BackEnd
```
cd api
npm ci
npm audit
npm start
```

### Optional run test in the backend
```
npm run lint
npm run test
```

## Endpoint
Get all the available products
```
POST http://localhost:9000/tag/check-tag
body: {
    htmlStr: '<B>This is a sentence in boldface</B>'
}
```
