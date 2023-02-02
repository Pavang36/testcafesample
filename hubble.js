import { Selector } from 'testcafe';

const login=Selector('#userName')
const pswd=Selector('#password')
// .takeScreenshot('2ndtimg.png')
const next=Selector('button').withText('Sign in')
const hiddentext =Selector('button').filterHidden();
const apreview=Selector('a').withText('Appraisal Reviews')
const dash=Selector('a').withText('Dashboard')
const empsearch=Selector('span').withText('Employee Search')
const searchfield=Selector('label').withText('EMPLOYEE SEARCH')
// const search=Selector('#Search by Name, Email or Mobile-input-group')

const search = Selector('input').withAttribute('placeholder','Search by Name, Email or Mobile')
const seachIcon = Selector('span').child('i').withAttribute('class','fa fa-search ng-star-inserted')
const department =Selector('ul').child('li').withAttribute('class','pg-select-search pg-select-search--inline')
const selectoption =Selector('ul').child('li').withText('Executive Board')
// const selectoption1=Selector('ul').child('li').withText('Marketing')
 const location =Selector('label').withText('WORK LOCATION')
 const selectlocation=Selector('div').withAttribute('class','pg-select-selection__placeholder')


fixture`Getting Started`
    .page`https://hubble.miraclesoft.com/`;

test('My first test', async t => {
    await t
    .maximizeWindow()
   .typeText(login,'pgedela',{speed:1})
   .typeText(pswd,'Pavan143@')
   .click(next)
//    .expect(hiddentext.value).eql("Your username (or) password is incorrect, please check and try again!")
//     .wait(3000)
    .click(apreview)
    .click(dash)
    .click(empsearch)
    .hover(searchfield)
    .typeText(search,'juppada',{speed:1})
    // .click(location)
    // .click(selectlocation)
    // .wait(3000)
     .click(department)
    .click(selectoption)
     .wait(3000)
    .click(seachIcon)
     .wait(3000)
})