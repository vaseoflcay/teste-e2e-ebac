class produtosPage {

visitarUrl( ){
        cy.visit('produtos')
    }

buscarProduto(nomeProduto){
    cy.get('[name=s]').eq(1).type(nomeProduto)
    cy.get('.button-search').eq(1).click()

}

addProdutoCarrinho1(tamanho1,cor1,quantidade1){
cy.get('.button-variable-item-'+ tamanho1).click()
cy.get(`.button-variable-item-${cor1}`).click()
cy.get('.input-text').clear().type(quantidade1)
cy.get('.single_add_to_cart_button').click()

}

addProdutoCarrinho2(tamanho2,cor2,quantidade2){
    cy.get('.button-variable-item-'+ tamanho2).click()
    cy.get(`.button-variable-item-${cor2}`).click()
    cy.get('.input-text').clear().type(quantidade2)
    cy.get('.single_add_to_cart_button').click()
    


}

addProdutoCarrinho3(tamanho3,cor3,quantidade3){
    cy.get('.button-variable-item-'+ tamanho3).click()
    cy.get(`.button-variable-item-${cor3}`).click()
    cy.get('.input-text').clear().type(quantidade3)
    cy.get('.single_add_to_cart_button').click()
    


}



addProdutoCarrinho4(tamanho4,cor4,quantidade4){
    cy.get('.button-variable-item-'+ tamanho4).click()
    cy.get(`.button-variable-item-${cor4}`).click()
    cy.get('.input-text').clear().type(quantidade4)
    cy.get('.single_add_to_cart_button').click()
    


}




}

export default new produtosPage()

