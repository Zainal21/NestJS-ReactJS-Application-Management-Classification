import { useEffect, useState } from "react";
import { getToken } from "../../utils/token";
import {
  createClassification,
  deleteClassification,
  getClassifications,
  updateClassification,
} from "../../services/classifications.service";
import { showErrorAlert, showSuccessAlert } from "../../utils/swal";
import { ClassificationData } from "../../types/classification";
import { ClasificationContent } from "../../components";
import ModalClassification from "../../components/ModalClassification";
import { Problem } from "../../types/problem";
import { getProblems } from "../../services/problem.service";
import Swal from "sweetalert2";
import { handleError } from "../../utils/axiosError";

interface FormData {
  classificationName: string;
  answer: string;
  problem: Problem;
}

export default function ClassificationPage() {
  // initialze state
  const [selectedClassification, setSelectedClassification] =
    useState<ClassificationData | null>(null);

  const [classifications, setClassifications] = useState<ClassificationData[]>(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const initialFormData = {
    classificationName: "",
    answer: "",
    problem: { id: "", problemName: "" },
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [problems, setProblems] = useState<Problem[]>([]); // assuming you fetch problems from somewhere

  // data fetching
  const fetchAllData = () => {
    const token = getToken();
    Promise.all([getClassifications(token), getProblems(token)])
      .then(([classificationsRes, problemsRes]) => {
        setClassifications(classificationsRes.data.data);
        setProblems(problemsRes.data.data);
      })
      .catch((error) => {
        const message = error.response
          ? error.response.data.message
          : "Please try again, there problem when send data to server";
        showErrorAlert(message);
      });
  };

  // side effect
  useEffect(() => {
    fetchAllData();
  }, []);

  // event handler
  function handleDeleteClassification(id: string) {
    Swal.fire({
      icon: "warning",
      title: "Are you sure ?",
      text: "Do you want to delete the data?",
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        const token = getToken();
        deleteClassification(token, id)
          .then((_) => {
            showSuccessAlert(
              "Classification deleted successfully",
              fetchAllData
            );
          })
          .catch((error) => {
            handleError(error);
          });
      }
    });
  }

  const handleUpdateClassification = (
    token: string | null,
    updatedData: FormData
  ) => {
    let problemIdStored;

    const { id } = selectedClassification!;
    const problemIdAsString = updatedData.problem;
    if (typeof problemIdAsString == "object") {
      problemIdStored = problemIdAsString.id;
    } else {
      problemIdStored = problemIdAsString;
    }

    updateClassification(token, id, {
      classificationName: updatedData.classificationName,
      answer: updatedData.answer,
      problemId: problemIdStored,
    })
      .then(() => {
        showSuccessAlert("Classification successfully updated", () => {
          fetchAllData();
          setIsModalOpen(false);
          setSelectedClassification(null);
        });
      })
      .catch((error: any) => {
        handleError(error);
      });
  };

  const handleEditClassification = (classification: ClassificationData) => {
    setSelectedClassification(classification);
    setIsModalOpen(true);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setFormData({
      classificationName: "",
      answer: "",
      problem: { id: "", problemName: "" },
    });
    setIsModalOpen(false);
  };

  const handleCreateClassification = (token: string | null, data: FormData) => {
    let problemIdStored;

    const problemIdAsString = data.problem;
    if (typeof problemIdAsString == "object") {
      problemIdStored = problemIdAsString.id;
    } else {
      problemIdStored = problemIdAsString;
    }

    createClassification(token, {
      classificationName: data.classificationName,
      answer: data.answer,
      problemId: problemIdStored,
    })
      .then(() => {
        showSuccessAlert("New Classification successfully added", () => {
          fetchAllData();
          handleCloseModal();
        });
      })
      .catch((error: any) => {
        showErrorAlert(
          error.response ? error.response.data.message : "An error occurred"
        );
      });
  };

  const handleSubmit = (data: FormData) => {
    const token = getToken();
    if (selectedClassification) {
      handleUpdateClassification(token, data);
    } else {
      handleCreateClassification(token, data);
    }
  };

  const resetFormData = () => {
    setFormData(initialFormData);
  };

  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <button
            onClick={handleOpenModal}
            className="w-1/2 px-5 my-2 py-2 text-sm text-gray-200 transition-colors duration-200 ml-auto bg-blue-500 border rounded-lg sm:w-auto -800  hover:bg-blue-600 "
          >
            Add Item
          </button>
        </div>
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 text-bold">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 "
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 "
                      >
                        Classification Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 "
                      >
                        Problem
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 "
                      >
                        Answer
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 "
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200  ">
                    {classifications.length > 0 ? (
                      classifications.map((item, index) => (
                        <ClasificationContent
                          key={item.id}
                          number={index + 1}
                          classificationName={item.classificationName}
                          answer={item.answer}
                          problemName={item.problem.problemName}
                          id={item.id}
                          handleDelete={() =>
                            handleDeleteClassification(item.id)
                          }
                          handleEdit={() => handleEditClassification(item)}
                        />
                      ))
                    ) : (
                      <>
                        <tr>
                          <td
                            className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap text-center"
                            colSpan={5}
                          >
                            No Data Available
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ModalClassification
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          initialValues={formData}
          problems={problems}
          onSubmit={handleSubmit}
          resetFormData={resetFormData}
          selectedClassification={selectedClassification}
        />
      </section>
    </>
  );
}
