export type ResponseItemProps = {
    title: string
    price: number
    category: string
    onDelete?: (id: string) => void
  }
  
  export default function ResponseItem(props: ResponseItemProps) {
    const { title, price, category, onDelete } = props
  
    function handleDelete() {
      onDelete?.(title) // Calls the onDelete function if it exists, passing the id as an argument
    }
  
    return (
      <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
          {title}
        </td>
        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
          {price}
        </td>
        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
          {category}
        </td>
        {/* Display a delete button if onDelete prop is provided */}
        {onDelete ? (
          <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
            <button
              // Alternative way to call onDelete inline
              // onClick={() => {
              //   onDelete(id)
              // }}
              onClick={handleDelete} // Call the handleDelete function when the button is clicked
              className="text-red-300"
            >
              Slett
            </button>
          </td>
        ) : null}
      </tr>
    )
  }
  