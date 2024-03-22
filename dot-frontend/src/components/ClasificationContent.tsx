interface ClasificationContentProps {
  id: string;
  number: number;
  classificationName: string;
  answer: string;
  problemName: string;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
}

export default function ClasificationContent(props: ClasificationContentProps) {
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <span>#{props.number}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {props.classificationName}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {props.answer}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {props.problemName}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        <button
          onClick={() => props.handleEdit(props.id)}
          className="w-1/2 px-5 mx-2 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto -800  hover:bg-gray-100 "
        >
          Edit
        </button>
        <button
          className="w-1/2 px-5 mx-2 py-2 text-sm text-gray-200 transition-colors duration-200 bg-red-600 border rounded-lg sm:w-auto -800  hover:bg-red-700 "
          onClick={() => props.handleDelete(props.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
