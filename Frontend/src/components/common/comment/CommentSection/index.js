import React from "react";
import { useForm } from "react-hook-form";
import TextArea from "../../TextArea";
import styles from "../style"; // Add your custom CSS styles here

const BlogReplyPanel = ({ isOpen, onClose }) => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });
  return (
    <div className={isOpen ? styles.panelOpen : styles.panelClosed}>
      {/* Add your reply form here */}
      <form>
        <TextArea
          label="Type your reply here..."
          name="description"
          register={register}
          errors={errors}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close Panel</button>
    </div>
  );
};

export default BlogReplyPanel;
