describe('Go to Home Page', () => {
   
    it('contain Title "Buy, sell, and showcase NFTs"', () => {
        cy.visit('https://crypto.com/nft/')
        cy.get('#root').should('include.text', 'Buy, sell, and showcase NFTs')
        cy.get('button[id=onetrust-accept-btn-handler]').should('be.visible').click()
    })

})

describe('Go to Marketplace and check all catalogue button', () => {
    it('clicking "Market Place"', () => {
        cy.get('[data-test-id="nav-marketplace"]').click()
        cy.url().should('include', '/nft/marketplace')

    })

    it('clicking "Art" button', () => {

        cy.get('[data-test-id="marketplace-category-art-button"]').click()
        
    })

    it('clicking "Celebrities" button', () => {

        cy.get('[data-test-id="marketplace-category-celebrities-button"]').click()
            
    })

    it('clicking "Gaming" button', () => {

        cy.get('[data-test-id="marketplace-category-gaming-button"]').click()
                
    })

    it('clicking "Sport" button', () => {

        cy.get('[data-test-id="marketplace-category-sport-button"]').click()
                    
    })

    it('clicking "Music" button', () => {

        cy.get('[data-test-id="marketplace-category-music-button"]').click()
                        
     })

    it('clicking "Crypto" button', () => {

        cy.get('[data-test-id="marketplace-category-crypto-button"]').click()
                            
    })

    it('clicking "Cross chain" button', () => {

        cy.get('[data-test-id="marketplace-category-cross chain-button"]').click()
                                
    })

    it('clicking "All" button', () => {

        cy.contains('All').click()
                                    
    })

describe('Sort by Recently Listed', () => {

    it('clicking "Recently Listed"', () => {

        cy.get('[data-test-id="marketplace-sort-button"]').click()

        cy.get('[data-test-id="marketplace-sort-recentlyListed"]').click() 
        

         })
         
    it('clicking First Item and take screenshot ', () => {

       const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()
      
       let nftName 
        cy.get('[data-test-id="nftCard-asset-name"]').first()
        .then(($nft) => {
            nftName = normalizeText($nft.text())
          })

        cy.get('[data-test-id="nftCard-container"]').first().click()
    

        cy.url().should('include', '/nft/marketplace?sort=listingTime&order=DESC')
      
        cy.get('[data-test-id="listing-asset-name"]').should(($identifier) => {

        const listText = normalizeText($identifier.text())

        expect(listText, 'ID').to.equal(nftName)
          })
        cy.screenshot('Recently-Listed-NFT')      
        })
            
    })

describe('Searching in search box', () => {

        it('Search basketball related NFT"', () => {
            cy.get('input[name="searchBox"]')
            .type('basketball')
            .should('have.value', 'basketball')
            .type('{enter}')
            //wait for search result
            cy.wait(3000)
            cy.screenshot('Search-Result')   
        })   


    }) 
})