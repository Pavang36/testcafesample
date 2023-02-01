import { Selector } from 'testcafe';

const hovereg=Selector('a').withText('Explore')
const var1=Selector('select#preferred-interface')
const var2=Selector('option').withText('Both')
fixture`Getting Started`
    .page`https://www.youtube.com/`;

test('My first test', async t => {
    await t

    .hover(hovereg)
    .wait(3000)
})

test
.page`https://devexpress.github.io/testcafe/example`
('My 2nd test', async t => {
    await t
   
    .click(var1)
    .wait(3000)
    .click(var2)
    .wait(3000)
})