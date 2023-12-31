import { BsXCircleFill } from "react-icons/bs";
export default function TeamDetailsDiv({ index, fields, setFields }) {
  return (
    <>
      <div>
        <div className=" m-1 flex gap-2 flex-col">
          <div className=" flex flex-col border-2 items-center border-secondary">
            <input
              id="name"
              type="text"
              disabled
              className="outline-none p-4 bg-primary text-primary-content w-full border-b-2 border-secondary"
              placeholder="Full Name"
            />
            <div className="flex w-full items-center">
              <label
                className="min-w-[35%] bg-primary text-primary-content p-4 border-r-2 border-secondary"
                htmlFor="email">
                Email
              </label>
              <input
                id="studentemail"
                type="email"
                disabled
                className="outline-none p-4 bg-primary text-primary-content w-full"
                placeholder="Student ID"
              />
            </div>
            {fields &&
              fields.map((detail, ind) => {
                if (detail.type == "textarea") {
                  return (
                    <div
                      key={ind}
                      className="flex flex-col w-full justify-start items-center">
                      <label
                        className="w-full flex justify-between bg-primary text-primary-content border-2 border-secondary"
                        htmlFor="name">
                        <span className="p-4">{detail.name}</span>

                        <div
                          onClick={() => {
                            setFields(fields.filter((_, i) => i !== ind));
                          }}
                          className="bg-red-500 p-4 flex justify-center items-center h-full cursor-pointer">
                          <BsXCircleFill />
                        </div>
                      </label>
                      <textarea
                        className="outline-none p-4 bg-primary text-primary-content w-full border-2 border-t-0 border-secondary "
                        name=""
                        id=""
                        disabled
                        cols="30"
                        placeholder={detail.placeholder}
                        rows="10"></textarea>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={ind}
                      className="flex w-full items-center border-t-2 border-secondary">
                      <label
                        className="min-w-[35%] bg-primary text-primary-content p-4 border-r-2 border-secondary"
                        htmlFor={ind}>
                        {detail.name}
                      </label>
                      <input
                        id="name"
                        type={detail.type}
                        disabled
                        className="outline-none p-4 bg-primary text-primary-content w-full"
                        placeholder={detail.placeholder}
                      />
                      <div
                        onClick={() => {
                          setFields(fields.filter((_, i) => i !== ind));
                        }}
                        className="w-12 h-full flex justify-center items-center cursor-pointer">
                        <BsXCircleFill />
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
}
