// const Products = require('../container/containerProducts.js');
const Products = require('../container/containerFirebase.js');

const products = new Products();

//Get all products or product selected
const getProducts = async (req, res) => {
	if (req.params.id == undefined) return res.json(await products.getAll());
	const product = await products.getById(req.params.id);
	console.log(product);
	if (!product) return res.status(404).send({ message: 'El ID no pertenece a un producto listado' });
	res.json(product);
}

//Add product
const addProduct = async (req, res) => {
	const { name, description, code, pic, price, stock } = req.body;
	await products.save({ name, description, code, pic, price, stock });
	res.json({ message: 'Producto agregado' });
}

//Update product
const updateProduct = async (req, res) => {
	await products.updateProduct(req.params.id, req.body);
	res.json({ message: 'Producto actualizado' });
}

//Delete product
const deleteProduct = async (req, res) => {
	await products.deleteById(req.params.id);
	res.json({ message: 'Producto eliminado' });
};

module.exports = { products, getProducts, addProduct, updateProduct, deleteProduct };