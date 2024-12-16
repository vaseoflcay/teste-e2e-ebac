class checkoutPage{

dadosFaturamento(nomeCliente,sobrenomeCliente,pais,endereco,cidade,estado,cep,telefone,email){
    cy.get('#billing_first_name').type(nomeCliente)
    cy.get('#billing_last_name').type(sobrenomeCliente)
    cy.get('#select2-billing_country-container').type(pais)
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_city').type(cidade)

    cy.get('.select2-selection__arrow').click()
    cy.get('.select2-search__field').type(estado).type('{enter}')

    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)

}













}

export default new checkoutPage