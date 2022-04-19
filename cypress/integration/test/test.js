describe('Go to Home Page', () => {
   
    it('contain Title "Buy, sell, and showcase NFTs"', () => {
        cy.visit('https://crypto.com/nft/')
        cy.get('#root').should('include.text', 'Buy, sell, and showcase NFTs')
        cy.get('button[id=onetrust-accept-btn-handler]').should('be.visible').click()
    })

})

describe('Go to Marketplace and check all catalogue button', () => {

    function checkCardAndBack (category){
        cy.get('[data-test-id="nftCard-container"]').first().click()
        cy.get('[data-test-id="nftDetail-tag"]').contains(category)
        cy.get('[data-test-id="back-button"]').click()
        cy.log('checked included tag',category)
        return category
    }

    it('clicking "Market Place"', () => {
        cy.get('[data-test-id="nav-marketplace"]').click()
        cy.url().should('include', '/nft/marketplace')

    })

    it('clicking "Art" button', () => {

        cy.get('[data-test-id="marketplace-category-art-button"]').should('be.visible').click()
        
    })

    it('clicking First Item and contain Art checking tag', () => {

        checkCardAndBack('Art')
      
    })

    it('clicking "Celebrities" button', () => {

        cy.get('[data-test-id="marketplace-category-celebrities-button"]').should('be.visible').click()
            
    })

    it('clicking First Item and checking contain Celebrities tag', () => {

        checkCardAndBack('Celebrities')
    })

    it('clicking "Gaming" button', () => {

        cy.get('[data-test-id="marketplace-category-gaming-button"]').should('be.visible').click()
                
    })

    it('clicking First Item and checking contain Gaming tag', () => {

    
        checkCardAndBack('Gaming')
    })

    it('clicking "Sport" button', () => {

        cy.get('[data-test-id="marketplace-category-sport-button"]').should('be.visible').click()
                    
    })

    it('clicking First Item and checking contain Sport tag', () => {

    
        checkCardAndBack('Sport')
    })

    it('clicking "Music" button', () => {

        cy.get('[data-test-id="marketplace-category-music-button"]').should('be.visible').click()
                        
     })

    it('clicking First Item and checking contain Music tag', () => {

    
        checkCardAndBack('Music')
    })

    it('clicking "Crypto" button', () => {

        cy.get('[data-test-id="marketplace-category-crypto-button"]').should('be.visible').click()
                            
    })

    it('clicking First Item and checking contain Crypto tag', () => {

    
        checkCardAndBack('Crypto')
    })

    it('clicking "Cross chain" button', () => {

        cy.get('[data-test-id="marketplace-category-cross chain-button"]').should('be.visible').click()
                                
    })

    it('clicking First Item and checking Cross chain type', () => {
        cy.get('[data-test-id="nftCard-container"]').first().click()
        cy.get('[data-test-id="listing-chain-type"]').invoke('text').then((text) => {
            expect(text).not.equal('Crypto.org Chain')
        })
        cy.get('[data-test-id="back-button"]').click()
    })

    it('clicking "All" button', () => {

        cy.contains('All').should('be.visible').click()
                                    
    })

describe('Sort by Recently Listed', () => {

    it('clicking "Recently Listed"', () => {

        cy.get('[data-test-id="marketplace-sort-button"]').should('be.visible').click()

        cy.get('[data-test-id="marketplace-sort-recentlyListed"]').should('be.visible').click() 
        

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

describe('Go to Drops Page and Click View Drop', () => {
        it('clicking "Drops"and "View Drops"', () => {
            cy.get('[data-test-id="nav-drops"]').click()
            cy.url().should('include', '/nft/drops')
            cy.wait(1000)
            cy.get('[data-test-id="drop-list-view-drop-button"]').should('be.visible').click()
            //Miami Minted is the latets drops
            cy.get('[data-test-id="drop-title"]').should('have.text','Miami Minted')
        })
    })

describe('Searching in search box', () => {

        it('Search basketball related NFT"', () => {
            cy.get('input[name="searchBox"]')
            .type('basketball')
            .should('have.value', 'basketball')
            .type('{enter}')
            //wait for search result
            cy.wait(2000)
            cy.screenshot('Search-Result')   
        })   


   }) 
})