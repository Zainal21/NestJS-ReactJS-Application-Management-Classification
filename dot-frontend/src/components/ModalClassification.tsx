import React, { useEffect, useState } from "react";
import { Problem } from "../types/problem";
import { ClassificationData } from "../types/classification";

interface FormData {
  classificationName: string;
  answer: string;
  problem: Problem;
}

interface ModalClassificationProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  initialValues: any;
  problems: Problem[];
  resetFormData: () => void;
  selectedClassification: ClassificationData | null;
}

const ModalClassification = ({
  isOpen,
  onClose,
  onSubmit,
  initialValues,
  problems,
  selectedClassification,
}: ModalClassificationProps) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // side effect
  useEffect(() => {
    if (selectedClassification) {
      setFormData({
        classificationName: selectedClassification.classificationName,
        answer: selectedClassification.answer,
        problem: {
          id: selectedClassification.problem.id,
          problemName: selectedClassification.problem.problemName,
        },
      });
    } else {
      setFormData(initialValues);
    }
  }, [selectedClassification]);

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        classificationName: "",
        answer: "",
        problem: { id: "", problemName: "" },
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity text-left ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg z-50 relative w-4/6">
        <button
          className="absolute top-2 right-2 text-gray-600 p-3"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Form Classifications Data
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="classificationName"
              className="block text-sm font-medium text-gray-700"
            >
              Classification Name
            </label>
            <input
              type="text"
              id="classificationName"
              name="classificationName"
              value={formData.classificationName}
              onChange={(e) => handleChange(e)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="answer"
              className="block text-sm font-medium text-gray-700"
            >
              Answer
            </label>
            <textarea
              id="answer"
              name="answer"
              value={formData.answer}
              onChange={(e) => handleChange(e)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="problem"
              className="block text-sm font-medium text-gray-700"
            >
              Problem
            </label>
            <select
              id="problem"
              name="problem"
              value={formData.problem.id}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            >
              <option value="">Select a problem</option>
              {problems.map((problem) => (
                <option key={problem.id} value={problem.id}>
                  {problem.problemName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
            >
              {selectedClassification ? "Update" : "Save"}
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalClassification;
