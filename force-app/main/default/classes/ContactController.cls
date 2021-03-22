public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContacts()
    {
        return [SELECT FirstName, LastName, Email FROM Contact ORDER BY FirstName];
    }
}
