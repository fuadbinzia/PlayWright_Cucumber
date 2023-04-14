import {Given, Then} from "@cucumber/cucumber"
import {PageId} from "../env/global"
import { navigateToPage } from "../support/navigation-behavior";

Given(
    /^I am on the "([^"]*)" page$/,
    async function(pageId: PageId) {
        const {
            screen: {page},
            globalVariables,
            globalConfig,
        } =this;

        console.log(`I am on the ${pageId} page`);

        globalVariables.currentScreen = pageId;

        await navigateToPage(page,pageId, globalConfig)
    })

Then(
    /^the contacts header should contain the test Contacts$/, function () {

    });