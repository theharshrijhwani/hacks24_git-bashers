import React, { useState } from "react";
import axios from "axios";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    address: "",
    budget: "",
    apartmentType: "",
    preferredStyle: "",
    deadline: "",
    includeFurniture: false,
    requirements: [""],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using the formData
    const projectName = document.getElementById("projectName");
    const address = document.getElementById("address");
    const budget = document.getElementById("budget");
    const apartmentType = document.getElementById("apartmentType");
    const prefStyle = document.getElementById("preferredStyle");
    const deadline = document.getElementById("deadline");
    const includeFurniture = document.getElementById("includeFurniture");
    console.log(includeFurniture.value);
    console.log(preferredStyle.value);
    // const deadline = document.getElementById("deadline");

    const data = {
      user_id: localStorage.getItem("id"),
      project_name: projectName.value,
      address: address.value,
      budget: budget.value,
      type_of_apartment: apartmentType.value,
      preferred_style: prefStyle.value,
      deadline: deadline.value,
      include_furniture: includeFurniture.value,
      requirements: formData.requirements,
    };

    axios
      .post("http://localhost:8008/projects/new", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.console.log("Form Data Submitted:", formData);
  };

  const handleAddRequirement = () => {
    setFormData((prevData) => ({
      ...prevData,
      requirements: [...prevData.requirements, ""],
    }));
  };

  const handleRequirementChange = (index, value) => {
    setFormData((prevData) => {
      const updatedRequirements = [...prevData.requirements];
      updatedRequirements[index] = value;
      return { ...prevData, requirements: updatedRequirements };
    });
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            UserSpaces
          </h1>
          <p className="text-white mt-1">
            From conceptualization to implementation, we bring your vision to
            life.
          </p>
          {/* <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button> */}
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white max-w-md w-full p-6" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-semibold mb-4">Project Details</h2>

          {/* Project Name */}
          <div className="mb-4">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-600"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Budget */}
          <div className="mb-4">
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-600"
            >
              Budget
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Type of Apartment */}
          <div className="mb-4">
            <label
              htmlFor="apartmentType"
              className="block text-sm font-medium text-gray-600"
            >
              Type of Apartment
            </label>
            <select
              id="apartmentType"
              name="apartmentType"
              value={formData.apartmentType}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="">Select Type</option>
              <option value="bunglow">Bunglow</option>
              <option value="flat">Flat</option>
            </select>
          </div>

          {/* Preferred Style */}
          <div className="mb-4">
            <label
              htmlFor="preferredStyle"
              className="block text-sm font-medium text-gray-600"
            >
              Preferred Style
            </label>
            <select
              id="preferredStyle"
              name="preferredStyle"
              value={formData.preferredStyle}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="">Select Style</option>
              <option value="Minimalist">Minimalist</option>
              <option value="Modern">Modern</option>
              <option value="Traditional">Traditional</option>
            </select>
          </div>

          {/* Deadline */}
          <div className="mb-4">
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-600"
            >
              Deadline (No of Days)
            </label>
            <input
              type="number"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Include Furniture */}
          <div className="mb-4">
            <label htmlFor="includeFurniture" className="flex items-center">
              <input
                type="checkbox"
                id="includeFurniture"
                name="includeFurniture"
                checked={formData.includeFurniture}
                onChange={handleInputChange}
                className="mr-2"
              />
              Include Furniture
            </label>
          </div>

          {/* Requirements */}
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-600"
          >
            Requirements
          </label>
          {formData.requirements.map((requirement, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                id={`requirement-${index}`}
                name={`requirement-${index}`}
                value={requirement}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
                className="mt-1 p-2 flex-1 border rounded-md mr-2"
                required
              />
              {index === formData.requirements.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddRequirement}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Add
                </button>
              )}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
