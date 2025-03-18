function Category() {

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="whatsapp">Add A Category :</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
            <label htmlFor="category">Remove Category:</label>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              {[...new Set(products.map((product) => product.category))].map(
                (category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              )}
            </select>
            <button type="submit">Update Business</button>
            <button type="button" onClick={() => setEditProduct(null)}>
              Cancel
            </button>
          </form>
        </div>
    )
}

export default Category
