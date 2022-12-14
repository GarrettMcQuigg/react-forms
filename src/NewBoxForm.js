import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewBoxForm.css";

const NewBoxForm = ({ newBox }) => {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const getInput = (e) => {
    e.preventDefault();
    newBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={getInput}>
        <div>
          <label htmlFor="height">Height (px) </label>
          <input
            onChange={handleChange}
            id="height"
            type="text"
            name="height"
            value={formData.height}
          />
        </div>
        <div>
          <label htmlFor="width">Width (px) </label>
          <input
            onChange={handleChange}
            id="width"
            type="text"
            name="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color </label>
          <input
            onChange={handleChange}
            id="backgroundColor"
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
          />
        </div>
        <button>Create Box</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
