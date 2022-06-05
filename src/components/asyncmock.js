 const products = [
 { id: "1", name:"iphone 13", price:2500,category:"celular",img:"https://www.apple.com/v/iphone-13/d/images/meta/iphone-13_overview__fpjuzw2ncqmy_og.png",stock:"20", description:"Esta es la descripcion del producto"},
 { id: "2", name:"iphone 12", price:1500,category:"celular",img:"https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg",stock:"10", description:"Esta es la descripcion del producto"},
 { id: "3", name:"iphone x", price:1000,category:"celular",img:"https://www.enter.co/wp-content/uploads/2017/09/iPhone-X-sec.jpg",stock:"15", description:"Esta es la descripcion del producto"},
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    resolve(products)
}, 2000);
    }) 
}