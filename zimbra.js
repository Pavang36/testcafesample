import { Selector } from 'testcafe';

const user=Selector("#username")
const pswd=Selector("#password")
const signin=Selector("#loginButton")
const newmsg=Selector("#zb__NEW_MENU_title")
const to=Selector("#DWT46")
const cc=Selector("#DWT49")
const subj=Selector("td").child("input").withAttribute('class',"subjectField")
const attach=Selector("tr").child("td").withAttribute("class",'ZWidgetTitle')
fixture`Getting Started`
    .page`https://mapi.miraclesoft.com//`;

test('My first test', async t => {
    await t
    .maximizeWindow()
    .typeText(user,'pgedela@miraclesoft.com')
    .typeText(pswd,'Pavan143@@')
    .click(signin)
    .click(newmsg)
    .typeText(to,'pgedela')
    .typeText(cc,'pgedela')
    .typeText(subj,'leave')
    .debug()
    .click(attach)
    .wait(3000)
})