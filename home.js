import { Selector } from "testcafe";

class HomePage {

  constructor() {

    this.registerlink = Selector("li").child("a").withAttribute("class","ico-register");
  }

}

export default new HomePage();