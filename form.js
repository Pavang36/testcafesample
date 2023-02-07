import { ClientFunction, Selector } from 'testcafe';
import Homepage from '../tcafe/home';
import registerpage from '../tcafe/register';
import Colors from 'colors'

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'moataz'+randomNumber+'@test.com';

fixture`Registration Fixture`
    .page(URL);
 
test('Assert home page', async t => {
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
});

test('User Registration and Login Test',async t => {
 await t
  .maximizeWindow()
     .click(Homepage.registerlink)
     .expect(getURL()).contains('register')
     .click(registerpage.GenderOption)
     
    await t.typeText(registerpage.LastName,'Nabil');
     await registerpage.selectDay('5');
     await registerpage.selectMonth('November');
     await registerpage.selectYear('1983');
     await t
     .typeText(registerpage.Email,userEmail)
     .typeText(registerpage.Password,'123456')
     .typeText(registerpage.ConfirmPassword,'123456')
     .click(registerpage.RegisterButton)
     .wait(3000)
     .expect(registerpage.firsterrmsg.exists).ok()
     console.log("hii")
    //  .expect(registerpage.SuccessfullMessage.exists).ok()
})