class ProductManager{
    constructor (){
        this.products = []
        this.id = 1
    };
    addProduct(title, description, price, thumbnail, code, stock){

        
        if (!title || !description || !price || !thumbnail || !code || !stock){
                throw new Error ("todos los campos tienen que tener datos")     
        }
        
        let codes = this.products.map(function(eachproduct) {
            return eachproduct.code
        })

        for (let i=0; i < codes.length; i++){
            if (codes[i] === code) {
                throw new Error (`El codigo "${code}" ya existe`)

            }
        }

        let product = {
            id: this.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        
        this.products.push(product)
        this.id++
        return product
    };

    getProducts() {
        return this.products
    } 


    getProductById(id) {
        let idproducto = undefined

            for (let i=0; i < this.products.length; i++){
                 if (this.products[i].id === id){
                     idproducto = this.products[i]
                      break
                     }
                 }
        if (!idproducto){
         throw new Error(`Not found el producto id = ${id}`)
        }
        return idproducto
    }
}

//prueba git push