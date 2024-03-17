import React, { useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";
import style from "./styles";
import HomeBanner from "../../common/HomeBanner";
import { useForm } from "react-hook-form";
import TextField from "../../common/TextField";
import TextArea from "../../common/TextArea";
import { useMutation } from "react-query";
import fetcher from "../../../dataProvider";
import SnackBar from "../../common/Snackbar";
import { useRouter } from "next/router";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/monokai-sublime.css";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import go from "highlight.js/lib/languages/go";
import java from "highlight.js/lib/languages/java";
import FileUploader from "../../common/FileUploader";
import { API_BASE_URL } from "../../../constant/appConstants";
import { ErrorMessage } from "../../../lib/ErrorMessage";

const validationRules = {
  name: { required: "Name is required" },
  blogTag: { required: "Blog Tag is required" },
  blogTitle: { required: "Blog Title is required" },
  blogSubTag: { required: "Blog SubTag is required" },
  description: { required: "Description is required" },
};

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("go", go);
hljs.registerLanguage("java", java);

const BlogCreate = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    setValue,
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  const [imageUploadUrl, setImageUploadUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [snackbar, setSnackbar] = useState({
    show: false,
    status: "",
    message: "",
  });

  const codeSnippetRef = useRef(null);

  useEffect(() => {
    if (codeSnippetRef.current) {
      hljs.highlightElement(codeSnippetRef.current);
    }
  }, []);

  const { mutate: getCreateBlogContentData } = useMutation(
    (BlogContentDataObj) =>
      fetcher.post(`${API_BASE_URL}/v1/blog/create-blog-content`, BlogContentDataObj),
    {
      onSuccess: ({ data }) => {
        setSnackbar({
          show: true,
          status: "success",
          message: "Blog New Entry created successfully.",
        });
        router.push(`/`);
        setIsSubmitting(false);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
        setIsSubmitting(false);
      },
    }
  );

  const onSubmit = (data) => {
    setIsSubmitting(true);
    let BlogContentDataObj = data;
    const blogSubTags = BlogContentDataObj.blogSubTag.split(",").map((tag) => tag.trim());
    BlogContentDataObj.blogSubTag = blogSubTags;
    BlogContentDataObj.user = "jupiter";
    getCreateBlogContentData(BlogContentDataObj);
  };

  return (
    <>
      <HomeBanner />
      <div className="container">
        <div className="row mt-5">
          <Box sx={style.formSection}>
            <h1>Blog Modal</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <TextField
                    label="Name"
                    name={"name"}
                    placeholder="Blog Name"
                    register={register}
                    errors={errors}
                  />
                  {errors?.name && (
                    <span
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "auto",
                        left: "0",
                      }}
                    >
                      {errors?.name?.message}
                    </span>
                  )}
                </Box>

                <Box sx={style.formgroup}>
                  <FileUploader
                    label="Blog Image Upload (csv) *"
                    name={"image"}
                    placeholder="FIle Upload (csv)"
                    register={register}
                    errors={errors}
                    setValue={setValue}
                  />
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <TextField
                    label="Blog Tag"
                    name={"blogTag"}
                    placeholder="Blog Tag"
                    register={register}
                    errors={errors}
                  />
                  {errors?.blogTag && (
                    <span
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "auto",
                        left: "0",
                      }}
                    >
                      {errors?.blogTag?.message}
                    </span>
                  )}
                </Box>
                <Box sx={style.formgroup}>
                  <TextField
                    label="Blog Title"
                    name={"blogTitle"}
                    placeholder="Blog Title"
                    register={register}
                    errors={errors}
                  />
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <TextField
                    label="Blog SubTag (Separate by commas)"
                    name={"blogSubTag"}
                    placeholder="Blog SubTag"
                    register={register}
                    errors={errors}
                  />
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <TextArea
                    label="Blog description"
                    name="description"
                    register={register}
                    errors={errors}
                  />
                </Box>
              </Box>
              <Box sx={style.buttongroup}>
                <Button type="submit" disabled={isSubmitting}>
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </div>
        {snackbar.show && <SnackBar {...snackbar} onClose={setSnackbar} />}
        {errors?.name && <ErrorMessage message={errors.name.message} />}
      </div>
    </>
  );
};

export default BlogCreate;
