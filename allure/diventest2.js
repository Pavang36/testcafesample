import { Selector } from "testcafe";
const dataset=require('../allure/tcafe2/data2.json')
const department=Selector('div').withText('Select Option')
const location=Selector('div').withAttribute('class','pg-select-selection__placeholder')

fixture`Getting Started`
dataset.forEach(data => {
    test.page`https://hubble.miraclesoft.com/`
(`Login page`, async t =>{
await t
.maximizeWindow()
.typeText(Selector('input#userName'),data.username)
.typeText(Selector('input#password'),data.password)
.click(Selector("button.btn btn-primary m-light-blue-bg m-t-10"))
.click(department,data.department)
.click(location,data.WorkLocation)
})
});