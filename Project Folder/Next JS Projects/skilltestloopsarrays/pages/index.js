import React, { useState } from "react";

export default function Home() {
  const products = ["Garden Trowel", "Yard Spade", "Planting Spade"];
  const productNumber = ["gt200", "yard-1", "plant-4"];
  const selectionFactors = ["Price", "Quality", "Reviews", "Pictures"];
  const references = ["Field and Stream", "Home and Garden", "Plant Life"];

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedFactor, setSelectedFactor] = useState("");
  const [selectedReferences, setSelectedReferences] = useState([]);

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  const handleFactorChange = (e) => {
    setSelectedFactor(e.target.value);
  };

  const handleReferenceChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedReferences((prev) => [...prev, value]);
    } else {
      setSelectedReferences((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Product:", selectedProduct);
    console.log("Selected Factor:", selectedFactor);
    console.log("Selected References:", selectedReferences);
  };

  return (
    <div>
      <h1>WDV221 Intro Javascript</h1>
      <h2>Skill Test - Loops and Arrays</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            1. Which product did you purchase?
            <select
              value={selectedProduct}
              onChange={handleProductChange} // Corrected line
            >
              <option value="">Select a product</option>
              {products.map((product, index) => (
                <option key={productNumber[index]} value={productNumber[index]}>
                  {product}
                </option>
              ))}
            </select>
            <br />
            <br />
            2. Please choose the primary factor in why you purchased our
            product:
            <br />
            {selectionFactors.map((factor) => (
              <label key={factor}>
                <input
                  type="radio"
                  name="selectionFactor"
                  value={factor}
                  checked={selectedFactor === factor}
                  onChange={handleFactorChange}
                />
                {factor}
                <br />
              </label>
            ))}
            <br />
            3. How did your hear about us? Please select all that apply:
            <br />
            {references.map((reference) => (
              <label key={reference}>
                <input
                  type="checkbox"
                  value={reference}
                  checked={selectedReferences.includes(reference)}
                  onChange={handleReferenceChange}
                />
                {reference}
                <br />
              </label>
            ))}
          </label>
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
          <br />
        </fieldset>
      </form>
      <h3>Instructions:</h3>
      <p>
        1. Use the products array and the productNumber array to dynamically
        populate the select menu. Include the productNumbers as value
        attributes.
      </p>
      <p>
        2. Use the selectionFactors array to dynamically create a set of radio
        buttons.
      </p>
      <p>
        3. Use the references array to dynamically create a set of check boxes.
      </p>
      <p>&nbsp;</p>
    </div>
  );
}
