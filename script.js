
const products=[
{
name:'Laptop',
price:'₹50,000',
img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600'
},
{
name:'Headphones',
price:'₹2,500',
img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'
},
{
name:'Smart Watch',
price:'₹5,000',
img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600'
},
{
name:'Smartphone',
price:'₹25,000',
img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600'
}
];

const container=document.getElementById('productContainer');
const search=document.getElementById('search');

function render(data){
if(!container) return;
container.innerHTML=data.map(p=>`
<div class="card">
<img src="${p.img}" alt="${p.name}">
<h3>${p.name}</h3>
<p class="price">${p.price}</p>
<button>Add to Cart</button>
</div>`).join('');
}

if(search){
render(products);
search.addEventListener('input',()=>{
render(products.filter(p=>p.name.toLowerCase().includes(search.value.toLowerCase())));
});
}
