import { Selector } from "testcafe";
const dataset=require('../allure/tcafe1/data1.json')
const txt=Selector('tr').child('td').withText('To view a conversation, click on it.')

fixture`Getting Started`
dataset.forEach(data => {
    test.page`https://mapi.miraclesoft.com//`
(`Login page - ${data.expectedresult}`, async t =>{
await t
.maximizeWindow()
.typeText(Selector('input#username'),data.username)
.typeText(Selector('input#password'),data.password)
.click('button#loginButton')

t.expect(txt,data.expectedresult)
})

});