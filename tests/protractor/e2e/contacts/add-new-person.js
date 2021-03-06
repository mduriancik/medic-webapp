const commonElements = require('../../page-objects/common/common.po.js'),
			contactPage = require('../../page-objects/contacts/contacts.po.js'),
			helper = require('../../helper'),
			utils = require('../../utils');

describe('Add new person tests : ', () => {
	afterEach(done => {
		utils.resetBrowser();
		done();
	});

	afterAll(utils.afterEach);

	it('should add new person', () => {
		commonElements.goToPeople();
		expect(commonElements.isAt('contacts-list'));
		expect(browser.getCurrentUrl()).toEqual(commonElements.getBaseUrl() + 'contacts/');
		contactPage.addNewDistrict('BedeDistrict');
		contactPage.completeNewPersonForm('Bede');
		helper.waitUntilReady(element(by.css('.card-title')));
		const name = element(by.css('span.name.ng-binding'));
		const district = element(by.tagName('h3'));
		expect(district.getText()).toBe('BedeDistrict');
		expect(name.getText()).toBe('Bede');
	});
});