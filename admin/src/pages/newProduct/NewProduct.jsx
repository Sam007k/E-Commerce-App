import "./newProduct.css";

export default function NewProduct() {
  const [input, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => {
    setInputs(prev=>{
      return {...prev,[e.target.name] : e.target.value }
    })
  }
  const handleCat = (e) => {}

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input  type="file" id="file" onChange={e=> setFile(e.target.files)[0]} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
          name='title'
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
          name='description'
            type="text"
            placeholder="description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name='price' type="text" placeholder="100" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            type="text"
            name='categories'
            placeholder="jeans,skirts"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
