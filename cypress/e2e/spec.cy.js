describe('Download and delete file', () => {
  it('should work', () => {
    cy.visit('https://the-internet.herokuapp.com/download');
    cy.deleteDownloadsFolder();

    cy.contains('a', 'person.png').click();
    cy.verifyDownload('person.png');
  });
});
