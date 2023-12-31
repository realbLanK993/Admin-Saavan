export default function UserModal({ setModal, setUserDetails, userDetails }) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1]">
        <div className="bg-primary text-primary-content w-full lg:w-1/2 h-1/2 lg:h-1/2 flex flex-col justify-center items-center m-4 rounded-xl">
          <div className="flex flex-col justify-between items-center w-full p-4 gap-4">
            <h1 className="text-2xl font-bold">Add a field</h1>
            <div className="flex flex-col gap-2">
              <input
                id="field_name"
                type="text"
                className="outline-none p-4 bg-primary text-primary-content w-full border-2 border-secondary"
                placeholder="Input Name"
              />
              <input
                id="placeholder"
                type="text"
                className="outline-none p-4 bg-primary text-primary-content w-full border-2 border-secondary"
                placeholder="Input Placeholder"
              />
              <select
                id="type"
                defaultValue={"text"}
                className="outline-none p-4 bg-primary text-primary-content w-full border-2 border-secondary">
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="url">URL</option>
                <option value="email">Email</option>
                <option value="textarea">TextArea</option>
              </select>
            </div>
            <div className="flex gap-16">
              <button
                onClick={() => {
                  setModal(false);
                }}
                className="p-2 px-4 bg-red-500">
                Cancel
              </button>
              <button
                onClick={() => {
                  if (document.getElementById("placeholder").value === "")
                    return;
                  if (document.getElementById("field_name").value === "")
                    return;
                  setModal(false);
                  let newField = {
                    name: document.getElementById("field_name").value,
                    placeholder: document.getElementById("placeholder").value,
                    type: document.getElementById("type").value,
                    options: [],
                  };
                  setUserDetails([...userDetails, newField]);
                }}
                className="p-2 px-4 bg-green-500">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
