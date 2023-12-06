import React from "react";
import { useMutation } from "react-query";
import fetcher from "../../../dataProvider";
import { API_BASE_URL } from "../../../constant/appConstants";

const FileUploader = ({ label, name, setValue }) => {
  const { mutate: getBlogImageUploadObj } = useMutation(
    (formData) => fetcher.post(`${API_BASE_URL}/v1/blog/upload-file`, formData),
    {
      onSuccess: (data) => {
        setValue(name, data?.imageUrl);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const handleFileSelection = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    getBlogImageUploadObj(formData);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        id="choose-file"
        onChange={(event) => handleFileSelection(event)}
        required
      />
    </div>
  );
};

export default FileUploader;
