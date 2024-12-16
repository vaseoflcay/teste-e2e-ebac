import produtosPage from "../support/page_objects/produtos-page";

import checkoutPage from "../support/checkout-page";

const cupons=require('../fixtures/cupons.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/minha-conta')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações

      //it('Login com sucesso usando Comando customizado', () => {//optei por fazer o login com Commands
        cy.login(dadosLogin.usuario, dadosLogin.senha)
        cy.get('.page-title').should('contain', 'Minha conta')
    //});

    // depois do login, vamos buscar os produtos e adiciona-los no carrinho


    //it('Deve buscar e adicionar o primeiro produto no carrinho',() => {//optei por page objects para selecionar produto
        var qtd1=1
        produtosPage.buscarProduto('Atlas Fitness Tank')
        produtosPage.addProdutoCarrinho4('M','Blue', qtd1)
        cy.get('.woocommerce-message').should('contain', qtd1 + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho. ')
  
    //});

    //it('Deve buscar e adicionar o segundo produto no carrinho',() => {//optei por page objects para selecionar produto
        var qtd2=2
        produtosPage.buscarProduto('Vulcan Weightlifting Tank')
        produtosPage.addProdutoCarrinho4('XL','Black', qtd2)
        cy.get('.woocommerce-message').should('contain', qtd2 + ' × “Vulcan Weightlifting Tank” foram adicionados no seu carrinho. ')
  
    //});

    //it('Deve buscar e adicionar o terceiro produto no carrinho',() => {//optei por page objects para selecionar produto
        var qtd3=3
        produtosPage.buscarProduto('Cronus Yoga Pant')
        produtosPage.addProdutoCarrinho4('32','Red', qtd3)
        cy.get('.woocommerce-message').should('contain', qtd3 + ' × “Cronus Yoga Pant” foram adicionados no seu carrinho. ')
  
       
    //});

    //it('Deve buscar e adicionar o quarto produto no carrinho',() => {//optei por page objects para selecionar produto
       var qtd4=4
        produtosPage.buscarProduto('Sol Active Short')
        produtosPage.addProdutoCarrinho4('36','Green', qtd4)
        cy.get('.woocommerce-message').should('contain', qtd4 + ' × “Sol Active Short” foram adicionados no seu carrinho. ')
  
   // });



   //it('Pode adicionar um cumpom de desconto e deve concluir a compra', () => {

    cy.get('#coupon-code').type(cupons.cupom1).click()
    cy.get('.checkout-button').click()

   //});

   //it('Deve preencher os detalhes do faturamento', () => {
    checkoutPage.dadosFaturamento('luis','marques','brasil','av jatoba 988','Mato Grosso','78520000','12992116477','luisgmarques789@gmail.com')
   //});

   //it('Deve selecionar pagamento com cheque', () => {
    cy.get('#payment_method_cheque').click()
    cy.get('#payment_box payment_method_cheque').should('contain','Envie seu cheque para Nome da loja,')

   //});

   //it('Deve selecionar pagamento com transferencia bancaria', () => {
    cy.get('#payment_method_bacs').click()
    cy.get('#payment_box payment_method_bacs').should('have.text','Faça seu pagamento diretamente em nossa conta bancária.')
   //});

   //it('Deve selecionar os termos e condições do site',() =>{

cy.get('.woocommerce-form__input woocommerce-form__input-checkbox input-checkbox').click()

   //})

   //it('deve selecionar o botao de "finalizar compra e ser validado"',() =>{

    cy.get('woocommerce_checkout_place_order').click()
    cy.get('.woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received').should('contain','Obrigado. Seu pedido foi recebido.')
    

//})



      
  });


})