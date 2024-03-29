import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe("User can login and logout to GoIT page", () => {

  beforeEach("User can visit to goit page", () => {
    cy.visit("/");
  });

  it("Login and logout user 1", () => {
    cy.fixture("user1.json").then((user) => {
      const useremail = user.email;
      const password = user.password;

      loginPage.loginUser(useremail, password);
      cy.wait(1000);
      homePage.logoutUser();
    });
  });

  it("Login and logout user 2", () => {
    cy.fixture("user2.json").then((user) => {
      const useremail = user.email;
      const password = user.password;

      cy.loginUser(useremail, password);
      cy.wait(1000);
      homePage.logoutUser();
    });
  });
});
